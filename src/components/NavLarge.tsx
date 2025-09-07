"use client";

import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
            <Link href="/shop" className="flex items-center space-x-2 px-4 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/30">
              <ShoppingBag className="w-4 h-4" />
              <span>Boutique</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
