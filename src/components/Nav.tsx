"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-lg border-b border-[#fe1556]/20' : 'bg-transparent'}`}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <Image src="/agape-removebg-preview.png" alt="MAGAPE Logo" width={100} height={48} className="rounded-lg" />
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <a href="#mission" className="text-gray-300 hover:text-[#fe1556] transition-colors">Mission</a>
                <a href="#products" className="text-gray-300 hover:text-[#32a3ff] transition-colors">Produits</a>
                <a href="#media" className="text-gray-300 hover:text-[#fe1556] transition-colors">Médias</a>
                <a href="#contact" className="text-gray-300 hover:text-[#32a3ff] transition-colors">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden md:block px-6 py-2.5 border-2 border-[#fe1556] text-[#fe1556] rounded-full font-medium transition-all duration-250 hover:bg-[#fe1556] hover:text-white hover:cursor-pointer">
                Rejoindre le mouvement
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2 hover:text-[#fe1556] transition-colors">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#mission" className="text-2xl text-white hover:text-[#fe1556] transition-colors">Mission</a>
            <a href="#products" className="text-2xl text-white hover:text-[#32a3ff] transition-colors">Produits</a>
            <a href="#media" className="text-2xl text-white hover:text-[#fe1556] transition-colors">Médias</a>
            <a href="#contact" className="text-2xl text-white hover:text-[#32a3ff] transition-colors">Contact</a>
            <button className="px-8 py-3 bg-gradient-to-r from-[#fe1556] to-[#32a3ff] text-white rounded-full font-medium hover:shadow-lg hover:shadow-[#fe1556]/25 transition-all duration-300 hover:scale-105">
              Rejoindre le mouvement
            </button>
          </div>
        </div>
      )}
    </>
  );
}
