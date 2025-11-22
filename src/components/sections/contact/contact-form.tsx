'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function ContactForm() {
  const t = useTranslations('form');
  const footerT = useTranslations('footer');

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold font-display text-gray-900 dark:text-white mb-4">
                {footerT('contact')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {footerT('description')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {t('email')}
                  </h3>
                  <a
                    href="mailto:contact@openwisdomlab.org"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    contact@openwisdomlab.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Shenzhen, Guangdong, China
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('name')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className={cn(
                      'w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border',
                      'bg-white dark:bg-dark-surface',
                      'text-gray-900 dark:text-white',
                      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                      'transition-all duration-200'
                    )}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('email')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className={cn(
                      'w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border',
                      'bg-white dark:bg-dark-surface',
                      'text-gray-900 dark:text-white',
                      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                      'transition-all duration-200'
                    )}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('subject')}
                </label>
                <input
                  type="text"
                  className={cn(
                    'w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border',
                    'bg-white dark:bg-dark-surface',
                    'text-gray-900 dark:text-white',
                    'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                    'transition-all duration-200'
                  )}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('message')} <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  className={cn(
                    'w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border',
                    'bg-white dark:bg-dark-surface',
                    'text-gray-900 dark:text-white',
                    'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                    'transition-all duration-200 resize-none'
                  )}
                />
              </div>

              <Button variant="gradient" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                {t('send')}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
