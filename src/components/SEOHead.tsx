'use client';

import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  structuredData?: object;
  noIndex?: boolean;
  canonical?: string;
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  image = '/images/magape-og-image.jpg',
  url,
  type = 'website',
  structuredData,
  noIndex = false,
  canonical
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords.length > 0) {
      metaKeywords.setAttribute('content', keywords.join(', '));
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink && canonical) {
      canonicalLink.setAttribute('href', canonical);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && description) {
      ogDescription.setAttribute('content', description);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage && image) {
      ogImage.setAttribute('content', image);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && url) {
      ogUrl.setAttribute('content', url);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', type);
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle && title) {
      twitterTitle.setAttribute('content', title);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription && description) {
      twitterDescription.setAttribute('content', description);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage && image) {
      twitterImage.setAttribute('content', image);
    }

    // Update robots meta tag
    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      if (noIndex) {
        robotsMeta.setAttribute('content', 'noindex, nofollow');
      } else {
        robotsMeta.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
      }
    }

    // Add structured data if provided
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [title, description, keywords, image, url, type, structuredData, noIndex, canonical]);

  return null;
}

// Predefined structured data for different page types
export const structuredData = {
  // For the main page
  homepage: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MAGAPE",
    "url": "https://magape.org",
    "description": "MAGAPE rassemble la francophonie chrétienne autour d'une mission d'unité. Découvrez nos maillots, podcasts, cahiers ECODIM et rejoignez le mouvement pour impacter le monde ensemble.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://magape.org/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },

  // For products (maillots)
  product: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Maillot MAGAPE",
    "description": "Le Maillot MAGAPE est bien plus qu'un vêtement : c'est une bannière d'unité pour dire au monde : 'Nous sommes une seule famille en Christ'.",
    "brand": {
      "@type": "Brand",
      "name": "MAGAPE"
    },
    "category": "Vêtements sportifs",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR",
      "price": "29.99"
    }
  },

  // For the cahier ECODIM
  book: {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "Cahier ECODIM",
    "description": "Le Cahier ECODIM est notre outil pour transmettre les valeurs chrétiennes dès le plus jeune âge. Comme un cahier de vacances, mais centré sur la Bible.",
    "author": {
      "@type": "Organization",
      "name": "MAGAPE"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MAGAPE"
    },
    "bookFormat": "https://schema.org/Paperback",
    "genre": "Religious Education"
  },

  // For podcasts/emissions
  podcast: {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "name": "Émissions & Podcasts MAGAPE",
    "description": "Des voix qui rassemblent. Des histoires qui inspirent. Nous créons des contenus audiovisuels qui renforcent notre foi et nous rapprochent les uns des autres.",
    "publisher": {
      "@type": "Organization",
      "name": "MAGAPE"
    },
    "genre": "Religion & Spirituality"
  },

  // For the contact/newsletter section
  contact: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact MAGAPE",
    "description": "Rejoignez notre newsletter et recevez gratuitement notre ebook 'Unis pour impacter' - Le guide pour bâtir l'unité chrétienne.",
    "mainEntity": {
      "@type": "Organization",
      "name": "MAGAPE",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "contact@magape.org"
      }
    }
  }
};
