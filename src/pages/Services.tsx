
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Layout as LayoutIcon, Smartphone, Palette, BarChart, FileSearch } from 'lucide-react';

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
                icon={<LayoutIcon size={28} />}
                title="Web Development"
              />
              <ServiceIconCard
                icon={<Smartphone size={28} />}
                title="Mobile Apps"
              />
              <ServiceIconCard
                icon={<Palette size={28} />}
                title="UI/UX Design"
              />
              <ServiceIconCard
                icon={<BarChart size={28} />}
                title="Digital Marketing"
              />
              <ServiceIconCard
                icon={<FileSearch size={28} />}
                title="SEO & Content"
              />
              <ServiceIconCard
                title="And More"
                titleOnly
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service #1: Web Development */}
      <ServiceSection
        id="web-development"
        title="Web Development"
        description="We build responsive, scalable websites and web applications that deliver exceptional user experiences."
        image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
        features={[
          "Custom website design and development",
          "E-commerce solutions",
          "Content management systems",
          "Web application development",
          "API development and integration",
          "Performance optimization"
        ]}
        isReversed={false}
      />

      {/* Service #2: Mobile Apps */}
      <ServiceSection
        id="mobile-apps"
        title="Mobile App Development"
        description="Native and cross-platform mobile applications that engage users and drive business results."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
        features={[
          "iOS and Android app development",
          "Cross-platform solutions",
          "App redesign and modernization",
          "App testing and quality assurance",
          "App store optimization",
          "Ongoing maintenance and support"
        ]}
        isReversed={true}
      />

      {/* Service #3: UI/UX Design */}
      <ServiceSection
        id="ui-ux-design"
        title="UI/UX Design"
        description="User-centered design that balances aesthetics with functionality to create intuitive digital experiences."
        image="https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&q=80"
        features={[
          "User research and personas",
          "Information architecture",
          "Wireframing and prototyping",
          "Visual design and UI systems",
          "Usability testing",
          "Design system creation"
        ]}
        isReversed={false}
      />

      {/* Service #4: Digital Marketing */}
      <ServiceSection
        id="digital-marketing"
        title="Digital Marketing"
        description="Strategic marketing campaigns that connect your brand with your target audience and drive conversions."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
        features={[
          "Search engine marketing (SEM)",
          "Social media marketing",
          "Email marketing",
          "Content marketing",
          "Conversion rate optimization",
          "Analytics and reporting"
        ]}
        isReversed={true}
      />

      {/* Service #5: SEO & Content Strategy */}
      <ServiceSection
        id="seo"
        title="SEO & Content Strategy"
        description="Data-driven SEO and content strategies that improve visibility and engage your audience."
        image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
        features={[
          "Technical SEO audits",
          "Keyword research and strategy",
          "On-page optimization",
          "Content strategy development",
          "Content creation and optimization",
          "Link building"
        ]}
        isReversed={false}
      />

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

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  isReversed?: boolean;
}

const ServiceSection = ({ id, title, description, image, features, isReversed = false }: ServiceSectionProps) => {
  return (
    <section id={id} className={`section ${isReversed ? '' : 'bg-gray-50'}`}>
      <div className="container-wide">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`${isReversed ? 'lg:order-2' : ''} animate-on-scroll`}>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-lg mb-6 text-futurity-gray">{description}</p>
            
            <div className="space-y-3 mt-6 mb-8">
              {features.map((feature, index) => (
                <BenefitItem key={index} text={feature} />
              ))}
            </div>
            
            <Button asChild>
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
          </div>
          
          <div className={`${isReversed ? 'lg:order-1' : ''} animate-on-scroll stagger-delay-1`}>
            <div className="relative">
              {!isReversed && (
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
              )}
              {isReversed && (
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
              )}
              <img 
                src={image}
                alt={title} 
                className="rounded-lg shadow-lg relative z-10 w-full"
              />
              {!isReversed && (
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0"></div>
              )}
              {isReversed && (
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
