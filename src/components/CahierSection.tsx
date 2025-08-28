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
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
        itemScope
        itemType="https://schema.org/Book"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-gray-900 to-orange-500/5"></div>
        <div className="absolute top-10 right-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative container mx-auto max-w-7xl px-4">
          {/* Main Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Clean Image */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>

                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="/images/child-book.jpg"
                    alt="Cahier ECODIM"
                    width={500}
                    height={600}
                    className="object-cover w-full h-[500px] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6 backdrop-blur-sm">
                <Star className="w-4 h-4 text-yellow-400 mr-2 animate-pulse" />
                <span className="text-yellow-400 text-sm font-medium">POUR LES ENFANTS</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Cahier ECODIM</h2>
              <p className="text-xl text-gray-300 mb-4">Former la nouvelle génération… en s'amusant.</p>
              <p className="text-gray-400 mb-8">Le Cahier ECODIM est notre outil pour transmettre les valeurs chrétiennes dès le plus jeune âge. Comme un cahier de vacances, <strong className="text-yellow-400">mais centré sur la Bible</strong>, il mêle apprentissage et jeux pour que les enfants grandissent dans la foi <strong className="text-orange-400">avec joie</strong>.</p>

              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 mb-8 border border-yellow-500/20 backdrop-blur-sm">
                <p className="text-gray-300 font-semibold text-center">Un cadeau parfait pour les familles, les écoles du dimanche et les groupes de jeunes.</p>
              </div>

              <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/30">
                <span className="relative z-10 flex items-center">En savoir plus</span>
              </button>
            </div>
          </div>

          {/* Feature Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Histoires inspirantes */}
            <div className="group relative bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl p-6 border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-yellow-500/20">
              <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mr-4">
                  <Book className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">Histoires inspirantes</h3>
              </div>
              <p className="text-gray-300 text-sm">Des récits bibliques adaptés aux enfants pour nourrir leur imagination et leur foi.</p>
            </div>

            {/* Card 2 - Jeux et activités */}
            <div className="group relative bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl p-6 border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-orange-500/20">
              <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center mr-4">
                  <Gamepad2 className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">Jeux et activités</h3>
              </div>
              <p className="text-gray-300 text-sm">Des activités ludiques et éducatives pour apprendre en s'amusant.</p>
            </div>

            {/* Card 3 - Valeurs bibliques */}
            <div className="group relative bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-2xl p-6 border border-pink-500/30 hover:border-pink-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-pink-500/20">
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#fe1556] rounded-full animate-pulse"></div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-400/20 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-[#fe1556]" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">Valeurs bibliques</h3>
              </div>
              <p className="text-gray-300 text-sm">Des enseignements solides basés sur la Parole de Dieu pour construire un fondement spirituel fort.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
