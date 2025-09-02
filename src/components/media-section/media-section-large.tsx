'use client';
import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { Headphones, AudioLines, Play, Globe, Mic, Radio } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MediaSectionLarge() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const finalQuoteRef = useRef<HTMLDivElement>(null);

  const mediaProducts = [
    {
      id: 1,
      title: "Témoignages",
      subtitle: "Pour nourrir la foi",
      description: "Des histoires authentiques de chrétiens francophones qui transforment leur communauté. On apprend, on rit, on réfléchit à travers des témoignages inspirants.",
      icon: Mic,
      color: "#ff6b35",
      gradient: "from-[#ff6b35]/20 to-[#ff6b35]/10",
      borderColor: "border-[#ff6b35]/20",
      image: "/images/temoignages.png"
    },
    {
      id: 2,
      title: "Enseignements",
      subtitle: "Pour nourrir la foi",
      description: "Une programmation riche qui nourrit l'âme et fortifie la foi. Des enseignements profonds qui abordent les questions essentielles de la vie chrétienne.",
      icon: Radio,
      color: "#32a3ff",
      gradient: "from-[#32a3ff]/20 to-[#32a3ff]/10",
      borderColor: "border-[#32a3ff]/20",
      image: "/images/sakal.png"
    },
    {
      id: 3,
      title: "Débats",
      subtitle: "Pour créer du lien",
      description: "Des débats équilibrés et respectueux qui explorent les grands enjeux contemporains. Un espace de dialogue pour grandir ensemble dans la foi.",
      icon: Play,
      color: "#ff6b35",
      gradient: "from-[#ff6b35]/20 to-[#ff6b35]/10",
      borderColor: "border-[#ff6b35]/20",
      image: "/images/cest-quoi-leglise.jpg"
    },
    {
      id: 4,
      title: "Divertissements",
      subtitle: "Pour créer du lien",
      description: "Des contenus divertissants qui rassemblent la communauté francophone chrétienne. On partage, on construit une culture commune dans la joie.",
      icon: Globe,
      color: "#7c3aed",
      gradient: "from-[#7c3aed]/20 to-[#7c3aed]/10",
      borderColor: "border-[#7c3aed]/20",
      image: "/images/epainos.png"
    },
    {
      id: 5,
      title: "Francophonie Connectée",
      subtitle: "Pour dépasser les frontières",
      description: "Une francophonie connectée qui unit les chrétiens du monde entier. Découvrez la richesse de notre diversité culturelle dans l'unité.",
      icon: AudioLines,
      color: "#a855f7",
      gradient: "from-[#a855f7]/20 to-[#a855f7]/10",
      borderColor: "border-[#a855f7]/20",
      image: "/images/connecte.png"
    },
    {
      id: 6,
      title: "Culture Commune",
      subtitle: "Pour dépasser les frontières",
      description: "Nous construisons ensemble une culture commune pour les chrétiens francophones. Des voix qui rassemblent, des histoires qui inspirent.",
      icon: Headphones,
      color: "#f59e0b",
      gradient: "from-[#f59e0b]/20 to-[#f59e0b]/10",
      borderColor: "border-[#f59e0b]/20",
      image: "/images/culture-commune.jpg"
    }
  ];

  // Ensure ScrollTrigger is properly refreshed after component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && ScrollTrigger) {
        ScrollTrigger.refresh();
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (!sectionRef.current || !containerRef.current || !cardsRef.current || !textContentRef.current) return;

    const section = sectionRef.current;
    const container = containerRef.current;
    const cards = cardsRef.current;
    const textContent = textContentRef.current;

    // Check for reduced motion preference
    const prefersReduced = typeof window !== 'undefined' && 
      window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      // Show all elements immediately if user prefers reduced motion
      gsap.set([badgeRef.current, titleRef.current, subtitleRef.current, descriptionRef.current, finalQuoteRef.current], {
        opacity: 1,
        y: 0,
        scale: 1
      });
      mediaProducts.forEach((_, index) => {
        const card = cards.querySelector(`[data-card="${index}"]`) as HTMLElement;
        const textBlock = textContent.querySelector(`[data-text="${index}"]`) as HTMLElement;
        if (card && textBlock) {
          gsap.set([card, textBlock], { opacity: 1, x: 0, y: 0, scale: 1 });
        }
      });
      return;
    }

    // Wait for any previous ScrollTrigger animations to settle
    const initDelay = gsap.delayedCall(0.1, () => {
      ScrollTrigger.refresh();
    });

    // Header entrance animation
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Set initial states for header elements
    gsap.set(badgeRef.current, { opacity: 0, y: 30, scale: 0.8 });
    gsap.set(titleRef.current, { opacity: 0, y: 50 });
    gsap.set(subtitleRef.current, { opacity: 0, y: 30 });
    gsap.set(descriptionRef.current, { opacity: 0, y: 20 });

    // Animate header elements
    headerTl.to(badgeRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)"
    })
    .to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5")
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")
    .to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4");

    // Set initial card positions to prevent jumping
    mediaProducts.forEach((_, index) => {
      const card = cards.querySelector(`[data-card="${index}"]`) as HTMLElement;
      if (card) {
        gsap.set(card, { 
          opacity: 0,
          z: index,
          transformOrigin: "center center"
        });
        
        // Ensure proper initial positioning
        const cardMain = card.querySelector('div[class*="h-[600px]"]') as HTMLElement;
        if (cardMain) {
          gsap.set(cardMain, { 
            scale: 0.9, 
            y: 30,
            transformOrigin: "center center"
          });
        }
      }
    });

    // Set up the pinning for the cards container with improved settings
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      pin: cards,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      refreshPriority: -1 // Lower priority to execute after other ScrollTriggers
    });

    // Create scroll-driven fade animations for each card/text pair
    mediaProducts.forEach((product, index) => {
      const card = cards.querySelector(`[data-card="${index}"]`) as HTMLElement;
      const textBlock = textContent.querySelector(`[data-text="${index}"]`) as HTMLElement;
      
      if (card && textBlock) {
        // Get card main element
        const cardMain = card.querySelector('div[class*="h-[600px]"]') as HTMLElement;
        const imageElement = card.querySelector('img') as HTMLElement;

        // Set text block initial state
        gsap.set(textBlock, { opacity: 0, x: -50 });
        
        // Image initial state
        if (imageElement) gsap.set(imageElement, { scale: 1.1 });

        // Create scroll-driven timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: textBlock,
            start: "top center+=200",
            end: "bottom center-=200",
            scrub: 2,
            onUpdate: (self) => {
              const progress = self.progress;
              
              // Only show current card
              if (progress > 0.1 && progress < 0.9) {
                gsap.set(card, { zIndex: 100 + index });
              } else {
                gsap.set(card, { zIndex: index });
              }
            }
          }
        });

        // Entrance animation (fade in)
        tl.to(card, {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out"
        }, 0)
        .to(cardMain, {
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.2)"
        }, 0.1)
        .to(textBlock, {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power2.out"
        }, 0.1);

        // Image animation
        if (imageElement) {
          tl.to(imageElement, {
            scale: 1,
            duration: 0.6,
            ease: "power2.out"
          }, 0.2);
        }

        // Exit animation (fade out) - only for non-last cards
        if (index < mediaProducts.length - 1) {
          tl.to(card, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.in"
          }, 0.7)
          .to(cardMain, {
            scale: 0.95,
            y: -20,
            duration: 0.4,
            ease: "power2.in"
          }, 0.7)
          .to(textBlock, {
            opacity: 0.2,
            x: 30,
            duration: 0.3,
            ease: "power2.in"
          }, 0.8);
        } else {
          // Last card stays visible
          tl.to(card, {
            opacity: 1,
            duration: 0.2
          }, 0.7)
          .to(textBlock, {
            opacity: 1,
            duration: 0.2
          }, 0.8);
        }
      }
    });

    // Final quote animation
    gsap.set(finalQuoteRef.current, { opacity: 0, y: 50, scale: 0.9 });
    
    ScrollTrigger.create({
      trigger: finalQuoteRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to(finalQuoteRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.3)"
        });
      },
      onLeave: () => {
        gsap.to(finalQuoteRef.current, {
          opacity: 0.7,
          duration: 0.3
        });
      },
      onEnterBack: () => {
        gsap.to(finalQuoteRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out"
        });
      }
    });

    // Cleanup function
    return () => {
      initDelay.kill();
    };

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      id="media" 
      className="relative bg-gray-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fe1556]/5 via-gray-900 to-[#32a3ff]/5 pointer-events-none"></div>
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-[#32a3ff]/10 rounded-full blur-2xl sm:blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#fe1556]/10 rounded-full blur-2xl sm:blur-3xl animate-pulse pointer-events-none"></div>

      {/* Header Section */}
      <div ref={headerRef} className="relative z-10 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div ref={badgeRef} className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#32a3ff]/10 border border-[#32a3ff]/30 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
            <Headphones className="w-3 h-3 sm:w-4 sm:h-4 text-[#32a3ff] mr-1.5 sm:mr-2" />
            <span className="text-[#32a3ff] text-xs sm:text-sm font-medium">CONTENU AUDIO</span>
          </div>
          <h2 ref={titleRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">Émissions & Podcasts</h2>
          <p ref={subtitleRef} className="text-lg sm:text-xl text-gray-300 mb-3 sm:mb-4">Des voix qui rassemblent. Des histoires qui inspirent.</p>
          <p ref={descriptionRef} className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 max-w-4xl mx-auto px-2">Nous créons des contenus audiovisuels qui renforcent notre foi et nous rapprochent les uns des autres. Dans nos émissions et podcasts, on apprend, on rit, on réfléchit, on partage… et on construit une culture commune pour les chrétiens francophones.</p>
        </div>
      </div>

      {/* Main Content Container */}
      <div ref={containerRef} className="relative" style={{ height: `${(mediaProducts.length + 1) * 100}vh` }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start">
            
            {/* Left Side - Text Content */}
            <div ref={textContentRef} className="space-y-24 sm:space-y-32">
              {mediaProducts.map((product, index) => (
                <div 
                  key={product.id}
                  data-text={index}
                  className="opacity-0 min-h-screen flex items-center"
                >
                  <div className="space-y-4 sm:space-y-6">
                    <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800/50 border border-gray-700/50 rounded-full backdrop-blur-sm">
                      <product.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" style={{ color: product.color }} />
                      <span className="text-xs sm:text-sm font-medium" style={{ color: product.color }}>
                        {product.subtitle.toUpperCase()}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                      {product.title}
                    </h3>
                    
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                      <button 
                        className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-white text-sm sm:text-base transition-all duration-300 hover:scale-105"
                        style={{ 
                          backgroundColor: product.color,
                          boxShadow: `0 10px 30px ${product.color}20`
                        }}
                      >
                        Écouter maintenant
                      </button>
                      <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 border border-gray-600 rounded-full text-gray-300 hover:text-white hover:border-gray-400 transition-all duration-300 text-sm sm:text-base">
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Final Quote */}
              <div ref={finalQuoteRef} className="text-center py-24 sm:py-32 min-h-screen flex items-center justify-center">
                <div className="relative inline-block max-w-2xl mx-auto px-4">
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 italic font-medium bg-gradient-to-r from-[#fe1556]/20 to-[#32a3ff]/20 rounded-2xl sm:rounded-full px-6 sm:px-8 py-4 sm:py-6 border border-white/10 backdrop-blur-sm">
                    "Parce qu'écouter ensemble, c'est déjà commencer à marcher ensemble."
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#fe1556]/10 to-[#32a3ff]/10 rounded-2xl sm:rounded-full blur-xl opacity-50"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Pinned Cards */}
            <div ref={cardsRef} className="h-screen flex items-center justify-center sticky top-0">
              <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
                {mediaProducts.map((product, index) => (
                  <div
                    key={product.id}
                    data-card={index}
                    className="absolute inset-0 opacity-0 flex items-center justify-center"
                  >
                    {/* Main Card */}
                    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                      {/* Background Image */}
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
