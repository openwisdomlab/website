import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { LenisProvider } from '@/components/providers/lenis-provider';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Open Wisdom Lab | OWL',
    template: '%s | Open Wisdom Lab',
  },
  description:
    'Open Wisdom Lab - A creative education space fostering innovation, interdisciplinary thinking, and problem-driven learning for future talents.',
  keywords: [
    'Open Wisdom Lab',
    'OWL',
    'education',
    'innovation',
    'STEM',
    'problem-driven learning',
    'interdisciplinary',
  ],
  authors: [{ name: 'Open Wisdom Lab' }],
  creator: 'Open Wisdom Lab',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: 'en_US',
    siteName: 'Open Wisdom Lab',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <LenisProvider>{children}</LenisProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
