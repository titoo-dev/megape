import { Mail, Check, Book } from 'lucide-react';
import SEOHead, { structuredData } from './SEOHead';

export default function ContactSection() {
  return (

    <>
      <SEOHead
        title="Contact MAGAPE - Rejoignez notre newsletter et recevez l'ebook gratuit"
        description="Rejoignez notre newsletter et recevez gratuitement notre ebook 'Unis pour impacter' - Le guide pour bâtir l'unité chrétienne. Des ressources inspirantes et actualités MAGAPE."
        keywords={[
          "newsletter chrétienne",
          "ebook gratuit",
          "ressources chrétiennes",
          "contact MAGAPE",
          "unité chrétienne",
          "guide biblique",
          "actualités chrétiennes",
          "témoignages chrétiens",
          "communauté chrétienne",
          "formation chrétienne"
        ]}
        image="/images/magape-og-image.jpg"
        url="https://magape.org/#contact"
        type="website"
        structuredData={structuredData.contact}
      />
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 border border-gray-700 hover:border-gray-600 transition-colors duration-300">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-700 border border-gray-600 rounded-full mb-6 sm:mb-8">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-[#fe1556] mr-1.5 sm:mr-2" />
                <span className="text-[#fe1556] text-xs sm:text-sm font-medium">GRATUIT</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">"Unis pour impacter"</h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-3 sm:mb-4 px-2">Le guide pour bâtir l'unité chrétienne</p>
              <p className="text-sm sm:text-base text-gray-400 px-2 leading-relaxed">Recevez gratuitement notre ebook exclusif : Des clés bibliques et pratiques pour renforcer vos relations, votre communauté et votre foi.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">En rejoignant notre newsletter, vous recevrez aussi :</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#32a3ff] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">Des ressources inspirantes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#32a3ff] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">Les actualités MAGAPE et événements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#32a3ff] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">Des témoignages qui boostent la foi</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-center order-first md:order-last">
                <div className="bg-[#fe1556] p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Book className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 text-white" />
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-700 border border-gray-600 rounded-full text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:border-[#fe1556] focus:ring-2 focus:ring-[#fe1556]/20 transition-all duration-300 hover:border-gray-500"
              />

              <button className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#fe1556] hover:bg-[#e6134d] text-white rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#fe1556]/25">
                <span className="block sm:hidden">Je reçois mon ebook gratuit</span>
                <span className="hidden sm:block">Je reçois mon ebook et je rejoins le mouvement</span>
              </button>
            </div>

            <div className="text-center mt-6 sm:mt-8">
              <p className="text-gray-300 font-medium bg-gray-700 rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-gray-600 inline-block text-sm sm:text-base">
                <span className="block sm:hidden">Rejoignez la famille MAGAPE</span>
                <span className="hidden sm:block">Téléchargez votre ebook et rejoignez la famille MAGAPE aujourd'hui.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
