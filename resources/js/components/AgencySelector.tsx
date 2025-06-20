import React from 'react';
import { BuildingIcon, MapPinIcon, StarIcon } from 'lucide-react';
const agencies = [{
  id: 1,
  name: 'Main travel',
  logo: <BuildingIcon size={48} />,
  description: 'Service national avec plus de 50 destinations',
  rating: 4.5,
  routes: 120
}, {
  id: 2,
  name: 'Touristique',
  logo: <MapPinIcon size={48} />,
  description: 'Spécialiste des trajets interurbains confortables',
  rating: 4.2,
  routes: 85
}, {
  id: 3,
  name: 'Serice Voyage',
  logo: <BuildingIcon size={48} />,
  description: 'Service express avec WiFi gratuit à bord',
  rating: 4.7,
  routes: 95
}];
const AgencySelector = ({
  onSelect
}) => {
  return <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">
        Sélectionnez une agence de transport
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {agencies.map(agency => <div key={agency.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 cursor-pointer border border-gray-200 hover:border-blue-400" onClick={() => onSelect(agency)}>
            <div className="flex justify-center mb-4 text-blue-600">
              {agency.logo}
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              {agency.name}
            </h3>
            <p className="text-gray-600 text-center mb-4">
              {agency.description}
            </p>
            <div className="flex justify-between text-sm text-gray-500">
              <div className="flex items-center">
                <StarIcon size={16} className="text-yellow-500 mr-1" />
                <span>{agency.rating}/5</span>
              </div>
              <div>{agency.routes} routes</div>
            </div>
          </div>)}
      </div>
      <p className="text-center mt-8 text-gray-600">
        Choisissez l'une de nos agences partenaires pour commencer votre
        réservation
      </p>
    </div>;
};
export default AgencySelector;