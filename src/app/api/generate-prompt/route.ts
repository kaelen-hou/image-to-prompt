import { CozeAPI } from '@coze/api';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Check environment variables
    if (!process.env.COZE_API_TOKEN) {
      console.error('COZE_API_TOKEN is not set');
      return NextResponse.json(
        { error: 'API token not configured' },
        { status: 500 }
      );
    }

    if (!process.env.COZE_WORKFLOW_ID) {
      console.error('COZE_WORKFLOW_ID is not set');
      return NextResponse.json(
        { error: 'Workflow ID not configured' },
        { status: 500 }
      );
    }

    const apiClient = new CozeAPI({
      token: process.env.COZE_API_TOKEN,
      baseURL: process.env.COZE_BASE_URL || 'https://api.coze.cn'
    });

    const { imageUrl, promptType = 'stableDiffusion', userQuery = '描述下这张图片' } = await request.json();

    if (!imageUrl) {
      return NextResponse.json(
        { error: 'Image URL is required' },
        { status: 400 }
      );
    }


    const res = await apiClient.workflows.runs.create({
      workflow_id: process.env.COZE_WORKFLOW_ID,
      parameters: {
        img: imageUrl,
        promptType,
        userQuery
      },
    });


    return NextResponse.json({
      success: true,
      data: res
    });

  } catch (error) {
    console.error('Error calling Coze API:', error);

    return NextResponse.json(
      {
        error: 'Failed to generate prompt',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}