import { CheckCircle, Lightbulb, Target, BookOpen, Settings, Palette, Image as ImageIcon } from 'lucide-react'
import { HowToStructuredData, ArticleStructuredData } from '@/shared/components/seo'
import { Breadcrumbs, BreadcrumbStructuredData, RelatedLinks, CTASection } from '@/shared/components/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete Stable Diffusion Guide: Master AI Art Generation | GetPrompts',
  description: 'Learn everything about Stable Diffusion - from basic prompting to advanced techniques, models, settings, and workflows for creating stunning AI art.',
  keywords: [
    'Stable Diffusion guide',
    'Stable Diffusion prompts',
    'AI art generation',
    'Stable Diffusion tutorial',
    'SD models',
    'negative prompts',
    'CFG scale',
    'sampling methods',
    'LoRA models',
    'Stable Diffusion settings'
  ],
  openGraph: {
    title: 'Complete Stable Diffusion Guide: Master AI Art Generation | GetPrompts',
    description: 'Comprehensive guide to Stable Diffusion - from beginner basics to advanced techniques for professional AI art creation.',
    url: 'https://getprompts.me/guides/stable-diffusion-guide',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Stable Diffusion Guide' }],
  },
  alternates: {
    canonical: '/guides/stable-diffusion-guide',
  },
}

