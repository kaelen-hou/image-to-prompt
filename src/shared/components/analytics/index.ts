export { WebVitals, WEB_VITALS_THRESHOLDS } from './web-vitals'

// 性能监控工具函数
export const performanceUtils = {
  // 获取当前页面性能信息
  getCurrentPerformance: () => {
    if (typeof window === 'undefined') return null
    
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    const paint = performance.getEntriesByType('paint')
    
    return {
      // 导航时间
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      
      // 绘制时间
      firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
      firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
      
      // 资源时间
      dnsLookup: navigation.domainLookupEnd - navigation.domainLookupStart,
      tcpConnect: navigation.connectEnd - navigation.connectStart,
      serverResponse: navigation.responseEnd - navigation.requestStart,
      
      // 页面大小
      transferSize: navigation.transferSize,
      encodedBodySize: navigation.encodedBodySize,
      decodedBodySize: navigation.decodedBodySize
    }
  },
  
  // 监控资源加载性能
  observeResourceTiming: (callback: (resources: PerformanceResourceTiming[]) => void) => {
    if (typeof window === 'undefined') return
    
    const observer = new PerformanceObserver((list) => {
      const resources = list.getEntries() as PerformanceResourceTiming[]
      callback(resources)
    })
    
    observer.observe({ entryTypes: ['resource'] })
    return observer
  },
  
  // 计算页面性能评分
  calculatePerformanceScore: (metrics: {
    lcp?: number
    fid?: number  
    cls?: number
    fcp?: number
    ttfb?: number
  }) => {
    let score = 0
    let count = 0
    
    // LCP 评分 (权重: 25%)
    if (metrics.lcp) {
      score += metrics.lcp <= 2500 ? 25 : metrics.lcp <= 4000 ? 15 : 5
      count++
    }
    
    // FID 评分 (权重: 25%) 
    if (metrics.fid) {
      score += metrics.fid <= 100 ? 25 : metrics.fid <= 300 ? 15 : 5
      count++
    }
    
    // CLS 评分 (权重: 25%)
    if (metrics.cls) {
      score += metrics.cls <= 0.1 ? 25 : metrics.cls <= 0.25 ? 15 : 5
      count++
    }
    
    // FCP 评分 (权重: 25%)
    if (metrics.fcp) {
      score += metrics.fcp <= 1800 ? 25 : metrics.fcp <= 3000 ? 15 : 5
      count++
    }
    
    return count > 0 ? Math.round(score / count * 4) : 0 // 转换为100分制
  }
}