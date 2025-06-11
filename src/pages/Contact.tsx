import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { inquiriesService } from '@/services/inquiriesService';
import PageHero from '@/components/ui/page-hero';
import { Link } from 'react-router-dom';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await inquiriesService.createInquiry({
        ...formState,
        source: 'Contact Page'
      });
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll respond within 24 hours.",
      });
      
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        title="Get in Touch"
        subtitle="Have a project in mind? We'd love to hear from you. Reach out to discuss how we can help."
      />

      {/* Contact Section */}
      <section className="section">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-futurity-gray mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name <span className="text-futurity-orange">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="border-gray-300 focus:ring-futurity-orange focus:border-futurity-orange"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address <span className="text-futurity-orange">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="border-gray-300 focus:ring-futurity-orange focus:border-futurity-orange"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      className="border-gray-300 focus:ring-futurity-orange focus:border-futurity-orange"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject <span className="text-futurity-orange">*</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="border-gray-300 focus:ring-futurity-orange focus:border-futurity-orange"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message <span className="text-futurity-orange">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="border-gray-300 focus:ring-futurity-orange focus:border-futurity-orange"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting} 
                  className="bg-futurity-orange hover:bg-futurity-orange/90 text-white"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="animate-on-scroll stagger-delay-1">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-futurity-gray mb-8">
                Get in touch with us directly using the information below.
              </p>
              
              <div className="space-y-8 mb-10">
                <ContactInfoItem
                  icon={<Phone size={24} />}
                  title="Phone"
                  content="+1 (555) 123-4567"
                  href="tel:+15551234567"
                />
                <ContactInfoItem
                  icon={<Mail size={24} />}
                  title="Email"
                  content="hello@futurity.com"
                  href="mailto:hello@futurity.com"
                />
                <ContactInfoItem
                  icon={<MapPin size={24} />}
                  title="Office"
                  content="123 Innovation Drive, San Francisco, CA 94105"
                  href="https://maps.google.com"
                />
                <ContactInfoItem
                  icon={<Clock size={24} />}
                  title="Business Hours"
                  content="Monday - Friday: 9:00 AM - 5:00 PM"
                />
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <SocialButton name="Facebook" />
                  <SocialButton name="Twitter" />
                  <SocialButton name="LinkedIn" />
                  <SocialButton name="Instagram" />
                </div>
              </div>

              <Button asChild className="mt-8 bg-futurity-blue hover:bg-futurity-blue/90 text-white rounded-full px-8">
                <Link to="/about-futurity">About Futurity Digital Agency</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section bg-gray-50 pt-0">
        <div className="container-wide">
          <div className="bg-white p-6 rounded-lg shadow-sm -mt-16 mb-8 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Our Location</h3>
            <div className="aspect-[21/9] rounded-lg overflow-hidden">
              {/* Placeholder for Google Maps - Would integrate actual Google Maps in a real implementation */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-futurity-gray">Google Maps integration would be here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-futurity-blue text-white">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 text-white/90 animate-on-scroll stagger-delay-1">
            Let's collaborate to create exceptional digital experiences that drive results.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-futurity-orange hover:bg-futurity-orange/90 text-white animate-on-scroll stagger-delay-2"
          >
            <a href="#contact-form">Start Your Project</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}

const ContactInfoItem = ({ icon, title, content, href }: ContactInfoItemProps) => {
  return (
    <div className="flex items-start">
      <div className="h-12 w-12 rounded-full bg-futurity-orange/10 flex items-center justify-center text-futurity-orange mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        {href ? (
          <a href={href} className="text-futurity-gray hover:text-futurity-orange transition-colors">
            {content}
          </a>
        ) : (
          <p className="text-futurity-gray">{content}</p>
        )}
      </div>
    </div>
  );
};

const SocialButton = ({ name }: { name: string }) => {
  return (
    <a 
      href="#" 
      className="h-10 w-10 rounded-full bg-futurity-blue flex items-center justify-center text-white hover:bg-futurity-orange transition-colors"
      aria-label={name}
    >
      {/* Placeholder for actual social icons */}
      <span className="text-sm">{name.charAt(0)}</span>
    </a>
  );
};

export default Contact;
