# Open Wisdom Lab 网站开发规范

## 项目概述

猫头鹰实验室（Open Wisdom Lab）官网，基于 Astro 框架构建的静态网站，支持中英文双语。

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

### 代码审查检查清单

- [ ] 所有用户可见文本都有 `data-i18n` 属性
- [ ] 翻译键在 `zh` 和 `en` 中都存在
- [ ] 翻译键命名符合规范
- [ ] 亮色模式和暗色模式的文本都有翻译
- [ ] 没有在组件中硬编码文本
- [ ] 数据数组使用翻译键而非硬编码文本

## 其他开发规范

### 文件结构

```
src/
├── components/
│   ├── atoms/        # 原子组件
│   ├── core/         # 核心组件
│   ├── ui/           # UI 组件
│   └── widgets/      # 功能组件
├── layouts/          # 布局组件
├── pages/            # 页面文件
├── i18n/             # 国际化配置
├── scripts/          # 客户端脚本
└── assets/           # 静态资源
```

### 样式规范

- 使用 Tailwind CSS
- 支持亮色/暗色主题切换
- 暗色模式使用 `dark:` 前缀

### 组件开发

- 优先使用 Astro 组件 (`.astro`)
- 需要客户端交互时使用 React 组件
- 使用 `client:visible` 或 `client:load` 指令加载交互组件
