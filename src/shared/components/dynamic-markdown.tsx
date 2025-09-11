'use client'

import { lazy, Suspense } from 'react'
import { cn } from '@/shared/lib/utils'

// Dynamically import ReactMarkdown to reduce bundle size
const ReactMarkdown = lazy(() => import('react-markdown'))

interface DynamicMarkdownProps {
  children: string
  className?: string
}

function MarkdownFallback() {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
    </div>
  )
}

export function DynamicMarkdown({ children, className = '' }: DynamicMarkdownProps) {
  return (
    <Suspense fallback={<MarkdownFallback />}>
      <div className={cn("max-w-none", className)}>
        <div className="text-gray-800 whitespace-pre-wrap leading-relaxed">
          <ReactMarkdown>
            {children}
          </ReactMarkdown>
        </div>
      </div>
    </Suspense>
  )
}