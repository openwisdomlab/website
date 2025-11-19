# Product Roadmap 2025-2026 | 产品路线图

**Version**: 1.0.0
**Last Updated**: 2025-11-19
**Project**: Open Wisdom Lab Website
**Related Documents**: OPENSPEC.md, CONSISTENCY_AUDIT.md, CONTENT_GAPS.md

---

## 🎯 Vision & Goals | 愿景与目标

### 长期愿景 (2026)

打造一个**世界级的创生教育平台**,通过科技赋能教育,培养AI时代的创新人才。

**核心目标:**
1. 📚 建立完整的在线+线下混合教育体系
2. 🌍 服务10,000+学员和家庭
3. 🏆 成为创新教育领域的标杆品牌
4. 🤝 建立教育生态系统和合作网络

### 2025 年度目标

**Q4 2025 (当前)**
- ✅ 完成基础网站搭建 (已完成)
- ✅ 实现中英双语支持 (已完成)
- 🎯 **完善核心内容和功能 (进行中)**
- 🎯 **统一代码规范和设计系统**

**2025 Remaining Goals:**
- 🎯 上线完整的课程展示系统
- 🎯 实现在线报名和咨询功能
- 🎯 发布30+优质博客文章
- 🎯 建立品牌认知和社交媒体影响力

---

## 📅 Development Roadmap | 开发路线图

### Phase 1: 标准化与规范化 (Current - 4 weeks)
**Timeline**: Week 1-4 (2025-11-19 ~ 2025-12-17)
**Status**: 🚧 In Progress

#### Week 1-2: 代码标准化
- [x] 创建 OPENSPEC.md 全局规范
- [x] 创建 CONSISTENCY_AUDIT.md 一致性审核
- [x] 创建 CONTENT_GAPS.md 内容缺口分析
- [x] 创建 ROADMAP.md 产品路线图
- [ ] 创建 DESIGN_SYSTEM.md 设计系统文档
- [ ] 配置开发工具链
  - [ ] Prettier + ESLint 自动化
  - [ ] Pre-commit hooks (Husky + lint-staged)
  - [ ] TypeScript strict mode
- [ ] 代码格式化和修复
  - [ ] 运行 Prettier 格式化所有文件
  - [ ] 统一 Import 路径为 `~/` 别名
  - [ ] 修复所有 ESLint 警告

#### Week 3-4: TypeScript 迁移
- [ ] 重命名工具文件
  - [ ] `src/utils/*.js` → `*.ts`
  - [ ] `src/utils/*.mjs` → `*.ts`
- [ ] 添加类型定义
  - [ ] 创建 `src/types/` 目录
  - [ ] 定义 `SiteConfig.ts`
  - [ ] 定义 `BlogPost.ts`
  - [ ] 定义 `Navigation.ts`
- [ ] 组件 Props 类型化
  - [ ] 为所有组件添加 `export interface Props`
  - [ ] 启用 TypeScript 严格模式检查
- [ ] 配置重构
  - [ ] 创建 `src/config/` 模块化配置
  - [ ] 迁移 `config.mjs` 到 TypeScript

**Deliverables:**
- ✅ 完整的开发规范文档
- 🎯 100% TypeScript 覆盖
- 🎯 0 ESLint/TypeScript 错误
- 🎯 统一的代码风格

**Metrics:**
- Code quality score: > 90
- TypeScript coverage: 100%
- Build time: < 30s

---

### Phase 2: 核心内容完善 (5-8 weeks)
**Timeline**: Week 5-12 (2025-12-18 ~ 2026-02-10)
**Status**: 📋 Planned

#### Week 5-6: 关键页面开发

**优先级 P0 页面:**
- [ ] 关于我们 (`/about`)
  - [ ] 使命与愿景子页
  - [ ] 团队介绍页
  - [ ] 教育理念页
- [ ] 课程详情页 (4个)
  - [ ] 探索家 `/curriculum/explorers`
  - [ ] 创造家 `/curriculum/creators`
  - [ ] 创新家 `/curriculum/innovators`
  - [ ] 先锋家 `/curriculum/pioneers`
