import { updateUserSubscription, SubscriptionPlan } from './user-usage'

export async function updateSubscription(userId: string, subscription: string) {
  if (!subscription || !['free', 'basic', 'pro', 'premium'].includes(subscription)) {
    throw new Error('Invalid subscription plan');
  }

  await updateUserSubscription(userId, subscription as SubscriptionPlan);
  
  return {
    success: true,
    message: 'Subscription updated successfully'
  };
}