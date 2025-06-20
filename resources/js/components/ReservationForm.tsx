import React, { useState } from 'react';
import { CalendarIcon, MapPinIcon, UserIcon, ArrowLeftIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const cities = ['Yaoundé', 'Kribi', 'Ngaoundéré', 'Bertoua', 'Maroua', 'Bafoussam', 'Limbé', 'Dschang'];

const ReservationForm = ({
  onSubmit,
  onBack,
}: {
  onSubmit: (details: any) => void;
  onBack: () => void;
}) => {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    date: '',
    passengers: 1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Détails de réservation</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 flex items-center">
              <MapPinIcon className="mr-2 h-4 w-4" /> Ville de départ
            </label>
            <Select
              value={formData.origin}
              onValueChange={(value) => setFormData({ ...formData, origin: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner une ville" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 flex items-center">
              <MapPinIcon className="mr-2 h-4 w-4" /> Ville d'arrivée
            </label>
            <Select
              value={formData.destination}
              onValueChange={(value) => setFormData({ ...formData, destination: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner une ville" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" /> Date de voyage
          </label>
          <Input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 flex items-center">
            <UserIcon className="mr-2 h-4 w-4" /> Nombre de passagers
          </label>
          <Input
            type="number"
            min="1"
            value={formData.passengers}
            onChange={(e) => setFormData({ ...formData, passengers: parseInt(e.target.value) })}
            required
          />
        </div>
        <div className="flex justify-between">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeftIcon className="mr-2 h-4 w-4" /> Retour
          </Button>
          <Button type="submit" className="bg-green-500 hover:bg-green-600">
            Suivant
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;