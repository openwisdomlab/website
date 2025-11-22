# Open Wisdom Lab 网站开发规范

## 项目概述

猫头鹰实验室（Open Wisdom Lab）官网，基于 **Next.js 15 + App Router** 构建的现代化网站，支持中英文双语。

### 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI 组件**: Shadcn UI + 自定义组件
- **动画**: Framer Motion
- **平滑滚动**: Lenis
- **国际化**: next-intl
- **主题**: next-themes (亮色/暗色)

## 项目结构

```
src/
├── app/                      # Next.js App Router 页面
│   ├── layout.tsx           # 根布局
│   ├── page.tsx             # 首页
│   ├── globals.css          # 全局样式
│   ├── about/               # 关于页面
│   ├── education/           # 教育体系页面
│   ├── curriculum/          # 课程体系页面
│   ├── challenges/          # 科学挑战页面
│   ├── activities/          # 活动页面
│   ├── spaces/              # 空间页面
│   ├── blog/                # 博客页面
│   ├── contact/             # 联系页面
│   └── not-found.tsx        # 404 页面
├── components/
│   ├── ui/                  # Shadcn UI 组件
│   │   ├── button.tsx      # 按钮组件
│   │   ├── card.tsx        # 卡片组件
│   │   └── navigation-menu.tsx
│   ├── layout/              # 布局组件
│   │   ├── header.tsx      # 导航头
│   │   └── footer.tsx      # 页脚
│   ├── sections/            # 页面区块组件
│   │   ├── hero.tsx        # Hero 区域
│   │   ├── core-values.tsx # 核心价值
│   │   ├── features.tsx    # 特色功能
│   │   ├── cta.tsx         # 行动号召
│   │   └── page-hero.tsx   # 页面标题区域
│   ├── effects/             # 动效组件
│   │   ├── glitch-text.tsx # 故障文字效果
│   │   ├── typewriter-text.tsx
│   │   ├── grid-background.tsx
│   │   └── floating-elements.tsx
│   └── providers/           # Context Providers
│       ├── theme-provider.tsx
│       └── lenis-provider.tsx
├── i18n/
│   ├── request.ts           # next-intl 配置
│   └── messages/
│       ├── zh.json         # 中文翻译
│       └── en.json         # 英文翻译
├── lib/
│   └── utils.ts             # 工具函数 (cn)
├── hooks/                   # 自定义 Hooks
└── types/                   # TypeScript 类型定义
```

## 多语言/国际化 (i18n) 开发规范

### 核心原则

1. **所有用户可见文本必须支持多语言** - 不允许在组件中硬编码文本
2. **使用 next-intl 的 useTranslations Hook** - 服务端和客户端组件统一使用
3. **翻译键必须同时存在于中英文配置** - 每个键必须在 `zh.json` 和 `en.json` 中都有对应值

### 翻译系统架构

```
src/i18n/
├── request.ts              # next-intl 服务端配置
└── messages/
    ├── zh.json            # 中文翻译 (嵌套 JSON)
    └── en.json            # 英文翻译 (嵌套 JSON)
```

### 在组件中使用翻译

#### 客户端组件 ('use client')

```tsx
'use client';

import { useTranslations } from 'next-intl';

export function MyComponent() {
  const t = useTranslations('nav');

  return (
    <h1>{t('home')}</h1>
  );
}
```

#### 服务端组件 (默认)

```tsx
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations('page.about');

  return (
    <h1>{t('title')}</h1>
  );
}
```

### 翻译键命名规范 (嵌套结构)

```json
{
  "nav": {
    "home": "首页",
    "about": "关于我们"
  },
  "page": {
    "about": {
      "title": "关于我们",
      "subtitle": "探索未知..."
    }
  },
  "home": {
    "hero": {
      "title": "猫头鹰实验室",
      "description": "..."
    },
    "core": {
      "title": "核心",
      "value": "价值"
    }
  }
}
```

### 语言切换机制

- 用户语言偏好存储在 Cookie `NEXT_LOCALE`
- 默认语言为中文 (`zh`)
- 通过 `Accept-Language` Header 自动检测

### 添加新翻译的步骤

1. 在 `src/i18n/messages/zh.json` 中添加中文翻译
2. 在 `src/i18n/messages/en.json` 中添加对应的英文翻译
3. 在组件中使用 `useTranslations('namespace')` 获取翻译函数

## 组件开发规范

### UI 组件 (Shadcn UI)

基于 Radix UI 原语构建，使用 CVA (Class Variance Authority) 管理变体：

```tsx
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium',
  {
    variants: {
      variant: {
        default: 'bg-primary-600 text-white',
        outline: 'border border-gray-200',
        ghost: 'hover:bg-gray-100',
        gradient: 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white',
        neon: 'border-2 border-neon-purple text-neon-purple hover:shadow-neon',
        cyber: 'bg-cyber-black border border-neon-blue text-neon-blue',
        brutal: 'bg-brutal-yellow text-black border-2 border-black shadow-brutal',
      },
      size: {
        default: 'h-10 px-4',
        sm: 'h-9 px-3',
        lg: 'h-12 px-8',
        xl: 'h-14 px-10',
      },
    },
  }
);
```

