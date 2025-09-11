import { z } from 'zod'

// Environment variables validation
export const EnvSchema = z.object({
  // Firebase
  NEXT_PUBLIC_FIREBASE_API_KEY: z.string().min(1),
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: z.string().min(1),
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: z.string().min(1),
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: z.string().min(1),
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: z.string().min(1),
  NEXT_PUBLIC_FIREBASE_APP_ID: z.string().min(1),
  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: z.string().optional(),
  
  // Firebase Admin (server-side)
  FIREBASE_PRIVATE_KEY: z.string().optional(),
  FIREBASE_CLIENT_EMAIL: z.string().optional(),
  
  // Coze API
  COZE_API_TOKEN: z.string().min(1),
  COZE_BASE_URL: z.string().url().default('https://api.coze.cn'),
  COZE_WORKFLOW_ID: z.string().min(1),
  
  // OSS
  OSS_REGION: z.string().optional(),
  OSS_ACCESS_KEY_ID: z.string().optional(),
  OSS_ACCESS_KEY_SECRET: z.string().optional(),
  OSS_BUCKET: z.string().optional(),
})

// File validation
export const FileSchema = z.object({
  file: z.instanceof(File)
    .refine((file) => file.type.startsWith('image/'), {
      message: 'File must be an image'
    })
    .refine((file) => file.size <= 10 * 1024 * 1024, {
      message: 'File size must be less than 10MB'
    })
})

// Prompt generation request
export const GeneratePromptSchema = z.object({
  file: z.instanceof(File),
  promptType: z.enum(['midjourney', 'stableDiffusion', 'flux', 'normal']),
  userQuery: z.string().optional()
})

export type GeneratePromptInput = z.infer<typeof GeneratePromptSchema>

// API Response schemas
export const ApiResponseSchema = z.object({
  success: z.boolean(),
  error: z.string().optional(),
  data: z.unknown().optional(),
  timestamp: z.number().default(() => Date.now())
})

export type ApiResponse<T = unknown> = {
  success: boolean
  error?: string
  data?: T
  timestamp: number
}

// User usage schema
export const UserUsageSchema = z.object({
  subscription: z.enum(['free', 'basic', 'pro', 'premium']),
  remainingUses: z.number().min(0),
  canUse: z.boolean(),
  resetDate: z.string().datetime()
})

export type UserUsage = z.infer<typeof UserUsageSchema>

// Subscription update schema
export const UpdateSubscriptionSchema = z.object({
  subscription: z.enum(['free', 'basic', 'pro', 'premium'])
})

export type UpdateSubscriptionInput = z.infer<typeof UpdateSubscriptionSchema>

// Upload validation schema
export const UploadValidationSchema = z.object({
  file: FileSchema.shape.file
})

// Coze API response schemas
export const CozeUploadResponseSchema = z.object({
  data: z.object({
    id: z.string()
  })
})

export const CozeWorkflowResponseSchema = z.object({
  data: z.object({
    output: z.object({
      positive_prompt: z.string().optional(),
      prompt: z.string().optional(),
      negative_prompt: z.string().optional()
    }).optional()
  }).optional()
})

// Configuration schemas
export const AppConfigSchema = z.object({
  api: z.object({
    coze: z.object({
      baseUrl: z.string().url(),
      timeout: z.number().positive()
    }),
    limits: z.object({
      maxFileSize: z.number().positive(),
      allowedFormats: z.array(z.string())
    })
  }),
  subscription: z.object({
    plans: z.record(z.string(), z.object({
      limit: z.number().min(0),
      features: z.array(z.string())
    }))
  })
})

// Form validation schemas
export const ImageUploaderPropsSchema = z.object({
  selectedImage: z.string().nullable(),
  selectedFile: z.instanceof(File).nullable(),
  disabled: z.boolean().default(false),
  userUsage: UserUsageSchema.nullable().optional()
})

export const PromptDisplayPropsSchema = z.object({
  generatedPrompt: z.string(),
  negativePrompt: z.string(),
  isLoading: z.boolean().default(false)
})

export const PromptTypeSelectorPropsSchema = z.object({
  promptType: z.string(),
  userQuery: z.string(),
  disabled: z.boolean().default(false)
})

// Validation helper functions
export function validateEnv() {
  try {
    return EnvSchema.parse(process.env)
  } catch (error) {
    console.error('Environment validation failed:', error)
    throw new Error('Invalid environment configuration')
  }
}

export function createApiResponse<T>(
  success: boolean,
  data?: T,
  error?: string
): ApiResponse<T> {
  return {
    success,
    data,
    error,
    timestamp: Date.now()
  }
}

// Type guards
export function isValidUserUsage(data: unknown): data is UserUsage {
  return UserUsageSchema.safeParse(data).success
}

export function isValidApiResponse<T>(data: unknown): data is ApiResponse<T> {
  return ApiResponseSchema.safeParse(data).success
}