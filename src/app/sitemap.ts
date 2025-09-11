import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://getprompts.me'
  const currentDate = new Date().toISOString()

  // Define page configurations with their SEO priorities
  const pages = [
    // Core pages
    { url: '', priority: 1, changeFreq: 'daily' as const },
    { url: '/image-to-prompt', priority: 0.9, changeFreq: 'daily' as const },
    { url: '/prompt-enhancer', priority: 0.9, changeFreq: 'daily' as const },
    
    // Content hub pages
    { url: '/guides', priority: 0.8, changeFreq: 'weekly' as const },
    { url: '/guides/prompt-engineering', priority: 0.8, changeFreq: 'monthly' as const },
    
    // Future content pages (ready for when created)
    { url: '/guides/midjourney-guide', priority: 0.7, changeFreq: 'monthly' as const },
    { url: '/guides/stable-diffusion-guide', priority: 0.7, changeFreq: 'monthly' as const },
    { url: '/guides/ai-art-styles', priority: 0.6, changeFreq: 'monthly' as const },
    { url: '/guides/prompt-modifiers', priority: 0.6, changeFreq: 'monthly' as const },
    
    // Resource pages (for future implementation)
    // { url: '/prompts', priority: 0.8, changeFreq: 'weekly' as const },
    // { url: '/prompts/midjourney', priority: 0.7, changeFreq: 'weekly' as const },
    // { url: '/prompts/stable-diffusion', priority: 0.7, changeFreq: 'weekly' as const },
    // { url: '/prompts/dalle', priority: 0.7, changeFreq: 'weekly' as const },
    
    // Comparison pages (for future implementation)  
    // { url: '/vs/midjourney-vs-dalle', priority: 0.6, changeFreq: 'monthly' as const },
    // { url: '/vs/stable-diffusion-vs-midjourney', priority: 0.6, changeFreq: 'monthly' as const },
    
    // Utility pages
    { url: '/auth/login', priority: 0.3, changeFreq: 'monthly' as const },
    { url: '/offline', priority: 0.1, changeFreq: 'yearly' as const },
  ]

  return pages.map(page => ({
    url: `${baseUrl}${page.url}`,
    lastModified: currentDate,
    changeFrequency: page.changeFreq,
    priority: page.priority,
  }))
}