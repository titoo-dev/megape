"use client";

import Nav from '@/components/Nav';
import MissionSection from '@/components/MissionSection';
import ProductsSection from '@/components/ProductsSection';
import MediaSection from '@/components/MediaSection';
import CahierSection from '@/components/CahierSection';
import ContactSection from '@/components/ContactSection';
// import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import HeroServer from '@/components/HeroSever';

export default function Home() {
  return (
    <>
      <Nav />
      <HeroServer />
      <MissionSection />
      <ProductsSection />
      <MediaSection />
      <CahierSection />
      <ContactSection />
      {/* <StatsSection /> */}
      <Footer />
    </>
  );
}
