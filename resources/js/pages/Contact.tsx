import React from 'react';
import { usePage, useForm } from '@inertiajs/react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { PageProps } from '@/types';

interface Props extends PageProps {}

const Contact: React.FC<Props> = () => {
  const { auth } = usePage<Props>().props;
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/contact', {
      onSuccess: () => setData({ name: '', email: '', subject: '', message: '' }),
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header auth={auth} />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-16">Contactez-nous</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Nos coordonnées</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 mt-1 text-blue-500" />
                <div>
                  <p className="font-medium">Téléphone</p>
                  <p>+237  6 98200387</p>
                  <p className="text-sm text-gray-500">Lun-Ven: 9h-18h | Sam: 9h-12h</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 mt-1 text-blue-500" />
                <div>
                  <p className="font-medium">Email</p>
                  <p>contact@ticketbus.com</p>
                  <p className="text-sm text-gray-500">Réponse sous 24h ouvrées</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 mt-1 text-blue-500" />
                <div>
                  <p className="font-medium">Adresse</p>
                  <p>123 Avenue des Transports</p>
                  <p>75000 yaoundé, France</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2">Nom complet</label>
                <Input
                  type="text"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  className="w-full"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <Input
                  type="email"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  className="w-full"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label className="block mb-2">Sujet</label>
                <Input
                  type="text"
                  value={data.subject}
                  onChange={(e) => setData('subject', e.target.value)}
                  className="w-full"
                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <Textarea
                  value={data.message}
                  onChange={(e) => setData('message', e.target.value)}
                  className="w-full min-h-[150px]"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={processing}
                className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </main>
      <ContactSection />
    </div>
  );
};

export default Contact;