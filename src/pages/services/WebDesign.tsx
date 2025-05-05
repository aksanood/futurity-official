import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, FileSearch, LayoutDashboard, Smartphone } from 'lucide-react';
import PriceCard from '@/components/ui/price-card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const WebDesignPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-futurity-blue text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Web Design</h1>
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1">
              Custom, responsive websites that deliver exceptional user experiences
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
                title="Beautiful, Functional Websites" 
                subtitle="We design websites that not only look great but also perform excellently across all devices."
              />
              <p className="mb-6">
                Our web design team combines creativity with technical expertise to build websites that represent your brand effectively and provide seamless user experiences. We focus on creating designs that are not only visually impressive but also optimized for conversions and ease of use.
              </p>
              <p className="mb-8">
                Every website we design is built with responsiveness, accessibility, and search engine optimization in mind, ensuring your site performs well for all users and ranks effectively in search results.
              </p>
              
              <div className="space-y-4 mt-8">
                <BenefitItem text="Custom designs tailored to your brand and business objectives" />
                <BenefitItem text="Responsive layouts that work perfectly on all devices" />
                <BenefitItem text="User-centered design focused on conversions and engagement" />
                <BenefitItem text="SEO-friendly structure and coding practices" />
              </div>
            </div>
            
            <div className="animate-on-scroll stagger-delay-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80"
                  alt="Web Design Services" 
                  className="rounded-lg shadow-lg relative z-10 w-full"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Comparison Section - Moved from Web Development page */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading
              title="Web Design Packages"
              subtitle="Choose the package that best suits your business needs"
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PriceCard 
              title="Bronze Package" 
              price="499" 
              features={[
                "4 Page Website",
                "Domain Name & Hosting",
                "Unlimited Email Addresses",
                "10 Images",
                "Technical Support"
              ]}
              variant="primary"
            />
            
            <PriceCard 
              title="Silver Package" 
              price="799" 
              features={[
                "7 Page Website",
                "Domain Name & Hosting",
                "Unlimited Email Addresses",
                "20 Images",
                "Basic SEO"
              ]}
              variant="secondary"
            />
            
            <PriceCard 
              title="Gold Package" 
              price="999" 
              features={[
                "10 Page Website",
                "Domain Name & Hosting",
                "Unlimited Email Addresses",
                "30 Images",
                "Basic SEO"
              ]}
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading
              title="Our Web Design Services"
              subtitle="Comprehensive web design solutions to meet your specific business needs"
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceFeatureCard
              icon={<LayoutDashboard size={24} />}
              title="Custom Website Design"
              description="Unique designs that reflect your brand identity and engage your target audience"
            />
            
            <ServiceFeatureCard
              icon={<Smartphone size={24} />}
              title="Responsive Design"
              description="Websites that adapt perfectly to all screen sizes and devices"
            />
            
            <ServiceFeatureCard
              icon={<FileSearch size={24} />}
              title="UI/UX Design"
              description="User interface and experience design focused on usability and conversions"
            />
            
            <ServiceFeatureCard
              icon={<CheckCircle size={24} />}
              title="Website Redesign"
              description="Transform your existing website with modern design and improved functionality"
            />
            
            <ServiceFeatureCard
              icon={<LayoutDashboard size={24} />}
              title="Landing Page Design"
              description="High-converting landing pages designed to maximize leads and sales"
            />
            
            <ServiceFeatureCard
              icon={<FileSearch size={24} />}
              title="Wireframing & Prototyping"
              description="Detailed wireframes and interactive prototypes to visualize your website before development"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading 
            title="Our Design Process" 
            subtitle="A structured approach to creating your perfect website"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <ProcessCard 
              number="01"
              title="Discovery"
              description="We learn about your business, goals, target audience, and requirements"
            />
            
            <ProcessCard 
              number="02"
              title="Design"
              description="We create wireframes and visual designs based on your requirements"
            />
            
            <ProcessCard 
              number="03"
              title="Development"
              description="We build your website with clean, efficient code and integrate all features"
            />
            
            <ProcessCard 
              number="04"
              title="Launch & Support"
              description="We deploy your site and provide ongoing support and maintenance"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading 
              title="Recent Web Design Projects" 
              subtitle="See examples of our recent web design work"
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioItem 
              image="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80"
              title="E-commerce Website"
              category="Web Design"
            />
            
            <PortfolioItem 
              image="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80"
              title="Corporate Site"
              category="Web Design"
            />
            
            <PortfolioItem 
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              title="Healthcare Portal"
              category="Web Design"
            />
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container-tight">
          <div className="text-center mb-12">
            <SectionHeading 
              title="Frequently Asked Questions" 
              subtitle="Common questions about our web design services"
              center
            />
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq1">
              <AccordionTrigger>How long does it take to design a website?</AccordionTrigger>
              <AccordionContent>The timeline for designing a website typically ranges from 4 to 12 weeks, depending on the complexity of the project, the number of pages, and the specific features required. Simple websites may be completed more quickly, while complex e-commerce sites or custom web applications may take longer.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq2">
              <AccordionTrigger>How much does a website design cost?</AccordionTrigger>
              <AccordionContent>Website design costs vary based on your specific requirements. Factors that influence pricing include the number of pages, complexity of design, custom functionality needed, and whether you need additional services like content creation or SEO. We provide detailed quotes after understanding your project needs.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq3">
              <AccordionTrigger>Will my website be mobile-friendly?</AccordionTrigger>
              <AccordionContent>Absolutely! All websites we design are fully responsive and tested across multiple devices and screen sizes. This ensures your site looks and functions perfectly on smartphones, tablets, laptops, and desktop computers.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq4">
              <AccordionTrigger>Can you redesign my existing website?</AccordionTrigger>
              <AccordionContent>Yes, we offer website redesign services to update and improve existing websites. We can work with your current content and structure while giving your site a fresh, modern look and improved functionality.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq5">
              <AccordionTrigger>Do you provide website maintenance after launch?</AccordionTrigger>
              <AccordionContent>Yes, we offer ongoing website maintenance and support services to keep your site secure, up-to-date, and performing optimally. We offer various maintenance packages to suit different needs and budgets.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-futurity-blue text-white">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Ready to Start Your Web Design Project?</h2>
          <p className="text-xl mb-8 text-white/90 animate-on-scroll stagger-delay-1">
            Let's create a website that perfectly represents your brand and drives results.
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

const PortfolioItem = ({
  image,
  title,
  category
}: {
  image: string;
  title: string;
  category: string;
}) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all">
      <div className="relative overflow-hidden aspect-[16/9]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-futurity-orange text-white text-sm font-medium px-2 py-1 rounded-md">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-futurity-blue">{title}</h3>
      </div>
    </div>
  );
};

export default WebDesignPage;
