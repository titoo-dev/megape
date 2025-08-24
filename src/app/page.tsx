"use client";

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import MissionSection from '@/components/MissionSection';
import ProductsSection from '@/components/ProductsSection';
import MediaSection from '@/components/MediaSection';
import CahierSection from '@/components/CahierSection';
import ContactSection from '@/components/ContactSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <MissionSection />
      <ProductsSection />
      <MediaSection />
      <CahierSection />
      <ContactSection />
      <StatsSection />
                  <Footer />
    </>
  );
}
