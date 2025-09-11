import Script from 'next/script'

interface WebApplicationSchema {
  name: string
  description: string
  url: string
  applicationCategory: string
  operatingSystem: string
  offers?: {
    '@type': string
    price: string
    priceCurrency: string
  }
}

interface OrganizationSchema {
  name: string
  url: string
  description: string
  sameAs?: string[]
}

export function WebApplicationStructuredData({ 
  name, 
  description, 
  url, 
  applicationCategory = "Multimedia",
  operatingSystem = "Any",
  offers 
}: WebApplicationSchema) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url,
    applicationCategory,
    operatingSystem,
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    ...(offers && { offers }),
  }

  return (
    <Script
      id="webapp-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

export function OrganizationStructuredData({ 
  name, 
  url, 
  description, 
  sameAs 
}: OrganizationSchema) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    description,
    ...(sameAs && { sameAs }),
  }

  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

export function ToolStructuredData({ toolType = 'image-to-prompt' }: { toolType?: 'image-to-prompt' | 'prompt-enhancer' }) {
  const isEnhancer = toolType === 'prompt-enhancer'
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: isEnhancer ? 'AI Prompt Enhancer' : 'AI Image to Prompt Generator',
    description: isEnhancer 
      ? 'Improve and optimize your AI prompts for better results. Enhance prompts for Stable Diffusion, Midjourney, DALL-E, and other AI models.'
      : 'Upload any image and instantly generate detailed prompts for AI art creation. Perfect for Stable Diffusion, Midjourney, DALL-E, and other AI models.',
    url: `https://getprompts.me/${toolType}`,
    applicationCategory: 'Multimedia',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free to use with optional premium features'
    },
    featureList: isEnhancer ? [
      'Prompt optimization',
      'AI prompt enhancement',
      'Multiple AI model support',
      'Stable Diffusion prompts',
      'Midjourney prompts',
      'DALL-E prompts',
      'Instant enhancement',
      'Free tool'
    ] : [
      'Image to prompt conversion',
      'Multiple AI model support',
      'Stable Diffusion prompts',
      'Midjourney prompts',
      'DALL-E prompts',
      'Instant generation',
      'Free tool'
    ],
    creator: {
      '@type': 'Organization',
      name: 'GetPrompts'
    }
  }

  return (
    <Script
      id="tool-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

export function FAQStructuredData({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <Script
      id="faq-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

export function HowToStructuredData({ 
  name, 
  description, 
  steps,
  totalTime,
  estimatedCost
}: { 
  name: string
  description: string
  steps: Array<{text: string; name: string; image?: string}>
  totalTime?: string
  estimatedCost?: string
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(totalTime && { totalTime }),
    ...(estimatedCost && { estimatedCost }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { 
        image: {
          '@type': 'ImageObject',
          url: step.image
        }
      })
    }))
  }

  return (
    <Script
      id="howto-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

export function ArticleStructuredData({ 
  headline, 
  description, 
  datePublished,
  dateModified,
  author = "GetPrompts Team",
  image,
  wordCount,
  keywords
}: { 
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  author?: string
  image?: string
  wordCount?: number
  keywords?: string[]
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: 'GetPrompts',
      url: 'https://getprompts.me',
      logo: {
        '@type': 'ImageObject',
        url: 'https://getprompts.me/og-image.jpg'
      }
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image
      }
    }),
    ...(wordCount && { wordCount }),
    ...(keywords && { keywords }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://getprompts.me'
    }
  }

  return (
    <Script
      id="article-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

export function CreativeWorkStructuredData({ 
  name, 
  description, 
  creator = "GetPrompts",
  genre = "Digital Art",
  audience
}: { 
  name: string
  description: string
  creator?: string
  genre?: string
  audience?: string
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name,
    description,
    creator: {
      '@type': 'Organization', 
      name: creator
    },
    genre,
    ...(audience && {
      audience: {
        '@type': 'Audience',
        audienceType: audience
      }
    })
  }

  return (
    <Script
      id="creative-work-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}