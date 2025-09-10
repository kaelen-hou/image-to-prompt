import { NextResponse } from 'next/server';
import { withAuth, AuthenticatedRequest } from '@/features/auth/server';
import { canUserUseService } from '@/features/user';
import { processFileUpload } from '@/features/storage';

async function handleUpload(request: AuthenticatedRequest) {
  try {
    
    // 检查用户使用次数限制
    const usageCheck = await canUserUseService(request.user.uid, request.user.email!);
    
    if (!usageCheck.canUse) {
      return NextResponse.json(
        { 
          error: `You have reached your monthly limit. Usage resets on ${usageCheck.resetDate.toDateString()}.`,
          subscription: usageCheck.subscription,
          remainingUses: usageCheck.remainingUses,
          resetDate: usageCheck.resetDate.toISOString()
        },
        { status: 403 }
      );
    }

    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file received' },
        { status: 400 }
      );
    }

    const result = await processFileUpload(file);

    return NextResponse.json(result);

  } catch (error) {
    console.error('Error uploading file to Firebase Storage:', error);
    return NextResponse.json(
      { 
        error: 'Failed to upload file',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export const POST = withAuth(handleUpload);