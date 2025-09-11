'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { Button } from '@/shared/components/ui/button'
import { useState, useEffect } from 'react'
import { cn } from '@/shared/lib/utils'

interface PerformanceData {
  metric: 'CLS' | 'FCP' | 'INP' | 'LCP' | 'TTFB'
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  timestamp: number
  url: string
}

const METRIC_DESCRIPTIONS = {
  LCP: 'Largest Contentful Paint - 页面加载性能',
  INP: 'Interaction to Next Paint - 交互性能',
  CLS: 'Cumulative Layout Shift - 视觉稳定性',
  FCP: 'First Contentful Paint - 首次内容绘制',
  TTFB: 'Time to First Byte - 服务器响应时间'
}

const METRIC_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  INP: { good: 200, poor: 500 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 }
}

export default function PerformanceDashboard() {
  const [currentMetrics, setCurrentMetrics] = useState<Record<string, PerformanceData>>({})

  // 获取当前页面的实时性能数据
  useEffect(() => {
    if (typeof window === 'undefined') return

    // 检查是否为开发环境
    if (process.env.NODE_ENV !== 'development') {
      alert('性能监控仪表板仅在开发环境中可用')
      return
    }

    import('web-vitals').then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
      const handleMetric = (metric: {
        name: 'CLS' | 'FCP' | 'INP' | 'LCP' | 'TTFB'
        value: number
        rating: 'good' | 'needs-improvement' | 'poor'
      }) => {
        const data: PerformanceData = {
          metric: metric.name,
          value: metric.value,
          rating: metric.rating,
          timestamp: Date.now(),
          url: window.location.pathname
        }
        
        setCurrentMetrics(prev => ({
          ...prev,
          [metric.name]: data
        }))
      }

      onCLS(handleMetric)
      onFCP(handleMetric)  
      onINP(handleMetric)
      onLCP(handleMetric)
      onTTFB(handleMetric)
    })
  }, [])

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'good': return 'text-green-600 bg-green-50'
      case 'needs-improvement': return 'text-yellow-600 bg-yellow-50'  
      case 'poor': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const formatValue = (metric: string, value: number) => {
    if (metric === 'CLS') {
      return value.toFixed(3)
    }
    return Math.round(value) + 'ms'
  }

  const runBundleAnalysis = () => {
    alert('运行 `npm run analyze` 命令来生成Bundle分析报告')
  }

  const clearMetrics = () => {
    setCurrentMetrics({})
  }

  if (process.env.NODE_ENV !== 'development') {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            性能监控仪表板
          </h1>
          <p className="text-gray-600">
            此页面仅在开发环境中可用
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">
          性能监控仪表板
        </h1>
        <div className="space-x-2">
          <Button variant="outline" onClick={runBundleAnalysis}>
            运行Bundle分析
          </Button>
          <Button variant="outline" onClick={clearMetrics}>
            清除数据
          </Button>
        </div>
      </div>

      {/* Core Web Vitals 实时监控 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(METRIC_DESCRIPTIONS).map(([metric, description]) => {
          const data = currentMetrics[metric]
          const threshold = METRIC_THRESHOLDS[metric as keyof typeof METRIC_THRESHOLDS]
          
          return (
            <Card key={metric}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {metric}
                </CardTitle>
                <p className="text-xs text-gray-500">{description}</p>
              </CardHeader>
              <CardContent>
                {data ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">
                        {formatValue(metric, data.value)}
                      </span>
                      <span className={cn("px-2 py-1 rounded-full text-xs font-medium", getRatingColor(data.rating))}>
                        {data.rating}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      优秀: &lt; {formatValue(metric, threshold.good)} | 
                      差: &gt; {formatValue(metric, threshold.poor)}
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-400">
                    等待数据...
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* 使用说明 */}
      <Card>
        <CardHeader>
          <CardTitle>使用说明</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Bundle 分析</h3>
            <p className="text-sm text-gray-600 mb-2">
              运行以下命令来分析包大小：
            </p>
            <pre className="bg-gray-100 p-2 rounded text-sm">
              npm run analyze          # 分析客户端和服务器端包<br/>
              npm run analyze:browser  # 仅分析客户端包<br/>
              npm run analyze:server   # 仅分析服务器端包
            </pre>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Web Vitals 监控</h3>
            <p className="text-sm text-gray-600">
              Core Web Vitals 会自动在所有页面上收集数据。在生产环境中，数据会发送到 /api/analytics/web-vitals 端点进行存储和分析。
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">性能优化建议</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• LCP &gt; 4s: 检查图片优化、服务器响应时间</li>
              <li>• INP &gt; 500ms: 减少JavaScript执行时间、使用代码分割</li>
              <li>• CLS &gt; 0.25: 为图片设置尺寸属性、避免动态内容插入</li>
              <li>• FCP &gt; 3s: 优化关键渲染路径、减少阻塞资源</li>
              <li>• TTFB &gt; 1.8s: 优化服务器配置、使用CDN</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}