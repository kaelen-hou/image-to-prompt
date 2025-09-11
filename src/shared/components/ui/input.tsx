import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"

/**
 * 标准化的输入组件系统
 * 提供一致的输入框样式和状态
 */

const inputVariants = cva(
  "flex w-full rounded-lg border px-3 py-2 text-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-gray-300 bg-white focus-visible:ring-purple-500/30 focus-visible:border-purple-500",
        error: "border-red-300 bg-red-50 focus-visible:ring-red-500/30 focus-visible:border-red-500 text-red-900 placeholder:text-red-400",
        success: "border-green-300 bg-green-50 focus-visible:ring-green-500/30 focus-visible:border-green-500 text-green-900 placeholder:text-green-400",
        ghost: "border-transparent bg-gray-100 focus-visible:ring-purple-500/30 focus-visible:border-purple-500 focus-visible:bg-white",
      },
      size: {
        sm: "h-8 px-2 text-xs",
        default: "h-10 px-3",
        lg: "h-12 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface InputProps
  extends Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof inputVariants> {
  label?: string
  error?: string
  success?: string
  helper?: string
  icon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, label, error, success, helper, icon, endIcon, ...props }, ref) => {
    // Auto-detect variant based on error/success props
    const computedVariant = error ? "error" : success ? "success" : variant

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
          <input
            className={cn(
              inputVariants({ variant: computedVariant, size, className }),
              icon && "pl-10",
              endIcon && "pr-10"
            )}
            ref={ref}
            {...props}
          />
          {endIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {endIcon}
            </div>
          )}
        </div>
        {(error || success || helper) && (
          <div className="flex items-center gap-1 text-xs">
            {error && (
              <span className="text-red-600">{error}</span>
            )}
            {success && (
              <span className="text-green-600">{success}</span>
            )}
            {helper && !error && !success && (
              <span className="text-gray-500">{helper}</span>
            )}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

// Textarea Component
interface TextareaProps
  extends Omit<React.ComponentProps<"textarea">, "size">,
    VariantProps<typeof inputVariants> {
  label?: string
  error?: string
  success?: string
  helper?: string
  resize?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, label, error, success, helper, resize = true, ...props }, ref) => {
    const computedVariant = error ? "error" : success ? "success" : variant

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          className={cn(
            inputVariants({ variant: computedVariant, size }),
            "min-h-[80px]",
            !resize && "resize-none",
            className
          )}
          ref={ref}
          {...props}
        />
        {(error || success || helper) && (
          <div className="flex items-center gap-1 text-xs">
            {error && (
              <span className="text-red-600">{error}</span>
            )}
            {success && (
              <span className="text-green-600">{success}</span>
            )}
            {helper && !error && !success && (
              <span className="text-gray-500">{helper}</span>
            )}
          </div>
        )}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

// Select Component
interface SelectProps
  extends Omit<React.ComponentProps<"select">, "size">,
    VariantProps<typeof inputVariants> {
  label?: string
  error?: string
  success?: string
  helper?: string
  placeholder?: string
  children: React.ReactNode
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, size, label, error, success, helper, placeholder, children, ...props }, ref) => {
    const computedVariant = error ? "error" : success ? "success" : variant

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <select
          className={cn(
            inputVariants({ variant: computedVariant, size }),
            "pr-8 cursor-pointer",
            className
          )}
          ref={ref}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        {(error || success || helper) && (
          <div className="flex items-center gap-1 text-xs">
            {error && (
              <span className="text-red-600">{error}</span>
            )}
            {success && (
              <span className="text-green-600">{success}</span>
            )}
            {helper && !error && !success && (
              <span className="text-gray-500">{helper}</span>
            )}
          </div>
        )}
      </div>
    )
  }
)
Select.displayName = "Select"

// Checkbox Component
interface CheckboxProps extends Omit<React.ComponentProps<"input">, "type"> {
  label?: string
  description?: string
  error?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            className={cn(
              "mt-1 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500/30 focus:ring-offset-2 transition-all duration-200",
              error && "border-red-300 text-red-600 focus:ring-red-500/30",
              props.disabled && "opacity-50 cursor-not-allowed",
              className
            )}
            ref={ref}
            {...props}
          />
          <div className="flex-1">
            {label && (
              <label className="block text-sm font-medium text-gray-700 cursor-pointer">
                {label}
              </label>
            )}
            {description && (
              <p className="text-xs text-gray-500 mt-1">{description}</p>
            )}
          </div>
        </div>
        {error && (
          <span className="text-xs text-red-600">{error}</span>
        )}
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Input, Textarea, Select, Checkbox, inputVariants }