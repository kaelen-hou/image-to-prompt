import { NextResponse } from 'next/server'
import { ZodError } from 'zod'
import { createApiResponse } from '../validation/schemas'

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

// Error handler wrapper for API routes
export function createApiHandler<T extends Record<string, unknown>>(
  handler: (req: Request, context: T) => Promise<NextResponse>
) {
  return async (req: Request, context: T): Promise<NextResponse> => {
    try {
      return await handler(req, context)
    } catch (error) {
      console.error('API Error:', error)
      
      // Handle Zod validation errors
      if (error instanceof ZodError) {
        const firstError = error.issues[0]
        const message = `Validation failed: ${firstError.path.join('.')}: ${firstError.message}`
        return NextResponse.json(
          createApiResponse(false, null, message),
          { status: 400 }
        )
      }
      
      // Handle custom API errors
      if (error instanceof ApiError) {
        return NextResponse.json(
          createApiResponse(false, null, error.message),
          { status: error.statusCode }
        )
      }
      
      // Handle unknown errors
      return NextResponse.json(
        createApiResponse(false, null, 'Internal server error'),
        { status: 500 }
      )
    }
  }
}

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