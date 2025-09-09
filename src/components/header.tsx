'use client';

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/auth-context'

export default function Header() {
  const { user, signOut, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const handleSignIn = () => {
    const redirectUrl = encodeURIComponent(pathname);
    router.push(`/auth/login?redirectUrl=${redirectUrl}`);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const handleGetStarted = () => {
    if (user) {
      router.push('/image-to-prompt');
    } else {
      const redirectUrl = encodeURIComponent('/image-to-prompt');
      router.push(`/auth/login?redirectUrl=${redirectUrl}`);
    }
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-xl font-bold text-purple-600">
            Image Prompt
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#tools" className="text-sm text-gray-600 hover:text-gray-900">
              Tools
            </Link>
            <Link href="/image-to-prompt" className="text-sm text-gray-600 hover:text-gray-900">
              Generator
            </Link>
            <Link href="#enhancer" className="text-sm text-gray-600 hover:text-gray-900">
              Enhancer
            </Link>
            <Link href="#inspiration" className="text-sm text-gray-600 hover:text-gray-900">
              Inspiration
            </Link>
            <Link href="#faq" className="text-sm text-gray-600 hover:text-gray-900">
              FAQ
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {loading ? (
            <div className="w-16 h-8 bg-gray-200 animate-pulse rounded"></div>
          ) : user ? (
            <>
              <div className="flex items-center space-x-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={user.photoURL || '/default-avatar.png'}
                  alt={user.displayName || 'User'}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm text-gray-700 hidden md:block">
                  {user.displayName || user.email}
                </span>
              </div>
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={handleSignIn}>
                Sign In
              </Button>
              <Button 
                size="sm" 
                className="bg-purple-600 hover:bg-purple-700"
                onClick={handleGetStarted}
              >
                Get Started
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}