export default function StableDiffusionGuidePage() {
  const howToSteps = [
    {
      name: "Set Up Your Environment",
      text: "Choose between web interfaces (Automatic1111, ComfyUI) or cloud platforms (RunPod, Google Colab) based on your hardware and needs."
    },
    {
      name: "Select the Right Model",
      text: "Choose a base model suitable for your art style: realistic (Realistic Vision), anime (Anything V3), or artistic (DreamShaper)."
    },
    {
      name: "Write Effective Prompts",
      text: "Structure your prompts with subject, style, quality modifiers, and use negative prompts to exclude unwanted elements."
    },
    {
      name: "Configure Generation Settings",
      text: "Set appropriate CFG scale (7-12), sampling steps (20-30), and choose sampler method (DPM++ 2M Karras recommended)."
    },
    {
      name: "Iterate and Refine",
      text: "Generate multiple variations, adjust settings based on results, and use img2img for refinements and style transfers."
    }
  ]

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
    { label: 'Stable Diffusion Guide' }
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
      description: 'Explore different artistic styles for your creations.',
      href: '/guides/ai-art-styles',
      category: 'Creative Guide'
    },
    {
      title: 'Complete Midjourney Guide',
      description: 'Learn advanced Midjourney techniques and parameters.',
      href: '/guides/midjourney-guide',
      category: 'Platform Guide'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <ArticleStructuredData
        headline="Complete Stable Diffusion Guide: Master AI Art Generation"
        description="Learn everything about Stable Diffusion - from basic prompting to advanced techniques, models, settings, and workflows for creating stunning AI art."
        datePublished="2025-01-11T00:00:00Z"
        dateModified="2025-01-11T00:00:00Z"
        author="GetPrompts Team"
        image="https://getprompts.me/og-image.jpg"
        keywords={[
          "Stable Diffusion guide",
          "Stable Diffusion prompts",
          "AI art generation",
          "SD models",
          "negative prompts",
          "CFG scale"
        ]}
      />

      <HowToStructuredData
        name="How to Create Art with Stable Diffusion"
        description="Complete step-by-step guide to generating stunning AI art using Stable Diffusion, from setup to advanced techniques."
        totalTime="PT30M"
        estimatedCost="$0-20"
        steps={howToSteps}
      />

      <BreadcrumbStructuredData items={breadcrumbItems} />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex items-center mb-4">
          <div className="bg-purple-100 p-3 rounded-lg mr-4">
            <ImageIcon className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Complete Stable Diffusion Guide
            </h1>
            <p className="text-lg text-gray-600">
              Master the most powerful open-source AI art generation tool from basics to advanced techniques
            </p>
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-8">
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Beginner to Expert</span>
          <span>25 min read</span>
          <span>Updated January 2025</span>
        </div>

        <div className="bg-purple-50 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What You&apos;ll Master</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Setting up and choosing the right Stable Diffusion environment</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Understanding models, LoRAs, and embeddings</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Advanced prompting techniques and negative prompts</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Optimizing settings for different art styles and quality</span>
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
          <a href="#introduction" className="text-purple-600 hover:text-purple-700 py-1">1. What is Stable Diffusion?</a>
          <a href="#setup" className="text-purple-600 hover:text-purple-700 py-1">2. Setup & Installation Options</a>
          <a href="#models" className="text-purple-600 hover:text-purple-700 py-1">3. Understanding Models & Checkpoints</a>
          <a href="#prompting" className="text-purple-600 hover:text-purple-700 py-1">4. Advanced Prompting Techniques</a>
          <a href="#settings" className="text-purple-600 hover:text-purple-700 py-1">5. Essential Settings & Parameters</a>
          <a href="#workflows" className="text-purple-600 hover:text-purple-700 py-1">6. Advanced Workflows & Techniques</a>
          <a href="#troubleshooting" className="text-purple-600 hover:text-purple-700 py-1">7. Troubleshooting & Optimization</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        {/* Section 1: Introduction */}
        <section id="introduction" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-7 h-7 text-purple-600 mr-3" />
            1. What is Stable Diffusion?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Stable Diffusion is an open-source, latent text-to-image diffusion model developed by Stability AI.
            Unlike closed-source alternatives, it runs locally on your hardware, giving you complete control
            over the generation process, privacy, and customization options.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex items-start">
              <Lightbulb className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Why Choose Stable Diffusion?</h3>
                <ul className="text-blue-800 space-y-1">
                  <li>• <strong>Free and open-source</strong> - No subscription fees or usage limits</li>
                  <li>• <strong>Privacy</strong> - Everything runs locally on your machine</li>
                  <li>• <strong>Customizable</strong> - Extensive model library and fine-tuning options</li>
                  <li>• <strong>Advanced control</strong> - Detailed parameter tweaking and workflows</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Advantages Over Other AI Art Tools</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Complete Control</h4>
              <p className="text-gray-600 text-sm">
                Access to all generation parameters, custom models, and advanced workflows like ControlNet and img2img.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Cost Effective</h4>
              <p className="text-gray-600 text-sm">
                No monthly fees - just initial hardware investment. Generate unlimited images once set up.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Extensible</h4>
              <p className="text-gray-600 text-sm">
                Huge ecosystem of custom models, LoRAs, extensions, and community-driven improvements.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">No Censorship</h4>
              <p className="text-gray-600 text-sm">
                Generate any content within legal bounds without platform restrictions or content filters.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Setup */}
        <section id="setup" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Settings className="w-7 h-7 text-purple-600 mr-3" />
            2. Setup & Installation Options
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            There are several ways to run Stable Diffusion, from local installations to cloud-based solutions.
            Choose based on your hardware, technical expertise, and budget.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AUTOMATIC1111 WebUI</h3>
              <div className="text-sm text-gray-600 mb-4">
                <div className="mb-2"><strong>Best for:</strong> Beginners to intermediate users</div>
                <div className="mb-2"><strong>Requirements:</strong> 6GB+ VRAM, 16GB+ RAM</div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• User-friendly web interface</li>
                <li>• Extensive extension ecosystem</li>
                <li>• Active community support</li>
                <li>• Easy model management</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">ComfyUI</h3>
              <div className="text-sm text-gray-600 mb-4">
                <div className="mb-2"><strong>Best for:</strong> Advanced users, complex workflows</div>
                <div className="mb-2"><strong>Requirements:</strong> 8GB+ VRAM, 16GB+ RAM</div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Node-based workflow system</li>
                <li>• More efficient memory usage</li>
                <li>• Advanced pipeline control</li>
                <li>• Steeper learning curve</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cloud Solutions</h3>
              <div className="text-sm text-gray-600 mb-4">
                <div className="mb-2"><strong>Best for:</strong> Users without powerful hardware</div>
                <div className="mb-2"><strong>Cost:</strong> $0.50-2.00 per hour</div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Google Colab (free tier available)</li>
                <li>• RunPod, Paperspace</li>
                <li>• No hardware investment</li>
                <li>• Pay-per-use pricing</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">Hardware Recommendations</h3>
            <div className="text-yellow-800 space-y-2">
              <div><strong>Minimum:</strong> GTX 1660 (6GB VRAM), 16GB RAM - Basic generation at 512x512</div>
              <div><strong>Recommended:</strong> RTX 3070/4060 Ti (8GB VRAM), 32GB RAM - High quality at 768x768</div>
              <div><strong>Optimal:</strong> RTX 4080/4090 (12-24GB VRAM), 32GB+ RAM - Professional workflows</div>
            </div>
          </div>
        </section>

        {/* Section 3: Models */}
        <section id="models" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Understanding Models & Checkpoints</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Models are the foundation of Stable Diffusion. Different models excel at different styles and subjects.
            Understanding how to choose and use them is crucial for getting the results you want.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Base Models</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Realistic Vision V6.0</h4>
                  <p className="text-sm text-gray-600 mb-2">Best for photorealistic portraits and scenes</p>
                  <div className="text-xs text-gray-500">Style: Photorealism, Portraits, Landscapes</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">DreamShaper 8</h4>
                  <p className="text-sm text-gray-600 mb-2">Versatile model great for artistic and fantasy content</p>
                  <div className="text-xs text-gray-500">Style: Fantasy, Artistic, Semi-realistic</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Anything V5</h4>
                  <p className="text-sm text-gray-600 mb-2">Excellent for anime and manga-style artwork</p>
                  <div className="text-xs text-gray-500">Style: Anime, Manga, Character art</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhancement Add-ons</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">LoRA Models</h4>
                  <p className="text-sm text-gray-600 mb-2">Small files that add specific styles or concepts</p>
                  <div className="text-xs text-gray-500">Size: 10-200MB, Easy to mix and match</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Textual Inversions</h4>
                  <p className="text-sm text-gray-600 mb-2">Embeddings that represent specific objects or styles</p>
                  <div className="text-xs text-gray-500">Size: 10-100KB, Keyword-activated</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">ControlNet</h4>
                  <p className="text-sm text-gray-600 mb-2">Control composition, pose, and structure</p>
                  <div className="text-xs text-gray-500">Types: Canny, OpenPose, Depth, Scribble</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Prompting */}
        <section id="prompting" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Palette className="w-7 h-7 text-purple-600 mr-3" />
            4. Advanced Prompting Techniques
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Stable Diffusion offers unique prompting features that give you precise control over generation.
            Master these techniques to create exactly what you envision.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Prompt Structure for Stable Diffusion</h3>
            <div className="bg-gray-50 rounded p-4 mb-4">
              <code className="text-sm">
                (masterpiece, best quality), beautiful woman, (flowing red dress), dancing in moonlight,
                forest clearing, (ethereal atmosphere), soft lighting, detailed face, photorealistic,
                8k resolution, highly detailed
              </code>
            </div>
            <div className="text-sm text-gray-600">
              <strong>Note:</strong> Parentheses () increase attention weight, while [brackets] decrease it.
              Use (word:1.2) for precise weight control.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Positive Prompt Tips</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Start with quality tags:</strong> masterpiece, best quality, ultra detailed</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Be specific about style:</strong> photorealistic, oil painting, digital art</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Include lighting details:</strong> soft lighting, golden hour, rim lighting</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Add camera settings:</strong> shallow depth of field, 85mm lens</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Negative Prompt Essentials</h3>
              <div className="bg-red-50 rounded p-4 mb-4">
                <code className="text-sm text-red-800">
                  (worst quality, low quality), blurry, out of focus, bad anatomy,
                  extra limbs, deformed hands, watermark, signature, text
                </code>
              </div>
              <p className="text-sm text-gray-600">
                Negative prompts tell Stable Diffusion what to avoid. Always include quality
                negatives and specific issues you want to prevent.
              </p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Prompt Techniques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Emphasis Control</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• (word) - 1.1x attention</li>
                  <li>• ((word)) - 1.21x attention</li>
                  <li>• (word:1.5) - 1.5x attention</li>
                  <li>• [word] - 0.9x attention</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Prompt Editing</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• [word1:word2:0.5] - Switch at 50%</li>
                  <li>• [word::0.5] - Remove after 50%</li>
                  <li>• [::word:0.5] - Add after 50%</li>
                  <li>• &#123;word1|word2|word3&#125; - Random choice</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Settings */}
        <section id="settings" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Essential Settings & Parameters</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Understanding Stable Diffusion&apos;s parameters is crucial for consistent, high-quality results.
            Each setting affects the generation process in important ways.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Settings</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">CFG Scale (7-12)</h4>
                    <p className="text-sm text-gray-600">Controls how closely the AI follows your prompt. Higher = more literal, Lower = more creative</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Steps (20-30)</h4>
                    <p className="text-sm text-gray-600">Number of denoising steps. More steps = more detailed but slower generation</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Sampler Method</h4>
                    <p className="text-sm text-gray-600">DPM++ 2M Karras recommended for most cases. Euler A for speed</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Image Settings</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Resolution</h4>
                    <p className="text-sm text-gray-600">512x512 for speed, 768x768 for quality, 1024x1024 for high-end</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Batch Size</h4>
                    <p className="text-sm text-gray-600">Generate multiple variations. Limited by VRAM</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Seed</h4>
                    <p className="text-sm text-gray-600">For reproducible results. -1 for random</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Settings by Use Case</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Photorealistic Portraits</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>CFG Scale: 7-9</div>
                    <div>Steps: 25-30</div>
                    <div>Sampler: DPM++ 2M Karras</div>
                    <div>Resolution: 768x768 or higher</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Artistic/Fantasy</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>CFG Scale: 8-12</div>
                    <div>Steps: 20-25</div>
                    <div>Sampler: Euler A or DPM++ SDE</div>
                    <div>Resolution: 512x768 (portrait)</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Quick Iteration</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>CFG Scale: 7</div>
                    <div>Steps: 15-20</div>
                    <div>Sampler: Euler A</div>
                    <div>Resolution: 512x512</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Workflows */}
        <section id="workflows" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Advanced Workflows & Techniques</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Beyond basic text-to-image generation, Stable Diffusion offers powerful workflows for
            professional-quality results and precise control over your creations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">img2img Workflow</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Transform existing images with new styles</li>
                <li>• Refine generated images for better quality</li>
                <li>• Use denoising strength 0.3-0.7 for variations</li>
                <li>• Perfect for style transfers and improvements</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">ControlNet</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Control composition with precise inputs</li>
                <li>• Canny edge detection for line art</li>
                <li>• OpenPose for character positioning</li>
                <li>• Depth maps for 3D-aware generation</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Inpainting</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Selectively edit parts of images</li>
                <li>• Remove unwanted objects seamlessly</li>
                <li>• Add new elements to existing scenes</li>
                <li>• Use specific inpainting models for best results</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibf text-gray-900 mb-3">Upscaling</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Increase resolution with SD Upscale</li>
                <li>• Use Real-ESRGAN for photo enhancement</li>
                <li>• Combine with img2img for detail enhancement</li>
                <li>• Essential for print-quality outputs</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Pro Workflow Example</h3>
            <div className="text-blue-800 text-sm space-y-1">
              <div><strong>1.</strong> Generate base image with txt2img at 512x512</div>
              <div><strong>2.</strong> Use img2img to refine details (denoising 0.4)</div>
              <div><strong>3.</strong> Apply ControlNet for composition adjustments</div>
              <div><strong>4.</strong> Inpaint any problem areas</div>
              <div><strong>5.</strong> Upscale to final resolution (2x or 4x)</div>
              <div><strong>6.</strong> Final img2img pass for cohesion (denoising 0.2)</div>
            </div>
          </div>
        </section>

        {/* Section 7: Troubleshooting */}
        <section id="troubleshooting" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Troubleshooting & Optimization</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Issues & Solutions</h3>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded p-4">
                  <h4 className="font-medium text-red-900 mb-2">Blurry or Low Quality Results</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Add quality tags to positive prompt</li>
                    <li>• Include &quot;blurry, low quality&quot; in negative prompt</li>
                    <li>• Increase resolution or use upscaling</li>
                    <li>• Try different sampler methods</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                  <h4 className="font-medium text-yellow-900 mb-2">Anatomy Issues</h4>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>• Use &quot;bad anatomy, extra limbs&quot; in negative prompt</li>
                    <li>• Try ControlNet OpenPose for better poses</li>
                    <li>• Lower CFG scale (6-8) for more natural results</li>
                    <li>• Use anatomy-focused LoRAs or embeddings</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded p-4">
                  <h4 className="font-medium text-orange-900 mb-2">VRAM Out of Memory</h4>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Reduce batch size and resolution</li>
                    <li>• Enable --medvram or --lowvram flags</li>
                    <li>• Use xformers optimization</li>
                    <li>• Close other GPU-intensive applications</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Optimization</h3>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded p-4">
                  <h4 className="font-medium text-green-900 mb-2">Speed Optimizations</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Use Euler A sampler for fastest generation</li>
                    <li>• Reduce steps to 15-20 for iterations</li>
                    <li>• Enable xformers and attention optimization</li>
                    <li>• Use smaller resolutions for testing</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Quality Optimizations</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Use DPM++ 2M Karras for best quality</li>
                    <li>• Increase steps to 25-30 for final renders</li>
                    <li>• Higher resolution for more detail</li>
                    <li>• Multiple generations with different seeds</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded p-4">
                  <h4 className="font-medium text-purple-900 mb-2">Memory Management</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Unload unused models from memory</li>
                    <li>• Use model switching extensions efficiently</li>
                    <li>• Clear VRAM between different workflows</li>
                    <li>• Monitor system resources during generation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CTASection
        title="Start Creating with Stable Diffusion"
        description="Apply what you've learned with our free tools to generate and refine your AI art prompts."
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