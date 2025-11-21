# Consistency Audit & Unification Plan | 一致性审核与统一方案

**Date**: 2025-11-19
**Version**: 1.0.0
**Related**: OPENSPEC.md, ROADMAP.md

---

## 📊 Executive Summary | 执行摘要

本文档分析了网站当前存在的不一致之处,并提供详细的统一方案。

**发现的主要问题:**
- 🔴 Critical (严重): 11 issues
- 🟡 Medium (中等): 8 issues
- 🟢 Low (轻微): 5 issues

**总计**: 24 项不一致问题需要解决

---

## 1. 文件命名不一致

### 🔴 Issue 1.1: Component 文件名混用 PascalCase 和 camelCase

**Current State:**
```
src/components/
├── atoms/
│   ├── Logo.astro           ✅ PascalCase
│   ├── Tags.astro           ✅ PascalCase
├── core/
│   ├── MetaTags.astro       ✅ PascalCase
│   ├── ToggleTheme.astro    ✅ PascalCase
└── widgets/
    ├── Hero.astro           ✅ PascalCase
    ├── PhysicsBackground.astro  ✅ PascalCase
```

**Analysis**: 组件命名目前保持一致,都使用 PascalCase ✅

### 🟡 Issue 1.2: Utility 文件扩展名不一致

**Current State:**
```
src/utils/
├── blog.js          ❌ JavaScript
├── config.js        ❌ JavaScript
├── frontmatter.mjs  ❌ ES Module JS
├── permalinks.js    ❌ JavaScript
├── posts.js         ❌ JavaScript
└── readingTime.mjs  ❌ ES Module JS
```

**Problem:**
- 混用 `.js` 和 `.mjs`
- 应全部使用 TypeScript (`.ts`)

**Solution:**
```
✅ Rename all to TypeScript:
src/utils/
├── blog.ts
├── config.ts
├── frontmatter.ts
├── permalinks.ts
├── posts.ts
└── readingTime.ts
```

**Action Items:**
1. 重命名所有 `.js` 和 `.mjs` 文件为 `.ts`
2. 添加 TypeScript 类型定义
3. 更新所有 import 语句
4. 验证类型检查通过

---

## 2. Import 语句不一致

### 🔴 Issue 2.1: 混用相对路径和别名路径

**Current State:**

在 `src/components/widgets/Hero.astro`:
```typescript
// ❌ Mixed import styles
import { SITE } from '../../config.mjs';
import Logo from '../atoms/Logo.astro';
import ToggleTheme from '~/components/core/ToggleTheme.astro';
```

**Problem:**
- 同一文件中混用 `../` 和 `~/`
- 难以维护和重构

**Solution:**
```typescript
// ✅ Consistent: Use `~/` for all src imports
import { SITE } from '~/config.mjs';
import Logo from '~/components/atoms/Logo.astro';
import ToggleTheme from '~/components/core/ToggleTheme.astro';

// Exception: Only use relative for same-directory imports
import { helper } from './helpers';
```

**Action Items:**
1. 全局搜索替换相对路径 import
2. 统一使用 `~/` 别名
3. 更新 ESLint 规则强制执行

### 🟡 Issue 2.2: Import 顺序不一致

**Problem:**
- 不同文件的 import 顺序混乱
- 没有统一的分组规则

**Solution:**
遵循 OPENSPEC.md 第 3.2 节的 Import 顺序:
```typescript
// 1. External dependencies
import { defineConfig } from 'astro/config';

// 2. Internal modules
import { SITE } from '~/config.mjs';
import { getPermalink } from '~/utils/permalinks';

// 3. Types
import type { SiteConfig } from '~/types/SiteConfig';

// 4. Components
import Layout from '~/layouts/BaseLayout.astro';

// 5. Assets
import logo from '~/assets/images/logo.svg';
```

**Action Items:**
1. 安装 `eslint-plugin-import`
2. 配置自动排序规则
3. 运行自动修复所有文件

---

## 3. 代码风格不一致

### 🟡 Issue 3.1: 缩进混用 Tabs 和 Spaces

**Current State:**
- `.editorconfig` 规定使用 Tabs
- 部分文件使用 Spaces
- JSON/YAML 文件使用 Spaces (正确)

**Solution:**
- 所有 `.astro`, `.ts`, `.js` 文件: Tabs (width 2)
- 所有 `.json`, `.yml`, `.md` 文件: Spaces (width 2)

