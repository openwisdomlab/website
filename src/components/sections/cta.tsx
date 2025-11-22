'use client';

import * as React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingOrbs } from '@/components/effects/floating-elements';

export function CTA() {
  const t = useTranslations('cta');

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 dark:from-dark-surface dark:via-primary-950 dark:to-secondary-950" />
      <FloatingOrbs className="opacity-50" />

      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-small bg-grid-small opacity-10" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-8 h-8 text-white" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6"
        >
          {t('title')}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-white/80 max-w-2xl mx-auto mb-10"
        >
          {t('subtitle')}
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            size="xl"
            magnetic
            className="bg-white text-primary-600 hover:bg-white/90 shadow-2xl"
            asChild
          >
            <Link href="/contact">
              {t('button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </section>
  );
}
