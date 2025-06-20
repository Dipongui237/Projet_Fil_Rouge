import React from 'react';
import { Link } from '@inertiajs/react';
import NavBarSteps from '@/components/NavBarSteps';
import { Plan } from '@/types';

interface Props {
  plans: Plan[];
  agencyId: number;
  tripId: number;
}

const SelectPlan: React.FC<Props> = ({ plans, agencyId, tripId }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBarSteps />
      <div className="max-w-6xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Sélectionner un plan tarifaire</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Link
              key={plan.id}
              href={route('reservation.details', { agencyId, tripId, planId: plan.id })}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold">{plan.name}</h2>
              <p className="text-gray-600">Prix: {plan.price} FCFA</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;