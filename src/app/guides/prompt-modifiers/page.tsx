import { CheckCircle, BookOpen, Star, Tags } from 'lucide-react'
import { HowToStructuredData, ArticleStructuredData } from '@/shared/components/seo'
import { Breadcrumbs, BreadcrumbStructuredData, RelatedLinks, CTASection } from '@/shared/components/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Prompt Modifiers & Keywords Guide: Master Precise Control | GetPrompts',
  description: 'Complete reference guide to prompt modifiers and keywords for AI art generation. Essential terms for quality, style, lighting, composition, and technical control.',
  keywords: [
    'prompt modifiers', 
    'AI prompt keywords', 
    'quality modifiers', 
    'style keywords',
    'lighting terms',
    'composition modifiers',
    'technical keywords',
    'AI art control',
    'prompt engineering',
    'modifier reference'
  ],
  openGraph: {
    title: 'AI Prompt Modifiers & Keywords Guide: Master Precise Control | GetPrompts',
    description: 'Essential reference for prompt modifiers and keywords to achieve precise control over AI art generation.',
    url: 'https://getprompts.me/guides/prompt-modifiers',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Prompt Modifiers Guide' }],
  },
  alternates: {
    canonical: '/guides/prompt-modifiers',
  },
}

export default function PromptModifiersPage() {
  const howToSteps = [
    {
      name: "Identify Your Control Needs",
      text: "Determine what aspects you want to control: quality, style, lighting, composition, or technical parameters."
    },
    {
      name: "Select Appropriate Modifiers",
      text: "Choose specific keywords from the relevant categories to achieve your desired effect."
    },
    {
      name: "Layer Modifiers Strategically",
      text: "Combine quality modifiers with style and technical terms, placing most important keywords first."
    },
    {
      name: "Test and Refine",
      text: "Generate samples and adjust modifier combinations based on results to perfect your control."
    }
  ]

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
    { label: 'Prompt Modifiers' }
  ]

  const relatedGuides = [
    {
      title: 'Prompt Engineering Guide',
      description: 'Learn the fundamentals of effective prompt writing.',
      href: '/guides/prompt-engineering',
      category: 'Foundation'
    },
    {
      title: 'AI Art Styles Encyclopedia',
      description: 'Explore artistic styles for your AI creations.',
      href: '/guides/ai-art-styles',
      category: 'Creative Guide'
    },
    {
      title: 'Complete Stable Diffusion Guide',
      description: 'Master Stable Diffusion techniques and workflows.',
      href: '/guides/stable-diffusion-guide',
      category: 'Platform Guide'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <ArticleStructuredData
        headline="AI Prompt Modifiers & Keywords Guide: Master Precise Control"
        description="Complete reference guide to prompt modifiers and keywords for AI art generation. Essential terms for quality, style, lighting, composition, and technical control."
        datePublished="2025-01-11T00:00:00Z"
        dateModified="2025-01-11T00:00:00Z"
        author="GetPrompts Team"
        image="https://getprompts.me/og-image.jpg"
        keywords={[
          "prompt modifiers",
          "AI prompt keywords", 
          "quality modifiers",
          "style keywords",
          "lighting terms",
          "composition modifiers"
        ]}
      />
      
      <HowToStructuredData
        name="How to Use Prompt Modifiers for Precise AI Art Control"
        description="Master the use of modifiers and keywords to achieve exact control over AI art generation quality and style."
        totalTime="PT15M"
        estimatedCost="$0"
        steps={howToSteps}
      />
      
      <BreadcrumbStructuredData items={breadcrumbItems} />
      
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <Tags className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Prompt Modifiers & Keywords
            </h1>
            <p className="text-lg text-gray-600">
              Complete reference guide for precise AI art control with essential modifiers and keywords
            </p>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-8">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Reference Guide</span>
          <span>10 min read</span>
          <span>Updated January 2025</span>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What You&apos;ll Find</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">500+ essential modifiers organized by category</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Quality, style, and technical control keywords</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Platform-specific modifier usage tips</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Combination strategies for maximum effect</span>
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
          <a href="#quality" className="text-blue-600 hover:text-blue-700 py-1">1. Quality & Detail Modifiers</a>
          <a href="#lighting" className="text-blue-600 hover:text-blue-700 py-1">2. Lighting & Atmosphere</a>
          <a href="#composition" className="text-blue-600 hover:text-blue-700 py-1">3. Composition & Framing</a>
          <a href="#technical" className="text-blue-600 hover:text-blue-700 py-1">4. Technical & Camera Settings</a>
          <a href="#artistic" className="text-blue-600 hover:text-blue-700 py-1">5. Artistic Style Modifiers</a>
          <a href="#negative" className="text-blue-600 hover:text-blue-700 py-1">6. Negative Prompt Essentials</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        {/* Section 1: Quality Modifiers */}
        <section id="quality" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Star className="w-7 h-7 text-blue-600 mr-3" />
            1. Quality & Detail Modifiers
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            These modifiers enhance the overall quality, detail level, and visual fidelity of your AI-generated images. 
            Use them at the beginning of your prompts for maximum impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ultra High Quality</h3>
              <div className="bg-green-50 rounded-lg p-4 space-y-2">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="font-medium">masterpiece</span>
                  <span className="font-medium">best quality</span>
                  <span className="font-medium">ultra detailed</span>
                  <span className="font-medium">extremely detailed</span>
                  <span className="font-medium">highly detailed</span>
                  <span className="font-medium">professional</span>
                  <span className="font-medium">8k resolution</span>
                  <span className="font-medium">4k resolution</span>
                  <span className="font-medium">high resolution</span>
                  <span className="font-medium">ultra high res</span>
                  <span className="font-medium">sharp focus</span>
                  <span className="font-medium">crystal clear</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Detail Enhancement</h3>
              <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="font-medium">intricate details</span>
                  <span className="font-medium">fine details</span>
                  <span className="font-medium">detailed texture</span>
                  <span className="font-medium">hyper realistic</span>
                  <span className="font-medium">photorealistic</span>
                  <span className="font-medium">lifelike</span>
                  <span className="font-medium">crisp</span>
                  <span className="font-medium">pristine</span>
                  <span className="font-medium">flawless</span>
                  <span className="font-medium">immaculate</span>
                  <span className="font-medium">perfection</span>
                  <span className="font-medium">stunning detail</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Pro Tip: Quality Stacking</h3>
            <p className="text-gray-700 text-sm">
              Combine 2-3 quality modifiers for maximum effect: &quot;masterpiece, best quality, ultra detailed&quot; 
              works excellently across all AI platforms. Place these at the very beginning of your prompt.
            </p>
          </div>
        </section>

        {/* Section 2: Lighting */}
        <section id="lighting" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Lighting & Atmosphere</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Lighting modifiers dramatically affect mood, atmosphere, and visual impact. Choose lighting 
            that matches your creative vision and subject matter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Natural Lighting</h3>
              <div className="space-y-1 text-sm text-gray-700">
                <div>• golden hour</div>
                <div>• blue hour</div>
                <div>• soft natural light</div>
                <div>• sunlight</div>
                <div>• sunset lighting</div>
                <div>• sunrise lighting</div>
                <div>• overcast lighting</div>
                <div>• dappled sunlight</div>
                <div>• window light</div>
                <div>• outdoor lighting</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Studio Lighting</h3>
              <div className="space-y-1 text-sm text-gray-700">
                <div>• studio lighting</div>
                <div>• professional lighting</div>
                <div>• soft box lighting</div>
                <div>• ring light</div>
                <div>• three-point lighting</div>
                <div>• key lighting</div>
                <div>• fill lighting</div>
                <div>• rim lighting</div>
                <div>• backlighting</div>
                <div>• ambient lighting</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Dramatic Lighting</h3>
              <div className="space-y-1 text-sm text-gray-700">
                <div>• dramatic lighting</div>
                <div>• chiaroscuro</div>
                <div>• high contrast lighting</div>
                <div>• moody lighting</div>
                <div>• cinematic lighting</div>
                <div>• volumetric lighting</div>
                <div>• god rays</div>
                <div>• lens flare</div>
                <div>• neon lighting</div>
                <div>• candlelight</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Composition */}
        <section id="composition" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Composition & Framing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Shot Types & Framing</h3>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div><strong>closeup:</strong> face detail</div>
                  <div><strong>medium shot:</strong> torso up</div>
                  <div><strong>full body:</strong> entire figure</div>
                  <div><strong>wide shot:</strong> environmental</div>
                  <div><strong>extreme closeup:</strong> eyes/details</div>
                  <div><strong>establishing shot:</strong> scene setting</div>
                  <div><strong>over shoulder:</strong> perspective</div>
                  <div><strong>bird&apos;s eye view:</strong> top down</div>
                  <div><strong>worm&apos;s eye view:</strong> bottom up</div>
                  <div><strong>dutch angle:</strong> tilted frame</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compositional Techniques</h3>
              <div className="bg-orange-50 rounded-lg p-4">
                <div className="space-y-1 text-sm">
                  <div>• rule of thirds</div>
                  <div>• centered composition</div>
                  <div>• symmetrical composition</div>
                  <div>• leading lines</div>
                  <div>• diagonal composition</div>
                  <div>• frame within frame</div>
                  <div>• negative space</div>
                  <div>• depth of field</div>
                  <div>• foreground focus</div>
                  <div>• background blur</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Technical */}
        <section id="technical" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Technical & Camera Settings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Camera & Lens</h3>
              <div className="space-y-1 text-sm text-gray-700">
                <div>• 85mm lens</div>
                <div>• 50mm lens</div>
                <div>• 35mm lens</div>
                <div>• 24-70mm</div>
                <div>• macro lens</div>
                <div>• wide angle lens</div>
                <div>• telephoto lens</div>
                <div>• fisheye lens</div>
                <div>• prime lens</div>
                <div>• zoom lens</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Camera Settings</h3>
              <div className="space-y-1 text-sm text-gray-700">
                <div>• shallow depth of field</div>
                <div>• deep depth of field</div>
                <div>• fast shutter speed</div>
                <div>• slow shutter speed</div>
                <div>• high ISO</div>
                <div>• low ISO</div>
                <div>• wide aperture</div>
                <div>• narrow aperture</div>
                <div>• long exposure</div>
                <div>• double exposure</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Image Effects</h3>
              <div className="space-y-1 text-sm text-gray-700">
                <div>• bokeh</div>
                <div>• motion blur</div>
                <div>• film grain</div>
                <div>• vignette</div>
                <div>• chromatic aberration</div>
                <div>• lens distortion</div>
                <div>• color grading</div>
                <div>• high dynamic range</div>
                <div>• overexposed</div>
                <div>• underexposed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Artistic Style */}
        <section id="artistic" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Artistic Style Modifiers</h2>
          
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Medium & Technique</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <strong>Traditional:</strong>
                <div>oil painting</div>
                <div>watercolor</div>
                <div>acrylic painting</div>
                <div>pencil drawing</div>
                <div>charcoal drawing</div>
              </div>
              <div>
                <strong>Digital:</strong>
                <div>digital art</div>
                <div>digital painting</div>
                <div>concept art</div>
                <div>matte painting</div>
                <div>3D render</div>
              </div>
              <div>
                <strong>Illustration:</strong>
                <div>vector art</div>
                <div>line art</div>
                <div>comic book style</div>
                <div>anime style</div>
                <div>cartoon style</div>
              </div>
              <div>
                <strong>Photography:</strong>
                <div>film photography</div>
                <div>vintage photography</div>
                <div>polaroid</div>
                <div>infrared photography</div>
                <div>black and white</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Negative Prompts */}
        <section id="negative" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Negative Prompt Essentials</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Negative prompts tell the AI what to avoid. These are crucial for preventing common 
            issues and ensuring clean, professional results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Issues</h3>
              <div className="bg-red-50 rounded-lg p-4">
                <div className="text-sm space-y-1">
                  <div>worst quality, low quality</div>
                  <div>blurry, out of focus</div>
                  <div>pixelated, low resolution</div>
                  <div>jpeg artifacts</div>
                  <div>noise, grainy</div>
                  <div>oversaturated</div>
                  <div>undersaturated</div>
                  <div>overexposed</div>
                  <div>underexposed</div>
                  <div>amateur, unprofessional</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Anatomy & Technical</h3>
              <div className="bg-red-50 rounded-lg p-4">
                <div className="text-sm space-y-1">
                  <div>bad anatomy</div>
                  <div>extra limbs</div>
                  <div>missing limbs</div>
                  <div>deformed hands</div>
                  <div>extra fingers</div>
                  <div>malformed eyes</div>
                  <div>distorted face</div>
                  <div>cropped</div>
                  <div>text, watermark</div>
                  <div>signature, username</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8">
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">Universal Negative Prompt</h3>
            <div className="bg-white rounded p-4 mb-3">
              <code className="text-sm text-gray-800">
                (worst quality, low quality), blurry, out of focus, bad anatomy, extra limbs, 
                deformed hands, extra fingers, watermark, signature, text, cropped
              </code>
            </div>
            <p className="text-yellow-800 text-sm">
              This universal negative prompt works well for most AI art generation scenarios. 
              Customize by adding specific elements you want to avoid.
            </p>
          </div>
        </section>
      </div>

      <CTASection
        title="Ready to Master Prompt Control?"
        description="Use our tools to generate and enhance prompts with the perfect modifiers for your vision."
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