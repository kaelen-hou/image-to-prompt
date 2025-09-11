import { CheckCircle, Lightbulb, Target, Zap, BookOpen } from 'lucide-react'
import { HowToStructuredData, ArticleStructuredData } from '@/shared/components/seo'
import { Breadcrumbs, BreadcrumbStructuredData, RelatedLinks, CTASection } from '@/shared/components/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prompt Engineering Guide: Master AI Art Prompts | GetPrompts',
  description: 'Learn the art of prompt engineering for AI art generation. Master techniques for Midjourney, DALL-E, Stable Diffusion, and other AI tools with this comprehensive guide.',
  keywords: [
    'prompt engineering', 
    'AI prompt writing', 
    'Midjourney prompts', 
    'DALL-E prompts', 
    'Stable Diffusion prompts',
    'AI art prompts',
    'prompt optimization',
    'AI art generation',
    'prompt techniques',
    'AI prompt guide'
  ],
  authors: [{ name: 'GetPrompts Team' }],
  creator: 'GetPrompts',
  publisher: 'GetPrompts',
  openGraph: {
    title: 'Prompt Engineering Guide: Master AI Art Prompts | GetPrompts',
    description: 'Complete guide to writing effective AI prompts for stunning art generation.',
    url: 'https://getprompts.me/guides/prompt-engineering',
    siteName: 'GetPrompts',
    images: [{ 
      url: '/og-image.jpg', 
      width: 1200, 
      height: 630, 
      alt: 'Prompt Engineering Guide',
      type: 'image/jpeg'
    }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prompt Engineering Guide: Master AI Art Prompts | GetPrompts',
    description: 'Complete guide to writing effective AI prompts for stunning art generation.',
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
    canonical: '/guides/prompt-engineering',
  },
}

