import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageHero } from '@/components/sections/page-hero';
import { BlogGrid } from '@/components/sections/blog/blog-grid';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('blog');
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <PageHero titleKey="blog.title" subtitleKey="blog.subtitle" />
        <BlogGrid />
      </main>
      <Footer />
    </>
  );
}
