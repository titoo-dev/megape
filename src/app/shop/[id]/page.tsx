"use client";

import { useTransition, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import {
    ArrowLeft,
    Star,
    Heart,
    Zap,
    Check,
    Plus,
    Minus,
    Book,
    Users,
    Palette,
    Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel';
import { toast } from 'sonner';

interface ProductModel {
    id: string;
    name: string;
    image: string;
    description?: string;
}

interface ProductData {
    id: string;
    name: string;
    description: string;
    longDescription: string;
    price: string;
    category: string;
    features: string[];
    gradient: string;
    accentColor: string;
    icon: any;
    models: ProductModel[];
    sizes?: string[];
    specifications?: { [key: string]: string };
}

const productsData: { [key: string]: ProductData } = {
    maillot: {
        id: 'maillot',
        name: 'Maillot MAGAPE',
        description: 'Portez vos couleurs, faites partie de l\'équipe',
        longDescription: 'Le Maillot MAGAPE est bien plus qu\'un vêtement : c\'est une bannière d\'unité pour dire au monde : "Nous sommes une seule famille en Christ". Disponible en deux modèles exclusifs, chacun conçu pour exprimer votre appartenance à la communauté MAGAPE.',
        price: 'Sur demande',
        category: 'Vêtement',
        features: [
            'Design aux couleurs MAGAPE',
            'Symbole fédérateur',
            'Personnalisation disponible',
            'Matière respirante',
            'Coupe moderne',
            'Impression haute qualité'
        ],
        gradient: 'from-[#fe1556]/20 to-[#32a3ff]/20',
        accentColor: '#fe1556',
        icon: Zap,
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        models: [
            {
                id: 'classic',
                name: 'Modèle Classique',
                image: '/image-1.png',
                description: 'Le design original MAGAPE avec les couleurs emblématiques'
            },
            {
                id: 'premium',
                name: 'Modèle Premium',
                image: '/images/maillot_model_2.jpg',
                description: 'Version premium avec finitions spéciales et détails brodés'
            }
        ],
        specifications: {
            'Matière': '100% Polyester respirant',
            'Coupe': 'Moderne et ajustée',
            'Entretien': 'Lavage machine 30°C',
            'Impression': 'Sérigraphie haute qualité',
            'Origine': 'Fabriqué avec soin'
        }
    },
    cahier: {
        id: 'cahier',
        name: 'Cahier ECODIM',
        description: 'Former la nouvelle génération... en s\'amusant',
        longDescription: 'Le Cahier ECODIM est notre outil pour transmettre les valeurs chrétiennes dès le plus jeune âge. Comme un cahier de vacances, mais centré sur la Bible, il mêle apprentissage et jeux pour que les enfants grandissent dans la foi avec joie. Disponible en trois éditions adaptées à différents âges.',
        price: 'Sur demande',
        category: 'Éducation',
        features: [
            'Histoires inspirantes',
            'Jeux et activités',
            'Valeurs bibliques',
            'Illustrations colorées',
            'Exercices progressifs',
            'Guide pour parents'
        ],
        gradient: 'from-yellow-500/20 to-orange-500/20',
        accentColor: '#f59e0b',
        icon: Star,
        models: [
            {
                id: 'petits',
                name: 'Édition Petits (4-6 ans)',
                image: '/images/child-book.jpg',
                description: 'Conçu pour les tout-petits avec des activités simples et colorées'
            },
            {
                id: 'moyens',
                name: 'Édition Moyens (7-10 ans)',
                image: '/images/child-book.jpg',
                description: 'Pour les enfants d\'âge scolaire avec plus d\'exercices et de réflexion'
            },
            {
                id: 'grands',
                name: 'Édition Grands (11-14 ans)',
                image: '/images/child-book.jpg',
                description: 'Version avancée pour les pré-adolescents avec des défis plus complexes'
            }
        ],
        specifications: {
            'Pages': '64 pages couleur',
            'Format': 'A4 (21 x 29,7 cm)',
            'Papier': 'Papier écologique 120g',
            'Reliure': 'Spirale pour faciliter l\'usage',
            'Âge': 'Adapté selon l\'édition',
            'Langue': 'Français'
        }
    }
};

export default function ProductDetailPage() {
    const params = useParams();

    const id = params.id as string;

    const [isPending, startTransition] = useTransition();
    const [selectedModel, setSelectedModel] = useState(0);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();

    const product = productsData[id];

    if (!product) {
        notFound();
    }

    const IconComponent = product.icon;

    const handleContactClick = () => {
        startTransition(() => {
            const productInfo = {
                product: product.name,
                model: product.models[selectedModel]?.name,
                size: selectedSize || 'Non applicable',
                quantity: quantity
            };

            toast.success('Informations sauvegardées ! Redirection vers le formulaire de contact...', {
                description: `${productInfo.product} - ${productInfo.model}`
            });

            // Store product info in localStorage for the contact form
            localStorage.setItem('selectedProduct', JSON.stringify(productInfo));

            setTimeout(() => {
                window.location.href = '/#contact';
            }, 1500);
        });
    };

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

    const handleModelSelect = (modelIndex: number) => {
        startTransition(() => {
            setSelectedModel(modelIndex);
            if (carouselApi) {
                carouselApi.scrollTo(modelIndex);
            }
        });
    };

    // Sync selectedModel state when carousel changes via navigation arrows
    useEffect(() => {
        if (!carouselApi) return;

        const onSelect = () => {
            const current = carouselApi.selectedScrollSnap();
            setSelectedModel(current);
        };

        carouselApi.on('select', onSelect);
        
        return () => {
            carouselApi.off('select', onSelect);
        };
    }, [carouselApi]);

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Header */}
            <header className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-r from-[#fe1556]/5 via-transparent to-[#32a3ff]/5"></div>
                <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/shop"
                            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Retour à la boutique</span>
                        </Link>
                        <Badge variant="outline" className="border-gray-600 text-gray-300">
                            {product.category}
                        </Badge>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Left Column - Images */}
                    <div className="space-y-6">
                        {/* Main Image Carousel */}
                        <div className="relative">
                            <Carousel className="w-full" setApi={setCarouselApi}>
                                <CarouselContent>
                                    {product.models.map((model, index) => (
                                        <CarouselItem key={model.id}>
                                            <div className="relative aspect-square bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                                                <Image
                                                    src={model.image}
                                                    alt={model.name}
                                                    fill
                                                    className="object-cover"
                                                    priority={index === 0}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                                                {/* Model Info Overlay */}
                                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                                    <h3 className="text-white font-semibold text-lg mb-1">{model.name}</h3>
                                                    <p className="text-gray-300 text-sm">{model.description}</p>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                {product.models.length > 1 && (
                                    <>
                                        <CarouselPrevious className="left-4 bg-black/50 border-gray-600 text-white hover:bg-black/70" />
                                        <CarouselNext className="right-4 bg-black/50 border-gray-600 text-white hover:bg-black/70" />
                                    </>
                                )}
                            </Carousel>
                        </div>

                        {/* Model Selection Thumbnails */}
                        {product.models.length > 1 && (
                            <div className="flex gap-3 justify-center">
                                {product.models.map((model, index) => (
                                    <button
                                        key={model.id}
                                        onClick={() => handleModelSelect(index)}
                                        className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${selectedModel === index
                                                ? 'border-white shadow-lg scale-105'
                                                : 'border-gray-600 hover:border-gray-500'
                                            }`}
                                    >
                                        <Image
                                            src={model.image}
                                            alt={model.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Column - Product Info */}
                    <div className="space-y-8">
                        {/* Product Header */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: `${product.accentColor}20` }}
                                >
                                    <IconComponent
                                        className="w-6 h-6"
                                        style={{ color: product.accentColor }}
                                    />
                                </div>
                                <div>
                                    <Badge
                                        variant="secondary"
                                        className="bg-gray-800/50 text-gray-300 border-gray-600 mb-2"
                                    >
                                        {product.category}
                                    </Badge>
                                </div>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                                {product.name}
                            </h1>
                            <p className="text-xl text-gray-300 mb-4">{product.description}</p>
                            <p className="text-gray-400 leading-relaxed">{product.longDescription}</p>
                        </div>

                        {/* Size Selection (for maillots only) */}
                        {product.sizes && (
                            <Card className="bg-gray-800/50 border-gray-700">
                                <CardHeader>
                                    <CardTitle className="text-white flex items-center gap-2">
                                        <Palette className="w-5 h-5" style={{ color: product.accentColor }} />
                                        Choisissez votre taille
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                                        {product.sizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${selectedSize === size
                                                        ? 'text-white shadow-lg transform scale-105'
                                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                                                    }`}
                                                style={selectedSize === size ? {
                                                    backgroundColor: product.accentColor,
                                                    boxShadow: `0 4px 12px ${product.accentColor}40`
                                                } : {}}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Quantity Selection */}
                        <Card className="bg-gray-800/50 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-white flex items-center gap-2">
                                    <Users className="w-5 h-5" style={{ color: product.accentColor }} />
                                    Quantité
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-4">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={decrementQuantity}
                                        disabled={quantity <= 1}
                                        className="px-4 py-3 border-gray-600 text-white bg-gray-700 rounded-full cursor-pointer"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </Button>
                                    <span className="text-2xl font-bold text-white min-w-[3rem] text-center">
                                        {quantity}
                                    </span>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={incrementQuantity}
                                        className="px-4 py-3 border-gray-600 text-white bg-gray-700 rounded-full cursor-pointer"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Price and CTA */}
                        <Card className={`bg-gradient-to-br ${product.gradient} border-gray-700`}>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">Prix</p>
                                        <span className="text-3xl font-bold text-white">{product.price}</span>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-gray-400 text-sm mb-1">Modèle sélectionné</p>
                                        <span className="text-white font-semibold">
                                            {product.models[selectedModel]?.name}
                                        </span>
                                    </div>
                                </div>

                                <Button
                                    onClick={handleContactClick}
                                    disabled={isPending || (product.sizes && !selectedSize)}
                                    className="w-full py-4 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:shadow-xl disabled:opacity-50"
                                    style={{
                                        backgroundColor: product.accentColor,
                                        boxShadow: `0 4px 20px ${product.accentColor}40`
                                    }}
                                >
                                    {isPending ? (
                                        'Redirection en cours...'
                                    ) : product.sizes && !selectedSize ? (
                                        'Sélectionnez une taille'
                                    ) : (
                                        <>
                                            Demander un devis
                                            <Heart className="ml-2 w-5 h-5" />
                                        </>
                                    )}
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Features */}
                        <Card className="bg-gray-800/50 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-white flex items-center gap-2">
                                    <Shield className="w-5 h-5" style={{ color: product.accentColor }} />
                                    Caractéristiques
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <div
                                                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                                                style={{ backgroundColor: `${product.accentColor}20` }}
                                            >
                                                <Check
                                                    className="w-4 h-4"
                                                    style={{ color: product.accentColor }}
                                                />
                                            </div>
                                            <span className="text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Specifications */}
                        {product.specifications && (
                            <Card className="bg-gray-800/50 border-gray-700">
                                <CardHeader>
                                    <CardTitle className="text-white flex items-center gap-2">
                                        <Book className="w-5 h-5" style={{ color: product.accentColor }} />
                                        Spécifications
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {Object.entries(product.specifications).map(([key, value]) => (
                                            <div key={key} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                                                <span className="text-gray-400 font-medium">{key}</span>
                                                <span className="text-white">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
