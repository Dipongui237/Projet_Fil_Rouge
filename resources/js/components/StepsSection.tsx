
import React from 'react';

interface StepProps {
  number: string;
  title: string;
  description?: string;
}

const Step = ({ number, title, description }: StepProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-48 h-48 flex flex-col justify-center items-center text-center relative">
      <div className="text-blue-500 text-4xl font-bold mb-2">{number}</div>
      <h3 className="font-semibold mb-1">{title}</h3>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </div>
  );
};

const StepsSection = () => {
  return (
    <div className="py-16 px-8 bg-gray-100">
      <div className="text-center mb-12">
        <p className="text-gray-600 mb-2">comment ça marche?</p>
        <h2 className="text-3xl font-bold">
          <span className="text-blue-500">Réservation</span> en 5 étapes
        </h2>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-4 relative">
        <Step number="1" title="créer un compte" />
        
        <div className="hidden md:block transform rotate-[30deg] text-blue-400 text-5xl">→</div>
        
        <Step number="2" title="Selectionner une Agences" />
        
        <div className="hidden md:block transform rotate-[30deg] text-yellow-400 text-5xl">→</div>
        
        <Step number="3" title="Selectionner votre Trajet" />
        
        <div className="hidden md:block transform rotate-[30deg] text-blue-400 text-5xl">→</div>
        
        <Step number="4" title="Selectionner un Plan tarifaire" />
        
        <div className="hidden md:block transform rotate-[30deg] text-yellow-400 text-5xl">→</div>
        
        <Step number="5" title="Valider les details et passer au paiement" />
      </div>
    </div>
  );
};

export default StepsSection;
