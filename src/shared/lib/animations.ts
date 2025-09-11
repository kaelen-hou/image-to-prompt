/**
 * 动画工具库
 * 提供一致的动画效果和转换
 */

// 淡入动画
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

// 淡入动画 - 从左侧
export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

// 淡入动画 - 从右侧
export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

// 缩放动画
export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: 'easeOut' }
}

// 渐现动画
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
}

// 项目动画
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

// CSS动画类名
export const animationClasses = {
  // 悬停效果
  hover: {
    scale: 'hover:scale-105 transition-transform duration-200',
    lift: 'hover:-translate-y-1 hover:shadow-lg transition-all duration-200',
    glow: 'hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300',
    border: 'hover:border-purple-400 transition-colors duration-200',
    background: 'hover:bg-gray-50 transition-colors duration-200',
  },
  
  // 加载动画
  loading: {
    spin: 'animate-spin',
    pulse: 'animate-pulse',
    bounce: 'animate-bounce',
    ping: 'animate-ping',
  },
  
  // 过渡效果
  transition: {
    all: 'transition-all duration-200',
    colors: 'transition-colors duration-200',
    opacity: 'transition-opacity duration-200',
    transform: 'transition-transform duration-200',
    shadow: 'transition-shadow duration-200',
  },
  
  // 交互状态
  interactive: {
    default: 'transition-all duration-200 hover:shadow-lg active:scale-95',
    button: 'transition-all duration-200 hover:shadow-md active:scale-98',
    card: 'transition-all duration-200 hover:shadow-lg hover:-translate-y-1',
    link: 'transition-colors duration-200 hover:text-purple-600',
  }
} as const

// CSS keyframes for custom animations
export const customAnimations = `
@keyframes slideInUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideInDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeInScale {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes shimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-slide-in-up {
  animation: slideInUp 0.6s ease-out;
}

.animate-slide-in-down {
  animation: slideInDown 0.6s ease-out;
}

.animate-fade-in-scale {
  animation: fadeInScale 0.4s ease-out;
}

.animate-shimmer {
  animation: shimmer 2s infinite linear;
  background: linear-gradient(to right, #eff6ff 4%, #dbeafe 25%, #eff6ff 36%);
  background-size: 1000px 100%;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
`

// Utility functions
export const getStaggerDelay = (index: number, baseDelay = 0.1) => {
  return index * baseDelay
}

export const combineAnimations = (...animations: string[]) => {
  return animations.join(' ')
}