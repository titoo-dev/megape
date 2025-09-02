"use client";

import { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    if (!buttonRef.current) return;

    // Check for reduced motion preference
    const prefersReduced = typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      // Show button in final state if user prefers reduced motion
      gsap.set(buttonRef.current, {
        right: '1rem',
        left: 'auto',
        width: 'auto'
      });
      return;
    }

    // Set initial state - full width
    gsap.set(buttonRef.current, {
      left: '1rem',
      right: '1rem',
      width: 'auto'
    });

    // Create scroll-driven animation with multiple steps
    ScrollTrigger.create({
      trigger: "body",
      start: "150px top",
      end: "800px top",
      scrub: 1.5,
      onUpdate: (self) => {
        const progress = self.progress;

        if (progress <= 0.2) {
          gsap.to(buttonRef.current, {
            left: `${1 + (progress * 10)}rem`,
            right: '1rem',
            duration: 0.2,
            ease: "power1.out"
          });
        } else if (progress <= 0.5) {
          const stepProgress = (progress - 0.2) / 0.3;
          gsap.to(buttonRef.current, {
            left: `${3 + (stepProgress * 15)}rem`,
            right: '1rem',
            duration: 0.2,
            ease: "power1.out"
          });
        } else {
          gsap.to(buttonRef.current, {
            left: 'auto',
            right: '1rem',
            duration: 0.2,
            ease: "power2.out"
          });
        }
      }
    });
  });

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
      {/* <ExplainSection /> */}
      <ProductsSection />
      <MediaSection />
      <CahierSection />
      <ContactSection />
      {/* <StatsSection /> */}
      <Footer />

      {/* Floating Action Button - Only on mobile/small screens */}
      <button
        ref={buttonRef}
        className="
          fixed bottom-6 z-50 lg:hidden
          bg-[#fe1556] text-white font-semibold 
          py-3 px-4 rounded-full shadow-lg overflow-hidden group
        "
        onClick={() => {
          window.open('https://magape.org/#contact', '_self');
        }}
      >
        <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out"></div>
        <span className="text-sm font-semibold text-center block relative z-10">
          Recevoir l'ebook gratuit
        </span>
      </button>
    </>
  );
}
