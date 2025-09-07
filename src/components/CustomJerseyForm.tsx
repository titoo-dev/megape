'use client';

import { useState, useTransition } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface CustomJerseyFormProps {
  children: React.ReactNode;
}

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  nomAssemblee: string;
  numero: string;
}

export default function CustomJerseyForm({ children }: CustomJerseyFormProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    prenom: '',
    email: '',
    nomAssemblee: '',
    numero: ''
  });
  const [isPending, startTransition] = useTransition();

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.nom || !formData.prenom || !formData.email || !formData.nomAssemblee) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Veuillez entrer une adresse email valide');
      return;
    }

    // Validation numéro (optionnel mais si rempli, doit être valide)
    if (formData.numero && (isNaN(Number(formData.numero)) || Number(formData.numero) < 1 || Number(formData.numero) > 99)) {
      toast.error('Le numéro doit être entre 1 et 99');
      return;
    }

    startTransition(() => {
      // Simulation de l'envoi du formulaire
      setTimeout(() => {
        toast.success(`Merci ${formData.prenom} ! Votre demande de maillot personnalisé pour "${formData.nomAssemblee}" a été envoyée.`);
        setFormData({
          nom: '',
          prenom: '',
          email: '',
          nomAssemblee: '',
          numero: ''
        });
        setOpen(false);
      }, 1000);
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-white text-xl font-bold text-center">
            Demande de maillot personnalisé
          </DialogTitle>
          <p className="text-gray-400 text-sm text-center mt-2">
            Créons ensemble le maillot aux couleurs de votre assemblée
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="prenom" className="text-gray-300">
                Prénom *
              </Label>
              <Input
                id="prenom"
                type="text"
                value={formData.prenom}
                onChange={(e) => handleInputChange('prenom', e.target.value)}
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                placeholder="Votre prénom"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nom" className="text-gray-300">
                Nom *
              </Label>
              <Input
                id="nom"
                type="text"
                value={formData.nom}
                onChange={(e) => handleInputChange('nom', e.target.value)}
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                placeholder="Votre nom"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
              placeholder="votre.email@exemple.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="nomAssemblee" className="text-gray-300">
              Nom de votre assemblée *
            </Label>
            <Input
              id="nomAssemblee"
              type="text"
              value={formData.nomAssemblee}
              onChange={(e) => handleInputChange('nomAssemblee', e.target.value)}
              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
              placeholder="Nom de votre assemblée"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="numero" className="text-gray-300">
              Numéro souhaité (optionnel)
            </Label>
            <Input
              id="numero"
              type="number"
              min="1"
              max="99"
              value={formData.numero}
              onChange={(e) => handleInputChange('numero', e.target.value)}
              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
              placeholder="Ex: 10"
            />
            <p className="text-xs text-gray-500">
              Laissez vide si vous n'avez pas de préférence
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1 border-gray-600 bg-gray-800 text-white hover:bg-gray-700 hover:border-gray-500 hover:text-white transition-colors duration-200"
              disabled={isPending}
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#fe1556] hover:bg-[#e6134d] font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#fe1556]/25"
              disabled={isPending}
            >
              {isPending ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </Button>
          </div>
        </form>

        <p className="text-xs text-gray-400 text-center mt-4">
          * Champs obligatoires
        </p>
      </DialogContent>
    </Dialog>
  );
}
