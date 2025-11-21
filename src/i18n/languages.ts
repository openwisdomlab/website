// Language configuration for the website
export const languages = {
  zh: 'zh-CN',
  en: 'en-US',
};

export const defaultLang = 'zh';

export const ui = {
  zh: {
    // 导航
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.education': '教育体系',
    'nav.curriculum': '课程体系',
    'nav.challenges': '科学问题',
    'nav.blog': '动态',
    'nav.contact': '联系我们',
    'nav.activities': '活动',
    'nav.spaces': '空间',

    // 站点信息
    'site.title': '猫头鹰实验室 | Open Wisdom Lab - 未来科技创新空间',
    'site.description': '猫头鹰实验室（OWL）是一个充满想象力、创造力和探索乐趣的创新教育空间。基于创生教育理念,我们致力于培养AI时代具有创新精神和跨学科思维的未来人才。',

    // Hero 区域
    'hero.title': '猫头鹰实验室',
    'hero.subtitle': 'Open Wisdom Lab',
    'hero.description': '一个开放、包容、创新的学习空间，让有好奇心的人、天马行空的想法和有趣的问题在此汇聚和激发。我们通过跨学科融合、实践驱动和问题导向，培养具有创新精神的未来人才。',
    'hero.description.short': '一个开放、包容、创新的学习空间，让有好奇心的人、天马行空的想法和有趣的问题在此汇聚和激发。',
    'hero.description.full': '我们通过跨学科融合、实践驱动和问题导向，培养具有创新精神的未来人才。',
    'hero.button.vision': '探索愿景',
    'hero.button.ime': '创生教育',

    // 页面标题
    'page.about.title': '关于我们',
    'page.about.subtitle': '探索未知，激发潜能，培养未来的创新人才',
    'page.education.title': '教育体系',
    'page.education.subtitle': '以问题为驱动，以创新为目标的创生教育理念',
    'page.curriculum.title': '课程体系',
    'page.curriculum.subtitle': '进阶式探索之旅，从兴趣启蒙到创新突破',
    'page.challenges.title': '科学挑战',
    'page.challenges.subtitle': '面向前沿问题，探索未知领域，追求创新突破',
    'page.contact.title': '联系我们',
    'page.contact.subtitle': '有任何问题或想法？我们很乐意听到您的声音',
    'page.activities.title': '活动动态',
    'page.activities.subtitle': '精彩活动，探索与发现的旅程',
    'page.spaces.title': '创新空间',
    'page.spaces.subtitle': '激发创造力的实验环境',

    // 首页内容
    'home.cta.explore': '探索我们的世界',
    'home.cta.contact': '联系我们',
    'home.cta.learnMore': '了解更多',
    'home.cta.getStarted': '开始探索',
    'home.values.title': '我们的核心价值',
    'home.values.subtitle': '培养面向未来的创新人才',
    'home.value1.title': '问题驱动学习',
    'home.value1.desc': '从真实问题出发，在探索中学习，在解决问题中成长',
    'home.value2.title': '跨学科融合',
    'home.value2.desc': '打破学科边界，培养综合思维和创新能力',
    'home.value3.title': '实践导向',
    'home.value3.desc': '动手实践，在做中学，培养解决实际问题的能力',
    'home.explore.title': '探索更多',
    'home.explore.subtitle': '深入了解我们的教育体系和课程',
    'home.card.about': '了解我们的愿景和使命',
    'home.card.education': '创生教育和问题驱动学习',
    'home.card.curriculum': '进阶式学习路径 B0-B3',
    'home.card.challenges': '前沿科研项目和挑战',

    // 课程体系
    'curriculum.title': '进阶式探索之旅',
    'curriculum.subtitle': '为不同阶段的学生设计的进阶式课程体系',
    'curriculum.b0.title': '科研探索 · 兴趣启蒙',
    'curriculum.b0.desc': '点燃科学好奇心的第一站,让学生感受科研的魅力',
    'curriculum.b1.title': '科研体验 · 方法入门',
    'curriculum.b1.desc': '体验完整科研流程,掌握基本研究方法',
    'curriculum.b2.title': '科研挑战 · 深度探究',
    'curriculum.b2.desc': '面对真实前沿问题,进行深度科研探究',
    'curriculum.b3.title': '长期研究 · 创新突破',
    'curriculum.b3.desc': '开展长期深度研究,追求创新突破',

    // 体系特色
    'features.title': '体系特色',
    'features.subtitle': '我们独特的教育方法',
    'features.progressive': '阶梯式成长',
    'features.progressive.desc': '尊重学生的个体差异,提供清晰的成长路径和进阶通道',
    'features.problem': '问题驱动',
    'features.problem.desc': '从真实问题出发,在解决问题中学习和成长',
    'features.mentor': '导师制指导',
    'features.mentor.desc': '"科学家+教师"双师团队,全程陪伴和指导',
    'features.openness': '开放性',
    'features.openness.desc': '对所有有好奇心、有想法、有问题的学习者开放',
    'features.interdisciplinary': '交叉性',
    'features.interdisciplinary.desc': '打破学科壁垒，强调多学科的交叉融合',
    'features.connectivity': '连接性',
    'features.connectivity.desc': '连接产业界、学术界、社会组织',
    'features.sustainability': '可持续性',
    'features.sustainability.desc': '培养学生的可持续思维，关注技术创新的社会影响',
    'features.technology': '黑科技',
    'features.technology.desc': '鼓励学生接触和使用前沿工具',

    // 科学挑战
    'challenges.title': '前沿科学挑战',
    'challenges.subtitle': '基于问题驱动学习,培养科学思维和创新能力',
    'challenges.explore': '探索挑战',
    'challenges.viewAll': '查看全部',

    // 问题驱动学习
    'research.title': '问题驱动学习',
    'research.subtitle': '好问题的五个特征',
    'research.authenticity': '真实性',
    'research.authenticity.desc': '问题应该来源于真实世界的挑战,而不是为了教学而人为制造的',
    'research.openness': '开放性',
    'research.openness.desc': '好的问题没有唯一正确答案,允许多种探索路径',
    'research.challenge': '挑战性',
    'research.challenge.desc': '问题的难度应该在学生的最近发展区内,既不能太简单导致无聊,也不能太难导致无助',
    'research.interdisciplinary': '跨学科性',
    'research.interdisciplinary.desc': '真实世界的问题往往需要整合多学科知识,这也是培养跨学科思维的最佳情境',
    'research.meaning': '意义感',
    'research.meaning.desc': '问题应该让学生感受到探索的价值和意义,能够看到解决问题可能带来的影响',

    // 通用
    'common.readMore': '阅读更多',
    'common.learnMore': '了解更多',
    'common.viewDetails': '查看详情',
    'common.backToHome': '返回首页',
    'common.loading': '加载中...',
    'common.error': '出错了',
    'common.success': '成功',
    'common.submit': '提交',
    'common.cancel': '取消',
    'common.close': '关闭',
    'common.search': '搜索',
    'common.filter': '筛选',
    'common.sort': '排序',
    'common.all': '全部',

    // 表单
    'form.name': '姓名',
    'form.email': '邮箱',
    'form.phone': '电话',
    'form.message': '留言',
    'form.subject': '主题',
    'form.required': '必填',
    'form.optional': '选填',
    'form.send': '发送',
    'form.sending': '发送中...',
    'form.sent': '已发送',
    'form.error': '发送失败，请重试',

    // 页脚
    'footer.copyright': '© 2025 猫头鹰实验室. 保留所有权利.',
    'footer.privacy': '隐私政策',
    'footer.terms': '使用条款',
    'footer.followUs': '关注我们',
    'footer.quickLinks': '快速链接',
    'footer.contact': '联系方式',

    // 博客
    'blog.title': '最新动态',
    'blog.subtitle': '了解我们的最新活动和教育资讯',
    'blog.readTime': '阅读时间',
    'blog.minutes': '分钟',
    'blog.publishedOn': '发布于',
    'blog.author': '作者',
    'blog.tags': '标签',
    'blog.categories': '分类',
    'blog.relatedPosts': '相关文章',
    'blog.prevPost': '上一篇',
    'blog.nextPost': '下一篇',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.curriculum': 'Curriculum',
    'nav.challenges': '125 Questions: Exploration and Discovery',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.activities': 'Activities',
    'nav.spaces': 'Spaces',

    // Site Info
    'site.title': 'Open Wisdom Lab - Future Innovation Space',
    'site.description': 'Open Wisdom Lab (OWL) is an innovative educational space filled with imagination, creativity, and the joy of exploration. Based on generative education principles, we are committed to cultivating future talents with innovative spirit and interdisciplinary thinking for the AI era.',

    // Hero Section
    'hero.title': 'Open Wisdom Lab',
    'hero.subtitle': 'OWL',
    'hero.description': 'An open, inclusive, and innovative learning space where curious minds, imaginative ideas, and interesting questions converge and inspire. We cultivate future talents with innovative spirit through interdisciplinary integration, practice-driven approaches, and problem-oriented learning.',
    'hero.description.short': 'An open, inclusive, and innovative learning space where curious minds, imaginative ideas, and interesting questions converge and inspire.',
    'hero.description.full': 'We cultivate future talents with innovative spirit through interdisciplinary integration, practice-driven approaches, and problem-oriented learning.',
    'hero.button.vision': 'Explore Vision',
    'hero.button.ime': 'Generative Education',

    // Page Titles
    'page.about.title': 'About Us',
    'page.about.subtitle': 'Explore the unknown, inspire potential, cultivate future innovators',
    'page.education.title': 'Education System',
    'page.education.subtitle': 'Problem-driven, innovation-oriented generative education philosophy',
    'page.curriculum.title': 'Curriculum',
    'page.curriculum.subtitle': 'Progressive learning journey from interest enlightenment to innovative breakthroughs',
    'page.challenges.title': 'Scientific Challenges',
    'page.challenges.subtitle': 'Facing frontier problems, exploring unknown territories, pursuing innovative breakthroughs',
    'page.contact.title': 'Contact Us',
    'page.contact.subtitle': 'Have questions or ideas? We would love to hear from you',
    'page.activities.title': 'Activities',
    'page.activities.subtitle': 'Exciting activities, a journey of exploration and discovery',
    'page.spaces.title': 'Innovation Spaces',
    'page.spaces.subtitle': 'Experimental environments that spark creativity',

    // Home Page Content
    'home.cta.explore': 'Explore Our World',
    'home.cta.contact': 'Contact Us',
    'home.cta.learnMore': 'Learn More',
    'home.cta.getStarted': 'Get Started',
    'home.values.title': 'Our Core Values',
    'home.values.subtitle': 'Cultivating Future Innovators',
    'home.value1.title': 'Problem-Driven Learning',
    'home.value1.desc': 'Start from real problems, learn through exploration, grow by solving challenges',
    'home.value2.title': 'Interdisciplinary Integration',
    'home.value2.desc': 'Break down disciplinary boundaries, cultivate comprehensive thinking and innovation',
    'home.value3.title': 'Practice-Oriented',
    'home.value3.desc': 'Hands-on practice, learning by doing, developing real problem-solving abilities',
    'home.explore.title': 'Explore More',
    'home.explore.subtitle': 'Dive deeper into our education system and curriculum',
    'home.card.about': 'Our vision and mission',
    'home.card.education': 'Generative education and problem-driven learning',
    'home.card.curriculum': 'Progressive learning path B0-B3',
    'home.card.challenges': 'Frontier research projects and challenges',

    // Curriculum
    'curriculum.title': 'Progressive Learning Journey',
    'curriculum.subtitle': 'Progressive curriculum systems designed for students at different stages',
    'curriculum.b0.title': 'Research Exploration · Interest Enlightenment',
    'curriculum.b0.desc': 'The first station to ignite scientific curiosity and let students experience the charm of research',
    'curriculum.b1.title': 'Research Experience · Method Introduction',
    'curriculum.b1.desc': 'Experience complete research process and master basic research methods',
    'curriculum.b2.title': 'Research Challenge · Deep Inquiry',
    'curriculum.b2.desc': 'Face real frontier problems and conduct deep scientific research',
    'curriculum.b3.title': 'Long-term Research · Innovation Breakthrough',
    'curriculum.b3.desc': 'Conduct long-term deep research and pursue innovative breakthroughs',

    // Features
    'features.title': 'System Features',
    'features.subtitle': 'Our Unique Educational Approach',
    'features.progressive': 'Progressive Growth',
    'features.progressive.desc': 'Respect individual differences and provide clear growth paths and advancement channels',
    'features.problem': 'Problem-Driven',
    'features.problem.desc': 'Start from real problems and learn and grow while solving problems',
    'features.mentor': 'Mentor System',
    'features.mentor.desc': '"Scientist + Teacher" dual-mentor team, full guidance and support',
    'features.openness': 'Openness',
    'features.openness.desc': 'Open to all learners with curiosity, ideas, and questions',
    'features.interdisciplinary': 'Interdisciplinarity',
    'features.interdisciplinary.desc': 'Breaking down disciplinary barriers, emphasizing cross-disciplinary integration',
    'features.connectivity': 'Connectivity',
    'features.connectivity.desc': 'Connecting industry, academia, and social organizations',
    'features.sustainability': 'Sustainability',
    'features.sustainability.desc': 'Cultivating sustainable thinking and awareness of social impact',
    'features.technology': 'Advanced Technology',
    'features.technology.desc': 'Encouraging students to explore and use cutting-edge tools',

    // Challenges
    'challenges.title': 'Frontier Scientific Challenges',
    'challenges.subtitle': 'Based on problem-driven learning, cultivate scientific thinking and innovation ability',
    'challenges.explore': 'Explore Challenges',
    'challenges.viewAll': 'View All',

    // Problem-Driven Learning
    'research.title': 'Problem-Driven Learning',
    'research.subtitle': 'Five Characteristics of Good Questions',
    'research.authenticity': 'Authenticity',
    'research.authenticity.desc': 'Questions should originate from real-world challenges, not artificially created for teaching',
    'research.openness': 'Openness',
    'research.openness.desc': 'Good questions have no single correct answer and allow multiple exploration paths',
    'research.challenge': 'Challenge',
    'research.challenge.desc': 'The difficulty should be within the student\'s zone of proximal development, neither too simple to cause boredom nor too difficult to cause helplessness',
    'research.interdisciplinary': 'Interdisciplinarity',
    'research.interdisciplinary.desc': 'Real-world problems often require integrating multidisciplinary knowledge, which is the best context for cultivating interdisciplinary thinking',
    'research.meaning': 'Meaningfulness',
    'research.meaning.desc': 'Questions should let students feel the value and significance of exploration and see the potential impact of solving problems',

    // Common
    'common.readMore': 'Read More',
    'common.learnMore': 'Learn More',
    'common.viewDetails': 'View Details',
    'common.backToHome': 'Back to Home',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.close': 'Close',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.sort': 'Sort',
    'common.all': 'All',

    // Form
    'form.name': 'Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.message': 'Message',
    'form.subject': 'Subject',
    'form.required': 'Required',
    'form.optional': 'Optional',
    'form.send': 'Send',
    'form.sending': 'Sending...',
    'form.sent': 'Sent',
    'form.error': 'Failed to send, please try again',

    // Footer
    'footer.copyright': '© 2025 Open Wisdom Lab. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.followUs': 'Follow Us',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',

    // Blog
    'blog.title': 'Latest News',
    'blog.subtitle': 'Stay updated with our latest activities and educational insights',
    'blog.readTime': 'Read Time',
    'blog.minutes': 'min',
    'blog.publishedOn': 'Published on',
    'blog.author': 'Author',
    'blog.tags': 'Tags',
    'blog.categories': 'Categories',
    'blog.relatedPosts': 'Related Posts',
    'blog.prevPost': 'Previous',
    'blog.nextPost': 'Next',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
