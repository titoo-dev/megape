'use client';

import Image from 'next/image';
import { Zap, Check, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    
    if (!section || !image) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section is in viewport
      const isInViewport = rect.top < windowHeight && rect.bottom > 0;
      
      if (isInViewport) {
        // Calculate scroll progress within the section
        const sectionHeight = rect.height;
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + sectionHeight)));
        
        // Apply transform based on scroll progress
        const translateY = (scrollProgress - 0.5) * 100; // Range from -50 to 50
        image.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="products" 
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #fe1556 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-800 border border-gray-700 rounded-full mb-6">
            <Zap className="w-4 h-4 text-[#fe1556] mr-2" />
            <span className="text-[#fe1556] text-sm font-medium">PRODUIT PHARE</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Les maillots MAGAPE
          </h2>

          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Portez vos couleurs. Faites partie de l'équipe.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Le sport, et surtout le football, rassemble des millions de personnes. Quand on porte le même maillot, on joue pour la même cause. Le Maillot MAGAPE est bien plus qu'un vêtement : 
            <strong className="text-[#32a3ff]"> c'est une bannière d'unité pour dire au monde : "Nous sommes une seule famille en Christ".</strong>
          </p>
        </div>

        {/* Image Section with Sticky Animation */}
        <div className="mb-16 flex justify-center">
          <div 
            ref={imageRef}
            className="relative w-80 h-80 md:w-96 md:h-96 transition-transform duration-75 ease-out"
          >
            <div className="relative w-full h-full bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 group">
              <Image 
                src="/image-1.png" 
                alt="Maillot MAGAPE" 
                fill 
                className="object-cover transition-all duration-500 group-hover:scale-110" 
              />
            </div>
            
            {/* Image caption */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <div className="flex items-center justify-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-[#fe1556] rounded-full"></div>
                <span className="text-sm font-medium">Portez vos valeurs</span>
                <div className="w-2 h-2 bg-[#32a3ff] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300">
            <div className="w-12 h-12 bg-[#fe1556]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-[#fe1556]" />
            </div>
            <h4 className="text-white font-semibold mb-2">Design aux couleurs MAGAPE</h4>
            <p className="text-gray-400 text-sm">Fièrement porté par nos membres</p>
          </div>

          <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300">
            <div className="w-12 h-12 bg-[#32a3ff]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-[#32a3ff]" />
            </div>
            <h4 className="text-white font-semibold mb-2">Symbole fédérateur</h4>
            <p className="text-gray-400 text-sm">Pour vos rassemblements, vos cultes, vos sorties</p>
          </div>

          <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300">
            <div className="w-12 h-12 bg-[#fe1556]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-[#fe1556]" />
            </div>
            <h4 className="text-white font-semibold mb-2">Personnalisation</h4>
            <p className="text-gray-400 text-sm">Nous aidons les églises et groupes de jeunesse à créer leurs uniformes</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="group px-8 py-4 bg-[#fe1556] hover:bg-[#e6134d] text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#fe1556]/25">
            <span className="flex items-center">
              Rejoignez l'équipe MAGAPE 
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
