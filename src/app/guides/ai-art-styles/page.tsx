import { CheckCircle, BookOpen, Palette, Brush, Camera } from 'lucide-react'
import { HowToStructuredData, ArticleStructuredData } from '@/shared/components/seo'
import { Breadcrumbs, BreadcrumbStructuredData, RelatedLinks, CTASection } from '@/shared/components/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Art Styles Encyclopedia: Complete Guide to Artistic Styles | GetPrompts',
  description: 'Explore hundreds of artistic styles for AI art generation. From photorealism to abstract art, discover the perfect style keywords for Midjourney, DALL-E, and Stable Diffusion.',
  keywords: [
    'AI art styles', 
    'artistic styles', 
    'art style keywords', 
    'Midjourney styles',
    'DALL-E styles',
    'Stable Diffusion styles',
    'digital art styles',
    'painting styles',
    'photography styles',
    'illustration styles'
  ],
  openGraph: {
    title: 'AI Art Styles Encyclopedia: Complete Guide to Artistic Styles | GetPrompts',
    description: 'Comprehensive guide to artistic styles for AI art generation with practical examples and keywords.',
    url: 'https://getprompts.me/guides/ai-art-styles',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'AI Art Styles Guide' }],
  },
  alternates: {
    canonical: '/guides/ai-art-styles',
  },
}

