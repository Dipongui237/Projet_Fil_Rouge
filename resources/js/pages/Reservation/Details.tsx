import React from 'react';
import { useForm, usePage } from '@inertiajs/react';
import Header2 from '@/components/Header2';
import Footer from '@/components/Footer';
import { PageProps } from '@/types';

interface Props extends PageProps {
  agencyId: number;
  tripId: number;
  planId: number;
  seat_number?: string;
}

const Details: React.FC<Props> = ({ agencyId, tripId, planId, seat_number }) => {
  const { data, setData, post, processing, errors } = useForm<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    passengers: number;
    seat_number: string;
  }>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    passengers: 1,
    seat_number: seat_number || '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post(route('reservation.payment', { agencyId, tripId, planId }), {
      preserveState: true,
      preserveScroll: true,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header2 />
      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 capitalize">Détails de la réservation</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow rounded-[3px] p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 capitalize">
                Prénom
              </label>
              <input
                type="text"
                id="firstName"
                value={data.firstName}
                onChange={(e) => setData('firstName', e.target.value)}
                className="mt-1 border p-2 w-full rounded-[3px]"
                required
              />
              {errors.firstName && <div className="text-red-500 text-sm mt-1">{errors.firstName}</div>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 capitalize">
                Nom
              </label>
              <input
                type="text"
                id="lastName"
                value={data.lastName}
                onChange={(e) => setData('lastName', e.target.value)}
                className="mt-1 border p-2 w-full rounded-[3px]"
                required
              />
              {errors.lastName && <div className="text-red-500 text-sm mt-1">{errors.lastName}</div>}
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 capitalize">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              className="mt-1 border p-2 w-full rounded-[3px]"
              required
            />
            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 capitalize">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              value={data.phone}
              onChange={(e) => setData('phone', e.target.value)}
              className="mt-1 border p-2 w-full rounded-[3px]"
              required
            />
            {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
          </div>
          <div>
            <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 capitalize">
              Nombre de passagers
            </label>
            <input
              type="number"
              id="passengers"
              value={data.passengers}
              onChange={(e) => setData('passengers', parseInt(e.target.value))}
              min="1"
              className="mt-1 border p-2 w-full rounded-[3px]"
              required
            />
            {errors.passengers && <div className="text-red-500 text-sm mt-1">{errors.passengers}</div>}
          </div>
          {seat_number && (
            <div>
              <label className="block text-sm font-medium text-gray-700 capitalize">
                Siège sélectionné
              </label>
              <input
                type="text"
                value={data.seat_number}
                className="mt-1 border p-2 w-full rounded-[3px] bg-gray-100"
                readOnly
              />
            </div>
          )}
          <div className="text-right">
            <button
              type="submit"
              className="bg-green-400 text-white px-4 py-2 rounded-[5px] hover:bg-green-500 transition"
              disabled={processing}
            >
              {processing ? 'Envoi en cours...' : 'Continuer vers le paiement'}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Details;