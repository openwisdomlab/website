import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageHero } from '@/components/sections/page-hero';
import { CurriculumLevels } from '@/components/sections/curriculum/levels';
import { CTA } from '@/components/sections/cta';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('page.curriculum');
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default function CurriculumPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <PageHero titleKey="page.curriculum.title" subtitleKey="page.curriculum.subtitle" />
        <CurriculumLevels />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
