"use client";

import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Heart, Zap, Shield, Users, Book, Mic } from 'lucide-react';

export default function EnBrefSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoScrollTween = useRef<gsap.core.Tween | null>(null);
  
  // États pour la gestion du scroll tactile
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const dragStartTime = useRef(0);
  const lastMoveTime = useRef(0);
  const lastMoveX = useRef(0);
  const inertiaAnimation = useRef<gsap.core.Tween | null>(null);
  const idleTimer = useRef<NodeJS.Timeout | null>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

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

  // Using more duplication for better seamless infinite scroll
  const duplicatedCards = [...cards, ...cards, ...cards];

  // Fonction pour reprendre l'animation automatique
  const resumeAutoScroll = () => {
    if (!trackRef.current || isDragging) return;

    // Tuer toute animation existante
    autoScrollTween.current?.kill();

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const isTablet = typeof window !== 'undefined' && window.innerWidth < 768;
    const cardWidth = isMobile ? 288 : 320;
    const gap = isMobile ? 16 : isTablet ? 24 : 32;
    const actualCardWidth = cardWidth + gap;
    const singleSetWidth = cards.length * actualCardWidth;

    // Récupérer la position actuelle
    const currentTransform = gsap.getProperty(trackRef.current, "x") as number;
    
    // Calculer la durée restante basée sur la position actuelle
    const remainingDistance = Math.abs(currentTransform % singleSetWidth);
    const progressRatio = remainingDistance / singleSetWidth;
    const remainingDuration = 40 * (1 - progressRatio);
    
    // Créer une nouvelle animation à partir de la position actuelle
    autoScrollTween.current = gsap.to(trackRef.current, {
      x: currentTransform - singleSetWidth,
      duration: Math.max(remainingDuration, 10), // Minimum 10 secondes
      ease: "none",
      repeat: -1,
      onRepeat: () => {
        // Reset position seamlessly when animation repeats
        const newCurrentTransform = gsap.getProperty(trackRef.current, "x") as number;
        gsap.set(trackRef.current, { x: newCurrentTransform + singleSetWidth });
      }
    });

    console.log('Animation resumed from position:', currentTransform);
  };

  // Fonction pour arrêter le timer d'inactivité et reprendre l'auto-scroll
  const startIdleTimer = () => {
    // Nettoyer le timer existant
    if (idleTimer.current) {
      clearTimeout(idleTimer.current);
    }
    
    console.log('Starting idle timer...');
    
    // Démarrer un nouveau timer de 2 secondes (réduit pour plus de réactivité)
    idleTimer.current = setTimeout(() => {
      console.log('Idle timer expired, resuming auto-scroll...');
      if (!isDragging && trackRef.current) {
        setIsUserInteracting(false);
        resumeAutoScroll();
      }
    }, 500);
  };

  // Fonction pour gérer le scroll infini seamless
  const handleSeamlessLoop = () => {
    if (!trackRef.current) return;
    
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const isTablet = typeof window !== 'undefined' && window.innerWidth < 768;
    const cardWidth = isMobile ? 288 : 320;
    const gap = isMobile ? 16 : isTablet ? 24 : 32;
    const actualCardWidth = cardWidth + gap;
    const singleSetWidth = cards.length * actualCardWidth;
    
    const currentTransform = gsap.getProperty(trackRef.current, "x") as number;
    
    // Repositionnement seamless avec 3 ensembles de cartes
    // Si on a scrollé trop loin vers la droite (au-delà du premier ensemble)
    if (currentTransform > 0) {
      const newPosition = currentTransform - singleSetWidth;
      gsap.set(trackRef.current, { x: newPosition });
      setCurrentX(newPosition);
    }
    // Si on a scrollé trop loin vers la gauche (au-delà du deuxième ensemble)  
    else if (currentTransform < -singleSetWidth * 2) {
      const newPosition = currentTransform + singleSetWidth;
      gsap.set(trackRef.current, { x: newPosition });
      setCurrentX(newPosition);
    }
  };

  // Fonctions de gestion du scroll tactile
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    if (!trackRef.current) return;
    
    console.log('Touch/Mouse start detected');
    
    // Marquer comme interaction utilisateur et arrêter l'animation automatique
    setIsUserInteracting(true);
    autoScrollTween.current?.kill();
    inertiaAnimation.current?.kill();
    
    // Nettoyer le timer d'inactivité existant
    if (idleTimer.current) {
      clearTimeout(idleTimer.current);
    }
    
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    
    // Récupérer la position actuelle du track
    const currentTransform = gsap.getProperty(trackRef.current, "x") as number;
    setScrollLeft(currentTransform);
    setCurrentX(currentTransform);
    
    dragStartTime.current = Date.now();
    lastMoveTime.current = Date.now();
    lastMoveX.current = clientX;
    
    // Empêcher la sélection de texte
    e.preventDefault();
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startX;
    const newX = scrollLeft + deltaX;
    
    // Calculer la vitesse pour l'inertie
    const now = Date.now();
    const timeDelta = now - lastMoveTime.current;
    if (timeDelta > 0) {
      setVelocity((clientX - lastMoveX.current) / timeDelta);
    }
    lastMoveTime.current = now;
    lastMoveX.current = clientX;
    
    setCurrentX(newX);
    gsap.set(trackRef.current, { x: newX });
    
    // Gérer le scroll seamless pendant le glissement
    handleSeamlessLoop();
    
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    if (!isDragging || !trackRef.current) return;
    
    console.log('Touch/Mouse end detected');
    
    setIsDragging(false);
    
    // Appliquer l'inertie si la vitesse est suffisante
    let finalX = currentX;
    if (Math.abs(velocity) > 0.5) {
      const inertiaDistance = velocity * 300; // Facteur d'inertie
      finalX = currentX + inertiaDistance;
    }
    
    // Animation vers la position finale avec inertie (sans normalisation)
    if (Math.abs(velocity) > 0.5) {
      inertiaAnimation.current = gsap.to(trackRef.current, {
        x: finalX,
        duration: 0.6,
        ease: "power2.out",
        onUpdate: () => {
          // Gestion seamless du scroll infini pendant l'animation d'inertie
          handleSeamlessLoop();
        },
        onComplete: () => {
          console.log('Inertia animation completed');
          // Démarrer le timer d'inactivité pour reprendre l'auto-scroll
          startIdleTimer();
        }
      });
    } else {
      // Si pas d'inertie, démarrer le timer immédiatement
      console.log('No inertia, starting timer immediately');
      startIdleTimer();
    }
    
    setCurrentX(finalX);
    setVelocity(0);
  };

  useGSAP(() => {
    // Check for reduced motion preference
    const prefersReduced = typeof window !== 'undefined' && 
      window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      return;
    }

    // Auto scroll is now enabled on all devices

    // Configuration du carrousel infini avec technique de repositionnement - Responsive
    if (trackRef.current) {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
      const isTablet = typeof window !== 'undefined' && window.innerWidth < 768;
      
      const cardWidth = isMobile ? 288 : 320; // w-72 = 288px, w-80 = 320px
      const gap = isMobile ? 16 : isTablet ? 24 : 32; // space-x-4 = 16px, space-x-6 = 24px, space-x-8 = 32px
      const actualCardWidth = cardWidth + gap;
      const singleSetWidth = cards.length * actualCardWidth;
      
      // Position de départ (au milieu du deuxième ensemble pour permettre le scroll dans les deux directions)
      gsap.set(trackRef.current, {
        x: -singleSetWidth
      });

      // Fonction pour créer l'animation auto-scroll
      const createAutoScroll = () => {
        autoScrollTween.current = gsap.to(trackRef.current, {
          x: -singleSetWidth * 2,
          duration: 40,
          ease: "none",
          repeat: -1,
          onRepeat: () => {
            // Reset position seamlessly when animation repeats
            gsap.set(trackRef.current, { x: -singleSetWidth });
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
      inertiaAnimation.current?.kill();
      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }
    };
  }, []);


  return (
    <section 
      ref={sectionRef} 
      className="relative py-12 sm:py-16 md:py-20 bg-gray-900 overflow-hidden"
      onMouseEnter={() => {
        console.log('Mouse entered section');
        setIsUserInteracting(true);
        autoScrollTween.current?.kill();
        if (idleTimer.current) {
          clearTimeout(idleTimer.current);
        }
      }}
      onMouseLeave={() => {
        console.log('Mouse left section');
        if (!isDragging) {
          startIdleTimer();
        }
      }}
    >

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Carrousel */}
        <div className="relative overflow-hidden">
          {/* Shadow masks on sides - responsive */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 bg-gradient-to-r from-gray-900 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 bg-gradient-to-l from-gray-900 to-transparent z-20 pointer-events-none"></div>
          
          <div 
            ref={trackRef} 
            className="flex space-x-4 sm:space-x-6 md:space-x-8 touch-pan-x cursor-grab active:cursor-grabbing" 
            style={{ 
              width: 'fit-content',
              userSelect: isDragging ? 'none' : 'auto'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseMove={handleTouchMove}
            onMouseUp={handleTouchEnd}
            onMouseLeave={handleTouchEnd}
          >
            {duplicatedCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className={`flex-shrink-0 w-72 sm:w-80 md:w-80 h-80 sm:h-88 md:h-96 bg-gradient-to-br ${card.bgGradient} rounded-2xl sm:rounded-3xl border border-white/10 backdrop-blur-sm p-6 sm:p-8 hover:border-white/20 transition-all duration-500 group cursor-pointer relative overflow-hidden`}
                >
                  {/* Effet de shine au hover */}
                  <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out"></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icône */}
                    <div className="mb-4 sm:mb-6">
                      <IconComponent 
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300" 
                        style={{ color: card.color }}
                      />
                    </div>

                    {/* Contenu */}
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-white transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg font-medium mb-3 sm:mb-4" style={{ color: card.color }}>
                        {card.subtitle}
                      </p>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                        {card.description}
                      </p>
                    </div>

                    {/* Orbe décoratif */}
                    <div 
                      className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full blur-xl sm:blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"
                      style={{ backgroundColor: card.color }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
