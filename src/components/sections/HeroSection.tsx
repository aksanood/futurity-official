import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-futurity-blue via-futurity-blue-light to-futurity-blue py-16 md:py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-futurity-orange/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-futurity-orange/5 rounded-full blur-2xl animate-pulse-soft" style={{
          animationDelay: '2s'
        }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <Star className="w-4 h-4 text-futurity-orange" />
                <span>Trusted by 50+ businesses</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight animate-on-scroll md:text-4xl">
                Future-Proof Your Business. We Build the{' '}
                <span className="bg-gradient-to-r from-futurity-orange to-yellow-400 bg-clip-text text-transparent">
                  Digital Solutions
                </span>{' '}
                of Tomorrow.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl animate-on-scroll stagger-delay-1">
                From intelligent AI applications to bespoke, high-performance websites, we deliver the innovation you need to thrive.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll stagger-delay-2">
              <Button asChild size="lg" className="bg-futurity-orange hover:bg-futurity-orange/90 text-white border-0 rounded-2xl px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-futurity-orange/25 transition-all duration-300">
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="border-2 border-futurity-orange text-futurity-orange hover:bg-futurity-orange hover:text-white rounded-2xl px-8 py-6 text-lg font-semibold transition-all duration-300">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-on-scroll stagger-delay-3">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-futurity-orange mb-2">150%</div>
                <div className="text-white/80 text-sm">Average Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-futurity-orange mb-2">100%</div>
                <div className="text-white/80 text-sm">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-futurity-orange mb-2">50+</div>
                <div className="text-white/80 text-sm">Projects</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative lg:block hidden">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-futurity-orange/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
              
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-2 shadow-2xl">
                <img src="/Hero%20Section%20Image.png" alt="Team collaboration" className="rounded-2xl w-full h-auto animate-float" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-pulse-soft">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-futurity-orange/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float" style={{
                animationDelay: '1s'
              }}>
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
