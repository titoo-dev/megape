"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LogoCarousel() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Données des logos
  const logos = [
    {
      src: "/images/logo_2.png",
      alt: "Logo MAGAPE 2",
      width: 200,
      height: 120
    },
    {
      src: "/images/logo_3.png", 
      alt: "Logo MAGAPE 3",
      width: 200,
      height: 120
    },
    {
      src: "/magape_bg_removed.png",
      alt: "Logo MAGAPE",
      width: 200,
      height: 120
    },
    {
      src: "/christ_des_christ_roi_des_rois.png",
      alt: "Christ Roi des Rois",
      width: 200,
      height: 120
    }
  ];

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Create enough duplicates to ensure seamless scrolling
  const LogoItem = ({ logo, index }: { logo: typeof logos[0], index: number }) => (
    <div
      key={`${logo.src}-${index}`}
      className="flex-shrink-0 mx-6 sm:mx-8 md:mx-10"
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className="w-40 h-24 sm:w-48 sm:h-28 md:w-60 md:h-36 object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
      />
    </div>
  );

  return (
    <section className="relative py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 overflow-hidden">
      {/* Transition gradient from MediaSection colors to CahierSection colors */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#fe1556]/3 via-gray-900 to-yellow-500/5"></div> */}
      
      {/* Top glow - transitioning from MediaSection pink/blue to neutral */}
      <div className="absolute top-0 left-0 w-full h-32 sm:h-40 bg-gradient-to-b from-[#32a3ff]/8 to-transparent blur-2xl sm:blur-3xl"></div>
      
      {/* Bottom glow - transitioning to CahierSection yellow/orange */}
      
      {/* Side accent glows for visual interest */}
      {/* <div className="absolute top-1/2 right-5 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-orange-500/6 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 left-5 sm:left-20 w-20 h-20 sm:w-28 sm:h-28 bg-[#32a3ff]/6 rounded-full blur-xl animate-pulse"></div> */}
      
      <div className="relative w-full">
        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* First scrolling track */}
          <div 
            className={`
              flex items-center
              ${prefersReducedMotion 
                ? '' 
                : 'animate-[marquee_40s_linear_infinite]'
              }
            `}
            style={{ width: 'max-content' }}
          >
            {/* Render logos multiple times for seamless effect */}
            {Array.from({ length: 3 }).map((_, setIndex) => 
              logos.map((logo, logoIndex) => (
                <LogoItem 
                  key={`set-${setIndex}-logo-${logoIndex}`} 
                  logo={logo} 
                  index={setIndex * logos.length + logoIndex} 
                />
              ))
            )}
          </div>

          {/* Second scrolling track for even smoother effect */}
          <div 
            className={`
              flex items-center absolute top-0 left-0
              ${prefersReducedMotion 
                ? 'hidden' 
                : 'animate-[marquee2_40s_linear_infinite]'
              }
            `}
            style={{ width: 'max-content' }}
          >
            {/* Render logos multiple times for seamless effect */}
            {Array.from({ length: 3 }).map((_, setIndex) => 
              logos.map((logo, logoIndex) => (
                <LogoItem 
                  key={`set2-${setIndex}-logo-${logoIndex}`} 
                  logo={logo} 
                  index={setIndex * logos.length + logoIndex} 
                />
              ))
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        /* Pause animation on hover */
        .animate-\\[marquee_40s_linear_infinite\\]:hover,
        .animate-\\[marquee2_40s_linear_infinite\\]:hover {
          animation-play-state: paused;
        }

        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_40s_linear_infinite\\],
          .animate-\\[marquee2_40s_linear_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
