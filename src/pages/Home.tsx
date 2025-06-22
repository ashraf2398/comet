import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import SolutionsPreview from '../components/home/SolutionsPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <SolutionsPreview />
      <TestimonialsSection />
    </div>
  );
};

export default Home;