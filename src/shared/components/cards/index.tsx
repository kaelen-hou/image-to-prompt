import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Button } from "@/shared/components/ui/button"
import { cn } from "@/shared/lib/utils"

/**
 * 基于 shadcn/ui Card 的高阶复用组件
 * 统一常用卡片模式和交互
 */

// 工具卡片 - 用于首页工具展示
interface ToolCardProps {
  icon: React.ReactNode
  title: string
  description: string
  status?: "available" | "coming-soon"
  buttonText?: string
  onClick?: () => void
  className?: string
}

export function ToolCard({
  icon,
  title,
  description,
  status = "available",
  buttonText = "Try Now",
  onClick,
  className
}: ToolCardProps) {
  return (
    <Card className={cn(
      "hover:shadow-lg hover:-translate-y-1 transition-all duration-200",
      onClick && "cursor-pointer",
      className
    )}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              {icon}
            </div>
            <div>
              <CardTitle className="text-left">{title}</CardTitle>
              {status === "coming-soon" && (
                <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full mt-1">
                  Coming Soon
                </span>
              )}
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {description}
        </p>
      </CardHeader>
      <CardContent>
        <Button 
          variant={status === "coming-soon" ? "secondary" : "default"}
          disabled={status === "coming-soon"}
          onClick={onClick}
          className="w-full"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  )
}

// 示例卡片 - 用于展示prompt示例
interface ExampleCardProps {
  icon?: React.ReactNode
  title?: string
  prompt: string
  onCopy?: (prompt: string) => void
  onEdit?: () => void
  onUse?: () => void
  className?: string
}

export function ExampleCard({
  icon,
  title,
  prompt,
  onCopy,
  onEdit,
  onUse,
  className
}: ExampleCardProps) {
  return (
    <Card className={cn(
      "hover:shadow-lg transition-all duration-200",
      className
    )}>
      <CardContent className="p-4">
        {icon && (
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 flex items-center justify-center">
            {icon}
          </div>
        )}
        {title && (
          <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        )}
        <div className="bg-gray-50 p-3 rounded-lg mb-3">
          <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
            {prompt}
          </p>
        </div>
        <div className="flex gap-2">
          {onCopy && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 text-xs"
              onClick={() => onCopy(prompt)}
            >
              Copy
            </Button>
          )}
          {onEdit && (
            <Button variant="outline" size="sm" className="flex-1 text-xs" onClick={onEdit}>
              Edit
            </Button>
          )}
          {onUse && (
            <Button size="sm" className="flex-1 text-xs" onClick={onUse}>
              Use
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// 功能卡片 - 用于功能说明
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureCard({
  icon,
  title,
  description,
  className
}: FeatureCardProps) {
  return (
    <Card className={cn(
      "text-center hover:shadow-md transition-all duration-200",
      className
    )}>
      <CardContent className="p-6">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-purple-100 rounded-full">
            {icon}
          </div>
        </div>
        <CardTitle className="mb-2">{title}</CardTitle>
        <p className="text-sm text-gray-600">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

// 导出所有卡片组件
export { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"