export default function AIArtStylesPage() {
  const howToSteps = [
    {
      name: "Choose Your Style Category",
      text: "Determine whether you want photorealistic, painterly, digital, or abstract styles based on your creative vision."
    },
    {
      name: "Select Specific Style Keywords",
      text: "Pick precise style terms like 'oil painting', 'cyberpunk', or 'watercolor' to guide the AI generation."
    },
    {
      name: "Combine with Technical Modifiers",
      text: "Add quality and technique keywords like 'highly detailed', 'studio lighting', or 'professional photography'."
    },
    {
      name: "Test and Refine",
      text: "Generate samples with different style combinations and adjust based on results to perfect your artistic vision."
    }
  ]

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
    { label: 'AI Art Styles' }
  ]

  const relatedGuides = [
    {
      title: 'Prompt Engineering Guide',
      description: 'Master the fundamentals of AI prompt writing.',
      href: '/guides/prompt-engineering',
      category: 'Foundation'
    },
    {
      title: 'Complete Stable Diffusion Guide',
      description: 'Learn advanced Stable Diffusion techniques.',
      href: '/guides/stable-diffusion-guide',
      category: 'Platform Guide'
    },
    {
      title: 'Complete Midjourney Guide',
      description: 'Master Midjourney parameters and workflows.',
      href: '/guides/midjourney-guide',
      category: 'Platform Guide'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <ArticleStructuredData
        headline="AI Art Styles Encyclopedia: Complete Guide to Artistic Styles"
        description="Explore hundreds of artistic styles for AI art generation. From photorealism to abstract art, discover the perfect style keywords for AI models."
        datePublished="2025-01-11T00:00:00Z"
        dateModified="2025-01-11T00:00:00Z"
        author="GetPrompts Team"
        image="https://getprompts.me/og-image.jpg"
        keywords={[
          "AI art styles",
          "artistic styles", 
          "art style keywords",
          "Midjourney styles",
          "DALL-E styles",
          "Stable Diffusion styles"
        ]}
      />
      
      <HowToStructuredData
        name="How to Choose the Perfect Art Style for AI Generation"
        description="Step-by-step guide to selecting and applying artistic styles for stunning AI art creation."
        totalTime="PT10M"
        estimatedCost="$0"
        steps={howToSteps}
      />
      
      <BreadcrumbStructuredData items={breadcrumbItems} />
      
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex items-center mb-4">
          <div className="bg-pink-100 p-3 rounded-lg mr-4">
            <Palette className="w-6 h-6 text-pink-600" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              AI Art Styles Encyclopedia
            </h1>
            <p className="text-lg text-gray-600">
              Discover hundreds of artistic styles to transform your AI art with the perfect aesthetic
            </p>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-8">
          <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">All Skill Levels</span>
          <span>20 min read</span>
          <span>Updated January 2025</span>
        </div>

        <div className="bg-pink-50 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What You&apos;ll Discover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">200+ artistic styles with practical examples</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Style keywords optimized for different AI platforms</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">How to combine styles for unique aesthetics</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Era-specific and movement-based style guides</span>
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
          <a href="#photorealistic" className="text-pink-600 hover:text-pink-700 py-1">1. Photorealistic Styles</a>
          <a href="#painterly" className="text-pink-600 hover:text-pink-700 py-1">2. Traditional Painting Styles</a>
          <a href="#digital" className="text-pink-600 hover:text-pink-700 py-1">3. Digital Art & Modern Styles</a>
          <a href="#historical" className="text-pink-600 hover:text-pink-700 py-1">4. Historical Art Movements</a>
          <a href="#illustration" className="text-pink-600 hover:text-pink-700 py-1">5. Illustration & Comic Styles</a>
          <a href="#experimental" className="text-pink-600 hover:text-pink-700 py-1">6. Experimental & Abstract</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        {/* Section 1: Photorealistic */}
        <section id="photorealistic" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Camera className="w-7 h-7 text-pink-600 mr-3" />
            1. Photorealistic Styles
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            These styles aim to create images that look like high-quality photographs, perfect for 
            realistic portraits, landscapes, and product photography.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Portrait Photography</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Keywords:</strong> portrait photography, professional headshot, studio lighting</div>
                <div><strong>Quality:</strong> 85mm lens, shallow depth of field, bokeh</div>
                <div><strong>Lighting:</strong> soft lighting, natural light, golden hour</div>
                <div><strong>Best for:</strong> Character portraits, professional photos</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Landscape Photography</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Keywords:</strong> landscape photography, nature photography, wide angle</div>
                <div><strong>Quality:</strong> 16-35mm lens, high resolution, HDR</div>
                <div><strong>Lighting:</strong> golden hour, blue hour, dramatic lighting</div>
                <div><strong>Best for:</strong> Scenic views, environmental shots</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Street Photography</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Keywords:</strong> street photography, candid, urban, documentary</div>
                <div><strong>Quality:</strong> 35mm lens, natural lighting, grain</div>
                <div><strong>Style:</strong> black and white, high contrast, gritty</div>
                <div><strong>Best for:</strong> Urban scenes, lifestyle images</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fashion Photography</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Keywords:</strong> fashion photography, editorial, high fashion</div>
                <div><strong>Quality:</strong> medium format, crisp details, color grading</div>
                <div><strong>Lighting:</strong> studio lighting, dramatic shadows, clean</div>
                <div><strong>Best for:</strong> Fashion shoots, product imagery</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Traditional Painting */}
        <section id="painterly" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Brush className="w-7 h-7 text-pink-600 mr-3" />
            2. Traditional Painting Styles
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Classic painting techniques and mediums that have defined art for centuries, 
            perfect for creating timeless and elegant AI artwork.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Oil Painting</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div><strong>Style:</strong> oil painting, classical, Renaissance</div>
                <div><strong>Texture:</strong> thick brushstrokes, impasto, glazing</div>
                <div><strong>Examples:</strong> Rembrandt style, baroque painting</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Watercolor</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div><strong>Style:</strong> watercolor painting, translucent, flowing</div>
                <div><strong>Texture:</strong> wet on wet, soft edges, bleeding colors</div>
                <div><strong>Examples:</strong> botanical illustration, loose style</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Acrylic Painting</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div><strong>Style:</strong> acrylic painting, vibrant colors, modern</div>
                <div><strong>Texture:</strong> sharp edges, flat colors, layered</div>
                <div><strong>Examples:</strong> pop art, contemporary painting</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Pastel Drawing</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div><strong>Style:</strong> pastel drawing, soft, dreamy, chalk</div>
                <div><strong>Texture:</strong> smooth blending, dusty, matte finish</div>
                <div><strong>Examples:</strong> portrait drawing, landscape sketches</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Ink Drawing</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div><strong>Style:</strong> ink drawing, pen and ink, crosshatching</div>
                <div><strong>Texture:</strong> fine lines, stippling, bold contrasts</div>
                <div><strong>Examples:</strong> technical illustration, comics</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Charcoal Drawing</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div><strong>Style:</strong> charcoal drawing, dramatic, monochrome</div>
                <div><strong>Texture:</strong> smudged, soft gradients, deep blacks</div>
                <div><strong>Examples:</strong> figure drawing, dramatic portraits</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Digital Art */}
        <section id="digital" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Digital Art & Modern Styles</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Contemporary digital art styles that embrace technology and modern aesthetics, 
            perfect for futuristic and cutting-edge artwork.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cyberpunk & Sci-Fi</h3>
              <div className="space-y-3">
                <div className="bg-purple-50 rounded p-3">
                  <div className="font-medium text-gray-900">Cyberpunk</div>
                  <div className="text-sm text-gray-600">neon lights, dark atmosphere, futuristic cityscape, rain</div>
                </div>
                <div className="bg-purple-50 rounded p-3">
                  <div className="font-medium text-gray-900">Synthwave</div>
                  <div className="text-sm text-gray-600">retrowave, neon grid, purple and pink, 80s aesthetic</div>
                </div>
                <div className="bg-purple-50 rounded p-3">
                  <div className="font-medium text-gray-900">Space Art</div>
                  <div className="text-sm text-gray-600">cosmic, nebula, stars, planets, deep space</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fantasy & Gaming</h3>
              <div className="space-y-3">
                <div className="bg-green-50 rounded p-3">
                  <div className="font-medium text-gray-900">Fantasy Art</div>
                  <div className="text-sm text-gray-600">medieval fantasy, dragons, magic, epic landscapes</div>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <div className="font-medium text-gray-900">Concept Art</div>
                  <div className="text-sm text-gray-600">game concept art, environment design, character design</div>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <div className="font-medium text-gray-900">Steampunk</div>
                  <div className="text-sm text-gray-600">victorian, mechanical, brass gears, steam powered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Historical Movements */}
        <section id="historical" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Historical Art Movements</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Iconic art movements throughout history, each with distinctive characteristics 
            and aesthetic principles that shaped the art world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Impressionism</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div><strong>Era:</strong> 1870s-1880s</div>
                <div><strong>Style:</strong> loose brushwork, light effects, outdoor scenes</div>
                <div><strong>Keywords:</strong> impressionist, Monet style, plein air</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Art Nouveau</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div><strong>Era:</strong> 1890-1910</div>
                <div><strong>Style:</strong> organic forms, flowing lines, nature motifs</div>
                <div><strong>Keywords:</strong> art nouveau, Mucha style, decorative</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Art Deco</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div><strong>Era:</strong> 1920s-1930s</div>
                <div><strong>Style:</strong> geometric patterns, luxury, streamlined</div>
                <div><strong>Keywords:</strong> art deco, geometric, golden age</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Cubism</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div><strong>Era:</strong> 1907-1920s</div>
                <div><strong>Style:</strong> geometric shapes, multiple perspectives</div>
                <div><strong>Keywords:</strong> cubist, Picasso style, abstract geometric</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibf text-gray-900 mb-2">Surrealism</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div><strong>Era:</strong> 1920s-1940s</div>
                <div><strong>Style:</strong> dreamlike, impossible scenes, subconscious</div>
                <div><strong>Keywords:</strong> surreal, Dalí style, dreamscape</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Pop Art</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div><strong>Era:</strong> 1950s-1960s</div>
                <div><strong>Style:</strong> bold colors, commercial imagery, mass culture</div>
                <div><strong>Keywords:</strong> pop art, Warhol style, comic book</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Illustration Styles */}
        <section id="illustration" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Illustration & Comic Styles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Animation & Cartoon</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 rounded p-3">
                  <div className="font-medium text-gray-900">Disney Style</div>
                  <div className="text-sm text-gray-600">Disney animation, cartoon, cute characters, colorful</div>
                </div>
                <div className="bg-blue-50 rounded p-3">
                  <div className="font-medium text-gray-900">Anime/Manga</div>
                  <div className="text-sm text-gray-600">anime style, manga, Japanese animation, cel shading</div>
                </div>
                <div className="bg-blue-50 rounded p-3">
                  <div className="font-medium text-gray-900">Pixar Style</div>
                  <div className="text-sm text-gray-600">3D animation, Pixar style, render, character design</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Comic & Graphic Novel</h3>
              <div className="space-y-3">
                <div className="bg-orange-50 rounded p-3">
                  <div className="font-medium text-gray-900">Comic Book</div>
                  <div className="text-sm text-gray-600">comic book style, superhero, bold lines, halftone</div>
                </div>
                <div className="bg-orange-50 rounded p-3">
                  <div className="font-medium text-gray-900">Graphic Novel</div>
                  <div className="text-sm text-gray-600">graphic novel, noir, detailed illustration</div>
                </div>
                <div className="bg-orange-50 rounded p-3">
                  <div className="font-medium text-gray-900">Webcomic</div>
                  <div className="text-sm text-gray-600">webcomic style, simple lines, expressive</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Experimental */}
        <section id="experimental" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Experimental & Abstract</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Push the boundaries of AI art with experimental styles that create unique, 
            abstract, and avant-garde visual experiences.
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Experimental Techniques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Abstract Expressionism</h4>
                <div className="text-sm text-gray-600">abstract expressionist, Jackson Pollock style, gestural, emotional</div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Glitch Art</h4>
                <div className="text-sm text-gray-600">glitch art, digital corruption, databending, error aesthetic</div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Vaporwave</h4>
                <div className="text-sm text-gray-600">vaporwave, aesthetic, retro, pink and blue, marble statues</div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Double Exposure</h4>
                <div className="text-sm text-gray-600">double exposure, silhouette, blended imagery, artistic photography</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CTASection
        title="Ready to Experiment with Art Styles?"
        description="Use our tools to generate and enhance prompts with the perfect artistic style for your vision."
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