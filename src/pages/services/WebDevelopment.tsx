import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  LayoutDashboard, 
  Code, 
  Globe,
  Smartphone,
  Database,
  Zap,
  Lock
} from 'lucide-react';
import PriceCard from '@/components/ui/price-card';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const WebDevelopmentPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-futurity-blue text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Web Development</h1>
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1">
              Responsive, scalable websites and web applications that deliver exceptional user experiences
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <SectionHeading 
                title="Custom Web Development" 
                subtitle="We build high-performance websites and applications that help you achieve your business goals."
              />
              <p className="mb-6">
                Our web development team creates custom digital solutions that combine cutting-edge technology with intuitive user experiences. Whether you need a company website, e-commerce platform, or complex web application, we deliver robust, scalable solutions tailored to your specific requirements.
              </p>
              <p className="mb-8">
                We focus on creating websites that not only look great but also perform exceptionally well in terms of speed, security, and search engine optimization.
              </p>
              
              <div className="space-y-4 mt-8">
                <BenefitItem text="Custom solutions tailored to your specific business needs" />
                <BenefitItem text="Responsive designs that work seamlessly on all devices" />
                <BenefitItem text="Scalable architecture that grows with your business" />
                <BenefitItem text="Secure and optimized for performance and SEO" />
              </div>
            </div>
            
            <div className="animate-on-scroll stagger-delay-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
                  alt="Web Development Services" 
                  className="rounded-lg shadow-lg relative z-10 w-full"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CMS & E-Commerce Section */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading
              title="Advanced Solutions"
              subtitle="Content Management Systems and E-commerce platforms for more complex needs"
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PriceCard 
              title="CMS" 
              price="POA" 
              features={[
                "Unlimited Pages",
                "Domain Name & Hosting",
                "Unlimited Email Addresses",
                "Unlimited Images",
                "WordPress Based",
                "Full Editing Capabilities",
                "-"
              ]}
              variant="primary"
            />
            
            <PriceCard 
              title="E-commerce" 
              price="POA" 
              features={[
                "Unlimited Pages",
                "Domain Name & Hosting",
                "Unlimited Email Addresses",
                "Unlimited Images",
                "WordPress Based",
                "Full Editing Capabilities",
                "Online Store"
              ]}
              variant="secondary"
            />
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading
              title="Our Web Development Services"
              subtitle="Comprehensive solutions for your digital presence"
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceFeatureCard
              icon={<LayoutDashboard size={24} />}
              title="Custom Website Development"
              description="Tailored websites designed to showcase your brand and achieve your business objectives"
            />
            
            <ServiceFeatureCard
              icon={<Smartphone size={24} />}
              title="Responsive Web Design"
              description="Sites that adapt perfectly to all devices and screen sizes for optimal user experience"
            />
            
            <ServiceFeatureCard
              icon={<Globe size={24} />}
              title="E-commerce Development"
              description="Powerful online stores with secure payment processing and inventory management"
            />
            
            <ServiceFeatureCard
              icon={<Code size={24} />}
              title="Web Application Development"
              description="Custom web applications that solve complex business challenges"
            />
            
            <ServiceFeatureCard
              icon={<Database size={24} />}
              title="Content Management Systems"
              description="User-friendly CMS solutions that make content updates easy"
            />
            
            <ServiceFeatureCard
              icon={<Zap size={24} />}
              title="Performance Optimization"
              description="Speed and performance improvements for existing websites"
            />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading 
            title="Technologies We Use" 
            subtitle="Modern web technologies for robust, scalable solutions"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            <TechnologyCard name="React.js" />
            <TechnologyCard name="Node.js" />
            <TechnologyCard name="Next.js" />
            <TechnologyCard name="Vue.js" />
            <TechnologyCard name="Angular" />
            <TechnologyCard name="TypeScript" />
            <TechnologyCard name="PHP" />
            <TechnologyCard name="Laravel" />
            <TechnologyCard name="WordPress" />
            <TechnologyCard name="Shopify" />
            <TechnologyCard name="MongoDB" />
            <TechnologyCard name="MySQL" />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <SectionHeading 
            title="Our Development Process" 
            subtitle="A systematic approach to delivering successful web projects"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
            <ProcessCard 
              number="01"
              title="Discovery"
              description="Define requirements, goals, and project scope"
            />
            
            <ProcessCard 
              number="02"
              title="Planning"
              description="Create technical specifications and project roadmap"
            />
            
            <ProcessCard 
              number="03"
              title="Design & Development"
              description="Build the solution with regular progress updates"
            />
            
            <ProcessCard 
              number="04"
              title="Testing"
              description="Ensure quality through comprehensive testing"
            />
            
            <ProcessCard 
              number="05"
              title="Launch & Support"
              description="Deploy and provide ongoing maintenance"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading 
              title="Web Development Portfolio" 
              subtitle="Examples of our recent web development projects"
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioItem 
              image="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80"
              title="E-commerce Platform"
              description="Custom online store with advanced product filtering and recommendation engine"
            />
            
            <PortfolioItem 
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              title="Healthcare Portal"
              description="Secure patient portal with appointment scheduling and record access"
            />
            
            <PortfolioItem 
              image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
              title="SaaS Dashboard"
              description="Intuitive analytics dashboard for a software-as-a-service platform"
            />
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Security & Compliance" 
                subtitle="We prioritize the security and privacy of your website and user data"
              />
              <p className="mb-6">
                In today's digital landscape, security is non-negotiable. Our development team implements industry best practices for web security to protect your website and your users' data from potential threats.
              </p>
              <p className="mb-8">
                We ensure your web solutions comply with relevant regulations and standards, including GDPR, ADA accessibility requirements, and industry-specific compliance needs.
              </p>
              
              <div className="space-y-4 mt-8">
                <SecurityFeature 
                  icon={<Lock size={20} />}
                  title="Secure Authentication" 
                  description="Robust user authentication systems to protect accounts and data" 
                />
                <SecurityFeature 
                  icon={<Lock size={20} />}
                  title="Data Encryption" 
                  description="SSL implementation and data encryption for sensitive information" 
                />
                <SecurityFeature 
                  icon={<Lock size={20} />}
                  title="Regular Updates" 
                  description="Ongoing security patches and updates to prevent vulnerabilities" 
                />
              </div>
            </div>
            
            <div className="animate-on-scroll stagger-delay-1">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
                  alt="Web Security" 
                  className="rounded-lg shadow-lg relative z-10 w-full"
                />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container-tight">
          <div className="text-center mb-12">
            <SectionHeading 
              title="Frequently Asked Questions" 
              subtitle="Common questions about our web development services"
              center
            />
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq1">
              <AccordionTrigger>How long does it take to build a website?</AccordionTrigger>
              <AccordionContent>Website development timelines vary based on complexity, functionality, and scope. A basic informational website might take 4-6 weeks, while complex e-commerce sites or custom web applications can require 3-6 months or more. During our initial consultation, we'll assess your specific requirements and provide a detailed timeline. We work in phases and provide regular updates throughout the development process.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq2">
              <AccordionTrigger>How much does a website cost?</AccordionTrigger>
              <AccordionContent>Website costs vary widely depending on your specific requirements. Factors that influence pricing include design complexity, number of pages, custom functionality, integration requirements, and content needs. Basic informational websites start around $5,000, while e-commerce sites and custom web applications typically start at $15,000+. We provide detailed quotes based on your specific project requirements after our initial consultation.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq3">
              <AccordionTrigger>Will I be able to update the website myself?</AccordionTrigger>
              <AccordionContent>Yes, we develop websites with user-friendly content management systems (CMS) that allow you to easily update content without technical knowledge. We provide training on how to use your CMS effectively and create documentation for future reference. For more complex updates or new features, our support team is always available to assist.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq4">
              <AccordionTrigger>Do you provide hosting and maintenance?</AccordionTrigger>
              <AccordionContent>Yes, we offer hosting and ongoing maintenance services for websites we develop. Our hosting packages include security monitoring, regular backups, software updates, and technical support. We also offer maintenance plans that include content updates, performance optimization, and ongoing improvements to keep your site secure and functioning optimally.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq5">
              <AccordionTrigger>How do you ensure websites are search engine friendly?</AccordionTrigger>
              <AccordionContent>SEO best practices are integrated throughout our development process. We build websites with clean, semantic code, optimal site structure, fast loading speeds, mobile responsiveness, and proper metadata implementation. We also set up analytics and can implement technical SEO elements like sitemaps, robots.txt, structured data, and canonical tags. Our developers work closely with our SEO specialists to ensure your website is built on a strong foundation for search visibility.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-futurity-blue text-white">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Ready to Build Your Next Web Project?</h2>
          <p className="text-xl mb-8 text-white/90 animate-on-scroll stagger-delay-1">
            Let's create a web solution that drives your business forward.
          </p>
          <div className="animate-on-scroll stagger-delay-2">
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-futurity-blue">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Helper Components
const BenefitItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start">
      <CheckCircle className="text-futurity-orange mr-3 mt-1 flex-shrink-0" size={20} />
      <p>{text}</p>
    </div>
  );
};

const ServiceFeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="h-12 w-12 rounded-full bg-futurity-orange/10 flex items-center justify-center mb-4 text-futurity-orange">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-futurity-gray">{description}</p>
    </div>
  );
};

const ProcessCard = ({
  number,
  title,
  description
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="relative">
      <div className="text-4xl font-bold text-futurity-orange/20 mb-2">{number}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-futurity-gray">{description}</p>
    </div>
  );
};

const TechnologyCard = ({
  name
}: {
  name: string;
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
      <p className="font-semibold">{name}</p>
    </div>
  );
};

const PortfolioItem = ({
  image,
  title,
  description
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all">
      <div className="relative overflow-hidden aspect-[16/9]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-futurity-blue mb-2">{title}</h3>
        <p className="text-futurity-gray">{description}</p>
      </div>
    </div>
  );
};

const SecurityFeature = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-start">
      <div className="text-futurity-blue mr-3 mt-1 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-futurity-gray text-sm">{description}</p>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
