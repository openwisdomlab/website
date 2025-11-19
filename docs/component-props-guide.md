# Component Props Interface Guide | 组件 Props 接口指南

**Last Updated**: 2025-11-19

---

## 📋 Overview | 概述

根据 OPENSPEC.md 第5章的要求,所有 Astro 组件必须定义 TypeScript Props 接口。

---

## ✅ Standard Pattern | 标准模式

### Basic Component | 基础组件

```astro
---
/**
 * Example Card Component
 * 示例卡片组件
 *
 * @component
 * @example
 * ```astro
 * <Card
 *   title="Hello"
 *   description="World"
 *   variant="primary"
 * />
 * ```
 */
export interface Props {
	/** Card title */
	title: string;

	/** Optional description */
	description?: string;

	/** Visual variant @default 'default' */
	variant?: 'default' | 'primary' | 'secondary';

	/** Additional CSS classes */
	className?: string;

	/** Element ID */
	id?: string;
}

const {
	title,
	description,
	variant = 'default',
	className = '',
	id,
} = Astro.props;
---

<div class={`card card--${variant} ${className}`} id={id}>
	<h3>{title}</h3>
	{description && <p>{description}</p>}
</div>
```

### Component with Slots | 带插槽的组件

```astro
---
/**
 * Modal Component with named slots
 * 带命名插槽的模态框组件
 */
export interface Props {
	/** Whether modal is open */
	isOpen: boolean;

	/** Modal title */
	title: string;

	/** Show close button @default true */
	showClose?: boolean;

	/** Close callback */
	onClose?: () => void;
}

const {
	isOpen,
	title,
	showClose = true,
	onClose,
} = Astro.props;
---

{isOpen && (
	<div class="modal">
		<div class="modal__header">
			<h2>{title}</h2>
			{showClose && (
				<button onClick={onClose} aria-label="Close">×</button>
			)}
		</div>

		<div class="modal__body">
			<slot />
		</div>

		<div class="modal__footer">
			<slot name="footer" />
		</div>
	</div>
)}
```

### Component with Complex Types | 复杂类型组件

```astro
---
import type { BlogPost } from '~/types';

/**
 * Blog Card Component
 * 博客卡片组件
 */
export interface Props {
	/** Blog post data */
	post: BlogPost;

	/** Show excerpt @default true */
	showExcerpt?: boolean;

	/** Show reading time @default true */
	showReadingTime?: boolean;

	/** Image loading strategy @default 'lazy' */
	loading?: 'lazy' | 'eager';
}

const {
	post,
	showExcerpt = true,
	showReadingTime = true,
	loading = 'lazy',
} = Astro.props;
---

<article class="blog-card">
	{post.image && (
		<img
			src={post.image}
			alt={post.title}
			loading={loading}
		/>
	)}

	<h3>{post.title}</h3>

	{showExcerpt && post.excerpt && (
		<p>{post.excerpt}</p>
	)}

	{showReadingTime && post.readingTime && (
		<span>{post.readingTime} min read</span>
	)}
</article>
```

---

## 📝 Props Naming Conventions | Props 命名规范

### Boolean Props | 布尔属性

```typescript
// ✅ Good: Use "is", "has", "should" prefix
isOpen: boolean;
hasError: boolean;
shouldRender: boolean;
disabled: boolean;

// ❌ Bad: Unclear naming
open: boolean;
error: boolean;
render: boolean;
```

### Callback Props | 回调属性

```typescript
// ✅ Good: Use "on" prefix
onClick?: () => void;
onSubmit?: (data: FormData) => void;
onChange?: (value: string) => void;

// ❌ Bad: No clear indicator
click?: () => void;
submit?: (data: FormData) => void;
```

### Style Props | 样式属性

```typescript
// ✅ Good: Clear naming
className?: string;
variant?: 'primary' | 'secondary';
size?: 'sm' | 'md' | 'lg';

// ❌ Bad: Avoid "style" prop for variants
style?: string;  // Too generic
```

---

## 🎯 Required vs Optional Props | 必需 vs 可选属性

### Guidelines | 指南

**Required Props** (no `?`):
- Essential data for component to function
- Must be provided by parent

```typescript
export interface Props {
	title: string;        // ✅ Required
	userId: string;       // ✅ Required
}
```

**Optional Props** (with `?`):
- Enhancement or customization
- Has sensible defaults

```typescript
export interface Props {
	title: string;
	description?: string;     // ✅ Optional
	theme?: 'light' | 'dark'; // ✅ Optional with default
}

const { title, description, theme = 'light' } = Astro.props;
```

