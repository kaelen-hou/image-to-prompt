import Link from 'next/link'
import { BookOpen, Zap, Palette, Camera, Layers, Star } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Art & Prompt Engineering Guides | GetPrompts',
  description: 'Master AI art creation with our comprehensive guides. Learn prompt engineering, Midjourney techniques, DALL-E tips, and Stable Diffusion best practices.',
  keywords: ['AI art guides', 'prompt engineering tutorial', 'Midjourney guide', 'DALL-E tutorial', 'Stable Diffusion guide', 'AI art tips', 'prompt writing'],
  authors: [{ name: 'GetPrompts Team' }],
  creator: 'GetPrompts',
  publisher: 'GetPrompts',
  openGraph: {
    title: 'AI Art & Prompt Engineering Guides | GetPrompts',
    description: 'Master AI art creation with our comprehensive guides and tutorials.',
    url: 'https://getprompts.me/guides',
    siteName: 'GetPrompts',
    images: [{ 
      url: '/og-image.jpg', 
      width: 1200, 
      height: 630, 
      alt: 'AI Art & Prompt Engineering Guides',
      type: 'image/jpeg'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Art & Prompt Engineering Guides | GetPrompts',
    description: 'Master AI art creation with our comprehensive guides and tutorials.',
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
    canonical: '/guides',
  },
}

const guides = [
  {
    title: 'Prompt Engineering Masterclass',
    description: 'Learn the art and science of writing effective AI prompts that generate stunning results.',
    href: '/guides/prompt-engineering',
    icon: Zap,
    difficulty: 'Beginner to Advanced',
    readTime: '15 min read',
    featured: true,
  },
  {
    title: 'Complete Midjourney Guide',
    description: 'Master Midjourney with advanced techniques, parameters, and creative workflows.',
    href: '/guides/midjourney-guide',
    icon: Palette,
    difficulty: 'Intermediate',
    readTime: '20 min read',
    featured: true,
  },
  {
    title: 'Stable Diffusion Tutorial',
    description: 'Comprehensive guide to Stable Diffusion, from basics to advanced techniques.',
    href: '/guides/stable-diffusion-guide',
    icon: Layers,
    difficulty: 'Advanced',
    readTime: '25 min read',
    featured: false,
  },
  {
    title: 'AI Art Styles Encyclopedia',
    description: 'Explore different artistic styles and how to achieve them with AI tools.',
    href: '/guides/ai-art-styles',
    icon: Camera,
    difficulty: 'Beginner',
    readTime: '12 min read',
    featured: false,
  },
  {
    title: 'Prompt Modifiers & Keywords',
    description: 'Master the essential keywords and modifiers that enhance your AI art generation.',
    href: '/guides/prompt-modifiers',
    icon: BookOpen,
    difficulty: 'Intermediate',
    readTime: '18 min read',
    featured: false,
  },
]

export default function GuidesPage() {
  const featuredGuides = guides.filter(guide => guide.featured)
  const allGuides = guides.filter(guide => !guide.featured)

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Art & Prompt Engineering Guides
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Master the art of AI-generated content with our comprehensive guides. Learn prompt engineering, 
          explore different AI tools, and create stunning artwork with expert techniques.
        </p>
      </div>

      {/* Featured Guides */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Star className="w-6 h-6 text-yellow-500 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Featured Guides</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group bg-white rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-lg transition-all duration-200 p-6"
            >
              <div className="flex items-start">
                <div className="bg-violet-100 p-3 rounded-lg mr-4 group-hover:bg-violet-200 transition-colors">
                  <guide.icon className="w-6 h-6 text-violet-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {guide.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span className="bg-gray-100 px-2 py-1 rounded">{guide.difficulty}</span>
                    <span>{guide.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Guides */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">All Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group bg-white rounded-lg border border-gray-200 hover:border-violet-300 hover:shadow-md transition-all duration-200 p-6"
            >
              <div className="flex items-center mb-4">
                <div className="bg-violet-50 p-2 rounded-lg mr-3 group-hover:bg-violet-100 transition-colors">
                  <guide.icon className="w-5 h-5 text-violet-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-violet-600 transition-colors">
                    {guide.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {guide.description}
              </p>
              <div className="flex items-center text-xs text-gray-500 space-x-3">
                <span className="bg-gray-100 px-2 py-1 rounded">{guide.difficulty}</span>
                <span>{guide.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center bg-violet-50 rounded-2xl p-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Create Amazing AI Art?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Put your newfound knowledge to work with our free AI prompt generation tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/image-to-prompt"
            className="inline-flex items-center px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors font-medium"
          >
            Generate Prompts from Images
          </Link>
          <Link
            href="/prompt-enhancer"
            className="inline-flex items-center px-6 py-3 border border-violet-600 text-violet-600 rounded-lg hover:bg-violet-50 transition-colors font-medium"
          >
            Enhance Your Prompts
          </Link>
        </div>
      </section>
    </div>
  )
}