- [ ] 联系我们 (`/contact`)
- [ ] 法律页面
  - [ ] 隐私政策 `/legal/privacy`
  - [ ] 使用条款 `/legal/terms`

**页面规范:**
- 双语内容完整
- SEO 优化(Meta tags, OG, Schema)
- 响应式设计
- 无障碍性 WCAG AA 达标

#### Week 7-8: 博客系统增强

- [ ] 内容创作
  - [ ] 制定内容日历
  - [ ] 撰写 20 篇原创博客文章
    - 5 篇:教育理念
    - 5 篇:学习方法
    - 5 篇:科学探索
    - 5 篇:学员案例/家长指南
- [ ] 功能增强
  - [ ] 博客分类页优化
  - [ ] 标签系统完善
  - [ ] 相关文章推荐
  - [ ] 阅读进度指示器
  - [ ] 社交分享优化
- [ ] SEO 优化
  - [ ] 每篇文章 Schema markup
  - [ ] 内部链接策略
  - [ ] 图片 Alt text 优化

#### Week 9-10: 导航与 Footer 重构

- [ ] 导航栏升级
  - [ ] 多级下拉菜单
  - [ ] 移动端优化
  - [ ] 搜索入口
  - [ ] 语言切换器改进
- [ ] Footer 扩充
  - [ ] 4 列信息架构
  - [ ] 快速链接
  - [ ] 联系信息
  - [ ] 社交媒体链接
  - [ ] Newsletter 订阅表单

#### Week 11-12: 多媒体内容

- [ ] 图片优化
  - [ ] 所有图片迁移到 `<Image>` 组件
  - [ ] 添加 width/height 属性
  - [ ] WebP 格式转换
  - [ ] 懒加载实现
- [ ] 视频内容
  - [ ] 制作课程介绍视频 (4个)
  - [ ] 首页 Hero 视频背景
  - [ ] 嵌入优化(YouTube/Vimeo)
- [ ] 图标系统
  - [ ] 统一图标库使用
  - [ ] 自定义品牌图标

**Deliverables:**
- 🎯 10+ 核心页面上线
- 🎯 30+ 博客文章发布
- 🎯 完整的导航体系
- 🎯 多媒体内容库

**Metrics:**
- Pages indexed: 40+
- Organic traffic: 1000+/month
- Bounce rate: < 60%
- Average session duration: > 2 min

---

### Phase 3: 交互功能开发 (9-12 weeks)
**Timeline**: Week 13-20 (2026-02-11 ~ 2026-04-07)
**Status**: 📋 Planned

#### Week 13-14: 表单系统

- [ ] API Routes 开发
  - [ ] `/api/contact` - 联系表单
  - [ ] `/api/apply` - 课程报名
  - [ ] `/api/subscribe` - Newsletter 订阅
  - [ ] `/api/inquiry` - 试听预约
- [ ] 表单组件
  - [ ] `ContactForm.astro`
  - [ ] `ApplicationForm.astro`
  - [ ] `NewsletterForm.astro`
  - [ ] `InquiryForm.astro`
- [ ] 表单验证
  - [ ] 客户端验证 (Zod)
  - [ ] 服务端验证
  - [ ] 错误提示 UI
  - [ ] 成功反馈 UI
- [ ] 邮件集成
  - [ ] 选择邮件服务 (Resend/SendGrid)
  - [ ] 邮件模板设计
  - [ ] 自动回复邮件
  - [ ] 管理员通知

#### Week 15-16: 搜索功能

- [ ] 集成 Pagefind
  - [ ] 安装和配置
  - [ ] 自定义 UI 样式
  - [ ] 中英文搜索优化
- [ ] 搜索体验
  - [ ] 搜索快捷键 (Cmd+K)
  - [ ] 搜索结果高亮
  - [ ] 搜索建议
  - [ ] 热门搜索词

#### Week 17-18: Analytics & 性能监控

- [ ] Analytics 设置
  - [ ] Google Analytics 4
  - [ ] Vercel Analytics
  - [ ] 自定义事件追踪
    - CTA 点击
    - 表单提交
    - 视频播放
    - 外链点击
