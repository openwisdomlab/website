# Production 部署更新指南

## 问题诊断

如果 Vercel Production 环境显示的是旧版本（如 2022年），而代码库已经更新，说明：
1. Vercel 自动部署未正确配置
2. Production 分支设置不正确
3. GitHub 集成可能存在问题

## 解决方案

### 方案一：在 Vercel 手动触发部署（最快）

1. **登录 Vercel Dashboard**
   - 访问 https://vercel.com
   - 使用 GitHub 账号登录（需要有 `openwisdomlab/website` 仓库访问权限）

2. **找到项目**
   - 在 Dashboard 中找到 `website-owlab` 项目
   - 点击进入项目详情页

3. **检查部署设置**
   - 点击 "Settings" 标签
   - 进入 "Git" 设置
   - 确认 **Production Branch** 设置为 `main`
   - 如果不是，修改为 `main` 并保存

4. **手动触发部署**
   - 点击 "Deployments" 标签
   - 点击右上角的 "Redeploy" 按钮，选择最新的部署
   - 或者点击 "Deploy" → "main" 分支 → "Deploy"
   - 选择 "Rebuild"（不要使用缓存，确保完全重新构建）

5. **等待部署完成**
   - 查看构建日志，确保没有错误
   - 构建成功后，Production 环境会自动更新
   - 访问 https://website-owlab.vercel.app 确认更新

### 方案二：推送更新到 main 分支触发自动部署

如果 Vercel 已正确配置但没有触发，可以通过推送代码来触发：

```bash
# 1. 切换到 main 分支
git checkout main

# 2. 确保代码是最新的
git pull origin main

# 3. 创建一个小的更新（如果需要）
# 例如：更新版本号或添加注释

# 4. 提交并推送
git add .
git commit -m "chore: trigger production deployment"
git push origin main
```

推送后，Vercel 应该会自动检测到变更并部署。

### 方案三：检查并修复 Vercel GitHub 集成

如果自动部署始终不工作：

1. **检查 GitHub App 权限**
   - 访问 GitHub 仓库设置
   - 进入 "Settings" → "Integrations" → "GitHub Apps"
   - 确认 Vercel 有访问权限

2. **重新连接 Vercel**
   - 在 Vercel 项目设置中
   - 进入 "Git" 设置
   - 点击 "Disconnect" 断开连接
   - 重新连接 GitHub 仓库
   - 确保选择正确的仓库和分支

3. **配置 Webhook**
   - 在 GitHub 仓库设置中
   - 进入 "Settings" → "Webhooks"
   - 确认有 Vercel 的 webhook
   - URL 应该是 `https://api.vercel.com/...`
   - 事件应该包括 "push" 和 "pull request"

## 验证部署

部署完成后，执行以下检查：

1. **访问生产环境**
   - URL: https://website-owlab.vercel.app
   - 检查页面内容是否是最新版本

2. **查看 Vercel 部署历史**
   - 在 "Deployments" 标签中
   - 确认最新的 Production 部署日期是今天
   - 查看构建日志确保没有警告或错误

3. **检查构建信息**
   - 确认使用的是正确的 commit hash
   - 确认 Node.js 版本符合要求（见 package.json）
   - 确认 Astro 版本是 5.12.9

## 当前代码库状态

```bash
# 查看 main 分支最新提交
git log origin/main --oneline -5
```

最新提交应该包括：
- ✅ Astro 5.x 升级
- ✅ Vercel 自动部署配置
- ✅ 组件更新
- ✅ 部署文档

最新提交日期：**2025-11-19**

## 常见问题排查

### 部署失败

1. **检查构建日志**
   - 查看具体的错误信息
   - 常见问题：依赖安装失败、TypeScript 类型错误

2. **本地测试**
   ```bash
   npm install
   npm run build
   ```
   确保本地构建成功

### 部署成功但页面没变

1. **清除浏览器缓存**
   - 使用无痕模式访问
   - 或强制刷新（Ctrl + Shift + R）

2. **检查 CDN 缓存**
   - 等待几分钟让 CDN 更新
   - 或在 Vercel 中清除缓存

### Production 分支设置错误

如果 Vercel 配置的 Production 分支不是 `main`：
1. 进入项目设置 → Git
2. 修改 Production Branch 为 `main`
3. 保存并重新部署

## 技术细节

### Vercel 自动部署机制

- **触发条件**: 推送到配置的 Production 分支（应该是 `main`）
- **部署流程**:
  1. GitHub webhook 通知 Vercel
  2. Vercel 拉取最新代码
  3. 安装依赖: `npm install`
  4. 运行构建: `npm run build`
  5. 部署到 CDN
  6. 更新 Production URL

### vercel.json 配置

当前配置（vercel.json:1-37）:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro"
}
```

## 联系支持

如果以上方法都无法解决：

1. **查看 Vercel 文档**
   - https://vercel.com/docs/deployments

2. **联系 Vercel 支持**
   - 在 Vercel Dashboard 中使用支持聊天

3. **检查 GitHub Actions**
   - 如果有设置 CI/CD，检查是否有冲突

---

**最后更新**: 2025-11-18
**主分支**: main
**生产环境**: https://website-owlab.vercel.app
