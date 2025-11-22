'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { GridBackground } from '@/components/effects/grid-background';

export function AboutHero() {
  const t = useTranslations('page.about');

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <GridBackground variant="dots" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-gray-900 dark:text-white mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            {t('subtitle')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
