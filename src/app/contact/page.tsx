import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageHero } from '@/components/sections/page-hero';
import { ContactForm } from '@/components/sections/contact/contact-form';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('page.contact');
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <PageHero titleKey="page.contact.title" subtitleKey="page.contact.subtitle" />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
