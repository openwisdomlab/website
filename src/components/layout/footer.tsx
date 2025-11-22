'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Github, Twitter, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  explore: [
    { key: 'about', href: '/about' },
    { key: 'education', href: '/education' },
    { key: 'curriculum', href: '/curriculum' },
    { key: 'challenges', href: '/challenges' },
  ],
  resources: [
    { key: 'blog', href: '/blog' },
    { key: 'activities', href: '/activities' },
    { key: 'spaces', href: '/spaces' },
    { key: 'contact', href: '/contact' },
  ],
};

const socialLinks = [
  { icon: Github, href: 'https://github.com/openwisdomlab', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/openwisdomlab', label: 'Twitter' },
  { icon: Mail, href: 'mailto:contact@openwisdomlab.org', label: 'Email' },
];

export function Footer() {
  const t = useTranslations('footer');
  const navT = useTranslations('nav');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative bg-gray-50 dark:bg-dark-surface border-t border-gray-200 dark:border-dark-border">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-500/5 dark:to-neon-purple/5 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500">
                <span className="text-white font-bold text-xl font-display">O</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold font-display text-gray-900 dark:text-white">
                  OWL
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Open Wisdom Lab
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              {t('description')}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-100 dark:bg-dark-border text-gray-600 dark:text-gray-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Explore Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {navT(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {navT(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              {t('contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Shenzhen, China</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:contact@openwisdomlab.org"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  contact@openwisdomlab.org
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-border"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('copyright')}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {t('privacy')}
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {t('terms')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