**Action Items:**
1. 运行 Prettier 格式化所有文件
2. 验证 EditorConfig 设置
3. 添加 pre-commit hook 检查

### 🟢 Issue 3.2: 引号风格不一致

**Current State:**
- Prettier 配置: `singleQuote: true`
- 部分代码使用双引号

**Solution:**
- 统一使用单引号
- JSX 属性使用双引号 (Prettier 默认)

**Action Items:**
1. `npm run format` 统一格式化

---

## 4. 组件 Props 定义不一致

### 🔴 Issue 4.1: 缺少 TypeScript Interface

**Current State:**

有些组件有类型定义:
```astro
---
// ✅ Good
export interface Props {
  title: string;
  description?: string;
}
const { title, description } = Astro.props;
---
```

有些没有:
```astro
---
// ❌ Bad
const { title, description } = Astro.props;
---
```

**Solution:**
**所有组件 MUST 定义 Props interface**

**Action Items:**
1. 审计所有 `.astro` 文件
2. 为缺少 interface 的组件添加类型定义
3. 启用 TypeScript strict mode 检查

### 🔴 Issue 4.2: Props 解构不一致

**Current State:**

有些使用解构:
```astro
const { title, description = 'default' } = Astro.props;
```

有些直接使用:
```astro
<h1>{Astro.props.title}</h1>
```

**Solution:**
**MUST 在 frontmatter 中解构所有 props**

**Action Items:**
1. 统一使用解构模式
2. 在解构时提供默认值

---

## 5. CSS 类名不一致

### 🟡 Issue 5.1: Tailwind 类名顺序不统一

**Problem:**
```astro
<!-- Mixed order -->
<div class="text-white bg-blue-600 flex items-center p-4 rounded-lg">
<div class="p-4 flex bg-blue-600 rounded-lg text-white items-center">
```

**Solution:**
遵循 OPENSPEC.md 第 7.1 节的顺序:
```astro
<div class="flex items-center p-4 bg-blue-600 text-white rounded-lg">
     │    │         │    │            │          │
     1    2         3    4            5          6
```

**Action Items:**
1. 安装 `prettier-plugin-tailwindcss`
2. 自动排序所有 Tailwind 类名

### 🟢 Issue 5.2: 混用 Tailwind 和 内联样式

**Current State:**
```astro
<!-- ❌ Bad: Mixed -->
<div class="flex p-4" style="background: blue;">

<!-- ✅ Good: Tailwind only -->
<div class="flex p-4 bg-blue-600">
```

**Action Items:**
1. 搜索所有 `style=` 属性
2. 转换为 Tailwind 类或 scoped styles

---

## 6. 国际化 (i18n) 不一致

### 🔴 Issue 6.1: 硬编码文本混合

**Current State:**

有些组件使用翻译:
```astro
<h1>{t('site.title')}</h1>
```

有些直接硬编码:
```astro
<h1>猫头鹰实验室</h1>
<h1>Open Wisdom Lab</h1>
```

**Problem:**
- 难以维护双语内容
- 无法动态切换语言

**Solution:**
**所有 UI 文本 MUST 使用翻译函数**

```astro
---
import { useTranslations } from '~/i18n/utils';
const t = useTranslations(Astro.url);
---

<h1>{t('site.title')}</h1>
```

**Action Items:**
1. 审计所有硬编码文本
2. 添加到 `i18n/languages.ts`
3. 替换为 `t()` 函数调用

### 🟡 Issue 6.2: 翻译 Key 命名不一致

**Current State:**
```typescript
// ❌ Inconsistent naming
'homeTitle'           // camelCase
'home_description'    // snake_case
'home-button'         // kebab-case
```

**Solution:**
遵循 OPENSPEC.md 第 8.2 节的格式:
```typescript
// ✅ Consistent: dot notation
'site.title'
'site.description'
'nav.home'
'nav.about'
'common.readMore'
```

**Action Items:**
1. 重构所有翻译 key
2. 使用分类层级结构
3. 更新所有使用处

---

## 7. 图片处理不一致

### 🔴 Issue 7.1: 混用优化和未优化图片

**Current State:**

优化的 (正确):
```astro
import { Image } from 'astro:assets';
import heroImg from '~/assets/images/hero.jpg';

<Image src={heroImg} alt="Hero" width={1200} height={630} />
```

未优化的 (错误):
```astro
<img src="/images/hero.jpg" alt="Hero" />
```

