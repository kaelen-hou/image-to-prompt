export interface PromptGenerationRequest {
  file: File;
  promptType: string;
  userQuery: string;
}

export interface PromptGenerationResponse {
  success: boolean;
  data?: unknown;
  error?: string;
  details?: string;
}

export type PromptType = 'stableDiffusion' | 'midjourney' | 'dalle' | 'other';