import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageHero } from '@/components/sections/page-hero';
import { SpacesShowcase } from '@/components/sections/spaces/showcase';
import { CTA } from '@/components/sections/cta';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('page.spaces');
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default function SpacesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <PageHero titleKey="page.spaces.title" subtitleKey="page.spaces.subtitle" />
        <SpacesShowcase />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
