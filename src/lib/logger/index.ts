interface LogContext {
  userId?: string
  requestId?: string
  endpoint?: string
  method?: string
  userAgent?: string
  ip?: string
  [key: string]: unknown
}

interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error'
  message: string
  timestamp: string
  context?: LogContext
  error?: {
    name: string
    message: string
    stack?: string
  }
}

class Logger {
  private shouldLog(level: string): boolean {
    const logLevel = process.env.LOG_LEVEL || 'info'
    const levels = ['debug', 'info', 'warn', 'error']
    return levels.indexOf(level) >= levels.indexOf(logLevel)
  }

  private createLogEntry(
    level: LogEntry['level'],
    message: string,
    context?: LogContext,
    error?: Error
  ): LogEntry {
    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
    }

    if (context) {
      entry.context = context
    }

    if (error) {
      entry.error = {
        name: error.name,
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      }
    }

    return entry
  }

  private output(entry: LogEntry): void {
    if (process.env.NODE_ENV === 'development') {
      // Pretty print for development
      const timestamp = new Date(entry.timestamp).toLocaleTimeString()
      const level = entry.level.toUpperCase().padEnd(5)
      const context = entry.context ? ` [${JSON.stringify(entry.context)}]` : ''
      const error = entry.error ? `\n  Error: ${entry.error.message}\n  Stack: ${entry.error.stack}` : ''
      
      console.log(`${timestamp} ${level} ${entry.message}${context}${error}`)
    } else {
      // JSON format for production
      console.log(JSON.stringify(entry))
    }
  }

  debug(message: string, context?: LogContext): void {
    if (!this.shouldLog('debug')) return
    const entry = this.createLogEntry('debug', message, context)
    this.output(entry)
  }

  info(message: string, context?: LogContext): void {
    if (!this.shouldLog('info')) return
    const entry = this.createLogEntry('info', message, context)
    this.output(entry)
  }

  warn(message: string, context?: LogContext, error?: Error): void {
    if (!this.shouldLog('warn')) return
    const entry = this.createLogEntry('warn', message, context, error)
    this.output(entry)
  }

  error(message: string, context?: LogContext, error?: Error): void {
    if (!this.shouldLog('error')) return
    const entry = this.createLogEntry('error', message, context, error)
    this.output(entry)
  }

  // Helper method for API logging
  apiLog(
    level: LogEntry['level'],
    message: string,
    request?: Request,
    additionalContext?: LogContext,
    error?: Error
  ): void {
    const context: LogContext = {
      ...additionalContext,
    }

    if (request) {
      context.endpoint = new URL(request.url).pathname
      context.method = request.method
      context.userAgent = request.headers.get('user-agent') || undefined
      context.requestId = request.headers.get('x-request-id') || undefined
    }

    switch (level) {
      case 'debug':
        this.debug(message, context)
        break
      case 'info':
        this.info(message, context)
        break
      case 'warn':
        this.warn(message, context, error)
        break
      case 'error':
        this.error(message, context, error)
        break
    }
  }
}

// Export singleton instance
export const logger = new Logger()

// Re-export client logger for convenience
export { clientLogger } from './client'

// Export types for use in other modules  
export type { ClientLogContext, ClientLogEntry } from './client'

// Re-export types that are defined in this file
export type { LogContext, LogEntry }