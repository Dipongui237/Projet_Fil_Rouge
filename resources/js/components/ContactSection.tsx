import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import logo from '@/assets/logo.png';

const ContactSection: React.FC = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/subscribe', {
      onSuccess: () => setData('email', ''),
    });
  };

  return (
    <div className="py-12 px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <img src={logo} alt="TB Logo" className="h-16 mb-4" />
          </div>
          <div className="max-w-md">
            <h3 className="text-xl font-bold mb-4">Laissez-nous un commentaire par mail</h3>
            <form className="flex" onSubmit={handleSubmit}>
              <Input 
                type="email" 
                placeholder="Email" 
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                className="flex-grow rounded-l-md text-black"
              />
              <button
                type="submit"
                disabled={processing}
                className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition duration-300"
              >
                S'inscrire
              </button>
            </form>
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Utiles</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition duration-300">
                  • Accueil
                </Link>
              </li>
              <li>
                <Link to="/history" className="hover:text-blue-400 transition duration-300">
                  • Historique
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-blue-400 transition duration-300">
                  • FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos agences partenaires</h4>
            <ul className="space-y-2">
              <li>• MTN Travel</li>
              <li>• Finess</li>
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
            <select className="bg-gray-800 text-white px-4 py-2 rounded-md" defaultValue="fr">
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </div>
          <div className="flex space-x-6">
            <a href="https://twitter.com" className="text-white hover:text-blue-400 transition duration-300">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://facebook.com" className="text-white hover:text-blue-400 transition duration-300">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-blue-400 transition duration-300">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://youtube.com" className="text-white hover:text-blue-400 transition duration-300">
              <i className="fab fa-youtube text-xl"></i>
            </a>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-8 text-sm">
          © 2023, TicketBus • Privacy • Terms • info@ticketbus.com
        </div>
      </div>
    </div>
  );
};

export default ContactSection;