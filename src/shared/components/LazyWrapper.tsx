'use client'

import { ReactNode } from 'react'
import { useLazyLoad } from '@/shared/hooks/use-lazy-load'

interface LazyWrapperProps {
  children: ReactNode
  fallback?: ReactNode
  threshold?: number
  rootMargin?: string
  className?: string
}

export function LazyWrapper({
  children,
  fallback = <div className="h-64 animate-pulse bg-gray-200 rounded" />,
  threshold = 0.1,
  rootMargin = '50px',
  className = ''
}: LazyWrapperProps) {
  const { elementRef, isVisible } = useLazyLoad<HTMLDivElement>({
    threshold,
    rootMargin
  })

  return (
    <div ref={elementRef} className={className}>
      {isVisible ? children : fallback}
    </div>
  )
}