import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AboutHero } from '@/components/sections/about/about-hero';
import { Vision } from '@/components/sections/about/vision';
import { CTA } from '@/components/sections/cta';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('page.about');
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <AboutHero />
        <Vision />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
