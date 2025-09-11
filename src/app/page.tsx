import { Header, Footer } from '@/shared'
import { WebApplicationStructuredData, OrganizationStructuredData } from '@/shared/components/seo'
import {
  HeroSection,
  ToolsSection,
  GeneratorSection,
  EnhancerSection,
  InspirationSection,
  FAQSection
} from '@/features/landing'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GetPrompts - AI Image to Prompt Generator & Prompt Enhancer',
  description: 'Transform your images into detailed AI prompts and enhance existing prompts for Midjourney, DALL-E, Stable Diffusion and more. Free online tools for content creators and AI enthusiasts.',
  keywords: [
    'AI image to prompt',
    'prompt generator',
    'prompt enhancer',
    'Midjourney prompts',
    'DALL-E prompts',
    'Stable Diffusion prompts',
    'AI art prompts',
    'prompt engineering',
    'AI tools',
    'image analysis'
  ],
  authors: [{ name: 'GetPrompts Team' }],
  creator: 'GetPrompts',
  publisher: 'GetPrompts',
  openGraph: {
    title: 'GetPrompts - AI Image to Prompt Generator & Prompt Enhancer',
    description: 'Transform your images into detailed AI prompts and enhance existing prompts for Midjourney, DALL-E, Stable Diffusion and more. Free online tools for content creators and AI enthusiasts.',
    url: 'https://getprompts.me',
    siteName: 'GetPrompts',
    images: [{ 
      url: '/og-image.jpg', 
      width: 1200, 
      height: 630, 
      alt: 'GetPrompts - AI Image to Prompt Generator & Prompt Enhancer',
      type: 'image/jpeg'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GetPrompts - AI Image to Prompt Generator & Prompt Enhancer',
    description: 'Transform your images into detailed AI prompts and enhance existing prompts for Midjourney, DALL-E, Stable Diffusion and more. Free online tools for content creators and AI enthusiasts.',
    images: ['/og-image.jpg'],
    creator: '@getprompts',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <WebApplicationStructuredData
        name="GetPrompts - AI Image to Prompt Generator & Prompt Enhancer"
        description="Transform your images into detailed AI prompts and enhance existing prompts for Midjourney, DALL-E, Stable Diffusion and more. Free online tools for content creators and AI enthusiasts."
        url="https://getprompts.me"
        applicationCategory="Multimedia"
        operatingSystem="Any"
        offers={{
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }}
      />
      <OrganizationStructuredData
        name="GetPrompts"
        url="https://getprompts.me"
        description="AI-powered tools for image to prompt generation and prompt enhancement for artists and content creators"
      />
      <Header />
      <HeroSection />
      <ToolsSection />
      <GeneratorSection />
      <EnhancerSection />
      <InspirationSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
