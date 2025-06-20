import React from 'react';
import { usePage } from '@inertiajs/react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import { PageProps } from '@/types';

interface Props extends PageProps {}

const About: React.FC<Props> = () => {
  const { auth } = usePage<Props>().props;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header auth={auth} />
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-6">À propos</h1>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p>TicketBus est votre plateforme pour des réservations de bus simples et rapides.</p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default About;