# 标题层级结构修复

## 问题描述
Lighthouse 可访问性审计检测到"Heading elements are not in a sequentially-descending order"问题，影响屏幕阅读器用户的导航体验。

## 原始问题
页面结构中存在标题层级跳跃：
- h1: "Transform Images to AI Prompts" (页面主标题)
- 直接跳到 h3: "Upload Image" (缺少 h2)
- h3: "Prompt Configuration"
- h3: "Generated Prompt"

## 修复方案
为了修复标题层级问题，我们在适当的位置添加了 h2 标题，使用 `sr-only` 类使其对屏幕阅读器可见但在视觉上隐藏：

### 修复后的层级结构：

```
页面级别：
h1: "Transform Images to AI Prompts" (页面主标题)

功能区域级别：
├─ h2: "Image Processing Tools" (sr-only - 左侧工具区域)
│  ├─ h3: "Upload Image"
│  ├─ h3: "Prompt Configuration"
│  └─ h3: "Usage Status"
├─ h2: "AI Prompt Generation" (sr-only - 右侧结果区域)
│  └─ h3: "Generated Prompt"
├─ h2: "Example Prompts" (图片画廊区域)
├─ h2: "User Testimonials" (推荐区域)
├─ h2: "How It Works" (工作流程区域)
│  └─ h3: "Quick Start Guide"
└─ h2: "Frequently Asked Questions" (FAQ区域)
   └─ h3: "Still have questions?"
```

## 修复的组件

### 1. image-to-prompt-hero.tsx
添加了两个结构性 h2 标题：
- "Image Processing Tools" (左侧工具区域)
- "AI Prompt Generation" (右侧结果区域)

### 2. hero-shell.tsx
为保持一致性，在骨架屏中也添加了相同的结构性 h2 标题。

## 技术实现

使用 `sr-only` 类（screen reader only）来添加语义化的标题，这些标题：
- 对屏幕阅读器用户可见，提供清晰的导航结构
- 在视觉上隐藏，不影响现有的 UI 设计
- 符合 WCAG 2.1 可访问性标准

```tsx
<h2 className="sr-only">Image Processing Tools</h2>
```

## 测试建议

1. **自动化测试**: 重新运行 Lighthouse 可访问性审计
2. **屏幕阅读器测试**: 使用 NVDA/JAWS/VoiceOver 测试导航
3. **键盘导航**: 确保标题跳转功能正常工作

## 预期结果

修复后应该：
- ✅ 消除 Lighthouse "Heading elements are not in a sequentially-descending order" 错误
- ✅ 提升可访问性评分
- ✅ 改善屏幕阅读器用户的导航体验
- ✅ 不影响视觉设计和用户界面

## Web内容可访问性指南(WCAG)合规性

此修复符合以下 WCAG 2.1 标准：
- **1.3.1 信息和关系** - 标题层级传达了内容结构
- **2.4.6 标题和标签** - 标题描述了主题和目的
- **4.1.3 状态消息** - 结构性信息通过标题层级传达