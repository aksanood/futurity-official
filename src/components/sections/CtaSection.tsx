import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="section bg-gradient-to-r from-futurity-blue via-futurity-blue-light to-futurity-blue text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-futurity-orange/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="container-tight text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium animate-on-scroll">
            <Star className="w-4 h-4 text-futurity-orange" />
            <span>Ready to get started?</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold animate-on-scroll stagger-delay-1">
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-futurity-orange to-yellow-400 bg-clip-text text-transparent">
              Digital Presence?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-on-scroll stagger-delay-2">
            Let's collaborate to create digital experiences that captivate your audience and drive measurable business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll stagger-delay-3">
            <Button asChild size="lg" className="bg-futurity-orange hover:bg-futurity-orange/90 text-white border-0 rounded-2xl px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-futurity-orange/25 transition-all duration-300">
              <Link to="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
