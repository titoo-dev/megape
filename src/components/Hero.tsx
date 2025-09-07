import Image from 'next/image';
import { useRef, useState, useTransition } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPending, startTransition] = useTransition();
  const floatingBg1Ref = useRef<HTMLDivElement>(null);
  const floatingBg2Ref = useRef<HTMLDivElement>(null);



  useGSAP(() => {
    // Check for reduced motion preference
    const prefersReduced = typeof window !== 'undefined' && 
      window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReduced) {
      // Show all elements immediately if user prefers reduced motion
      gsap.set([floatingBg1Ref.current, floatingBg2Ref.current], {
        opacity: 1,
        scale: 1,
        rotation: 0
      });
      return;
    }

    // Background animations (continuous)
    gsap.to(".bg-gradient-animated", {
      backgroundPosition: "100% 50%",
      duration: 8,
      ease: "none",
      repeat: -1,
      yoyo: true
    });

    // Set initial states for floating backgrounds
    gsap.set([floatingBg1Ref.current, floatingBg2Ref.current], {
      scale: 0,
      opacity: 0,
      rotation: -180
    });

    // Animate background elements with smooth entrance
    const tl = gsap.timeline({ delay: 0.5 });
    tl.to([floatingBg1Ref.current, floatingBg2Ref.current], {
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 2,
      ease: "elastic.out(1, 0.8)",
      stagger: 0.15
    });

    // Continuous floating animations - Responsive movement
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const floatingScale = isMobile ? 0.5 : 1;
    
    gsap.to(floatingBg1Ref.current, {
      y: -15 * floatingScale,
      x: 10 * floatingScale,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2
    });

    gsap.to(floatingBg2Ref.current, {
      y: 20 * floatingScale,
      x: -15 * floatingScale,
      duration: 5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2.5
    });

  }, { scope: containerRef });

  const handleImageLoad = () => {
    startTransition(() => {
      setIsLoaded(true);
    });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen bg-gray-900 overflow-hidden flex items-center justify-center">
      {/* Animated Background Gradient */}
      <div className="bg-gradient-animated absolute inset-0 bg-gradient-to-r from-[#fe1556]/20 via-gray-900 to-[#32a3ff]/20" style={{backgroundSize: '200% 200%'}}></div>
      
      {/* Floating Orbs - Centered positioning */}
      <div className="absolute inset-0">
        <div ref={floatingBg1Ref} className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-[#fe1556]/20 rounded-full blur-2xl sm:blur-3xl"></div>
        <div ref={floatingBg2Ref} className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-[#32a3ff]/20 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>
      
      {/* Logo container */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-8">
        <div 
          ref={logoRef}
          className={`relative w-[85vw] h-[45vh] xs:w-[80vw] xs:h-[40vh] sm:w-[75vw] sm:h-[45vh] md:w-[65vw] md:h-[50vh] lg:w-[60vw] lg:h-[55vh] xl:w-[55vw] xl:h-[60vh] 2xl:w-[50vw] 2xl:h-[65vh] transition-all duration-1000 ease-out transform ${
            isLoaded 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-95 translate-y-8'
          }`}
        >
          <Image
            src="/magape_bg_removed.png"
            alt="MAGAPE Logo"
            fill
            priority
            className="object-contain"
            onLoad={handleImageLoad}
          />
        </div>
      </div>
    </section>
  );
}
