# 图片上传功能使用指南

## 📸 功能概述

本项目已集成基于 Cloudinary 的图片上传功能，支持：

- ✅ 拖拽上传
- ✅ 图片预览
- ✅ 文件类型和大小验证
- ✅ 中英文双语支持
- ✅ 自动优化和 CDN 加速
- ✅ 上传进度显示

---

## 🚀 快速开始

### 1. 配置 Cloudinary 凭证

#### 获取 Cloudinary 账号

1. 访问 [Cloudinary](https://cloudinary.com/)
2. 注册免费账号（提供 25GB 存储空间和每月 25GB 流量）
3. 登录后进入 [Dashboard](https://console.cloudinary.com/)
4. 复制以下凭证：
   - **Cloud Name**
   - **API Key**
   - **API Secret**

#### 设置环境变量

1. 在项目根目录创建 `.env` 文件：

```bash
cp .env.example .env
```

2. 编辑 `.env` 文件，填入你的 Cloudinary 凭证：

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

⚠️ **重要**: `.env` 文件已在 `.gitignore` 中，不会被提交到 Git，确保凭证安全。

---

## 📦 安装依赖

Cloudinary SDK 已经安装，如果需要重新安装：

```bash
npm install cloudinary
```

---

## 💻 使用方法

### 在页面中使用

```astro
---
import ImageUpload from '~/components/forms/ImageUpload.astro';
---

<ImageUpload lang="zh" onUploadComplete="handleUploadComplete" />

<script>
  function handleUploadComplete(url) {
    console.log('上传完成，图片URL:', url);
    // 在这里处理上传完成后的逻辑
    // 例如: 更新表单字段、显示通知等
  }
</script>
```

### 组件属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `lang` | `'en' \| 'zh'` | `'en'` | 界面语言 |
| `onUploadComplete` | `string` | - | 上传完成回调函数名（可选） |

---

## 🎯 示例页面

访问 `/upload-demo` 查看完整的使用示例和文档。

---

## 📁 文件结构

```
src/
├── pages/
│   ├── api/
│   │   └── upload.ts              # 上传 API 端点
│   └── upload-demo.astro          # 示例页面
└── components/
    └── forms/
        └── ImageUpload.astro      # 上传组件
```

---

## 🔒 安全特性

### API 端点验证 (`/api/upload.ts`)

- ✅ 文件类型验证: 仅允许 JPEG, PNG, GIF, WebP
- ✅ 文件大小限制: 最大 10MB
- ✅ 环境变量检查: 确保 Cloudinary 已正确配置
- ✅ 错误处理: 详细的错误信息返回

### 前端验证 (`ImageUpload.astro`)

- ✅ 客户端文件类型检查
- ✅ 客户端文件大小检查
- ✅ 上传状态显示
- ✅ 错误提示

---

## 🌐 API 端点

### POST `/api/upload`

**请求**:
- Content-Type: `multipart/form-data`
- Body: `file` (图片文件)

**响应**:

成功 (200):
```json
{
  "success": true,
  "data": {
    "url": "https://res.cloudinary.com/...",
    "publicId": "website-uploads/...",
    "width": 1920,
    "height": 1080,
    "format": "jpg"
  }
}
```

失败 (400/500):
```json
{
  "success": false,
  "error": "错误信息"
}
```

---

## 🎨 自定义

### 修改上传文件夹

编辑 `src/pages/api/upload.ts`:

```typescript
cloudinary.uploader.upload_stream({
  folder: 'your-custom-folder',  // 修改这里
  resource_type: 'image',
}, ...)
```

### 修改文件大小限制

编辑 `src/pages/api/upload.ts` 和 `src/components/forms/ImageUpload.astro`:

```typescript
const MAX_SIZE = 20 * 1024 * 1024; // 改为 20MB
```

### 修改允许的文件类型

编辑 `src/pages/api/upload.ts` 和 `src/components/forms/ImageUpload.astro`:

```typescript
const ALLOWED_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/svg+xml',  // 添加 SVG 支持
];
```

---

## 🐛 故障排除

### 上传失败: "Cloudinary is not configured"

**原因**: 环境变量未正确设置

**解决方案**:
1. 检查 `.env` 文件是否存在
2. 确认环境变量名称拼写正确
3. 重启开发服务器: `npm run dev`

### 上传失败: "Invalid file type"

**原因**: 文件类型不在允许列表中

**解决方案**:
- 确保上传的是图片文件 (JPEG, PNG, GIF, WebP)
- 或修改 `ALLOWED_TYPES` 列表

### 上传失败: "File size exceeds maximum limit"

**原因**: 文件大小超过 10MB

**解决方案**:
- 压缩图片后再上传
- 或修改 `MAX_SIZE` 限制

---

## 📚 相关资源

- [Cloudinary 文档](https://cloudinary.com/documentation)
- [Cloudinary Node.js SDK](https://cloudinary.com/documentation/node_integration)
- [Astro API Routes](https://docs.astro.build/en/core-concepts/endpoints/)

---

## 🔄 在博客文章中使用上传的图片

上传成功后，你会获得一个 Cloudinary URL，可以在博客文章的 frontmatter 中使用：

```yaml
---
title: '我的文章'
description: '文章描述'
image: 'https://res.cloudinary.com/your-cloud/image/upload/v123456/website-uploads/abc123.jpg'
---
```

---

## 💡 最佳实践

1. **图片优化**: Cloudinary 自动优化图片，但建议上传前适当压缩
2. **命名规范**: 使用有意义的文件名，便于管理
3. **备份**: 定期备份 Cloudinary 中的图片
4. **配额监控**: 注意 Cloudinary 免费套餐的使用量限制

---

## 📝 License

本功能遵循项目整体许可证。
