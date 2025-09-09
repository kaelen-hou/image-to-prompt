'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  onAuthStateChanged, 
  signInWithPopup,
  GoogleAuthProvider, 
  signOut as firebaseSignOut
} from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  isRedirectResult: boolean;
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
  const [isRedirectResult, setIsRedirectResult] = useState(false);

  useEffect(() => {
    console.log('🔥 AuthProvider mounted (popup mode)');
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('🔥 Auth state changed:', user ? `logged in as ${user.email}` : 'logged out');
      setUser(user);
      setLoading(false);
    });

    return () => {
      console.log('🔥 AuthProvider cleanup');
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    console.log('🔥 Starting Google sign in (popup mode)...');
    
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('🔥 Popup login successful:', result.user.email);
      return result;
    } catch (error: any) {
      console.error('🔥 Error signing in with Google:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    signInWithGoogle,
    signOut,
    isRedirectResult,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}