
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useModal } from '@/contexts/ModalContext';
import ContactForm from '@/components/ContactForm';
import { 
  Globe, 
  Smartphone, 
  Shield, 
  Mail, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Eye,
  Users,
  TrendingDown
} from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  businessName: z.string().min(2, 'Business name is required'),
});

const WebsiteDesignPackage = () => {
  const { openModal, closeModal } = useModal();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      businessName: '',
    },
  });

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
      {/* Hero Section */}
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
            onClick={handleCtaClick}
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg md:text-xl px-8 py-6 md:px-12 md:py-8 rounded-xl font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Get My Free Quote Now
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-slate-900">
            Is Your Business <span className="text-orange-500">Invisible Online</span>?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Eye className="w-8 h-8 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Losing Credibility Daily</h3>
                  <p className="text-gray-600 text-lg">Customers expect to find you online. Without a professional website, you look outdated and untrustworthy.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Users className="w-8 h-8 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Customers Going to Competitors</h3>
                  <p className="text-gray-600 text-lg">While you're invisible online, your competitors are capturing your potential customers 24/7.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <TrendingDown className="w-8 h-8 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Complicated & Expensive Solutions</h3>
                  <p className="text-gray-600 text-lg">DIY builders are confusing, and professional quotes break the bank. You need simple, fast, and affordable.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Don't Let This Be You</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Every day without a professional website, you're losing credibility and customers. 
                  We make getting online simple, fast, and affordable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
              Your Complete Website Solution for Just <span className="text-orange-500">£250</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to get your business online professionally, quickly, and affordably.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <Globe className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-slate-900">Bespoke 1-3 Page Website Design</h3>
              <p className="text-gray-600">Custom-designed to represent your unique business perfectly.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <Smartphone className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-slate-900">Fully Mobile-Responsive</h3>
              <p className="text-gray-600">Looks perfect on every device - phone, tablet, and desktop.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <Globe className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-slate-900">Free Domain Name</h3>
              <p className="text-gray-600">Your choice of .co.uk or .com domain included at no extra cost.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-slate-900">FREE Hosting & SSL</h3>
              <p className="text-gray-600">Secure hosting for 1 year and SSL certificate included.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <Mail className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-slate-900">Professional Email</h3>
              <p className="text-gray-600">1 professional email address matching your domain name.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <CheckCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-slate-900">Contact Form & Social Links</h3>
              <p className="text-gray-600">Easy ways for customers to get in touch and find you online.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-slate-900">Fast Delivery</h3>
              <p className="text-gray-600">Your website will be live within days, not weeks or months.</p>
            </div>
            
            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-2xl font-bold text-orange-500 mb-2">£250</div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">Complete Package</h3>
              <p className="text-gray-600">No hidden fees. No monthly charges. Just one simple price.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-slate-900">
            Our Work & Design Capabilities
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            See the quality and attention to detail we bring to every project
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🍕</div>
                  <div className="text-lg font-semibold">Modern Restaurant Website</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Concept: Leamington Pizza Co.</h3>
                <p className="text-gray-600">A clean, mobile-first design focused on menus and online ordering.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">💎</div>
                  <div className="text-lg font-semibold">Elegant Jewelry Store</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Concept: Warwick Jewels</h3>
                <p className="text-gray-600">A sophisticated design to showcase high-value products beautifully.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🐕</div>
                  <div className="text-lg font-semibold">Pet Care Service</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Concept: Kenilworth Paws</h3>
                <p className="text-gray-600">A fun, approachable design with easy appointment booking.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg">
              <strong>As a new agency, we're building our portfolio.</strong> These concepts showcase the high-quality, 
              bespoke work we deliver. Be one of our first foundational clients and help us grow together!
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-slate-900">
            From Idea to Launch in <span className="text-orange-500">3 Simple Steps</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Discovery</h3>
                <p className="text-gray-600 text-lg">
                  We learn about your business, your goals, and what makes you unique. This ensures your website perfectly represents your brand.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Creation</h3>
                <p className="text-gray-600 text-lg">
                  We design and build your bespoke website, ensuring it's mobile-responsive, fast-loading, and conversion-focused.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Launch</h3>
                <p className="text-gray-600 text-lg">
                  We get you online quickly with all the technical setup handled, so you can start growing your business immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-slate-900 text-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Launch Your Business <span className="text-orange-500">Online</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Let's get started. Fill out the form below for a no-obligation quote and a free consultation. 
              We'd love to hear about your vision.
            </p>
            
            {!isSubmitted ? (
              <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-900 text-lg font-medium">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your full name" 
                              {...field} 
                              className="h-12 text-lg border-gray-300 focus:border-orange-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-900 text-lg font-medium">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your@email.com" 
                              type="email" 
                              {...field} 
                              className="h-12 text-lg border-gray-300 focus:border-orange-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-900 text-lg font-medium">Business Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your business name" 
                              {...field} 
                              className="h-12 text-lg border-gray-300 focus:border-orange-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xl py-6 rounded-xl font-semibold shadow-xl hover:shadow-orange-500/25 transition-all duration-300"
                    >
                      Start My Website Project
                      <ArrowRight className="ml-2 w-6 h-6" />
                    </Button>
                  </form>
                </Form>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 max-w-2xl mx-auto">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h3>
                <p className="text-green-700 text-lg">
                  We've received your information and will be in touch within 24 hours with your free quote and consultation.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDesignPackage;
