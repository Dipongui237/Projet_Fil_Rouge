import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import Header2 from '@/components/Header';
import Footer from '@/components/Footer';
import { PageProps } from '../../types';
import { Agency } from '../../types';

interface Props extends PageProps {
  agencies: Agency[];
}

const AgenceCard: React.FC<{ nom: string; logo?: string; localisation: string; id: number }> = ({ nom, logo, localisation, id }) => {
  return (
    <div
      className="bg-white shadow rounded-[3px] p-1.5 w-[310px] h-[230px] max-w-sm font-sans cursor-pointer"
      onClick={() => Inertia.get(route('reservation.trip', { agencyId: id }))}
    >
      <div>
        <div>
          <img
            src={logo || '/default-logo.png'}
            alt="Logo agence"
            className="w-80 h-30 object-cover rounded-[5px] mx-auto"
          />
        </div>
        <div className="mt-1">
          <div>
            <h1 className="capitalize text-black text font-semibold text-[16px] font-sans">
              Service de qualité et à petit prix
            </h1>
          </div>
          <div className="mt-1">
            <div>
              <p className="text-green-400">Situé à {localisation}</p>
            </div>
            <div className="text-center mt-4 bg-green-500 rounded-[5px]">
              <h2 className="text-lg text-amber-50 capitalize">{nom}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SelectAgency: React.FC<Props> = ({ agencies }) => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header2 />
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 capitalize">Sélectionner une agence</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agencies.map((agency) => (
            <AgenceCard
              key={agency.id}
              id={agency.id}
              nom={agency.nom}
              logo={agency.logo}
              localisation={agency.localisation}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SelectAgency;