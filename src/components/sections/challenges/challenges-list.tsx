'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Atom, Brain, HeartPulse, Calculator, Leaf, Microscope } from 'lucide-react';
import { AnimatedCard } from '@/components/ui/card';

const challengeCategories = [
  {
    key: 'physics',
    icon: Atom,
    color: 'from-blue-400 to-blue-600',
    questions: ['What is dark matter?', 'How to achieve quantum computing at scale?'],
  },
  {
    key: 'biology',
    icon: Microscope,
    color: 'from-green-400 to-green-600',
    questions: ['How does consciousness emerge?', 'Can we reverse aging?'],
  },
  {
    key: 'medicine',
    icon: HeartPulse,
    color: 'from-red-400 to-red-600',
    questions: ['How to cure cancer?', 'What causes autoimmune diseases?'],
  },
  {
    key: 'mathematics',
    icon: Calculator,
    color: 'from-purple-400 to-purple-600',
    questions: ['Is P equal to NP?', 'What are the patterns in prime numbers?'],
  },
  {
    key: 'neuroscience',
    icon: Brain,
    color: 'from-pink-400 to-pink-600',
    questions: ['How does memory work?', 'What is the nature of intelligence?'],
  },
  {
    key: 'environment',
    icon: Leaf,
    color: 'from-teal-400 to-teal-600',
    questions: ['How to reverse climate change?', 'Can we achieve sustainable energy?'],
  },
];

export function ChallengesList() {
  const t = useTranslations('challenges');

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
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challengeCategories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedCard variant="glass" className="p-6 h-full">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white capitalize">
                    {category.key}
                  </h3>
                </div>

                {/* Sample Questions */}
                <ul className="space-y-3">
                  {category.questions.map((question, qIndex) => (
                    <li
                      key={qIndex}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="text-primary-500 mt-0.5">?</span>
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
