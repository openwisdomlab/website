import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { CoreValues } from '@/components/sections/core-values';
import { Features } from '@/components/sections/features';
import { CTA } from '@/components/sections/cta';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <CoreValues />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
