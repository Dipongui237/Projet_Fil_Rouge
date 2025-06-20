
import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full relative">
      <div className="bg-cover bg-center h-[450px]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")' }}>
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-16">
          <h1 className="text-white text-5xl font-bold mb-4">
            <span className="text-blue-400">Faites</span> désormais une réservation de billet de bus devant votre télé
          </h1>
          <p className="text-white text-xl mb-8">
            Découvrez comment fonctionne notre application
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-500 px-6 py-3 rounded-md hover:bg-gray-100 transition duration-300">
              Réservez maintenant
            </button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
              Découvrir nos services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
