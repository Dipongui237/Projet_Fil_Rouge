
import React from 'react';
import logo from '../assets/logo.png';

const ContactSection = () => {
  return (
    <div className="py-12 px-8 bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="mb-8 md:mb-0">
          <img src={logo} alt="TB Logo" className="h-16 mb-4" />
        </div>
        
        <div className="max-w-md">
          <h3 className="text-xl font-bold mb-4">Laisser nous un commentaire par mail</h3>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email" 
              className="flex-grow px-4 py-2 rounded-l-md text-black" 
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Lien Utiles</h4>
          <ul className="space-y-2">
            <li>• Accueil</li>
            <li>• Historique</li>
            <li>• FAQs</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Nos agences partenaires</h4>
          <ul className="space-y-2">
            <li>• MTN Travel</li>
            <li>• finess</li>
            <li>• Cambe</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>• +237  6 98200387</li>
            <li>• contact@ticketbus.com</li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
        <div className="mb-4 md:mb-0">
          <select className="bg-gray-800 text-white px-4 py-2 rounded-md">
            <option>English</option>
            <option selected>Français</option>
          </select>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-white hover:text-blue-400 transition duration-300">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition duration-300">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition duration-300">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition duration-300">
            <i className="fab fa-youtube text-xl"></i>
          </a>
        </div>
      </div>
      
      <div className="text-center text-gray-400 mt-8 text-sm">
        © 2023, Ticket bus • Privacy • Terms • info@ticketbus
      </div>
    </div>
  );
};

export default ContactSection;
