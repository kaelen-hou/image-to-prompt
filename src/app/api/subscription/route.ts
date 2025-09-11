import { NextResponse } from 'next/server';
import { withAuth, AuthenticatedRequest } from '@/features/auth/server';
import { updateSubscription } from '@/features/user';
import { createApiResponse, UpdateSubscriptionSchema } from '@/lib/validation/schemas';
import { logger } from '@/lib/logger';

async function handleUpdateSubscription(request: AuthenticatedRequest) {
  const body = await request.json();
  
  // Validate input
  const validatedData = UpdateSubscriptionSchema.parse(body);
  const { subscription } = validatedData;

  logger.info('Updating user subscription', {
    userId: request.user.uid,
    oldSubscription: 'unknown', // We don't have the old value here
    newSubscription: subscription,
  });

  try {
    const result = await updateSubscription(request.user.uid, subscription);

    logger.info('Subscription updated successfully', {
      userId: request.user.uid,
      newSubscription: subscription,
      result,
    });

    return NextResponse.json(createApiResponse(true, result));
  } catch (error) {
    logger.error('Failed to update subscription', {
      userId: request.user.uid,
      subscription,
    }, error instanceof Error ? error : new Error(String(error)));
    
    throw error;
  }
}

export const POST = withAuth(handleUpdateSubscription);