import React from 'react';
import { usePage } from '@inertiajs/react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PageProps } from '@/types';

interface Faq {
  question: string;
  answer: string;
}

interface Props extends PageProps {
  faqs: Faq[];
}

const Faqs: React.FC<Props> = () => {
  const { auth, faqs } = usePage<Props>().props;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header auth={auth} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Résoudre</h1>
          <h2 className="text-4xl font-bold text-[#33C3F0]">Vos Préoccupations</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white p-4 rounded-lg shadow-sm">
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 mt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
      <ContactSection />
    </div>
  );
};

export default Faqs;