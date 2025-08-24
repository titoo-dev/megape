import { Zap, Users, Shield, Globe } from 'lucide-react';

export default function StatsSection() {
  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fe1556]/5 via-gray-900 to-[#32a3ff]/5"></div>
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-[#fe1556]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#32a3ff]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-r from-[#fe1556]/5 to-[#32a3ff]/5 rounded-full blur-2xl"></div>

      <div className="relative container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#fe1556]/10 to-[#32a3ff]/10 border border-gradient-to-r border-[#fe1556]/30 rounded-full mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-[#fe1556] mr-2 animate-pulse" />
            <span className="text-transparent bg-gradient-to-r from-[#fe1556] to-[#32a3ff] bg-clip-text text-sm font-medium">NOTRE IMPACT</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Notre impact ensemble</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Des chiffres qui témoignent de la force de l'unité chrétienne dans la francophonie</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative text-center">
            <div className="relative bg-gradient-to-br from-[#fe1556]/20 to-[#fe1556]/10 rounded-3xl p-8 border border-[#fe1556]/20 hover:border-[#fe1556]/40 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-[#fe1556]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#fe1556]/30 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400/30 rounded-full blur-lg animate-pulse"></div>

              <div className="relative">
                <div className="relative mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Users className="w-12 h-12 text-[#fe1556] transition-transform duration-300" />
                  <div className="absolute inset-0 bg-[#fe1556]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#fe1556] to-orange-400 bg-clip-text text-transparent mb-3 transition-transform duration-300">1000+</div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-lg font-medium">Membres actifs</p>
                <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-[#fe1556] to-orange-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div></div>
              </div>
            </div>
          </div>

          <div className="group relative text-center">
            <div className="relative bg-gradient-to-br from-[#32a3ff]/20 to-[#32a3ff]/10 rounded-3xl p-8 border border-[#32a3ff]/20 hover:border-[#32a3ff]/40 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-[#32a3ff]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#32a3ff]/30 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400/30 rounded-full blur-lg animate-pulse"></div>

              <div className="relative">
                <div className="relative mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Shield className="w-12 h-12 text-[#32a3ff] transition-transform duration-300" />
                  <div className="absolute inset-0 bg-[#32a3ff]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#32a3ff] to-blue-400 bg-clip-text text-transparent mb-3 transition-transform duration-300">50+</div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-lg font-medium">Églises partenaires</p>
                <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-[#32a3ff] to-blue-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div></div>
              </div>
            </div>
          </div>

          <div className="group relative text-center">
            <div className="relative bg-gradient-to-br from-gray-700/40 to-gray-600/20 rounded-3xl p-8 border border-gray-500/20 hover:border-[#fe1556]/40 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-[#32a3ff]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fe1556]/10 to-[#32a3ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#fe1556]/30 to-[#32a3ff]/30 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400/30 rounded-full blur-lg animate-pulse"></div>

              <div className="relative">
                <div className="relative mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Globe className="w-12 h-12 text-[#32a3ff] transition-transform duration-300 group-hover:text-[#fe1556]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#32a3ff]/20 to-[#fe1556]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-[#32a3ff] to-[#fe1556] bg-clip-text text-transparent mb-3 transition-transform duration-300">15</div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-lg font-medium">Pays francophones</p>
                <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-green-400 via-[#32a3ff] to-[#fe1556] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 relative">
          <div className="relative inline-block">
            <p className="text-lg text-gray-300 italic font-medium bg-gradient-to-r from-[#fe1556]/10 to-[#32a3ff]/10 rounded-full px-8 py-4 border border-white/10 backdrop-blur-sm">"L'unité chrétienne n'est pas un concept, c'est une force qui transforme des vies."</p>
            <div className="absolute inset-0 bg-gradient-to-r from-[#fe1556]/10 to-[#32a3ff]/10 rounded-full blur-xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
