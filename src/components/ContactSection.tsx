import { Mail, Check, Book } from 'lucide-react';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 bg-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fe1556]/10 via-gray-800 to-orange-500/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#fe1556]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#fe1556]/5 to-orange-500/5 rounded-full blur-2xl"></div>

      <div className="relative container mx-auto max-w-7xl px-4">
        <div className="max-w-4xl mx-auto">
          <div className="group relative bg-gradient-to-br from-[#fe1556]/20 to-orange-500/20 rounded-3xl p-12 border border-[#fe1556]/30 hover:border-[#fe1556]/50 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-[#fe1556]/20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#fe1556]/10 border border-[#fe1556]/30 rounded-full mb-8 backdrop-blur-sm">
                <Mail className="w-4 h-4 text-[#fe1556] mr-2 animate-pulse" />
                <span className="text-[#fe1556] text-sm font-medium">GRATUIT</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">"Unis pour impacter"</h2>
              <p className="text-xl text-gray-300 mb-4">Le guide pour bâtir l'unité chrétienne</p>
              <p className="text-gray-400">Recevez gratuitement notre ebook exclusif : Des clés bibliques et pratiques pour renforcer vos relations, votre communauté et votre foi.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-6">En rejoignant notre newsletter, vous recevrez aussi :</h3>
                <ul className="space-y-4">
                  <li className="group/item flex items-start hover:scale-105 transition-transform duration-300">
                    <div className="relative mr-3 mt-1">
                      <Check className="w-5 h-5 text-[#32a3ff] group-hover/item:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-[#32a3ff]/20 rounded-full blur-md opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">Des ressources inspirantes</span>
                  </li>
                  <li className="group/item flex items-start hover:scale-105 transition-transform duration-300">
                    <div className="relative mr-3 mt-1">
                      <Check className="w-5 h-5 text-[#32a3ff] group-hover/item:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-[#32a3ff]/20 rounded-full blur-md opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">Les actualités MAGAPE et événements</span>
                  </li>
                  <li className="group/item flex items-start hover:scale-105 transition-transform duration-300">
                    <div className="relative mr-3 mt-1">
                      <Check className="w-5 h-5 text-[#32a3ff] group-hover/item:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-[#32a3ff]/20 rounded-full blur-md opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">Des témoignages qui boostent la foi</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-center">
                <div className="group/book relative">
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#fe1556]/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-[#fe1556] to-orange-500 p-8 rounded-2xl hover:shadow-2xl hover:shadow-[#fe1556]/30 transition-all duration-500 group-hover/book:scale-110 group-hover/book:rotate-6">
                    <div className="relative">
                      <Book className="w-32 h-32 text-white/90 group-hover/book:text-white transition-colors duration-300" />
                      <div className="absolute inset-0 bg-white/20 rounded-lg blur-xl opacity-0 group-hover/book:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative group/input">
                <input type="email" placeholder="Votre adresse email" className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-[#fe1556] focus:ring-2 focus:ring-[#fe1556]/20 transition-all duration-300 backdrop-blur-sm group-hover/input:border-[#fe1556]/50" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#fe1556]/5 to-orange-500/5 rounded-full opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              <button className="group/btn relative w-full px-8 py-4 bg-gradient-to-r from-[#fe1556] to-orange-500 text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#fe1556]/30">
                <span className="relative z-10 flex items-center justify-center">Je reçois mon ebook et je rejoins le mouvement</span>
              </button>
            </div>

            <div className="text-center mt-8 relative">
              <div className="relative inline-block">
                <p className="text-gray-300 font-semibold bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-full px-6 py-3 border border-white/10 backdrop-blur-sm">Téléchargez votre ebook et rejoignez la famille MAGAPE aujourd'hui.</p>
                <div className="absolute inset-0 bg-gradient-to-r from-[#fe1556]/10 to-orange-500/10 rounded-full blur-xl opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
