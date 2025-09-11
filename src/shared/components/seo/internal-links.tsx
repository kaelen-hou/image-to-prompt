import Link from 'next/link'

interface InternalLink {
  href: string
  title: string
  description: string
  category: 'tool' | 'guide' | 'resource'
}

interface RelatedLinksProps {
  currentPath: string
  category?: 'tool' | 'guide' | 'resource'
  maxLinks?: number
}

// 定义站内重要页面和它们的关联关系
const INTERNAL_LINKS: InternalLink[] = [
  // Core tools
  {
    href: '/image-to-prompt',
    title: 'AI Image to Prompt Generator',
    description: 'Upload any image and generate detailed AI prompts instantly',
    category: 'tool'
  },
  {
    href: '/prompt-enhancer',
    title: 'AI Prompt Enhancer',
    description: 'Improve your existing prompts for better AI art generation',
    category: 'tool'
  },
  
  // Essential guides
  {
    href: '/guides/prompt-engineering',
    title: 'Prompt Engineering Guide',
    description: 'Master the art of writing effective AI prompts',
    category: 'guide'
  },
  {
    href: '/guides/midjourney-guide',
    title: 'Midjourney Complete Guide',
    description: 'Everything you need to know about Midjourney prompts',
    category: 'guide'
  },
  {
    href: '/guides/stable-diffusion-guide',
    title: 'Stable Diffusion Guide',
    description: 'Create stunning art with Stable Diffusion prompts',
    category: 'guide'
  },
  {
    href: '/guides/ai-art-styles',
    title: 'AI Art Styles Guide',
    description: 'Explore different artistic styles for AI generation',
    category: 'guide'
  },
  {
    href: '/guides/prompt-modifiers',
    title: 'Prompt Modifiers Reference',
    description: 'Essential keywords and modifiers for better prompts',
    category: 'guide'
  },
  
  // Hub pages
  {
    href: '/guides',
    title: 'AI Art Guides Hub',
    description: 'Comprehensive guides for AI art creation and prompts',
    category: 'resource'
  }
]

// 根据当前页面路径推荐相关链接
function getRelatedLinks(currentPath: string, category?: string, maxLinks: number = 6): InternalLink[] {
  // 过滤掉当前页面
  let availableLinks = INTERNAL_LINKS.filter(link => link.href !== currentPath)
  
  // 如果指定了分类，优先显示同分类的内容
  if (category) {
    const sameCategory = availableLinks.filter(link => link.category === category)
    const otherCategory = availableLinks.filter(link => link.category !== category)
    availableLinks = [...sameCategory, ...otherCategory]
  }
  
  // 特定页面的智能推荐逻辑
  if (currentPath === '/') {
    // 首页优先推荐工具页面
    availableLinks.sort((a, b) => {
      if (a.category === 'tool' && b.category !== 'tool') return -1
      if (a.category !== 'tool' && b.category === 'tool') return 1
      return 0
    })
  } else if (currentPath.startsWith('/guides/')) {
    // 指南页面优先推荐其他指南
    availableLinks.sort((a, b) => {
      if (a.category === 'guide' && b.category !== 'guide') return -1
      if (a.category !== 'guide' && b.category === 'guide') return 1
      return 0
    })
  } else if (currentPath.includes('prompt')) {
    // 工具页面推荐指南和另一个工具
    availableLinks.sort((a, b) => {
      if (a.category === 'guide' && b.category === 'tool') return -1
      if (a.category === 'tool' && b.category === 'guide') return 1
      return 0
    })
  }
  
  return availableLinks.slice(0, maxLinks)
}

export function RelatedLinks({ 
  currentPath, 
  category,
  maxLinks = 6 
}: RelatedLinksProps) {
  const relatedLinks = getRelatedLinks(currentPath, category, maxLinks)
  
  if (relatedLinks.length === 0) return null

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Continue Learning
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Discover more tools and guides to enhance your AI art creation
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-violet-200"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className={`w-3 h-3 rounded-full mt-1 ${
                      link.category === 'tool' ? 'bg-violet-500' :
                      link.category === 'guide' ? 'bg-blue-500' : 'bg-green-500'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-violet-600 transition-colors mb-2">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {link.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// 为页面内容中的关键词自动添加内部链接
export function InlineInternalLinks({ children }: { children: React.ReactNode }) {
  // 这个组件可以在未来扩展，自动识别内容中的关键词并添加链接
  return <>{children}</>
}

// 导出链接数据供其他组件使用
export { INTERNAL_LINKS, getRelatedLinks }