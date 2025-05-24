
import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import PsychologistsSection from '@/components/PsychologistsSection';
import ResourcesSection from '@/components/ResourcesSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen">
      <Header onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      <HeroSection />
      <HowItWorks />
      <PsychologistsSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;
