import { Suspense } from 'react';
import { CheckCircle, ArrowLeft, Package, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function SuccessContent() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <Card className="bg-gray-800/50 border-gray-700 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <CardTitle className="text-3xl font-bold text-white mb-2">
              Paiement réussi !
            </CardTitle>
            <p className="text-gray-300 text-lg">
              Merci pour votre commande
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="bg-gray-700/50 rounded-lg p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Package className="w-5 h-5 text-blue-400" />
                <h3 className="text-white font-semibold">Prochaines étapes</h3>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Vous recevrez un email de confirmation avec les détails de votre commande</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Notre équipe vous contactera dans les 24h pour finaliser les détails</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>La livraison se fera sous 7-14 jours ouvrés</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[#fe1556]/10 to-[#32a3ff]/10 rounded-lg p-6 border border-gray-600">
              <div className="flex items-center space-x-3 mb-3">
                <Mail className="w-5 h-5 text-[#fe1556]" />
                <h3 className="text-white font-semibold">Besoin d'aide ?</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Si vous avez des questions concernant votre commande, n'hésitez pas à nous contacter.
              </p>
              <Link href="/#contact">
                <Button 
                  variant="outline" 
                  className="border-[#fe1556] text-[#fe1556] hover:bg-[#fe1556] hover:text-white"
                >
                  Nous contacter
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/shop" className="flex-1">
                <Button 
                  variant="outline" 
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à la boutique
                </Button>
              </Link>
              <Link href="/" className="flex-1">
                <Button 
                  className="w-full bg-[#fe1556] hover:bg-[#e6134d] text-white"
                >
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Chargement...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
