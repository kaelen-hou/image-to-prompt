'use client';

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/shared/components/ui/button'
import { useAuth } from '@/features/auth/client'
import { clientLogger } from '@/lib/logger/client'
import { memo } from 'react'

// Constants to ensure SSR consistency
const BRAND_NAME = 'GetPrompts'
const BRAND_CLASSES = 'text-xl font-bold text-violet-600'

function Header() {
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
      clientLogger.componentLog('error', 'Sign out failed', 'Header', {
        userId: user?.uid,
      }, error instanceof Error ? error : new Error(String(error)));
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

  const handleToolsClick = () => {
    if (pathname === '/') {
      // On homepage, scroll to tools section
      document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // On other pages, go to homepage tools section
      router.push('/#tools');
    }
  };

  // Helper function to determine if a nav item is active
  const isActive = (path: string) => {
    if (path === '/guides') {
      return pathname.startsWith('/guides');
    }
    return pathname === path;
  };

  // Helper function to get nav item classes
  const getNavItemClasses = (path: string) => {
    const baseClasses = "text-sm transition-colors relative";
    const activeClasses = "text-violet-600 font-medium";
    const inactiveClasses = "text-gray-600 hover:text-gray-900";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className={BRAND_CLASSES}>
            {BRAND_NAME}
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/image-to-prompt" className={getNavItemClasses('/image-to-prompt')}>
              Image to Prompt
              {isActive('/image-to-prompt') && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-violet-600 rounded-full"></div>}
            </Link>
            <Link href="/prompt-enhancer" className={getNavItemClasses('/prompt-enhancer')}>
              Prompt Enhancer
              {isActive('/prompt-enhancer') && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-violet-600 rounded-full"></div>}
            </Link>
            <Link href="/guides" className={getNavItemClasses('/guides')}>
              Guides
              {isActive('/guides') && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-violet-600 rounded-full"></div>}
            </Link>
            <button 
              onClick={handleToolsClick} 
              className={`${getNavItemClasses('/')} ${pathname === '/' ? 'text-violet-600 font-medium' : ''}`}
            >
              Tools
              {pathname === '/' && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-violet-600 rounded-full"></div>}
            </button>
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

export default memo(Header)