
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ui/service-card';
import { 
  CheckCircle, 
  LayoutDashboard, 
  Palette, 
  Users, 
  Compass, 
  MessageSquare,
  Bot,
  FileText,
  Edit,
  Code,
  Globe,
  Image
} from 'lucide-react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Accordion } from '@/components/ui/accordion';

const Services = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* Hero Section with gradient background */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-futurity-blue via-futurity-blue-light to-futurity-blue relative overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-10"></div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-on-scroll bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Our Services</h1>
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1">
              Comprehensive digital solutions tailored to your business needs.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white hover:text-futurity-blue animate-on-scroll stagger-delay-2"
              onClick={() => scrollToSection('services-overview')}
            >
              Explore Our Services
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-futurity-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      </section>

      {/* Services Overview with card grid and hover effects */}
      <section id="services-overview" className="section py-20 relative">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-on-scroll">
              <SectionHeading 
                title="How We Help" 
                subtitle="We offer a comprehensive range of digital services to help your business thrive in the digital landscape."
              />
              <p className="mb-6 text-lg">
                Our team of experts works collaboratively to understand your business objectives and deliver tailored solutions that drive results. Whether you need a new website, mobile app, or a comprehensive digital strategy, we have the expertise to help you succeed.
              </p>
              <div className="space-y-4 mt-8">
                <BenefitItem text="Strategic approach aligned with your business goals" />
                <BenefitItem text="End-to-end solutions from concept to implementation" />
                <BenefitItem text="Ongoing support and continuous optimization" />
                <BenefitItem text="Transparent communication throughout the process" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-on-scroll stagger-delay-1">
              <ServiceCard
                icon={<Image size={28} />}
                title="Web Design"
                description="Beautiful, responsive websites that captivate your audience"
                onClick={() => scrollToSection('web-design')}
                className="hover:border-futurity-orange/50 hover:shadow-lg hover:shadow-futurity-orange/10"
              />
              <ServiceCard
                icon={<Globe size={28} />}
                title="Web Development"
                description="Custom web applications built with modern technologies"
                onClick={() => scrollToSection('web-development')}
                className="hover:border-futurity-orange/50 hover:shadow-lg hover:shadow-futurity-orange/10"
              />
              <ServiceCard
                icon={<LayoutDashboard size={28} />}
                title="UX/UI Design"
                description="User-centered design for intuitive digital experiences"
                onClick={() => scrollToSection('ux-ui-design')}
                className="hover:border-futurity-orange/50 hover:shadow-lg hover:shadow-futurity-orange/10"
              />
              <ServiceCard
                icon={<Compass size={28} />}
                title="Branding"
                description="Distinctive brand identities that make you stand out"
                onClick={() => scrollToSection('branding')}
                className="hover:border-futurity-orange/50 hover:shadow-lg hover:shadow-futurity-orange/10"
              />
              <ServiceCard
                icon={<FileText size={28} />}
                title="Content Writing"
                description="Compelling copy that engages and drives action"
                onClick={() => scrollToSection('content-writing')}
                className="hover:border-futurity-orange/50 hover:shadow-lg hover:shadow-futurity-orange/10"
              />
              <ServiceCard
                icon={<Bot size={28} />}
                title="AI Development"
                description="Intelligent solutions that enhance user experiences"
                onClick={() => scrollToSection('ai-development')}
                className="hover:border-futurity-orange/50 hover:shadow-lg hover:shadow-futurity-orange/10"
              />
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/4 -left-36 w-72 h-72 rounded-full bg-futurity-gray-light/30 blur-3xl -z-10"></div>
        <div className="absolute bottom-1/3 -right-36 w-72 h-72 rounded-full bg-futurity-orange/5 blur-3xl -z-10"></div>
      </section>

      {/* Web Design Service with offset image and gradient overlays */}
      <section id="web-design" className="section py-24 bg-gray-50 relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
                <span className="inline-block bg-futurity-orange/10 rounded-lg px-4 py-2 text-futurity-blue">Web Design</span>
              </h2>
              <p className="text-lg mb-6 text-futurity-gray">
                Our web design services focus on creating visually stunning websites that captivate your audience and drive conversions.
              </p>
              
              <div className="space-y-3 mb-8">
                <BenefitItem text="Custom website design" />
                <BenefitItem text="Responsive designs for all devices" />
                <BenefitItem text="User experience focused designs" />
                <BenefitItem text="Brand-aligned visual elements" />
                <BenefitItem text="SEO-friendly architecture" />
                <BenefitItem text="Conversion-optimized layouts" />
              </div>
              
              <Button asChild className="rounded-full px-8 shadow-lg shadow-futurity-orange/20 hover:shadow-futurity-orange/30 transition-all">
                <Link to="/services/web-design">Learn More</Link>
              </Button>
            </div>
            
            <div className="animate-on-scroll stagger-delay-1">
              <div className="relative group">
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-futurity-orange/10 rounded-lg z-0 group-hover:bg-futurity-orange/20 transition-all duration-300"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80"
                  alt="Web Design" 
                  className="rounded-lg shadow-xl relative z-10 w-full transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-futurity-blue/10 rounded-lg z-0 group-hover:bg-futurity-blue/20 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-100 to-transparent opacity-60 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-gray-200/50 to-transparent -z-10"></div>
      </section>

      {/* Web Development Section with modern card design */}
      <section id="web-development" className="section py-24 relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <div className="lg:order-2 animate-on-scroll space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
                <span className="inline-block bg-futurity-blue/10 rounded-lg px-4 py-2 text-futurity-blue">Web Development</span>
              </h2>
              <p className="text-lg mb-6 text-futurity-gray">
                We build responsive, scalable websites and web applications that deliver exceptional user experiences.
              </p>
              
              <div className="space-y-3 mb-8">
                <BenefitItem text="Custom website design and development" />
                <BenefitItem text="E-commerce solutions" />
                <BenefitItem text="Content management systems" />
                <BenefitItem text="Web application development" />
                <BenefitItem text="API development and integration" />
                <BenefitItem text="Performance optimization" />
              </div>
              
              <Button asChild className="rounded-full px-8 shadow-lg shadow-futurity-blue/20 hover:shadow-futurity-blue/30 transition-all">
                <Link to="/services/web-development">Learn More</Link>
              </Button>
            </div>
            
            <div className="lg:order-1 animate-on-scroll stagger-delay-1">
              <div className="relative group">
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-futurity-orange/10 rounded-lg z-0 group-hover:bg-futurity-orange/20 transition-all duration-300"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
                  alt="Web Development" 
                  className="rounded-lg shadow-xl relative z-10 w-full transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-futurity-blue/10 rounded-lg z-0 group-hover:bg-futurity-blue/20 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-gray-50 to-transparent opacity-60 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-gray-100/50 to-transparent -z-10"></div>
      </section>

      {/* UX/UI Design Section with floating accents */}
      <section id="ux-ui-design" className="section py-24 bg-gray-50 relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
                <span className="inline-block bg-futurity-orange/10 rounded-lg px-4 py-2 text-futurity-blue">UX/UI Design</span>
              </h2>
              <p className="text-lg mb-6 text-futurity-gray">
                Our user experience and interface design services focus on creating intuitive, engaging digital experiences that put your users first.
              </p>
              
              <div className="space-y-3 mb-8">
                <BenefitItem text="User research and personas" />
                <BenefitItem text="Information architecture" />
                <BenefitItem text="Wireframing and prototyping" />
                <BenefitItem text="Visual design" />
                <BenefitItem text="Usability testing" />
                <BenefitItem text="Design system creation" />
              </div>
              
              <Button asChild className="rounded-full px-8 shadow-lg shadow-futurity-orange/20 hover:shadow-futurity-orange/30 transition-all">
                <Link to="/services/ui-ux-design">Learn More</Link>
              </Button>
            </div>
            
            <div className="animate-on-scroll stagger-delay-1">
              <div className="relative group">
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-futurity-orange/10 rounded-lg z-0 group-hover:bg-futurity-orange/20 transition-all duration-300"></div>
                <img 
                  src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&q=80"
                  alt="UX/UI Design" 
                  className="rounded-lg shadow-xl relative z-10 w-full transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-futurity-blue/10 rounded-lg z-0 group-hover:bg-futurity-blue/20 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating UI elements as decoration */}
        <div className="absolute top-20 right-10 w-12 h-12 bg-futurity-orange/20 rounded-full animate-float opacity-50"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-futurity-blue/10 rounded-lg rotate-12 animate-float opacity-50"></div>
        <div className="absolute top-1/2 right-[10%] w-8 h-8 border-2 border-futurity-orange/30 rounded-lg rotate-45 animate-float opacity-70 delay-700"></div>
      </section>

      {/* Branding Section with visually engaging layout */}
      <section id="branding" className="section py-24 relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <div className="lg:order-2 animate-on-scroll space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
                <span className="inline-block bg-futurity-blue/10 rounded-lg px-4 py-2 text-futurity-blue">Branding</span>
              </h2>
              <p className="text-lg mb-6 text-futurity-gray">
                Our branding services help you create a distinct and memorable identity that resonates with your target audience and builds trust.
              </p>
              
              <div className="space-y-3 mb-8">
                <BenefitItem text="Brand strategy development" />
                <BenefitItem text="Visual identity design" />
                <BenefitItem text="Logo design" />
                <BenefitItem text="Brand messaging and positioning" />
                <BenefitItem text="Brand guidelines" />
                <BenefitItem text="Brand implementation" />
              </div>
              
              <Button asChild className="rounded-full px-8 shadow-lg shadow-futurity-blue/20 hover:shadow-futurity-blue/30 transition-all">
                <Link to="/services/branding-services">Learn More</Link>
              </Button>
            </div>
            
            <div className="lg:order-1 animate-on-scroll stagger-delay-1">
              <div className="relative group">
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-futurity-orange/10 rounded-lg z-0 group-hover:bg-futurity-orange/20 transition-all duration-300"></div>
                <img 
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80"
                  alt="Branding" 
                  className="rounded-lg shadow-xl relative z-10 w-full transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-futurity-blue/10 rounded-lg z-0 group-hover:bg-futurity-blue/20 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Brand-like decoration elements */}
        <div className="absolute top-1/3 left-4 w-40 h-40 rounded-full border-2 border-dashed border-futurity-orange/10 animate-spin-slow -z-10"></div>
        <div className="absolute bottom-1/3 right-4 w-60 h-60 rounded-full border-2 border-dashed border-futurity-blue/10 animate-spin-slow -z-10"></div>
      </section>

      {/* Content Writing Section with text-focused design */}
      <section id="content-writing" className="section py-24 bg-gray-50 relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
                <span className="inline-block bg-futurity-orange/10 rounded-lg px-4 py-2 text-futurity-blue">Content Writing</span>
              </h2>
              <p className="text-lg mb-6 text-futurity-gray">
                Our content writing services deliver compelling copy that engages your audience, communicates your value, and drives action.
              </p>
              
              <div className="space-y-3 mb-8">
                <BenefitItem text="Blog posts and articles" />
                <BenefitItem text="Website copy" />
                <BenefitItem text="Product descriptions" />
                <BenefitItem text="Email marketing content" />
                <BenefitItem text="Social media content" />
                <BenefitItem text="Whitepapers and ebooks" />
              </div>
              
              <Button asChild className="rounded-full px-8 shadow-lg shadow-futurity-orange/20 hover:shadow-futurity-orange/30 transition-all">
                <Link to="/services/content-writing">Learn More</Link>
              </Button>
            </div>
            
            <div className="animate-on-scroll stagger-delay-1">
              <div className="relative group">
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-futurity-orange/10 rounded-lg z-0 group-hover:bg-futurity-orange/20 transition-all duration-300"></div>
                <img 
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80"
                  alt="Content Writing" 
                  className="rounded-lg shadow-xl relative z-10 w-full transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-futurity-blue/10 rounded-lg z-0 group-hover:bg-futurity-blue/20 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Text-like decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-2 bg-futurity-orange/20 rounded-full"></div>
        <div className="absolute top-24 left-10 w-16 h-2 bg-futurity-orange/15 rounded-full"></div>
        <div className="absolute top-28 left-10 w-24 h-2 bg-futurity-orange/10 rounded-full"></div>
        
        <div className="absolute bottom-20 right-10 w-20 h-2 bg-futurity-blue/20 rounded-full"></div>
        <div className="absolute bottom-24 right-10 w-16 h-2 bg-futurity-blue/15 rounded-full"></div>
        <div className="absolute bottom-28 right-10 w-24 h-2 bg-futurity-blue/10 rounded-full"></div>
      </section>

      {/* AI Development Section with futuristic elements */}
      <section id="ai-development" className="section py-24 relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <div className="lg:order-2 animate-on-scroll space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
                <span className="inline-block bg-futurity-blue/10 rounded-lg px-4 py-2 text-futurity-blue">AI Development</span>
              </h2>
              <p className="text-lg mb-6 text-futurity-gray">
                Our AI development services leverage the latest technologies to create intelligent solutions that automate processes and enhance user experiences.
              </p>
              
              <div className="space-y-3 mb-8">
                <BenefitItem text="Chatbots and virtual assistants" />
                <BenefitItem text="Machine learning models" />
                <BenefitItem text="Predictive analytics" />
                <BenefitItem text="Recommendation systems" />
                <BenefitItem text="Computer vision solutions" />
                <BenefitItem text="Natural language processing" />
              </div>
              
              <Button asChild className="rounded-full px-8 shadow-lg shadow-futurity-blue/20 hover:shadow-futurity-blue/30 transition-all">
                <Link to="/services/ai-development">Learn More</Link>
              </Button>
            </div>
            
            <div className="lg:order-1 animate-on-scroll stagger-delay-1">
              <div className="relative group">
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-futurity-orange/10 rounded-lg z-0 group-hover:bg-futurity-orange/20 transition-all duration-300"></div>
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
                  alt="AI Development" 
                  className="rounded-lg shadow-xl relative z-10 w-full transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-futurity-blue/10 rounded-lg z-0 group-hover:bg-futurity-blue/20 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* AI-themed decorative elements */}
        <div className="absolute top-1/4 right-[10%] w-40 h-40 bg-gradient-to-br from-futurity-blue/5 to-futurity-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-[5%] w-60 h-60 bg-gradient-to-tr from-futurity-blue/5 to-futurity-orange/5 rounded-full blur-3xl"></div>
        
        {/* Circuit-like pattern */}
        <div className="absolute top-10 right-10 h-20 w-1 bg-futurity-orange/10"></div>
        <div className="absolute top-10 right-10 h-1 w-20 bg-futurity-orange/10"></div>
        <div className="absolute top-30 right-30 h-1 w-20 bg-futurity-orange/10"></div>
      </section>

      {/* CTA Section with modern gradient background */}
      <section className="py-24 bg-gradient-to-br from-futurity-blue via-futurity-blue-light to-futurity-blue relative overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-futurity-blue-lighter/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-futurity-orange/10 to-transparent"></div>
        
        <div className="container-tight text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-on-scroll text-white">Ready to Start Your Project?</h2>
          <p className="text-xl mb-10 text-white/90 animate-on-scroll stagger-delay-1 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business objectives and create exceptional digital experiences.
          </p>
          <div className="animate-on-scroll stagger-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-futurity-blue rounded-full px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" className="bg-futurity-orange hover:bg-futurity-orange/90 text-white rounded-full px-8">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Helper components
const BenefitItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start group">
      <CheckCircle className="text-futurity-orange mr-3 mt-1 flex-shrink-0 group-hover:text-futurity-blue transition-colors duration-300" size={20} />
      <p className="group-hover:translate-x-0.5 transition-transform duration-300">{text}</p>
    </div>
  );
};

export default Services;
