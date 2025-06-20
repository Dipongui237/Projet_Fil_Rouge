import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';

interface Props extends PageProps {
  // Ajouter des props spécifiques si nécessaire
}

const NavBar: React.FC<Props> = () => {
  const { auth } = usePage<Props>().props;

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">Réservations</Link>
        </div>
        <div className="flex space-x-4">
          {auth.user ? (
            <>
              <span>Bonjour, {auth.user.name || 'Utilisateur'}</span>
              <Link
                href={route('logout')}
                method="post"
                as="button"
                className="hover:underline"
              >
                Déconnexion
              </Link>
            </>
          ) : (
            <>
              <Link href={route('login')} className="hover:underline">
                Connexion
              </Link>
              <Link href={route('register')} className="hover:underline">
                Inscription
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;