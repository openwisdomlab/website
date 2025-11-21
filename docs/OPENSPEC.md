# OpenSpec Global Standards | 全局开发规范

**Version**: 1.1.0
**Date**: 2025-11-21
**Project**: Open Wisdom Lab Website
**Status**: Living Document (活文档)

---

## 📋 Table of Contents

- [1. Introduction](#1-introduction)
- [2. Architecture Standards](#2-architecture-standards)
- [3. Code Organization](#3-code-organization)
- [4. Naming Conventions](#4-naming-conventions)
- [5. Component Standards](#5-component-standards)
- [6. Content Standards](#6-content-standards)
- [7. Styling Standards](#7-styling-standards)
- [8. Internationalization](#8-internationalization)
- [9. Performance Standards](#9-performance-standards)
- [10. Testing Standards](#10-testing-standards)
- [11. Documentation Standards](#11-documentation-standards)
- [12. Git & Version Control](#12-git--version-control)
- [13. Deployment Standards](#13-deployment-standards)
- [14. Accessibility Standards](#14-accessibility-standards)

---

## 1. Introduction

### 1.1 Purpose | 目的

This OpenSpec document defines the global development standards for the Open Wisdom Lab website. All contributors MUST follow these specifications to ensure consistency, maintainability, and quality.

本 OpenSpec 文档定义了猫头鹰实验室网站的全局开发标准。所有贡献者必须遵循这些规范以确保一致性、可维护性和质量。

### 1.2 Scope | 范围

- **Technology Stack**: Astro 5.x + TypeScript + Tailwind CSS
- **Target Audience**: Developers, designers, content creators
- **Compliance Level**: MANDATORY for all new code, RECOMMENDED for legacy code refactoring

### 1.3 Core Principles | 核心原则

1. **Consistency First** | 一致性优先
2. **Developer Experience** | 开发者体验
3. **Performance by Default** | 默认高性能
4. **Accessibility Always** | 始终可访问
5. **Bilingual Support** | 双语支持
6. **Type Safety** | 类型安全

---

## 2. Architecture Standards

### 2.1 Technology Stack

```yaml
# Core Framework
Framework: Astro 5.12.9+
Language: TypeScript 5.7.2+
Styling: Tailwind CSS 3.4.17+
Content: MDX 4.1.0+
Runtime: Node.js 18.17.1+ / 20.3.0+ / 21.0.0+
Package Manager: npm (recommended) or pnpm

# UI & Interaction
React: 19.2.0+
Framer Motion: 12.23.24+ (动画库)
AOS: 2.3.4+ (滚动动画)
astro-icon: 1.1.1+ (图标系统)

# Media & Assets
Cloudinary: 2.8.0+ (图片CDN)
Unpic: 3.18.0+ (图片优化)
Sharp: 0.33.5+ (图片处理)

# Code Quality
ESLint: 9.17.0+
Prettier: 3.4.2+
TypeScript ESLint: 8.18.2+
```

### 2.2 Build Configuration

**Build Mode**: Static Site Generation (SSG)
**Output**: `dist/` directory
**Target**: Modern browsers (ES2020+)

### 2.3 Project Structure

```
/
├── .github/              # GitHub workflows and configs
├── .vscode/              # VSCode settings (shared)
├── data/                 # Content data files
│   ├── blog/            # Blog posts (MDX)
│   └── content/         # [Future] Structured content
├── docs/                 # [NEW] Documentation
│   ├── specs/           # Specification documents
│   ├── guides/          # Development guides
│   └── api/             # API documentation
├── public/               # Static assets (copied as-is)
│   ├── images/          # [Future] Public images
│   ├── fonts/           # [Future] Self-hosted fonts
│   └── robots.txt
├── src/
│   ├── assets/          # Processed assets
│   │   ├── images/      # Images (optimized by Astro)
│   │   └── styles/      # Global CSS
│   ├── components/      # UI components
│   │   ├── atoms/       # Atomic components
│   │   ├── molecules/   # [Future] Molecular components
│   │   ├── organisms/   # [Future] Organism components
│   │   ├── blog/        # Blog-specific components
│   │   ├── core/        # Core functionality
│   │   └── widgets/     # Feature widgets
│   ├── config/          # [NEW] Configuration modules
│   ├── content/         # [Future] Content collections
│   ├── i18n/            # Internationalization
│   ├── layouts/         # Layout templates
│   ├── pages/           # Route pages
│   ├── types/           # [NEW] TypeScript types
│   ├── utils/           # Utility functions
│   └── config.mjs       # Site configuration
├── tests/                # [NEW] Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── OPENSPEC.md           # This file
├── ROADMAP.md            # [NEW] Project roadmap
└── package.json
```

### 2.4 Architectural Patterns

**Component Architecture**: Atomic Design Pattern
- **Atoms**: Basic building blocks (Logo, Tags, Buttons)
- **Molecules**: Simple combinations of atoms
- **Organisms**: Complex UI components
- **Templates**: Layout structures
- **Pages**: Specific instances of templates

**Data Flow**: Unidirectional
- Configuration → Layouts → Components → Atoms

---

## 3. Code Organization

### 3.1 File Naming

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `Hero.astro`, `FeatureCard.astro` |
| Pages | kebab-case | `index.astro`, `about-us.astro` |
| Utilities | camelCase | `formatDate.ts`, `getPermalink.js` |
| Types | PascalCase | `SiteConfig.ts`, `BlogPost.ts` |
| Constants | UPPER_SNAKE_CASE | `API_ENDPOINTS.ts`, `COLORS.ts` |
| Styles | kebab-case | `base.css`, `utilities.css` |
| Config | kebab-case | `astro.config.mjs`, `tailwind.config.cjs` |

### 3.2 Import Order

```typescript
// 1. External dependencies
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// 2. Internal modules (by layer)
import { SITE } from '~/config.mjs';
import { getPermalink } from '~/utils/permalinks';

// 3. Types
import type { SiteConfig } from '~/types/SiteConfig';

// 4. Relative imports
import Layout from '../layouts/BaseLayout.astro';
import Hero from '../components/widgets/Hero.astro';

// 5. Assets
import logo from '~/assets/images/logo.svg';
```

### 3.3 Import Aliases

```typescript
// MUST use `~/*` for src imports
import { SITE } from '~/config.mjs';           // ✅ Good
import { SITE } from '../../config.mjs';       // ❌ Bad

// Exception: Relative imports for same-level or nearby files
import Component from './Component.astro';     // ✅ OK for siblings
```

### 3.4 File Structure

**Astro Components** (.astro):
```astro
---
// 1. Imports
import Layout from '~/layouts/BaseLayout.astro';
import type { Props } from './types';

// 2. Component props
interface Props {
  title: string;
  description?: string;
}

const { title, description = 'Default description' } = Astro.props;

// 3. Business logic
const items = await fetchItems();
---

<!-- 4. Template -->
<Layout>
  <h1>{title}</h1>
  {description && <p>{description}</p>}
</Layout>

<!-- 5. Styles (scoped) -->
<style>
  h1 {
    @apply text-3xl font-bold;
  }
</style>

<!-- 6. Scripts (if needed) -->
<script>
  console.log('Component mounted');
</script>
```

**TypeScript Modules** (.ts):
```typescript
// 1. Imports
import type { BlogPost } from '~/types/BlogPost';

// 2. Types/Interfaces
export interface Config {
  apiKey: string;
}

// 3. Constants
const API_BASE = 'https://api.example.com';

// 4. Functions
export function formatDate(date: Date): string {
  return date.toISOString();
}

// 5. Default export (if applicable)
export default {
  API_BASE,
  formatDate,
};
```

---

## 4. Naming Conventions

### 4.1 Variables

```typescript
// Constants: UPPER_SNAKE_CASE
const MAX_ITEMS = 10;
const API_ENDPOINT = '/api/v1';

// Configuration objects: PascalCase
export const SITE = { ... };
export const I18N = { ... };

// Regular variables: camelCase
const userName = 'John';
const isActive = true;

// Private variables: prefix with underscore
const _internalCache = new Map();
```

### 4.2 Functions

```typescript
// Regular functions: camelCase with verb prefix
function getUserData() { ... }
function formatDate() { ... }
function isValidEmail() { ... }

// Boolean functions: is/has/should prefix
function isAuthenticated() { ... }
function hasPermission() { ... }
function shouldRender() { ... }

// Event handlers: handle/on prefix
function handleClick() { ... }
function onSubmit() { ... }
```

### 4.3 Components

```typescript
// Components: PascalCase, noun-based
Hero.astro           // ✅ Good
BlogCard.astro       // ✅ Good
UserProfile.astro    // ✅ Good

heroComponent.astro  // ❌ Bad
blog-card.astro      // ❌ Bad
```

### 4.4 Types & Interfaces

```typescript
// Interfaces: PascalCase, descriptive nouns
interface User { ... }
interface BlogPost { ... }
interface SiteConfig { ... }

// Type aliases: PascalCase
type UserId = string;
type DateRange = { start: Date; end: Date };

// Generics: Single uppercase letter or PascalCase
type Result<T> = { data: T };
type AsyncResult<TData, TError> = { ... };
```

### 4.5 CSS Classes

```css
/* Tailwind utilities: Use as-is */
class="text-blue-600 font-bold"

/* Custom classes: kebab-case with BEM */
.hero-section { ... }
.hero-section__title { ... }
.hero-section__title--large { ... }

/* Component-scoped: PascalCase prefix */
.Hero_container { ... }
.Hero_title { ... }
```

---

## 5. Component Standards

### 5.1 Component Props

**MUST define TypeScript interfaces for all props:**

```astro
---
export interface Props {
  // Required props: no default value
  title: string;

  // Optional props: use `?` or provide default
  subtitle?: string;
  description?: string;

  // Props with defaults: provide in destructuring
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';

  // Complex types
  items?: Array<{ id: string; label: string }>;

  // Metadata
  className?: string;
  id?: string;
}

const {
  title,
  subtitle,
  description,
  theme = 'light',
  size = 'md',
  items = [],
  className = '',
  id,
} = Astro.props;
---
```

### 5.2 Component Documentation

**MUST include JSDoc comments:**

```astro
---
/**
 * Hero component for landing pages
 *
 * @component
 * @example
 * ```astro
 * <Hero
 *   title="Welcome"
 *   subtitle="To our site"
 *   theme="dark"
 * />
 * ```
 */
export interface Props {
  /** Main heading text */
  title: string;

  /** Optional subtitle below title */
  subtitle?: string;

  /** Color theme variant @default 'light' */
  theme?: 'light' | 'dark';
}
---
```

### 5.3 Component Slots

**Name slots semantically:**

```astro
<!-- Parent component -->
<div class="card">
  <header>
    <slot name="header" />
  </header>

  <main>
    <slot />  <!-- Default slot -->
  </main>

  <footer>
    <slot name="footer" />
  </footer>
</div>
```

### 5.4 Component Composition

**Prefer composition over inheritance:**

```astro
<!-- ✅ Good: Composable -->
<Card>
  <CardHeader title="Hello" />
  <CardBody>Content here</CardBody>
  <CardFooter>Footer</CardFooter>
</Card>

<!-- ❌ Bad: Monolithic -->
<Card
  headerTitle="Hello"
  bodyContent="Content here"
  footerContent="Footer"
/>
```

### 5.5 Component Responsibilities

**Single Responsibility Principle:**
- Each component should do ONE thing well
- If a component has too many props (>10), consider splitting it
- Extract reusable logic into utilities

**Example:**
```astro
<!-- ✅ Good: Single responsibility -->
<BlogCard post={post} />
<AuthorInfo author={author} />
<DateDisplay date={publishDate} />

<!-- ❌ Bad: Too many responsibilities -->
<BlogPost
  title={...}
  content={...}
  author={...}
  publishDate={...}
  tags={...}
  comments={...}
/>
```

---

## 6. Content Standards

### 6.1 Blog Posts

**Location**: `data/blog/`
**Format**: Markdown (`.md`) or MDX (`.mdx`)

**Required Frontmatter:**
```yaml
---
publishDate: 2025-11-19T00:00:00Z
title: "Your Blog Title"
description: "Brief description for SEO and previews"
excerpt: "First paragraph or custom excerpt"
image: "~/assets/images/blog/featured.jpg"
category: "Education"
tags:
  - education
  - ai
  - innovation
author: "Author Name"
draft: false
---
```

**Optional Frontmatter:**
```yaml
canonical: https://example.com/original-post  # For republished content
readingTime: 5  # Auto-calculated if omitted
language: zh  # Default: zh
```

### 6.2 Content Formatting

**Headings:**
```markdown
# H1: Page title only (one per page)
## H2: Main sections
### H3: Subsections
#### H4: Minor subsections (use sparingly)
```

**Lists:**
```markdown
<!-- Unordered lists -->
- Item 1
- Item 2
  - Nested item

<!-- Ordered lists -->
1. First step
2. Second step
3. Third step
```

**Code Blocks:**
```markdown
<!-- With language syntax highlighting -->
```typescript
const greeting: string = 'Hello';
```

<!-- With filename -->
```typescript title="utils/greet.ts"
export function greet(name: string) {
  return `Hello, ${name}!`;
}
```
```

**Images:**
```markdown
<!-- Relative to src/assets/images/ -->
![Alt text](~/assets/images/example.jpg)

<!-- With Astro Image component for optimization -->
<Image src={heroImage} alt="Description" width={800} height={600} />
```

### 6.3 SEO Requirements

**MUST provide for all pages:**
- Title (50-60 characters)
- Description (150-160 characters)
- Open Graph image (1200x630px)
- Canonical URL (if applicable)

**Example:**
```astro
---
import { SITE } from '~/config.mjs';

const metadata = {
  title: 'Page Title - Open Wisdom Lab',
  description: 'Concise description of the page content for search engines',
  canonical: getPermalink('page-slug'),
  openGraph: {
    image: '~/assets/images/og-image.jpg',
  },
};
---
```

---

## 7. Styling Standards

### 7.1 Tailwind CSS Usage

**MUST use Tailwind utilities first:**

```astro
<!-- ✅ Good: Tailwind utilities -->
<div class="flex items-center justify-between p-4 bg-blue-600 text-white rounded-lg">

<!-- ❌ Bad: Inline styles -->
<div style="display: flex; padding: 1rem; background: blue;">
```

**Utility Order (recommended):**
1. Layout: `flex`, `grid`, `block`
2. Positioning: `relative`, `absolute`, `top-0`
3. Sizing: `w-full`, `h-24`, `max-w-lg`
4. Spacing: `p-4`, `m-2`, `space-x-4`
5. Typography: `text-lg`, `font-bold`, `text-center`
6. Visual: `bg-blue-600`, `border`, `rounded-lg`
7. Effects: `shadow-lg`, `opacity-50`, `transition`
8. Interactions: `hover:bg-blue-700`, `focus:ring`

### 7.2 Custom CSS

**ONLY when Tailwind is insufficient:**

```astro
<style>
  /* Scoped styles with @apply */
  .custom-component {
    @apply flex items-center p-4;

    /* Custom properties */
    background: linear-gradient(to right, theme('colors.blue.500'), theme('colors.purple.500'));
  }
</style>
```

**Global styles** (`src/assets/styles/base.css`):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Only for true global base styles */
  body {
    @apply antialiased;
  }
}

@layer components {
  /* Reusable component classes */
  .btn-primary {
    @apply px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700;
  }
}
```

### 7.3 Theme Configuration

**Extend Tailwind theme** in `tailwind.config.cjs`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          // ... color scale
          900: '#1e3a8a',
        },
        secondary: {
          // ...
        },
      },
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
};
```

### 7.4 Responsive Design

**Mobile-first approach:**

```astro
<!-- Base styles are mobile, then scale up -->
<div class="text-sm md:text-base lg:text-lg xl:text-xl">
  Responsive text
</div>

<!-- Breakpoints -->
sm:  640px   /* Small devices */
md:  768px   /* Tablets */
lg:  1024px  /* Desktops */
xl:  1280px  /* Large desktops */
2xl: 1536px  /* Extra large */
```

### 7.5 Dark Mode

**MUST support dark mode:**

```astro
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content adapts to theme
</div>
```

---

## 8. Internationalization

### 8.1 Language Support

**Default Language**: Chinese (zh)
**Secondary Language**: English (en)

**Language Configuration** (`src/i18n/languages.ts`):

```typescript
export const LANGUAGES = {
  zh: {
    code: 'zh',
    name: '中文',
    locale: 'zh-CN',
  },
  en: {
    code: 'en',
    name: 'English',
    locale: 'en-US',
  },
};

export const DEFAULT_LANG = 'zh';
```

### 8.2 Translation Keys

**Structure**: `category.subcategory.key`

```typescript
export const translations = {
  zh: {
    site: {
      title: '猫头鹰实验室',
      description: '创生教育空间',
    },
    nav: {
      home: '首页',
      about: '关于我们',
      blog: '博客',
    },
    common: {
      readMore: '阅读更多',
      learnMore: '了解更多',
    },
  },
  en: {
    site: {
      title: 'Open Wisdom Lab',
      description: 'Creative Education Space',
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      blog: 'Blog',
    },
    common: {
      readMore: 'Read More',
      learnMore: 'Learn More',
    },
  },
};
```

### 8.3 Using Translations

```astro
---
import { useTranslations } from '~/i18n/utils';

const t = useTranslations(Astro.url);
---

<header>
  <h1>{t('site.title')}</h1>
  <p>{t('site.description')}</p>
</header>

<nav>
  <a href="/">{t('nav.home')}</a>
  <a href="/about">{t('nav.about')}</a>
</nav>
```

### 8.4 Content Localization

**Bilingual content structure:**

```markdown
---
title: "中文标题 / English Title"
description: "中文描述 / English description"
---

## 中文标题

中文内容...

---

## English Title

English content...
```

---

## 9. Performance Standards

### 9.1 Performance Targets

**MUST meet these Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Lighthouse Scores (minimum):**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

### 9.2 Image Optimization

**MUST optimize all images:**

```astro
---
import { Image } from 'astro:assets';
import heroImage from '~/assets/images/hero.jpg';
---

<!-- ✅ Good: Optimized with Image component -->
<Image
  src={heroImage}
  alt="Hero image"
  width={1200}
  height={630}
  format="webp"
  quality={80}
  loading="lazy"
/>

<!-- ❌ Bad: Unoptimized img tag -->
<img src="/images/hero.jpg" alt="Hero" />
```

**Image Guidelines:**
- Format: WebP with JPEG/PNG fallback
- Compression: 80% quality for photos, 90% for graphics
- Sizes: Provide srcset for responsive images
- Lazy loading: All below-fold images
- Dimensions: Always specify width & height

### 9.3 Code Splitting

**Lazy load components:**

```astro
---
// Heavy components should be lazy-loaded
const HeavyComponent = await import('~/components/HeavyComponent.astro');
---

<!-- Only load when needed -->
{condition && <HeavyComponent.default />}
```

### 9.4 Asset Loading

**Defer non-critical resources:**

```astro
<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossorigin />

<!-- Defer analytics -->
<script is:inline defer src="/analytics.js"></script>

<!-- Async non-critical CSS -->
<link rel="stylesheet" href="/non-critical.css" media="print" onload="this.media='all'" />
```

### 9.5 Caching Strategy

**Static assets** (set in `vercel.json` or headers):
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## 10. Testing Standards

### 10.1 Testing Strategy

**Test Pyramid:**
```
     /\
    /E2E\       10% - End-to-end tests
   /------\
  /  INT   \    20% - Integration tests
 /----------\
/    UNIT    \  70% - Unit tests
--------------
```

### 10.2 Unit Tests

**Framework**: Vitest (recommended for Astro projects)

**Coverage Requirements:**
- Utilities: 90%+ coverage
- Components: 70%+ coverage
- Overall: 80%+ coverage

**Example:**
```typescript
// tests/unit/utils/formatDate.test.ts
import { describe, it, expect } from 'vitest';
import { formatDate } from '~/utils/formatDate';

describe('formatDate', () => {
  it('formats date correctly', () => {
    const date = new Date('2025-11-19');
    expect(formatDate(date)).toBe('2025-11-19');
  });

  it('handles invalid dates', () => {
    expect(() => formatDate(null)).toThrow();
  });
});
```

### 10.3 Integration Tests

**Test component interactions:**

```typescript
// tests/integration/BlogCard.test.ts
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import BlogCard from '~/components/blog/BlogCard.astro';

test('BlogCard renders post data', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(BlogCard, {
    props: {
      post: {
        title: 'Test Post',
        excerpt: 'Test excerpt',
      },
    },
  });

  expect(result).toContain('Test Post');
  expect(result).toContain('Test excerpt');
});
```

### 10.4 E2E Tests

**Framework**: Playwright

**Critical user flows to test:**
- Homepage navigation
- Language switching
- Blog post reading
- Form submissions (if applicable)

### 10.5 Accessibility Testing

**MUST test with:**
- Axe DevTools (browser extension)
- Lighthouse accessibility audit
- Screen reader testing (NVDA/JAWS)
- Keyboard navigation

---

## 11. Documentation Standards

### 11.1 Code Comments

**When to comment:**
- Complex algorithms: MUST explain logic
- Workarounds: MUST explain why
- Public APIs: MUST use JSDoc
- Magic numbers: MUST explain meaning

**When NOT to comment:**
```typescript
// ❌ Bad: Obvious comments
// Increment i by 1
i++;

// ✅ Good: Self-documenting code
const maxRetries = 3;  // Clear variable name, no comment needed
```

### 11.2 JSDoc Standards

```typescript
/**
 * Fetches user data from the API
 *
 * @param userId - The unique identifier for the user
 * @param options - Optional configuration
 * @param options.includeProfile - Whether to include profile data
 * @returns Promise resolving to user data
 * @throws {ApiError} When the API request fails
 *
 * @example
 * ```typescript
 * const user = await fetchUser('123', { includeProfile: true });
 * console.log(user.name);
 * ```
 */
export async function fetchUser(
  userId: string,
  options?: { includeProfile?: boolean }
): Promise<User> {
  // Implementation
}
```

### 11.3 README Requirements

**Every major directory SHOULD have a README:**

```markdown
# Component Name

Brief description of what this component/module does.

## Usage

```astro
<Component prop1="value" prop2={variable} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| prop1 | string | - | Required prop description |
| prop2 | number | 0 | Optional prop with default |

## Examples

### Basic Usage
[Example code]

### Advanced Usage
[Example code]
```

### 11.4 Changelog

**Follow Keep a Changelog format:**

```markdown
# Changelog

## [Unreleased]

### Added
- New feature X

### Changed
- Updated component Y

### Fixed
- Bug Z

## [1.1.0] - 2025-11-19

### Added
- Bilingual support
- Physics animations
```

---

## 12. Git & Version Control

### 12.1 Branch Strategy

**Main Branches:**
- `main`: Production-ready code
- `develop`: Integration branch for features

**Feature Branches:**
- Format: `claude/<feature-name>-<session-id>`
- Example: `claude/openspec-global-standards-01R8SJ2ST3mDRCUAHjvtWhrD`

### 12.2 Commit Messages

**Format**: Conventional Commits

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

**Examples:**
```
feat(i18n): add bilingual support for navigation

- Added Chinese and English translations
- Implemented language switcher component
- Updated all navigation strings to use translation keys

Closes #123
```

```
fix(blog): correct date formatting in blog cards

The previous format was not mobile-friendly.
Now using a more compact format.

Fixes #456
```

### 12.3 Pull Request Guidelines

**MUST include:**
1. Clear title following commit message format
2. Description of changes
3. Screenshots (for UI changes)
4. Testing notes
5. Related issues (Closes #123)

**PR Template:**
```markdown
## Summary
Brief description of what this PR does

## Changes
- Change 1
- Change 2

## Testing
- [ ] Unit tests passing
- [ ] Manual testing completed
- [ ] Accessibility tested

## Screenshots
[If applicable]

## Related Issues
Closes #123
```

---

## 13. Deployment Standards

### 13.1 Deployment Targets

**Primary**: Vercel
**Fallback**: Netlify

### 13.2 Environment Variables

**MUST NOT commit secrets**

```bash
# .env (gitignored)
PUBLIC_ANALYTICS_ID=abc123
SECRET_API_KEY=secret123
```

**Public variables**: Prefix with `PUBLIC_`
**Usage in Astro:**
```typescript
const analyticsId = import.meta.env.PUBLIC_ANALYTICS_ID;
```

### 13.3 Build Process

**Pre-deployment checks:**
```bash
# 1. Type checking
npm run type-check

# 2. Linting
npm run lint

# 3. Build
npm run build

# 4. Preview
npm run preview
```

### 13.4 Performance Monitoring

**MUST monitor:**
- Core Web Vitals (via Analytics)
- Error rates (via Sentry or similar)
- Build times
- Lighthouse scores

---

## 14. Accessibility Standards

### 14.1 WCAG Compliance

**Target**: WCAG 2.1 Level AA

**Required:**
- Semantic HTML
- Proper heading hierarchy
- Alt text for all images
- ARIA labels where needed
- Keyboard navigation
- Focus indicators
- Sufficient color contrast (4.5:1 for text)

### 14.2 Semantic HTML

```astro
<!-- ✅ Good: Semantic elements -->
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Content...</p>
  </article>
</main>

<footer>
  <p>&copy; 2025</p>
</footer>

<!-- ❌ Bad: Div soup -->
<div class="header">
  <div class="nav">
    <div class="link">Home</div>
  </div>
</div>
```

### 14.3 ARIA Labels

```astro
<!-- Icon buttons need labels -->
<button aria-label="Close menu">
  <Icon name="close" />
</button>

<!-- Decorative images should be hidden -->
<img src="decoration.jpg" alt="" role="presentation" />

<!-- Dynamic content needs live regions -->
<div role="status" aria-live="polite">
  {message}
</div>
```

### 14.4 Keyboard Navigation

**MUST be fully keyboard accessible:**
- Tab: Navigate forward
- Shift+Tab: Navigate backward
- Enter/Space: Activate buttons/links
- Escape: Close modals/dropdowns
- Arrow keys: Navigate menus

**Focus management:**
```astro
<!-- Visible focus indicators -->
<a href="/" class="focus:ring-2 focus:ring-blue-500 focus:outline-none">
  Link
</a>

<!-- Skip to main content -->
<a href="#main" class="sr-only focus:not-sr-only">
  Skip to main content
</a>

<main id="main">
  ...
</main>
```

---

## Appendix A: Tooling Configuration

### A.1 VSCode Extensions (Required)

```json
{
  "recommendations": [
    "astro-build.astro-vscode",
    "bradlc.vscode-tailwindcss",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "unifiedjs.vscode-mdx"
  ]
}
```

### A.2 Prettier Configuration

```json
{
  "printWidth": 120,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": true,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-astro", "prettier-plugin-tailwindcss"]
}
```

### A.3 ESLint Configuration

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:astro/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

---

## Appendix B: Quick Reference

### Common Commands

```bash
# Development
npm run dev               # Start dev server
npm run build             # Build for production
npm run preview           # Preview production build

# Code Quality
npm run format            # Format with Prettier
npm run lint              # Lint with ESLint
npm run type-check        # TypeScript type checking

# Testing (when configured)
npm run test              # Run unit tests
npm run test:integration  # Run integration tests
npm run test:e2e          # Run E2E tests
```

### File Extensions

| Extension | Purpose |
|-----------|---------|
| `.astro` | Astro components |
| `.ts` | TypeScript files |
| `.tsx` | TypeScript + JSX (React components) |
| `.md` | Markdown content |
| `.mdx` | Markdown + JSX |
| `.mjs` | ES module JavaScript |
| `.cjs` | CommonJS JavaScript |

### Import Patterns

```typescript
// Config and constants
import { SITE } from '~/config.mjs';

// Components
import Hero from '~/components/widgets/Hero.astro';

// Utilities
import { formatDate } from '~/utils/formatDate';

// Types
import type { BlogPost } from '~/types/BlogPost';

// Assets
import logo from '~/assets/images/logo.svg';
```

---

## Appendix C: Migration Guide

### For Existing Code

1. **Run Prettier**: Format all files
2. **Update imports**: Change to `~/` aliases
3. **Add TypeScript types**: Add interfaces for component props
4. **Extract inline styles**: Move to Tailwind classes
5. **Add JSDoc comments**: Document public APIs
6. **Update tests**: Ensure all tests pass

### Breaking Changes from Previous Versions

- None (this is the first OpenSpec version)

---

## Appendix D: Glossary

| Term | Definition |
|------|------------|
| Atomic Design | Component architecture methodology (atoms → molecules → organisms → templates → pages) |
| SSG | Static Site Generation - pre-rendering pages at build time |
| MDX | Markdown with JSX support |
| Core Web Vitals | Google's metrics for user experience (LCP, FID, CLS) |
| i18n | Internationalization |
| a11y | Accessibility |
| WCAG | Web Content Accessibility Guidelines |

---

## Document Control

**Version History:**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.1.0 | 2025-11-21 | Claude | 更新技术栈版本，同步 package.json |
| 1.0.0 | 2025-11-19 | Claude | Initial OpenSpec creation |

**Approval:**
- [x] Technical Lead
- [ ] Project Manager
- [ ] Team Review

**Next Review Date**: 2026-02-21 (3 months)

---

**End of OpenSpec Document**

For questions or suggestions, please open an issue on GitHub.
