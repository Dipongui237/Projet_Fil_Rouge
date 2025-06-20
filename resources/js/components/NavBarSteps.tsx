import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';

const NavBarSteps: React.FC = () => {
  const { url, is_vip } = usePage<PageProps>().props;

  console.log('NavBarSteps props:', usePage().props);

  const currentUrl = url || window.location.pathname;

  const steps = [
    { name: 'Agence', route: 'reservation.agency', path: '/reservation/agency' },
    { name: 'Trajet', route: 'reservation.trip', path: '/reservation/trip' },
    { name: 'Plan', route: 'reservation.plan', path: '/reservation/plan' },
    ...(is_vip
      ? [{ name: 'Siège', route: 'reservation.seat', path: '/reservation/seat' }]
      : []),
    { name: 'Détails', route: 'reservation.details', path: '/reservation/details' },
    { name: 'Paiement', route: 'reservation.payment', path: '/reservation/payment' },
    {
      name: 'Confirmation',
      route: 'reservation.confirmation',
      path: '/reservation/confirmation',
    },
  ];

  const currentStepIndex = steps.findIndex((step) => currentUrl.startsWith(step.path));

  return (
    <nav className="bg-green-600 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          {steps.map((step, index) => (
            <Link
              key={step.name}
              href={route(step.route, index > 0 ? { agencyId: 0, tripId: 0, planId: 0 } : undefined)}
              className={`text-white hover:text-gray-200 ${
                index === currentStepIndex ? 'font-bold underline' : ''
              } ${index > currentStepIndex ? 'pointer-events-none opacity-50' : ''}`}
            >
              {step.name}
            </Link>
          ))}
        </div>
        <div>
          <Link href={route('home')} className="text-white hover:text-gray-200">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBarSteps;