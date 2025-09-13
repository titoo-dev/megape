"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, Star, Zap, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

export default function ShopPage() {

  const router = useRouter();

  const products = [
    {
      id: 'maillot-classique',
      name: 'Maillot MAGAPE - Classique',
      description: 'Le design original aux couleurs emblématiques',
      longDescription: 'Le Maillot MAGAPE Classique arbore le design original avec les couleurs emblématiques de la communauté. C\'est une bannière d\'unité pour dire au monde : "Nous sommes une seule famille en Christ".',
      price: 'Sur demande',
      image: '/image-1.png',
      category: 'Vêtement',
      features: [
        'Design original MAGAPE',
        'Couleurs emblématiques',
        'Symbole fédérateur'
      ],
      gradient: 'from-[#fe1556]/20 to-[#32a3ff]/20',
      accentColor: '#fe1556',
      icon: Zap
    },
    {
      id: 'maillot-premium',
      name: 'Maillot MAGAPE - Premium',
      description: 'Version premium avec finitions spéciales',
      longDescription: 'Le Maillot MAGAPE Premium offre une version haut de gamme avec des finitions spéciales et des détails brodés. Pour ceux qui veulent exprimer leur appartenance avec élégance.',
      price: 'Sur demande',
      image: '/images/maillot_model_2.jpg',
      category: 'Vêtement',
      features: [
        'Finitions premium',
        'Détails brodés',
        'Qualité supérieure'
      ],
      gradient: 'from-blue-600/20 to-purple-600/20',
      accentColor: '#3b82f6',
      icon: Zap
    },
    {
      id: 'cahier-petits',
      name: 'Cahier ECODIM - Petits',
      description: 'Pour les 4-6 ans... en s\'amusant',
      longDescription: 'Le Cahier ECODIM Petits est spécialement conçu pour les tout-petits de 4 à 6 ans. Avec des activités simples et colorées, il transmet les valeurs chrétiennes de manière ludique et adaptée à leur âge.',
      price: 'Sur demande',
      image: '/images/child-book.jpg',
      category: 'Éducation',
      features: [
        'Activités simples et colorées',
        'Histoires adaptées aux petits',
        'Illustrations attrayantes'
      ],
      gradient: 'from-green-500/20 to-emerald-500/20',
      accentColor: '#10b981',
      icon: Star
    },
    {
      id: 'cahier-moyens',
      name: 'Cahier ECODIM - Moyens',
      description: 'Pour les 7-10 ans... en apprenant',
      longDescription: 'Le Cahier ECODIM Moyens s\'adresse aux enfants de 7 à 10 ans. Il propose des exercices progressifs et des jeux éducatifs pour approfondir leur connaissance de la Bible tout en s\'amusant.',
      price: 'Sur demande',
      image: '/images/book_model_2.png',
      category: 'Éducation',
      features: [
        'Exercices progressifs',
        'Jeux éducatifs variés',
        'Réflexions adaptées'
      ],
      gradient: 'from-yellow-500/20 to-orange-500/20',
      accentColor: '#f59e0b',
      icon: Star
    },
    {
      id: 'cahier-grands',
      name: 'Cahier ECODIM - Grands',
      description: 'Pour les 11-14 ans... en grandissant',
      longDescription: 'Le Cahier ECODIM Grands est destiné aux pré-adolescents de 11 à 14 ans. Il propose des défis plus complexes et des réflexions profondes pour les accompagner dans leur croissance spirituelle.',
      price: 'Sur demande',
      image: '/images/child-book.jpg',
      category: 'Éducation',
      features: [
        'Défis complexes',
        'Réflexions approfondies',
        'Préparation à l\'adolescence'
      ],
      gradient: 'from-purple-500/20 to-indigo-500/20',
      accentColor: '#8b5cf6',
      icon: Star
    }
  ];


  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700">
        <div className="absolute inset-0 bg-gradient-to-r from-[#fe1556]/5 via-transparent to-[#32a3ff]/5"></div>
        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="link"
              size="sm"
              className="text-gray-300 hover:text-white"
              onClick={() => router.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Retour
            </Button>
            <Badge variant="outline" className="border-[#fe1556]/30 text-[#fe1556]">
              5 produits
            </Badge>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full mb-6 backdrop-blur-sm">
              <ShoppingBag className="w-4 h-4 text-[#fe1556] mr-2" />
              <span className="text-[#fe1556] text-sm font-medium">BOUTIQUE MAGAPE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Nos Produits
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Découvrez nos produits conçus pour renforcer l'unité chrétienne et transmettre les valeurs de l'Évangile.
            </p>
          </div>
        </div>
      </header>

      {/* Products Grid */}
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product) => {
            const IconComponent = product.icon;

            return (
              <Card
                key={product.id}
                className={`group relative bg-gradient-to-br ${product.gradient} border-gray-700 hover:border-gray-600 transition-all duration-500 overflow-hidden backdrop-blur-sm hover:shadow-2xl cursor-pointer md:cursor-default`}
                onClick={() => {
                  // Only make clickable on mobile/tablet (below md breakpoint)
                  if (window.innerWidth < 768) {
                    router.push(`/shop/${product.id}`);
                  }
                }}
              >

                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-gray-800/50 text-gray-300 border-gray-600"
                    >
                      {product.category}
                    </Badge>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${product.accentColor}20` }}
                    >
                      <IconComponent
                        className="w-5 h-5"
                        style={{ color: product.accentColor }}
                      />
                    </div>
                  </div>

                  <CardTitle className="text-2xl sm:text-3xl text-white mb-2 group-hover:text-gray-100 transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-lg mb-4">
                    {product.description}
                  </CardDescription>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {product.longDescription}
                  </p>
                </CardHeader>

                <CardContent className="relative z-10">
                  {/* Product Image */}
                  <div className="relative mb-6 group/image">
                    <div className="relative w-full h-64 sm:h-80 bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-all duration-500 group-hover/image:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${product.accentColor}20` }}
                        >
                          <Check
                            className="w-3 h-3"
                            style={{ color: product.accentColor }}
                          />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-white">{product.price}</span>
                    </div>
                    <div className="flex gap-3">
                      <Link href={`/shop/${product.id}`} className="hidden md:block">
                        <Button
                          variant="outline"
                          className="px-4 py-3 border-gray-600 text-white bg-gray-700 rounded-full cursor-pointer"
                        >
                          Voir détails
                        </Button>
                      </Link>
                      <div className="md:hidden text-right">
                        <p className="text-gray-400 text-sm">Tapez pour voir les détails</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
