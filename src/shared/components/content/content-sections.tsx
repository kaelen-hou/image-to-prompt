import { CheckCircle, Star, TrendingUp, Users, Zap } from 'lucide-react'

interface ContentSection {
  title: string
  content: string
  type: 'text' | 'list' | 'steps' | 'tips'
}

interface ExpandedContentProps {
  sections: ContentSection[]
  showTableOfContents?: boolean
}

// 为指南页面提供可重用的内容模块
export function ExpandedContent({ sections, showTableOfContents = true }: ExpandedContentProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {showTableOfContents && sections.length > 3 && (
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
          <nav className="space-y-2">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#section-${index}`}
                className="block text-sm text-gray-600 hover:text-violet-600 transition-colors"
              >
                {index + 1}. {section.title}
              </a>
            ))}
          </nav>
        </div>
      )}

      {sections.map((section, index) => (
        <div key={index} id={`section-${index}`} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {section.title}
          </h2>
          
          {section.type === 'text' && (
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          )}
          
          {section.type === 'list' && (
            <div className="space-y-3">
              {section.content.split('\n').filter(Boolean).map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          )}
          
          {section.type === 'steps' && (
            <div className="space-y-6">
              {section.content.split('\n').filter(Boolean).map((step, stepIndex) => (
                <div key={stepIndex} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {stepIndex + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {section.type === 'tips' && (
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <Zap className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Pro Tips</h3>
                  <div className="space-y-2">
                    {section.content.split('\n').filter(Boolean).map((tip, tipIndex) => (
                      <p key={tipIndex} className="text-blue-800">{tip}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// 统计和成就展示组件
export function StatsSection() {
  return (
    <section className="bg-violet-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Creators Worldwide</h2>
          <p className="text-violet-100 text-lg">Join thousands of artists and content creators using GetPrompts</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="flex justify-center mb-3">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-1">50,000+</div>
            <div className="text-violet-100">Active Users</div>
          </div>
          
          <div>
            <div className="flex justify-center mb-3">
              <Star className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-1">1M+</div>
            <div className="text-violet-100">Prompts Generated</div>
          </div>
          
          <div>
            <div className="flex justify-center mb-3">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-1">95%</div>
            <div className="text-violet-100">Satisfaction Rate</div>
          </div>
          
          <div>
            <div className="flex justify-center mb-3">
              <Zap className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-1">24/7</div>
            <div className="text-violet-100">Instant Generation</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// 特色内容高亮组件
export function FeatureHighlight({ 
  title, 
  description, 
  features, 
  variant = 'default' 
}: {
  title: string
  description: string
  features: string[]
  variant?: 'default' | 'success' | 'info'
}) {
  const variantStyles = {
    default: 'bg-gray-50 border-gray-200',
    success: 'bg-green-50 border-green-200', 
    info: 'bg-blue-50 border-blue-200'
  }
  
  return (
    <div className={`rounded-lg border p-8 ${variantStyles[variant]}`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="grid md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// 内容模板库
export const CONTENT_TEMPLATES = {
  promptEngineering: [
    {
      title: "Understanding AI Art Generation",
      content: "AI art generation works by translating text descriptions into visual images using machine learning models trained on millions of image-text pairs. The quality and accuracy of your results depend heavily on how well you communicate your vision through prompts. Effective prompt engineering involves understanding how AI interprets language, visual concepts, and artistic styles.",
      type: "text" as const
    },
    {
      title: "Essential Prompt Components",
      content: "Subject description (what you want to see)\nStyle specifications (artistic movement, technique)\nComposition guidelines (camera angle, framing)\nLighting conditions (natural, studio, dramatic)\nColor palette preferences\nTechnical parameters (resolution, aspect ratio)\nQuality modifiers (detailed, sharp, professional)",
      type: "list" as const
    },
    {
      title: "Step-by-Step Prompt Creation",
      content: "Start with your main subject - be specific about what you want to see\nAdd style keywords that match your desired aesthetic\nInclude composition details like camera angle and framing\nSpecify lighting conditions and mood\nAdd technical quality modifiers\nTest and iterate based on results",
      type: "steps" as const
    }
  ],
  
  midjourney: [
    {
      title: "Midjourney-Specific Techniques",
      content: "Use aspect ratio parameters like --ar 16:9 for landscape images\nApply stylize values (--s) to control artistic interpretation\nUtilize quality settings (--q) for processing time vs quality balance\nExperiment with chaos values (--c) for varied interpretations",
      type: "tips" as const
    }
  ]
}

export type ContentTemplate = keyof typeof CONTENT_TEMPLATES