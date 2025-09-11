import type { Metadata } from "next"
import { Header, Footer } from '@/shared'
import { ToolStructuredData } from '@/shared/components/seo'
import {
  ImageToPromptHero,
  ImageGallery,
  TestimonialsSection,
  HowItWorksSection,
  ImageToPromptFAQ
} from '@/features/image-to-prompt'

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
      <ImageToPromptHero />
      <ImageGallery />
      <TestimonialsSection />
      <HowItWorksSection />
      <ImageToPromptFAQ />
      <Footer />
    </div>
  )
}