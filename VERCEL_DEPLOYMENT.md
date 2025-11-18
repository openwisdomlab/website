# Vercel 部署指南

本项目支持通过多种方式部署到 Vercel。

## 方案 1：通过 Vercel 网页界面部署（推荐）

这是最简单的方式，适合快速开始：

### 步骤

1. **访问 Vercel**
   - 打开 https://vercel.com/new
   - 使用 GitHub 账号登录

2. **导入仓库**
   - 点击 "Import Git Repository"
   - 如果还没授权 GitHub，点击 "Connect GitHub Account"
   - 搜索并选择 `openwisdomlab/website` 仓库

3. **配置项目**
   项目会自动检测配置（从 `vercel.json`），无需修改：
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **部署**
   - 点击 "Deploy" 按钮
   - 等待几分钟，项目将自动构建和部署

5. **获取部署地址**
   - 部署完成后，你会得到一个 `.vercel.app` 域名
   - 例如：`your-project-name.vercel.app`

### 自动部署设置

部署成功后，Vercel 会自动配置：
- ✅ **生产部署**：每次 push 到主分支自动部署
- ✅ **预览部署**：每个 Pull Request 都会获得独立的预览链接
- ✅ **自动构建**：检测到代码变化自动重新构建

## 方案 2：通过 GitHub Actions 自动部署

如果你想更多控制部署流程，可以使用 GitHub Actions。

### 前置准备

你需要在 GitHub 仓库中设置以下 Secrets：

1. **获取 Vercel Token**
   - 访问 https://vercel.com/account/tokens
   - 点击 "Create Token"
   - 复制生成的 token

2. **获取 Vercel Org ID 和 Project ID**

   首先，在 Vercel 网页界面创建项目（按照方案 1 的步骤 1-4）

   然后，在本地项目目录运行：
   ```bash
   # 如果已登录 Vercel CLI
   vercel link

   # 查看 .vercel/project.json
   cat .vercel/project.json
   ```

   或者直接从 Vercel Dashboard 获取：
   - **Org ID**: 在 https://vercel.com/account 的 "Your ID" 中
   - **Project ID**: 在项目设置页面 URL 中，格式为 `vercel.com/<org>/<project>/settings`

3. **在 GitHub 中添加 Secrets**
   - 访问 `https://github.com/openwisdomlab/website/settings/secrets/actions`
   - 点击 "New repository secret"
   - 添加以下三个 secrets：
     - `VERCEL_TOKEN`: 你的 Vercel Token
     - `VERCEL_ORG_ID`: 你的组织 ID
     - `VERCEL_PROJECT_ID`: 你的项目 ID

### GitHub Actions 工作流

工作流文件已创建在 `.github/workflows/vercel-deploy.yml`

工作流会在以下情况自动运行：
- Push 到 `main` 或 `master` 分支 → 生产部署
- 创建 Pull Request → 预览部署

## 方案 3：使用 Vercel CLI 手动部署

如果网络环境支持，可以使用命令行部署：

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录
vercel login

# 首次部署（会引导你创建项目）
vercel

# 生产环境部署
vercel --prod
```

## 自定义域名配置

如果你想使用自己的域名（例如 `owlab.org`）：

1. 访问 Vercel Dashboard → 你的项目 → Settings → Domains
2. 点击 "Add Domain"
3. 输入你的域名
4. 按照提示在你的域名提供商处添加 DNS 记录

## 项目配置说明

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

这个配置文件包含：
- ✅ Astro 框架自动识别
- ✅ 构建命令和输出目录
- ✅ 静态资源缓存优化（1年）
- ✅ 安全头配置（XSS、CSRF 防护）

### 环境变量

如果你的项目需要环境变量：

1. 在 Vercel Dashboard → Project → Settings → Environment Variables
2. 添加所需的环境变量
3. 可以为不同环境（Production、Preview、Development）设置不同的值

## 故障排除

### 构建失败

如果构建失败，检查：
1. Node.js 版本（需要 >= 18.17.1）
2. package.json 中的依赖是否正确
3. 在本地运行 `npm run build` 是否成功

### 部署后页面显示异常

1. 检查 `dist` 目录是否正确生成
2. 查看 Vercel 构建日志
3. 确认所有静态资源路径正确

### 域名问题

- **website-owlab.vercel.app 被占用**：使用其他名称或联系 Vercel 支持
- **自定义域名不工作**：检查 DNS 记录是否正确配置

## 推荐方案

**对于大多数用户，我们推荐使用方案 1（Vercel 网页界面）**：
- ✅ 最简单，无需本地配置
- ✅ 自动配置 CI/CD
- ✅ 开箱即用的预览部署
- ✅ 内置性能监控和分析

部署完成后，你只需要 push 代码到 GitHub，Vercel 会自动处理剩下的一切！

## 相关链接

- [Vercel 文档](https://vercel.com/docs)
- [Astro 部署指南](https://docs.astro.build/en/guides/deploy/vercel/)
- [Vercel CLI 文档](https://vercel.com/docs/cli)
