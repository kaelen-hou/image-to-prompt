import OSS from 'ali-oss';

// Create OSS client instance
export function createOSSClient() {
  const client = new OSS({
    region: process.env.OSS_REGION!,
    accessKeyId: process.env.OSS_ACCESS_KEY_ID!,
    accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET!,
    bucket: process.env.OSS_BUCKET!,
  });

  return client;
}

// Upload file to OSS
export async function uploadFileToOSS(
  file: Buffer,
  fileName: string,
  contentType: string
): Promise<string> {
  try {
    const client = createOSSClient();

    // Generate unique file path
    const timestamp = Date.now();
    const fileExtension = fileName.split('.').pop() || 'jpg';
    const ossFileName = `imagetoprompt/${timestamp}-${Math.random().toString(36).substring(7)}.${fileExtension}`;

    // Upload file
    const result = await client.put(ossFileName, file, {
      headers: {
        'Content-Type': contentType,
      },
    });

    // Return the public URL with CDN domain
    // Replace OSS domain with CDN domain
    const cdnUrl = result.url.replace(/^https?:\/\/[^\/]+/, 'https://cdn.lingowhale.com');
    return cdnUrl;
  } catch (error) {
    console.error('OSS upload failed:', error);
    throw new Error('Failed to upload file to OSS');
  }
}

// Get OSS file URL with CDN domain
export function getOSSUrl(fileName: string): string {
  return `https://cdn.lingowhale.com/${fileName}`;
}