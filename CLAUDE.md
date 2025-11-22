# Open Wisdom Lab 网站开发规范

## 项目概述

猫头鹰实验室（Open Wisdom Lab）官网，基于 Astro 5 框架构建的静态网站，支持中英文双语。

- **站点**: https://openwisdomlab.org
- **框架**: Astro 5.12+ with React, TypeScript
- **样式**: Tailwind CSS (Neo-Brutalism + Cybernetic Futurism design)
- **部署**: Vercel / Netlify

## 技术栈

### 核心框架
| 技术 | 版本 | 用途 |
|------|------|------|
| Astro | 5.12+ | 静态站点生成器 |
| React | 19.x | 交互组件 |
| TypeScript | 5.7+ | 类型安全 |
| Tailwind CSS | 3.4+ | 样式框架 |

### 主要依赖
- **@astrojs/react** - React 集成
- **@astrojs/mdx** - MDX 内容支持
- **@astrojs/sitemap** - 站点地图生成
- **@astrojs/rss** - RSS 订阅
- **Framer Motion** - 动画库
- **AOS** - 滚动动画
- **Cloudinary** - 图片 CDN
- **Sharp/Unpic** - 图片优化

## 项目结构

```
website/
├── src/
│   ├── assets/               # 静态资源
│   │   ├── images/           # 图片文件
│   │   └── styles/           # 全局样式 (base.css)
│   ├── components/           # 组件库 (Atomic Design)
│   │   ├── atoms/            # 原子组件 (Logo, Tags, Pagination)
│   │   ├── blog/             # 博客组件 (Grid, List, SinglePost)
│   │   ├── core/             # 核心组件 (MetaTags, LanguageSwitch, ToggleTheme)
│   │   ├── forms/            # 表单组件 (ImageUpload)
│   │   ├── ui/               # UI 组件 (Button, Card, Input)
│   │   │   └── cyber/        # Cyberpunk React 组件
│   │   └── widgets/          # 功能组件 (Header, Footer, Hero, Vision)
│   ├── i18n/                 # 国际化
│   │   └── languages.ts      # 所有翻译键 (400+ 条目)
│   ├── layouts/              # 布局模板
│   │   ├── BaseLayout.astro  # 根布局
│   │   ├── PageLayout.astro  # 页面布局
│   │   └── BlogLayout.astro  # 博客布局
│   ├── pages/                # 页面文件 (基于文件路由)
│   │   ├── index.astro       # 首页
│   │   ├── about.astro       # 关于页
│   │   ├── activities.astro  # 活动页
│   │   ├── spaces.astro      # 空间页
│   │   ├── curriculum.astro  # 课程页
│   │   ├── challenges.astro  # 挑战页
│   │   ├── contact.astro     # 联系页
│   │   ├── education.astro   # 教育页
│   │   ├── [...blog]/        # 动态博客路由
│   │   ├── [...categories]/  # 分类路由
│   │   ├── [...tags]/        # 标签路由
│   │   └── api/              # API 端点
│   ├── scripts/              # 客户端脚本
│   │   └── i18n-client.ts    # 国际化客户端脚本
│   ├── types/                # TypeScript 类型定义
│   │   ├── SiteConfig.ts     # 站点配置类型
│   │   ├── BlogPost.ts       # 博客文章类型
│   │   └── Navigation.ts     # 导航类型
│   ├── utils/                # 工具函数
│   │   ├── posts.ts          # 博客文章操作
│   │   ├── permalinks.ts     # URL 生成
│   │   └── images.ts         # 图片处理
│   └── config.ts             # 站点配置
├── data/
│   └── blog/                 # 博客文章 (Markdown/MDX)
├── docs/                     # 项目文档
├── public/                   # 静态文件 (favicon, robots.txt)
├── astro.config.mjs          # Astro 配置
├── tailwind.config.cjs       # Tailwind 配置
├── tsconfig.json             # TypeScript 配置
└── package.json              # 依赖和脚本
```

## 开发命令

```bash
# 开发
npm run dev              # 启动开发服务器 (localhost:4321)
npm start                # 同上

# 构建
npm run build            # 类型检查 + 生产构建

# 代码质量
npm run check            # 运行所有检查 (astro check + eslint + prettier)
npm run fix              # 自动修复 (eslint --fix + prettier --write)
npm run format           # 格式化代码
npm run lint:eslint      # ESLint 检查

# 预览
npm run preview          # 预览生产构建
```

## 组件架构

### Atomic Design 分层

1. **Atoms** (`/components/atoms/`) - 基础构建块
   - `Logo.astro`, `Tags.astro`, `Pagination.astro`