**Solution:**
**所有图片 MUST 使用 Astro Image 组件优化**

**Action Items:**
1. 搜索所有 `<img>` 标签
2. 迁移图片到 `src/assets/images/`
3. 替换为 `<Image>` 组件

### 🟡 Issue 7.2: 缺少 width/height 属性

**Problem:**
- 导致 CLS (Cumulative Layout Shift)
- 影响 Core Web Vitals 分数

**Solution:**
```astro
<!-- ✅ Always specify dimensions -->
<Image
  src={img}
  alt="Description"
  width={800}
  height={600}
  loading="lazy"
/>
```

**Action Items:**
1. 为所有图片添加尺寸
2. 使用 `loading="lazy"` for below-fold images

---

## 8. 配置文件不一致

### 🟡 Issue 8.1: 配置分散在多个文件

**Current State:**
```
src/config.mjs           # Site configuration
astro.config.mjs         # Astro configuration
tailwind.config.cjs      # Tailwind configuration
src/i18n/languages.ts    # i18n configuration
```

**Problem:**
- 配置分散,难以维护
- 没有统一的配置管理

**Solution:**
创建统一的配置结构:
```
src/config/
├── index.ts           # Re-export all configs
├── site.ts            # Site metadata
├── theme.ts           # Theme colors, fonts
├── i18n.ts            # Languages, translations
├── navigation.ts      # Nav structure
└── analytics.ts       # Analytics settings
```

**Action Items:**
1. 创建 `src/config/` 目录
2. 重构配置到模块化文件
3. 更新所有 import

### 🟢 Issue 8.2: Environment Variables 命名

**Current State:**
- 没有一致的前缀
- 没有文档说明

**Solution:**
```bash
# Public variables (exposed to client)
PUBLIC_SITE_URL=https://example.com
PUBLIC_ANALYTICS_ID=GA-XXXXXX

# Private variables (server-only)
SECRET_API_KEY=xxxxx
DATABASE_URL=xxxxx
```

**Action Items:**
1. 创建 `.env.example` 文件
2. 文档化所有环境变量
3. 重命名使用一致前缀

---

## 9. 文档不一致

### 🟡 Issue 9.1: README 编码问题

**Current State:**
- `README.md` 显示中文乱码
- 文件编码可能不是 UTF-8

**Solution:**
1. 确保文件保存为 UTF-8
2. 验证 Git 配置正确
3. 重新生成 README

### 🟢 Issue 9.2: 重复的部署文档

**Current State:**
```
DEPLOYMENT.md
PRODUCTION_DEPLOYMENT.md
VERCEL_DEPLOYMENT.md
```

**Solution:**
合并为统一的部署文档:
```
docs/
├── deployment/
│   ├── README.md          # Overview
│   ├── vercel.md          # Vercel guide
│   └── netlify.md         # Netlify guide
└── ...
```

---

## 10. 测试基础设施

### 🔴 Issue 10.1: 缺少测试框架

**Current State:**
- 没有测试文件
- 没有测试配置
- 没有 CI 测试流程

**Solution:**
添加完整的测试基础设施:

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['**/*.config.*', '**/dist/**'],
    },
  },
});
```

**Action Items:**
1. 安装 Vitest + @astrojs/test-utils
2. 创建测试目录结构
3. 编写核心功能单元测试
4. 添加 CI 测试步骤

---

## 统一方案优先级矩阵

| 优先级 | 问题 | 影响范围 | 工作量 | 建议时间 |
|--------|------|----------|--------|----------|
| P0 | Utility 文件 TypeScript 化 | High | Medium | Sprint 1 |
| P0 | 添加组件 Props 类型定义 | High | High | Sprint 1-2 |
| P0 | 统一 Import 路径 | High | Low | Sprint 1 |
| P0 | i18n 硬编码文本替换 | High | High | Sprint 2 |
| P0 | 图片优化统一 | Medium | Medium | Sprint 2 |
| P1 | 添加测试基础设施 | High | High | Sprint 2-3 |
| P1 | 配置模块化重构 | Medium | Medium | Sprint 3 |
| P1 | 翻译 Key 重命名 | Medium | Low | Sprint 3 |
| P2 | CSS 类名自动排序 | Low | Low | Sprint 3 |
| P2 | 文档整合 | Low | Low | Sprint 4 |

**Sprint 定义**: 每个 Sprint = 1-2 周

---

## 自动化工具建议

### 工具 1: 代码格式化
```bash
# Install
npm install -D prettier prettier-plugin-astro prettier-plugin-tailwindcss

