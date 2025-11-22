'use client';

import * as React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const navItems = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  {
    key: 'education',
    href: '/education',
    children: [
      { key: 'curriculum', href: '/curriculum' },
      { key: 'challenges', href: '/challenges' },
    ],
  },
  { key: 'activities', href: '/activities' },
  { key: 'spaces', href: '/spaces' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '/contact' },
];

export function Header() {
  const t = useTranslations('nav');
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [locale, setLocale] = React.useState('zh');

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === 'zh' ? 'en' : 'zh';
    setLocale(newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    window.location.reload();
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 dark:bg-dark-surface/80 backdrop-blur-lg shadow-soft border-b border-gray-200/50 dark:border-dark-border/50'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold text-xl font-display">O</span>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg font-bold font-display text-gray-900 dark:text-white">
                OWL
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
                Open Wisdom Lab
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) =>
                  item.children ? (
                    <NavigationMenuItem key={item.key}>
                      <NavigationMenuTrigger className="text-gray-700 dark:text-gray-300">
                        {t(item.key)}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-48 gap-1 p-2">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-slate-800"
                              >
                                <div className="text-sm font-medium">{t(item.key)}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          {item.children.map((child) => (
                            <li key={child.key}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-slate-800"
                                >
                                  <div className="text-sm font-medium">{t(child.key)}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.key}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-lg bg-transparent px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-slate-800 dark:hover:text-white">
                          {t(item.key)}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLocale}
              className="hidden sm:flex"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">Toggle language</span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {t(item.key)}
                    </Link>
                    {item.children && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.key}>
                            <Link
                              href={child.href}
                              className="block rounded-lg px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {t(child.key)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-border">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={toggleLocale}
                >
                  <Globe className="mr-2 h-5 w-5" />
                  {locale === 'zh' ? 'English' : '中文'}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