2. **Core** (`/components/core/`) - 核心必需组件
   - `MetaTags.astro` - SEO meta 标签
   - `LanguageSwitch.astro` - 语言切换
   - `ToggleTheme.astro` - 主题切换
   - `BasicScripts.astro` - 基础脚本

3. **UI** (`/components/ui/`) - 可复用 UI 组件
   - `Button.astro`, `Card.astro`, `Input.astro`
   - `/cyber/` - React 动效组件 (GlitchText, FloatingElements 等)

4. **Widgets** (`/components/widgets/`) - 页面功能区块
   - `Header.astro`, `Footer.astro`, `Hero.astro`
   - `Vision.astro`, `Curriculum.astro`, `CallToAction.astro`

### 组件开发规范

```astro
---
// 1. 定义 Props 接口
interface Props {
  title: string;
  description?: string;
  variant?: 'primary' | 'secondary';
}

// 2. 解构 props
const { title, description, variant = 'primary' } = Astro.props;
---

<!-- 3. 使用 data-i18n 属性处理文本 -->
<div class={`card ${variant}`}>
  <h2 data-i18n="component.title">{title}</h2>
  {description && <p data-i18n="component.desc">{description}</p>}
  <slot />
</div>

<style>
  /* 4. 组件作用域样式 */
  .card { @apply p-4 rounded-lg; }
</style>
```

### React 组件使用

```astro
---
import { GlitchText } from '~/components/ui/cyber';
---

<!-- client:visible - 进入视口时加载 -->
<GlitchText client:visible text="Hello" />

<!-- client:load - 立即加载 -->
<InteractiveComponent client:load />
```

## 多语言/国际化 (i18n) 开发规范

### 核心原则

1. **所有用户可见文本必须支持多语言** - 不允许在组件中硬编码中文或英文文本
2. **统一使用 `data-i18n` 属性** - 客户端翻译通过 `data-i18n` 属性实现
3. **翻译键必须同时存在于中英文配置** - 每个翻译键必须在 `zh` 和 `en` 对象中都有对应值

### 翻译系统架构

```
src/i18n/
└── languages.ts          # 翻译配置文件（所有翻译键和文本）

src/scripts/
└── i18n-client.ts        # 客户端翻译脚本

src/components/core/
└── LanguageSwitch.astro  # 语言切换组件
```

### 添加新翻译的步骤

#### 1. 在 `src/i18n/languages.ts` 中添加翻译键

```typescript
// 在 zh 对象中添加中文
zh: {
  // 按模块分组，使用点号命名
  'module.section.key': '中文文本',
}

// 在 en 对象中添加英文（必须）
en: {
  'module.section.key': 'English text',
}
```

#### 2. 在组件中使用 `data-i18n` 属性

```astro
<!-- 简单文本 -->
<span data-i18n="module.section.key">默认中文文本</span>

<!-- 标题 -->
<h1 data-i18n="page.title">页面标题</h1>

<!-- 按钮 -->
<button data-i18n="common.submit">提交</button>

<!-- 复杂结构中的文本 -->
<p>
  <span data-i18n="intro.part1">第一部分</span>
  <span class="highlight" data-i18n="intro.highlight">高亮部分</span>
  <span data-i18n="intro.part2">第二部分</span>
</p>
```

### 翻译键命名规范

| 前缀 | 用途 | 示例 |
|------|------|------|
| `nav.*` | 导航菜单 | `nav.home`, `nav.about` |
| `page.*` | 页面标题和副标题 | `page.about.title`, `page.about.subtitle` |
| `home.*` | 首页内容 | `home.hero.title`, `home.core.value` |
| `common.*` | 通用文本 | `common.readMore`, `common.submit` |
| `form.*` | 表单相关 | `form.name`, `form.email` |
| `footer.*` | 页脚内容 | `footer.copyright`, `footer.explore` |
| `blog.*` | 博客相关 | `blog.title`, `blog.readTime` |
| `activities.*` | 活动页面 | `activities.xcamp.title` |
| `spaces.*` | 空间页面 | `spaces.design.title` |
| `curriculum.*` | 课程体系 | `curriculum.b0.title` |
| `challenges.*` | 科学问题 | `challenges.title` |
| `features.*` | 特色功能 | `features.progressive` |
| `research.*` | 问题驱动学习 | `research.authenticity` |
| `vision.*` | 愿景组件 | `vision.title`, `vision.card1.title` |
| `cta.*` | 行动号召组件 | `cta.title`, `cta.button` |

### 常见错误及避免方法

#### ❌ 错误做法