- [ ] 性能监控
  - [ ] Core Web Vitals 追踪
  - [ ] Error tracking (Sentry)
  - [ ] 性能预算设置
- [ ] A/B 测试基础
  - [ ] 实验框架选择
  - [ ] 首页 Hero CTA 测试

#### Week 19-20: SEO 全面优化

- [ ] Technical SEO
  - [ ] XML Sitemap 生成
  - [ ] Robots.txt 优化
  - [ ] Canonical URLs
  - [ ] 301 重定向策略
- [ ] Schema Markup
  - [ ] Organization
  - [ ] EducationalOrganization
  - [ ] Course (for each program)
  - [ ] BlogPosting
  - [ ] BreadcrumbList
- [ ] Performance 优化
  - [ ] 图片优化审核
  - [ ] CSS/JS 最小化
  - [ ] 字体加载优化
  - [ ] 预加载关键资源
- [ ] Accessibility 审核
  - [ ] Lighthouse 审核
  - [ ] WAVE 工具检查
  - [ ] 键盘导航测试
  - [ ] 屏幕阅读器测试

**Deliverables:**
- 🎯 完整的表单处理系统
- 🎯 全站搜索功能
- 🎯 Analytics 仪表盘
- 🎯 Lighthouse 分数 > 90

**Metrics:**
- Form conversion rate: > 5%
- Search usage: 30%+ of visitors
- Core Web Vitals: All Green
- Lighthouse Performance: > 90

---

### Phase 4: 高级功能与扩展 (13-20 weeks)
**Timeline**: Week 21-32 (2026-04-08 ~ 2026-07-07)
**Status**: 💡 Concept

#### Week 21-24: 知识库 & 资源中心

- [ ] Content Collections 设置
  - [ ] 定义 schema
  - [ ] 迁移现有内容
- [ ] 知识库页面
  - [ ] 分类浏览
  - [ ] 搜索过滤
  - [ ] 标签云
- [ ] 资源下载
  - [ ] 课程大纲 PDF
  - [ ] 学习检查清单
  - [ ] 项目模板
  - [ ] 下载统计

#### Week 25-28: 用户系统 MVP

**Architecture Decision:**
- Option A: Supabase (推荐)
  - Auth + Database + Storage
  - PostgreSQL
  - Row Level Security
- Option B: Firebase
  - Firestore
  - Firebase Auth
  - Cloud Storage

**Features:**
- [ ] 用户注册/登录
  - [ ] Email/Password
  - [ ] 社交登录 (WeChat, Google)
- [ ] 用户个人资料
  - [ ] 基本信息
  - [ ] 头像上传
  - [ ] 偏好设置
- [ ] 学员仪表盘
  - [ ] 我的课程
  - [ ] 学习进度
  - [ ] 项目作品集
  - [ ] 证书/成就

#### Week 29-30: 在线学习平台基础

- [ ] 课程管理系统
  - [ ] 课程创建界面
  - [ ] 课程内容编辑器
  - [ ] 视频托管集成
- [ ] 学习体验
  - [ ] 课程播放器
  - [ ] 进度追踪
  - [ ] 笔记功能
  - [ ] 书签/收藏

#### Week 31-32: 支付集成

- [ ] 支付网关
  - [ ] Stripe 集成 (国际)
  - [ ] 支付宝/微信支付 (国内)
- [ ] 定价系统
  - [ ] 课程定价管理
  - [ ] 优惠码/折扣
  - [ ] 套餐 (Bundles)
- [ ] 订单管理
  - [ ] 订单创建
  - [ ] 发票生成
  - [ ] 退款处理

**Deliverables:**
- 🎯 完整知识库系统
- 🎯 用户账户系统
- 🎯 在线学习平台 MVP
- 🎯 支付功能上线

**Metrics:**
- Registered users: 500+
- Course enrollments: 100+
- Payment success rate: > 95%
- Platform engagement: 40%+ MAU

---

### Phase 5: 社区与生态 (21-28 weeks)
**Timeline**: Week 33-48 (2026-07-08 ~ 2026-10-27)
**Status**: 💡 Concept

