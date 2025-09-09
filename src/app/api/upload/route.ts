import { NextRequest, NextResponse } from 'next/server';
import { uploadFileToOSS } from '@/lib/oss';

export async function POST(request: NextRequest) {
  try {
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

    // Check OSS configuration
    if (!process.env.OSS_ACCESS_KEY_ID || !process.env.OSS_ACCESS_KEY_SECRET || !process.env.OSS_BUCKET) {
      return NextResponse.json(
        { error: 'OSS configuration is missing' },
        { status: 500 }
      );
    }


    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to OSS
    const ossUrl = await uploadFileToOSS(buffer, file.name, file.type);


    return NextResponse.json({
      success: true,
      url: ossUrl,
      filename: file.name
    });

  } catch (error) {
    console.error('Error uploading file to OSS:', error);
    return NextResponse.json(
      { 
        error: 'Failed to upload file',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}