'use client';
import { useState, useEffect } from 'react';
import MediaSectionLarge from './media-section/media-section-large';
import MediaSectionMobile from './media-section/media-section-mobile';

export default function MediaSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile ? <MediaSectionMobile /> : <MediaSectionLarge />;
}
