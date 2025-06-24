
import React, { useState } from 'react';
import { useModal } from '@/contexts/ModalContext';
import ContactForm from '@/components/ContactForm';
import HeroSection from '@/components/website-package/HeroSection';
import ProblemSection from '@/components/website-package/ProblemSection';
import SolutionSection from '@/components/website-package/SolutionSection';
import ProofSection from '@/components/website-package/ProofSection';
import ProcessSection from '@/components/website-package/ProcessSection';
import CtaSection from '@/components/website-package/CtaSection';
import * as z from 'zod';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  businessName: z.string().min(2, 'Business name is required'),
});

const WebsiteDesignPackage = () => {
  const { openModal, closeModal } = useModal();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('Form submitted:', values);
    setIsSubmitted(true);
    // Handle form submission here
  };

  const handleCtaClick = () => {
    openModal(
      <ContactForm source="website-package-landing" onSuccess={closeModal} />
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onCtaClick={handleCtaClick} />
      <ProblemSection />
      <SolutionSection />
      <ProofSection />
      <ProcessSection />
      <CtaSection isSubmitted={isSubmitted} onSubmit={onSubmit} />
    </div>
  );
};

export default WebsiteDesignPackage;
