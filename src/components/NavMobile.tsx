"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface NavMobileProps {
  scrolled: boolean;
}

export default function NavMobile({ scrolled }: NavMobileProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { value: "mission", label: "Mission", href: "#mission" },
    { value: "products", label: "Produits", href: "#products" },
    { value: "media", label: "Médias", href: "#media" },
    { value: "contact", label: "Contact", href: "#contact" }
  ];

  const handleNavigation = (value: string) => {
    const item = navigationItems.find(item => item.value === value);
    if (item) {
      setIsOpen(false);
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-lg border-b border-gray-700' : 'bg-transparent'}`}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image src="/agape-removebg-preview.png" alt="MAGAPE Logo" width={80} height={38} className="rounded-lg" />
          </div>
          
          <div className="flex items-center space-x-3">
            <Select onValueChange={handleNavigation} open={isOpen} onOpenChange={setIsOpen}>
              <SelectTrigger className="w-32 border-gray-600 bg-gray-800/50 text-white hover:border-gray-400 transition-colors">
                <SelectValue placeholder="Menu" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800/95 border-gray-600 backdrop-blur-lg">
                {navigationItems.map((item) => (
                  <SelectItem 
                    key={item.value} 
                    value={item.value}
                    className="text-white hover:text-white hover:bg-gray-700/50 cursor-pointer"
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </nav>
  );
}