#### Week 33-36: 活动与工作坊系统

- [ ] 活动日历
  - [ ] 月视图/周视图
  - [ ] 筛选和搜索
  - [ ] iCal 导出
- [ ] 活动管理
  - [ ] 活动创建
  - [ ] 报名系统
  - [ ] 签到功能
  - [ ] 活动回顾页面
- [ ] 工作坊系列
  - [ ] 主题分类
  - [ ] 讲师介绍
  - [ ] 往期回顾

#### Week 37-40: 社区功能

- [ ] 讨论论坛
  - [ ] 版块设置
  - [ ] 主题发布
  - [ ] 回复评论
  - [ ] 点赞/收藏
- [ ] 学习小组
  - [ ] 小组创建
  - [ ] 成员管理
  - [ ] 小组讨论
- [ ] 同伴评审
  - [ ] 作品提交
  - [ ] 评审系统
  - [ ] 反馈机制

#### Week 41-44: 家长端功能

- [ ] 家长仪表盘
  - [ ] 孩子学习报告
  - [ ] 进度可视化
  - [ ] 成绩单
- [ ] 家校沟通
  - [ ] 消息系统
  - [ ] 预约教师
  - [ ] 反馈表单
- [ ] 家长资源
  - [ ] 家长指南
  - [ ] 育儿建议
  - [ ] 社区活动

#### Week 45-48: 数据与洞察

- [ ] 管理后台
  - [ ] 用户管理
  - [ ] 课程管理
  - [ ] 内容管理
  - [ ] 订单管理
- [ ] 数据分析
  - [ ] 学员画像
  - [ ] 学习行为分析
  - [ ] 课程效果评估
  - [ ] 运营指标仪表盘
- [ ] 报告生成
  - [ ] 学员报告
  - [ ] 课程报告
  - [ ] 财务报告

**Deliverables:**
- 🎯 完整的社区生态系统
- 🎯 家长端应用
- 🎯 数据驱动的运营平台

**Metrics:**
- Community members: 2000+
- Monthly active users: 40%+
- Event attendance rate: 60%+
- Parent satisfaction: > 85%

---

## 🛠️ Technical Evolution | 技术演进

### 技术栈路线图

```
Phase 1-2 (Current - Q1 2026)
├── Frontend: Astro 5 + TypeScript + Tailwind
├── Styling: Tailwind CSS + Custom Components
├── Content: MDX + Content Collections
├── Hosting: Vercel
└── Analytics: Google Analytics 4

Phase 3 (Q2 2026)
├── + API Routes (Astro)
├── + Form Handling (Zod validation)
├── + Email Service (Resend/SendGrid)
├── + Search (Pagefind)
└── + Monitoring (Sentry, Vercel Analytics)

Phase 4 (Q2-Q3 2026)
├── + Authentication (Supabase Auth)
├── + Database (PostgreSQL via Supabase)
├── + File Storage (Supabase Storage)
├── + Payment (Stripe)
└── + Video Hosting (Vimeo/Cloudflare Stream)

Phase 5 (Q3-Q4 2026)
├── + Real-time (Supabase Realtime)
├── + Forum (Custom or Discourse)
├── + Notifications (Push, Email, In-app)
├── + Mobile App (React Native/Flutter)
└── + AI Features (OpenAI API)
```

### 架构演进

**Current: Static Site (JAMstack)**
```
Browser → Vercel CDN → Static HTML
                ↓
         Third-party APIs
```

**Phase 3-4: Hybrid (SSG + API Routes)**
```
Browser → Vercel Edge → Static HTML
                ↓
         API Routes → External Services
                ↓
         Supabase (Auth, DB, Storage)
```

**Phase 5: Full-stack Platform**
```
Web App ─┐
         ├→ Next.js/Astro → API Layer → Supabase
Mobile App─┘                    ↓
                         Microservices
                         ├── Auth Service
                         ├── Content Service
                         ├── Learning Service
                         ├── Payment Service
                         └── Analytics Service
```

---

## 📊 Success Metrics | 成功指标

### Website Performance KPIs

