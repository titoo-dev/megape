"use client";

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FloatingActionButton() {
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
      width: 'auto',
    });

    // Create scroll-driven animation with multiple steps
    ScrollTrigger.create({
      trigger: "body",
      start: "150px top",
      end: "800px top",
      scrub: 1.5,
      onUpdate: (self) => {
        const progress = self.progress;

        gsap.to(buttonRef.current, {
          left: `${1 + (progress * 7)}rem`,
          right: '1rem',
          duration: 0.2,
          ease: "power1.out"
        });
      }
    });
  });

  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="
        fixed bottom-6 w-full z-50 lg:hidden
        bg-[#fe1556] text-white font-semibold 
        py-3 px-6 rounded-full shadow-lg overflow-hidden group
        hover:bg-[#e6134d] transition-colors duration-300
        cursor-pointer
      "
    >
      <span className="text-sm font-semibold text-center block relative z-10">
        Recevoir l'ebook gratuit
      </span>
    </button>
  );
}
