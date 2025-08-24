import { Book, Gamepad2, Heart, Star } from 'lucide-react';

export default function CahierSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-gray-900 to-orange-500/5"></div>
      <div className="absolute top-10 right-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>

              <div className="relative bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-3xl p-12 border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-yellow-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative mx-auto mb-6 w-24 h-24 flex items-center justify-center">
                  <Book className="w-24 h-24 text-yellow-400 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="text-center relative">
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-yellow-400 transition-colors">Cahier ECODIM</h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-center justify-center space-x-3 group/item">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      <p className="group-hover/item:text-white transition-colors">Histoires inspirantes</p>
                    </div>
                    <div className="flex items-center justify-center space-x-3 group/item">
                      <Gamepad2 className="w-4 h-4 text-orange-400" />
                      <p className="group-hover/item:text-white transition-colors">Jeux et activités ludiques</p>
                    </div>
                    <div className="flex items-center justify-center space-x-3 group/item">
                      <Heart className="w-4 h-4 text-[#fe1556] animate-pulse" />
                      <p className="group-hover/item:text-white transition-colors">Valeurs bibliques solides</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
      </div>
    </section>
  );
}