---

## 📚 JSDoc Documentation | JSDoc 文档

### Required Documentation | 必需文档

```typescript
/**
 * Component description
 * 组件描述
 *
 * @component
 * @example
 * ```astro
 * <Component prop="value" />
 * ```
 */
export interface Props {
	/** Prop description */
	prop1: string;

	/**
	 * Multi-line description
	 * for complex props
	 * @default 'default-value'
	 */
	prop2?: string;

	/** @deprecated Use newProp instead */
	oldProp?: string;
}
```

### Documentation Tags | 文档标签

- `@component` - Mark as component documentation
- `@example` - Usage example
- `@default` - Default value
- `@deprecated` - Deprecated prop
- `@see` - Related documentation

---

## 🔄 Migration Checklist | 迁移检查清单

For migrating existing components:

- [ ] 1. Add `export interface Props`
- [ ] 2. Document all props with JSDoc
- [ ] 3. Specify required vs optional
- [ ] 4. Add `@default` for optional props
- [ ] 5. Use TypeScript types from `~/types`
- [ ] 6. Add usage `@example`
- [ ] 7. Test with strict TypeScript
- [ ] 8. Update component documentation

---

## 📊 Priority Components | 优先级组件

根据 ROADMAP.md,以下组件应优先添加 Props 接口:

### P0 - Critical (Week 3-4)
- [ ] `Hero.astro` - 首页 Hero 区域
- [ ] `Header.astro` - 导航栏
- [ ] `Footer.astro` - 页脚
- [ ] `Features.astro` - 特性展示
- [ ] `Curriculum.astro` - 课程体系

### P1 - High (Week 5-6)
- [ ] `BlogCard.astro` - 博客卡片
- [ ] `BlogList.astro` - 博客列表
- [ ] `Pricing.astro` - 价格表
- [ ] `CallToAction.astro` - 行动召唤
- [ ] `Stats.astro` - 数据统计

### P2 - Medium (Week 7-8)
- [ ] All remaining widgets
- [ ] All blog components
- [ ] All core components

---

## 🛠️ Tools & Automation | 工具与自动化

### TypeScript Type Check | TypeScript 类型检查

```bash
# Check for type errors
npm run build

# Watch mode
npx astro check --watch
```

### Generate Props Documentation | 生成 Props 文档

Future: Use TypeDoc or similar tools to auto-generate props documentation.

---

## ❌ Common Mistakes | 常见错误

### 1. Missing Props Interface

```astro
---
// ❌ Bad: No Props interface
const { title, description } = Astro.props;
---

---
// ✅ Good: Props interface defined
export interface Props {
	title: string;
	description?: string;
}

const { title, description } = Astro.props;
---
```

### 2. Using `any` Type

```typescript
// ❌ Bad: any type defeats TypeScript
data: any;

// ✅ Good: Specific type
data: BlogPost | null;
```

### 3. Inconsistent Destructuring

```astro
---
export interface Props {
	title: string;
	variant?: 'primary' | 'secondary';
}

// ❌ Bad: Accessing via Astro.props
const variant = Astro.props.variant || 'primary';

// ✅ Good: Destructure with default
const { title, variant = 'primary' } = Astro.props;
---
```

---

## 📖 Examples by Category | 分类示例

### Layout Components | 布局组件

```typescript
// BaseLayout.astro
export interface Props {
	title: string;
	description: string;
	canonical?: string;
	image?: string;
	noindex?: boolean;
}
```

### Widget Components | Widget 组件

```typescript
// Hero.astro
export interface Props {
	title: string;
	subtitle?: string;
	ctaPrimary?: {
		text: string;
		href: string;
	};
	ctaSecondary?: {
		text: string;
		href: string;
	};
	background?: 'video' | 'image' | 'gradient';
}
```

### Blog Components | 博客组件

```typescript
// BlogGrid.astro
export interface Props {
	posts: BlogPost[];
	columns?: 2 | 3 | 4;
	showExcerpt?: boolean;
	showImage?: boolean;
}
```

---

## 🚀 Next Steps | 下一步

1. Review OPENSPEC.md Component Standards (Section 5)
2. Start with P0 components
3. Add Props interfaces gradually
4. Run `npm run build` to catch type errors
5. Update component documentation

---

**References | 参考资料:**
- [OPENSPEC.md](../OPENSPEC.md) - Section 5: Component Standards
- [TypeScript Handbook - Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [Astro Docs - TypeScript](https://docs.astro.build/en/guides/typescript/)

---

**Last Updated**: 2025-11-19
**Maintained by**: Development Team
