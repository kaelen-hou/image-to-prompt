'use client';

import { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react';
import { User } from 'firebase/auth';
import { auth } from '../services/firebase';
import { clientLogger } from '@/lib/logger/client';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;
    
    // Dynamically import auth functions to reduce initial bundle
    import('firebase/auth').then(({ onAuthStateChanged }) => {
      unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
      });
    });

    return () => unsubscribe?.();
  }, []);

  const signInWithGoogle = useCallback(async () => {
    try {
      const { signInWithPopup, GoogleAuthProvider } = await import('firebase/auth');
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      clientLogger.componentLog('error', 'Google sign-in failed', 'AuthContext', {}, 
        error instanceof Error ? error : new Error(String(error)));
      throw error;
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      const { signOut: firebaseSignOut } = await import('firebase/auth');
      await firebaseSignOut(auth);
    } catch (error) {
      clientLogger.componentLog('error', 'Sign out failed', 'AuthContext', {
        userId: user?.uid,
      }, error instanceof Error ? error : new Error(String(error)));
      throw error;
    }
  }, [user?.uid]);

  const value = useMemo(() => ({
    user,
    loading,
    signInWithGoogle,
    signOut,
  }), [user, loading, signInWithGoogle, signOut]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}