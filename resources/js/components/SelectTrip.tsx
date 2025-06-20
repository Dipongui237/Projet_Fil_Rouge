import React from 'react';
import { Link } from '@inertiajs/react';
import NavBarSteps from '@/components/NavBarSteps';
import { Trip } from '@/types';

interface Props {
  trips: Trip[];
  agencyId: number;
}

const SelectTrip: React.FC<Props> = ({ trips, agencyId }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBarSteps />
      <div className="max

-w-6xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Sélectionner un trajet</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip) => (
            <Link
              key={trip.id}
              href={route('reservation.plan', { agencyId, tripId: trip.id })}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex items-center"
            >
              {trip.logo && (
                <img
                  src={`/storage/${trip.logo}`}
                  alt={`${trip.departure} to ${trip.destination} logo`}
                  className="w-16 h-16 object-contain mr-4"
                />
              )}
              <div>
                <h2 className="text-xl font-semibold">
                  {trip.departure} → {trip.destination}
                </h2>
                <p className="text-gray-600">Départ: {trip.departure_time}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectTrip;