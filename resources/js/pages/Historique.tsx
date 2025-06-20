import React from 'react';
import { usePage } from '@inertiajs/react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PageProps } from '@/types';

interface HistoryItem {
  action: string;
  utilisateur: string;
  date: string;
}

interface Props extends PageProps {
  history: HistoryItem[];
}

const History: React.FC<Props> = () => {
  const { auth, history } = usePage<Props>().props;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header auth={auth} />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Consulter</h1>
          <h2 className="text-4xl font-bold text-[#33C3F0]">Votre Historique</h2>
        </div>
        <div className="bg-white rounded-lg shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-green-500">Action</TableHead>
                <TableHead className="text-green-500">Utilisateur</TableHead>
                <TableHead className="text-green-500">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {history.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.action}</TableCell>
                  <TableCell>{item.utilisateur}</TableCell>
                  <TableCell>{item.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
      <ContactSection />
    </div>
  );
};

export default History;