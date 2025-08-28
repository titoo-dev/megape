"use client";

import Nav from '@/components/Nav';
import MissionSection from '@/components/MissionSection';
import EnBrefSection from '@/components/EnBrefSection';
import ExplainSection from '@/components/ExplainSection';
import ProductsSection from '@/components/ProductsSection';
import MediaSection from '@/components/MediaSection';
import CahierSection from '@/components/CahierSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HeroServer from '@/components/HeroSever';
import SEOHead, { structuredData } from '@/components/SEOHead';

export default function Home() {
  return (
    <>
      <SEOHead
        title="MAGAPE - La force de l'unité chrétienne | Unis pour impacter"
        description="MAGAPE rassemble la francophonie chrétienne autour d'une mission d'unité. Découvrez nos maillots, podcasts, cahiers ECODIM et rejoignez le mouvement pour impacter le monde ensemble."
        keywords={[
          "MAGAPE",
          "unité chrétienne",
          "francophonie chrétienne",
          "mission chrétienne",
          "maillots chrétiens",
          "podcasts chrétiens",
          "cahier ECODIM",
          "communauté chrétienne",
          "foi chrétienne",
          "impact chrétien",
          "agapè",
          "amour inconditionnel",
          "églises francophones",
          "jeunesse chrétienne",
          "ressources chrétiennes"
        ]}
        image="/images/magape-og-image.jpg"
        url="https://magape.org"
        type="website"
        structuredData={structuredData.homepage}
        canonical="https://magape.org"
      />
      <Nav />
      <HeroServer />
      <EnBrefSection />
      <MissionSection />
      <ExplainSection />
      <ProductsSection />
      <MediaSection />
      <CahierSection />
      <ContactSection />
      {/* <StatsSection /> */}
      <Footer />
    </>
  );
}
