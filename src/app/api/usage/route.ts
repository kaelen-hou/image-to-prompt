import { NextResponse } from 'next/server';
import { withAuth, AuthenticatedRequest } from '@/features/auth/server';
import { getUserUsage } from '@/features/user';

async function handleGetUsage(request: AuthenticatedRequest) {
  try {
    const data = await getUserUsage(request);
    
    return NextResponse.json({
      success: true,
      data
    });

  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Failed to get usage information',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export const GET = withAuth(handleGetUsage);