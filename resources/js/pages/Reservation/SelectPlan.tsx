import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import Header2 from '@/components/Header2';
import Footer from '@/components/Footer';
import { PageProps } from '../../types';
import { Plan } from '../../types';

interface Props extends PageProps {
  plans: Plan[];
  agencyId: number;
  tripId: number;
}

const PlanCard: React.FC<{ plan: Plan; agencyId: number; tripId: number }> = ({ plan, agencyId, tripId }) => {
  return (
    <div
      className="bg-white shadow rounded-[3px] p-1.5 w-[310px] h-[230px] max-w-sm font-sans cursor-pointer"
      onClick={() =>
        Inertia.get(
          plan.is_vip
            ? route('reservation.seat', { agencyId, tripId, planId: plan.id })
            : route('reservation.details', { agencyId, tripId, planId: plan.id })
        )
      }
    >
      <div>
        <div>
          <img
            src={plan.image || '/default-plan.png'}
            alt="Image plan"
            className="w-80 h-30 object-cover rounded-[5px] mx-auto"
          />
        </div>
        <div className="mt-1">
          <h1 className="capitalize text-black font-semibold text-[16px] font-sans">{plan.name}</h1>
          <p className="text-green-400">{plan.description}</p>
          <div className="text-center mt-4 bg-green-500 rounded-[5px]">
            <h2 className="text-lg text-amber-50 capitalize">{plan.price}FCFA</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const SelectPlan: React.FC<Props> = ({ plans, agencyId, tripId }) => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header2 />
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 capitalize">Sélectionner un plan tarifaire</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} agencyId={agencyId} tripId={tripId} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SelectPlan;