import { ChevronDown, Heart } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleWordsRef = useRef<HTMLSpanElement[]>([]);
  const titleMainRef = useRef<HTMLSpanElement>(null);
  const titleSubRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const button1Ref = useRef<HTMLButtonElement>(null);
  const button2Ref = useRef<HTMLButtonElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);
  const floatingBg1Ref = useRef<HTMLDivElement>(null);
  const floatingBg2Ref = useRef<HTMLDivElement>(null);
  const floatingBg3Ref = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    // Check for reduced motion preference
    const prefersReduced = typeof window !== 'undefined' && 
      window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReduced) {
      // Show all elements immediately if user prefers reduced motion
      gsap.set([badgeRef.current, titleMainRef.current, titleSubRef.current, subtitleRef.current, descriptionRef.current, button1Ref.current, button2Ref.current, chevronRef.current, floatingBg1Ref.current, floatingBg2Ref.current], {
        opacity: 1,
        y: 0,
        scale: 1,
        x: 0,
        rotationX: 0,
        rotationY: 0,
        filter: "blur(0px)"
      });
      gsap.set(underlineRef.current, { scaleX: 1 });
      gsap.set(titleWordsRef.current, { opacity: 1, y: 0, rotationX: 0 });
      return;
    }

    const tl = gsap.timeline({ delay: 0.3 });

    // Background animations (continuous)
    gsap.to(".bg-gradient-animated", {
      backgroundPosition: "100% 50%",
      duration: 8,
      ease: "none",
      repeat: -1,
      yoyo: true
    });

    // Gradient text animation (continuous)
    gsap.to(".gradient-text", {
      backgroundPosition: "100% 50%",
      duration: 3,
      ease: "none",
      repeat: -1,
      yoyo: true
    });

    // Set initial states with more sophisticated positioning
    gsap.set(badgeRef.current, {
      opacity: 0,
      y: 30,
      scale: 0.8
    });

    gsap.set([...titleWordsRef.current, titleSubRef.current], {
      opacity: 0,
      y: 60,
      rotationX: -90
    });

    gsap.set([subtitleRef.current, descriptionRef.current], {
      opacity: 0,
      y: 40,
      filter: "blur(10px)"
    });

    gsap.set([button1Ref.current, button2Ref.current], {
      opacity: 0,
      y: 30,
      scale: 0.9,
      rotationY: -15
    });

    gsap.set(chevronRef.current, {
      opacity: 0,
      y: 20,
      scale: 0.8
    });

    gsap.set([floatingBg1Ref.current, floatingBg2Ref.current], {
      scale: 0,
      opacity: 0,
      rotation: -180
    });

    gsap.set(underlineRef.current, {
      scaleX: 0,
      transformOrigin: "left center"
    });

    // Animate background elements with smooth entrance
    tl.to([floatingBg1Ref.current, floatingBg2Ref.current], {
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 2,
      ease: "elastic.out(1, 0.8)",
      stagger: 0.15
    })
    // Animate badge with bounce
    .to(badgeRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "back.out(1.7)"
    }, "-=1.5")
    // Animate title words with stagger (word by word)
    .to(titleWordsRef.current, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.15
    }, "-=0.8")
    // Animate subtitle with slight delay
    .to(titleSubRef.current, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.4")
    // Animate underline
    .to(underlineRef.current, {
      scaleX: 1,
      duration: 1.5,
      ease: "power2.out"
    }, "-=0.5")
    // Animate subtitle text
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out"
    }, "-=1")
    // Animate description
    .to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out"
    }, "-=0.7")
    // Animate buttons with individual control
    .to(button1Ref.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationY: 0,
      duration: 0.8,
      ease: "back.out(1.5)"
    }, "-=0.5")
    .to(button2Ref.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationY: 0,
      duration: 0.8,
      ease: "back.out(1.5)"
    }, "-=0.6")
    // Animate chevron
    .to(chevronRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "elastic.out(1, 0.6)"
    }, "-=0.3");

    // Continuous floating animations (outside of main timeline)
    gsap.to(floatingBg1Ref.current, {
      y: -15,
      x: 10,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2 // Start after main timeline
    });

    gsap.to(floatingBg2Ref.current, {
      y: 20,
      x: -15,
      duration: 5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2.5 // Start after main timeline
    });

    // Floating orbs animations (outside main timeline)
    orbsRef.current.forEach((orb, index) => {
      if (orb && index < 2) {
        gsap.to(orb, {
          y: index % 2 === 0 ? -20 : -15,
          x: index % 2 === 0 ? 10 : -10,
          duration: 4 + index * 1.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 3 + index * 0.5 // Staggered start after main timeline
        });
      }
    });

  }, { scope: containerRef });



  return (
    <section ref={containerRef} className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="bg-gradient-animated absolute inset-0 bg-gradient-to-r from-[#fe1556]/20 via-gray-900 to-[#32a3ff]/20" style={{backgroundSize: '200% 200%'}}></div>
      
      {/* Simplified Floating Orbs */}
      <div className="absolute inset-0">
        {/* Main floating orbs */}
        <div ref={el => { if (el) { orbsRef.current[0] = el; floatingBg1Ref.current = el; } }} className="absolute top-20 left-10 w-72 h-72 bg-[#fe1556]/20 rounded-full blur-3xl"></div>
        <div ref={el => { if (el) { orbsRef.current[1] = el; floatingBg2Ref.current = el; } }} className="absolute bottom-20 right-10 w-80 h-80 bg-[#32a3ff]/20 rounded-full blur-3xl"></div>
      </div>
      


      <div className="relative container mx-auto max-w-7xl px-4 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div ref={badgeRef} className="inline-flex items-center px-4 py-2 bg-[#fe1556]/10 border border-[#fe1556]/30 rounded-full mb-8 backdrop-blur-sm">
            <Heart className="w-4 h-4 text-[#fe1556] mr-2" />
            <span className="text-[#fe1556] text-sm font-medium">Unis pour impacter</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {/* Word-by-word animation for MAGAPE */}
            <div className="block">
              <span ref={el => { if (el) titleWordsRef.current[0] = el; }} className="inline-block mr-2">M</span>
              <span ref={el => { if (el) titleWordsRef.current[1] = el; }} className="inline-block mr-2">A</span>
              <span ref={el => { if (el) titleWordsRef.current[2] = el; }} className="inline-block mr-2">G</span>
              <span ref={el => { if (el) titleWordsRef.current[3] = el; }} className="inline-block mr-2">A</span>
              <span ref={el => { if (el) titleWordsRef.current[4] = el; }} className="inline-block mr-2">P</span>
              <span ref={el => { if (el) titleWordsRef.current[5] = el; }} className="inline-block">E</span>
            </div>
            <span ref={titleSubRef} className="gradient-text block text-3xl md:text-5xl mt-4 bg-gradient-to-r from-[#fe1556] via-[#32a3ff] to-[#fe1556] bg-clip-text text-transparent relative" style={{backgroundSize: '200% 200%'}}>
              La force de l'unité chrétienne
              <div ref={underlineRef} className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#fe1556] to-[#32a3ff] rounded-full"></div>
            </span>
          </h1>

          <p ref={subtitleRef} className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
            "Et si, ensemble, nous devenions la preuve vivante que l'unité chrétienne change le monde ?"
          </p>

          <p ref={descriptionRef} className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            <strong className="text-[#fe1556]">M</strong> pour Mission. <strong className="text-[#32a3ff]">Agapè</strong> pour l'amour inconditionnel de Dieu.
            Nous créons des actions, des produits et des événements qui fortifient notre identité en Christ.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button ref={button1Ref} className="px-8 py-4 bg-[#fe1556] text-white rounded-full font-semibold text-lg cursor-pointer transform perspective-1000 relative overflow-hidden group">
              <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out"></div>
              <span className="relative z-10">Recevoir l'ebook gratuit</span>
            </button>
            <button ref={button2Ref} className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border border-white/20 cursor-pointer transform perspective-1000 hover:bg-white/20 transition-colors duration-300">
              <span>Découvrir notre mission</span>
            </button>
          </div>

          <div ref={chevronRef} className="flex items-center justify-center space-x-2 text-gray-400">
            <ChevronDown className="text-[#32a3ff]" />
            <span>Découvrez notre vision</span>
          </div>
        </div>
      </div>
    </section>
  );
}
