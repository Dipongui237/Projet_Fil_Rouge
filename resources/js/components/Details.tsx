import React from 'react';
import { Link } from '@inertiajs/react';
import NavBarSteps from '@/components/NavBarSteps';
import { Reservation } from '@/types';

interface Props {
  reservation: Reservation;
}

const Details: React.FC<Props> = ({ reservation }) => {
  const { agency, trip, plan } = reservation;

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBarSteps />
      <div className="max-w-6xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Détails de la réservation</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Récapitulatif</h2>
          <div className="flex items-center mb-4">
            {agency.logo && (
              <img
                src={`/storage/${agency.logo}`}
                alt={`${agency.name} logo`}
                className="w-12 h-12 object-contain mr-4"
              />
            )}
            <p><strong>Agence:</strong> {agency.name}</p>
          </div>
          <div className="flex items-center mb-4">
            {trip.logo && (
              <img
                src={`/storage/${trip.logo}`}
                alt={`${trip.departure} to ${trip.destination} logo`}
                className="w-12 h-12 object-contain mr-4"
              />
            )}
            <p><strong>Trajet:</strong> {trip.departure} → {trip.destination}</p>
          </div>
          <p><strong>Heure de départ:</strong> {trip.departure_time}</p>
          <p><strong>Plan tarifaire:</strong> {plan.name}</p>
          <p><strong>Prix:</strong> {plan.price} FCFA</p>
          <div className="mt-6">
            <Link
              href={route('reservation.payment', {
                agencyId: agency.id,
                tripId: trip.id,
                planId: plan.id,
              })}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Confirmer et procéder au paiement
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;