// SEO内容集群策略和规划
export interface ContentCluster {
  id: string
  pillarTitle: string
  pillarUrl: string
  pillarKeywords: string[]
  description: string
  supportingContent: SupportingContent[]
  priority: 'high' | 'medium' | 'low'
  estimatedTraffic: number
}

export interface SupportingContent {
  title: string
  slug: string
  keywords: string[]
  contentType: 'guide' | 'tutorial' | 'comparison' | 'listicle' | 'case-study'
  status: 'planned' | 'in-progress' | 'completed'
  wordCount?: number
}

// 主要内容集群定义
export const CONTENT_CLUSTERS: ContentCluster[] = [
  // 1. Prompt Engineering 集群 (最高优先级)
  {
    id: 'prompt-engineering',
    pillarTitle: 'Prompt Engineering Complete Guide',
    pillarUrl: '/guides/prompt-engineering',
    pillarKeywords: ['prompt engineering', 'AI prompt writing', 'prompt optimization'],
    description: '围绕提示词工程的完整内容生态系统',
    estimatedTraffic: 15000,
    priority: 'high',
    supportingContent: [
      {
        title: 'Prompt Engineering for Beginners',
        slug: 'prompt-engineering-beginners',
        keywords: ['beginner prompt engineering', 'how to write prompts'],
        contentType: 'guide',
        status: 'planned'
      },
      {
        title: 'Advanced Prompt Techniques',
        slug: 'advanced-prompt-techniques',
        keywords: ['advanced prompt engineering', 'prompt techniques'],
        contentType: 'tutorial',
        status: 'planned'
      },
      {
        title: '50+ Prompt Modifiers That Actually Work',
        slug: 'effective-prompt-modifiers',
        keywords: ['prompt modifiers', 'AI prompt keywords'],
        contentType: 'listicle',
        status: 'planned'
      },
      {
        title: 'Prompt Engineering vs Traditional Art Direction',
        slug: 'prompt-engineering-vs-art-direction',
        keywords: ['prompt engineering comparison', 'AI art direction'],
        contentType: 'comparison',
        status: 'planned'
      }
    ]
  },

  // 2. Midjourney 专题集群
  {
    id: 'midjourney-mastery',
    pillarTitle: 'Complete Midjourney Guide',
    pillarUrl: '/guides/midjourney-guide',
    pillarKeywords: ['Midjourney guide', 'Midjourney prompts', 'Midjourney tutorial'],
    description: 'Midjourney专题内容，从入门到精通',
    estimatedTraffic: 12000,
    priority: 'high',
    supportingContent: [
      {
        title: 'Midjourney Prompt Examples That Go Viral',
        slug: 'viral-midjourney-prompts',
        keywords: ['Midjourney examples', 'best Midjourney prompts'],
        contentType: 'case-study',
        status: 'planned'
      },
      {
        title: 'Midjourney vs DALL-E vs Stable Diffusion',
        slug: 'midjourney-vs-dalle-vs-stable-diffusion',
        keywords: ['AI art comparison', 'Midjourney vs DALL-E'],
        contentType: 'comparison',
        status: 'planned'
      },
      {
        title: 'Midjourney Parameters Complete Reference',
        slug: 'midjourney-parameters-guide',
        keywords: ['Midjourney parameters', 'Midjourney settings'],
        contentType: 'guide',
        status: 'planned'
      }
    ]
  },

  // 3. AI Art Styles 集群
  {
    id: 'ai-art-styles',
    pillarTitle: 'AI Art Styles Guide',
    pillarUrl: '/guides/ai-art-styles',
    pillarKeywords: ['AI art styles', 'digital art styles', 'AI artwork styles'],
    description: '各种艺术风格在AI生成中的应用',
    estimatedTraffic: 8000,
    priority: 'medium',
    supportingContent: [
      {
        title: 'Anime Style AI Art: Complete Guide',
        slug: 'anime-style-ai-art-guide',
        keywords: ['anime AI art', 'anime style prompts'],
        contentType: 'guide',
        status: 'planned'
      },
      {
        title: 'Photorealistic AI Art: Tips and Techniques',
        slug: 'photorealistic-ai-art-guide',
        keywords: ['photorealistic AI art', 'realistic AI images'],
        contentType: 'tutorial',
        status: 'planned'
      },
      {
        title: 'Top 20 AI Art Styles for 2025',
        slug: 'top-ai-art-styles-2025',
        keywords: ['trending AI art styles', 'popular AI art styles'],
        contentType: 'listicle',
        status: 'planned'
      }
    ]
  },

  // 4. Tools & Resources 集群
  {
    id: 'ai-tools-resources',
    pillarTitle: 'Best AI Art Tools and Resources',
    pillarUrl: '/tools',
    pillarKeywords: ['AI art tools', 'AI image generators', 'AI art resources'],
    description: 'AI艺术工具和资源的综合指南',
    estimatedTraffic: 6000,
    priority: 'medium',
    supportingContent: [
      {
        title: 'Free vs Paid AI Art Generators: Which to Choose?',
        slug: 'free-vs-paid-ai-art-generators',
        keywords: ['free AI art generators', 'best AI art tools'],
        contentType: 'comparison',
        status: 'planned'
      },
      {
        title: 'AI Art Generator Workflow: From Idea to Masterpiece',
        slug: 'ai-art-workflow-guide',
        keywords: ['AI art workflow', 'AI art process'],
        contentType: 'tutorial',
        status: 'planned'
      }
    ]
  },

  // 5. Business & Commercial 集群
  {
    id: 'ai-art-business',
    pillarTitle: 'AI Art for Business and Commerce',
    pillarUrl: '/business',
    pillarKeywords: ['AI art for business', 'commercial AI art', 'AI art marketing'],
    description: '商业和营销中AI艺术的应用',
    estimatedTraffic: 4000,
    priority: 'low',
    supportingContent: [
      {
        title: 'Using AI Art in Marketing Campaigns',
        slug: 'ai-art-marketing-campaigns',
        keywords: ['AI art marketing', 'AI generated marketing content'],
        contentType: 'case-study',
        status: 'planned'
      },
      {
        title: 'Copyright and Legal Issues with AI Art',
        slug: 'ai-art-copyright-legal-guide',
        keywords: ['AI art copyright', 'AI art legal issues'],
        contentType: 'guide',
        status: 'planned'
      }
    ]
  }
]

