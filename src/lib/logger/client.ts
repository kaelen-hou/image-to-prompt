'use client';

interface ClientLogContext {
  userId?: string
  component?: string
  action?: string
  [key: string]: unknown
}

interface ClientLogEntry {
  level: 'debug' | 'info' | 'warn' | 'error'
  message: string
  timestamp: string
  context?: ClientLogContext
  error?: {
    name: string
    message: string
    stack?: string
  }
  url?: string
  userAgent?: string
}

class ClientLogger {
  private shouldLog(level: string): boolean {
    const logLevel = process.env.NEXT_PUBLIC_LOG_LEVEL || 'info'
    const levels = ['debug', 'info', 'warn', 'error']
    return levels.indexOf(level) >= levels.indexOf(logLevel)
  }

  private createLogEntry(
    level: ClientLogEntry['level'],
    message: string,
    context?: ClientLogContext,
    error?: Error
  ): ClientLogEntry {
    const entry: ClientLogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
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

  private output(entry: ClientLogEntry): void {
    if (process.env.NODE_ENV === 'development') {
      // Pretty print for development
      const timestamp = new Date(entry.timestamp).toLocaleTimeString()
      const level = entry.level.toUpperCase().padEnd(5)
      const context = entry.context ? ` [${JSON.stringify(entry.context)}]` : ''
      const error = entry.error ? `\n  Error: ${entry.error.message}\n  Stack: ${entry.error.stack}` : ''
      
      console.log(`${timestamp} ${level} ${entry.message}${context}${error}`)
    } else {
      // Send to monitoring service in production (if available)
      // For now, just use console.log with structured format
      console.log(JSON.stringify(entry))
    }
  }

  debug(message: string, context?: ClientLogContext): void {
    if (!this.shouldLog('debug')) return
    const entry = this.createLogEntry('debug', message, context)
    this.output(entry)
  }

  info(message: string, context?: ClientLogContext): void {
    if (!this.shouldLog('info')) return
    const entry = this.createLogEntry('info', message, context)
    this.output(entry)
  }

  warn(message: string, context?: ClientLogContext, error?: Error): void {
    if (!this.shouldLog('warn')) return
    const entry = this.createLogEntry('warn', message, context, error)
    this.output(entry)
  }

  error(message: string, context?: ClientLogContext, error?: Error): void {
    if (!this.shouldLog('error')) return
    const entry = this.createLogEntry('error', message, context, error)
    this.output(entry)
  }

  // Helper method for component logging
  componentLog(
    level: ClientLogEntry['level'],
    message: string,
    component: string,
    additionalContext?: ClientLogContext,
    error?: Error
  ): void {
    const context: ClientLogContext = {
      component,
      ...additionalContext,
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
export const clientLogger = new ClientLogger()

// Export types for use in other modules
export type { ClientLogContext, ClientLogEntry }