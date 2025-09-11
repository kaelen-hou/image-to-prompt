import { NextResponse } from 'next/server';
import { withAuth, AuthenticatedRequest } from '@/features/auth/server';
import { canUserUseService } from '@/features/user';
import { processFileUpload } from '@/features/storage';
import { RateLimitError, ValidationError } from '@/lib/errors/api-error';
import { createApiResponse } from '@/lib/validation/schemas';
import { logger } from '@/lib/logger';

async function handleUpload(request: AuthenticatedRequest) {
  logger.info('Upload request started', {
    userId: request.user.uid,
    userEmail: request.user.email,
  });

  // 检查用户使用次数限制
  const usageCheck = await canUserUseService(request.user.uid, request.user.email!);
  
  if (!usageCheck.canUse) {
    logger.warn('Upload blocked: usage limit exceeded', {
      userId: request.user.uid,
      subscription: usageCheck.subscription,
      remainingUses: usageCheck.remainingUses,
      resetDate: usageCheck.resetDate,
    });
    
    throw new RateLimitError(
      `You have reached your monthly limit. Usage resets on ${usageCheck.resetDate.toDateString()}.`
    );
  }

  const data = await request.formData();
  const file: File | null = data.get('file') as unknown as File;

  if (!file) {
    throw new ValidationError('No file received');
  }

  logger.info('Processing file upload', {
    userId: request.user.uid,
    fileName: file.name,
    fileSize: file.size,
    fileType: file.type,
  });

  try {
    const result = await processFileUpload(file);
    
    logger.info('File upload successful', {
      userId: request.user.uid,
      fileName: file.name,
      uploadResult: result,
    });

    return NextResponse.json(createApiResponse(true, result));
  } catch (error) {
    logger.error('File upload failed', {
      userId: request.user.uid,
      fileName: file.name,
      fileSize: file.size,
    }, error instanceof Error ? error : new Error(String(error)));
    
    throw error;
  }
}

export const POST = withAuth(handleUpload);