import { z } from 'zod'

// App configuration schema
const AppConfigSchema = z.object({
  api: z.object({
    coze: z.object({
      baseUrl: z.string().url(),
      timeout: z.number().positive().default(30000),
    }),
    limits: z.object({
      maxFileSize: z.number().positive().default(10 * 1024 * 1024), // 10MB
      allowedFormats: z.array(z.string()).default([
        'image/jpeg',
        'image/png', 
        'image/webp',
        'image/gif'
      ]),
    }),
  }),
  subscription: z.object({
    plans: z.object({
      free: z.object({
        limit: z.number().default(10),
        features: z.array(z.string()).default(['basic']),
        resetPeriod: z.enum(['daily', 'weekly', 'monthly']).default('monthly')
      }),
      basic: z.object({
        limit: z.number().default(100),
        features: z.array(z.string()).default(['basic', 'advanced']),
        resetPeriod: z.enum(['daily', 'weekly', 'monthly']).default('monthly')
      }),
      pro: z.object({
        limit: z.number().default(500),
        features: z.array(z.string()).default(['basic', 'advanced', 'pro']),
        resetPeriod: z.enum(['daily', 'weekly', 'monthly']).default('monthly')
      }),
      premium: z.object({
        limit: z.number().default(2000),
        features: z.array(z.string()).default(['all', 'priority']),
        resetPeriod: z.enum(['daily', 'weekly', 'monthly']).default('monthly')
      })
    })
  }),
  features: z.object({
    enableAnalytics: z.boolean().default(true),
    enableErrorTracking: z.boolean().default(true),
    enableRateLimiting: z.boolean().default(true),
    enableCache: z.boolean().default(true)
  })
})

type AppConfig = z.infer<typeof AppConfigSchema>

// Default configuration
const defaultConfig: AppConfig = {
  api: {
    coze: {
      baseUrl: process.env.COZE_BASE_URL || 'https://api.coze.cn',
      timeout: 30000,
    },
    limits: {
      maxFileSize: 10 * 1024 * 1024, // 10MB
      allowedFormats: [
        'image/jpeg',
        'image/png', 
        'image/webp',
        'image/gif'
      ],
    },
  },
  subscription: {
    plans: {
      free: { 
        limit: 10, 
        features: ['basic'],
        resetPeriod: 'monthly'
      },
      basic: { 
        limit: 100, 
        features: ['basic', 'advanced'],
        resetPeriod: 'monthly'
      },
      pro: { 
        limit: 500, 
        features: ['basic', 'advanced', 'pro'],
        resetPeriod: 'monthly'
      },
      premium: { 
        limit: 2000, 
        features: ['all', 'priority'],
        resetPeriod: 'monthly'
      }
    }
  },
  features: {
    enableAnalytics: process.env.NODE_ENV === 'production',
    enableErrorTracking: process.env.NODE_ENV === 'production',
    enableRateLimiting: true,
    enableCache: true
  }
}

// Validate and export config
export const appConfig = AppConfigSchema.parse(defaultConfig)

// Helper functions
export function getSubscriptionLimit(plan: keyof typeof appConfig.subscription.plans): number {
  return appConfig.subscription.plans[plan].limit
}

export function getSubscriptionFeatures(plan: keyof typeof appConfig.subscription.plans): string[] {
  return appConfig.subscription.plans[plan].features
}

export function hasFeature(plan: keyof typeof appConfig.subscription.plans, feature: string): boolean {
  const features = getSubscriptionFeatures(plan)
  return features.includes(feature) || features.includes('all')
}

export function isValidFileSize(fileSize: number): boolean {
  return fileSize <= appConfig.api.limits.maxFileSize
}

export function isValidFileType(mimeType: string): boolean {
  return appConfig.api.limits.allowedFormats.includes(mimeType)
}

export function validateFile(file: File): { valid: boolean; error?: string } {
  if (!isValidFileType(file.type)) {
    return {
      valid: false,
      error: `Invalid file type. Allowed types: ${appConfig.api.limits.allowedFormats.join(', ')}`
    }
  }
  
  if (!isValidFileSize(file.size)) {
    return {
      valid: false,
      error: `File too large. Maximum size: ${Math.round(appConfig.api.limits.maxFileSize / 1024 / 1024)}MB`
    }
  }
  
  return { valid: true }
}

// Export types
export type { AppConfig }
export type SubscriptionPlan = keyof typeof appConfig.subscription.plans