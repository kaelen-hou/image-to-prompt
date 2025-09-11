import { NextResponse } from 'next/server';
import { withAuth, AuthenticatedRequest } from '@/features/auth/server';
import { incrementUserUsage } from '@/features/user';
import { uploadFileToCoze, executeWorkflow } from '@/features/image-to-prompt';
import { ExternalServiceError } from '@/lib/errors/api-error';
import { createApiResponse } from '@/lib/validation/schemas';
import { logger } from '@/lib/logger';

async function handleGeneratePrompt(request: AuthenticatedRequest) {
  const startTime = Date.now()
  const requestId = request.headers.get('x-request-id') || `req_${Date.now()}_${Math.random().toString(36).slice(2)}`
  
  try {
    logger.apiLog('info', 'Generate prompt request started', request, {
      requestId,
      userId: request.user.uid,
    })

    // Check environment variables
    if (!process.env.COZE_API_TOKEN) {
      throw new ExternalServiceError('Coze', 'API token not configured');
    }

    if (!process.env.COZE_WORKFLOW_ID) {
      throw new ExternalServiceError('Coze', 'Workflow ID not configured');
    }

    // Parse FormData
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const promptType = formData.get('promptType') as string || 'stableDiffusion';
    const userQuery = formData.get('userQuery') as string || '描述下这张图片';

    if (!file) {
      throw new Error('Image file is required');
    }

    logger.info('Starting prompt generation', {
      userId: request.user.uid,
      promptType,
      fileName: file.name,
      fileSize: file.size,
      requestId,
    });

    // Upload file to Coze and get file_id
    let fileId: string;
    try {
      fileId = await uploadFileToCoze(file);
      logger.info('File uploaded to Coze', {
        userId: request.user.uid,
        fileId,
        fileName: file.name,
        requestId,
      });
    } catch (uploadError) {
      logger.error('Failed to upload file to Coze', {
        userId: request.user.uid,
        fileName: file.name,
        requestId,
      }, uploadError instanceof Error ? uploadError : new Error(String(uploadError)));
      
      throw new ExternalServiceError('Coze', 'Failed to upload file', uploadError);
    }

    // Execute workflow
    try {
      const res = await executeWorkflow(fileId, promptType, userQuery);
      
      logger.info('Workflow executed successfully', {
        userId: request.user.uid,
        fileId,
        promptType,
        requestId,
      });

      // Increment user usage count only after successful API call
      await incrementUserUsage(request.user.uid);

      const response = NextResponse.json(createApiResponse(true, res));
      response.headers.set('x-request-id', requestId)
      
      logger.apiLog('info', `Generate prompt request completed in ${Date.now() - startTime}ms`, request, {
        requestId,
        userId: request.user.uid,
        duration: Date.now() - startTime,
        status: response.status,
      })

      return response;
    } catch (workflowError) {
      logger.error('Workflow execution failed', {
        userId: request.user.uid,
        fileId,
        promptType,
        requestId,
      }, workflowError instanceof Error ? workflowError : new Error(String(workflowError)));
      
      throw new ExternalServiceError('Coze', 'Failed to execute workflow', workflowError);
    }
  } catch (error) {
    const duration = Date.now() - startTime
    
    if (error instanceof ExternalServiceError) {
      logger.apiLog('warn', `API error: ${error.message}`, request, {
        requestId,
        userId: request.user.uid,
        duration,
        errorCode: error.name,
        statusCode: error.statusCode,
      }, error)
      
      const response = NextResponse.json({
        success: false,
        error: error.message,
        code: 'EXTERNAL_SERVICE_ERROR',
        requestId,
        timestamp: Date.now(),
      }, { 
        status: error.statusCode,
        headers: { 'x-request-id': requestId }
      })
      
      return response
    }
    
    // Handle unknown errors
    logger.apiLog('error', 'Unexpected API error', request, {
      requestId,
      userId: request.user.uid,
      duration,
    }, error instanceof Error ? error : new Error(String(error)))
    
    const response = NextResponse.json({
      success: false,
      error: 'Internal server error',
      code: 'INTERNAL_ERROR',
      requestId,
      timestamp: Date.now(),
    }, { 
      status: 500,
      headers: { 'x-request-id': requestId }
    })
    
    return response
  }
}

export const POST = withAuth(handleGeneratePrompt);