| Metric | Current | Q1 2026 | Q2 2026 | Q3 2026 | Q4 2026 |
|--------|---------|---------|---------|---------|---------|
| Lighthouse Performance | ~85 | >90 | >92 | >94 | >95 |
| Page Load Time (LCP) | ~2.8s | <2.5s | <2.0s | <1.8s | <1.5s |
| Accessibility Score | ~90 | >95 | >97 | >98 | >99 |
| SEO Score | ~85 | >95 | >98 | >99 | 100 |

### Traffic & Engagement

| Metric | Q4 2025 | Q1 2026 | Q2 2026 | Q3 2026 | Q4 2026 |
|--------|---------|---------|---------|---------|---------|
| Monthly Visitors | 500 | 2,000 | 5,000 | 10,000 | 20,000 |
| Page Views | 2,000 | 8,000 | 20,000 | 50,000 | 100,000 |
| Bounce Rate | ~70% | <65% | <60% | <55% | <50% |
| Avg. Session Duration | ~1.5m | >2m | >2.5m | >3m | >3.5m |
| Pages per Session | ~2 | >2.5 | >3 | >3.5 | >4 |

### Conversion Metrics

| Metric | Q1 2026 | Q2 2026 | Q3 2026 | Q4 2026 |
|--------|---------|---------|---------|---------|
| Inquiry Form Submissions | 50 | 100 | 200 | 400 |
| Newsletter Subscribers | 200 | 500 | 1,000 | 2,000 |
| Course Enrollments | - | 20 | 50 | 100 |
| Conversion Rate | 2% | 3% | 4% | 5% |

### Content Metrics

| Metric | Q4 2025 | Q1 2026 | Q2 2026 | Q3 2026 | Q4 2026 |
|--------|---------|---------|---------|---------|---------|
| Blog Posts | 4 | 30 | 50 | 80 | 120 |
| Total Pages | ~10 | 40 | 60 | 80 | 100+ |
| Video Content | 0 | 5 | 10 | 20 | 30 |
| Downloadable Resources | 0 | 5 | 10 | 20 | 30 |

---

## 🚀 Launch Strategy | 发布策略

### Soft Launch (Q1 2026)
**Target**: 内测用户和早期采用者

**Activities:**
- 邀请制测试
- 收集反馈
- 迭代改进
- 小范围推广

**Channels:**
- 现有学员家长
- 教育社群
- 朋友圈/微信群

### Public Launch (Q2 2026)
**Target**: 公开发布,获取新用户

**Activities:**
- 正式发布会
- PR 新闻稿
- 社交媒体推广
- KOL/教育博主合作

**Channels:**
- 微信公众号
- 知乎/小红书
- 教育媒体
- 线下活动

### Growth Phase (Q3-Q4 2026)
**Target**: 规模化增长

**Activities:**
- 付费广告 (Google, 微信)
- SEO 持续优化
- 内容营销
- 合作推广
- 口碑营销

**Channels:**
- 搜索引擎
- 社交媒体
- 内容平台
- 合作机构

---

## 🎨 Design System Evolution | 设计系统演进

### Phase 1: 基础设计系统 (Q4 2025 - Q1 2026)
- [ ] 创建 DESIGN_SYSTEM.md
- [ ] 定义颜色系统
- [ ] 定义字体系统
- [ ] 定义间距系统
- [ ] 组件库基础 (Buttons, Forms, Cards)

### Phase 2: 组件库扩展 (Q2 2026)
- [ ] 原子组件完整化
- [ ] 分子组件系统
- [ ] 有机体组件
- [ ] 模板系统
- [ ] Storybook 集成

### Phase 3: 设计工具集成 (Q3 2026)
- [ ] Figma 设计库
- [ ] Design Tokens
- [ ] 自动化设计-代码同步
- [ ] 品牌指南完整版

---

## 🔄 Iteration & Feedback | 迭代与反馈

### 迭代周期

**Sprint Structure: 2-week Sprints**
```
Week 1:
├── Mon: Sprint Planning
├── Tue-Thu: Development
├── Fri: Code Review & Testing
└── Weekend: Buffer

Week 2:
├── Mon-Wed: Development
├── Thu: Testing & QA
├── Fri: Sprint Review & Retrospective
└── Weekend: Deployment
```

