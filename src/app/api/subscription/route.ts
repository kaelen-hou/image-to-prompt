import { NextResponse } from 'next/server';
import { withAuth, AuthenticatedRequest } from '@/lib/auth-middleware';
import { updateUserSubscription, SubscriptionPlan } from '@/lib/user-usage';

async function handleUpdateSubscription(request: AuthenticatedRequest) {
  try {
    const body = await request.json();
    const { subscription } = body;

    if (!subscription || !['free', 'basic', 'pro', 'premium'].includes(subscription)) {
      return NextResponse.json(
        { error: 'Invalid subscription plan' },
        { status: 400 }
      );
    }

    await updateUserSubscription(request.user.uid, subscription as SubscriptionPlan);

    return NextResponse.json({
      success: true,
      message: 'Subscription updated successfully'
    });

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