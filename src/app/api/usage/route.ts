import { NextResponse } from 'next/server';
import { withAuth, AuthenticatedRequest } from '@/features/auth/server';
import { getUserUsage } from '@/features/user';
import { createApiResponse } from '@/lib/validation/schemas';
import { logger } from '@/lib/logger';

async function handleGetUsage(request: AuthenticatedRequest) {
  logger.info('Getting user usage', {
    userId: request.user.uid,
  });

  const data = await getUserUsage(request);
  
  logger.info('User usage retrieved successfully', {
    userId: request.user.uid,
    subscription: data.subscription,
    remainingUses: data.remainingUses,
  });
  
  return NextResponse.json(createApiResponse(true, data));
}

export const GET = withAuth(handleGetUsage);