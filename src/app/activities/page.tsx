import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageHero } from '@/components/sections/page-hero';
import { ActivitiesGallery } from '@/components/sections/activities/gallery';
import { CTA } from '@/components/sections/cta';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('page.activities');
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default function ActivitiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <PageHero titleKey="page.activities.title" subtitleKey="page.activities.subtitle" />
        <ActivitiesGallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
