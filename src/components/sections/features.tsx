'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Target,
  Users,
  Unlock,
  Combine,
  Link2,
  Leaf,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  { key: 'progressive', icon: TrendingUp },
  { key: 'problem', icon: Target },
  { key: 'mentor', icon: Users },
  { key: 'openness', icon: Unlock },
  { key: 'interdisciplinary', icon: Combine },
  { key: 'connectivity', icon: Link2 },
  { key: 'sustainability', icon: Leaf },
  { key: 'technology', icon: Zap },
];

export function Features() {
  const t = useTranslations('features');

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={cn(
                'group relative p-6 rounded-2xl',
                'bg-white dark:bg-dark-surface',
                'border border-gray-200 dark:border-dark-border',
                'hover:shadow-lg dark:hover:shadow-neon/10',
                'transition-all duration-300'
              )}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 group-hover:from-primary-200 group-hover:to-secondary-200 dark:group-hover:from-primary-800/40 dark:group-hover:to-secondary-800/40 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {t(feature.key)}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t(`${feature.key}Desc`)}
              </p>

              {/* Hover gradient border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 opacity-20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
