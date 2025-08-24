import Image from 'next/image';
import { ChevronDown, Heart } from 'lucide-react';

export default function Hero() {
  return (
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
  );
}
