import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-purple-500/20 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-sm hover:from-violet-700 hover:to-purple-700 hover:shadow-md active:scale-[0.98] focus-visible:ring-purple-500/30",
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-600 hover:shadow-md active:scale-[0.98] focus-visible:ring-red-500/30",
        outline:
          "border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50 hover:border-gray-400 hover:shadow-md active:scale-[0.98] focus-visible:ring-gray-500/30",
        secondary:
          "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200 hover:shadow-md active:scale-[0.98] focus-visible:ring-gray-500/30",
        ghost:
          "text-gray-700 hover:bg-gray-100 hover:text-gray-900 active:scale-[0.98] focus-visible:ring-gray-500/30",
        link: "text-purple-600 underline-offset-4 hover:underline hover:text-purple-700 active:text-purple-800",
      },
      size: {
        sm: "h-8 px-3 py-1.5 text-xs gap-1.5 has-[>svg]:px-2.5",
        default: "h-10 px-4 py-2.5 has-[>svg]:px-3.5",
        lg: "h-12 px-6 py-3 text-base has-[>svg]:px-5",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
