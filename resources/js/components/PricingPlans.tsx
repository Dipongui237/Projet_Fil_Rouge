import React from 'react';
import { CheckIcon, XIcon, ArrowLeftIcon } from 'lucide-react';
const pricingPlans = [{
  id: 'standard',
  name: 'Standard',
  price: '15',
  color: 'bg-gray-100',
  buttonColor: 'bg-gray-600 hover:bg-gray-700',
  features: [{
    name: 'Siège standard',
    included: true
  }, {
    name: 'Bagage en soute (15kg)',
    included: true
  }, {
    name: 'Choix de siège',
    included: false
  }, {
    name: 'Repas à bord',
    included: false
  }, {
    name: "Priorité d'embarquement",
    included: false
  }]
}, {
  id: 'vip',
  name: 'VIP',
  price: '25',
  color: 'bg-blue-50',
  buttonColor: 'bg-blue-600 hover:bg-blue-700',
  features: [{
    name: 'Siège confortable',
    included: true
  }, {
    name: 'Bagage en soute (25kg)',
    included: true
  }, {
    name: 'Choix de siège',
    included: true
  }, {
    name: 'Repas à bord',
    included: false
  }, {
    name: "Priorité d'embarquement",
    included: false
  }],
  popular: true
}, {
  id: 'premium',
  name: 'Premium',
  price: '40',
  color: 'bg-purple-50',
  buttonColor: 'bg-purple-600 hover:bg-purple-700',
  features: [{
    name: 'Siège premium',
    included: true
  }, {
    name: 'Bagage en soute illimité',
    included: true
  }, {
    name: 'Choix de siège',
    included: true
  }, {
    name: 'Repas à bord',
    included: true
  }, {
    name: "Priorité d'embarquement",
    included: true
  }]
}];
const PricingPlans = ({
  onSelect,
  onBack
}) => {
  return <div className="max-w-5xl mx-auto">
      <button onClick={onBack} className="flex items-center text-blue-600 mb-6 hover:underline">
        <ArrowLeftIcon size={16} className="mr-1" />
        Retour à la sélection d'agence
      </button>
      <h2 className="text-2xl font-bold text-center mb-2">
        Choisissez votre plan tarifaire
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Sélectionnez le forfait qui correspond le mieux à vos besoins
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map(plan => <div key={plan.id} className={`rounded-lg shadow-lg overflow-hidden relative ${plan.color} border border-gray-200`}>
            {plan.popular && <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-bl-lg">
                Populaire
              </div>}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}FCFA</span>
                <span className="text-gray-600"> / trajet</span>
              </div>
              <button onClick={() => onSelect(plan)} className={`w-full py-2 rounded-md text-white font-medium ${plan.buttonColor} transition-colors mb-6`}>
                Sélectionner
              </button>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => <li key={index} className="flex items-center">
                    {feature.included ? <CheckIcon size={18} className="text-green-500 mr-2" /> : <XIcon size={18} className="text-red-400 mr-2" />}
                    <span className={feature.included ? '' : 'text-gray-500'}>
                      {feature.name}
                    </span>
                  </li>)}
              </ul>
            </div>
          </div>)}
      </div>
    </div>;
};
export default PricingPlans;