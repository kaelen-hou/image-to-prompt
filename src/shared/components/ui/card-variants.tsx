import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "./card"

/**
 * 扩展的卡片组件变体系统
 * 提供常用的卡片布局和样式变体
 */

const cardVariants = cva(
  "transition-all duration-200 hover:shadow-lg",
  {
    variants: {
      variant: {
        default: "",
        elevated: "shadow-md hover:shadow-xl hover:-translate-y-1",
        outline: "border-2 border-gray-200 hover:border-purple-300 hover:shadow-md",
        gradient: "bg-gradient-to-br from-white to-gray-50 hover:from-purple-50/50 hover:to-pink-50/50",
        interactive: "cursor-pointer hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl active:scale-[0.98]",
      },
      padding: {
        none: "",
        sm: "p-4",
        default: "p-6", 
        lg: "p-8",
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  }
)

// Feature Card - 用于功能展示
interface FeatureCardProps extends React.ComponentProps<typeof Card>, VariantProps<typeof cardVariants> {
  icon?: React.ReactNode
  title: string
  description?: string
  children?: React.ReactNode
}

export function FeatureCard({
  className,
  variant,
  padding,
  icon,
  title,
  description,
  children,
  ...props
}: FeatureCardProps) {
  return (
    <Card 
      className={cn(cardVariants({ variant, padding }), className)} 
      {...props}
    >
      <CardHeader>
        {icon && (
          <div className="flex justify-center mb-4">
            {icon}
          </div>
        )}
        <CardTitle className="text-center">{title}</CardTitle>
        {description && (
          <p className="text-sm text-gray-600 text-center mt-2">
            {description}
          </p>
        )}
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  )
}

// Example Card - 用于示例展示
interface ExampleCardProps extends React.ComponentProps<typeof Card>, VariantProps<typeof cardVariants> {
  image?: React.ReactNode
  title?: string
  description: string
  actions?: React.ReactNode
}

export function ExampleCard({
  className,
  variant = "interactive",
  padding = "sm",
  image,
  title,
  description,
  actions,
  ...props
}: ExampleCardProps) {
  return (
    <Card 
      className={cn(cardVariants({ variant, padding }), className)} 
      {...props}
    >
      <CardContent>
        {image && (
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 flex items-center justify-center">
            {image}
          </div>
        )}
        {title && (
          <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        )}
        <div className="bg-gray-50 p-3 rounded-lg mb-3">
          <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
        {actions && (
          <div className="flex gap-2">
            {actions}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Tool Card - 用于工具展示 
interface ToolCardProps extends React.ComponentProps<typeof Card>, VariantProps<typeof cardVariants> {
  icon?: React.ReactNode
  title: string
  description?: string
  status?: 'available' | 'coming-soon' | 'beta'
  action?: React.ReactNode
  onClick?: () => void
}

export function ToolCard({
  className,
  variant = "interactive",
  padding = "default",
  icon,
  title,
  description,
  status,
  action,
  onClick,
  ...props
}: ToolCardProps) {
  return (
    <Card 
      className={cn(cardVariants({ variant, padding }), className)}
      onClick={onClick}
      {...props}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="p-2 bg-purple-100 rounded-lg">
                {icon}
              </div>
            )}
            <div>
              <CardTitle className="text-left">{title}</CardTitle>
              {status && (
                <span className={cn(
                  "inline-block px-2 py-1 rounded-full text-xs font-medium mt-1",
                  {
                    "bg-green-100 text-green-800": status === 'available',
                    "bg-yellow-100 text-yellow-800": status === 'coming-soon',
                    "bg-blue-100 text-blue-800": status === 'beta',
                  }
                )}>
                  {status === 'available' && 'Available'}
                  {status === 'coming-soon' && 'Coming Soon'}
                  {status === 'beta' && 'Beta'}
                </span>
              )}
            </div>
          </div>
        </div>
        {description && (
          <p className="text-sm text-gray-600 mt-2">
            {description}
          </p>
        )}
      </CardHeader>
      {action && (
        <CardContent>
          {action}
        </CardContent>
      )}
    </Card>
  )
}

// Stats Card - 用于数据展示
interface StatsCardProps extends React.ComponentProps<typeof Card>, VariantProps<typeof cardVariants> {
  label: string
  value: string | number
  icon?: React.ReactNode
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
}

export function StatsCard({
  className,
  variant = "elevated",
  padding = "default",
  label,
  value,
  icon,
  trend,
  trendValue,
  ...props
}: StatsCardProps) {
  return (
    <Card 
      className={cn(cardVariants({ variant, padding }), className)} 
      {...props}
    >
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">{label}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            {trend && trendValue && (
              <div className={cn(
                "flex items-center text-sm mt-1",
                {
                  "text-green-600": trend === 'up',
                  "text-red-600": trend === 'down',
                  "text-gray-600": trend === 'neutral',
                }
              )}>
                <span>{trendValue}</span>
              </div>
            )}
          </div>
          {icon && (
            <div className="text-gray-400">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}