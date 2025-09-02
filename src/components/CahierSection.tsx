import { Book, Gamepad2, Heart, Star } from 'lucide-react';
import Image from 'next/image';
import SEOHead, { structuredData } from './SEOHead';

export default function CahierSection() {
  return (
    <>
      <SEOHead
        title="Cahier ECODIM - Former la nouvelle génération en s'amusant"
        description="Le Cahier ECODIM est notre outil pour transmettre les valeurs chrétiennes dès le plus jeune âge. Comme un cahier de vacances, mais centré sur la Bible, il mêle apprentissage et jeux."
        keywords={[
          "cahier ECODIM",
          "éducation chrétienne",
          "livre enfants chrétiens",
          "activités bibliques",
          "jeux chrétiens",
          "enseignement religieux",
          "écoles du dimanche",
          "jeunesse chrétienne",
          "ressources pédagogiques",
          "valeurs chrétiennes"
        ]}
        image="/images/child-book.jpg"
        url="https://magape.org/#cahier"
        type="product"
        structuredData={structuredData.book}
      />
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
        itemScope
        itemType="https://schema.org/Book"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-gray-900 to-orange-500/5"></div>
        <div className="absolute top-5 sm:top-10 right-5 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-yellow-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-orange-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>

        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Content Section */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:items-center mb-12 sm:mb-16">
            {/* Text Content - Always first on mobile, order-2 on desktop */}
            <div className="lg:order-2">
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-1.5 sm:mr-2 animate-pulse" />
                <span className="text-yellow-400 text-xs sm:text-sm font-medium">POUR LES ENFANTS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Cahier ECODIM</h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-3 sm:mb-4">Former la nouvelle génération… en s'amusant.</p>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 leading-relaxed">Le Cahier ECODIM est notre outil pour transmettre les valeurs chrétiennes dès le plus jeune âge. Comme un cahier de vacances, <strong className="text-yellow-400">mais centré sur la Bible</strong>, il mêle apprentissage et jeux pour que les enfants grandissent dans la foi <strong className="text-orange-400">avec joie</strong>.</p>
            </div>

            {/* Image - After description on mobile, order-1 on desktop */}
            <div className="lg:order-1">
              <div className="relative group">
                <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400/20 rounded-full blur-lg sm:blur-xl animate-pulse"></div>
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-orange-400/20 rounded-full blur-lg sm:blur-xl animate-pulse"></div>

                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                  <Image
                    src="/images/child-book.jpg"
                    alt="Cahier ECODIM"
                    width={500}
                    height={600}
                    className="object-cover w-full h-[350px] sm:h-[400px] md:h-[500px] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Call-to-action section - Only visible on mobile, placed after image */}
            <div className="lg:hidden">
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-yellow-500/20 backdrop-blur-sm">
                <p className="text-gray-300 font-semibold text-center text-sm sm:text-base">Un cadeau parfait pour les familles, les écoles du dimanche et les groupes de jeunes.</p>
              </div>

              <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/30">
                <span className="relative z-10 flex items-center justify-center">En savoir plus</span>
              </button>
            </div>

            {/* Call-to-action section - Only visible on desktop, part of text content */}
            <div className="hidden lg:block lg:order-2">
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-yellow-500/20 backdrop-blur-sm">
                <p className="text-gray-300 font-semibold text-center text-sm sm:text-base">Un cadeau parfait pour les familles, les écoles du dimanche et les groupes de jeunes.</p>
              </div>

              <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/30">
                <span className="relative z-10 flex items-center justify-center">En savoir plus</span>
              </button>
            </div>
          </div>

          {/* Feature Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1 - Histoires inspirantes */}
            <div className="group relative bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-yellow-500/20">
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <Book className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">Histoires inspirantes</h3>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">Des récits bibliques adaptés aux enfants pour nourrir leur imagination et leur foi.</p>
            </div>

            {/* Card 2 - Jeux et activités */}
            <div className="group relative bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-orange-500/20">
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-400/20 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">Jeux et activités</h3>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">Des activités ludiques et éducatives pour apprendre en s'amusant.</p>
            </div>

            {/* Card 3 - Valeurs bibliques */}
            <div className="group relative bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-pink-500/30 hover:border-pink-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-pink-500/20 sm:col-span-2 lg:col-span-1">
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-[#fe1556] rounded-full animate-pulse"></div>
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-400/20 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#fe1556]" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">Valeurs bibliques</h3>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">Des enseignements solides basés sur la Parole de Dieu pour construire un fondement spirituel fort.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
