# Activity Images Setup

## 图片存放说明

活动照片需要手动保存到以下目录：

```
src/assets/images/activities/
```

## 提供的活动图片

以下是需要添加的活动照片（来自对话中的附件）：

1. **activity-1.jpg** - 学生在电脑前进行实验学习
2. **activity-2.jpg** - 教育体系讲座和展示活动
3. **activity-3.jpg** - 学生在实验室进行科学研究
4. **activity-4.jpg** - 团队协作和创新设备展示
5. **activity-5.jpg** - 学生使用3D打印机等创新设备

## 如何更新图片

1. 创建目录（如果不存在）：
   ```bash
   mkdir -p src/assets/images/activities
   ```

2. 将图片保存到该目录

3. 更新 `ActivityGallery.astro` 组件中的 `defaultImages` 数组：

```javascript
const defaultImages = [
	{ src: '/src/assets/images/activities/activity-1.jpg', alt: '学生进行科学实验' },
	{ src: '/src/assets/images/activities/activity-2.jpg', alt: '教育体系讲座' },
	{ src: '/src/assets/images/activities/activity-3.jpg', alt: '实验室研究项目' },
	{ src: '/src/assets/images/activities/activity-4.jpg', alt: '团队协作活动' },
	{ src: '/src/assets/images/activities/activity-5.jpg', alt: '3D打印和创新设备展示' },
];
```

## 使用方法

活动图片库已经添加到首页。你也可以在其他页面中使用：

```astro
---
import ActivityGallery from '~/components/widgets/ActivityGallery.astro';
---

<ActivityGallery
	title="实验室活动"
	subtitle="探索、创造、成长的精彩瞬间"
	variant="grid"
/>
```

支持两种布局模式：
- `variant="grid"` - 网格布局（默认）
- `variant="masonry"` - 瀑布流布局
