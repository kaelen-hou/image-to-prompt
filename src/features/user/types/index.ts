export type SubscriptionPlan = 'free' | 'basic' | 'pro' | 'premium';

export interface UserUsage {
  subscription: SubscriptionPlan;
  remainingUses: number;
  canUse: boolean;
  resetDate: string;
}

export interface UsageInfo {
  subscription: SubscriptionPlan;
  remainingUses: number;
  canUse: boolean;
  resetDate: Date;
}