import { NextResponse } from 'next/server';
import { withAuth, AuthenticatedRequest } from '@/lib/auth-middleware';
import { canUserUseService } from '@/lib/user-usage';

async function handleGetUsage(request: AuthenticatedRequest) {
  try {
    const usageInfo = await canUserUseService(request.user.uid, request.user.email!);
    
    return NextResponse.json({
      success: true,
      data: {
        subscription: usageInfo.subscription,
        remainingUses: usageInfo.remainingUses,
        canUse: usageInfo.canUse,
        resetDate: usageInfo.resetDate.toISOString(),
      }
    });

  } catch (error) {
    console.error('Error getting user usage:', error);
    
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