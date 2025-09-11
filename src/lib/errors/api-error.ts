import { NextResponse } from 'next/server'
import { ZodError } from 'zod'
import { type ApiResponse } from '../validation/schemas'
import { logger, type LogContext } from '../logger'

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public details?: unknown
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

export class ValidationError extends ApiError {
  constructor(message: string, details?: unknown) {
    super(400, message, details)
    this.name = 'ValidationError'
  }
}

export class AuthenticationError extends ApiError {
  constructor(message: string = 'Authentication required') {
    super(401, message)
    this.name = 'AuthenticationError'
  }
}

export class AuthorizationError extends ApiError {
  constructor(message: string = 'Insufficient permissions') {
    super(403, message)
    this.name = 'AuthorizationError'
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string = 'Resource not found') {
    super(404, message)
    this.name = 'NotFoundError'
  }
}

export class RateLimitError extends ApiError {
  constructor(message: string = 'Rate limit exceeded') {
    super(429, message)
    this.name = 'RateLimitError'
  }
}

export class ExternalServiceError extends ApiError {
  constructor(
    service: string,
    message: string = 'External service unavailable',
    details?: unknown
  ) {
    super(502, `${service}: ${message}`, details)
    this.name = 'ExternalServiceError'
  }
}

// Enhanced error response with additional context
export interface ErrorResponse extends ApiResponse {
  success: false
  error: string
  code?: string
  details?: unknown
  requestId?: string
}

// Global error handler middleware for API routes
export function withErrorHandler<T extends unknown[]>(
  handler: (req: Request, ...args: T) => Promise<NextResponse>
) {
  return async (req: Request, ...args: T): Promise<NextResponse> => {
    const startTime = Date.now()
    const requestId = req.headers.get('x-request-id') || `req_${Date.now()}_${Math.random().toString(36).slice(2)}`
    
    // Extract user context if available (from withAuth middleware)
    const baseContext: LogContext = {
      requestId,
      userId: (req as Request & { user?: { uid?: string } }).user?.uid,
    }

    try {
      logger.apiLog('info', 'API request started', req, baseContext)
      
      const response = await handler(req, ...args)
      
      logger.apiLog('info', `API request completed in ${Date.now() - startTime}ms`, req, {
        ...baseContext,
        status: response.status,
        duration: Date.now() - startTime,
      })

      // Add request ID to all responses
      response.headers.set('x-request-id', requestId)
      
      return response
    } catch (error) {
      const duration = Date.now() - startTime
      
      // Handle Zod validation errors
      if (error instanceof ZodError) {
        const firstError = error.issues[0]
        const message = `Validation failed: ${firstError.path.join('.')}: ${firstError.message}`
        
        logger.apiLog('warn', 'Validation error', req, {
          ...baseContext,
          duration,
          validationErrors: error.issues,
        }, error)
        
        const response: ErrorResponse = {
          success: false,
          error: message,
          code: 'VALIDATION_ERROR',
          details: process.env.NODE_ENV === 'development' ? error.issues : undefined,
          requestId,
          timestamp: Date.now(),
        }
        
        return NextResponse.json(response, { 
          status: 400,
          headers: { 'x-request-id': requestId }
        })
      }
      
      // Handle custom API errors
      if (error instanceof ApiError) {
        logger.apiLog('warn', `API error: ${error.message}`, req, {
          ...baseContext,
          duration,
          errorCode: error.name,
          statusCode: error.statusCode,
        }, error)
        
        const response: ErrorResponse = {
          success: false,
          error: error.message,
          code: error.name.toUpperCase().replace('ERROR', ''),
          details: process.env.NODE_ENV === 'development' ? error.details : undefined,
          requestId,
          timestamp: Date.now(),
        }
        
        return NextResponse.json(response, { 
          status: error.statusCode,
          headers: { 'x-request-id': requestId }
        })
      }
      
      // Handle unknown errors
      logger.apiLog('error', 'Unexpected API error', req, {
        ...baseContext,
        duration,
      }, error instanceof Error ? error : new Error(String(error)))
      
      const response: ErrorResponse = {
        success: false,
        error: 'Internal server error',
        code: 'INTERNAL_ERROR',
        requestId,
        timestamp: Date.now(),
      }
      
      return NextResponse.json(response, { 
        status: 500,
        headers: { 'x-request-id': requestId }
      })
    }
  }
}

// Legacy alias for backward compatibility
export const createApiHandler = withErrorHandler

// Validation wrapper
export function validateInput<T>(
  schema: { parse: (input: unknown) => T },
  input: unknown
): T {
  try {
    return schema.parse(input)
  } catch (error) {
    if (error instanceof ZodError) {
      const firstError = error.issues[0]
      throw new ValidationError(
        `Invalid ${firstError.path.join('.')}: ${firstError.message}`,
        error.issues
      )
    }
    throw error
  }
}

// Rate limiting helper
export function checkRateLimit(usage: { canUse: boolean; remainingUses: number }) {
  if (!usage.canUse || usage.remainingUses <= 0) {
    throw new RateLimitError('Usage quota exceeded')
  }
}