'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Compass, Puzzle, Star } from 'lucide-react';
import { AnimatedCard } from '@/components/ui/card';

const characteristics = [
  { key: 'authenticity', icon: CheckCircle2 },
  { key: 'openness', icon: Circle },
  { key: 'challenge', icon: Compass },
  { key: 'interdisciplinary', icon: Puzzle },
  { key: 'meaning', icon: Star },
];

export function ProblemDrivenLearning() {
  const t = useTranslations('research');

  return (
    <section className="py-24 lg:py-32 bg-gray-50 dark:bg-dark-surface/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Characteristics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characteristics.map((item) => (
            <AnimatedCard
              key={item.key}
              variant="default"
              className="p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t(item.key)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t(`${item.key}Desc`)}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
