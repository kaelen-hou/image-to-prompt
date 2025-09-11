import type { Metadata } from "next"
import { Header, Footer } from '@/shared'
import { ToolStructuredData } from '@/shared/components/seo'

export const metadata: Metadata = {
  title: "AI Prompt Enhancer - Optimize Your AI Art Prompts | GetPrompts",
  description: "Enhance and optimize your AI prompts for better results. Improve prompts for Stable Diffusion, Midjourney, DALL-E, and other AI models. Free prompt enhancement tool.",
  keywords: ["prompt enhancer", "AI prompt optimization", "Stable Diffusion prompts", "Midjourney prompts", "DALL-E prompts", "prompt engineering", "AI art", "prompt improvement", "optimize prompts"],
  openGraph: {
    title: "AI Prompt Enhancer - Optimize Your AI Art Prompts | GetPrompts",
    description: "Enhance and optimize your AI prompts for better results. Improve prompts for Stable Diffusion, Midjourney, DALL-E, and other AI models.",
    url: 'https://getprompts.me/prompt-enhancer',
    images: [
      {
        url: '/og-image-enhancer.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Prompt Enhancer Tool Interface',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Prompt Enhancer - Optimize Your AI Art Prompts | GetPrompts",
    description: "Enhance and optimize your AI prompts for better results. Improve prompts for Stable Diffusion, Midjourney, DALL-E, and other AI models.",
    images: ['/og-image-enhancer.jpg'],
  },
  alternates: {
    canonical: '/prompt-enhancer',
  },
}

export default function PromptEnhancerPage() {
  return (
    <div className="min-h-screen">
      <ToolStructuredData toolType="prompt-enhancer" />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Prompt Enhancer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your basic prompts into detailed, optimized instructions that generate stunning AI art. 
            Perfect for Stable Diffusion, Midjourney, DALL-E, and more.
          </p>
          
          <div className="bg-white rounded-xl shadow-lg border p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-gray-600 mb-6">
              Our AI Prompt Enhancer is currently in development. This powerful tool will help you:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Optimize prompt structure and syntax</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Add artistic style suggestions</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Improve technical parameters</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Enhance composition details</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Add lighting and mood suggestions</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Model-specific optimizations</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">In the meantime, try our Image to Prompt Generator:</p>
            <a 
              href="/image-to-prompt" 
              className="inline-flex items-center px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
            >
              Generate Prompts from Images
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}