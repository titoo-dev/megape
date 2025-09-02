"use client";

import Image from 'next/image';

interface NavLargeProps {
  scrolled: boolean;
}

export default function NavLarge({ scrolled }: NavLargeProps) {
  return (
    <nav className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-lg border-b border-[#fe1556]/20' : 'bg-transparent'}`}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <Image src="/agape-removebg-preview.png" alt="MAGAPE Logo" width={100} height={48} className="rounded-lg" />
            </div>
            <div className="flex items-center space-x-6">
              <a href="#mission" className="text-gray-300 hover:text-[#fe1556] transition-colors">Mission</a>
              <a href="#products" className="text-gray-300 hover:text-[#32a3ff] transition-colors">Produits</a>
              <a href="#media" className="text-gray-300 hover:text-[#fe1556] transition-colors">Médias</a>
              <a href="#contact" className="text-gray-300 hover:text-[#32a3ff] transition-colors">Contact</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2.5 border-2 border-[#fe1556] text-[#fe1556] rounded-full font-medium transition-all duration-250 hover:bg-[#fe1556] hover:text-white hover:cursor-pointer">
              Rejoindre le mouvement
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
