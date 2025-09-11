import { NextResponse } from 'next/server'
import { logger } from '@/lib/logger'

interface WebVitalsPayload {
  metric: 'CLS' | 'FCP' | 'FID' | 'LCP' | 'TTFB'
  value: number
  id: string
  rating: 'good' | 'needs-improvement' | 'poor'
  timestamp: number
  url: string
  userAgent: string
}

export async function POST(request: Request) {
  try {
    const payload: WebVitalsPayload = await request.json()
    
    // 验证数据
    if (!payload.metric || typeof payload.value !== 'number') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }

    // 记录 Web Vitals 指标
    logger.info('Web Vitals metric recorded', {
      metric: payload.metric,
      value: payload.value,
      rating: payload.rating,
      url: payload.url,
      timestamp: payload.timestamp,
      userAgent: payload.userAgent?.substring(0, 100) // 截断 UA 字符串
    })

    // 这里可以扩展：
    // - 发送到外部分析服务 (如 DataDog, New Relic)
    // - 存储到数据库进行长期分析
    // - 设置性能警报阈值
    
    // 检查是否需要性能警报
    const isPerformanceIssue = payload.rating === 'poor'
    if (isPerformanceIssue) {
      logger.warn('Poor Web Vitals performance detected', {
        metric: payload.metric,
        value: payload.value,
        url: payload.url,
        rating: payload.rating
      })
      
      // 可以在这里触发警报通知
      // await sendPerformanceAlert(payload)
    }

    return NextResponse.json({ 
      success: true,
      recorded: payload.metric,
      timestamp: Date.now()
    })

  } catch (error) {
    logger.error('Failed to record Web Vitals', {
      error: error instanceof Error ? error.message : String(error)
    })
    
    return NextResponse.json({ 
      error: 'Failed to record metric' 
    }, { status: 500 })
  }
}