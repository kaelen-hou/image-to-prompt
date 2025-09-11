import { CheckCircle, Lightbulb, Target, BookOpen, Settings, Wand2, Sparkles } from 'lucide-react'
import { HowToStructuredData, ArticleStructuredData } from '@/shared/components/seo'
import { Breadcrumbs, BreadcrumbStructuredData, RelatedLinks, CTASection } from '@/shared/components/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete Midjourney Guide: Master AI Art Generation | GetPrompts',
  description: 'Comprehensive guide to Midjourney - from basic prompts to advanced parameters, styles, and techniques for creating stunning AI art with Discord commands.',
  keywords: [
    'Midjourney guide', 
    'Midjourney prompts', 
    'Midjourney parameters', 
    'Midjourney tutorial',
    'AI art generation',
    'Discord bot',
    'Midjourney commands',
    'aspect ratio',
    'stylize parameter',
    'Midjourney styles'
  ],
  authors: [{ name: 'GetPrompts Team' }],
  creator: 'GetPrompts',
  publisher: 'GetPrompts',
  openGraph: {
    title: 'Complete Midjourney Guide: Master AI Art Generation | GetPrompts',
    description: 'Master Midjourney from basics to advanced techniques. Complete guide to prompts, parameters, and professional AI art creation.',
    url: 'https://getprompts.me/guides/midjourney-guide',
    siteName: 'GetPrompts',
    images: [{ 
      url: '/og-image.jpg', 
      width: 1200, 
      height: 630, 
      alt: 'Midjourney Guide',
      type: 'image/jpeg'
    }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Midjourney Guide: Master AI Art Generation | GetPrompts',
    description: 'Master Midjourney from basics to advanced techniques. Complete guide to prompts, parameters, and professional AI art creation.',
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
    canonical: '/guides/midjourney-guide',
  },
}

