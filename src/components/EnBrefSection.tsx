"use client";

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Heart, Zap, Shield, Users, Book, Mic, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EnBrefSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRefs = useRef<HTMLDivElement[]>([]);
  const navigationRef = useRef<HTMLDivElement>(null);
  const autoScrollTween = useRef<gsap.core.Tween | null>(null);
  const userInteracted = useRef(false);

  // Données des cartes pour MAGAPE
  const cards = [
    {
      icon: Heart,
      title: "Mission d'unité",
      subtitle: "Rassembler la francophonie chrétienne",
      description: "M pour Mission, Agapè pour l'amour inconditionnel de Dieu. Nous créons des ponts d'unité entre les chrétiens.",
      color: "#fe1556",
      bgGradient: "from-[#fe1556]/30 to-[#fe1556]/10"
    },
    {
      icon: Shield,
      title: "Identité fortifiée",
      subtitle: "Renforcer notre foi ensemble",
      description: "Des actions, produits et événements qui fortifient notre identité en Christ et notre sentiment d'appartenance.",
      color: "#32a3ff",
      bgGradient: "from-[#32a3ff]/30 to-[#32a3ff]/10"
    },
    {
      icon: Users,
      title: "Communauté unie",
      subtitle: "Une famille en Christ",
      description: "Rejoignez une communauté de chrétiens passionnés qui croient en la force de l'unité pour impacter le monde.",
      color: "#fe1556",
      bgGradient: "from-[#fe1556]/30 to-[#fe1556]/10"
    },
    {
      icon: Zap,
      title: "Impact illimité",
      subtitle: "Ensemble, nous changeons le monde",
      description: "Quand les chrétiens se rassemblent autour d'une même vision, l'impact devient illimité et transformateur.",
      color: "#32a3ff",
      bgGradient: "from-[#32a3ff]/30 to-[#32a3ff]/10"
    },
    {
      icon: Book,
      title: "Ressources enrichissantes",
      subtitle: "Cahiers, ebooks et formations",
      description: "Des outils pédagogiques comme le Cahier ECODIM et notre ebook gratuit pour nourrir votre foi.",
      color: "#fe1556",
      bgGradient: "from-[#fe1556]/30 to-[#fe1556]/10"
    },
    {
      icon: Mic,
      title: "Voix inspirantes",
      subtitle: "Podcasts et émissions",
      description: "Des contenus audiovisuels qui rassemblent, inspirent et renforcent notre culture commune francophone.",
      color: "#32a3ff",
      bgGradient: "from-[#32a3ff]/30 to-[#32a3ff]/10"
    }
  ];

  // Créer suffisamment de copies pour un scroll infini fluide
  const duplicatedCards = [...cards, ...cards, ...cards, ...cards];

  useGSAP(() => {
    // Check for reduced motion preference
    const prefersReduced = typeof window !== 'undefined' && 
      window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      gsap.set([titleRef.current, navigationRef.current, ...cardsRefs.current], {
        opacity: 1,
        y: 0
      });
      return;
    }

    // Animation d'entrée de la section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // États initiaux
    gsap.set(titleRef.current, {
      opacity: 0,
      y: 50
    });

    gsap.set(navigationRef.current, {
      opacity: 0,
      y: 30
    });

    gsap.set(cardsRefs.current, {
      opacity: 0,
      y: 60,
      scale: 0.9
    });

    // Animations d'entrée
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    .to(navigationRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")
    .to(cardsRefs.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.1
    }, "-=0.4");

    // Configuration du carrousel infini
    if (trackRef.current) {
      const cardWidth = 320;
      const gap = 32;
      const actualCardWidth = cardWidth + gap;
      const originalSetLength = cards.length;
      const totalCards = duplicatedCards.length;
      
      // Position de départ - commencer avec le premier set visible
      const startPosition = -actualCardWidth * originalSetLength;
      
      gsap.set(trackRef.current, {
        x: startPosition
      });

      // Fonction pour créer l'animation auto-scroll
      const createAutoScroll = () => {
        if (userInteracted.current) return;
        
        autoScrollTween.current = gsap.to(trackRef.current, {
          x: startPosition - (actualCardWidth * originalSetLength),
          duration: 30,
          ease: "none",
          repeat: -1,
          onUpdate: () => {
            if (!trackRef.current || userInteracted.current) return;
            
            const currentX = gsap.getProperty(trackRef.current, "x") as number;
            const threshold = startPosition - (actualCardWidth * originalSetLength * 0.9);
            
            // Repositionnement seamless quand on approche de la fin
            if (currentX <= threshold) {
              gsap.set(trackRef.current, { x: startPosition });
            }
          }
        });
      };

      createAutoScroll();
    }



  }, { scope: sectionRef });

  // Cleanup effect
  useEffect(() => {
    return () => {
      autoScrollTween.current?.kill();
    };
  }, []);

  const handleUserInteraction = () => {
    userInteracted.current = true;
    autoScrollTween.current?.kill();
  };

  const scrollLeft = () => {
    if (!trackRef.current) return;
    
    handleUserInteraction();
    
    const cardWidth = 320;
    const gap = 32;
    const actualCardWidth = cardWidth + gap;
    const originalSetLength = cards.length;
    const startPosition = -actualCardWidth * originalSetLength;
    
    const currentX = gsap.getProperty(trackRef.current, "x") as number;
    const newX = currentX + actualCardWidth;
    
    // Gérer le wrap-around vers la droite
    const maxX = startPosition + actualCardWidth;
    if (newX > maxX) {
      // Se téléporter à la fin du dernier set pour un effet seamless
      const wrapX = startPosition - (actualCardWidth * (originalSetLength - 1));
      gsap.set(trackRef.current, { x: wrapX });
    } else {
      gsap.to(trackRef.current, {
        x: newX,
        duration: 0.6,
        ease: "power2.out"
      });
    }
  };

  const scrollRight = () => {
    if (!trackRef.current) return;
    
    handleUserInteraction();
    
    const cardWidth = 320;
    const gap = 32;
    const actualCardWidth = cardWidth + gap;
    const originalSetLength = cards.length;
    const startPosition = -actualCardWidth * originalSetLength;
    
    const currentX = gsap.getProperty(trackRef.current, "x") as number;
    const newX = currentX - actualCardWidth;
    
    // Gérer le wrap-around vers la gauche
    const minX = startPosition - (actualCardWidth * (originalSetLength + 1));
    if (newX < minX) {
      // Se téléporter au début du premier set pour un effet seamless
      const wrapX = startPosition + actualCardWidth;
      gsap.set(trackRef.current, { x: wrapX });
    } else {
      gsap.to(trackRef.current, {
        x: newX,
        duration: 0.6,
        ease: "power2.out"
      });
    }
  };

  return (
    <section ref={sectionRef} className="relative py-20 bg-gray-900 overflow-hidden">

      <div className="relative container mx-auto max-w-7xl px-4">
        {/* En-tête */}
        <div className="flex items-center justify-between mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-white">
            En bref
          </h2>
          
          <div ref={navigationRef} className="flex items-center space-x-4">
            <button 
              onClick={scrollLeft}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
            <button 
              onClick={scrollRight}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors duration-300 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carrousel */}
        <div className="relative overflow-hidden">
          {/* Shadow masks on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-20 pointer-events-none"></div>
          
          <div ref={trackRef} className="flex space-x-8" style={{ width: 'fit-content' }}>
            {duplicatedCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  ref={el => { if (el) cardsRefs.current[index] = el; }}
                  className={`flex-shrink-0 w-80 h-96 bg-gradient-to-br ${card.bgGradient} rounded-3xl border border-white/10 backdrop-blur-sm p-8 hover:border-white/20 transition-all duration-500 group cursor-pointer relative overflow-hidden`}
                >
                  {/* Effet de shine au hover */}
                  <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out"></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icône */}
                    <div className="mb-6">
                      <IconComponent 
                        className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" 
                        style={{ color: card.color }}
                      />
                    </div>

                    {/* Contenu */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-lg font-medium mb-4" style={{ color: card.color }}>
                        {card.subtitle}
                      </p>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                        {card.description}
                      </p>
                    </div>

                    {/* Orbe décoratif */}
                    <div 
                      className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"
                      style={{ backgroundColor: card.color }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicateur de scroll */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Faites défiler pour découvrir toutes nos missions
          </p>
        </div>
      </div>
    </section>
  );
}
