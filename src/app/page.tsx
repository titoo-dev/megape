'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, Menu, X, Play, Users, Book, Headphones, Mail, Heart, Star, Zap, Globe, Shield, Sparkles, ArrowRight, Check, AudioLines, Gamepad2, Twitter, Facebook, Instagram } from 'lucide-react';

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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-lg border-b border-[#fe1556]/20' : 'bg-transparent'}`}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <Image
                  src="/agape-removebg-preview.png"
                  alt="MAGAPE Logo"
                  width={100}
                  height={48}
                  className="rounded-lg"
                />
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <a href="#mission" className="text-gray-300 hover:text-[#fe1556] transition-colors">Mission</a>
                <a href="#products" className="text-gray-300 hover:text-[#32a3ff] transition-colors">Produits</a>
                <a href="#media" className="text-gray-300 hover:text-[#fe1556] transition-colors">Médias</a>
                <a href="#contact" className="text-gray-300 hover:text-[#32a3ff] transition-colors">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden md:block px-6 py-2.5 border-2 border-[#fe1556] text-[#fe1556] rounded-full font-medium transition-all duration-250 hover:bg-[#fe1556] hover:text-white hover:cursor-pointer">
                Rejoindre le mouvement
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white p-2 hover:text-[#fe1556] transition-colors"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#mission" className="text-2xl text-white hover:text-[#fe1556] transition-colors">Mission</a>
            <a href="#products" className="text-2xl text-white hover:text-[#32a3ff] transition-colors">Produits</a>
            <a href="#media" className="text-2xl text-white hover:text-[#fe1556] transition-colors">Médias</a>
            <a href="#contact" className="text-2xl text-white hover:text-[#32a3ff] transition-colors">Contact</a>
            <button className="px-8 py-3 bg-gradient-to-r from-[#fe1556] to-[#32a3ff] text-white rounded-full font-medium hover:shadow-lg hover:shadow-[#fe1556]/25 transition-all duration-300 hover:scale-105">
              Rejoindre le mouvement
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fe1556]/20 via-gray-900 to-[#32a3ff]/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#fe1556]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#32a3ff]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#fe1556]/10 to-[#32a3ff]/10 rounded-full blur-2xl"></div>
        </div>

        <div className="relative container mx-auto max-w-7xl px-4 pt-32 pb-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-[#fe1556]/10 border border-[#fe1556]/30 rounded-full mb-8 backdrop-blur-sm">
              <Heart className="w-4 h-4 text-[#fe1556] mr-2" />
              <span className="text-[#fe1556] text-sm font-medium">Unis pour impacter</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              MAGAPE
              <span className="block text-3xl md:text-5xl mt-4 bg-gradient-to-r from-[#fe1556] to-[#32a3ff] bg-clip-text text-transparent">
                La force de l'unité chrétienne
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
              "Et si, ensemble, nous devenions la preuve vivante que l'unité chrétienne change le monde ?"
            </p>

            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              <strong className="text-[#fe1556]">M</strong> pour Mission. <strong className="text-[#32a3ff]">Agapè</strong> pour l'amour inconditionnel de Dieu.
              Nous créons des actions, des produits et des événements qui fortifient notre identité en Christ.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="px-8 py-4 bg-[#fe1556] text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-[#fe1556]/25 transition-all duration-300 hover:cursor-pointer">
                Recevoir l'ebook gratuit
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border border-white/20 hover:bg-[#32a3ff]/20 hover:border-[#32a3ff]/40 transition-all duration-300">
                Découvrir notre mission
              </button>
            </div>

            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <ChevronDown className="animate-bounce text-[#32a3ff]" />
              <span>Découvrez notre vision</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Univers graphique Section */}
      <section id="mission" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Vision & Univers graphique</h2>
            <p className="text-xl text-gray-300">Une mission claire. Un langage commun. Une famille unie.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-[#fe1556]/20 to-[#fe1556]/10 p-8 rounded-2xl border border-[#fe1556]/20 hover:border-[#fe1556]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#fe1556]/10">
              <Heart className="w-12 h-12 text-[#fe1556] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-2">Mission d'amour</h3>
              <p className="text-gray-400">M pour Mission. Agapè pour l'amour inconditionnel de Dieu. MAGAPE n'est pas une simple marque : c'est un symbole que nous portons ensemble.</p>
            </div>

            <div className="group bg-gradient-to-br from-[#32a3ff]/20 to-[#32a3ff]/10 p-8 rounded-2xl border border-[#32a3ff]/20 hover:border-[#32a3ff]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#32a3ff]/10">
              <Sparkles className="w-12 h-12 text-[#32a3ff] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-2">Univers graphique</h3>
              <p className="text-gray-400">Notre univers graphique est le reflet de notre foi et de notre mission. Chaque couleur, chaque motif raconte notre histoire collective : passion, foi, action.</p>
            </div>

            <div className="group bg-gray-800/50 p-8 rounded-2xl border border-white/10 hover:border-[#fe1556]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#32a3ff]/10">
              <Globe className="w-12 h-12 text-[#32a3ff] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-2">Notre promesse</h3>
              <p className="text-gray-400">Rassembler, inspirer, équiper. Toujours ensemble. Construire des ponts d'unité dans toute la francophonie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maillots MAGAPE Section */}
      <section id="products" className="py-20 bg-gray-800">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#fe1556]/10 border border-[#fe1556]/30 rounded-full mb-6 backdrop-blur-sm">
                <Zap className="w-4 h-4 text-[#fe1556] mr-2" />
                <span className="text-[#fe1556] text-sm font-medium">PRODUIT PHARE</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Les maillots MAGAPE
              </h2>

              <p className="text-xl text-gray-300 mb-4">
                Portez vos couleurs. Faites partie de l'équipe.
              </p>

              <p className="text-gray-400 mb-8">
                Le sport, et surtout le football, rassemble des millions de personnes.
                Quand on porte le même maillot, on joue pour la même cause. Le Maillot MAGAPE est bien plus qu'un vêtement :
                <strong className="text-[#32a3ff]"> c'est une bannière d'unité pour dire au monde : "Nous sommes une seule famille en Christ".</strong>
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-[#32a3ff] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Design aux couleurs MAGAPE</h4>
                    <p className="text-gray-400">Fièrement porté par nos membres</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="w-5 h-5 text-[#32a3ff] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Symbole fédérateur</h4>
                    <p className="text-gray-400">Pour vos rassemblements, vos cultes, vos sorties</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="w-5 h-5 text-[#32a3ff] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Personnalisation</h4>
                    <p className="text-gray-400">Nous aidons les églises et groupes de jeunesse à créer leurs uniformes</p>
                  </div>
                </div>
              </div>

              <button className="group relative px-8 py-4 bg-[#fe1556] text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#fe1556]/30">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                {/* Button content */}
                <span className="relative z-10 flex items-center">
                  Rejoignez l'équipe MAGAPE
                  <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>

            <div className="relative">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#fe1556]/20 to-[#32a3ff]/20 blur-3xl animate-pulse"></div>

              {/* Stacked Cards Container */}
              <div className="relative perspective-1000">
                {/* Card 3 - Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700/40 to-gray-600/40 rounded-3xl transform rotate-6 scale-90 border border-gray-500/20"></div>

                {/* Card 2 - Middle */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#32a3ff]/30 to-[#fe1556]/20 rounded-3xl transform rotate-3 scale-95 border border-[#32a3ff]/30 shadow-lg"></div>

                {/* Card 1 - Front */}
                <div className="relative bg-gradient-to-br from-[#fe1556]/20 to-[#32a3ff]/20 rounded-3xl p-12 border border-[#fe1556]/30 hover:border-[#fe1556]/50 transition-all duration-500 hover:transform hover:scale-102 hover:rotate-1 shadow-2xl backdrop-blur-sm">
                  <div className="aspect-square bg-gradient-to-br from-[#fe1556] via-[#ff4577] to-[#32a3ff] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#fe1556]/30 hover:shadow-[#fe1556]/50 transition-all duration-500 relative overflow-hidden group">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Jersey Image Content */}
                    <div className="relative z-10 p-4 w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
                        <div className="relative group-hover:scale-105 transition-transform duration-500 w-full h-full overflow-hidden rounded-lg group-hover:rounded-sm">
                        <Image
                          src="/image-1.jpg"
                          alt="Maillot MAGAPE"
                          fill
                          className="object-cover rounded-lg group-hover:rounded-2xl transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-125"
                        />

                        {/* Gradient overlay shader */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#fe1556]/20 via-transparent to-[#32a3ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg group-hover:rounded-2xl"></div>

                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                        {/* Glowing edge effect */}
                        <div className="absolute inset-0 rounded-lg group-hover:rounded-2xl border-2 border-transparent group-hover:border-white/50 transition-all duration-500 group-hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]"></div>
                        </div>
                    </div>

                    {/* Enhanced shimmer effect on container */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                  </div>

                  {/* Card bottom section */}
                  <div className="mt-6 text-center">
                    <div className="flex items-center justify-center space-x-2 text-gray-300 group-hover:text-white transition-colors duration-300">
                      <div className="w-2 h-2 bg-[#fe1556] rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Portez vos valeurs</span>
                      <div className="w-2 h-2 bg-[#32a3ff] rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Émissions & Podcasts Section */}
      {/* <section id="media" className="py-20 bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Émissions & Podcasts
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Des voix qui rassemblent. Des histoires qui inspirent.
            </p>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Nous créons des contenus audiovisuels qui renforcent notre foi et nous rapprochent les uns des autres. 
              Dans nos émissions et podcasts : on apprend, on rit, on réfléchit, on partage… et on construit une culture commune pour les chrétiens francophones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <div className="p-8">
                <AudioLines className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Témoignages et enseignements</h3>
                <p className="text-gray-400">Pour nourrir la foi</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <div className="p-8">
                <Play className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Débats et divertissements</h3>
                <p className="text-gray-400">Pour créer du lien</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/20 hover:border-green-500/40 transition-colors">
              <div className="p-8">
                <Globe className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Une francophonie connectée</h3>
                <p className="text-gray-400">Pour dépasser les frontières</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-300 italic">
              "Parce qu'écouter ensemble, c'est déjà commencer à marcher ensemble."
            </p>
          </div>
        </div>
      </section> */}

      {/* Cahier ECODIM Section */}
      {/* <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-3xl p-12 border border-yellow-500/20">
                <Book className="w-24 h-24 text-yellow-400 mx-auto mb-6" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Cahier ECODIM</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>📚 Histoires inspirantes</p>
                    <p><Gamepad2 className="inline w-4 h-4 mr-1" /> Jeux et activités ludiques</p>
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
                Former la nouvelle génération… en s'amusant.
              </p>

              <p className="text-gray-400 mb-8">
                Le Cahier ECODIM est notre outil pour transmettre les valeurs chrétiennes dès le plus jeune âge.
                Comme un cahier de vacances, <strong className="text-gray-300">mais centré sur la Bible</strong>, il mêle apprentissage et jeux pour que
                les enfants grandissent dans la foi <strong className="text-gray-300">avec joie</strong>.
              </p>

              <p className="text-gray-300 mb-8 font-semibold">
                Un cadeau parfait pour les familles, les écoles du dimanche et les groupes de jeunes.
              </p>

              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold hover:bg-gradient-to-r hover:from-yellow-600 hover:to-orange-600 transition-colors">
                En savoir plus <ArrowRight className="inline ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Ebook & Newsletter Section */}
      {/* <section id="contact" className="py-20 bg-gray-800">
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
                <p className="text-xl text-gray-300 mb-4">
                  Le guide pour bâtir l'unité chrétienne
                </p>
                <p className="text-gray-400">
                  Recevez gratuitement notre ebook exclusif : Des clés bibliques et pratiques pour renforcer vos relations, votre communauté et votre foi.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">En rejoignant notre newsletter, vous recevrez aussi :</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Des ressources inspirantes</span>
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

              <div className="text-center mt-8">
                <p className="text-gray-300 font-semibold">
                  Téléchargez votre ebook et rejoignez la famille MAGAPE aujourd'hui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      {/* <section className="py-20 bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Notre impact ensemble</h2>
            <p className="text-gray-400">Des chiffres qui témoignent de la force de l'unité</p>
          </div>
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
      </section> */}

      {/* Footer */}
      <footer className="py-12 bg-gray-800 border-t border-[#fe1556]/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/agape-removebg-preview.png"
                  alt="MAGAPE Logo"
                  width={80}
                  height={48}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-400 mb-4">Unis pour impacter</p>
              <p className="text-gray-500 text-sm">
                "Et si, ensemble, nous devenions la preuve vivante que l'unité chrétienne change le monde ?"
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#mission" className="text-gray-400 hover:text-[#fe1556] transition-colors">Mission</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-[#32a3ff] transition-colors">Produits</a></li>
                <li><a href="#media" className="text-gray-400 hover:text-[#fe1556] transition-colors">Médias</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-[#32a3ff] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Nos Produits</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#fe1556] transition-colors">Maillots MAGAPE</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#32a3ff] transition-colors">Cahier ECODIM</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#fe1556] transition-colors">Ebook gratuit</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#32a3ff] transition-colors">Émissions & Podcasts</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#fe1556] transition-colors group">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#32a3ff] transition-colors group">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#fe1556] transition-colors group">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 MAGAPE. Tous droits réservés. |
              <a href="#" className="hover:text-[#fe1556] transition-colors"> Mentions légales</a> |
              <a href="#" className="hover:text-[#32a3ff] transition-colors"> Politique de confidentialité</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
