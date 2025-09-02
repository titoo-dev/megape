"use client";

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Heart, Zap, Shield, Users, Book, Mic, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EnBrefSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
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

  // Using minimal duplication for seamless infinite scroll
  const duplicatedCards = [...cards, ...cards];

  useGSAP(() => {
    // Check for reduced motion preference
    const prefersReduced = typeof window !== 'undefined' && 
      window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      return;
    }

    // Check if screen is mobile or small (disable auto scroll on mobile)
    const isMobileOrSmall = typeof window !== 'undefined' && window.innerWidth < 768;

    if (isMobileOrSmall) {
      return;
    }

    // Configuration du carrousel infini avec technique de repositionnement
    if (trackRef.current) {
      const cardWidth = 320;
      const gap = 32;
      const actualCardWidth = cardWidth + gap;
      const singleSetWidth = cards.length * actualCardWidth;
      
      // Position de départ
      gsap.set(trackRef.current, {
        x: 0
      });

      // Fonction pour créer l'animation auto-scroll
      const createAutoScroll = () => {
        if (userInteracted.current) return;
        if (isMobileOrSmall) return;
        
        autoScrollTween.current = gsap.to(trackRef.current, {
          x: -singleSetWidth,
          duration: 20,
          ease: "none",
          repeat: -1,
          onRepeat: () => {
            // Reset position seamlessly when animation repeats
            gsap.set(trackRef.current, { x: 0 });
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
    const singleSetWidth = cards.length * actualCardWidth;
    
    const currentX = gsap.getProperty(trackRef.current, "x") as number;
    let newX = currentX + actualCardWidth;
    
    // Handle wrap-around
    if (newX > 0) {
      newX = -singleSetWidth + actualCardWidth;
    }
    
    gsap.to(trackRef.current, {
      x: newX,
      duration: 0.6,
      ease: "power2.out"
    });
  };

  const scrollRight = () => {
    if (!trackRef.current) return;
    
    handleUserInteraction();
    
    const cardWidth = 320;
    const gap = 32;
    const actualCardWidth = cardWidth + gap;
    const singleSetWidth = cards.length * actualCardWidth;
    
    const currentX = gsap.getProperty(trackRef.current, "x") as number;
    let newX = currentX - actualCardWidth;
    
    // Handle wrap-around
    if (newX <= -singleSetWidth) {
      newX = 0;
    }
    
    gsap.to(trackRef.current, {
      x: newX,
      duration: 0.6,
      ease: "power2.out"
    });
  };

  return (
    <section ref={sectionRef} className="relative py-20 bg-gray-900 overflow-hidden">

      <div className="relative container mx-auto max-w-7xl px-4">
        {/* En-tête */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            En bref
          </h2>
          
          <div className="flex items-center space-x-4">
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
            Défilement automatique infini • Utilisez les flèches pour naviguer
          </p>
        </div>
      </div>
    </section>
  );
}
