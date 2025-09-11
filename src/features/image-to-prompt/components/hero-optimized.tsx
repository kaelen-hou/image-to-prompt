'use client'

import { Suspense, lazy, memo } from 'react'
import { useAuth } from '@/features/auth/client'
import { HeroShell } from './hero-shell'
import { Button } from '@/shared/components/ui/button'
import { PageSection } from '@/shared/components/layout/page-section'
import { User } from 'lucide-react'

// Lazy load the full interactive component only when needed
const InteractiveHero = lazy(() => 
  import('./image-to-prompt-hero').then(module => ({
    default: module.default
  }))
)

// Memoized sign-in section for unauthenticated users
const SignInSection = memo(() => {
  const { signInWithGoogle } = useAuth()
  
  return (
    <PageSection background="purpleGradient" className="text-center">
      <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Images to AI Prompts
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Upload any image and instantly generate detailed prompts for AI art generation.
            Perfect for Stable Diffusion, Midjourney, and other AI models.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <User className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Sign in to get started</h3>
            <p className="text-gray-600 mb-6">
              Create an account to start generating AI prompts from your images
            </p>
            <Button
              onClick={signInWithGoogle}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Sign in with Google
            </Button>
          </div>
        </div>
    </PageSection>
  )
})

SignInSection.displayName = 'SignInSection'

// Performance-optimized Hero component
export default function HeroOptimized() {
  const { user, loading } = useAuth()
  
  // Show loading skeleton while auth state is being determined
  if (loading) {
    return <HeroShell />
  }
  
  // Show sign-in section for unauthenticated users (immediate render)
  if (!user) {
    return <SignInSection />
  }

  // For authenticated users, show shell first, then hydrate with full functionality
  return (
    <Suspense fallback={<HeroShell />}>
      <InteractiveHero />
    </Suspense>
  )
}