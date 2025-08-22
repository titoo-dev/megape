'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Play, Users, Book, Headphones, Mail, Heart, Star, Zap, Globe, Shield, Sparkles, ArrowRight, Check } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-800/95 backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                MAGAPE
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <a href="#mission" className="text-gray-300 hover:text-white transition-colors">Mission</a>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors">Produits</a>
                <a href="#media" className="text-gray-300 hover:text-white transition-colors">Médias</a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-red-500/25 transition-colors">
                Rejoindre le mouvement
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white p-2"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-gray-800/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#mission" className="text-2xl text-white">Mission</a>
            <a href="#products" className="text-2xl text-white">Produits</a>
            <a href="#media" className="text-2xl text-white">Médias</a>
            <a href="#contact" className="text-2xl text-white">Contact</a>
            <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-medium">
              Rejoindre le mouvement
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-800/20 via-gray-900 to-orange-800/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto max-w-7xl px-4 pt-32 pb-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-red-400 mr-2" />
              <span className="text-red-400 text-sm font-medium">Unis pour impacter</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              MAGAPE
              <span className="block text-3xl md:text-5xl mt-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                La force de l'unité chrétienne
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              "Et si, ensemble, nous devenions la preuve vivante que l'unité chrétienne change le monde ?"
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-semibold text-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 transition-colors">
                Recevoir l'ebook gratuit
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-colors">
                Découvrir notre mission
              </button>
            </div>

            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <ChevronDown className="animate-bounce" />
              <span>Découvrez notre vision</span>
            </div>
          </div>
        </div>
      </section>

      {/* En Bref Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">En bref</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all">
              <Heart className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Mission d'amour</h3>
              <p className="text-gray-400">M pour Mission. Agapè pour l'amour inconditionnel de Dieu.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all">
              <Users className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Une famille unie</h3>
              <p className="text-gray-400">Rassembler les chrétiens francophones autour d'une vision commune.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
              <Globe className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Impact mondial</h3>
              <p className="text-gray-400">Créer des ponts d'unité dans toute la francophonie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maillots Section */}
      <section id="products" className="py-20 bg-gray-800">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                <Zap className="w-4 h-4 text-red-400 mr-2" />
                <span className="text-red-400 text-sm font-medium">PRODUIT PHARE</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Les maillots MAGAPE
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                Portez vos couleurs. Faites partie de l'équipe.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Design aux couleurs MAGAPE</h4>
                    <p className="text-gray-400">Fièrement porté par nos membres</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Symbole fédérateur</h4>
                    <p className="text-gray-400">Pour vos rassemblements, vos cultes, vos sorties</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Personnalisation</h4>
                    <p className="text-gray-400">Nous aidons les églises et groupes de jeunesse à créer leurs uniformes</p>
                  </div>
                </div>
              </div>

              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-semibold hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 transition-colors">
                Commander un maillot <ArrowRight className="inline ml-2" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-orange-400/20 blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-red-800/30 to-orange-800/30 rounded-3xl p-12 border border-red-400/20">
                <div className="aspect-square bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Users className="w-32 h-32 mx-auto mb-4 opacity-50" />
                    <p className="text-2xl font-bold">MAGAPE</p>
                    <p className="text-lg">Unis pour impacter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Émissions & Podcasts Section */}
      <section id="media" className="py-20 bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Émissions & Podcasts
            </h2>
            <p className="text-xl text-gray-300">
              Des voix qui rassemblent. Des histoires qui inspirent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="p-8">
                <Headphones className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Témoignages et enseignements</h3>
                <p className="text-gray-400">Pour nourrir la foi</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/20 hover:border-blue-500/40 transition-all">
              <div className="p-8">
                <Play className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Débats et divertissements</h3>
                <p className="text-gray-400">Pour créer du lien</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/20 hover:border-green-500/40 transition-all">
              <div className="p-8">
                <Globe className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Une francophonie connectée</h3>
                <p className="text-gray-400">Pour dépasser les frontières</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cahier ECODIM Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-3xl p-12 border border-yellow-500/20">
                <Book className="w-24 h-24 text-yellow-400 mx-auto mb-6" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Cahier ECODIM</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>📚 Histoires inspirantes</p>
                    <p>🎮 Jeux et activités ludiques</p>
                    <p>❤️ Valeurs bibliques solides</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6">
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-yellow-400 text-sm font-medium">POUR LES ENFANTS</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cahier ECODIM
              </h2>

              <p className="text-xl text-gray-300 mb-4">
                Former la nouvelle génération... en s'amusant.
              </p>

              <p className="text-gray-400 mb-8">
                Le Cahier ECODIM est notre outil pour transmettre les valeurs chrétiennes dès le plus jeune âge.
                Comme un cahier de vacances, mais centré sur la Bible, il mêle apprentissage et jeux pour que
                les enfants grandissent dans la foi avec joie.
              </p>

              <p className="text-gray-300 mb-8">
                Un cadeau parfait pour les familles, les écoles du dimanche et les groupes de jeunes.
              </p>

              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold hover:bg-gradient-to-r hover:from-yellow-600 hover:to-orange-600 transition-colors">
                En savoir plus <ArrowRight className="inline ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ebook & Newsletter Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-800/30 to-orange-800/30 rounded-3xl p-12 border border-red-400/20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                  <Mail className="w-4 h-4 text-red-400 mr-2" />
                  <span className="text-red-400 text-sm font-medium">GRATUIT</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  "Unis pour impacter"
                </h2>
                <p className="text-xl text-gray-300">
                  Le guide pour bâtir l'unité chrétienne
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Recevez gratuitement :</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Notre ebook exclusif avec des clés bibliques et pratiques</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Des ressources inspirantes chaque semaine</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Les actualités MAGAPE et événements</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Des témoignages qui boostent la foi</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-br from-red-500 to-orange-500 p-8 rounded-2xl">
                    <Book className="w-32 h-32 text-white/80" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors"
                />
                <button className="w-full px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-semibold text-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 transition-colors">
                  Je reçois mon ebook et je rejoins le mouvement
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
                1000+
              </div>
              <p className="text-gray-400">Membres actifs</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <p className="text-gray-400">Églises partenaires</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent mb-2">
                15
              </div>
              <p className="text-gray-400">Pays francophones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                MAGAPE
              </h3>
              <p className="text-gray-400">Unis pour impacter</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#mission" className="text-gray-400 hover:text-white transition-colors">Mission</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Produits</a></li>
                <li><a href="#media" className="text-gray-400 hover:text-white transition-colors">Médias</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Produits</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Maillots MAGAPE</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cahier ECODIM</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ebook gratuit</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Podcasts</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <span className="text-white text-sm">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <span className="text-white text-sm">X</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <span className="text-white text-sm">in</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 MAGAPE. Tous droits réservés. |
              <a href="#" className="hover:text-white transition-colors"> Mentions légales</a> |
              <a href="#" className="hover:text-white transition-colors"> Politique de confidentialité</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
