import { Heart, Sparkles, Globe } from 'lucide-react';

export default function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Vision & Univers graphique</h2>
          <p className="text-xl text-gray-300">Une mission claire. Un langage commun. Une famille unie.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-gradient-to-br from-[#fe1556]/20 to-[#fe1556]/10 p-8 rounded-2xl border border-[#fe1556]/20 hover:border-[#fe1556]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#fe1556]/10">
            <Heart className="w-12 h-12 text-[#fe1556] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-2">Mission d'amour</h3>
            <p className="text-gray-400">M pour Mission. Agapè pour l'amour inconditionnel de Dieu. MAGAPE n'est pas une simple marque : c'est un symbole que nous portons ensemble.</p>
          </div>

          <div className="group bg-gradient-to-br from-[#32a3ff]/20 to-[#32a3ff]/10 p-8 rounded-2xl border border-[#32a3ff]/20 hover:border-[#32a3ff]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#32a3ff]/10">
            <Sparkles className="w-12 h-12 text-[#32a3ff] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-2">Univers graphique</h3>
            <p className="text-gray-400">Notre univers graphique est le reflet de notre foi et de notre mission. Chaque couleur, chaque motif raconte notre histoire collective : passion, foi, action.</p>
          </div>

          <div className="group bg-gray-800/50 p-8 rounded-2xl border border-white/10 hover:border-[#fe1556]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#32a3ff]/10">
            <Globe className="w-12 h-12 text-[#32a3ff] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-2">Notre promesse</h3>
            <p className="text-gray-400">Rassembler, inspirer, équiper. Toujours ensemble. Construire des ponts d'unité dans toute la francophonie.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
