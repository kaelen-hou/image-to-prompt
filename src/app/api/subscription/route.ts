import { NextResponse } from 'next/server';
import { withAuth, AuthenticatedRequest } from '@/features/auth/server';
import { updateSubscription } from '@/features/user';

async function handleUpdateSubscription(request: AuthenticatedRequest) {
  try {
    const body = await request.json();
    const { subscription } = body;

    const result = await updateSubscription(request.user.uid, subscription);

    return NextResponse.json(result);

  } catch (error) {
    console.error('Error updating subscription:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to update subscription',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export const POST = withAuth(handleUpdateSubscription);