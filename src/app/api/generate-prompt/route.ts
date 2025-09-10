import { NextResponse } from 'next/server';
import { withAuth, AuthenticatedRequest } from '@/lib/auth-middleware';
import { incrementUserUsage } from '@/lib/user-usage';

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
      // Upload file using FormData
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);

      const uploadResponse = await fetch(`${process.env.COZE_BASE_URL || 'https://api.coze.cn'}/v1/files/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.COZE_API_TOKEN}`,
        },
        body: uploadFormData,
      });

      if (!uploadResponse.ok) {
        const errorText = await uploadResponse.text();
        throw new Error(`Upload failed: ${uploadResponse.status} ${errorText}`);
      }

      const uploadResult = await uploadResponse.json();
      fileId = uploadResult.data.id;
    } catch (uploadError) {
      return NextResponse.json(
        { error: 'Failed to upload file to Coze', details: uploadError instanceof Error ? uploadError.message : 'Unknown error' },
        { status: 500 }
      );
    }

    // Call workflow API with file_id
    const workflowParams = {
      workflow_id: process.env.COZE_WORKFLOW_ID,
      parameters: {
        img: {
          file_id: fileId
        },
        promptType,
        userQuery
      },
    };

    // Execute workflow
    const workflowResponse = await fetch(`${process.env.COZE_BASE_URL || 'https://api.coze.cn'}/v1/workflow/run`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.COZE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(workflowParams),
    });

    if (!workflowResponse.ok) {
      const errorText = await workflowResponse.text();
      throw new Error(`Workflow failed: ${workflowResponse.status} ${errorText}`);
    }

    const res = await workflowResponse.json();

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