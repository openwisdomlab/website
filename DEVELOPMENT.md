# Development Guide | 开发指南

**Last Updated**: 2025-11-19
**Version**: 1.0.0

---

## 🚀 Quick Start | 快速开始

### Prerequisites | 前置要求

- Node.js 18.17.1+ / 20.3.0+ / 21.0.0+
- npm or pnpm
- VSCode (推荐)

### Installation | 安装

```bash
# Clone the repository
git clone <repository-url>
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📝 Available Scripts | 可用脚本

```bash
# Development
npm run dev          # Start dev server (localhost:4321)
npm start           # Alias for dev

# Production
npm run build       # Type-check and build for production
npm run preview     # Preview production build

# Code Quality
npm run format      # Format all files with Prettier
npm run check       # Run all checks (type-check + lint + format-check)
npm run fix         # Auto-fix ESLint and Prettier issues
npm run lint:eslint # Run ESLint on .js, .ts, .astro files
```

---

## 🛠️ Development Tools | 开发工具

### 1. TypeScript

**Strict Mode Enabled** ✅

We use TypeScript with strict mode for maximum type safety:

```json
{
  "strict": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true,
  "noImplicitReturns": true,
  "noUncheckedIndexedAccess": true
}
```

**Type Definitions Location:**
- `src/types/` - All TypeScript type definitions
- `src/types/index.ts` - Centralized exports

**Best Practices:**
- ✅ Always define types for function parameters and return values
- ✅ Use `interface` for object shapes
- ✅ Use `type` for unions, intersections, and utility types
- ✅ Export types from `src/types/index.ts`

### 2. ESLint

**Configuration**: `.eslintrc.js`

**Key Rules:**
- TypeScript strict rules enabled
- No unused variables (except prefixed with `_`)
- Prefer `const` over `let`
- No `var` declarations
- Console warnings (except `warn` and `error`)

**Run Lint:**
```bash
npm run lint:eslint        # Check only
npm run fix                # Auto-fix
```

### 3. Prettier

**Configuration**: `.prettierrc`

**Settings:**
- Print Width: 120 characters
- Tabs: Yes (except JSON/YAML/MD)
- Single Quotes: Yes
- Trailing Comma: ES5
- Plugins: Astro + Tailwind CSS

**Tailwind Class Sorting:**
Prettier automatically sorts Tailwind CSS classes in the correct order!

**Run Format:**
```bash
npm run format             # Format all files
npm run check              # Check formatting
```

### 4. VSCode Integration

**Required Extensions:**
- Astro (`astro-build.astro-vscode`)
- Tailwind CSS IntelliSense (`bradlc.vscode-tailwindcss`)
- ESLint (`dbaeumer.vscode-eslint`)
- Prettier (`esbenp.prettier-vscode`)
- MDX (`unifiedjs.vscode-mdx`)

**Auto-Configuration:**
- Format on Save: ✅ Enabled
- ESLint Auto-Fix on Save: ✅ Enabled
- Tab Size: 2
- Insert Spaces: No (uses tabs)

---

## 📂 Project Structure | 项目结构

```
/
├── .vscode/              # VSCode configuration
│   ├── settings.json    # Editor settings
│   └── extensions.json  # Recommended extensions
├── src/
│   ├── assets/          # Images, styles
│   ├── components/      # UI components
│   │   ├── atoms/       # Atomic components
│   │   ├── blog/        # Blog components
│   │   ├── core/        # Core components
│   │   └── widgets/     # Feature widgets
│   ├── config.ts        # Site configuration
│   ├── i18n/            # Internationalization
│   ├── layouts/         # Layout templates
│   ├── pages/           # Routes
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
├── data/
│   └── blog/            # Blog posts (MDX)
├── public/              # Static assets
├── OPENSPEC.md          # 📚 Development standards
├── ROADMAP.md           # 🗺️ Project roadmap
└── package.json
```

---

## 🎨 Component Development | 组件开发

### Creating a Component | 创建组件

**1. Define Props Interface:**

```astro
---
/**
 * Example component with typed props
 */
export interface Props {
  /** Title text */
  title: string;

  /** Optional description */
  description?: string;

  /** Theme variant @default 'light' */
  theme?: 'light' | 'dark';
}

const {
  title,
  description,
  theme = 'light',
} = Astro.props;
---

<div class={`component ${theme}`}>
  <h2>{title}</h2>
  {description && <p>{description}</p>}