export default function MidjourneyGuidePage() {
  const howToSteps = [
    {
      name: "Join Midjourney Discord",
      text: "Sign up for Midjourney and join their Discord server. Choose a subscription plan that fits your needs."
    },
    {
      name: "Learn Basic Commands",
      text: "Master the /imagine command and understand how to structure effective prompts with subjects, styles, and modifiers."
    },
    {
      name: "Explore Parameters",
      text: "Learn essential parameters like --ar for aspect ratio, --stylize for artistic control, and --chaos for variety."
    },
    {
      name: "Practice Advanced Techniques",
      text: "Experiment with remix mode, style references, multi-prompts, and advanced workflows for professional results."
    }
  ]

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
    { label: 'Midjourney Guide' }
  ]

  const relatedGuides = [
    {
      title: 'Prompt Engineering Guide',
      description: 'Master the fundamentals of AI prompt writing.',
      href: '/guides/prompt-engineering',
      category: 'Foundation'
    },
    {
      title: 'AI Art Styles Encyclopedia',
      description: 'Explore artistic styles for your creations.',
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
        headline="Complete Midjourney Guide: Master AI Art Generation"
        description="Comprehensive guide to Midjourney - from basic prompts to advanced parameters, styles, and techniques for creating stunning AI art."
        datePublished="2025-01-11T00:00:00Z"
        dateModified="2025-01-11T00:00:00Z"
        author="GetPrompts Team"
        image="https://getprompts.me/og-image.jpg"
        keywords={[
          "Midjourney guide",
          "Midjourney prompts", 
          "Midjourney parameters",
          "AI art generation",
          "Discord bot",
          "Midjourney commands"
        ]}
      />
      
      <HowToStructuredData
        name="How to Create Art with Midjourney"
        description="Step-by-step guide to mastering Midjourney for professional AI art creation, from setup to advanced techniques."
        totalTime="PT45M"
        estimatedCost="$10-60"
        steps={howToSteps}
      />
      
      <BreadcrumbStructuredData items={breadcrumbItems} />
      
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-100 p-3 rounded-lg mr-4">
            <Wand2 className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Complete Midjourney Guide
            </h1>
            <p className="text-lg text-gray-600">
              Master the world&apos;s most popular AI art generator with comprehensive tutorials and techniques
            </p>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-8">
          <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">Beginner to Pro</span>
          <span>30 min read</span>
          <span>Updated January 2025</span>
        </div>

        <div className="bg-indigo-50 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What You&apos;ll Master</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Discord setup and subscription management</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Advanced prompting techniques and parameters</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Style references and artistic control methods</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Professional workflows and batch generation</span>
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
          <a href="#getting-started" className="text-indigo-600 hover:text-indigo-700 py-1">1. Getting Started with Midjourney</a>
          <a href="#basic-commands" className="text-indigo-600 hover:text-indigo-700 py-1">2. Basic Commands & Interface</a>
          <a href="#prompting" className="text-indigo-600 hover:text-indigo-700 py-1">3. Advanced Prompting Techniques</a>
          <a href="#parameters" className="text-indigo-600 hover:text-indigo-700 py-1">4. Essential Parameters Guide</a>
          <a href="#styles" className="text-indigo-600 hover:text-indigo-700 py-1">5. Styles & Artistic Control</a>
          <a href="#workflows" className="text-indigo-600 hover:text-indigo-700 py-1">6. Professional Workflows</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        {/* Section 1: Getting Started */}
        <section id="getting-started" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-7 h-7 text-indigo-600 mr-3" />
            1. Getting Started with Midjourney
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Midjourney is a Discord-based AI art generator that creates stunning images from text prompts. 
            Unlike other AI tools, it operates entirely through Discord commands, making it unique and social.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex items-start">
              <Lightbulb className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Why Choose Midjourney?</h3>
                <ul className="text-blue-800 space-y-1">
                  <li>• <strong>Exceptional quality</strong> - Industry-leading photorealistic and artistic results</li>
                  <li>• <strong>Easy to use</strong> - Simple Discord commands, no technical setup required</li>
                  <li>• <strong>Active community</strong> - Learn from millions of users and shared prompts</li>
                  <li>• <strong>Consistent updates</strong> - Regular model improvements and new features</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Setup Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Step 1: Account Setup</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Create Discord account if needed</li>
                <li>• Visit midjourney.com</li>
                <li>• Join the Midjourney Discord server</li>
                <li>• Verify your account via email</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Step 2: Choose Plan</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Basic: $10/month (200 images)</li>
                <li>• Standard: $30/month (unlimited relaxed)</li>
                <li>• Pro: $60/month (unlimited fast)</li>
                <li>• Mega: $120/month (unlimited stealth)</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Step 3: First Image</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Navigate to #newbies channel</li>
                <li>• Type /imagine command</li>
                <li>• Enter your first prompt</li>
                <li>• Wait for generation (1-2 minutes)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Basic Commands */}
        <section id="basic-commands" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Settings className="w-7 h-7 text-indigo-600 mr-3" />
            2. Basic Commands & Interface
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Midjourney uses Discord slash commands to generate and modify images. Understanding these 
            commands is essential for effective use of the platform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Commands</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">/imagine</h4>
                  <p className="text-sm text-gray-600 mb-2">Generate new images from text prompts</p>
                  <code className="text-xs bg-white px-2 py-1 rounded">/imagine a majestic dragon --ar 16:9</code>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">/blend</h4>
                  <p className="text-sm text-gray-600 mb-2">Combine 2-5 uploaded images</p>
                  <code className="text-xs bg-white px-2 py-1 rounded">/blend [image1] [image2]</code>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">/describe</h4>
                  <p className="text-sm text-gray-600 mb-2">Generate prompts from uploaded images</p>
                  <code className="text-xs bg-white px-2 py-1 rounded">/describe [image]</code>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Image Actions</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">U1, U2, U3, U4</h4>
                  <p className="text-sm text-gray-600">Upscale selected image to higher resolution</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">V1, V2, V3, V4</h4>
                  <p className="text-sm text-gray-600">Create variations of selected image</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🔄 Re-roll</h4>
                  <p className="text-sm text-gray-600">Generate new set with same prompt</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">❤️ Favorite</h4>
                  <p className="text-sm text-gray-600">Save image to your favorites gallery</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Advanced Prompting */}
        <section id="prompting" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Advanced Prompting Techniques</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Effective Midjourney prompts combine descriptive language with strategic structure. 
            Learn how to craft prompts that consistently deliver stunning results.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimal Prompt Structure</h3>
            <div className="bg-gray-50 rounded p-4 mb-4">
              <code className="text-sm">
                [Subject] [Action/Pose] [Environment/Setting] [Style] [Lighting] [Camera/Technical] [Parameters]
              </code>
            </div>
            <div className="bg-indigo-50 rounded p-4">
              <h4 className="font-medium text-indigo-900 mb-2">Example:</h4>
              <code className="text-sm text-indigo-800">
                Portrait of a wise old wizard, casting a spell, in ancient library filled with glowing books, 
                fantasy art style, dramatic lighting with magical sparkles, 85mm lens, shallow depth of field --ar 3:4 --stylize 150
              </code>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Prompts & Weights</h3>
              <div className="space-y-3">
                <div className="bg-purple-50 rounded p-3">
                  <div className="font-medium text-gray-900">Basic Multi-Prompt</div>
                  <code className="text-sm text-gray-600">red roses :: white lilies</code>
                  <div className="text-xs text-gray-500 mt-1">Equal weight to both elements</div>
                </div>
                <div className="bg-purple-50 rounded p-3">
                  <div className="font-medium text-gray-900">Weighted Multi-Prompt</div>
                  <code className="text-sm text-gray-600">red roses::2 white lilies::1</code>
                  <div className="text-xs text-gray-500 mt-1">Roses twice as important as lilies</div>
                </div>
                <div className="bg-purple-50 rounded p-3">
                  <div className="font-medium text-gray-900">Negative Weights</div>
                  <code className="text-sm text-gray-600">beautiful garden flowers --no weeds::2</code>
                  <div className="text-xs text-gray-500 mt-1">Strongly avoid unwanted elements</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Style & Quality Modifiers</h3>
              <div className="space-y-3">
                <div className="bg-green-50 rounded p-3">
                  <div className="font-medium text-gray-900">Quality Enhancers</div>
                  <div className="text-sm text-gray-600">highly detailed, masterpiece, professional photography</div>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <div className="font-medium text-gray-900">Artistic Styles</div>
                  <div className="text-sm text-gray-600">oil painting, digital art, pencil sketch, watercolor</div>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <div className="font-medium text-gray-900">Photography Terms</div>
                  <div className="text-sm text-gray-600">portrait photography, 85mm lens, bokeh, golden hour</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Parameters */}
        <section id="parameters" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Essential Parameters Guide</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Midjourney parameters give you precise control over generation settings. These powerful 
            tools can dramatically change your results and workflow efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Aspect Ratio (--ar)</h3>
              <div className="space-y-2 text-sm">
                <div><code>--ar 1:1</code> Square (Instagram)</div>
                <div><code>--ar 3:4</code> Portrait (Mobile)</div>
                <div><code>--ar 4:3</code> Landscape (Classic)</div>
                <div><code>--ar 16:9</code> Widescreen (Cinema)</div>
                <div><code>--ar 9:16</code> Vertical (Stories)</div>
                <div><code>--ar 21:9</code> Ultra-wide</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Stylize (--stylize)</h3>
              <div className="space-y-2 text-sm">
                <div><code>--stylize 0</code> Literal interpretation</div>
                <div><code>--stylize 100</code> Balanced (default)</div>
                <div><code>--stylize 250</code> More artistic</div>
                <div><code>--stylize 750</code> Very artistic</div>
                <div><code>--stylize 1000</code> Maximum creativity</div>
                <div className="text-xs text-gray-500 mt-2">Higher = more artistic liberty</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Chaos (--chaos)</h3>
              <div className="space-y-2 text-sm">
                <div><code>--chaos 0</code> Very similar results</div>
                <div><code>--chaos 25</code> Some variation</div>
                <div><code>--chaos 50</code> Moderate diversity</div>
                <div><code>--chaos 75</code> High variation</div>
                <div><code>--chaos 100</code> Maximum diversity</div>
                <div className="text-xs text-gray-500 mt-2">Higher = more varied compositions</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quality (--quality)</h3>
              <div className="space-y-2 text-sm">
                <div><code>--quality 0.25</code> Fastest, least detailed</div>
                <div><code>--quality 0.5</code> Good balance</div>
                <div><code>--quality 1</code> Default quality</div>
                <div><code>--quality 2</code> Maximum detail</div>
                <div className="text-xs text-gray-500 mt-2">Higher = more render time/cost</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Seeds (--seed)</h3>
              <div className="space-y-2 text-sm">
                <div><code>--seed 12345</code> Reproducible results</div>
                <div className="text-xs text-gray-500">Same seed + prompt = similar images</div>
                <div className="text-xs text-gray-500">Use for consistent characters/styles</div>
                <div className="text-xs text-gray-500">Seeds range from 0 to 4294967295</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Stop (--stop)</h3>
              <div className="space-y-2 text-sm">
                <div><code>--stop 10</code> Very early stopping</div>
                <div><code>--stop 50</code> Halfway through</div>
                <div><code>--stop 80</code> Nearly complete</div>
                <div className="text-xs text-gray-500 mt-2">10-100, creates unfinished looks</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Styles */}
        <section id="styles" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Sparkles className="w-7 h-7 text-indigo-600 mr-3" />
            5. Styles & Artistic Control
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Midjourney excels at interpreting artistic styles and movements. Learn how to achieve 
            specific aesthetics and maintain consistency across your projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Style References (--sref)</h3>
              <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-gray-900 mb-2">How to Use Style References</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <div>1. Upload reference image to Discord</div>
                  <div>2. Copy image URL</div>
                  <div>3. Add to prompt: <code>--sref [URL]</code></div>
                  <div>4. Adjust strength with <code>--sw 0-1000</code></div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div><code>--sw 100</code> Subtle style influence</div>
                <div><code>--sw 500</code> Moderate style transfer</div>
                <div><code>--sw 1000</code> Strong style matching</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Character References (--cref)</h3>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Consistent Characters</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <div>1. Generate initial character image</div>
                  <div>2. Use image URL with <code>--cref</code></div>
                  <div>3. Control strength with <code>--cw</code></div>
                  <div>4. Maintain consistency across scenes</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div><code>--cw 0</code> Face only</div>
                <div><code>--cw 50</code> Face + hair (default)</div>
                <div><code>--cw 100</code> Face + hair + clothing</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Style Keywords</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <strong>Photography:</strong>
                <div>portrait photography</div>
                <div>street photography</div>
                <div>fashion photography</div>
                <div>macro photography</div>
              </div>
              <div>
                <strong>Digital Art:</strong>
                <div>concept art</div>
                <div>digital painting</div>
                <div>matte painting</div>
                <div>cyberpunk art</div>
              </div>
              <div>
                <strong>Traditional:</strong>
                <div>oil painting</div>
                <div>watercolor</div>
                <div>pencil sketch</div>
                <div>charcoal drawing</div>
              </div>
              <div>
                <strong>Cinematic:</strong>
                <div>movie still</div>
                <div>cinematic lighting</div>
                <div>film noir</div>
                <div>epic composition</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Professional Workflows */}
        <section id="workflows" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Professional Workflows</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Advanced techniques and workflows for professional AI art creation, including batch 
            generation, consistency techniques, and commercial applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Remix Mode Workflow</h3>
              <div className="bg-green-50 rounded-lg p-4">
                <ol className="text-sm text-gray-700 space-y-2">
                  <li>1. Enable Remix Mode with <code>/settings</code></li>
                  <li>2. Generate initial image set</li>
                  <li>3. Click variation buttons (V1-V4)</li>
                  <li>4. Modify prompt when remix dialog appears</li>
                  <li>5. Iterate with targeted changes</li>
                  <li>6. Build consistent style variations</li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Consistent Character Workflow</h3>
              <div className="bg-blue-50 rounded-lg p-4">
                <ol className="text-sm text-gray-700 space-y-2">
                  <li>1. Create detailed character prompt</li>
                  <li>2. Generate multiple angles/poses</li>
                  <li>3. Select best character image</li>
                  <li>4. Use <code>--cref</code> for consistency</li>
                  <li>5. Adjust <code>--cw</code> as needed</li>
                  <li>6. Create story sequences</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Batch Generation Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Efficiency Strategies</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Use consistent seed values for variations</li>
                  <li>• Create prompt templates for similar projects</li>
                  <li>• Batch similar style requirements together</li>
                  <li>• Use relaxed mode for non-urgent generations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Quality Control</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Always generate 4-image grids first</li>
                  <li>• Upscale only the best results</li>
                  <li>• Use variations for fine-tuning</li>
                  <li>• Save successful prompts and parameters</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">Pro Tips for Better Results</h3>
            <ul className="text-yellow-800 text-sm space-y-1">
              <li>• Start with simple prompts, then add complexity gradually</li>
              <li>• Use specific camera and lighting terms for photorealistic results</li>
              <li>• Combine multiple style references for unique aesthetics</li>
              <li>• Keep successful prompts organized in a personal database</li>
              <li>• Experiment with different stylize values for each project type</li>
            </ul>
          </div>
        </section>
      </div>

      <CTASection
        title="Ready to Master Midjourney?"
        description="Use our tools to generate and enhance prompts optimized for Midjourney&apos;s unique capabilities."
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