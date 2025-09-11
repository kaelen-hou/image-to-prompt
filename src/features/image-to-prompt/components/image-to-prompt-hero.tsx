'use client'

import { Button } from '@/shared/components/ui/button'
import { useCallback, useEffect, memo } from 'react'
import { toast } from 'sonner'
import { Sparkles, User } from 'lucide-react'
import { useAuth } from '@/features/auth/client'
import dynamic from 'next/dynamic'

// Import stores
import { useGeneratorStore } from '@/stores'
import { useUserStore } from '@/stores'

// Import performance hooks
import { useDebounce } from '@/shared/hooks/use-debounce'
import { useAuthenticatedApi } from '@/shared/hooks/use-api'

// Dynamic imports for code splitting
const ImageUploader = dynamic(() => 
  import('./upload').then(mod => ({ default: mod.ImageUploader })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-200 rounded-lg" />
})

const PromptDisplay = dynamic(() => 
  import('./prompt').then(mod => ({ default: mod.PromptDisplay })), {
  loading: () => <div className="h-64 animate-pulse bg-gray-200 rounded-lg" />
})

const PromptTypeSelector = dynamic(() => 
  import('./prompt').then(mod => ({ default: mod.PromptTypeSelector })), {
  loading: () => <div className="h-48 animate-pulse bg-gray-200 rounded-lg" />
})

const QuotaIndicator = dynamic(() => 
  import('./quota').then(mod => ({ default: mod.QuotaIndicator })), {
  loading: () => <div className="h-32 animate-pulse bg-gray-200 rounded-lg" />
})

// Memoized sign-in section
const SignInSection = memo(() => {
  const { signInWithGoogle } = useAuth()
  
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
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
      </div>
    </section>
  )
})

SignInSection.displayName = 'SignInSection'

