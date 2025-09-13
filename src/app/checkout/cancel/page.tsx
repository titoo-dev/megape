'use client';

import { XCircle, ArrowLeft, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <Card className="bg-gray-800/50 border-gray-700 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-10 h-10 text-red-400" />
            </div>
            <CardTitle className="text-3xl font-bold text-white mb-2">
              Paiement annulé
            </CardTitle>
            <p className="text-gray-300 text-lg">
              Votre commande n'a pas été finalisée
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="bg-gray-700/50 rounded-lg p-6">
              <p className="text-gray-300 text-center">
                Aucun montant n'a été débité de votre compte. 
                Vous pouvez retenter votre achat à tout moment.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#fe1556]/10 to-[#32a3ff]/10 rounded-lg p-6 border border-gray-600">
              <h3 className="text-white font-semibold mb-3">Besoin d'aide ?</h3>
              <p className="text-gray-300 text-sm mb-4">
                Si vous rencontrez des difficultés avec le paiement, notre équipe est là pour vous aider.
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
              <Button 
                onClick={() => window.history.back()}
                className="flex-1 bg-[#fe1556] hover:bg-[#e6134d] text-white"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Réessayer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
