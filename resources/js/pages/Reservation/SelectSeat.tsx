import React, { useState, Fragment } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import Header2 from '@/components/Header2';
import Footer from '@/components/Footer';
import { PageProps } from '../../types';
import { Seat, Plan } from '../../types';
import { ArrowLeftIcon, HelpCircleIcon } from 'lucide-react';

interface Props extends PageProps {
  seats: Seat[];
  plan: Plan;
  agencyId: number;
  tripId: number;
  planId: number;
}

const SeatSelection: React.FC<Props> = ({ seats, plan, agencyId, tripId, planId }) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const toggleSeat = (seatId: string, available: boolean) => {
    if (!available || !plan.is_vip) return;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleContinue = () => {
    Inertia.get(route('reservation.details', { agencyId, tripId, planId }), {
      seat_number: selectedSeats.join(', '),
    });
  };

  const handleBack = () => {
    Inertia.get(route('reservation.plan', { agencyId, tripId }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header2 />
      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <button
          onClick={handleBack}
          className="flex items-center text-green-600 mb-6 hover:underline"
        >
          <ArrowLeftIcon size={16} className="mr-1" />
          Retour aux plans tarifaires
        </button>
        <h2 className="text-2xl font-bold text-center mb-2 capitalize">Sélection des sièges</h2>
        <p className="text-center text-gray-600 mb-8">
          Choisissez vos places préférées dans le bus
          {!plan.is_vip && ' (Non disponible avec le plan Standard)'}
        </p>
        <div className="bg-white shadow rounded-[3px] p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-6">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-200 rounded-[3px] mr-2"></div>
                <span className="text-sm">Disponible</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-[3px] mr-2"></div>
                <span className="text-sm">Sélectionné</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-400 rounded-[3px] mr-2"></div>
                <span className="text-sm">Occupé</span>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <HelpCircleIcon size={16} className="mr-1" />
              <span>Avant du bus</span>
            </div>
          </div>
          <div className="bus-layout mb-8">
            <div className="w-full h-12 bg-gray-300 rounded-t-[15px] mb-8 flex items-center justify-center">
              <span className="font-medium capitalize">Chauffeur</span>
            </div>
            <div className="grid grid-cols-5 gap-2 max-w-md mx-auto">
              {seats.reduce((rows: Seat[][], seat, index) => {
                if (index % 4 === 0) rows.push([]);
                rows[rows.length - 1].push(seat);
                return rows;
              }, []).map((row, rowIndex) => (
                <Fragment key={rowIndex}>
                  <div className="flex items-center justify-center">
                    <span className="text-sm font-medium">{rowIndex + 1}</span>
                  </div>
                  {row.map((seat, seatIndex) => {
                    const isAisle = seatIndex === 1;
                    return (
                      <Fragment key={seat.id}>
                        <div
                          className={`
                            w-10 h-10 rounded-[3px] flex items-center justify-center cursor-pointer
                            ${seat.status === 'available' ? selectedSeats.includes(seat.seat_number) ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-400 text-white cursor-not-allowed'}
                            ${!plan.is_vip ? 'opacity-50 cursor-not-allowed' : ''}
                          `}
                          onClick={() => toggleSeat(seat.seat_number, seat.status === 'available')}
                        >
                          {seat.seat_number}
                        </div>
                        {isAisle && <div className="w-6"></div>}
                      </Fragment>
                    );
                  })}
                </Fragment>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex flex-wrap items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  Sièges sélectionnés:
                  <span className="font-medium ml-1">
                    {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'Aucun'}
                  </span>
                </p>
                {!plan.is_vip && (
                  <p className="text-sm text-orange-600 mt-1">
                    La sélection de siège n'est pas disponible avec le plan Standard. Les sièges seront attribués automatiquement.
                  </p>
                )}
              </div>
              <button
                onClick={handleContinue}
                className="bg-green-400 text-white px-4 py-2 rounded-[5px] hover:bg-green-500 transition"
              >
                Continuer
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SeatSelection;