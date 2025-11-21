# Open Wisdom Lab Website | 猫头鹰实验室官网

基于 Astro 5.0 + Tailwind CSS 构建的创生教育平台官网。

A generative education platform website built with Astro 5.0 + Tailwind CSS.

## 🦉 About | 关于

猫头鹰实验室（OWL - Open Wisdom Lab）是一个充满想象力、创造力和探索乐趣的创新教育空间。基于创生教育理念，我们致力于培养 AI 时代具有创新精神和跨学科思维的未来人才。

Open Wisdom Lab (OWL) is an innovative educational space filled with imagination, creativity, and the joy of exploration. Based on generative education principles, we are committed to cultivating future talents with innovative spirit and interdisciplinary thinking for the AI era.

## 🚀 Tech Stack | 技术栈

### Core | 核心

- **[Astro](https://astro.build/)** 5.12.9 - 静态网站生成框架 / Static Site Generator
- **[TypeScript](https://www.typescriptlang.org/)** 5.7.2 - 类型安全的 JavaScript / Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** 3.4.17 - 原子化 CSS 框架 / Utility-first CSS
- **[React](https://react.dev/)** 19.2.0 - 交互组件 / Interactive Components
- **[MDX](https://mdxjs.com/)** 4.1.0 - Markdown + JSX

### UI & Animation | 界面与动画

- **[Framer Motion](https://www.framer.com/motion/)** 12.23.24 - 动画库 / Animation Library
- **[AOS](https://michalsnik.github.io/aos/)** 2.3.4 - 滚动动画 / Scroll Animations
- **[astro-icon](https://www.astroicon.dev/)** 1.1.1 - 图标系统 / Icon System

### Media | 媒体处理

- **[Cloudinary](https://cloudinary.com/)** 2.8.0 - 图片 CDN / Image CDN
- **[Unpic](https://unpic.pics/)** 3.18.0 - 图片优化 / Image Optimization
- **[Sharp](https://sharp.pixelplumbing.com/)** 0.33.5 - 图片处理 / Image Processing

### Code Quality | 代码质量

- **[ESLint](https://eslint.org/)** 9.17.0 - 代码检查 / Linting
- **[Prettier](https://prettier.io/)** 3.4.2 - 代码格式化 / Formatting
- **[TypeScript ESLint](https://typescript-eslint.io/)** 8.18.2 - TypeScript 规则

## 📦 Quick Start | 快速开始

### Prerequisites | 前置要求

- Node.js 18.17.1+ / 20.3.0+ / 21.0.0+
- npm or pnpm

### Installation | 安装

```bash
# 克隆仓库 / Clone repository
git clone https://github.com/openwisdomlab/website.git
cd website

# 安装依赖 / Install dependencies
npm install
```

### Development | 开发

```bash
# 启动开发服务器 / Start dev server
npm run dev

# 访问 / Visit: http://localhost:4321
```

### Production | 生产构建

```bash
# 构建 / Build
npm run build

# 预览构建结果 / Preview build
npm run preview
```

### Code Quality | 代码检查

```bash
# 运行所有检查 / Run all checks
npm run check

# 自动修复 / Auto fix
npm run fix

# 格式化代码 / Format code
npm run format
```

## 📁 Project Structure | 项目结构

```
/
├── public/              # 静态资源 / Static assets
├── src/
│   ├── assets/          # 图片和样式 / Images and styles
│   ├── components/      # 组件 / Components
│   │   ├── atoms/       # 原子组件 / Atomic components
│   │   ├── blog/        # 博客组件 / Blog components
│   │   ├── core/        # 核心组件 / Core components
│   │   ├── ui/          # UI 组件 / UI components
│   │   └── widgets/     # 页面板块 / Page widgets
│   ├── i18n/            # 国际化 / Internationalization
│   ├── layouts/         # 布局 / Layouts
│   ├── pages/           # 路由页面 / Route pages
│   ├── types/           # TypeScript 类型 / Types
│   └── utils/           # 工具函数 / Utilities
├── data/blog/           # 博客内容 / Blog content
├── docs/                # 项目文档 / Documentation
├── astro.config.mjs     # Astro 配置 / Config
├── tailwind.config.cjs  # Tailwind 配置 / Config
└── tsconfig.json        # TypeScript 配置 / Config
```

## 📚 Documentation | 文档

所有项目文档位于 [`docs/`](./docs/) 目录：

All documentation is in the [`docs/`](./docs/) directory:

| Document | Description | 说明 |
|----------|-------------|------|
| [ROADMAP.md](docs/ROADMAP.md) | Product Roadmap | 产品路线图 |
| [OPENSPEC.md](docs/OPENSPEC.md) | Development Standards | 全局开发规范 |
| [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) | Design System | 设计系统规范 |
| [DEVELOPMENT.md](docs/DEVELOPMENT.md) | Development Guide | 开发指南 |
| [DEPLOYMENT.md](docs/DEPLOYMENT.md) | Deployment Guide | 部署指南 |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | Architecture | 架构文档 |

## 🌐 Features | 功能特性

- ✅ **双语支持** / Bilingual Support (中文/English)
- ✅ **响应式设计** / Responsive Design
- ✅ **深色模式** / Dark Mode
- ✅ **SEO 优化** / SEO Optimized
- ✅ **高性能** / High Performance (Lighthouse 90+)
- ✅ **无障碍** / Accessibility (WCAG 2.1 AA)
- ✅ **丰富动效** / Rich Animations
- ✅ **博客系统** / Blog System

## 🚢 Deployment | 部署

项目部署在 Vercel，推送到 `main` 分支自动部署。

The project is deployed on Vercel, auto-deploys on push to `main` branch.

- **Production | 生产环境**: https://website-owlab.vercel.app
- **Guide | 详细指南**: [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)

## 🤝 Contributing | 贡献

欢迎提交 Issue 或 Pull Request！

Contributions are welcome! Feel free to submit Issues or Pull Requests.

请阅读 [OPENSPEC.md](docs/OPENSPEC.md) 了解代码规范。

Please read [OPENSPEC.md](docs/OPENSPEC.md) for coding standards.

## 📄 License | 许可证

MIT License

## 🔗 Links | 链接

- **Website | 网站**: https://website-owlab.vercel.app
- **GitHub**: https://github.com/openwisdomlab
- **Documentation | 文档**: [docs/](./docs/)

---

Made with ❤️ by Open Wisdom Lab Team
