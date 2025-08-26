import { Mail, Check, Book } from 'lucide-react';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 hover:border-gray-600 transition-colors duration-300">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gray-700 border border-gray-600 rounded-full mb-8">
              <Mail className="w-4 h-4 text-[#fe1556] mr-2" />
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
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#32a3ff] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Des ressources inspirantes</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#32a3ff] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Les actualités MAGAPE et événements</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#32a3ff] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Des témoignages qui boostent la foi</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-[#fe1556] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Book className="w-32 h-32 text-white" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-[#fe1556] focus:ring-2 focus:ring-[#fe1556]/20 transition-all duration-300 hover:border-gray-500"
            />

            <button className="w-full px-8 py-4 bg-[#fe1556] hover:bg-[#e6134d] text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#fe1556]/25">
              Je reçois mon ebook et je rejoins le mouvement
            </button>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-300 font-medium bg-gray-700 rounded-full px-6 py-3 border border-gray-600 inline-block">
              Téléchargez votre ebook et rejoignez la famille MAGAPE aujourd'hui.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
