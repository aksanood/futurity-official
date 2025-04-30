
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ui/service-card';
import { 
  CheckCircle, 
  LayoutDashboard, 
  PenTool, 
  Palette, 
  Users, 
  Compass, 
  MessageSquare,
  TrendingUp,
  Mail,
  Megaphone,
  BarChart2,
  Book,
  FileText,
  Edit,
  Bot,
  Image,
  Cpu,
  Globe,
  Smartphone,
  Code
} from 'lucide-react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Accordion } from '@/components/ui/accordion';

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-futurity-blue text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Our Services</h1>
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1">
              Comprehensive digital solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <SectionHeading 
                title="How We Help" 
                subtitle="We offer a comprehensive range of digital services to help your business thrive in the digital landscape."
              />
              <p className="mb-6">
                Our team of experts works collaboratively to understand your business objectives and deliver tailored solutions that drive results. Whether you need a new website, mobile app, or a comprehensive digital strategy, we have the expertise to help you succeed.
              </p>
              <div className="space-y-4 mt-8">
                <BenefitItem text="Strategic approach aligned with your business goals" />
                <BenefitItem text="End-to-end solutions from concept to implementation" />
                <BenefitItem text="Ongoing support and continuous optimization" />
                <BenefitItem text="Transparent communication throughout the process" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-on-scroll stagger-delay-1">
              <ServiceIconCard
                icon={<LayoutDashboard size={28} />}
                title="UX/UI Design"
              />
              <ServiceIconCard
                icon={<Compass size={28} />}
                title="Branding"
              />
              <ServiceIconCard
                icon={<TrendingUp size={28} />}
                title="Digital Marketing"
              />
              <ServiceIconCard
                icon={<FileText size={28} />}
                title="Content Writing"
              />
              <ServiceIconCard
                icon={<Bot size={28} />}
                title="AI Development"
              />
              <ServiceIconCard
                title="And More"
                titleOnly
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Categories */}
      <section className="section">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading 
              title="Our Service Categories" 
              subtitle="Explore our comprehensive range of digital services designed to elevate your business."
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<LayoutDashboard />}
              title="UX/UI Design"
              description="User-centered design that balances aesthetics with functionality to create intuitive digital experiences."
              href="/services/ui-ux-design"
            />
            
            <ServiceCard 
              icon={<Compass />}
              title="Branding"
              description="Develop a unique and memorable brand identity that resonates with your target audience and sets you apart."
              href="/services/branding-services"
            />
            
            <ServiceCard 
              icon={<TrendingUp />}
              title="Digital Marketing"
              description="Strategic marketing campaigns that connect your brand with your target audience and drive conversions."
              href="/services/digital-marketing"
            />
            
            <ServiceCard 
              icon={<FileText />}
              title="Content Writing"
              description="Compelling content that engages your audience, establishes authority, and drives action."
              href="/services/content-writing"
            />
            
            <ServiceCard 
              icon={<Bot />}
              title="AI Development"
              description="Custom AI solutions that automate processes, generate insights, and create personalized experiences."
              href="/services/ai-development"
            />
            
            <ServiceCard 
              icon={<Globe />}
              title="Web Development"
              description="We build responsive, scalable websites and web applications that deliver exceptional user experiences."
              href="/services/web-development"
            />
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section id="web-development" className="section bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Web Development</h2>
              <p className="text-lg mb-6 text-futurity-gray">
                We build responsive, scalable websites and web applications that deliver exceptional user experiences.
              </p>
              
              <div className="space-y-3 mt-6 mb-8">
                <BenefitItem text="Custom website design and development" />
                <BenefitItem text="E-commerce solutions" />
                <BenefitItem text="Content management systems" />
                <BenefitItem text="Web application development" />
                <BenefitItem text="API development and integration" />
                <BenefitItem text="Performance optimization" />
              </div>
              
              <Button asChild>
                <Link to="/services/web-development">Learn More</Link>
              </Button>
            </div>
            
            <div className="animate-on-scroll stagger-delay-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
                  alt="Web Development" 
                  className="rounded-lg shadow-lg relative z-10 w-full"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UX/UI Design Section */}
      <section id="ux-ui-design" className="section">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:order-2 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">UX/UI Design</h2>
              <p className="text-lg mb-6 text-futurity-gray">
                Our user experience and interface design services focus on creating intuitive, engaging digital experiences that put your users first.
              </p>
              
              <div className="space-y-3 mt-6 mb-8">
                <BenefitItem text="User research and personas" />
                <BenefitItem text="Information architecture" />
                <BenefitItem text="Wireframing and prototyping" />
                <BenefitItem text="Visual design" />
                <BenefitItem text="Usability testing" />
                <BenefitItem text="Design system creation" />
              </div>
              
              <Button asChild>
                <Link to="/services/ui-ux-design">Learn More</Link>
              </Button>
            </div>
            
            <div className="lg:order-1 animate-on-scroll stagger-delay-1">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&q=80"
                  alt="UX/UI Design" 
                  className="rounded-lg shadow-lg relative z-10 w-full"
                />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section id="digital-marketing" className="section bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Digital Marketing</h2>
              <p className="text-lg mb-6 text-futurity-gray">
                Our digital marketing strategies help you reach your target audience, generate leads, and grow your business in the online space.
              </p>
              
              <div className="space-y-3 mt-6 mb-8">
                <BenefitItem text="Search engine optimization (SEO)" />
                <BenefitItem text="Social media marketing" />
                <BenefitItem text="Pay-per-click advertising" />
                <BenefitItem text="Email marketing campaigns" />
                <BenefitItem text="Content marketing strategy" />
                <BenefitItem text="Analytics and reporting" />
              </div>
              
              <Button asChild>
                <Link to="/services/digital-marketing">Learn More</Link>
              </Button>
            </div>
            
            <div className="animate-on-scroll stagger-delay-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                  alt="Digital Marketing" 
                  className="rounded-lg shadow-lg relative z-10 w-full"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branding Section */}
      <section id="branding" className="section">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:order-2 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Branding</h2>
              <p className="text-lg mb-6 text-futurity-gray">
                Our branding services help you create a distinct and memorable identity that resonates with your target audience and builds trust.
              </p>
              
              <div className="space-y-3 mt-6 mb-8">
                <BenefitItem text="Brand strategy development" />
                <BenefitItem text="Visual identity design" />
                <BenefitItem text="Logo design" />
                <BenefitItem text="Brand messaging and positioning" />
                <BenefitItem text="Brand guidelines" />
                <BenefitItem text="Brand implementation" />
              </div>
              
              <Button asChild>
                <Link to="/services/branding-services">Learn More</Link>
              </Button>
            </div>
            
            <div className="lg:order-1 animate-on-scroll stagger-delay-1">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80"
                  alt="Branding" 
                  className="rounded-lg shadow-lg relative z-10 w-full"
                />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Writing Section */}
      <section id="content-writing" className="section bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Content Writing</h2>
              <p className="text-lg mb-6 text-futurity-gray">
                Our content writing services deliver compelling copy that engages your audience, communicates your value, and drives action.
              </p>
              
              <div className="space-y-3 mt-6 mb-8">
                <BenefitItem text="Blog posts and articles" />
                <BenefitItem text="Website copy" />
                <BenefitItem text="Product descriptions" />
                <BenefitItem text="Email marketing content" />
                <BenefitItem text="Social media content" />
                <BenefitItem text="Whitepapers and ebooks" />
              </div>
              
              <Button asChild>
                <Link to="/services/content-writing">Learn More</Link>
              </Button>
            </div>
            
            <div className="animate-on-scroll stagger-delay-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80"
                  alt="Content Writing" 
                  className="rounded-lg shadow-lg relative z-10 w-full"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Development Section */}
      <section id="ai-development" className="section">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:order-2 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">AI Development</h2>
              <p className="text-lg mb-6 text-futurity-gray">
                Our AI development services leverage the latest technologies to create intelligent solutions that automate processes and enhance user experiences.
              </p>
              
              <div className="space-y-3 mt-6 mb-8">
                <BenefitItem text="Chatbots and virtual assistants" />
                <BenefitItem text="Machine learning models" />
                <BenefitItem text="Predictive analytics" />
                <BenefitItem text="Recommendation systems" />
                <BenefitItem text="Computer vision solutions" />
                <BenefitItem text="Natural language processing" />
              </div>
              
              <Button asChild>
                <Link to="/services/ai-development">Learn More</Link>
              </Button>
            </div>
            
            <div className="lg:order-1 animate-on-scroll stagger-delay-1">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
                  alt="AI Development" 
                  className="rounded-lg shadow-lg relative z-10 w-full"
                />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Design Service */}
      <section id="web-design" className="section bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Web Design</h2>
              <p className="text-lg mb-6 text-futurity-gray">
                Our web design services focus on creating visually stunning websites that captivate your audience and drive conversions.
              </p>
              
              <div className="space-y-3 mt-6 mb-8">
                <BenefitItem text="Custom website design" />
                <BenefitItem text="Responsive designs for all devices" />
                <BenefitItem text="User experience focused designs" />
                <BenefitItem text="Brand-aligned visual elements" />
                <BenefitItem text="SEO-friendly architecture" />
                <BenefitItem text="Conversion-optimized layouts" />
              </div>
              
              <Button asChild>
                <Link to="/services/web-design">Learn More</Link>
              </Button>
            </div>
            
            <div className="animate-on-scroll stagger-delay-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80"
                  alt="Web Design" 
                  className="rounded-lg shadow-lg relative z-10 w-full"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-futurity-blue text-white">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-white/90 animate-on-scroll stagger-delay-1">
            Let's discuss how our services can help you achieve your business objectives.
          </p>
          <div className="animate-on-scroll stagger-delay-2">
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-futurity-blue">
              <Link to="/contact">Contact Us</Link>
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
    <div className="flex items-start">
      <CheckCircle className="text-futurity-orange mr-3 mt-1 flex-shrink-0" size={20} />
      <p>{text}</p>
    </div>
  );
};

const ServiceIconCard = ({ 
  icon, 
  title, 
  titleOnly = false 
}: { 
  icon?: React.ReactNode;
  title: string;
  titleOnly?: boolean;
}) => {
  return (
    <div className={`rounded-lg p-4 flex flex-col items-center justify-center text-center ${titleOnly ? 'bg-futurity-orange/10' : 'bg-white shadow-sm border border-gray-100'}`}>
      {!titleOnly && icon && (
        <div className="h-16 w-16 rounded-full bg-futurity-orange/10 flex items-center justify-center mb-4 text-futurity-orange">
          {icon}
        </div>
      )}
      <h3 className={`font-semibold ${titleOnly ? 'text-futurity-orange' : ''}`}>{title}</h3>
    </div>
  );
};

export default Services;