# Run
npm run format
```

### 工具 2: Import 排序
```bash
# Install
npm install -D eslint-plugin-import

# Configure in .eslintrc.json
{
  "plugins": ["import"],
  "rules": {
    "import/order": ["error", {
      "groups": [
        "builtin",
        "external",
        "internal",
        "parent",
        "sibling",
        "index"
      ],
      "pathGroups": [
        {
          "pattern": "~/**",
          "group": "internal"
        }
      ],
      "newlines-between": "always"
    }]
  }
}
```

### 工具 3: TypeScript Strict Mode
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### 工具 4: Pre-commit Hooks
```bash
# Install
npm install -D husky lint-staged

# Setup
npx husky install

# .husky/pre-commit
#!/bin/sh
npx lint-staged
```

```json
// package.json
{
  "lint-staged": {
    "*.{astro,ts,js}": [
      "prettier --write",
      "eslint --fix"
    ],
    "*.{json,md,yml}": [
      "prettier --write"
    ]
  }
}
```

---

## 统一方案实施清单

### Phase 1: 代码质量基础 (Week 1-2)

- [ ] 安装并配置所有开发工具
- [ ] 运行 Prettier 格式化所有文件
- [ ] 配置 ESLint 自动修复
- [ ] 设置 pre-commit hooks
- [ ] 启用 TypeScript strict mode

### Phase 2: 结构统一 (Week 3-4)

- [ ] 将所有 `.js/.mjs` 重命名为 `.ts`
- [ ] 添加所有缺失的类型定义
- [ ] 统一所有 import 路径为 `~/`
- [ ] 重构配置到 `src/config/` 模块

### Phase 3: 组件标准化 (Week 5-6)

- [ ] 为所有组件添加 Props interface
- [ ] 统一 Props 解构模式
- [ ] 添加 JSDoc 注释
- [ ] 迁移所有图片到 Image 组件

### Phase 4: 国际化完善 (Week 7-8)

- [ ] 识别所有硬编码文本
- [ ] 添加翻译到 languages.ts
- [ ] 替换为 t() 函数
- [ ] 重构翻译 key 命名

### Phase 5: 测试与文档 (Week 9-10)

- [ ] 添加 Vitest 测试框架
- [ ] 编写核心功能单元测试
- [ ] 整合部署文档
- [ ] 创建组件使用文档

### Phase 6: 验证与优化 (Week 11-12)

- [ ] 运行完整的 TypeScript 类型检查
- [ ] 运行所有测试
- [ ] Lighthouse 性能审计
- [ ] 无障碍性测试
- [ ] 最终代码审查

---

## 成功指标

### 代码质量指标

- [ ] TypeScript: 0 类型错误
- [ ] ESLint: 0 linting 错误
- [ ] Prettier: 所有文件格式一致
- [ ] Test Coverage: > 80%

### 性能指标

- [ ] Lighthouse Performance: > 90
- [ ] Lighthouse Accessibility: > 95
- [ ] Lighthouse Best Practices: > 90
- [ ] Lighthouse SEO: > 95

### 文档指标

- [ ] 100% 组件有 JSDoc
- [ ] 100% Props 有类型定义
- [ ] README 无编码问题
- [ ] API 文档完整

---

## 附录: 快速修复脚本

### 脚本 1: Rename JS to TS
```bash
#!/bin/bash
# rename-to-ts.sh

find src/utils -name "*.js" -o -name "*.mjs" | while read file; do
  newfile="${file%.*}.ts"
  git mv "$file" "$newfile"
  echo "Renamed: $file -> $newfile"
done
```

### 脚本 2: Find Hardcoded Text
```bash
#!/bin/bash
# find-hardcoded-text.sh

# Find Chinese text in components
grep -r "[\u4e00-\u9fa5]" src/components --include="*.astro" --exclude-dir=node_modules

# Find English hardcoded text (adjust pattern as needed)
grep -r "<h[1-6]>[A-Z]" src/components --include="*.astro"
```

### 脚本 3: Find Unoptimized Images
```bash
#!/bin/bash
# find-unoptimized-images.sh

# Find <img> tags instead of <Image> components
grep -r "<img" src --include="*.astro" --include="*.mdx"
```

---

**End of Consistency Audit**

**Next Steps**: 参考 ROADMAP.md 了解完整的实施计划。
