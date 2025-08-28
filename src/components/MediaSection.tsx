'use client';
import { useState, useEffect } from 'react';
import MediaSectionLarge from './media-section/media-section-large';
import MediaSectionMobile from './media-section/media-section-mobile';
import SEOHead, { structuredData } from './SEOHead';

export default function MediaSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <SEOHead
        title="Émissions & Podcasts MAGAPE - Des voix qui rassemblent"
        description="Découvrez nos émissions et podcasts chrétiens francophones. Témoignages inspirants, enseignements profonds, débats équilibrés et contenus divertissants pour nourrir votre foi et créer du lien."
        keywords={[
          "podcasts chrétiens",
          "émissions chrétiennes",
          "témoignages chrétiens",
          "enseignements bibliques",
          "débats chrétiens",
          "contenus chrétiens",
          "audio chrétien",
          "francophonie chrétienne",
          "culture chrétienne",
          "ressources spirituelles"
        ]}
        image="/images/temoignages.png"
        url="https://magape.org/#media"
        type="website"
        structuredData={structuredData.podcast}
      />
      
      {isMobile ? <MediaSectionMobile /> : <MediaSectionLarge />}
    </>
  );
}
