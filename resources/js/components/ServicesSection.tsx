import React from 'react';
import { Clock, PieChart, Globe, Calendar } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <div className="py-16 px-8 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          <span className="text-blue-500">Pourquoi</span> Réserver En Ligne ?
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <ServiceCard 
          icon={<Clock className="text-yellow-500" />}
          title="Gain de temps"
          description="Et Oui il vous est possible de réserver alors que vous êtes chez vous confortablement"
        />
        <ServiceCard 
          icon={<PieChart className="text-orange-500" />}
          title="Possibilité d'annulation"
          description="Oui, il est possible d'annuler simplement votre réservation"
        />
        <ServiceCard 
          icon={<Globe className="text-green-500" />}
          title="En savoir plus sur l'agence et ses tarifications"
          description="Découvrez les différentes agences et leur expérience sur notre site"
        />
        <ServiceCard 
          icon={<Calendar className="text-purple-500" />}
          title="Embarquement Planifié"
          description="Prenez connaissance de votre chauffeur et découvrez votre siège, même si le bus est plein"
        />
      </div>
    </div>
  );
};

export default ServicesSection;