
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail } from "lucide-react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Register = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to: bg-gray-100 flex items-center justify-center">
      <div className="absolute top-8 left-8">
        <img src={logo} alt="TB Logo" className="h-16" />
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8">Créer un compte</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nom</label>
              <Input placeholder="entrer votre nom" type="text" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Prenom</label>
              <Input placeholder="entrer votre prénom" type="text" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Adresse mail</label>
            <Input placeholder="entrer votre adresse mail" type="email" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Mots de pass</label>
            <Input placeholder="entrer votre mot de pass" type="password" />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-sm">
              J'ai lu et j'accepte les termes de confidentialités
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="marketing" />
            <label htmlFor="marketing" className="text-sm">
              Yes, I want to receive emails about exclusive deals and promotions
            </label>
          </div>

          <Button className="w-full bg-green-500 hover:bg-green-600" type="submit">
            Créer un compte
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600">Or continue with</p>
            <Button variant="outline" className="mt-2 w-full">
              <Mail className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>

          <div className="text-center text-sm">
            <span className="text-gray-600">Vous avez déjà un compte ? </span>
            <Link to="/login" className="text-blue-600 hover:underline">
              Connecter vous
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
