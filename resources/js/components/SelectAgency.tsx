import React from 'react';
import { Link } from '@inertiajs/react';
import NavBarSteps from '@/components/NavBarSteps';
import { Agency } from '@/types';

interface Props {
  agencies: Agency[];
}

const SelectAgency: React.FC<Props> = ({ agencies }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBarSteps />
      <div className="max-w-6xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Sélectionner une agence</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agencies.map((agency) => (
            <Link
              key={agency.id}
              href={route('reservation.trip', { agencyId: agency.id })}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex items-center"
            >
              {agency.logo && (
                <img
                  src={`/storage/${agency.logo}`}
                  alt={`${agency.name} logo`}
                  className="w-16 h-16 object-contain mr-4"
                />
              )}
              <div>
                <h2 className="text-xl font-semibold">{agency.name}</h2>
                <p className="text-gray-600">{agency.address}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectAgency;