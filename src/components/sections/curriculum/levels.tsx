'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const levels = [
  { key: 'b0', color: 'from-green-400 to-green-600', bgColor: 'bg-green-50 dark:bg-green-900/20' },
  { key: 'b1', color: 'from-blue-400 to-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-900/20' },
  { key: 'b2', color: 'from-purple-400 to-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-900/20' },
  { key: 'b3', color: 'from-orange-400 to-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-900/20' },
];

export function CurriculumLevels() {
  const t = useTranslations('curriculum');

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

        {/* Levels Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-purple-400 to-orange-400" />

          <div className="space-y-12">
            {levels.map((level, index) => (
              <motion.div
                key={level.key}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Level badge */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${level.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-xl font-display">
                      {level.key.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Content card */}
                <div className={`ml-24 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className={`${level.bgColor} rounded-2xl p-6 border border-gray-200 dark:border-dark-border`}>
                    <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white mb-2">
                      {t(`${level.key}.title`)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t(`${level.key}.desc`)}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
