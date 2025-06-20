
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from '../assets/logo.png';

const Verify = () => {
  const [verificationCode, setVerificationCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle verification
  };

  const handleResendCode = () => {
    // Handle resend code
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-gray-100 flex items-center justify-center">
      <div className="absolute top-8 left-8">
        <img src={logo} alt="TB Logo" className="h-16" />
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-xl">Un code d'identification vous été envoyé par mail</h2>
          <p className="text-gray-600">Veuillez le confirmer s'il vous plaît</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              placeholder="Entrer le code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="text-center"
            />
          </div>

          <Button className="w-full bg-green-500 hover:bg-green-600" type="submit">
            Confirmer
          </Button>

          <div className="text-center text-sm">
            <span className="text-gray-600">Vous N'avez pas reçu le code? </span>
            <button
              type="button"
              onClick={handleResendCode}
              className="text-blue-600 hover:underline"
            >
              Appuyer pour recevoir à nouveau le code
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verify;
