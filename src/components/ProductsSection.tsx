import Image from 'next/image';
import { Zap, Check, ArrowRight } from 'lucide-react';

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-gray-800">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-[#fe1556]/10 border border-[#fe1556]/30 rounded-full mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-[#fe1556] mr-2" />
              <span className="text-[#fe1556] text-sm font-medium">PRODUIT PHARE</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Les maillots MAGAPE</h2>

            <p className="text-xl text-gray-300 mb-4">Portez vos couleurs. Faites partie de l'équipe.</p>

            <p className="text-gray-400 mb-8">Le sport, et surtout le football, rassemble des millions de personnes. Quand on porte le même maillot, on joue pour la même cause. Le Maillot MAGAPE est bien plus qu'un vêtement : <strong className="text-[#32a3ff]"> c'est une bannière d'unité pour dire au monde : "Nous sommes une seule famille en Christ".</strong></p>

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
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center">Rejoignez l'équipe MAGAPE <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform duration-300" /></span>
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#fe1556]/20 to-[#32a3ff]/20 blur-3xl animate-pulse"></div>
            <div className="relative perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/40 to-gray-600/40 rounded-3xl transform rotate-6 scale-90 border border-gray-500/20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#32a3ff]/30 to-[#fe1556]/20 rounded-3xl transform rotate-3 scale-95 border border-[#32a3ff]/30 shadow-lg"></div>

              <div className="relative bg-gradient-to-br from-[#fe1556]/20 to-[#32a3ff]/20 rounded-3xl p-12 border border-[#fe1556]/30 hover:border-[#fe1556]/50 transition-all duration-500 hover:transform hover:scale-102 hover:rotate-1 shadow-2xl backdrop-blur-sm">
                <div className="aspect-square bg-gradient-to-br from-[#fe1556] via-[#ff4577] to-[#32a3ff] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#fe1556]/30 hover:shadow-[#fe1556]/50 transition-all duration-500 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 p-4 w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
                    <div className="relative group-hover:scale-105 transition-transform duration-500 w-full h-full overflow-hidden rounded-lg group-hover:rounded-sm">
                      <Image src="/image-1.jpg" alt="Maillot MAGAPE" fill className="object-cover rounded-lg group-hover:rounded-2xl transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-125" />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#fe1556]/20 via-transparent to-[#32a3ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg group-hover:rounded-2xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                      <div className="absolute inset-0 rounded-lg group-hover:rounded-2xl border-2 border-transparent group-hover:border-white/50 transition-all duration-500 group-hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]"></div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>

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
  );
}
