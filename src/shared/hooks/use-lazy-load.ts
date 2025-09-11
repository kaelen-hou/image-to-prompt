'use client'

import { useEffect, useRef, useState } from 'react'

interface UseLazyLoadOptions {
  threshold?: number
  root?: Element | null
  rootMargin?: string
}

export function useLazyLoad<T extends Element>(
  options: UseLazyLoadOptions = {}
) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const elementRef = useRef<T>(null)

  const { threshold = 0.1, root = null, rootMargin = '50px' } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element || hasBeenVisible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setHasBeenVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold,
        root,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, root, rootMargin, hasBeenVisible])

  return { elementRef, isVisible, hasBeenVisible }
}