```astro
<!-- 硬编码文本 -->
<h1>关于我们</h1>

<!-- 只有暗色模式有翻译 -->
<div class="dark:hidden">关于我们</div>
<div class="hidden dark:block" data-i18n="page.about.title">关于我们</div>

<!-- 在 JavaScript 数组中硬编码 -->
const items = [
  { name: '深圳坪山基地', desc: '描述...' }
];
```

#### ✅ 正确做法

```astro
<!-- 使用 data-i18n -->
<h1 data-i18n="page.about.title">关于我们</h1>

<!-- 亮暗模式都要有翻译 -->
<div class="dark:hidden" data-i18n="page.about.title">关于我们</div>
<div class="hidden dark:block" data-i18n="page.about.title">关于我们</div>

<!-- 使用翻译键引用 -->
const items = [
  { nameKey: 'spaces.pingshan.name', descKey: 'spaces.pingshan.desc' }
];
```

### 特殊情况处理

#### 1. 动态内容/数据数组

如果内容来自数据数组，有两种方案：

**方案A：使用翻译键**
```typescript
const spaces = [
  {
    nameKey: 'spaces.pingshan.name',
    descKey: 'spaces.pingshan.desc',
  }
];
```

```astro
{spaces.map(space => (
  <h3 data-i18n={space.nameKey}></h3>
))}
```

**方案B：翻译已在 languages.ts 中定义**

确保所有数据项的翻译键都在 `languages.ts` 中定义。

#### 2. React/Vue 客户端组件

对于客户端组件中的文本，使用 `data-i18n` 属性：

```tsx
<span data-i18n="home.hero.title">猫头鹰实验室</span>
```

#### 3. 图片 alt 文本

```astro
<img src="..." alt="默认描述" data-i18n-alt="image.description" />
```

### 语言切换机制

- 用户语言偏好存储在 `localStorage` 的 `preferred-language` 键
- 默认语言为中文 (`zh`)
- 切换语言时自动更新所有 `data-i18n` 元素的文本内容

### 添加新语言的步骤

1. 在 `languages.ts` 的 `languages` 对象中添加语言代码
2. 在 `ui` 对象中添加新语言的翻译对象
3. 在 `LanguageSwitch.astro` 中添加语言选项

## 样式系统

### Tailwind CSS 配置

项目使用自定义设计系统，定义在 `tailwind.config.cjs`：

```javascript
// 主要颜色系统
colors: {
  // 主色调
  primary: { 50-950 },     // Indigo 蓝
  secondary: { 50-950 },   // Purple 紫
  tech: { 50-950 },        // Tech Blue 科技蓝
  accent: { 50-950 },      // Orange 橙

  // 霓虹色 (Cyberpunk)
  neon: {
    purple: '#BF00FF',
    blue: '#00F0FF',
    green: '#00FF94',
    pink: '#FF0080',
  },

  // 全息效果色
  holographic: { 50-950 },
}
```

### 主题切换

- **亮色模式**: 默认，干净设计
- **暗色模式**: Cyberpunk 风格，霓虹效果
- 使用 `dark:` 前缀切换样式
- 存储在 `localStorage` 的 `theme` 键

### 常用样式类

```html
<!-- 渐变背景 -->
<div class="bg-gradient-to-r from-primary-500 to-secondary-500">

<!-- 霓虹效果 (暗色模式) -->
<span class="dark:text-neon-blue dark:drop-shadow-[0_0_10px_#00F0FF]">

<!-- 玻璃态效果 -->
<div class="bg-white/10 backdrop-blur-lg border border-white/20">

<!-- 响应式布局 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

## 博客系统

### 文章结构

博客文章存放在 `data/blog/` 目录，支持 Markdown 和 MDX 格式：

```markdown
---
publishDate: 2024-01-15
draft: false
title: 文章标题
description: 文章描述
image: /images/blog/cover.jpg
category: 技术
tags: [Astro, React]
authors: 作者名
---

文章正文内容...
```

### Frontmatter 字段

| 字段 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `publishDate` | Date | ✅ | 发布日期 |
| `title` | string | ✅ | 文章标题 |
| `description` | string | ✅ | SEO 描述 |
| `draft` | boolean | ❌ | 草稿状态 (默认 false) |
| `image` | string | ❌ | 封面图片路径 |
| `category` | string | ❌ | 分类 |
| `tags` | string[] | ❌ | 标签数组 |
| `authors` | string | ❌ | 作者 |
| `canonical` | string | ❌ | 规范 URL |

### 博客路由

- `/blog` - 博客列表页
- `/blog/:slug` - 文章详情页
- `/category/:slug` - 分类页
- `/tag/:slug` - 标签页
- `/rss.xml` - RSS 订阅

### 博客工具函数

```typescript
import { fetchPosts, findLatestPosts } from '~/utils/posts';

