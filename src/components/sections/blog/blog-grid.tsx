'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { AnimatedCard } from '@/components/ui/card';

// Sample blog posts - in production, these would come from MDX files or CMS
const samplePosts = [
  {
    slug: 'welcome-to-owl',
    title: 'Welcome to Open Wisdom Lab',
    titleZh: '欢迎来到猫头鹰实验室',
    description: 'Introducing our innovative education platform designed for the future.',
    descriptionZh: '介绍我们为未来设计的创新教育平台。',
    date: '2025-01-15',
    readTime: 5,
    image: '/images/blog/welcome.jpg',
    tags: ['announcement', 'education'],
  },
  {
    slug: 'problem-driven-learning',
    title: 'The Power of Problem-Driven Learning',
    titleZh: '问题驱动学习的力量',
    description: 'Discover how problem-driven learning transforms education.',
    descriptionZh: '探索问题驱动学习如何改变教育。',
    date: '2025-01-10',
    readTime: 8,
    image: '/images/blog/pdl.jpg',
    tags: ['education', 'methodology'],
  },
  {
    slug: 'interdisciplinary-thinking',
    title: 'Cultivating Interdisciplinary Thinking',
    titleZh: '培养跨学科思维',
    description: 'Why interdisciplinary skills are essential for future innovators.',
    descriptionZh: '为什么跨学科技能对未来的创新者至关重要。',
    date: '2025-01-05',
    readTime: 6,
    image: '/images/blog/interdisciplinary.jpg',
    tags: ['skills', 'innovation'],
  },
];

export function BlogGrid() {
  const t = useTranslations('blog');
  const commonT = useTranslations('common');

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <AnimatedCard variant="default" className="overflow-hidden group h-full">
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-display font-bold text-primary-200 dark:text-primary-800">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} {t('minutes')}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {post.titleZh}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                      {post.descriptionZh}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read more */}
                    <div className="flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:gap-2 transition-all">
                      {commonT('readMore')}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </AnimatedCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
