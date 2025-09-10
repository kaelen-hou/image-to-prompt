export interface UploadResponse {
  success: boolean;
  message?: string;
  error?: string;
  details?: string;
}

export interface FileValidation {
  isValid: boolean;
  error?: string;
}