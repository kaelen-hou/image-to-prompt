import type { Metadata } from "next"
import { Header, Footer } from '@/shared'
import { ToolStructuredData } from '@/shared/components/seo'
import dynamic from 'next/dynamic'

// Critical above-the-fold content - load immediately
const HeroOptimized = dynamic(() => 
  import('@/features/image-to-prompt/components/hero-optimized'), {
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded w-128 mx-auto animate-pulse"></div>
        </div>
        <div className="h-96 bg-gray-200 rounded-2xl animate-pulse"></div>
      </div>
    </div>
  )
})

// Lazy load below-the-fold components with better loading states
const ImageGallery = dynamic(() =>
  import('@/features/image-to-prompt').then(mod => ({ default: mod.ImageGallery })), {
  loading: () => (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="h-96 animate-pulse bg-gray-200 rounded-2xl" />
      </div>
    </div>
  )
})

const TestimonialsSection = dynamic(() =>
  import('@/features/image-to-prompt').then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="h-64 animate-pulse bg-gray-200 rounded-2xl" />
      </div>
    </div>
  )
})

const HowItWorksSection = dynamic(() =>
  import('@/features/image-to-prompt').then(mod => ({ default: mod.HowItWorksSection })), {
  loading: () => (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="h-80 animate-pulse bg-gray-200 rounded-2xl" />
      </div>
    </div>
  )
})

const ImageToPromptFAQ = dynamic(() =>
  import('@/features/image-to-prompt').then(mod => ({ default: mod.ImageToPromptFAQ })), {
  loading: () => (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="h-96 animate-pulse bg-gray-200 rounded-2xl" />
      </div>
    </div>
  )
})

export const metadata: Metadata = {
  title: "AI Image to Prompt Generator - Transform Images into AI Art Prompts | GetPrompts",
  description: "Upload any image and instantly generate detailed prompts for AI art creation. Perfect for Stable Diffusion, Midjourney, DALL-E, and other AI models. Free tool for artists and creators.",
  keywords: ["image to prompt", "AI art prompts", "Stable Diffusion prompts", "Midjourney prompts", "DALL-E prompts", "prompt generator", "AI art", "image analysis", "prompt engineering"],
  openGraph: {
    title: "AI Image to Prompt Generator - Transform Images into AI Art Prompts | GetPrompts",
    description: "Upload any image and instantly generate detailed prompts for AI art creation. Perfect for Stable Diffusion, Midjourney, DALL-E, and other AI models.",
    url: 'https://getprompts.me/image-to-prompt',
    images: [
      {
        url: '/og-image-tool.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Image to Prompt Generator Tool Interface',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Image to Prompt Generator - Transform Images into AI Art Prompts | GetPrompts",
    description: "Upload any image and instantly generate detailed prompts for AI art creation. Perfect for Stable Diffusion, Midjourney, DALL-E, and other AI models.",
    images: ['/og-image-tool.jpg'],
  },
  alternates: {
    canonical: '/image-to-prompt',
  },
}

export default function ImageToPromptPage() {
  return (
    <div className="min-h-screen">
      <ToolStructuredData />
      <Header />
      <HeroOptimized />
      <ImageGallery />
      <TestimonialsSection />
      <HowItWorksSection />
      <ImageToPromptFAQ />
      <Footer />
    </div>
  )
}