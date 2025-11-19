# Design System | 设计系统文档

**Version**: 1.0.0
**Last Updated**: 2025-11-19
**Project**: Open Wisdom Lab Website
**Related**: OPENSPEC.md

---

## 📋 Table of Contents

1. [Design Principles](#1-design-principles)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Components](#5-components)
6. [Animations & Motion](#6-animations--motion)
7. [Icons & Imagery](#7-icons--imagery)
8. [Accessibility](#8-accessibility)
9. [Responsive Design](#9-responsive-design)
10. [Brand Guidelines](#10-brand-guidelines)

---

## 1. Design Principles | 设计原则

### 核心价值观

**🎨 创新而不失专业**
- 使用现代设计语言,但保持教育机构的专业性
- 大胆的视觉元素配合稳重的排版

**🌈 包容与多样性**
- 设计适合所有年龄段和背景的用户
- 无障碍性作为设计的核心考虑

**🔬 科学与艺术的融合**
- 融合科技感与创造力
- 数据可视化与美学并重

**⚡ 性能优先**
- 视觉效果不以牺牲性能为代价
- 优雅降级,渐进增强

### 设计语言

**Modern Futuristic Education**
- 🚀 未来感: 科技、太空、探索主题
- 🦉 智慧感: 猫头鹰元素、知识、洞察
- 🌟 活力感: 年轻、动态、有趣
- 🎯 目的感: 清晰、直接、行动导向

---

## 2. Color System | 颜色系统

### 主色调 (Primary Colors)

**Blue - 主品牌色**
```css
--color-primary-50:  #eff6ff;
--color-primary-100: #dbeafe;
--color-primary-200: #bfdbfe;
--color-primary-300: #93c5fd;
--color-primary-400: #60a5fa;
--color-primary-500: #3b82f6;  /* Main */
--color-primary-600: #2563eb;
--color-primary-700: #1d4ed8;
--color-primary-800: #1e40af;
--color-primary-900: #1e3a8a;
--color-primary-950: #172554;
```

**Usage:**
- 主要 CTA 按钮
- 链接颜色
- 重要信息高亮
- 导航栏激活状态

**Tailwind Classes:**
```css
bg-primary-500
text-primary-600
border-primary-400
hover:bg-primary-600
```

### 次要色 (Secondary Colors)

**Pink/Purple - 创新与创造力**
```css
--color-secondary-50:  #fdf4ff;
--color-secondary-100: #fae8ff;
--color-secondary-200: #f5d0fe;
--color-secondary-300: #f0abfc;
--color-secondary-400: #e879f9;
--color-secondary-500: #d946ef;  /* Main */
--color-secondary-600: #c026d3;
--color-secondary-700: #a21caf;
--color-secondary-800: #86198f;
--color-secondary-900: #701a75;
```

**Usage:**
- 次要 CTA
- 装饰性元素
- 渐变背景
- 特殊强调

### 中性色 (Neutral Colors)

**Gray - 文本和背景**
```css
/* Light Mode */
--color-gray-50:  #f9fafb;
--color-gray-100: #f3f4f6;
--color-gray-200: #e5e7eb;
--color-gray-300: #d1d5db;
--color-gray-400: #9ca3af;
--color-gray-500: #6b7280;
--color-gray-600: #4b5563;
--color-gray-700: #374151;
--color-gray-800: #1f2937;
--color-gray-900: #111827;

/* Dark Mode */
--color-slate-50:  #f8fafc;
--color-slate-800: #1e293b;
--color-slate-900: #0f172a;
--color-slate-950: #020617;
```

**Usage:**
- 正文文本: `gray-700` (light) / `gray-100` (dark)
- 次要文本: `gray-500`
- 边框: `gray-200` / `gray-700`
- 背景: `white` / `gray-50` / `slate-900`

### 语义色 (Semantic Colors)

**Success - 成功/完成**
```css
--color-success-500: #10b981;  /* Green */
--color-success-600: #059669;
```

**Warning - 警告/注意**
```css
--color-warning-500: #f59e0b;  /* Amber */
--color-warning-600: #d97706;
```

**Error - 错误/危险**
```css
--color-error-500: #ef4444;  /* Red */
--color-error-600: #dc2626;
```

**Info - 信息**
```css
--color-info-500: #06b6d4;  /* Cyan */
--color-info-600: #0891b2;
```

### 渐变 (Gradients)

**Hero Gradient**
```css
.gradient-hero {
  background: linear-gradient(
    135deg,
    theme('colors.primary.600') 0%,
    theme('colors.secondary.500') 100%
  );
}
```

**Card Hover Gradient**
```css
.gradient-card-hover {
  background: linear-gradient(
    to bottom right,
    theme('colors.primary.50'),
    theme('colors.secondary.50')
  );
}
```

**Text Gradient**
```css
.text-gradient {
  @apply bg-gradient-to-r from-primary-600 to-secondary-500;
  @apply bg-clip-text text-transparent;
}
```

### 颜色使用准则

**Accessibility Requirements:**
- 文本对比度: 最小 4.5:1 (WCAG AA)
- 大文本对比度: 最小 3:1
- 交互元素: 最小 3:1

**Color Testing:**
```bash
# Use online tools
- WebAIM Contrast Checker
- Colorable
- Who Can Use
```

---

## 3. Typography | 字体系统

### 字体家族 (Font Families)

**Display Font - 展示标题**
```css
font-family: 'Orbitron', sans-serif;
```
- 使用场景: 主标题、Logo、科技感标题
- 字重: 400 (Regular), 700 (Bold), 900 (Black)
- 特点: 未来感、科技风

**Heading Font - 标题**
```css
font-family: 'Space Grotesk', sans-serif;
```
- 使用场景: 页面标题、章节标题
- 字重: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold)
- 特点: 现代、几何、清晰

**Body Font - 正文**
```css
font-family: 'Inter Variable', sans-serif;
```
- 使用场景: 正文、UI 文本
- 字重: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
- 特点: 高可读性、多用途

**Accent Font - 强调**
```css
font-family: 'Rajdhani', sans-serif;
```
- 使用场景: 数字、统计、标签
- 字重: 400 (Regular), 600 (Semi-bold), 700 (Bold)
- 特点: 紧凑、现代

**Technical Font - 技术**
```css
font-family: 'Exo 2', sans-serif;
```
- 使用场景: 技术内容、代码示例
- 字重: 400 (Regular), 700 (Bold)
- 特点: 科技感、几何

### 字体尺寸 (Type Scale)

**Desktop Scale (base: 16px)**
```css
--text-xs:   0.75rem;  /* 12px */
--text-sm:   0.875rem; /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg:   1.125rem; /* 18px */
--text-xl:   1.25rem;  /* 20px */
--text-2xl:  1.5rem;   /* 24px */
--text-3xl:  1.875rem; /* 30px */
--text-4xl:  2.25rem;  /* 36px */
--text-5xl:  3rem;     /* 48px */
--text-6xl:  3.75rem;  /* 60px */
--text-7xl:  4.5rem;   /* 72px */
--text-8xl:  6rem;     /* 96px */
--text-9xl:  8rem;     /* 128px */
```

**Mobile Scale (adjust for smaller screens)**
```css
/* Apply at < 768px */
--text-5xl: 2.5rem;   /* 40px */
--text-6xl: 3rem;     /* 48px */
--text-7xl: 3.5rem;   /* 56px */
--text-8xl: 4rem;     /* 64px */
```

### 字重 (Font Weights)

```css
--font-thin:       100;
--font-extralight: 200;
--font-light:      300;
--font-normal:     400;
--font-medium:     500;
--font-semibold:   600;
--font-bold:       700;
--font-extrabold:  800;
--font-black:      900;
```

### 行高 (Line Heights)

```css
--leading-none:    1;
--leading-tight:   1.25;
--leading-snug:    1.375;
--leading-normal:  1.5;
--leading-relaxed: 1.625;
--leading-loose:   2;
```

**Usage Guidelines:**
- 标题: `leading-tight` (1.25)
- 正文: `leading-relaxed` (1.625)
- UI 文本: `leading-normal` (1.5)

### 字间距 (Letter Spacing)

```css
--tracking-tighter: -0.05em;
--tracking-tight:   -0.025em;
--tracking-normal:  0;
--tracking-wide:    0.025em;
--tracking-wider:   0.05em;
--tracking-widest:  0.1em;
```

**Usage:**
- Display font (Orbitron): `tracking-wide`
- Headings: `tracking-tight`
- Body: `tracking-normal`

### 排版样式示例

**H1 - 页面主标题**
```css
.heading-1 {
  @apply font-display text-5xl md:text-6xl lg:text-7xl;
  @apply font-bold tracking-wide;
  @apply leading-tight;
  @apply text-gray-900 dark:text-white;
}
```

**H2 - 章节标题**
```css
.heading-2 {
  @apply font-heading text-3xl md:text-4xl lg:text-5xl;
  @apply font-bold tracking-tight;
  @apply leading-tight;
  @apply text-gray-800 dark:text-gray-100;
}
```

**Body Text - 正文**
```css
.body-text {
  @apply font-sans text-base md:text-lg;
  @apply font-normal;
  @apply leading-relaxed;
  @apply text-gray-700 dark:text-gray-300;
}
```

**Caption - 说明文字**
```css
.caption {
  @apply font-sans text-sm;
  @apply font-medium;
  @apply leading-normal;
  @apply text-gray-500 dark:text-gray-400;
}
```

---

## 4. Spacing & Layout | 间距与布局

### 间距系统 (Spacing Scale)

基于 4px 基准单位:

```css
--space-0:  0;
--space-1:  0.25rem;  /* 4px */
--space-2:  0.5rem;   /* 8px */
--space-3:  0.75rem;  /* 12px */
--space-4:  1rem;     /* 16px */
--space-5:  1.25rem;  /* 20px */
--space-6:  1.5rem;   /* 24px */
--space-8:  2rem;     /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
--space-40: 10rem;    /* 160px */
```

### 容器宽度 (Container Widths)

```css
--container-sm:  640px;   /* Small screens */
--container-md:  768px;   /* Tablets */
--container-lg:  1024px;  /* Desktops */
--container-xl:  1280px;  /* Large desktops */
--container-2xl: 1536px;  /* Extra large */
```

**Content Max Width:**
```css
.prose {
  max-width: 65ch;  /* ~650px, optimal reading width */
}
```

### 网格系统 (Grid System)

**12-Column Grid**
```css
.grid-container {
  @apply grid grid-cols-12 gap-6;
}

/* Examples */
.full-width     { @apply col-span-12; }
.half-width     { @apply col-span-6; }
.one-third      { @apply col-span-4; }
.two-thirds     { @apply col-span-8; }
```

**Responsive Grid**
```css
.responsive-grid {
  @apply grid;
  @apply grid-cols-1;        /* Mobile */
  @apply md:grid-cols-2;     /* Tablet */
  @apply lg:grid-cols-3;     /* Desktop */
  @apply gap-4 md:gap-6 lg:gap-8;
}
```

### 布局模式

**Hero Layout**
```css
.hero-layout {
  @apply min-h-screen;
  @apply flex flex-col justify-center;
  @apply px-6 md:px-12 lg:px-20;
  @apply py-20 md:py-32;
}
```

**Two-Column Layout**
```css
.two-column {
  @apply grid grid-cols-1 lg:grid-cols-2;
  @apply gap-8 lg:gap-16;
  @apply items-center;
}
```

**Card Grid**
```css
.card-grid {
  @apply grid;
  @apply grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
  @apply gap-6 lg:gap-8;
}
```

### Section Spacing

**Vertical Rhythm**
```css
.section {
  @apply py-16 md:py-24 lg:py-32;
}

.section-sm {
  @apply py-12 md:py-16 lg:py-20;
}

.section-lg {
  @apply py-24 md:py-32 lg:py-40;
}
```

---

## 5. Components | 组件库

### Buttons | 按钮

**Primary Button**
```css
.btn-primary {
  @apply inline-flex items-center justify-center;
  @apply px-6 py-3;
  @apply bg-primary-600 hover:bg-primary-700;
  @apply text-white font-semibold;
  @apply rounded-lg;
  @apply transition-colors duration-200;
  @apply focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
}
```

**Secondary Button**
```css
.btn-secondary {
  @apply inline-flex items-center justify-center;
  @apply px-6 py-3;
  @apply bg-white dark:bg-slate-800;
  @apply text-primary-600 dark:text-primary-400;
  @apply border-2 border-primary-600;
  @apply font-semibold rounded-lg;
  @apply transition-all duration-200;
  @apply hover:bg-primary-50 dark:hover:bg-slate-700;
}
```

**Ghost Button**
```css
.btn-ghost {
  @apply inline-flex items-center justify-center;
  @apply px-4 py-2;
  @apply text-gray-700 dark:text-gray-300;
  @apply font-medium;
  @apply transition-colors duration-200;
  @apply hover:text-primary-600 hover:bg-primary-50;
}
```

**Button Sizes**
```css
.btn-sm  { @apply px-4 py-2 text-sm; }
.btn-md  { @apply px-6 py-3 text-base; }  /* Default */
.btn-lg  { @apply px-8 py-4 text-lg; }
```

### Cards | 卡片

**Base Card**
```css
.card {
  @apply bg-white dark:bg-slate-800;
  @apply rounded-xl;
  @apply border border-gray-200 dark:border-slate-700;
  @apply shadow-sm hover:shadow-md;
  @apply transition-shadow duration-300;
}
```

**Blog Card**
```css
.blog-card {
  @apply card;
  @apply overflow-hidden;
  @apply group;
}

.blog-card-image {
  @apply aspect-video overflow-hidden;
  @apply transition-transform duration-300;
  @apply group-hover:scale-105;
}

.blog-card-content {
  @apply p-6;
}
```

**Feature Card**
```css
.feature-card {
  @apply card;
  @apply p-8;
  @apply text-center;
  @apply hover:border-primary-500;
  @apply hover:shadow-lg;
}
```

### Forms | 表单

**Input Field**
```css
.input {
  @apply w-full;
  @apply px-4 py-3;
  @apply bg-white dark:bg-slate-800;
  @apply border border-gray-300 dark:border-slate-600;
  @apply rounded-lg;
  @apply text-gray-900 dark:text-white;
  @apply placeholder-gray-400;
  @apply transition-colors duration-200;
  @apply focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent;
}
```

**Label**
```css
.label {
  @apply block;
  @apply text-sm font-medium;
  @apply text-gray-700 dark:text-gray-300;
  @apply mb-2;
}
```

**Select**
```css
.select {
  @apply input;
  @apply appearance-none;
  @apply bg-no-repeat bg-right;
  /* Add custom dropdown icon */
}
```

**Checkbox / Radio**
```css
.checkbox {
  @apply w-5 h-5;
  @apply text-primary-600;
  @apply border-gray-300 dark:border-slate-600;
  @apply rounded;
  @apply focus:ring-2 focus:ring-primary-500;
}
```

### Navigation | 导航

**Navbar**
```css
.navbar {
  @apply fixed top-0 left-0 right-0 z-50;
  @apply bg-white/90 dark:bg-slate-900/90;
  @apply backdrop-blur-md;
  @apply border-b border-gray-200 dark:border-slate-800;
}
```

**Nav Link**
```css
.nav-link {
  @apply px-4 py-2;
  @apply text-gray-700 dark:text-gray-300;
  @apply font-medium;
  @apply transition-colors duration-200;
  @apply hover:text-primary-600 dark:hover:text-primary-400;
}

.nav-link-active {
  @apply text-primary-600 dark:text-primary-400;
  @apply border-b-2 border-primary-600;
}
```

### Badges & Tags | 徽章和标签

**Badge**
```css
.badge {
  @apply inline-flex items-center;
  @apply px-3 py-1;
  @apply text-xs font-semibold;
  @apply rounded-full;
}

.badge-primary {
  @apply badge;
  @apply bg-primary-100 text-primary-700;
  @apply dark:bg-primary-900 dark:text-primary-300;
}

.badge-success {
  @apply badge;
  @apply bg-green-100 text-green-700;
}
```

**Tag**
```css
.tag {
  @apply inline-block;
  @apply px-3 py-1;
  @apply text-sm;
  @apply bg-gray-100 dark:bg-slate-700;
  @apply text-gray-700 dark:text-gray-300;
  @apply rounded-md;
  @apply transition-colors duration-200;
  @apply hover:bg-primary-100 hover:text-primary-700;
}
```

---

## 6. Animations & Motion | 动画与动效

### 过渡时长 (Transition Durations)

```css
--duration-75:   75ms;
--duration-100:  100ms;
--duration-150:  150ms;
--duration-200:  200ms;
--duration-300:  300ms;
--duration-500:  500ms;
--duration-700:  700ms;
--duration-1000: 1000ms;
```

### 缓动函数 (Easing Functions)

```css
--ease-linear:     cubic-bezier(0, 0, 1, 1);
--ease-in:         cubic-bezier(0.4, 0, 1, 1);
--ease-out:        cubic-bezier(0, 0, 0.2, 1);
--ease-in-out:     cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce:     cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### 常用动画

**Fade In**
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}
```

**Slide Up**
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out;
}
```

**Scale In**
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### AOS (Animate On Scroll) 配置

```javascript
// 在 AOSInit.astro 中配置
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 100,
});
```

**常用 AOS 效果:**
```html
<div data-aos="fade-up">Fade up</div>
<div data-aos="fade-down">Fade down</div>
<div data-aos="zoom-in">Zoom in</div>
<div data-aos="flip-left">Flip left</div>
```

### Hover Effects

**Card Lift**
```css
.hover-lift {
  @apply transition-all duration-300;
  @apply hover:-translate-y-1 hover:shadow-xl;
}
```

**Glow Effect**
```css
.hover-glow {
  @apply transition-shadow duration-300;
  @apply hover:shadow-[0_0_20px_rgba(59,130,246,0.5)];
}
```

**Background Transition**
```css
.bg-transition {
  @apply relative overflow-hidden;
}

.bg-transition::before {
  @apply absolute inset-0;
  @apply bg-gradient-to-r from-primary-600 to-secondary-500;
  @apply opacity-0;
  @apply transition-opacity duration-300;
  content: '';
}

.bg-transition:hover::before {
  @apply opacity-100;
}
```

---

## 7. Icons & Imagery | 图标与图像

### 图标系统

**Icon Libraries:**
- Tabler Icons (主要)
- Flat Color Icons (装饰性)

**Icon Sizes:**
```css
--icon-xs:  16px;
--icon-sm:  20px;
--icon-md:  24px;  /* Default */
--icon-lg:  32px;
--icon-xl:  48px;
--icon-2xl: 64px;
```

**Usage:**
```astro
---
import { Icon } from 'astro-icon/components';
---

<!-- Standard icon -->
<Icon name="tabler:rocket" class="w-6 h-6 text-primary-600" />

<!-- Colored icon -->
<Icon name="flat-color-icons:idea" class="w-12 h-12" />
```

### 图片准则

**Image Formats:**
- 照片: WebP (with JPEG fallback)
- 图标/插图: SVG
- 动画: MP4 (video) or optimized GIF

**Image Sizes:**
```yaml
Hero Image:       1920x1080px (16:9)
Featured Image:   1200x630px  (OG image)
Blog Thumbnail:   800x450px   (16:9)
Card Image:       600x400px   (3:2)
Avatar:           200x200px   (1:1)
Logo:             Vector SVG
```

**Optimization:**
- 压缩: 80% quality for photos
- 懒加载: All images below fold
- Responsive: Provide srcset

**Example:**
```astro
<Image
  src={heroImage}
  alt="Description"
  width={1920}
  height={1080}
  format="webp"
  quality={80}
  loading="lazy"
  class="w-full h-auto"
/>
```

### 插图风格

**Illustration Guidelines:**
- 风格: 扁平化、几何、现代
- 颜色: 使用品牌色系
- 主题: 科技、教育、探索、创新
- 来源: Undraw, Humaaans, 或定制

---

## 8. Accessibility | 无障碍性

### WCAG 2.1 AA 标准

**Color Contrast:**
- 正文文本: 最小 4.5:1
- 大文本 (18pt+): 最小 3:1
- UI 组件: 最小 3:1

**Focus Indicators:**
```css
.focus-visible {
  @apply focus:outline-none;
  @apply focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
}
```

**Skip Links:**
```html
<a href="#main-content" class="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

### Screen Reader Support

**ARIA Labels:**
```html
<!-- Icon buttons -->
<button aria-label="Close menu">
  <Icon name="tabler:x" />
</button>

<!-- Decorative images -->
<img src="..." alt="" role="presentation" />

<!-- Live regions -->
<div role="status" aria-live="polite">
  Form submitted successfully
</div>
```

### Keyboard Navigation

**Tab Order:**
- Logical flow
- No keyboard traps
- Visible focus indicators

**Keyboard Shortcuts:**
- Escape: Close modals/dropdowns
- Enter/Space: Activate buttons
- Arrow keys: Navigate menus

---

## 9. Responsive Design | 响应式设计

### 断点 (Breakpoints)

```css
sm:  640px   /* Small devices (phones) */
md:  768px   /* Medium devices (tablets) */
lg:  1024px  /* Large devices (desktops) */
xl:  1280px  /* Extra large (large desktops) */
2xl: 1536px  /* 2X large (very large screens) */
```

### 移动优先策略

**Base styles = Mobile**
```css
/* Mobile first */
.element {
  @apply text-sm;        /* Mobile */
  @apply md:text-base;   /* Tablet+ */
  @apply lg:text-lg;     /* Desktop+ */
}
```

### 响应式模式

**Stacking → Side-by-side**
```css
.responsive-layout {
  @apply flex flex-col;    /* Mobile: stack */
  @apply lg:flex-row;      /* Desktop: side-by-side */
}
```

**Hidden on Mobile**
```css
.desktop-only {
  @apply hidden lg:block;
}

.mobile-only {
  @apply block lg:hidden;
}
```

---

## 10. Brand Guidelines | 品牌指南

### Logo 使用

**Logo Variations:**
- 主 Logo: 全彩,带文字
- 次要 Logo: 单色
- Icon: 猫头鹰图标单独

**最小尺寸:**
- Digital: 120px width
- Print: 30mm width

**安全空间:**
- 周围至少 Logo 高度的 25%

### 品牌语调 (Brand Voice)

**中文:**
- 专业但不死板
- 热情而不夸张
- 创新又有温度

**English:**
- Professional yet approachable
- Enthusiastic but authentic
- Innovative with warmth

### 品牌元素

**猫头鹰 (Owl):**
- 象征: 智慧、洞察、夜间活动(探索未知)
- 使用: Logo, 装饰元素, 吉祥物

**太空/科技元素:**
- 火箭、星球、电路
- 体现创新和探索精神

**几何图形:**
- 圆形: 包容、完整
- 三角形: 方向、进步
- 多边形: 复杂性、多样性

---

## 附录 A: Quick Reference

### 常用 Tailwind 组合

**Section Container**
```css
class="container mx-auto px-4 md:px-6 lg:px-8"
```

**Centered Content**
```css
class="flex items-center justify-center min-h-screen"
```

**Card**
```css
class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6"
```

**Button**
```css
class="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
```

---

## 附录 B: Design Tokens

```javascript
// tailwind.config.cjs
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { /* blue scale */ },
        secondary: { /* pink scale */ },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter Variable', 'sans-serif'],
      },
      spacing: {
        /* 4px base scale */
      },
    },
  },
};
```

---

## 附录 C: Component Checklist

创建新组件时的检查清单:

- [ ] 响应式设计 (mobile-first)
- [ ] 深色模式支持
- [ ] ARIA 标签
- [ ] 键盘导航
- [ ] Focus indicators
- [ ] Props TypeScript 定义
- [ ] JSDoc 文档
- [ ] 示例用法

---

**Last Updated**: 2025-11-19
**Next Review**: 2026-01-19
**Maintained by**: Design Team

---

**Together we create beautiful, accessible, and performant experiences! 🎨**
