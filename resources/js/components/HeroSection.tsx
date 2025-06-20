import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import imagehero from '@/assets/imagehero.png'
import logo from '@/assets/logo.png'
const HeroSection: React.FC = () => {
  const { auth }= usePage<PageProps>().props;
  return (
    <div className="w-full relative h-full">
      <div 
        className="bg-cover bg-center h-[500px]" 
        style={{ 
          backgroundImage: `url(${imagehero})`
        }}
      >
        <div className="absolute inset-0 bg-black/35 flex flex-col justify-center   px-16">
          <h1 className="text-white text-7xl font-bold mb-4  align-middle flex flex-col  gap-10">
            <span><span className="text-blue-400">Faites</span> désormais une réservation de  </span>
            <span>billet de bus devant votre télé</span>
          </h1>
          <p className="text-white text-xl mb-8 text-center mt-3">
            Découvrez comment fonctionne notre application
          </p>
          <div className="flex gap-4 align-middle  text-center justify-center">
            <Link
              href={auth.user ? '/reservation' : '/register'}
              className="bg-white text-blue-500 px-6 py-3 rounded-[3px] hover:bg-gray-100 transition duration-300"
            >
              Réservez maintenant
            </Link>
            <Link
              href="/about"
              className="bg-green-500 text-white px-6 py-3 roundbg-white rounded--[3px]shadow-lg hover:shadow-xl transition-shadow p-6 cursor-pointer   hover:border-blue-400rder-blue-400rder-blue-400"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;4