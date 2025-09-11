'use client'

import { useEffect } from 'react'

interface WebVitalsMetric {
  name: 'CLS' | 'FCP' | 'INP' | 'LCP' | 'TTFB'
  value: number
  id: string
  delta: number
  rating: 'good' | 'needs-improvement' | 'poor'
}

// 发送指标到分析服务
function sendToAnalytics(metric: WebVitalsMetric) {
  // 可以发送到 Google Analytics, Firebase Analytics, 或自定义端点
  if (typeof window !== 'undefined') {
    // Google Analytics 4
    if ('gtag' in window) {
      // @ts-expect-error - gtag is loaded externally
      window.gtag('event', metric.name, {
        value: Math.round(metric.value),
        metric_id: metric.id,
        metric_rating: metric.rating,
        metric_delta: metric.delta,
        custom_parameter_1: 'web_vitals'
      })
    }

    // 发送到自定义端点 (可选)
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/web-vitals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          metric: metric.name,
          value: metric.value,
          id: metric.id,
          rating: metric.rating,
          timestamp: Date.now(),
          url: window.location.pathname,
          userAgent: navigator.userAgent
        })
      }).catch(console.error)
    }
  }

  // 开发环境日志
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: `${Math.round(metric.value)}${metric.name === 'CLS' ? '' : 'ms'}`,
      rating: metric.rating,
      id: metric.id
    })
  }
}

export function WebVitals() {
  useEffect(() => {
    // 动态导入 web-vitals 库
    import('web-vitals').then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
      onCLS(sendToAnalytics)
      onFCP(sendToAnalytics)
      onINP(sendToAnalytics)
      onLCP(sendToAnalytics)
      onTTFB(sendToAnalytics)
    }).catch(error => {
      console.error('Failed to load web-vitals:', error)
    })
  }, [])

  // 不渲染任何 UI
  return null
}

// 导出指标阈值常量
export const WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },      // Largest Contentful Paint
  INP: { good: 200, poor: 500 },        // Interaction to Next Paint
  CLS: { good: 0.1, poor: 0.25 },       // Cumulative Layout Shift
  FCP: { good: 1800, poor: 3000 },      // First Contentful Paint
  TTFB: { good: 800, poor: 1800 }       // Time to First Byte
} as const