</div>
```

**2. Component Naming:**
- File: PascalCase (`MyComponent.astro`)
- Props: Exported `interface Props`
- CSS Classes: BEM or Tailwind

**3. Documentation:**
- Add JSDoc comments for all props
- Include usage examples
- Document default values

### Component Guidelines | 组件规范

✅ **DO:**
- Define Props interface
- Use Tailwind CSS utilities
- Support dark mode
- Add JSDoc comments
- Use semantic HTML

❌ **DON'T:**
- Use inline styles
- Hardcode text (use i18n)
- Create overly complex components
- Skip prop validation

---

## 🌍 Internationalization | 国际化

### Supported Languages | 支持的语言

- Chinese (zh) - Default
- English (en)

### Using Translations | 使用翻译

```astro
---
import { useTranslations } from '~/i18n/utils';

const t = useTranslations(Astro.url);
---

<h1>{t('site.title')}</h1>
<p>{t('site.description')}</p>
```

### Adding New Translations | 添加新翻译

Edit `src/i18n/languages.ts`:

```typescript
export const translations = {
  zh: {
    nav: {
      newItem: '新项目',
    },
  },
  en: {
    nav: {
      newItem: 'New Item',
    },
  },
};
```

---

## 🎯 Code Quality Checklist | 代码质量检查清单

Before committing code, ensure:

- [ ] ✅ TypeScript compiles without errors
- [ ] ✅ ESLint passes with no warnings
- [ ] ✅ Prettier formatting applied
- [ ] ✅ All props have TypeScript types
- [ ] ✅ JSDoc comments added for public APIs
- [ ] ✅ No console.log statements (use console.warn/error)
- [ ] ✅ Responsive design tested
- [ ] ✅ Dark mode supported
- [ ] ✅ Accessibility checked (WCAG AA)

**Run all checks:**
```bash
npm run check
```

---

## 🐛 Common Issues | 常见问题

### TypeScript Errors After Update | 更新后的 TypeScript 错误

```bash
# Clear Astro cache and rebuild
rm -rf .astro node_modules/.vite
npm install
npm run dev
```

### ESLint Not Working in VSCode | VSCode 中 ESLint 不工作

1. Reload VSCode window: `Cmd/Ctrl + Shift + P` → "Reload Window"
2. Check ESLint extension is installed
3. Verify `.eslintrc.js` exists

### Prettier Not Formatting | Prettier 未格式化

1. Check Prettier extension is installed
2. Set as default formatter in VSCode settings
3. Run manually: `npm run format`

### Import Alias `~/` Not Recognized | Import 别名无法识别

Ensure TypeScript knows about path mapping:
```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["src/*"]
    }
  }
}
```

---

## 📚 Resources | 资源

### Documentation | 文档

- [Astro Docs](https://docs.astro.build/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [OPENSPEC.md](./OPENSPEC.md) - Our development standards

### Project Docs | 项目文档

- [OPENSPEC.md](./OPENSPEC.md) - Global development standards
- [ROADMAP.md](./ROADMAP.md) - Product roadmap
- [CONSISTENCY_AUDIT.md](./CONSISTENCY_AUDIT.md) - Code consistency audit
- [CONTENT_GAPS.md](./CONTENT_GAPS.md) - Content analysis
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - Design system

---

## 🤝 Contributing | 贡献指南

### Git Workflow | Git 工作流

1. **Create Branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes:**
   - Follow OPENSPEC.md guidelines
   - Write descriptive commits

3. **Before Commit:**
   ```bash
   npm run check    # Run all checks
   npm run fix      # Auto-fix issues
   ```

4. **Commit:**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

5. **Push:**
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Message Format | 提交信息格式

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style (formatting, no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(blog): add reading time to blog posts
fix(nav): correct mobile menu overflow
docs: update contributing guidelines
refactor(utils): migrate to TypeScript
```

---

## 🚨 Getting Help | 获取帮助

### Where to Ask | 在哪里提问

1. **Check Documentation First:**
   - OPENSPEC.md for standards
   - ROADMAP.md for features
   - This file for development

2. **Search Issues:**
   - GitHub Issues

3. **Ask the Team:**
   - Team chat/Slack
   - Code review comments

### Reporting Bugs | 报告 Bug

When reporting bugs, include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment (Node version, OS)

---

**Happy Coding! 🎉**

For more details, see [OPENSPEC.md](./OPENSPEC.md)
