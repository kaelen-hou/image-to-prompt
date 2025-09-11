import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"

/**
 * 统一的 Section 组件
 * 封装响应式间距和背景样式
 */

const sectionVariants = cva(
  "w-full",
  {
    variants: {
      spacing: {
        sm: "py-8 md:py-12",
        default: "py-12 md:py-16 lg:py-20", 
        lg: "py-16 md:py-20 lg:py-28",
        xl: "py-20 md:py-24 lg:py-32",
      },
      background: {
        white: "bg-white",
        gray: "bg-gray-50",
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

interface SectionProps 
  extends React.ComponentProps<"section">, 
    VariantProps<typeof sectionVariants> {
  container?: boolean
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "full"
}

export function Section({
  className,
  spacing,
  background,
  container = true,
  maxWidth = "full",
  children,
  ...props
}: SectionProps) {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md", 
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "4xl": "max-w-4xl",
    full: "",
  }

  return (
    <section 
      className={cn(sectionVariants({ spacing, background }), className)}
      {...props}
    >
      {container ? (
        <div className={cn(
          "container mx-auto px-4 md:px-6 lg:px-8",
          maxWidth !== "full" && maxWidthClasses[maxWidth]
        )}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}