// 获取特定集群
export function getContentCluster(id: string): ContentCluster | undefined {
  return CONTENT_CLUSTERS.find(cluster => cluster.id === id)
}

// 按优先级获取集群
export function getContentClustersByPriority(priority: 'high' | 'medium' | 'low'): ContentCluster[] {
  return CONTENT_CLUSTERS.filter(cluster => cluster.priority === priority)
}

// 获取所有待创建的内容
export function getPlannedContent(): Array<SupportingContent & {clusterId: string, clusterTitle: string}> {
  const plannedContent: Array<SupportingContent & {clusterId: string, clusterTitle: string}> = []
  
  CONTENT_CLUSTERS.forEach(cluster => {
    cluster.supportingContent
      .filter(content => content.status === 'planned')
      .forEach(content => {
        plannedContent.push({
          ...content,
          clusterId: cluster.id,
          clusterTitle: cluster.pillarTitle
        })
      })
  })
  
  return plannedContent
}

// 内容创作优先级建议
export const CONTENT_CREATION_ROADMAP = {
  'Q1 2025': [
    'prompt-engineering-beginners',
    'viral-midjourney-prompts', 
    'advanced-prompt-techniques'
  ],
  'Q2 2025': [
    'effective-prompt-modifiers',
    'midjourney-vs-dalle-vs-stable-diffusion',
    'anime-style-ai-art-guide'
  ],
  'Q3 2025': [
    'midjourney-parameters-guide',
    'photorealistic-ai-art-guide',
    'free-vs-paid-ai-art-generators'
  ],
  'Q4 2025': [
    'top-ai-art-styles-2025',
    'ai-art-workflow-guide',
    'ai-art-marketing-campaigns'
  ]
}

// SEO关键词机会分析
export const KEYWORD_OPPORTUNITIES = {
  'high-volume-low-competition': [
    'AI prompt generator free',
    'image to prompt converter',
    'Midjourney prompt ideas',
    'AI art prompt examples',
    'prompt engineering course'
  ],
  'long-tail-opportunities': [
    'how to write better AI prompts',
    'best Midjourney prompts for portraits',
    'AI art styles for beginners',
    'Stable Diffusion vs Midjourney quality',
    'commercial use AI generated art'
  ],
  'trending-keywords': [
    'AI prompt optimization',
    'reverse engineering AI prompts', 
    'AI art consistency tips',
    'prompt engineering 2025',
    'AI model comparison'
  ]
}