export default function ImageToPromptHero() {
  const { user } = useAuth()
  
  // Generator store
  const {
    selectedImage,
    selectedFile,
    isGenerating,
    generatedPrompt,
    negativePrompt,
    promptType,
    userQuery,
    setImage,
    setPromptType,
    setUserQuery,
    startGeneration,
    setGenerationResult,
    endGeneration
  } = useGeneratorStore()
  
  // User store
  const {
    usage: userUsage,
    isLoadingUsage,
    setUsage,
    setLoading,
    clearUsage,
    shouldRefreshUsage
  } = useUserStore()

  // Debounced user query for better performance
  const debouncedUserQuery = useDebounce(userQuery, 500)

  // API hooks
  const usageApi = useAuthenticatedApi({
    onSuccess: (data: unknown) => {
      if (data && typeof data === 'object' && 'data' in data) {
        const responseData = data as { data: unknown }
        // TODO: Add proper typing with Zod validation
        setUsage(responseData.data as { subscription: string; remainingUses: number; canUse: boolean; resetDate: string })
      }
    },
    onError: (error) => {
      console.error('Failed to fetch usage:', error)
    }
  })

  const generateApi = useAuthenticatedApi({
    onSuccess: (result: unknown) => {
      if (result && typeof result === 'object' && 'success' in result) {
        const response = result as { success: boolean; data?: { data?: { output?: unknown } }; error?: string }
        if (response.success) {
          const output = response.data?.data?.output as { positive_prompt?: string; prompt?: string; negative_prompt?: string } | undefined
          if (output) {
            const prompt = output.positive_prompt || output.prompt || ''
            const negativePrompt = output.negative_prompt || ''
            setGenerationResult(prompt, negativePrompt)
            toast.success('Prompt generated successfully!')
            fetchUserUsage()
          } else {
            throw new Error('No prompt data received')
          }
        } else {
          throw new Error(response.error || 'Generation failed')
        }
      } else {
        throw new Error('Invalid response format')
      }
    },
    onError: (error) => {
      toast.error(error.message)
      endGeneration()
    }
  })

  // Fetch user usage information
  const fetchUserUsage = useCallback(async () => {
    if (!user) {
      clearUsage()
      return
    }

    // Only fetch if we should refresh
    if (!shouldRefreshUsage()) {
      return
    }

    setLoading(true)

    await usageApi.executeWithAuth(
      async (token) => {
        const response = await fetch('/api/usage', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if (!response.ok) {
          throw new Error('Failed to fetch usage')
        }

        return response.json()
      },
      () => user.getIdToken()
    )

    setLoading(false)
  }, [user, setLoading, clearUsage, shouldRefreshUsage, usageApi])

  useEffect(() => {
    fetchUserUsage()
  }, [fetchUserUsage])

  // Debounced handlers for better performance
  const handlePromptTypeChange = useCallback((type: string) => {
    setPromptType(type)
  }, [setPromptType])
  
  const handleUserQueryChange = useCallback((query: string) => {
    setUserQuery(query)
  }, [setUserQuery])

  // Handle image selection with optimization
  const handleImageSelect = useCallback((imageUrl: string, file: File) => {
    // Preload the image for better UX
    const img = new Image()
    img.src = imageUrl
    
    setImage(imageUrl, file)
  }, [setImage])

  // Handle prompt generation with optimizations
  const handleGeneratePrompt = useCallback(async () => {
    if (!user) {
      toast.error('Please sign in to generate prompts')
      return
    }

    if (!selectedFile) {
      toast.error('Please select an image first')
      return
    }

    if (!userUsage?.canUse) {
      toast.error('You have reached your usage limit')
      return
    }

    startGeneration()

    await generateApi.executeWithAuth(
      async (token) => {
        const formData = new FormData()
        formData.append('file', selectedFile)
        formData.append('promptType', promptType)
        if (debouncedUserQuery.trim()) {
          formData.append('userQuery', debouncedUserQuery)
        }

        const response = await fetch('/api/generate-prompt', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: formData
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Generation failed')
        }

        return response.json()
      },
      () => user.getIdToken()
    )
  }, [user, selectedFile, userUsage, promptType, debouncedUserQuery, startGeneration, generateApi])

  // Handle copy actions
  const handleCopy = useCallback(() => {
    // This is handled by the PromptDisplay component
    // We could add analytics or other side effects here
  }, [])

  // Handle upgrade action
  const handleUpgrade = useCallback(() => {
    toast.info('Upgrade feature coming soon!')
    // TODO: Implement upgrade flow
  }, [])

  // Show sign-in prompt for unauthenticated users
  if (!user) {
    return <SignInSection />
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Images to AI Prompts
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload any image and instantly generate detailed prompts for AI art generation.
            Perfect for Stable Diffusion, Midjourney, and other AI models.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Upload & Configuration */}
            <div className="lg:col-span-1 space-y-6">
              <ImageUploader
                selectedImage={selectedImage}
                selectedFile={selectedFile}
                onImageSelect={handleImageSelect}
                disabled={isGenerating || !userUsage?.canUse}
                userUsage={userUsage}
              />
              
              <PromptTypeSelector
                promptType={promptType}
                userQuery={userQuery}
                onPromptTypeChange={handlePromptTypeChange}
                onUserQueryChange={handleUserQueryChange}
                disabled={isGenerating}
              />

              <QuotaIndicator
                userUsage={userUsage}
                onUpgrade={handleUpgrade}
              />
            </div>

            {/* Right Column - Results */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-center">
                <Button
                  onClick={handleGeneratePrompt}
                  disabled={!selectedFile || isGenerating || !userUsage?.canUse || isLoadingUsage}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  {isGenerating ? 'Generating...' : 'Generate Prompt'}
                </Button>
              </div>

              <PromptDisplay
                generatedPrompt={generatedPrompt}
                negativePrompt={negativePrompt}
                isLoading={isGenerating}
                onCopy={handleCopy}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}