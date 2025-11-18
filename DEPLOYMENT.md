# Vercel 部署文档

## 项目信息

- **项目名称**: Open Wisdom Lab Website
- **生产环境**: https://website-owlab.vercel.app
- **GitHub 仓库**: https://github.com/openwisdomlab/website

## Vercel 账号信息

### 登录方式
- 访问 [Vercel](https://vercel.com)
- 使用 **GitHub 账号登录**
- 需要使用有 `openwisdomlab/website` 仓库访问权限的 GitHub 账号

### 如何查找账号
1. 访问 https://vercel.com
2. 点击右上角 "Login"
3. 选择 "Continue with GitHub"
4. 使用你的 GitHub 账号登录
5. 登录后可以在 Dashboard 中看到 `website-owlab` 项目

---

## 首次部署流程

### 1. 前置条件
- 拥有 GitHub 账号并有仓库访问权限
- 已在 GitHub 上 fork 或拥有 `openwisdomlab/website` 仓库的权限

### 2. 在 Vercel 上创建项目

1. 登录 [Vercel](https://vercel.com)
2. 点击 "Add New Project"
3. 选择从 GitHub 导入
4. 授权 Vercel 访问你的 GitHub 账号
5. 选择 `openwisdomlab/website` 仓库
6. Vercel 会自动检测到这是 Astro 项目

### 3. 配置项目设置

Vercel 会自动识别 `vercel.json` 配置文件，以下是默认配置：

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "astro"
}
```

### 4. 环境变量（可选）

如果需要配置环境变量：
1. 在 Vercel 项目设置中找到 "Environment Variables"
2. 添加需要的环境变量，例如：
   - `PUBLIC_SITE_URL`: 网站的公开 URL
   - 其他自定义配置...

### 5. 部署

点击 "Deploy" 按钮，Vercel 会：
1. 克隆 GitHub 仓库
2. 安装依赖 (`npm install`)
3. 运行构建命令 (`npm run build`)
4. 部署到 CDN
5. 提供生产环境 URL

---

## 自动更新机制

### Git 集成自动部署

Vercel 已与 GitHub 仓库集成，**自动部署**机制如下：

#### 主分支部署
- 当代码推送到 **主分支**（main/master）时
- Vercel 自动触发部署流程
- 构建成功后自动更新到生产环境
- **无需手动操作**

#### 部署流程
```
Push to GitHub → Vercel 检测到变更 → 自动构建 → 自动部署 → 更新生产环境
```

#### 其他分支
- 推送到其他分支会创建 **预览部署**
- 每个 Pull Request 都会获得独立的预览 URL
- 预览环境不会影响生产环境

### 查看部署状态

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 选择 `website-owlab` 项目
3. 在 "Deployments" 标签中查看：
   - 部署历史
   - 构建日志
   - 部署状态（成功/失败）
   - 预览链接

### 手动触发部署

如果需要手动重新部署：

1. 进入 Vercel 项目页面
2. 找到最新的部署
3. 点击 "Redeploy" 按钮
4. 选择 "Use existing Build Cache" 或 "Rebuild"

---

## 部署命令（本地）

### 本地开发
```bash
npm install      # 安装依赖
npm run dev      # 启动开发服务器
```

### 本地构建测试
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

## 更新网站的步骤

### 方式一：直接推送到主分支（推荐用于小改动）

```bash
# 1. 修改代码
# 2. 提交更改
git add .
git commit -m "描述你的更改"

# 3. 推送到 GitHub
git push origin main

# 4. Vercel 自动部署（无需操作）
```

### 方式二：通过 Pull Request（推荐用于大改动）

```bash
# 1. 创建新分支
git checkout -b feature/your-feature

# 2. 修改代码并提交
git add .
git commit -m "描述你的更改"

# 3. 推送到 GitHub
git push origin feature/your-feature

# 4. 在 GitHub 上创建 Pull Request
# 5. Vercel 会为 PR 创建预览部署
# 6. 审核通过后合并到主分支
# 7. Vercel 自动部署到生产环境
```

---

## 常见问题

### Q: 我忘记了使用哪个账号部署的？
**A**: 使用有 `openwisdomlab` GitHub 组织访问权限的账号登录 Vercel，在 Dashboard 中可以看到所有项目。

### Q: Production 环境显示旧版本怎么办？
**A**: 如果 Production 环境没有自动更新到最新代码：
1. **检查 Production 分支设置**
   - 进入 Vercel 项目设置 → Git
   - 确认 "Production Branch" 设置为 `main`
2. **手动触发部署**
   - 进入 "Deployments" 标签
   - 点击 "Redeploy" 或直接部署 `main` 分支
   - 选择 "Rebuild" 完全重新构建
3. **详细步骤**: 查看 [PRODUCTION_DEPLOYMENT.md](./PRODUCTION_DEPLOYMENT.md)

### Q: 如何回滚到之前的版本？
**A**:
1. 在 Vercel Dashboard 的 "Deployments" 中找到之前的部署
2. 点击该部署右侧的 "..." 菜单
3. 选择 "Promote to Production"

### Q: 部署失败怎么办？
**A**:
1. 查看 Vercel 的构建日志
2. 检查是否有依赖问题或构建错误
3. 确保本地 `npm run build` 能够成功
4. 检查 Node.js 版本是否符合要求（见 package.json engines）

### Q: 如何设置自定义域名？
**A**:
1. 在 Vercel 项目设置中找到 "Domains"
2. 添加你的自定义域名
3. 按照 Vercel 的指引配置 DNS 记录

---

## 技术栈

- **框架**: Astro 5.12.9
- **样式**: Tailwind CSS 3.4.17
- **语言**: TypeScript 5.7.2
- **部署**: Vercel
- **Node 版本**: ^18.17.1 || ^20.3.0 || >= 21.0.0

---

## 相关链接

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vercel 文档](https://vercel.com/docs)
- [Astro 文档](https://docs.astro.build)
- [项目仓库](https://github.com/openwisdomlab/website)
- [生产环境](https://website-owlab.vercel.app)

---

**最后更新**: 2025-11-18
