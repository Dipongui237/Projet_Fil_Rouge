
import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center py-4 px-8">
      <div className="flex items-center">
        <img src={logo} alt="TB Logo" className="h-16" />
      </div>
      <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300">
        se connecter
      </button>
    </header>
  );
};

export default Header;
