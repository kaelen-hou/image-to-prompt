'use client'

import { Button } from '@/shared/components/ui/button'
import { AlertTriangle, User } from 'lucide-react'
import { cn } from '@/shared/lib/utils'

interface UserUsage {
  subscription: string
  remainingUses: number
  canUse: boolean
  resetDate: string
}

interface QuotaIndicatorProps {
  userUsage: UserUsage | null
  onUpgrade?: () => void
}

export function QuotaIndicator({ userUsage, onUpgrade }: QuotaIndicatorProps) {
  if (!userUsage) return null

  const getSubscriptionDisplay = (subscription: string) => {
    const plans = {
      free: { name: 'Free Plan', color: 'text-gray-600', bgColor: 'bg-gray-100' },
      basic: { name: 'Basic Plan', color: 'text-blue-600', bgColor: 'bg-blue-100' },
      pro: { name: 'Pro Plan', color: 'text-purple-600', bgColor: 'bg-purple-100' },
      premium: { name: 'Premium Plan', color: 'text-gold-600', bgColor: 'bg-yellow-100' }
    }
    return plans[subscription as keyof typeof plans] || plans.free
  }

  const planInfo = getSubscriptionDisplay(userUsage.subscription)
  const isLowQuota = userUsage.remainingUses <= 2 && userUsage.subscription === 'free'
  const resetDate = new Date(userUsage.resetDate).toLocaleDateString()

  return (
    <div className={cn("bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden", !userUsage.canUse && "border-red-200")}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Usage Status</h3>
          </div>
          <div className={cn("px-3 py-1.5 rounded-full text-sm font-semibold", planInfo.bgColor, planInfo.color)}>
            {planInfo.name}
          </div>
        </div>

        <div className="space-y-4">
          {/* Usage Progress */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-gray-700">
                Remaining Uses
              </span>
              <span className={cn("text-lg font-bold", userUsage.remainingUses <= 0 ? "text-red-600" : "text-green-600")}>
                {userUsage.remainingUses}
              </span>
            </div>
            
            {/* Progress bar for free users */}
            {userUsage.subscription === 'free' && (
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    userUsage.remainingUses > 5 
                      ? 'bg-gradient-to-r from-green-400 to-green-500' 
                      : userUsage.remainingUses > 2 
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-400' 
                        : 'bg-gradient-to-r from-red-400 to-red-500'
                  }`}
                  style={{ width: `${Math.max((userUsage.remainingUses / 10) * 100, 5)}%` }}
                />
              </div>
            )}
          </div>

          {/* Reset Date */}
          {userUsage.subscription === 'free' && (
            <div className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">
              <p>🔄 Quota resets on: <span className="font-semibold text-gray-900">{resetDate}</span></p>
            </div>
          )}

          {/* Warning for low quota */}
          {isLowQuota && (
            <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-4 h-4 text-yellow-600" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-yellow-800 mb-1">Running low on uses</p>
                <p className="text-yellow-700">
                  Consider upgrading for unlimited generations
                </p>
              </div>
            </div>
          )}

          {/* No uses left */}
          {!userUsage.canUse && (
            <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-4 h-4 text-red-600" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-red-800 mb-1">No uses remaining</p>
                <p className="text-red-700">
                  {userUsage.subscription === 'free' 
                    ? `Your quota will reset on ${resetDate}` 
                    : 'Please contact support'
                  }
                </p>
              </div>
            </div>
          )}

          {/* Upgrade CTA for free users */}
          {userUsage.subscription === 'free' && onUpgrade && (
            <Button 
              onClick={onUpgrade}
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              ✨ Upgrade for Unlimited Use
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}