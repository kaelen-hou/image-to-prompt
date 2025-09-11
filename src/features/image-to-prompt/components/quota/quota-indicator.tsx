'use client'

import { Button } from '@/shared/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { AlertTriangle, User } from 'lucide-react'

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
    <Card className={`w-full ${!userUsage.canUse ? 'border-red-200 bg-red-50' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <User className="w-5 h-5" />
            Usage Status
          </CardTitle>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${planInfo.bgColor} ${planInfo.color}`}>
            {planInfo.name}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Usage Progress */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Remaining Uses
            </span>
            <span className={`text-sm font-bold ${userUsage.remainingUses <= 0 ? 'text-red-600' : 'text-green-600'}`}>
              {userUsage.remainingUses}
            </span>
          </div>
          
          {/* Progress bar for free users */}
          {userUsage.subscription === 'free' && (
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  userUsage.remainingUses > 5 
                    ? 'bg-green-500' 
                    : userUsage.remainingUses > 2 
                      ? 'bg-yellow-500' 
                      : 'bg-red-500'
                }`}
                style={{ width: `${Math.max((userUsage.remainingUses / 10) * 100, 5)}%` }}
              />
            </div>
          )}
        </div>

        {/* Reset Date */}
        <div className="text-xs text-gray-500">
          {userUsage.subscription === 'free' && (
            <p>Resets on: {resetDate}</p>
          )}
        </div>

        {/* Warning for low quota */}
        {isLowQuota && (
          <div className="flex items-start gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium text-yellow-800">Running low on uses</p>
              <p className="text-yellow-700 mt-1">
                Consider upgrading for unlimited generations
              </p>
            </div>
          </div>
        )}

        {/* No uses left */}
        {!userUsage.canUse && (
          <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
            <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium text-red-800">No uses remaining</p>
              <p className="text-red-700 mt-1">
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
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            Upgrade for Unlimited Use
          </Button>
        )}
      </CardContent>
    </Card>
  )
}