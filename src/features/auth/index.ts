// Context
export { AuthProvider, useAuth } from './context/auth-context'

// Middleware
export { withAuth } from './middleware/auth-middleware'
export type { AuthenticatedRequest } from './middleware/auth-middleware'

// Services
export * from './services/firebase'
// Note: firebase-admin is server-side only, not exported to avoid client bundle issues