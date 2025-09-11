import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"

/**
 * PageSection - 基于现有布局的高阶组件
 * 统一页面区块的间距、背景和布局
 */

const pageSectionVariants = cva(
  "w-full",
  {
    variants: {
      spacing: {
        sm: "py-8 md:py-12",
        default: "py-12 md:py-16 lg:py-20",
        lg: "py-16 md:py-20 lg:py-28",
      },
      background: {
        white: "bg-white",
        muted: "bg-gray-50", 
        gradient: "bg-gradient-to-br from-violet-50 to-indigo-50",
        purpleGradient: "bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50",
        pinkGradient: "bg-gradient-to-br from-purple-50 to-pink-50",
      }
    },
    defaultVariants: {
      spacing: "default",
      background: "white",
    },
  }
)

interface PageSectionProps 
  extends React.ComponentProps<"section">,
    VariantProps<typeof pageSectionVariants> {
  container?: boolean
}

export function PageSection({
  className,
  spacing,
  background, 
  container = true,
  children,
  ...props
}: PageSectionProps) {
  return (
    <section 
      className={cn(pageSectionVariants({ spacing, background }), className)}
      {...props}
    >
      {container ? (
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}

/**
 * SectionHeader - 统一的区块标题组件
 * 基于现有的排版规范
 */
interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12 md:mb-16",
      centered && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}