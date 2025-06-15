import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="section bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-futurity-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-futurity-orange/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container-wide">
        {/* 1st row: Title and description */}
        <div className="mb-10 md:mb-16 animate-on-scroll stagger-delay-1 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-futurity-blue/10 rounded-full px-4 py-2 text-futurity-blue font-medium text-sm mb-4 justify-center">
            <div className="w-2 h-2 bg-futurity-orange rounded-full"></div>
            About Futurity
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-futurity-blue mb-4">
            Passionate Digital Experts Driving Growth
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Launched in 2024, Futurity was born from a collective passion for empowering businesses to navigate and succeed in the evolving digital landscape.
          </p>
        </div>
        {/* 2nd row: Two columns (image + approach/team) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-10 md:mb-16">
          {/* Image column */}
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 border-2 border-futurity-orange/20 rounded-3xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-futurity-blue/10 rounded-3xl -z-10"></div>
              <img 
                src="/Passionate Digital Experts Driving Growth.webp"
                alt="Futurity Team" 
                className="rounded-3xl shadow-2xl relative hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          {/* Text column: Collaborative Approach + Expert Team */}
          <div className="space-y-8 animate-on-scroll stagger-delay-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-futurity-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-futurity-orange" />
              </div>
              <div>
                <h3 className="font-semibold text-futurity-blue mb-2">Collaborative Approach</h3>
                <p className="text-gray-600">We believe in working closely with you to transform challenges into opportunities through dedicated collaboration.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-futurity-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-futurity-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-futurity-blue mb-2">Expert Team</h3>
                <p className="text-gray-600">Our team brings together specialists across UX/UI design, development, marketing, and cutting-edge AI solutions.</p>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd row: Button */}
        <div className="flex justify-center animate-on-scroll stagger-delay-2">
          <Button asChild className="bg-futurity-blue hover:bg-futurity-blue/90 text-white rounded-2xl px-8 py-6 font-semibold">
            <Link to="/about-futurity" className="flex items-center gap-2">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
