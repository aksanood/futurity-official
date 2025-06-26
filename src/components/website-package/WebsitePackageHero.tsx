
import React from 'react';
import { Button } from '@/components/ui/button';
import { useModal } from '@/contexts/ModalContext';
import ContactForm from '@/components/ContactForm';

const WebsitePackageHero = () => {
  const { openModal, closeModal } = useModal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-futurity-blue via-futurity-blue-light to-futurity-blue">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero%20banner.jpg" 
          alt="Professional Website Design" 
          className="w-full h-full object-cover object-center opacity-40" 
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-futurity-orange/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="container-wide relative z-30 flex flex-col items-center justify-center text-center px-4 md:px-8">
        <div className="w-full max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Get Your Local Business{' '}
            <span className="bg-gradient-to-r from-futurity-orange to-yellow-400 bg-clip-text text-transparent">
              Online in Days
            </span>, Not Weeks
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto mb-8 font-medium">
            The professional, bespoke website your startup needs, for just{' '}
            <span className="text-futurity-orange font-bold">£250</span>. 
            Stop losing customers to competitors with an online presence that builds instant trust.
          </h2>
          
          <Button 
            size="lg" 
            className="bg-futurity-orange hover:bg-futurity-orange/90 text-white border-0 rounded-2xl px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-futurity-orange/25 transition-all duration-300"
            onClick={() => openModal(
              <ContactForm source="website-design-package-hero" onSuccess={closeModal} />
            )}
          >
            Get My Free Quote Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebsitePackageHero;
