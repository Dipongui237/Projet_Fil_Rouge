import React from 'react';
import { Inertia } from '@inertiajs/inertia';
export default function Header2() {
  return (
    <div className="border">
      <div className="flex-col">
        <div className="w-full bg-white flex space-x-50">
          <div>
            <img src="/logo.png" alt="Logo" className="w-[100px] h-[75px]" />
          </div>
          <div className="flex">
            <ul className="flex space-x-50">
              <li
                className="capitalize font-sans text-black text-[19px] cursor-pointer"
                onClick={() => Inertia.get(route('home'))}
              >
                Accueil
              </li>
              <li
                className="capitalize font-sans text-black text-[19px] cursor-pointer"
                onClick={() => Inertia.get(route('contact'))}
              >
                Contact
              </li>
              <li
                className="capitalize font-sans text-black text-[19px] cursor-pointer"
                onClick={() => Inertia.get(route('faqs'))}
              >
                Faqs
              </li>
              <li
                className="capitalize font-sans text-black text-[19px] cursor-pointer"
                onClick={() => Inertia.get(route('history'))}
              >
                Historique
              </li>
            </ul>
          </div>
          <div className="rounded-full w-15 h-15 font-sans text-white text-[50px] bg-green-400 flex items-center justify-center">
            <p>H</p>
          </div>
        </div>
        <div className="flex justify-center align-middle px-30 text-center">
          <div className="flex-col">
            <div className="rounded-full w-8 h-8 flex-col text-center font-sans text-white text-[20px] bg-green-400">
              <p>1</p>
            </div>
            <div
              className="w-full text-[10px] capitalize cursor-pointer"
              onClick={() => Inertia.get(route('reservation.agency'))}
            >
              Sélection d'agence
            </div>
          </div>
          <hr className="bg-green-400 border-2 w-2xl border-green-400" />
          <div className="flex-col">
            <div className="rounded-full w-8 h-8 flex-col text-center font-sans text-white text-[20px] bg-green-400">
              <p>2</p>
            </div>
            <div className="w-full text-[10px] capitalize">Sélection de trajet</div>
          </div>
          <hr className="bg-green-400 border-2 w-2xl border-green-400" />
          <div className="flex-col">
            <div className="rounded-full w-8 h-8 flex-col text-center font-sans text-white text-[20px] bg-green-400">
              <p>3</p>
            </div>
            <div className="w-full text-[10px] capitalize">Plan tarifaire</div>
          </div>
          <hr className="bg-green-400 border-2 w-2xl border-green-400" />
          <div className="flex-col">
            <div className="rounded-full w-8 h-8 flex-col text-center font-sans text-white text-[20px] bg-green-400">
              <p>4</p>
            </div>
            <div className="w-full text-[10px] capitalize">Détail de la réservation</div>
          </div>
          <hr className="bg-green-400 border-2 w-xl border-green-400" />
          <div className="flex-col align-middle">
            <div className="rounded-full w-8 h-8 flex-col text-center font-sans text-white text-[20px] bg-green-400">
              <p>5</p>
            </div>
            <div className="w-full text-[10px] capitalize">Confirmation et paiement</div>
          </div>
        </div>
      </div>
    </div>
  );
}