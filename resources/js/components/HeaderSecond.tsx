import React, { Fragment } from 'react';
import { BusIcon } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';
import logo from '@/assets/logo.png';
const steps = [
    "Sélection d'agence",
    'Plan tarifaire',
    'Détails de réservation',
    'Sélection des sièges',
    'Confirmation de paiement',
    'Téléchargement du billet'
];

interface HeaderSecondProps {
    currentStep: number;
}

const HeaderSecond: React.FC<HeaderSecondProps> = ({ currentStep }) => {
    return (
        <header className="bg-black-100 text-black shadow-md">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        
                        <Link href="/">
                            <img src={logo} alt="TB Logo" className="h-16" />
                        </Link>
                        
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6">
                            <li>Accueil</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>
                <div className="mt-6 pb-4">
                    <div className="flex items-center justify-between max-w-4xl mx-auto">
                        {steps.map((step, index) => (
                            <Fragment key={index}>
                                <div className="flex flex-col items-center">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index + 1 === currentStep ? 'bg-green-300 text-white' : index + 1 < currentStep ? 'bg-green-400 text-white' : 'bg-blue-400 text-white'}`}>
                                        {index + 1 < currentStep ? '✓' : index + 1}
                                    </div>
                                    <span className="text-xs mt-1 hidden md:block">{step}</span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`flex-1 h-1 mx-2 ${index + 1 < currentStep ? 'bg-green-400' : 'bg-blue-400'}`}></div>
                                )}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderSecond;