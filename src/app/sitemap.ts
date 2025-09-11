import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://getprompts.me'
  const currentDate = new Date().toISOString()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/image-to-prompt`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/prompt-enhancer`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/auth/login`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    // Add more static pages as your app grows
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.5,
    // },
    // {
    //   url: `${baseUrl}/pricing`,
    //   lastModified: currentDate,
    //   changeFrequency: 'weekly',
    //   priority: 0.7,
    // },
    // {
    //   url: `${baseUrl}/blog`,
    //   lastModified: currentDate,
    //   changeFrequency: 'daily',
    //   priority: 0.8,
    // },
  ]
}