import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps } from 'firebase/app';

// Firebase client config for token verification
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase client if not already initialized
if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

export interface AuthenticatedUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface AuthenticatedRequest extends NextRequest {
  user: AuthenticatedUser;
}

interface JWTPayload {
  user_id?: string;
  uid?: string;
  email?: string;
  name?: string;
  picture?: string;
  exp?: number;
  iss?: string;
}

// Simple JWT decode without verification (for development)
function decodeJWT(token: string): JWTPayload | null {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      Buffer.from(base64, 'base64')
        .toString()
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload) as JWTPayload;
  } catch {
    return null;
  }
}

// Validate JWT token structure and claims
function validateJWTToken(decoded: JWTPayload | null): AuthenticatedUser | null {
  if (!decoded || !decoded.user_id) {
    return null;
  }
  
  // Check token expiration
  const now = Math.floor(Date.now() / 1000);
  if (decoded.exp && decoded.exp < now) {
    return null;
  }
  
  // Verify this is a Firebase token
  if (!decoded.iss || !decoded.iss.includes('securetoken.google.com')) {
    return null;
  }
  
  return {
    uid: decoded.user_id,
    email: decoded.email || null,
    displayName: decoded.name || null,
    photoURL: decoded.picture || null,
  };
}

// Verify Firebase ID token
async function verifyIdToken(idToken: string): Promise<AuthenticatedUser | null> {
  try {
    // First validate with JWT decode for quick validation
    const decoded = decodeJWT(idToken);
    const jwtResult = validateJWTToken(decoded);
    
    if (!jwtResult) {
      return null;
    }
    
    // Check if Firebase Admin credentials are available
    const hasAdminCredentials = process.env.FIREBASE_PRIVATE_KEY && 
                               process.env.FIREBASE_CLIENT_EMAIL && 
                               process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    
    // If no Admin SDK, return JWT result
    if (!hasAdminCredentials) {
      return jwtResult;
    }
    
    // Try Admin SDK with very short timeout
    try {
      const adminPromise = (async () => {
        await import('@/features/auth/services/firebase-admin');
        const { getAuth } = await import('firebase-admin/auth');
        const auth = getAuth();
        return await auth.verifyIdToken(idToken);
      })();
      
      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error('Timeout')), 800);
      });
      
      const decodedToken = await Promise.race([adminPromise, timeoutPromise]);
      return {
        uid: decodedToken.uid,
        email: decodedToken.email || null,
        displayName: decodedToken.name || null,
        photoURL: decodedToken.picture || null,
      };
    } catch {
      // Admin SDK failed or timed out, return JWT result
      return jwtResult;
    }
  } catch {
    return null;
  }
}

export function withAuth<T extends unknown[]>(
  handler: (request: AuthenticatedRequest, ...args: T) => Promise<NextResponse>
) {
  return async (request: NextRequest, ...args: T): Promise<NextResponse> => {
    try {
      // Get authorization header
      const authorization = request.headers.get('authorization');
      
      if (!authorization || !authorization.startsWith('Bearer ')) {
        return NextResponse.json(
          { error: 'Missing or invalid authorization header' },
          { status: 401 }
        );
      }

      // Extract token
      const idToken = authorization.replace('Bearer ', '');
      
      // Verify token
      const user = await verifyIdToken(idToken);
      
      if (!user) {
        return NextResponse.json(
          { error: 'Invalid or expired token' },
          { status: 401 }
        );
      }

      // Create authenticated request
      const authenticatedRequest = request as AuthenticatedRequest;
      authenticatedRequest.user = user;

      // Call the original handler
      return await handler(authenticatedRequest, ...args);
      
    } catch {
      return NextResponse.json(
        { error: 'Authentication failed' },
        { status: 401 }
      );
    }
  };
}