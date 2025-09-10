// Note: Firebase admin types are imported dynamically to avoid client bundle issues

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

// Helper function to get admin DB dynamically
async function getFirebaseAdmin() {
  const { adminDb } = await import('@/features/auth/services/firebase-admin');
  const { FieldValue } = await import('firebase-admin/firestore');
  return { adminDb, FieldValue };
}

// 创建或获取用户使用数据
export async function getUserUsage(uid: string, email: string): Promise<UserUsage> {
  const { adminDb } = await getFirebaseAdmin();
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
    // 创建新用户记录
    const now = new Date();
    const resetAt = getNextResetDate();
    
    const newUser: UserUsage = {
      uid,
      email,
      subscription: 'free',
      usageCount: 0,
      createdAt: now,
      lastUsedAt: now,
      resetAt,
    };

    await userRef.set({
      ...newUser,
      createdAt: now,
      lastUsedAt: now,
      resetAt,
    });

    return newUser;
  }
}

// 计算下次重置时间（每月1号）
function getNextResetDate(): Date {
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return nextMonth;
}

// 检查是否需要重置使用次数
function needsReset(resetAt: Date): boolean {
  return new Date() >= resetAt;
}

// 重置用户使用次数
async function resetUserUsage(uid: string): Promise<void> {
  const { adminDb } = await getFirebaseAdmin();
  const userRef = adminDb.collection('userUsage').doc(uid);
  
  await userRef.update({
    usageCount: 0,
    resetAt: getNextResetDate(),
  });
}

// 检查用户是否可以使用服务
export async function canUserUseService(uid: string, email: string) {
  const userUsage = await getUserUsage(uid, email);
  
  // 检查是否需要重置
  if (needsReset(userUsage.resetAt)) {
    await resetUserUsage(uid);
    userUsage.usageCount = 0;
    userUsage.resetAt = getNextResetDate();
  }
  
  const limit = SUBSCRIPTION_LIMITS[userUsage.subscription];
  const canUse = userUsage.usageCount < limit;
  
  return {
    canUse,
    subscription: userUsage.subscription,
    usageCount: userUsage.usageCount,
    limit,
    remainingUses: Math.max(0, limit - userUsage.usageCount),
    resetDate: userUsage.resetAt,
  };
}

// 增加用户使用次数
export async function incrementUserUsage(uid: string): Promise<void> {
  const { adminDb, FieldValue } = await getFirebaseAdmin();
  const userRef = adminDb.collection('userUsage').doc(uid);
  
  await userRef.update({
    usageCount: FieldValue.increment(1),
    lastUsedAt: new Date(),
  });
}

// 更新用户订阅
export async function updateUserSubscription(uid: string, subscription: SubscriptionPlan): Promise<void> {
  const { adminDb } = await getFirebaseAdmin();
  const userRef = adminDb.collection('userUsage').doc(uid);
  
  await userRef.update({
    subscription,
    lastUsedAt: new Date(),
  });
}