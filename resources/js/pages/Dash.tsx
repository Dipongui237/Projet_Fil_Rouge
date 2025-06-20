import React from 'react';
import { usePage } from '@inertiajs/react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import { PageProps } from '@/types';

interface Props extends PageProps {}

const Dash: React.FC<Props> = () => {
  const { auth } = usePage<Props>().props;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header auth={auth} />
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-6">Tableau de bord</h1>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p>Bienvenue sur votre tableau de bord !</p>
          {auth.user ? (
            <p>Connecté en tant que {auth.user.name || 'Utilisateur'}</p>
          ) : (
            <p>Vous n'êtes pas connecté.</p>
          )}
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default Dash;