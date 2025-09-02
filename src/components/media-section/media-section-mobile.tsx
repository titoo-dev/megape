'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { Headphones, AudioLines, Play, Globe, Mic, Radio } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MediaSectionMobile() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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

  useGSAP(() => {
    if (!sectionRef.current || !containerRef.current || !textContentRef.current) return;

    const section = sectionRef.current;
    const container = containerRef.current;
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
        const textBlock = textContent.querySelector(`[data-text="${index}"]`) as HTMLElement;
        if (textBlock) {
          gsap.set(textBlock, { opacity: 1, x: 0, y: 0, scale: 1 });
        }
      });
      return;
    }

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

    // Mobile animations - simpler reveal animations
    mediaProducts.forEach((product, index) => {
      const textBlock = textContent.querySelector(`[data-text="${index}"]`) as HTMLElement;
      
      if (textBlock) {
        // Set initial state for mobile
        gsap.set(textBlock, { 
          opacity: 0,
          y: 50
        });

        // Create entrance animation for mobile
        gsap.timeline({
          scrollTrigger: {
            trigger: textBlock,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }).to(textBlock, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        });

        // Background image parallax effect for mobile
        const bgImage = textBlock.querySelector('img') as HTMLElement;
        if (bgImage) {
          gsap.set(bgImage, { scale: 1.1 });
          
          gsap.timeline({
            scrollTrigger: {
              trigger: textBlock,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          }).to(bgImage, {
            scale: 1,
            ease: "none"
          });
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

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      id="media" 
      className="relative bg-gray-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fe1556]/5 via-gray-900 to-[#32a3ff]/5 pointer-events-none"></div>
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-[#32a3ff]/10 rounded-full blur-2xl sm:blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[#fe1556]/10 rounded-full blur-2xl sm:blur-3xl animate-pulse pointer-events-none"></div>

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
        
        {/* Mobile Layout */}
        <div>
          <div ref={textContentRef} className="space-y-0">
            {mediaProducts.map((product, index) => (
              <div 
                key={product.id}
                data-text={index}
                className="relative min-h-screen flex items-center overflow-hidden"
              >
                {/* Background Image with Clamp Effect */}
                <div className="absolute inset-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"
                    style={{
                      background: `linear-gradient(to top, rgb(17 24 39), rgb(17 24 39 / 0.9), rgb(17 24 39 / 0.6)), linear-gradient(135deg, ${product.color}10, transparent 70%)`
                    }}
                  ></div>
                  
                  {/* Top Clamp Effect */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-900 to-transparent"></div>
                  
                  {/* Bottom Clamp Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20">
                  <div className="max-w-sm sm:max-w-lg space-y-4 sm:space-y-6">
                    <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-900/70 border border-gray-700/50 rounded-full backdrop-blur-sm">
                      <product.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" style={{ color: product.color }} />
                      <span className="text-xs sm:text-sm font-medium" style={{ color: product.color }}>
                        {product.subtitle.toUpperCase()}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
                      {product.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed drop-shadow-md">
                      {product.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <button 
                        className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-white text-sm sm:text-base transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                        style={{ 
                          backgroundColor: product.color,
                          boxShadow: `0 10px 30px ${product.color}30`
                        }}
                      >
                        Écouter maintenant
                      </button>
                      <button className="px-5 sm:px-6 py-2.5 sm:py-3 border border-gray-400/80 rounded-full text-gray-200 hover:text-white hover:border-gray-300 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base">
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div 
                  className="absolute top-1/4 right-4 sm:right-8 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full blur-xl sm:blur-2xl opacity-20"
                  style={{ backgroundColor: product.color }}
                ></div>
                <div 
                  className="absolute bottom-1/3 left-4 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full blur-lg sm:blur-xl opacity-15"
                  style={{ backgroundColor: product.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Quote */}
        <div ref={finalQuoteRef} className="relative text-center py-24 sm:py-32 min-h-screen flex items-center justify-center px-4 sm:px-6">
          <div className="relative inline-block max-w-xl sm:max-w-2xl">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 italic font-medium bg-gradient-to-r from-[#fe1556]/20 to-[#32a3ff]/20 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 border border-white/10 backdrop-blur-sm">
              "Parce qu'écouter ensemble, c'est déjà commencer à marcher ensemble."
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-[#fe1556]/10 to-[#32a3ff]/10 rounded-xl sm:rounded-2xl blur-xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