### 反馈机制

**用户反馈渠道:**
1. 网站反馈表单
2. 用户调研 (每季度)
3. A/B 测试数据
4. Analytics 数据分析
5. 社交媒体监听
6. 客服记录分析

**内部评审:**
1. 每周代码评审
2. 每月设计评审
3. 每季度产品评审
4. 年度战略评审

---

## 🎯 Milestones & Checkpoints | 里程碑

### 2025 Q4
- [x] ✅ 网站基础架构完成
- [x] ✅ 双语系统上线
- [x] ✅ 首页和博客功能
- [ ] 🎯 开发规范体系建立
- [ ] 🎯 TypeScript 全面迁移

### 2026 Q1
- [ ] 🎯 10+ 核心页面上线
- [ ] 🎯 30+ 博客文章发布
- [ ] 🎯 表单和咨询系统
- [ ] 🎯 SEO 优化完成
- [ ] 🎯 Lighthouse > 90

### 2026 Q2
- [ ] 🎯 搜索功能上线
- [ ] 🎯 用户系统 MVP
- [ ] 🎯 在线课程平台基础
- [ ] 🎯 月访问量 5000+

### 2026 Q3
- [ ] 🎯 支付系统集成
- [ ] 🎯 100+ 付费学员
- [ ] 🎯 社区功能上线
- [ ] 🎯 移动应用 Beta

### 2026 Q4
- [ ] 🎯 完整 LMS 平台
- [ ] 🎯 1000+ 注册用户
- [ ] 🎯 家长端应用
- [ ] 🎯 年度营收目标达成

---

## 🔧 Dependencies & Risks | 依赖与风险

### 关键依赖

**Technical Dependencies:**
- Astro framework updates
- Supabase service availability
- Payment gateway integration
- Video hosting service

**Resource Dependencies:**
- Development team bandwidth
- Content creation capacity
- Design resources
- Budget allocation

### 风险管理

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| 技术栈重大变更 | Low | High | 版本锁定,渐进式升级 |
| 第三方服务故障 | Medium | High | 备用方案,多云部署 |
| 内容生产延期 | Medium | Medium | 提前规划,外包支持 |
| 预算超支 | Low | Medium | 分阶段投入,优先级管理 |
| 用户增长不达预期 | Medium | High | 多渠道营销,产品优化 |
| 竞争对手压力 | Medium | Medium | 差异化定位,持续创新 |

---

## 📚 References & Resources | 参考资源

### 相关文档
- [OPENSPEC.md](./OPENSPEC.md) - 全局开发规范
- [CONSISTENCY_AUDIT.md](./CONSISTENCY_AUDIT.md) - 一致性审核
- [CONTENT_GAPS.md](./CONTENT_GAPS.md) - 内容缺口分析
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - 设计系统文档 (待创建)

### 外部资源
- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase Docs](https://supabase.com/docs)
- [Web.dev](https://web.dev/) - Performance best practices
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### 工具与服务
- **Development**: VSCode, Git, GitHub
- **Design**: Figma, Adobe Creative Suite
- **Analytics**: Google Analytics, Vercel Analytics
- **Monitoring**: Sentry, Uptime Robot
- **Communication**: Slack, Notion

---

## 📝 Changelog | 更新日志

### Version 1.0.0 (2025-11-19)
- 创建初始路线图文档
- 定义 5 个主要开发阶段
- 设定 2025-2026 年度目标
- 建立成功指标体系

---

## 🤝 Contributing to the Roadmap | 参与路线图制定

这是一个**活文档**,会根据实际情况持续更新。

**如何贡献:**
1. 提出新的功能建议 (GitHub Issues)
2. 参与季度产品评审会议
3. 提供用户反馈和数据洞察
4. 审查和改进现有计划

**Review Cycle:**
- 每月更新进度
- 每季度调整优先级
- 每年度战略回顾

---

**Last Updated**: 2025-11-19
**Next Review**: 2025-12-19
**Document Owner**: Product Team

---

**Let's build something amazing together! 🚀**
