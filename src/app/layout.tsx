import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MAGAPE - La force de l'unité chrétienne | Unis pour impacter",
    template: "%s | MAGAPE"
  },
  description: "MAGAPE rassemble la francophonie chrétienne autour d'une mission d'unité. Découvrez nos maillots, podcasts, cahiers ECODIM et rejoignez le mouvement pour impacter le monde ensemble.",
  keywords: [
    "MAGAPE",
    "unité chrétienne",
    "francophonie chrétienne",
    "mission chrétienne",
    "maillots chrétiens",
    "podcasts chrétiens",
    "cahier ECODIM",
    "communauté chrétienne",
    "foi chrétienne",
    "impact chrétien",
    "agapè",
    "amour inconditionnel",
    "églises francophones",
    "jeunesse chrétienne",
    "ressources chrétiennes"
  ],
  authors: [{ name: "MAGAPE Team" }],
  creator: "MAGAPE",
  publisher: "MAGAPE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://magape.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://magape.org",
    siteName: "MAGAPE",
    title: "MAGAPE - La force de l'unité chrétienne",
    description: "MAGAPE rassemble la francophonie chrétienne autour d'une mission d'unité. Découvrez nos maillots, podcasts, cahiers ECODIM et rejoignez le mouvement pour impacter le monde ensemble.",
    images: [
      {
        url: "/images/magape-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MAGAPE - La force de l'unité chrétienne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAGAPE - La force de l'unité chrétienne",
    description: "MAGAPE rassemble la francophonie chrétienne autour d'une mission d'unité. Rejoignez le mouvement pour impacter le monde ensemble.",
    images: ["/images/magape-twitter-image.jpg"],
    creator: "@magape_official",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "religion",
  classification: "Christian Ministry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#fe1556" />
        <meta name="msapplication-TileColor" content="#fe1556" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MAGAPE",
              "url": "https://magape.org",
              "logo": "https://magape.org/agape-removebg-preview.png",
              "description": "MAGAPE rassemble la francophonie chrétienne autour d'une mission d'unité. Nous créons des actions, des produits et des événements qui fortifient notre identité en Christ.",
              "foundingDate": "2024",
              "mission": "Unis pour impacter - Rassembler la francophonie chrétienne",
              "sameAs": [
                "https://facebook.com/magape",
                "https://twitter.com/magape_official",
                "https://instagram.com/magape_official"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@magape.org"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
