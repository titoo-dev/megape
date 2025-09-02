"use client";

import { useState, useEffect } from 'react';
import NavMobile from './NavMobile';
import NavLarge from './NavLarge';

export default function Nav() {
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
      <NavLarge scrolled={scrolled} />
      <NavMobile scrolled={scrolled} />
    </>
  );
}