// 获取所有已发布文章
const posts = await fetchPosts();

// 获取最新 N 篇文章
const latestPosts = await findLatestPosts({ count: 4 });
```

## 页面路由

### 静态页面

| 文件 | 路由 | 说明 |
|------|------|------|
| `index.astro` | `/` | 首页 |
| `about.astro` | `/about` | 关于我们 |
| `activities.astro` | `/activities` | 活动页面 |
| `spaces.astro` | `/spaces` | 创新空间 |
| `curriculum.astro` | `/curriculum` | 课程体系 |
| `challenges.astro` | `/challenges` | 科学挑战 |
| `contact.astro` | `/contact` | 联系我们 |
| `education.astro` | `/education` | 教育系统 |

### 动态路由

```
[...blog]/index.astro          → /blog, /blog/:slug
[...categories]/index.astro    → /category/:slug
[...tags]/index.astro          → /tag/:slug
```

## 类型系统

### 主要类型定义

```typescript
// src/types/BlogPost.ts
interface BlogPostFrontmatter {
  publishDate: Date | string;
  draft?: boolean;
  title: string;
  description: string;
  image?: string;
  category?: string;
  tags?: string[];
  authors?: string | string[];
}

interface BlogPost extends BlogPostFrontmatter {
  id: string;
  slug: string;
  Content?: any;
  readingTime?: number;
}

// src/types/SiteConfig.ts
interface SiteConfig {
  name: string;
  origin: string;
  title: string;
  description: string;
}
```

### TypeScript 配置

项目使用严格模式：
- `strict: true` - 所有严格选项启用
- `strictNullChecks` - 空值检查
- `noUnusedLocals` - 禁止未使用变量
- `noImplicitReturns` - 禁止隐式返回

路径别名：
```typescript
import { Something } from '~/components/Something';  // = src/components/Something
```

## 代码质量

### ESLint 规则

- 推荐规则 + Astro 插件
- 禁止 `console.log` (允许 `warn`/`error`)
- 优先使用 `const`
- 禁止未使用变量 (`_` 前缀除外)

### Prettier 配置

```json
{
  "printWidth": 120,
  "useTabs": true,
  "singleQuote": true,
  "trailingComma": "es5"
}
```
- 自动排序 Tailwind 类名
- Astro 文件格式化支持

### 提交前检查

```bash
npm run check   # 运行所有检查
npm run fix     # 自动修复问题
```

## 部署配置

### Vercel (主要)

配置文件: `vercel.json`
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro",
  "cleanUrls": true
}
```

### Netlify (备选)

配置文件: `netlify.toml`
```toml
[build]
  publish = "dist"
  command = "npm run build"
```

### 环境要求

- Node.js: 18.17.1+ / 20.3.0+ / 21.0.0+
- npm: 9.0+

## 重要文件说明

| 文件 | 说明 |
|------|------|
| `src/config.ts` | 站点配置 (名称、URL、SEO) |
| `src/i18n/languages.ts` | 所有翻译文本 |
| `astro.config.mjs` | Astro 框架配置 |
| `tailwind.config.cjs` | Tailwind 样式配置 |
| `tsconfig.json` | TypeScript 配置 |

## 代码审查检查清单

### 通用检查

- [ ] TypeScript 无类型错误
- [ ] ESLint 无警告/错误
- [ ] 代码已格式化 (`npm run format`)

### i18n 检查

- [ ] 所有用户可见文本都有 `data-i18n` 属性
- [ ] 翻译键在 `zh` 和 `en` 中都存在
- [ ] 翻译键命名符合规范
- [ ] 亮色模式和暗色模式的文本都有翻译
- [ ] 没有在组件中硬编码文本
- [ ] 数据数组使用翻译键而非硬编码文本

### 组件检查

- [ ] Props 接口正确定义
- [ ] 使用语义化 HTML
- [ ] 响应式设计完整
- [ ] 暗色模式样式正确

### 性能检查

- [ ] 图片已优化 (使用 Astro Image 或 Cloudinary)
- [ ] 大型 React 组件使用 `client:visible`
- [ ] 无不必要的客户端 JavaScript

## 相关文档

更多详细文档请查看 `/docs/` 目录：

- `DEVELOPMENT.md` - 开发指南
- `ARCHITECTURE.md` - 架构说明
- `DESIGN_SYSTEM.md` - 设计系统
- `DEPLOYMENT.md` - 部署指南
- `OPENSPEC.md` - 开发规范
- `ROADMAP.md` - 产品路线图
