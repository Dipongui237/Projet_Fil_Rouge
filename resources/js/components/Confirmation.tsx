import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import Header2 from './Header';
import Footer from '@/components/Footer';
import { CheckCircleIcon } from 'lucide-react';

const Confirmation: React.FC = () => {
  const reservationNumber = Math.random().toString(36).substring(2, 10).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header2 />
      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-[3px] p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircleIcon size={64} className="text-green-500" />
          </div>
          <h3 className="text-xl font-bold mb-2 capitalize">Réservation confirmée !</h3>
          <p className="text-gray-600 mb-6">
            Votre réservation a été confirmée et votre paiement a été traité avec succès.
          </p>
          <div className="bg-green-50 rounded-[5px] p-4 mb-6 max-w-sm mx-auto">
            <p className="font-medium capitalize">Numéro de réservation</p>
            <p className="text-xl font-bold">{reservationNumber}</p>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Un email de confirmation a été envoyé à votre adresse.
          </p>
          <button
            className="bg-green-400 text-white px-4 py-2 rounded-[5px] hover:bg-green-500 transition"
            onClick={() => Inertia.get(route('home'))}
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Confirmation;