import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import NavBarSteps from '@/components/NavBarSteps';
import { Reservation } from '@/types';

interface Props {
  reservation: Reservation;
}

const Payment: React.FC<Props> = ({ reservation }) => {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiry, setExpiry] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    router.post(route('reservation.processPayment'), {
      reservationId: reservation.id,
      cardNumber,
      expiry,
      cvv,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBarSteps />
      <div className="max-w-6xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Paiement</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Informations de paiement</h2>
          <form onSubmit={handlePayment}>
            <div className="mb-4">
              <label className="block text-gray-700">Numéro de carte</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Date d'expiration</label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="MM/AA"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="123"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Effectuer le paiement
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;