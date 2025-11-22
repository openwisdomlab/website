'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Sparkles, Lightbulb, Rocket } from 'lucide-react';
import { AnimatedCard } from '@/components/ui/card';

const visionCards = [
  { key: 'card1', icon: Sparkles, color: 'from-primary-500 to-secondary-500' },
  { key: 'card2', icon: Lightbulb, color: 'from-secondary-500 to-accent-500' },
  { key: 'card3', icon: Rocket, color: 'from-accent-500 to-primary-500' },
];

export function Vision() {
  const t = useTranslations('vision');

  return (
    <section className="py-24 lg:py-32">
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

        {/* Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionCards.map((card) => (
            <AnimatedCard
              key={card.key}
              variant="glass"
              className="p-8 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} mb-6`}
              >
                <card.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white mb-3">
                {t(`${card.key}.title`)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t(`${card.key}.desc`)}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
