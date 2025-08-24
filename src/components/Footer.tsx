import Image from 'next/image';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-800 border-t border-[#fe1556]/20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/agape-removebg-preview.png" alt="MAGAPE Logo" width={80} height={48} className="rounded-lg" />
            </div>
            <p className="text-gray-400 mb-4">Unis pour impacter</p>
            <p className="text-gray-500 text-sm">"Et si, ensemble, nous devenions la preuve vivante que l'unité chrétienne change le monde ?"</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#mission" className="text-gray-400 hover:text-[#fe1556] transition-colors">Mission</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-[#32a3ff] transition-colors">Produits</a></li>
              <li><a href="#media" className="text-gray-400 hover:text-[#fe1556] transition-colors">Médias</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#32a3ff] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Nos Produits</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#fe1556] transition-colors">Maillots MAGAPE</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#32a3ff] transition-colors">Cahier ECODIM</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#fe1556] transition-colors">Ebook gratuit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#32a3ff] transition-colors">Émissions & Podcasts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#fe1556] transition-colors group"><Facebook className="w-5 h-5 text-white" /></a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#32a3ff] transition-colors group"><Twitter className="w-5 h-5 text-white" /></a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#fe1556] transition-colors group"><Instagram className="w-5 h-5 text-white" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">© 2024 MAGAPE. Tous droits réservés. | <a href="#" className="hover:text-[#fe1556] transition-colors"> Mentions légales</a> | <a href="#" className="hover:text-[#32a3ff] transition-colors"> Politique de confidentialité</a></p>
        </div>
      </div>
    </footer>
  );
}
