'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlitchText } from '@/components/effects/glitch-text';
import { TypewriterText } from '@/components/effects/typewriter-text';
import { GridBackground } from '@/components/effects/grid-background';
import { FloatingElements } from '@/components/effects/floating-elements';

export function Hero() {
  const t = useTranslations('hero');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <GridBackground />
      <FloatingElements />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-dark-bg pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600" />
            </span>
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              {t('openWisdomLab')}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6"
          >
            <span className="text-gray-900 dark:text-white">{t('owl')}</span>
            <br />
            <GlitchText className="gradient-text">{t('lab')}</GlitchText>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4"
          >
            {t('desc1')}
            <span className="text-primary-600 dark:text-neon-blue font-semibold">
              {t('open')}
            </span>
            {' · '}
            <span className="text-secondary-600 dark:text-neon-purple font-semibold">
              {t('inclusive')}
            </span>
            {' · '}
            <span className="text-accent-600 dark:text-neon-green font-semibold">
              {t('innovative')}
            </span>
            {t('desc2')}
          </motion.p>

          {/* Terminal Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-surface/5 dark:bg-dark-surface border border-gray-200 dark:border-dark-border font-mono text-sm">
              <span className="text-neon-green">$</span>
              <TypewriterText
                text={t('terminal')}
                className="text-gray-700 dark:text-gray-300"
              />
              <span className="animate-blink text-neon-purple">|</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="gradient" size="lg" magnetic asChild>
              <Link href="/about">
                {t('exploreWorld')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">{t('contactUs')}</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            {[
              { label: t('projectsCreated'), value: '100+' },
              { label: t('membersActive'), value: '500+' },
              { label: t('ideasUnlimited'), value: '∞' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-display text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-mono mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
              {t('scrollDown')}
            </span>
            <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
