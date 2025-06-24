
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-black/70 to-black/50 absolute z-10"></div>
        <img 
          src="/hero%20banner.jpg" 
          alt="Professional Website Design" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      
      {/* Hero Content */}
      <div className="container-wide relative z-20 text-center text-white py-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Get Your Local Business <br />
          <span className="text-orange-500">Online in Days</span>, <br />
          Not Weeks
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
          The professional, bespoke website your startup needs, for just <span className="text-orange-500 font-bold">£250</span>. 
          Stop losing customers to competitors with an online presence that builds instant trust.
        </h2>
        
        <Button 
          size="lg" 
          onClick={onCtaClick}
          className="bg-orange-500 hover:bg-orange-600 text-white text-lg md:text-xl px-8 py-6 md:px-12 md:py-8 rounded-xl font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
        >
          Get My Free Quote Now
          <ArrowRight className="ml-2 w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
