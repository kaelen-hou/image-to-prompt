import { adminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';

// 订阅计划类型
export type SubscriptionPlan = 'free' | 'basic' | 'pro' | 'premium';

// 订阅计划配置
export const SUBSCRIPTION_LIMITS = {
  free: 10,
  basic: 100,
  pro: 500,
  premium: 2000,
} as const;

// 用户数据接口
export interface UserUsage {
  uid: string;
  email: string;
  subscription: SubscriptionPlan;
  usageCount: number;
  createdAt: Date;
  lastUsedAt: Date;
  resetAt: Date; // 使用次数重置时间（每月重置）
}

// 创建或获取用户使用数据
export async function getUserUsage(uid: string, email: string): Promise<UserUsage> {
  const userRef = adminDb.collection('userUsage').doc(uid);
  const userDoc = await userRef.get();

  if (userDoc.exists) {
    const data = userDoc.data();
    return {
      uid,
      email,
      subscription: data?.subscription || 'free',
      usageCount: data?.usageCount || 0,
      createdAt: data?.createdAt?.toDate() || new Date(),
      lastUsedAt: data?.lastUsedAt?.toDate() || new Date(),
      resetAt: data?.resetAt?.toDate() || getNextResetDate(),
    };
  } else {
    // 新用户，创建默认记录
    const now = new Date();
    const newUser: UserUsage = {
      uid,
      email,
      subscription: 'free',
      usageCount: 0,
      createdAt: now,
      lastUsedAt: now,
      resetAt: getNextResetDate(),
    };

    await userRef.set({
      ...newUser,
      createdAt: now,
      lastUsedAt: now,
      resetAt: newUser.resetAt,
    });

    return newUser;
  }
}

// 检查用户是否可以使用服务
export async function canUserUseService(uid: string, email: string): Promise<{
  canUse: boolean;
  remainingUses: number;
  resetDate: Date;
  subscription: SubscriptionPlan;
}> {
  const userUsage = await getUserUsage(uid, email);
  
  // 检查是否需要重置使用次数
  if (new Date() > userUsage.resetAt) {
    await resetUserUsage(uid);
    userUsage.usageCount = 0;
    userUsage.resetAt = getNextResetDate();
  }

  const limit = SUBSCRIPTION_LIMITS[userUsage.subscription];
  const remainingUses = Math.max(0, limit - userUsage.usageCount);
  const canUse = userUsage.usageCount < limit;

  return {
    canUse,
    remainingUses,
    resetDate: userUsage.resetAt,
    subscription: userUsage.subscription,
  };
}

// 增加用户使用次数
export async function incrementUserUsage(uid: string): Promise<void> {
  const userRef = adminDb.collection('userUsage').doc(uid);
  await userRef.update({
    usageCount: FieldValue.increment(1),
    lastUsedAt: new Date(),
  });
}

// 重置用户使用次数（每月重置）
export async function resetUserUsage(uid: string): Promise<void> {
  const userRef = adminDb.collection('userUsage').doc(uid);
  await userRef.update({
    usageCount: 0,
    resetAt: getNextResetDate(),
  });
}

// 更新用户订阅计划
export async function updateUserSubscription(
  uid: string, 
  subscription: SubscriptionPlan
): Promise<void> {
  const userRef = adminDb.collection('userUsage').doc(uid);
  await userRef.update({
    subscription,
  });
}

// 获取下一个重置日期（下个月的1号）
function getNextResetDate(): Date {
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return nextMonth;
}