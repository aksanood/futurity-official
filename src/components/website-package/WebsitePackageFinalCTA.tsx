
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const WebsitePackageFinalCTA = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      toast({
        title: "Thank you!",
        description: "We'll be in touch within 24 hours to discuss your project.",
      });
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        businessName: ''
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-futurity-blue via-futurity-blue-light to-futurity-blue text-white">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your Business Online?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Let's get started. Fill out the form below for a no-obligation quote and a free consultation. 
            We'd love to hear about your vision.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="fullName" className="text-white mb-2 block">
                Full Name *
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-white mb-2 block">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                placeholder="Enter your email address"
              />
            </div>
            
            <div>
              <Label htmlFor="businessName" className="text-white mb-2 block">
                Business Name *
              </Label>
              <Input
                id="businessName"
                name="businessName"
                type="text"
                required
                value={formData.businessName}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                placeholder="Enter your business name"
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-futurity-orange hover:bg-futurity-orange/90 text-white border-0 rounded-2xl px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-futurity-orange/25 transition-all duration-300"
            >
              {isSubmitting ? 'Submitting...' : 'Start My Website Project'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WebsitePackageFinalCTA;
