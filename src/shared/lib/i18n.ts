// 国际化配置和SEO支持
export const SUPPORTED_LOCALES = ['en', 'zh', 'ja', 'ko', 'es', 'fr', 'de'] as const
export type Locale = typeof SUPPORTED_LOCALES[number]

export const DEFAULT_LOCALE: Locale = 'en'

// 语言配置映射
export const LOCALE_CONFIG = {
  en: {
    name: 'English',
    dir: 'ltr',
    htmlLang: 'en',
    domain: 'getprompts.me',
    market: 'en-US'
  },
  zh: {
    name: '中文',
    dir: 'ltr', 
    htmlLang: 'zh-CN',
    domain: 'cn.getprompts.me', // 可选的本地化域名
    market: 'zh-CN'
  },
  ja: {
    name: '日本語',
    dir: 'ltr',
    htmlLang: 'ja',
    domain: 'jp.getprompts.me',
    market: 'ja-JP'
  },
  ko: {
    name: '한국어', 
    dir: 'ltr',
    htmlLang: 'ko',
    domain: 'kr.getprompts.me',
    market: 'ko-KR'
  },
  es: {
    name: 'Español',
    dir: 'ltr',
    htmlLang: 'es',
    domain: 'es.getprompts.me',
    market: 'es-ES'
  },
  fr: {
    name: 'Français',
    dir: 'ltr',
    htmlLang: 'fr', 
    domain: 'fr.getprompts.me',
    market: 'fr-FR'
  },
  de: {
    name: 'Deutsch',
    dir: 'ltr',
    htmlLang: 'de',
    domain: 'de.getprompts.me',
    market: 'de-DE'
  }
} as const

// 生成hreflang标签
export function generateHreflangLinks(pathname: string, currentLocale: Locale) {
  return SUPPORTED_LOCALES.map(locale => {
    const config = LOCALE_CONFIG[locale]
    const isDefault = locale === DEFAULT_LOCALE
    const href = isDefault 
      ? `https://${config.domain}${pathname}`
      : `https://${config.domain}${pathname}` // 或者使用子目录 `https://getprompts.me/${locale}${pathname}`
    
    return {
      hrefLang: locale === DEFAULT_LOCALE ? 'x-default' : config.htmlLang,
      href
    }
  })
}

// 根据地区优化关键词
export const LOCALIZED_KEYWORDS = {
  en: {
    primary: ['AI image to prompt', 'prompt generator', 'AI art prompts', 'Midjourney prompts'],
    secondary: ['prompt engineering', 'AI art generator', 'image analysis', 'prompt optimization']
  },
  zh: {
    primary: ['AI图片转提示词', '提示词生成器', 'AI艺术提示词', 'Midjourney提示词'],
    secondary: ['提示词工程', 'AI艺术生成器', '图片分析', '提示词优化']
  },
  ja: {
    primary: ['AI画像からプロンプト', 'プロンプトジェネレーター', 'AIアートプロンプト', 'Midjourneyプロンプト'],
    secondary: ['プロンプトエンジニアリング', 'AIアート生成器', '画像解析', 'プロンプト最適化']
  },
  ko: {
    primary: ['AI 이미지를 프롬프트로', '프롬프트 생성기', 'AI 아트 프롬프트', 'Midjourney 프롬프트'],
    secondary: ['프롬프트 엔지니어링', 'AI 아트 생성기', '이미지 분석', '프롬프트 최적화']
  },
  es: {
    primary: ['AI imagen a prompt', 'generador de prompts', 'prompts de arte AI', 'prompts Midjourney'],
    secondary: ['ingeniería de prompts', 'generador de arte AI', 'análisis de imagen', 'optimización de prompts']
  },
  fr: {
    primary: ['AI image vers prompt', 'générateur de prompts', 'prompts art IA', 'prompts Midjourney'],
    secondary: ['ingénierie de prompts', 'générateur art IA', 'analyse image', 'optimisation prompts']
  },
  de: {
    primary: ['AI Bild zu Prompt', 'Prompt Generator', 'AI Kunst Prompts', 'Midjourney Prompts'],
    secondary: ['Prompt Engineering', 'AI Kunst Generator', 'Bildanalyse', 'Prompt Optimierung']
  }
}

// 生成本地化的元数据
export function generateLocalizedMetadata(locale: Locale, page: string) {
  const config = LOCALE_CONFIG[locale]
  const keywords = LOCALIZED_KEYWORDS[locale]
  
  const baseMetadata = {
    htmlLang: config.htmlLang,
    market: config.market,
    keywords: [...keywords.primary, ...keywords.secondary],
    locale: config.htmlLang,
  }
  
  // 根据页面类型返回不同的元数据
  switch (page) {
    case 'homepage':
      return {
        ...baseMetadata,
        title: locale === 'en' 
          ? 'GetPrompts - AI Image to Prompt Generator & Prompt Enhancer'
          : locale === 'zh'
          ? 'GetPrompts - AI图片转提示词生成器 & 提示词增强器'
          : `GetPrompts - ${locale.toUpperCase()} AI Tools`,
        description: locale === 'en'
          ? 'Transform your images into detailed AI prompts and enhance existing prompts for Midjourney, DALL-E, Stable Diffusion and more.'
          : locale === 'zh'
          ? '将您的图片转换为详细的AI提示词，并增强现有提示词，适用于Midjourney、DALL-E、Stable Diffusion等。'
          : `AI-powered prompt generation tools for ${config.name} speakers`
      }
    default:
      return baseMetadata
  }
}

// 检测用户首选语言
export function detectUserLocale(acceptLanguage?: string): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE
  
  const preferredLanguages = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().toLowerCase())
  
  for (const lang of preferredLanguages) {
    // 精确匹配
    if (SUPPORTED_LOCALES.includes(lang as Locale)) {
      return lang as Locale
    }
    
    // 语言代码匹配 (例如: zh-CN -> zh)
    const langCode = lang.split('-')[0]
    if (SUPPORTED_LOCALES.includes(langCode as Locale)) {
      return langCode as Locale
    }
  }
  
  return DEFAULT_LOCALE
}