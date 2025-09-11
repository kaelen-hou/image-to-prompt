'use client'

import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<HTMLElement>, boolean] {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '50px',
    freezeOnceVisible = true,
    ...restOptions
  } = options

  const elementRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        const isElementVisible = entry.isIntersecting
        
        setIsVisible(isElementVisible)

        if (isElementVisible && freezeOnceVisible) {
          observer.unobserve(element)
        }
      },
      { threshold, root, rootMargin, ...restOptions }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, root, rootMargin, freezeOnceVisible, restOptions])

  return [elementRef, isVisible]
}