export default function PromptEngineeringPage() {
  const howToSteps = [
    {
      name: "Understand Your Goal",
      text: "Define what you want to create: subject, style, composition, and mood. Be specific about your creative vision."
    },
    {
      name: "Structure Your Prompt",
      text: "Start with the main subject, add context and setting, specify artistic style, and include technical details."
    },
    {
      name: "Add Essential Modifiers",
      text: "Include quality modifiers (high quality, detailed), lighting descriptions (soft light, dramatic), and style keywords (photorealistic, artistic)."
    },
    {
      name: "Platform-Specific Optimization",
      text: "Apply platform-specific parameters: Midjourney (--ar, --stylize), DALL-E (descriptive language), or Stable Diffusion (emphasis brackets)."
    },
    {
      name: "Test and Iterate",
      text: "Generate initial results, analyze what works, refine your prompt based on outputs, and iterate for better results."
    }
  ]

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
    { label: 'Prompt Engineering' }
  ]

  const relatedGuides = [
    {
      title: 'Complete Midjourney Guide',
      description: 'Master advanced Midjourney techniques and parameters.',
      href: '/guides/midjourney-guide',
      category: 'Platform Guide'
    },
    {
      title: 'AI Art Styles Encyclopedia',
      description: 'Explore different artistic styles for your AI creations.',
      href: '/guides/ai-art-styles',
      category: 'Creative Guide'
    },
    {
      title: 'Prompt Modifiers & Keywords',
      description: 'Essential keywords for precise AI art control.',
      href: '/guides/prompt-modifiers',
      category: 'Reference'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <ArticleStructuredData
        headline="Prompt Engineering Guide: Master AI Art Prompts"
        description="Learn the art of prompt engineering for AI art generation. Master techniques for Midjourney, DALL-E, Stable Diffusion, and other AI tools."
        datePublished="2025-01-11T00:00:00Z"
        dateModified="2025-01-11T00:00:00Z"
        author="GetPrompts Team"
        image="https://getprompts.me/og-image.jpg"
        keywords={[
          "prompt engineering",
          "AI prompt writing", 
          "Midjourney prompts",
          "DALL-E prompts",
          "Stable Diffusion prompts",
          "AI art generation"
        ]}
      />
      
      <HowToStructuredData
        name="How to Write Effective AI Art Prompts"
        description="Step-by-step guide to creating compelling prompts for AI art generation tools like Midjourney, DALL-E, and Stable Diffusion."
        totalTime="PT15M"
        estimatedCost="$0"
        steps={howToSteps}
      />
      
      <BreadcrumbStructuredData items={breadcrumbItems} />
      
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex items-center mb-4">
          <div className="bg-violet-100 p-3 rounded-lg mr-4">
            <Zap className="w-6 h-6 text-violet-600" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Prompt Engineering Masterclass
            </h1>
            <p className="text-lg text-gray-600">
              Learn the art and science of writing effective AI prompts that generate stunning results
            </p>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-8">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Beginner to Advanced</span>
          <span>15 min read</span>
          <span>Updated January 2025</span>
        </div>

        <div className="bg-violet-50 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What You&apos;ll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Core prompt engineering principles and techniques</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Platform-specific strategies for Midjourney, DALL-E, and Stable Diffusion</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Advanced modifiers and keywords for precise control</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Common mistakes to avoid and troubleshooting tips</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <BookOpen className="w-5 h-5 mr-2" />
          Table of Contents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <a href="#fundamentals" className="text-violet-600 hover:text-violet-700 py-1">1. Prompt Engineering Fundamentals</a>
          <a href="#anatomy" className="text-violet-600 hover:text-violet-700 py-1">2. Anatomy of a Great Prompt</a>
          <a href="#platforms" className="text-violet-600 hover:text-violet-700 py-1">3. Platform-Specific Techniques</a>
          <a href="#modifiers" className="text-violet-600 hover:text-violet-700 py-1">4. Essential Modifiers & Keywords</a>
          <a href="#advanced" className="text-violet-600 hover:text-violet-700 py-1">5. Advanced Techniques</a>
          <a href="#troubleshooting" className="text-violet-600 hover:text-violet-700 py-1">6. Troubleshooting Common Issues</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        {/* Section 1: Fundamentals */}
        <section id="fundamentals" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-7 h-7 text-violet-600 mr-3" />
            1. Prompt Engineering Fundamentals
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Prompt engineering is the practice of crafting input text to guide AI models toward generating 
            desired outputs. It&apos;s both an art and a science that requires understanding how AI models 
            interpret language, visual concepts, and creative direction.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex items-start">
              <Lightbulb className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Principle</h3>
                <p className="text-blue-800">
                  The best prompts are specific, clear, and provide the AI with enough context to understand 
                  your creative vision while leaving room for artistic interpretation.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Three Pillars of Effective Prompts</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Clarity</h4>
              <p className="text-gray-600 text-sm">
                Use precise, descriptive language that leaves no ambiguity about your desired outcome.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Specificity</h4>
              <p className="text-gray-600 text-sm">
                Include relevant details about style, composition, lighting, and mood to guide the generation.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Context</h4>
              <p className="text-gray-600 text-sm">
                Provide background information and artistic references that help the AI understand your vision.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Anatomy */}
        <section id="anatomy" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Anatomy of a Great Prompt</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            A well-structured prompt typically follows a logical hierarchy, starting with the main subject 
            and expanding outward to include style, composition, and technical details.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Prompt Structure Template</h3>
            <div className="space-y-3 text-sm">
              <div className="flex">
                <span className="bg-violet-100 text-violet-800 px-2 py-1 rounded text-xs font-medium mr-3 min-w-0 flex-shrink-0">SUBJECT</span>
                <span className="text-gray-700">Main focus of your image (person, object, scene)</span>
              </div>
              <div className="flex">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-3 min-w-0 flex-shrink-0">ACTION</span>
                <span className="text-gray-700">What the subject is doing or the scene&apos;s activity</span>
              </div>
              <div className="flex">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium mr-3 min-w-0 flex-shrink-0">CONTEXT</span>
                <span className="text-gray-700">Setting, environment, or background details</span>
              </div>
              <div className="flex">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium mr-3 min-w-0 flex-shrink-0">STYLE</span>
                <span className="text-gray-700">Artistic style, medium, or aesthetic direction</span>
              </div>
              <div className="flex">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium mr-3 min-w-0 flex-shrink-0">TECHNICAL</span>
                <span className="text-gray-700">Camera settings, lighting, composition details</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Example: Breaking Down a Prompt</h3>
            <div className="bg-gray-50 rounded p-4 mb-4">
              <code className="text-sm">
                &quot;A serene Japanese garden with cherry blossoms in full bloom, traditional wooden bridge over a koi pond, 
                soft morning light filtering through the trees, watercolor painting style, pastel colors, peaceful atmosphere&quot;
              </code>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">Subject:</span> Japanese garden with cherry blossoms</div>
              <div><span className="font-medium">Context:</span> Traditional wooden bridge over koi pond</div>
              <div><span className="font-medium">Lighting:</span> Soft morning light filtering through trees</div>
              <div><span className="font-medium">Style:</span> Watercolor painting style, pastel colors</div>
              <div><span className="font-medium">Mood:</span> Peaceful atmosphere</div>
            </div>
          </div>
        </section>

        {/* Section 3: Platform-Specific */}
        <section id="platforms" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Platform-Specific Techniques</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Midjourney</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Use --ar for aspect ratios (--ar 16:9)</li>
                <li>• --stylize controls artistic interpretation</li>
                <li>• --chaos adds variety to generations</li>
                <li>• Double colons (::) for prompt weighting</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">DALL-E 3</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Excels with natural language descriptions</li>
                <li>• Be specific about text in images</li>
                <li>• Use descriptive adjectives liberally</li>
                <li>• Works well with storytelling prompts</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Stable Diffusion</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Use parentheses () for emphasis</li>
                <li>• Negative prompts to exclude elements</li>
                <li>• CFG scale controls adherence to prompt</li>
                <li>• Steps parameter affects detail level</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Continue with more sections... */}
        <section id="modifiers" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Essential Modifiers & Keywords</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Master these essential modifiers to fine-tune your AI art generation and achieve more precise results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality & Detail Modifiers</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded p-3">
                  <div className="font-medium text-gray-900">High Quality</div>
                  <div className="text-sm text-gray-600">masterpiece, best quality, ultra detailed, 8k resolution</div>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <div className="font-medium text-gray-900">Artistic Detail</div>
                  <div className="text-sm text-gray-600">intricate details, fine art, highly detailed, photorealistic</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lighting & Atmosphere</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded p-3">
                  <div className="font-medium text-gray-900">Natural Lighting</div>
                  <div className="text-sm text-gray-600">golden hour, soft lighting, natural light, sunbeam</div>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <div className="font-medium text-gray-900">Dramatic Lighting</div>
                  <div className="text-sm text-gray-600">dramatic lighting, chiaroscuro, rim lighting, backlighting</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CTASection
        title="Ready to Put Your Skills to Practice?"
        description="Use our free tools to generate and enhance your AI prompts with the techniques you've learned."
        primaryLink={{
          text: "Generate Prompts from Images",
          href: "/image-to-prompt"
        }}
        secondaryLink={{
          text: "Enhance Your Prompts",
          href: "/prompt-enhancer"
        }}
      />

      <RelatedLinks 
        title="Related Guides"
        items={relatedGuides}
      />
    </div>
  )
}