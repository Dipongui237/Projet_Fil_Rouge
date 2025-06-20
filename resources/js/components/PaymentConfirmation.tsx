import React from 'react';
import { CheckCircleIcon, CreditCardIcon, ArrowLeftIcon } from 'lucide-react';
const PaymentConfirmation = ({
  agency,
  plan,
  details,
  seats,
  onConfirm,
  onBack,
  paymentConfirmed
}) => {
  // Calculate total price
  const basePrice = plan ? parseInt(plan.price) : 0;
  const passengerCount = details ? details.passengers : 1;
  const totalPrice = basePrice * passengerCount;
  return <div className="max-w-3xl mx-auto">
      {!paymentConfirmed && <button onClick={onBack} className="flex items-center text-green-600 mb-6 hover:underline">
          <ArrowLeftIcon size={16} className="mr-1" />
          Retour à la sélection des sièges
        </button>}
      <h2 className="text-2xl font-bold text-center mb-8">
        {paymentConfirmed ? 'Paiement confirmé' : 'Confirmation et paiement'}
      </h2>
      {paymentConfirmed ? <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircleIcon size={64} className="text-green-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">Réservation confirmée !</h3>
          <p className="text-gray-600 mb-6">
            Votre réservation a été confirmée et votre paiement a été traité
            avec succès.
          </p>
          <div className="bg-blue-50 rounded-lg p-4 mb-6 max-w-sm mx-auto">
            <p className="font-medium">Numéro de réservation</p>
            <p className="text-xl font-bold">
              {Math.random().toString(36).substring(2, 10).toUpperCase()}
            </p>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Un email de confirmation a été envoyé à {details?.email}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors" onClick={() => window.location.reload()}>
            Retour à l'accueil
          </button>
        </div> : <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">
                Récapitulatif de la réservation
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <p className="text-sm text-gray-600">Agence</p>
                  <p className="font-medium">
                    {agency?.name || 'Non sélectionné'}
                  </p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-sm text-gray-600">Plan tarifaire</p>
                  <p className="font-medium">
                    {plan?.name || 'Non sélectionné'}
                  </p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-sm text-gray-600">Trajet</p>
                  <p className="font-medium">
                    {details?.departureCity || 'Départ'} →{' '}
                    {details?.arrivalCity || 'Arrivée'}
                  </p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-sm text-gray-600">Date de départ</p>
                  <p className="font-medium">
                    {details?.departureDate || 'Non sélectionné'}
                  </p>
                </div>
                {details?.returnDate && <div className="border-b pb-3">
                    <p className="text-sm text-gray-600">Date de retour</p>
                    <p className="font-medium">{details.returnDate}</p>
                  </div>}
                <div className="border-b pb-3">
                  <p className="text-sm text-gray-600">Passagers</p>
                  <p className="font-medium">{details?.passengers || 1}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Sièges sélectionnés</p>
                  <p className="font-medium">
                    {seats && seats.length > 0 ? seats.join(', ') : plan && plan.id === 'standard' ? 'Attribution automatique' : 'Aucun siège sélectionné'}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">
                Informations de paiement
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom sur la carte
                  </label>
                  <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ex: Jean Dupont" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Numéro de carte
                  </label>
                  <div className="relative">
                    <input type="text" className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="XXXX XXXX XXXX XXXX" />
                    <CreditCardIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date d'expiration
                    </label>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="MM/AA" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVC
                    </label>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="123" />
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span>Prix unitaire ({plan?.name})</span>
                  <span>{plan?.price || 0}FCFA</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Nombre de passagers</span>
                  <span>x{details?.passengers || 1}</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t">
                  <span>Total</span>
                  <span>{totalPrice}FCFA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button onClick={onConfirm} className="bg-green-600 hover:bd-blue-500 text-white font-medium py-2 px-6 rounded-md transition-colors">
              Confirmer et payer
            </button>
          </div>
        </div>}
    </div>;
};
export default PaymentConfirmation;