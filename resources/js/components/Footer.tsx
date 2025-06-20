import React from 'react';
import { PhoneIcon, MailIcon, MapIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 capitalize">
              BusTicket Réservation
            </h3>
            <p className="text-gray-400">
              La plateforme de réservation de bus en ligne qui vous permet de voyager facilement à travers toutes les régions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 capitalize">
              Nos agences partenaires
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>Main travel</li>
              <li>Touristique</li>
              <li>Serice Voyage</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 capitalize">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <PhoneIcon size={16} className="mr-2" />
                +237  6 98200387
              </li>
              <li className="flex items-center">
                <MailIcon size={16} className="mr-2" />
                contact@busticket.fr
              </li>
              <li className="flex items-center">
                <MapIcon size={16} className="mr-2" />
                123 Avenue des Transports, 75000 yaoundé
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© 2025 BusTicket Réservation. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;