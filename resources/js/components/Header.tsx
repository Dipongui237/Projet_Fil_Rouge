import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
import { PageProps } from '@/types';

interface Props extends PageProps {}

const Header: React.FC<Props> = () => {
  const { auth, url } = usePage<Props>().props;

  return (
    <header className="w-full flex justify-between items-center py-4 px-8 bg-white shadow-sm">
      <div className="flex items-center space-x-12">
        <Link href="/">
          <img src={logo} alt="TB Logo" className="h-16" />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className={`${url === '/' ? 'text-[#33C3F0]' : 'text-gray-600'} hover:text-[#33C3F0]`}
          >
            Accueil
          </Link>
          <Link 
            href="/history" 
            className={`${url === '/history' ? 'text-[#33C3F0]' : 'text-gray-600'} hover:text-[#33C3F0]`}
          >
            Historique
          </Link>
          <Link 
            href="/contact" 
            className={`${url === '/contact' ? 'text-[#33C3F0]' : 'text-gray-600'} hover:text-[#33C3F0]`}
          >
            Contact
          </Link>
          <Link 
            href="/faqs" 
            className={`${url === '/faqs' ? 'text-[#33C3F0]' : 'text-gray-600'} hover:text-[#33C3F0]`}
          >
            FAQs
          </Link>
        </nav>
      </div>
      <div>
        {auth.user ? (
          <Link
            href={route('logout')}
            method="post"
            as="button"
            className="text-gray-600 hover:text-[#33C3F0]"
          >
            Déconnexion
          </Link>
        ) : (
          <Link href="/login">
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Se connecter
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;