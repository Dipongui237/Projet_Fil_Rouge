import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import Header2 from '@/components/Header2';
import Footer from '@/components/Footer';
import { PageProps } from '../../types';
import { Trip } from '../../types';

interface Props extends PageProps {
  trips: Trip[];
  agencyId: number;
}

const TripCard: React.FC<{ trip: Trip; agencyId: number }> = ({ trip, agencyId }) => {
  return (
    <div
      className="bg-white shadow rounded-[3px] p-1.5 w-[310px] h-[230px] max-w-sm font-sans cursor-pointer"
      onClick={() => Inertia.get(route('reservation.plan', { agencyId, tripId: trip.id }))}
    >
      <div>
        <div>
          <img
            src={trip.image || '/default-trip.png'}
            alt="Image trajet"
            className="w-80 h-30 object-cover rounded-[5px] mx-auto"
          />
        </div>
        <div className="mt-1">
          <h1 className="capitalize text-black font-semibold text-[16px] font-sans">
            {trip.ville_depart} → {trip.ville_arrivee}
          </h1>
          <p className="text-green-400">Départ: {trip.heure_depart}</p>
          <div className="text-center mt-4 bg-green-500 rounded-[5px]">
            <h2 className="text-lg text-amber-50 capitalize">{trip.prix}FCFA</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const SelectTrip: React.FC<Props> = ({ trips, agencyId }) => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header2 />
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 capitalize">Sélectionner un trajet</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} agencyId={agencyId} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SelectTrip;