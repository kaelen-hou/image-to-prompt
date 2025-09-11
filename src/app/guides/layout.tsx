import { Header, Footer } from '@/shared'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Art & Prompt Engineering Guides | GetPrompts',
  description: 'Comprehensive guides for AI art creation, prompt engineering, and mastering tools like Midjourney, DALL-E, and Stable Diffusion.',
  keywords: ['AI art guides', 'prompt engineering', 'Midjourney tutorial', 'DALL-E guide', 'Stable Diffusion tutorial', 'AI art tips'],
  openGraph: {
    title: 'AI Art & Prompt Engineering Guides | GetPrompts',
    description: 'Master AI art creation with our comprehensive guides and tutorials.',
    url: 'https://getprompts.me/guides',
  },
  alternates: {
    canonical: '/guides',
  },
}

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}