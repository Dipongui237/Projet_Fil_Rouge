import React, { useState, Fragment } from 'react';
import { ArrowLeftIcon, HelpCircleIcon } from 'lucide-react';
const SeatSelection = ({
  selectedPlan,
  onSelect,
  onBack
}) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  // Generate bus layout
  const generateBusLayout = () => {
    const rows = 10;
    const seatsPerRow = 4;
    const layout = [];
    // Determine unavailable seats (randomly for demo purposes)
    const unavailableSeats = [];
    for (let i = 0; i < 10; i++) {
      const randomRow = Math.floor(Math.random() * rows) + 1;
      const randomSeat = Math.floor(Math.random() * seatsPerRow) + 1;
      unavailableSeats.push(`${randomRow}${getSeatLetter(randomSeat)}`);
    }
    for (let row = 1; row <= rows; row++) {
      const rowSeats = [];
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const seatId = `${row}${getSeatLetter(seat)}`;
        const isUnavailable = unavailableSeats.includes(seatId);
        rowSeats.push({
          id: seatId,
          available: !isUnavailable
        });
      }
      layout.push(rowSeats);
    }
    return layout;
  };
  const getSeatLetter = number => {
    return ['A', 'B', 'C', 'D'][number - 1];
  };
  const busLayout = generateBusLayout();
  const toggleSeat = (seatId, available) => {
    if (!available) return;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };
  const handleContinue = () => {
    onSelect(selectedSeats);
  };
  return <div className="max-w-3xl mx-auto">
      <button onClick={onBack} className="flex items-center text-blue-600 mb-6 hover:underline">
        <ArrowLeftIcon size={16} className="mr-1" />
        Retour aux détails de réservation
      </button>
      <h2 className="text-2xl font-bold text-center mb-2">
        Sélection des sièges
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Choisissez vos places préférées dans le bus
        {selectedPlan && selectedPlan.id === 'standard' && ' (Non disponible avec le plan Standard)'}
      </p>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-6">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-200 rounded mr-2"></div>
              <span className="text-sm">Disponible</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-blue-500 rounded mr-2"></div>
              <span className="text-sm">Sélectionné</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-400 rounded mr-2"></div>
              <span className="text-sm">Occupé</span>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <HelpCircleIcon size={16} className="mr-1" />
            <span>Avant du bus</span>
          </div>
        </div>
        <div className="bus-layout mb-8">
          {/* Bus front */}
          <div className="w-full h-12 bg-gray-300 rounded-t-3xl mb-8 flex items-center justify-center">
            <span className="font-medium">Chauffeur</span>
          </div>
          {/* Seats */}
          <div className="grid grid-cols-5 gap-2 max-w-md mx-auto">
            {busLayout.map((row, rowIndex) => <Fragment key={rowIndex}>
                <div className="flex items-center justify-center">
                  <span className="text-sm font-medium">{rowIndex + 1}</span>
                </div>
                {row.map((seat, seatIndex) => {
              // Add aisle between seats B and C
              const isAisle = seatIndex === 1;
              return <Fragment key={seat.id}>
                      <div className={`
                          w-10 h-10 rounded flex items-center justify-center cursor-pointer
                          ${seat.available ? selectedSeats.includes(seat.id) ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-400 text-white cursor-not-allowed'}
                          ${selectedPlan && selectedPlan.id === 'standard' ? 'opacity-50 cursor-not-allowed' : ''}
                        `} onClick={() => {
                  if (selectedPlan && selectedPlan.id !== 'standard') {
                    toggleSeat(seat.id, seat.available);
                  }
                }}>
                        {seat.id}
                      </div>
                      {isAisle && <div className="w-6"></div>}
                    </Fragment>;
            })}
              </Fragment>)}
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
              {selectedPlan && selectedPlan.id === 'standard' && <p className="text-sm text-orange-600 mt-1">
                  La sélection de siège n'est pas disponible avec le plan
                  Standard. Les sièges seront attribués automatiquement.
                </p>}
            </div>
            <button onClick={handleContinue} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
              Continuer
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default SeatSelection;