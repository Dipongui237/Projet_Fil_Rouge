import React from 'react';
import { Link } from '@inertiajs/react';

const CTASection: React.FC = () => {
  return (
    <div className="py-16 px-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">
        <span className="text-blue-400">Êtes-vous</span> prêt à faire une réservation ?
      </h2>
      <p className="max-w-2xl mx-auto mb-8">
        Rejoignez des milliers de voyageurs sur TicketBus et transformez vos déplacements en expériences simples et agréables.
        Nous fournissons les outils et le support pour réserver vos billets de bus en toute simplicité.
      </p>
      <Link
        href="/reservation/agency"
        className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition duration-300"
      >
        Faire une première réservation
      </Link>
    </div>
  );
};

export default CTASection;