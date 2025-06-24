
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle, ArrowRight } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  businessName: z.string().min(2, 'Business name is required'),
});

interface CtaSectionProps {
  isSubmitted: boolean;
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

const CtaSection = ({ isSubmitted, onSubmit }: CtaSectionProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      businessName: '',
    },
  });

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-slate-900 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
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
  );
};

export default CtaSection;
