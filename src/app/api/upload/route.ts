import { NextResponse } from 'next/server';
import { withAuth, AuthenticatedRequest } from '@/lib/auth-middleware';
import { canUserUseService } from '@/lib/user-usage';

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

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload an image.' },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 10MB.' },
        { status: 400 }
      );
    }


    // 为了简化，我们先返回成功，让客户端处理上传

    return NextResponse.json({
      success: true,
      message: 'File validated, ready for processing'
    });

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