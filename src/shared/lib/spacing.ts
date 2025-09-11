/**
 * 统一的间距系统
 * 基于设计令牌的间距工具类和常量
 */

import { designTokens } from './design-tokens'

// 导出间距令牌以便使用
export const spacing = designTokens.spacing

// 常用的间距组合类名
export const spacingClasses = {
  // 内边距组合
  padding: {
    none: 'p-0',
    xs: 'p-2',     // 8px
    sm: 'p-3',     // 12px  
    md: 'p-4',     // 16px
    lg: 'p-6',     // 24px
    xl: 'p-8',     // 32px
    '2xl': 'p-12', // 48px
    '3xl': 'p-16', // 64px
  },
  
  // 垂直内边距
  paddingY: {
    none: 'py-0',
    xs: 'py-2',
    sm: 'py-3', 
    md: 'py-4',
    lg: 'py-6',
    xl: 'py-8',
    '2xl': 'py-12',
    '3xl': 'py-16',
  },
  
  // 水平内边距
  paddingX: {
    none: 'px-0',
    xs: 'px-2',
    sm: 'px-3',
    md: 'px-4',
    lg: 'px-6', 
    xl: 'px-8',
    '2xl': 'px-12',
    '3xl': 'px-16',
  },
  
  // 外边距组合
  margin: {
    none: 'm-0',
    xs: 'm-2',
    sm: 'm-3',
    md: 'm-4', 
    lg: 'm-6',
    xl: 'm-8',
    '2xl': 'm-12',
    '3xl': 'm-16',
  },
  
  // 垂直外边距
  marginY: {
    none: 'my-0',
    xs: 'my-2',
    sm: 'my-3',
    md: 'my-4',
    lg: 'my-6',
    xl: 'my-8',
    '2xl': 'my-12',
    '3xl': 'my-16',
  },
  
  // 水平外边距
  marginX: {
    none: 'mx-0',
    xs: 'mx-2',
    sm: 'mx-3', 
    md: 'mx-4',
    lg: 'mx-6',
    xl: 'mx-8',
    '2xl': 'mx-12',
    '3xl': 'mx-16',
  },
  
  // gap间距
  gap: {
    none: 'gap-0',
    xs: 'gap-2',
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
    '2xl': 'gap-12',
    '3xl': 'gap-16',
  },
  
  // 垂直gap间距
  gapY: {
    none: 'gap-y-0',
    xs: 'gap-y-2',
    sm: 'gap-y-3',
    md: 'gap-y-4',
    lg: 'gap-y-6',
    xl: 'gap-y-8',
    '2xl': 'gap-y-12',
    '3xl': 'gap-y-16',
  },
  
  // 水平gap间距
  gapX: {
    none: 'gap-x-0',
    xs: 'gap-x-2',
    sm: 'gap-x-3',
    md: 'gap-x-4',
    lg: 'gap-x-6',
    xl: 'gap-x-8',
    '2xl': 'gap-x-12',
    '3xl': 'gap-x-16',
  },
  
  // 空间分隔
  space: {
    none: 'space-x-0 space-y-0',
    xs: 'space-x-2 space-y-2',
    sm: 'space-x-3 space-y-3',
    md: 'space-x-4 space-y-4',
    lg: 'space-x-6 space-y-6',
    xl: 'space-x-8 space-y-8',
    '2xl': 'space-x-12 space-y-12',
    '3xl': 'space-x-16 space-y-16',
  }
} as const

// 布局间距预设
export const layoutSpacing = {
  // Section间距
  section: {
    small: spacingClasses.paddingY.xl,      // py-8  (32px)
    default: spacingClasses.paddingY['2xl'], // py-12 (48px) 
    large: spacingClasses.paddingY['3xl'],   // py-16 (64px)
  },
  
  // Container内边距
  container: {
    default: spacingClasses.paddingX.md,    // px-4 (16px)
    large: spacingClasses.paddingX.lg,      // px-6 (24px)
  },
  
  // Card内边距
  card: {
    small: spacingClasses.padding.md,       // p-4  (16px)
    default: spacingClasses.padding.lg,     // p-6  (24px)
    large: spacingClasses.padding.xl,       // p-8  (32px)
  },
  
  // 组件间距
  component: {
    tight: spacingClasses.gap.sm,           // gap-3 (12px)
    default: spacingClasses.gap.md,         // gap-4 (16px)
    loose: spacingClasses.gap.lg,           // gap-6 (24px)
  },
  
  // 文本间距
  text: {
    tight: spacingClasses.marginY.xs,       // my-2 (8px)
    default: spacingClasses.marginY.md,     // my-4 (16px)
    loose: spacingClasses.marginY.lg,       // my-6 (24px)
  }
} as const

// 响应式间距工具
export const responsiveSpacing = {
  // 响应式section间距
  section: 'py-12 md:py-16 lg:py-20',
  
  // 响应式container间距  
  container: 'px-4 md:px-6 lg:px-8',
  
  // 响应式网格间距
  grid: 'gap-4 md:gap-6 lg:gap-8',
  
  // 响应式文本间距
  text: 'mb-4 md:mb-6',
  
  // 响应式标题间距
  heading: 'mb-4 md:mb-6 lg:mb-8',
} as const

// 类型定义
export type SpacingSize = keyof typeof spacingClasses.padding
export type LayoutSpacingType = keyof typeof layoutSpacing