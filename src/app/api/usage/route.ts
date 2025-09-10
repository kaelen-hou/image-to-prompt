import { NextResponse } from 'next/server';
import { withAuth, AuthenticatedRequest } from '@/features/auth/server';
import { getUserUsage } from '@/features/user';

async function handleGetUsage(request: AuthenticatedRequest) {
  console.log(`[usage-api] Starting handleGetUsage for user:`, request.user.uid);
  
  try {
    console.log(`[usage-api] Calling getUserUsage...`);
    const data = await getUserUsage(request);
    console.log(`[usage-api] getUserUsage completed successfully:`, data);
    
    const response = {
      success: true,
      data
    };
    
    console.log(`[usage-api] Returning success response`);
    return NextResponse.json(response);

  } catch (error) {
    console.error('[usage-api] Error getting user usage:', error);
    console.error('[usage-api] Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    
    const errorResponse = { 
      error: 'Failed to get usage information',
      details: error instanceof Error ? error.message : 'Unknown error'
    };
    
    console.log(`[usage-api] Returning error response:`, errorResponse);
    return NextResponse.json(errorResponse, { status: 500 });
  }
}

export const GET = withAuth(handleGetUsage);