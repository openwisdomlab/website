import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageHero } from '@/components/sections/page-hero';
import { ChallengesList } from '@/components/sections/challenges/challenges-list';
import { CTA } from '@/components/sections/cta';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('page.challenges');
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default function ChallengesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <PageHero titleKey="page.challenges.title" subtitleKey="page.challenges.subtitle" />
        <ChallengesList />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
