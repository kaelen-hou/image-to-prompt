/**
 * 设计系统总汇
 * 整合所有设计令牌、组件变体和工具函数
 */

// 导入所有设计系统模块
export { designTokens } from './design-tokens'
export { spacing, spacingClasses, layoutSpacing, responsiveSpacing } from './spacing'
export { animationClasses, customAnimations, fadeIn, scaleIn, staggerContainer } from './animations'

// 导入组件
export { 
  FeatureCard, 
  ExampleCard, 
  ToolCard, 
  StatsCard 
} from '../components/ui/card-variants'

export { 
  Input, 
  Textarea, 
  Select, 
  Checkbox 
} from '../components/ui/input'

// 常用的样式组合
export const commonStyles = {
  // 页面布局
  page: {
    container: 'container mx-auto px-4 md:px-6 lg:px-8',
    section: 'py-12 md:py-16 lg:py-20',
    hero: 'py-16 md:py-20 lg:py-28',
  },
  
  // 文本样式
  text: {
    hero: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    heading: 'text-2xl md:text-3xl lg:text-4xl font-bold',
    subheading: 'text-xl md:text-2xl font-semibold',
    body: 'text-base md:text-lg',
    small: 'text-sm',
    muted: 'text-gray-600',
  },
  
  // 网格布局
  grid: {
    '2col': 'grid md:grid-cols-2 gap-6 md:gap-8',
    '3col': 'grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8',
    '4col': 'grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8',
    auto: 'grid grid-cols-1 md:grid-cols-auto-fit gap-6 md:gap-8',
  },
  
  // 按钮组合
  buttonGroups: {
    horizontal: 'flex gap-2 md:gap-3',
    vertical: 'flex flex-col gap-2 md:gap-3',
    spread: 'flex justify-between items-center gap-2 md:gap-3',
    center: 'flex justify-center items-center gap-2 md:gap-3',
  },
  
  // 卡片布局
  cardLayouts: {
    feature: 'bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200',
    stat: 'bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-sm p-6',
    interactive: 'bg-white rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 cursor-pointer transition-all duration-200',
  },
  
  // 表单布局
  form: {
    container: 'space-y-6',
    group: 'space-y-4',
    inline: 'flex gap-4 items-end',
    actions: 'flex gap-3 pt-4',
  },
  
  // 状态样式
  states: {
    success: 'text-green-600 bg-green-50 border-green-200',
    error: 'text-red-600 bg-red-50 border-red-200',
    warning: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    info: 'text-blue-600 bg-blue-50 border-blue-200',
  },
  
  // 徽章样式
  badges: {
    default: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800',
    neutral: 'bg-gray-100 text-gray-800',
  }
} as const

// 响应式断点工具
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// 实用工具函数
export const utils = {
  // 组合类名
  cn: (base: string, variants: Record<string, boolean | string>) => {
    return [
      base,
      ...Object.entries(variants)
        .filter(([, condition]) => condition)
        .map(([className, condition]) => 
          typeof condition === 'string' ? condition : className
        )
    ].join(' ')
  },
  
  // 生成渐变
  gradient: (from: string, to: string, direction = 'to-r') => 
    `bg-gradient-${direction} from-${from} to-${to}`,
  
  // 生成阴影
  shadow: (size: 'sm' | 'md' | 'lg' | 'xl', color?: string) => 
    `shadow-${size}${color ? ` shadow-${color}` : ''}`,
  
  // 生成hover状态
  hover: (...effects: string[]) => 
    effects.map(effect => `hover:${effect}`).join(' '),
}

// 主题配置
export const theme = {
  colors: {
    primary: 'purple',
    secondary: 'gray',
    success: 'green',
    warning: 'yellow',
    danger: 'red',
    info: 'blue',
  },
  
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  
  radius: {
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
  }
} as const

// 导出类型
export type CommonStyles = typeof commonStyles
export type Theme = typeof theme
export type BreakpointKey = keyof typeof breakpoints