import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageHero } from '@/components/sections/page-hero';
import { ProblemDrivenLearning } from '@/components/sections/education/problem-driven';
import { CTA } from '@/components/sections/cta';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('page.education');
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default function EducationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <PageHero titleKey="page.education.title" subtitleKey="page.education.subtitle" />
        <ProblemDrivenLearning />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
