import { Headphones, AudioLines, Play, Globe } from 'lucide-react';

export default function MediaSection() {
  return (
    <section id="media" className="relative py-20 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fe1556]/10 via-gray-900 to-[#32a3ff]/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#32a3ff]/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#fe1556]/15 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#32a3ff]/10 border border-[#32a3ff]/30 rounded-full mb-8 backdrop-blur-sm">
            <Headphones className="w-4 h-4 text-[#32a3ff] mr-2" />
            <span className="text-[#32a3ff] text-sm font-medium">CONTENU AUDIO</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Émissions & Podcasts</h2>
          <p className="text-xl text-gray-300 mb-4">Des voix qui rassemblent. Des histoires qui inspirent.</p>
          <p className="text-gray-400 max-w-3xl mx-auto">Nous créons des contenus audiovisuels qui renforcent notre foi et nous rapprochent les uns des autres. Dans nos émissions et podcasts : on apprend, on rit, on réfléchit, on partage… et on construit une culture commune pour les chrétiens francophones.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#fe1556]/20 to-[#fe1556]/10 border border-[#fe1556]/20 hover:border-[#fe1556]/40 transition-all duration-500 backdrop-blur-sm hover:shadow-xl hover:shadow-[#fe1556]/20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="relative mb-4">
                <AudioLines className="w-12 h-12 text-[#fe1556] group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-[#fe1556]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#fe1556] transition-colors">Témoignages et enseignements</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Pour nourrir la foi</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#32a3ff]/20 to-[#32a3ff]/10 border border-[#32a3ff]/20 hover:border-[#32a3ff]/40 transition-all duration-500 backdrop-blur-sm hover:shadow-xl hover:shadow-[#32a3ff]/20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="relative mb-4">
                <Play className="w-12 h-12 text-[#32a3ff] group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-[#32a3ff]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#32a3ff] transition-colors">Débats et divertissements</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Pour créer du lien</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-700/40 to-gray-600/20 border border-gray-500/20 hover:border-[#fe1556]/40 transition-all duration-500 backdrop-blur-sm hover:shadow-xl hover:shadow-[#32a3ff]/20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fe1556]/10 to-[#32a3ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="relative mb-4">
                <Globe className="w-12 h-12 text-[#32a3ff] group-hover:scale-110 transition-transform duration-300 group-hover:text-[#fe1556]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#32a3ff]/20 to-[#fe1556]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#fe1556] group-hover:to-[#32a3ff] group-hover:bg-clip-text transition-all duration-300">Une francophonie connectée</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Pour dépasser les frontières</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          </div>
        </div>

        <div className="text-center relative">
          <div className="relative inline-block">
            <p className="text-lg text-gray-300 italic font-medium bg-gradient-to-r from-[#fe1556]/20 to-[#32a3ff]/20 rounded-full px-8 py-4 border border-white/10 backdrop-blur-sm">"Parce qu'écouter ensemble, c'est déjà commencer à marcher ensemble."</p>
            <div className="absolute inset-0 bg-gradient-to-r from-[#fe1556]/10 to-[#32a3ff]/10 rounded-full blur-xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
