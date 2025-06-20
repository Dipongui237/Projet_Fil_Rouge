import React from 'react';
import { usePage } from '@inertiajs/react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import StepsSection from '@/components/StepsSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import { PageProps } from '@/types';

interface Props extends PageProps {}

const Home: React.FC<Props> = () => {
  const { auth } = usePage<Props>().props;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header auth={auth} />
      <HeroSection />
      <ServicesSection />
      <StepsSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default Home;