### 动画组件 (Framer Motion)

使用 Framer Motion 实现现代化交互：

```tsx
import { motion } from 'framer-motion';

// 滚动显示动画
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {children}
</motion.div>

// 悬停效果
<motion.div whileHover={{ scale: 1.05, y: -5 }}>
  {children}
</motion.div>

// 容器动画 (子元素交错)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};
```

### 特效组件

- **GlitchText**: 故障文字效果
- **TypewriterText**: 打字机效果
- **GridBackground**: 网格背景
- **FloatingElements**: 浮动元素
- **FloatingOrbs**: 发光球体

## 样式规范

### 设计系统

项目采用 **Neo-Brutalism + Cybernetic Futurism** 混合设计风格：

#### 色彩系统

```css
/* 霓虹色系 */
--neon-purple: #BF00FF;
--neon-blue: #00F0FF;
--neon-green: #00FF94;
--neon-pink: #FF0080;

/* 主色系 (蓝紫渐变) */
--primary-500: #6366f1;
--secondary-500: #d946ef;

/* 暗色基础 */
--cyber-black: #030303;
--dark-surface: #151515;
```

#### 渐变

```css
/* 赛博朋克渐变 */
.gradient-cyber: linear-gradient(135deg, #BF00FF 0%, #00F0FF 100%);
.gradient-neon: linear-gradient(135deg, #FF0080 0%, #BF00FF 50%, #00F0FF 100%);

/* 全息渐变 */
.gradient-holographic: linear-gradient(135deg, #007AFF 0%, #7C3AED 50%, #94A3B8 100%);
```

#### 阴影系统

```css
/* 霓虹发光 */
.shadow-neon: 0 0 10px rgba(191, 0, 255, 0.5), 0 0 20px rgba(191, 0, 255, 0.3);

/* Neo-Brutalism */
.shadow-brutal: 4px 4px 0px 0px rgba(0, 0, 0, 1);

/* 玻璃态 */
.shadow-glass: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
```

### 玻璃态面板

```css
.glass-panel {
  @apply bg-white/70 dark:bg-dark-surface/70;
  @apply backdrop-blur-md;
  @apply border border-gray-200 dark:border-dark-border;
  @apply rounded-xl;
}
```

### 暗色模式

使用 Tailwind `dark:` 前缀和 `next-themes`:

```tsx
<div className="bg-white dark:bg-dark-surface">
  <h1 className="text-gray-900 dark:text-white">标题</h1>
</div>
```

## 开发流程

### 命令

```bash
npm run dev       # 启动开发服务器
npm run build     # 构建生产版本
npm run start     # 启动生产服务器
npm run lint      # 代码检查
npm run format    # 代码格式化
```

### 创建新页面

1. 在 `src/app/` 下创建目录和 `page.tsx`
2. 创建页面特定的组件在 `src/components/sections/`
3. 添加翻译到 `src/i18n/messages/` 下的 JSON 文件
4. 更新 Header 导航菜单（如需要）

### 创建新组件

1. UI 基础组件放在 `src/components/ui/`
2. 页面区块组件放在 `src/components/sections/`
3. 特效组件放在 `src/components/effects/`
4. 使用 TypeScript 定义 Props 接口
5. 客户端组件必须添加 `'use client'` 指令

## 代码审查检查清单

- [ ] 所有用户可见文本使用 `useTranslations` 或 `getTranslations`
- [ ] 翻译键在 `zh.json` 和 `en.json` 中都存在
- [ ] 客户端组件正确标记 `'use client'`
- [ ] 动画使用 Framer Motion 并设置 `viewport={{ once: true }}`
- [ ] 样式支持亮色和暗色模式
- [ ] 组件使用 `cn()` 工具函数合并类名
- [ ] 图片使用 Next.js `Image` 组件

## AI 协作指南

### 与 Claude 协作

本项目已优化为与 AI 智能体协作开发：

1. **清晰的文件结构**: 组件按功能分类，便于定位和修改
2. **统一的翻译系统**: 使用 JSON 文件管理翻译，易于扩展
3. **类型安全**: 完整的 TypeScript 类型定义
4. **组件化设计**: 高度模块化，便于独立开发和测试

### 常用任务

- **添加新页面**: 创建 `src/app/[page]/page.tsx` 和相关组件
- **添加翻译**: 编辑 `src/i18n/messages/*.json`
- **修改样式**: 编辑 `tailwind.config.ts` 或组件内样式
- **添加动画**: 使用 Framer Motion 在组件中添加动效

### MCP 服务器集成

项目支持与 AI 工具集成：

- 文件操作
- 代码生成
- 翻译管理
- 组件创建

## 部署

### Vercel (推荐)

```bash
# 自动部署到 Vercel
git push origin main
```

### 其他平台

```bash
npm run build
# 部署 .next 目录
```
