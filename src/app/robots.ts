import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/admin/',
        '/private/',
        '*.json',
      ],
    },
    sitemap: 'https://magape.org/sitemap.xml',
    host: 'https://magape.org',
  };
}
