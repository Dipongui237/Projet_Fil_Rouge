import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import Header2 from '@/components/Header2';
import Footer from '@/components/Footer';
import { PageProps } from '@/types';

interface Props extends PageProps {
  agencyId: number;
  tripId: number;
  planId: number;
  passenger_name?: string;
  passenger_email?: string;
  passenger_phone?: string;
  passengers?: number;
  seat_number?: string;
}

const Payment: React.FC<Props> = ({ agencyId, tripId, planId, passenger_name, passenger_email, passenger_phone, passengers, seat_number }) => {
  const { data, setData, post, processing, errors } = useForm<{
    card_number: string;
    expiry_date: string;
    cvv: string;
    passenger_name: string;
    passenger_email: string;
    passenger_phone: string;
    passengers: number;
    seat_number: string;
  }>({
    card_number: '',
    expiry_date: '',
    cvv: '',
    passenger_name: passenger_name || '',
    passenger_email: passenger_email || '',
    passenger_phone: passenger_phone || '',
    passengers: passengers || 1,
    seat_number: seat_number || '',
  });

  // Débogage : Journaliser les props reçues
  useEffect(() => {
    console.log('Props reçues dans Payment.tsx:', {
      agencyId,
      tripId,
      planId,
      passenger_name,
      passenger_email,
      passenger_phone,
      passengers,
      seat_number,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post(route('reservation.processPayment', { agencyId, tripId, planId }), {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        console.log('Paiement soumis avec succès');
      },
      onError: (errors) => {
        console.error('Erreur lors de la soumission du paiement:', errors);
      },
    });
  };

  // Vérifier si les données nécessaires sont présentes
  const isDataMissing = !data.passenger_name || !data.passenger_email || !data.passenger_phone || !data.passengers;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header2 />
      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 capitalize">Paiement</h2>
        {isDataMissing && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-[3px] mb-6">
            <p>Erreur : Certaines informations de réservation sont manquantes. Veuillez vérifier les étapes précédentes.</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="bg-white shadow rounded-[3px] p-8 space-y-6">
          <div>
            <label htmlFor="card_number" className="block text-sm font-medium text-gray-700 capitalize">
              Numéro de carte
            </label>
            <input
              type="text"
              id="card_number"
              value={data.card_number}
              onChange={(e) => setData('card_number', e.target.value)}
              className="mt-1 border p-2 w-full rounded-[3px]"
              required
            />
            {errors.card_number && <div className="text-red-500 text-sm mt-1">{errors.card_number}</div>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="expiry_date" className="block text-sm font-medium text-gray-700 capitalize">
                Date d'expiration
              </label>
              <input
                type="text"
                id="expiry_date"
                value={data.expiry_date}
                onChange={(e) => setData('expiry_date', e.target.value)}
                placeholder="MM/AA"
                className="mt-1 border p-2 w-full rounded-[3px]"
                required
              />
              {errors.expiry_date && <div className="text-red-500 text-sm mt-1">{errors.expiry_date}</div>}
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 capitalize">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                value={data.cvv}
                onChange={(e) => setData('cvv', e.target.value)}
                className="mt-1 border p-2 w-full rounded-[3px]"
                required
              />
              {errors.cvv && <div className="text-red-500 text-sm mt-1">{errors.cvv}</div>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">
              Nom du passager
            </label>
            <input
              type="text"
              value={data.passenger_name || 'Non fourni'}
              className="mt-1 border p-2 w-full rounded-[3px] bg-gray-100"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">
              Email
            </label>
            <input
              type="email"
              value={data.passenger_email || 'Non fourni'}
              className="mt-1 border p-2 w-full rounded-[3px] bg-gray-100"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">
              Téléphone
            </label>
            <input
              type="tel"
              value={data.passenger_phone || 'Non fourni'}
              className="mt-1 border p-2 w-full rounded-[3px] bg-gray-100"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">
              Nombre de passagers
            </label>
            <input
              type="number"
              value={data.passengers}
              className="mt-1 border p-2 w-full rounded-[3px] bg-gray-100"
              readOnly
            />
          </div>
          {data.seat_number && (
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
              disabled={processing || isDataMissing}
            >
              {processing ? 'Paiement en cours...' : 'Confirmer le paiement'}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;