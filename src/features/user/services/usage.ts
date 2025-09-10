import { AuthenticatedRequest } from '@/features/auth/server'
import { canUserUseService } from './user-usage'

export async function getUserUsage(request: AuthenticatedRequest) {
  const usageInfo = await canUserUseService(request.user.uid, request.user.email!);
  
  return {
    subscription: usageInfo.subscription,
    remainingUses: usageInfo.remainingUses,
    canUse: usageInfo.canUse,
    resetDate: usageInfo.resetDate.toISOString(),
  };
}