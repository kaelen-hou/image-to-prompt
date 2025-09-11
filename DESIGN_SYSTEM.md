# 🎨 Design System Guide

本项目的设计系统为 GetPrompts 平台提供了统一、可扩展的UI组件和样式规范。

## 📁 文件结构

```
src/shared/
├── lib/
│   ├── design-tokens.ts     # 设计令牌（颜色、间距、字体等）
│   ├── spacing.ts          # 间距系统和工具
│   ├── animations.ts       # 动画效果和过渡
│   └── design-system.ts    # 设计系统总汇
└── components/ui/
    ├── button.tsx          # 标准化按钮组件
    ├── card-variants.tsx   # 统一卡片组件变体
    └── input.tsx           # 表单输入组件
```

## 🎯 核心原则

### 1. 一致性优先
- 所有UI组件遵循统一的视觉规范
- 使用设计令牌确保颜色、间距、字体的一致性
- 标准化的交互状态和动画效果

### 2. 可访问性
- 符合WCAG 2.1 AA标准
- 明确的焦点状态和键盘导航
- 足够的颜色对比度

### 3. 响应式设计
- 移动端优先的设计方法
- 流畅的跨设备体验
- 合理的断点和布局策略

## 🎨 设计令牌

### 颜色系统
```typescript
import { designTokens } from '@/shared/lib/design-tokens'

// 主色调 - 紫色渐变
colors.primary[500] // #8b5cf6
colors.primary[600] // #7c3aed (hover)

// 功能色
colors.semantic.success // #10b981
colors.semantic.error   // #ef4444
colors.semantic.warning // #f59e0b
```

### 间距系统
```typescript
import { spacingClasses } from '@/shared/lib/spacing'

// 内边距
spacingClasses.padding.sm    // p-3 (12px)
spacingClasses.padding.md    // p-4 (16px)
spacingClasses.padding.lg    // p-6 (24px)

// 响应式间距
responsiveSpacing.section    // py-12 md:py-16 lg:py-20
responsiveSpacing.container  // px-4 md:px-6 lg:px-8
```

## 🧩 核心组件

### 按钮组件
标准化的按钮具有一致的样式、状态和交互效果：

```tsx
import { Button } from '@/shared/components/ui/button'

// 基础用法
<Button>Default Button</Button>
<Button variant="outline">Outline Button</Button>
<Button size="lg">Large Button</Button>

// 所有变体自动包含：
// - 渐变背景和悬停效果
// - 焦点状态和可访问性
// - 活跃状态的微动画
// - 加载和禁用状态
```

### 卡片组件变体
提供多种预设的卡片布局：

```tsx
import { FeatureCard, ExampleCard, ToolCard } from '@/shared/components/ui/card-variants'

// 功能展示卡片
<FeatureCard
  icon={<Camera size={24} />}
  title="Image Generation"
  description="Create stunning visuals with AI"
/>

// 示例展示卡片
<ExampleCard
  image={<Mountain size={32} />}
  description="Beautiful mountain landscape prompt"
  actions={<Button size="sm">Use</Button>}
/>

// 工具卡片
<ToolCard
  icon={<Palette size={20} />}
  title="Prompt Enhancer"
  status="coming-soon"
  onClick={() => router.push('/prompt-enhancer')}
/>
```

### 表单组件
统一的表单输入具有错误处理和状态管理：

```tsx
import { Input, Textarea, Select, Checkbox } from '@/shared/components/ui/input'

<Input
  label="Email Address"
  error={errors.email}
  placeholder="Enter your email"
  required
/>

<Checkbox
  label="I agree to the terms"
  description="By checking this, you accept our terms of service"
/>
```

## 🎭 动画系统

### CSS动画类
```tsx
import { animationClasses } from '@/shared/lib/animations'

// 悬停效果
className={animationClasses.hover.lift}     // hover:-translate-y-1
className={animationClasses.hover.scale}    // hover:scale-105
className={animationClasses.hover.glow}     // hover:shadow-xl

// 交互状态
className={animationClasses.interactive.card} // 完整的卡片交互
className={animationClasses.interactive.button} // 按钮交互效果
```

### 过渡效果
```tsx
// 所有组件默认包含适当的过渡效果
transition-all duration-200  // 基础过渡
transition-colors duration-200  // 颜色过渡
transition-transform duration-200  // 变换过渡
```

## 📐 布局系统

### 常用布局
```tsx
import { commonStyles } from '@/shared/lib/design-system'

// 页面容器
<div className={commonStyles.page.container}>
  <section className={commonStyles.page.section}>
    <h1 className={commonStyles.text.hero}>Hero Title</h1>
  </section>
</div>

// 网格布局
<div className={commonStyles.grid['3col']}>
  {items.map(item => <Card key={item.id} />)}
</div>
```

### 响应式设计
```tsx
// 所有组件都采用响应式设计
text-3xl md:text-4xl lg:text-5xl  // 响应式文字大小
py-12 md:py-16 lg:py-20          // 响应式间距
gap-4 md:gap-6 lg:gap-8          // 响应式网格间距
```

## 🔧 实用工具

### 样式组合
```tsx
import { utils } from '@/shared/lib/design-system'

// 条件样式
const buttonClass = utils.cn('base-button', {
  'bg-purple-600': isPrimary,
  'bg-gray-600': !isPrimary,
  'opacity-50': isLoading
})

// 生成渐变
const gradientClass = utils.gradient('purple-600', 'pink-600', 'to-r')
```

## 📊 设计指标

### 性能目标
- **视觉一致性评分**: 95%+ 组件复用率
- **可访问性合规**: WCAG 2.1 AA标准
- **性能影响**: 设计变更不影响加载时间
- **用户参与**: 改进后的CTA交互率提升

### 优先级改进
1. **高优先级** - 按钮标准化 ✅
2. **高优先级** - 导航激活状态 ✅  
3. **高优先级** - 专业图标系统 ✅
4. **中优先级** - 卡片组件统一化 ✅
5. **中优先级** - 间距标准化 ✅
6. **低优先级** - 微动画效果 ✅

## 🚀 使用建议

### 开发流程
1. **优先使用现有组件** - 检查是否已有合适的组件变体
2. **遵循设计令牌** - 使用预定义的颜色、间距、字体
3. **保持响应式** - 确保所有新组件支持多设备
4. **测试可访问性** - 验证键盘导航和屏幕阅读器兼容性

### 最佳实践
```tsx
// ✅ 好的做法
<Button size="lg" className="w-full">
  Get Started <ArrowRight size={16} className="ml-1" />
</Button>

// ❌ 避免的做法
<button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white font-medium">
  Get Started →
</button>
```

### 扩展组件
当需要新组件时：
1. 继承现有的设计令牌
2. 遵循命名约定
3. 包含所有交互状态
4. 添加适当的TypeScript类型
5. 更新此文档

## 📈 后续改进

- [ ] 添加暗色主题支持
- [ ] 实现更多动画效果
- [ ] 创建Storybook文档
- [ ] 添加单元测试覆盖
- [ ] 性能监控和优化

---

**维护者**: Claude Code AI Assistant  
**最后更新**: 2025-09-11  
**版本**: 1.0.0