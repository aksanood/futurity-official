import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Image, Globe, LayoutDashboard, Compass, FileText } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#FBFCFC' }}>
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-futurity-orange/10 rounded-full px-4 py-2 text-futurity-orange font-medium text-sm mb-4">
            <div className="w-2 h-2 bg-futurity-orange rounded-full"></div>
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-futurity-blue">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a full spectrum of digital services designed to elevate your brand and drive measurable business growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group animate-on-scroll hover-lift h-full flex flex-col">
            <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-green-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Image className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-futurity-blue">Web Design</h3>
                <p className="text-gray-600 mb-6">Beautiful, responsive websites that captivate your audience and drive engagement.</p>
                <Link to="/services/web-design" className="inline-flex items-center gap-2 text-futurity-orange font-semibold hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="group animate-on-scroll stagger-delay-1 hover-lift h-full flex flex-col">
            <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-futurity-blue">Web Development</h3>
                <p className="text-gray-600 mb-6">Custom web applications built with modern technologies and best practices.</p>
                <Link to="/services/web-development" className="inline-flex items-center gap-2 text-futurity-orange font-semibold hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="group animate-on-scroll stagger-delay-2 hover-lift h-full flex flex-col">
            <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-purple-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <LayoutDashboard className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-futurity-blue">UX/UI Design</h3>
                <p className="text-gray-600 mb-6">User-centered design for intuitive and engaging digital experiences.</p>
                <Link to="/services/ui-ux-design" className="inline-flex items-center gap-2 text-futurity-orange font-semibold hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="group animate-on-scroll hover-lift h-full flex flex-col">
            <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Compass className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-futurity-blue">Branding</h3>
                <p className="text-gray-600 mb-6">Distinctive brand identities that make your business stand out from the crowd.</p>
                <Link to="/services/branding-services" className="inline-flex items-center gap-2 text-futurity-orange font-semibold hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="group animate-on-scroll stagger-delay-1 hover-lift h-full flex flex-col">
            <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/10 to-red-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-futurity-blue">Content Writing</h3>
                <p className="text-gray-600 mb-6">Compelling copy that engages your audience and drives meaningful action.</p>
                <Link to="/services/content-writing" className="inline-flex items-center gap-2 text-futurity-orange font-semibold hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="group animate-on-scroll stagger-delay-2">
            <div className="relative bg-gradient-to-br from-futurity-blue/5 to-futurity-orange/5 rounded-3xl p-8 border-2 border-dashed border-futurity-blue/20 hover:border-futurity-orange/30 transition-all duration-500 h-full flex flex-col items-center justify-center text-center hover-lift">
              <div className="w-16 h-16 bg-futurity-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-8 h-8 text-futurity-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-futurity-blue">Custom Solutions</h3>
              <p className="text-gray-600 mb-6">Need something unique? Let's discuss how we can help achieve your specific goals.</p>
              <Button asChild className="bg-futurity-blue text-white hover:bg-futurity-blue/90 rounded-2xl px-6">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
