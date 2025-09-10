import { NextResponse } from 'next/server';
import { withAuth, AuthenticatedRequest } from '@/features/auth/server';
import { incrementUserUsage } from '@/features/user';
import { uploadFileToCoze, executeWorkflow } from '@/features/image-to-prompt';

async function handleGeneratePrompt(request: AuthenticatedRequest) {
  try {
    // Check environment variables
    if (!process.env.COZE_API_TOKEN) {
      return NextResponse.json(
        { error: 'API token not configured' },
        { status: 500 }
      );
    }

    if (!process.env.COZE_WORKFLOW_ID) {
      return NextResponse.json(
        { error: 'Workflow ID not configured' },
        { status: 500 }
      );
    }

    // Parse FormData
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const promptType = formData.get('promptType') as string || 'stableDiffusion';
    const userQuery = formData.get('userQuery') as string || '描述下这张图片';

    if (!file) {
      return NextResponse.json(
        { error: 'Image file is required' },
        { status: 400 }
      );
    }

    // Upload file to Coze and get file_id
    let fileId: string;
    try {
      fileId = await uploadFileToCoze(file);
    } catch (uploadError) {
      return NextResponse.json(
        { error: 'Failed to upload file to Coze', details: uploadError instanceof Error ? uploadError.message : 'Unknown error' },
        { status: 500 }
      );
    }

    // Execute workflow
    const res = await executeWorkflow(fileId, promptType, userQuery);

    // Increment user usage count only after successful API call
    await incrementUserUsage(request.user.uid);

    return NextResponse.json({
      success: true,
      data: res
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: 'Failed to generate prompt',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export const POST = withAuth(handleGeneratePrompt);