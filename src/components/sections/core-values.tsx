'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Lightbulb, Puzzle, Rocket } from 'lucide-react';
import { AnimatedCard } from '@/components/ui/card';

const values = [
  {
    key: 'problemDriven',
    icon: Lightbulb,
    color: 'from-neon-purple to-primary-500',
    shadowColor: 'shadow-glow',
  },
  {
    key: 'interdisciplinary',
    icon: Puzzle,
    color: 'from-neon-blue to-accent-500',
    shadowColor: 'shadow-glow-cyan',
  },
  {
    key: 'practiceOriented',
    icon: Rocket,
    color: 'from-neon-green to-tech-500',
    shadowColor: 'shadow-glow-green',
  },
];

export function CoreValues() {
  const t = useTranslations('home.core');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/50 to-transparent dark:via-primary-950/20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 mb-4">
            <span className="font-mono text-sm text-primary-600 dark:text-primary-400">
              {t('subtitle')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display">
            <span className="text-gray-900 dark:text-white">{t('title')}</span>
            <span className="gradient-text ml-2">{t('value')}</span>
          </h2>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {values.map((value, index) => (
            <AnimatedCard
              key={value.key}
              variant="glass"
              className="p-8 text-center group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`
                  inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6
                  bg-gradient-to-br ${value.color}
                  group-hover:${value.shadowColor} transition-shadow duration-300
                `}
              >
                <value.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Symbol */}
              <div className="absolute top-4 right-4 text-4xl font-display text-gray-200 dark:text-gray-800">
                {index === 0 ? t('questionMark') : index === 1 ? t('plus') : t('asterisk')}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white mb-3">
                {t(value.key)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t(`${value.key}Desc`)}
              </p>

              {/* Hover effect line */}
              <motion.div
                className={`h-1 bg-gradient-to-r ${value.color} mt-6 rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              />
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
