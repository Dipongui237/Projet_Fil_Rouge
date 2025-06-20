
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import StepsSection from '../components/StepsSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <HeroSection />
      <ServicesSection />
      <StepsSection />
      <CTASection />
      <ContactSection /> 
    </div>
  );
};

export default Index;
