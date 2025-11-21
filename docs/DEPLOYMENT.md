# 部署指南 | Deployment Guide

**最后更新**: 2025-11-21
**生产环境**: https://website-owlab.vercel.app
**GitHub 仓库**: https://github.com/openwisdomlab/website

---

## 目录

- [快速开始](#快速开始)
- [Vercel 部署方案](#vercel-部署方案)
- [本地开发与构建](#本地开发与构建)
- [自动部署机制](#自动部署机制)
- [故障排除](#故障排除)
- [技术细节](#技术细节)

---

## 快速开始

### 技术栈

| 技术 | 版本 |
|------|------|
| Astro | 5.12.9 |
| Tailwind CSS | 3.4.17 |
| TypeScript | 5.7.2 |
| Node.js | ^18.17.1 \|\| ^20.3.0 \|\| >= 21.0.0 |
| 部署平台 | Vercel |

---

## Vercel 部署方案

### 方案 1：网页界面部署（推荐）

最简单的方式，适合快速开始：

1. **登录 Vercel**
   - 访问 https://vercel.com/new
   - 使用 GitHub 账号登录

2. **导入仓库**
   - 点击 "Import Git Repository"
   - 搜索并选择 `openwisdomlab/website` 仓库

3. **配置项目**（自动识别，无需修改）
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **部署**
   - 点击 "Deploy" 按钮
   - 等待构建完成

### 方案 2：GitHub Actions 自动部署

如需更多控制，配置 GitHub Actions：

**前置准备 - 设置 Secrets：**

1. 获取 Vercel Token: https://vercel.com/account/tokens
2. 获取 Org ID 和 Project ID：
   ```bash
   vercel link
   cat .vercel/project.json
   ```
3. 在 GitHub 仓库添加 Secrets：
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

工作流文件位置：`.github/workflows/vercel-deploy.yml`

### 方案 3：Vercel CLI 手动部署

```bash
# 安装 CLI
npm install -g vercel

# 登录
vercel login

# 首次部署
vercel

# 生产环境部署
vercel --prod
```

---

## 本地开发与构建

### 安装依赖

```bash
npm install
```

### 开发服务器

```bash
npm run dev
# 访问 http://localhost:4321
```

### 构建与预览

```bash
npm run build    # 构建项目
npm run preview  # 预览构建结果
```

### 代码检查

```bash
npm run check    # 运行 Astro、ESLint 和 Prettier 检查
npm run fix      # 自动修复 lint 问题
npm run format   # 格式化代码
```

---

## 自动部署机制

### Git 集成

Vercel 与 GitHub 仓库集成后：

- **主分支部署**：push 到 `main` 自动部署到生产环境
- **预览部署**：每个 Pull Request 获得独立预览 URL
- **无需手动操作**

```
Push to GitHub → Vercel 检测变更 → 自动构建 → 自动部署
```

### 更新网站步骤

**小改动 - 直接推送：**
```bash
git add .
git commit -m "描述更改"
git push origin main
# Vercel 自动部署
```

**大改动 - Pull Request：**
```bash
git checkout -b feature/your-feature
git add .
git commit -m "描述更改"
git push origin feature/your-feature
# 在 GitHub 创建 PR → Vercel 创建预览 → 合并后自动部署
```

---

## 故障排除

### Production 显示旧版本

1. **检查 Production 分支设置**
   - Vercel Settings → Git → Production Branch 设为 `main`

2. **手动触发部署**
   - Deployments → Redeploy → 选择 "Rebuild"

3. **清除缓存**
   - 浏览器无痕模式访问
   - 或强制刷新 (Ctrl + Shift + R)

### 构建失败

1. 查看 Vercel 构建日志
2. 确保本地 `npm run build` 成功
3. 检查 Node.js 版本符合要求

### 部署成功但页面没变

1. 等待 CDN 缓存更新（几分钟）
2. 清除浏览器缓存
3. 在 Vercel 中清除缓存

### 回滚到之前版本

1. Vercel Dashboard → Deployments
2. 找到目标部署 → "..." → "Promote to Production"

---

## 技术细节

### vercel.json 配置

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "astro"
}
```

### 环境变量

在 Vercel Dashboard → Project → Settings → Environment Variables 添加：
- `PUBLIC_SITE_URL`: 网站公开 URL
- 其他自定义配置...

### 自定义域名

1. Vercel Dashboard → Project → Settings → Domains
2. 添加域名并配置 DNS 记录

---

## 相关链接

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vercel 文档](https://vercel.com/docs)
- [Astro 部署指南](https://docs.astro.build/en/guides/deploy/vercel/)
- [项目仓库](https://github.com/openwisdomlab/website)
- [生产环境](https://website-owlab.vercel.app)
