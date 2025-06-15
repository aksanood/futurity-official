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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">
              Building Powerful, High-Performing Custom <span className="text-futurity-orange">Digital Solutions</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1">
              At Futurity, our web development services bring innovative designs to life with clean code and robust back-end infrastructure. We build responsive, scalable, and secure websites and custom web applications engineered for exceptional performance and reliability. From advanced e-commerce platforms to bespoke corporate sites, our technical expertise ensures your digital solution is fast, powerful, and ready to scale with your business growth.
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
                title="Bespoke Web Development Solutions" 
              />
              <p className="mb-6">
                Our web development team creates custom digital solutions that combine cutting-edge technology with intuitive user experiences. Whether you need a sophisticated corporate website with custom CRM integration, a dynamic e-commerce platform with secure payment gateways, a blog to establish thought leadership, or a complex web application, we deliver robust and scalable solutions tailored to your specific requirements.
              </p>
              <p className="mb-8">
                We focus on creating websites that not only look great but also perform exceptionally well. Our development process prioritizes speed, security, and search engine optimization, ensuring your digital presence is powerful, reliable, and built for growth.
              </p>
              
              <div className="space-y-4 mt-8">
                <BenefitItem text="Custom Solutions: We build tailored digital solutions, from bespoke e-commerce platforms to custom AI agents, that are aligned with your specific business needs." />
                <BenefitItem text="Responsive by Design: All our websites are built to be mobile-responsive, working seamlessly across all devices." />
                <BenefitItem text="Scalable Architecture: We build platforms with scalable architecture designed to support your future growth." />
                <BenefitItem text="Secure & Optimized: Our solutions are secure, featuring user authentication, free SSL certificates, and are optimized for performance and SEO." />
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

      {/* Advanced Packages Section */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading
              title="Our Advanced Web Development Packages"
              subtitle="For businesses requiring powerful content management capabilities or robust online selling platforms, we offer these advanced solutions built for performance, scalability, and growth."
              center
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Premium Package (with CMS) */}
            <Card className="flex flex-col h-full shadow-md border-2 border-futurity-orange/20 hover:shadow-lg transition-shadow">
              <CardHeader className="bg-futurity-orange/10 rounded-t-lg p-6">
                <CardTitle className="text-2xl font-bold text-futurity-orange mb-2">Premium Package (with CMS)</CardTitle>
                <CardDescription className="text-futurity-gray mb-2">Perfect for: Businesses that need full control over their content, such as consultancies, agencies, or companies with an active blog. This package provides a dynamic, content-driven website built on a powerful Content Management System (CMS).</CardDescription>
                <div className="text-lg font-semibold text-futurity-blue mt-2">From £850 <span className="text-base font-normal text-futurity-gray">+ VAT</span></div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between p-6">
                <ul className="mb-6 space-y-3 text-futurity-gray">
                  <li><CheckCircle className="inline text-futurity-orange mr-2" size={18} />CMS Integration: User-friendly Content Management System for easy content updates</li>
                  <li><CheckCircle className="inline text-futurity-orange mr-2" size={18} />Bespoke Web Design & Premium Logo Design</li>
                  <li><CheckCircle className="inline text-futurity-orange mr-2" size={18} />Up to 8 Pages</li>
                  <li><CheckCircle className="inline text-futurity-orange mr-2" size={18} />Blog Setup: Fully functional blog to engage your audience and improve SEO</li>
                  <li><CheckCircle className="inline text-futurity-orange mr-2" size={18} />Initial SEO Setup</li>
                  <li><CheckCircle className="inline text-futurity-orange mr-2" size={18} />Landing Page Design</li>
                  <li><CheckCircle className="inline text-futurity-orange mr-2" size={18} />Mobile Responsive Design</li>
                  <li><CheckCircle className="inline text-futurity-orange mr-2" size={18} />Includes Premium Domain & 1 Year Free Hosting</li>
                  <li><CheckCircle className="inline text-futurity-orange mr-2" size={18} />Free SSL Certificate for security</li>
                  <li><CheckCircle className="inline text-futurity-orange mr-2" size={18} />3 Free Email Addresses</li>
                </ul>
                <Button asChild size="lg" className="w-full bg-futurity-orange text-white hover:bg-futurity-orange/90">
                  <Link to="/contact">Request a Premium Consultation</Link>
                </Button>
              </CardContent>
            </Card>
            {/* E-Commerce Package */}
            <Card className="flex flex-col h-full shadow-md border-2 border-futurity-blue/20 hover:shadow-lg transition-shadow">
              <CardHeader className="bg-futurity-blue/10 rounded-t-lg p-6">
                <CardTitle className="text-2xl font-bold text-futurity-blue mb-2">E-Commerce Package</CardTitle>
                <CardDescription className="text-futurity-gray mb-2">Perfect for: Businesses ready to sell products online. This is a comprehensive solution for building a secure, scalable, and feature-rich online store, from initial setup to processing payments.</CardDescription>
                <div className="text-lg font-semibold text-futurity-orange mt-2">From £850 <span className="text-base font-normal text-futurity-gray">+ VAT</span></div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between p-6">
                <ul className="mb-6 space-y-3 text-futurity-gray">
                  <li><CheckCircle className="inline text-futurity-blue mr-2" size={18} />E-Commerce Store Setup: Complete online store build & configuration</li>
                  <li><CheckCircle className="inline text-futurity-blue mr-2" size={18} />Secure Payment Gateway Integration: Stripe, PayPal, and more</li>
                  <li><CheckCircle className="inline text-futurity-blue mr-2" size={18} />Bespoke Web App Design & Development: For unique functionality beyond a standard store</li>
                  <li><CheckCircle className="inline text-futurity-blue mr-2" size={18} />User Authentication System: Secure customer accounts for login and order history</li>
                  <li><CheckCircle className="inline text-futurity-blue mr-2" size={18} />Database Design & Integration: Scalable architecture for products, customers, and orders</li>
                  <li><CheckCircle className="inline text-futurity-blue mr-2" size={18} />Third-Party Integration: Logistics, marketing tools, and more</li>
                  <li><CheckCircle className="inline text-futurity-blue mr-2" size={18} />Includes all features from the Premium package (CMS, Blog, SEO, etc.)</li>
                </ul>
                <Button asChild size="lg" className="w-full bg-futurity-blue text-white hover:bg-futurity-blue/90">
                  <Link to="/contact">Discuss Your E-commerce Project</Link>
                </Button>
              </CardContent>
            </Card>
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

      {/* FAQ Section - Card Grid Style */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-sm md:text-base font-medium uppercase tracking-wider text-futurity-gray mb-2">Web Development Answers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#0A1840"/><circle cx="20" cy="20" r="10" fill="#fff" fillOpacity="0.15"/><circle cx="20" cy="20" r="5" fill="#FF9800"/><path d="M20 10v10l7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-futurity-blue">How long will it take to build my website?</h3>
              <p className="text-futurity-gray text-base">The timeline for a web development project depends on its complexity. A Premium website featuring a Content Management System (CMS) typically takes between 3 to 6 weeks to complete. A bespoke E-commerce platform with custom features like payment gateways and user authentication will naturally require more time, usually ranging from 6 to 12+ weeks. We will establish and agree upon a clear project timeline during our Strategy phase.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="20" fill="#FF9800"/><circle cx="14" cy="18" r="4" fill="#fff"/><circle cx="26" cy="18" r="4" fill="#fff"/><ellipse cx="14" cy="27" rx="6" ry="3" fill="#fff" fillOpacity="0.5"/><ellipse cx="26" cy="27" rx="6" ry="3" fill="#fff" fillOpacity="0.5"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-futurity-blue">What is your web development process like?</h3>
              <p className="text-futurity-gray text-base">We follow a structured four-step process to ensure clarity and excellence in every project.</p>
              <ul className="list-disc pl-6 text-futurity-gray text-base space-y-1">
                <li><span className="font-semibold text-futurity-orange">Discovery:</span> We begin by learning about your business, goals, and challenges.</li>
                <li><span className="font-semibold text-futurity-orange">Strategy:</span> We develop a customised plan and architecture aligned with your objectives.</li>
                <li><span className="font-semibold text-futurity-orange">Creation:</span> Our team executes the strategy, building and developing your website.</li>
                <li><span className="font-semibold text-futurity-orange">Optimization:</span> After launch, we monitor and refine for peak performance.</li>
              </ul>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="20" fill="#00B8D9"/><path d="M12 24l8 4 8-4M12 24V16l8-4 8 4v8" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round"/><path d="M16 20l4 2 4-2" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-futurity-blue">Will I be able to update my website's content myself?</h3>
              <p className="text-futurity-gray text-base">Absolutely. Our Premium and E-Commerce development packages include a Content Management System (CMS) integration. This empowers your team to easily add or edit content such as blog posts, services, and images without needing any technical expertise.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="20" fill="#673AB7"/><path d="M20 12l3.09 6.26L30 19.27l-5 4.87L26.18 32 20 27.77 13.82 32 15 24.14l-5-4.87 6.91-1.01L20 12z" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-futurity-blue">What payment methods can I accept with an E-commerce website?</h3>
              <p className="text-futurity-gray text-base">Our E-commerce package includes secure payment gateway integration. This enables your online store to accept payments from all major credit and debit cards, as well as trusted platforms like Stripe and PayPal. This provides a smooth and trustworthy checkout experience for your customers.</p>
            </div>
            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="20" fill="#E91E63"/><path d="M20 12a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3 6v2a3 3 0 0 1-6 0v-2c-1.5-1.5-3-3.5-3-6a6 6 0 0 1 6-6z" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round"/><path d="M18 32h4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-futurity-blue">Do you offer support and maintenance after the website goes live?</h3>
              <p className="text-futurity-gray text-base">Yes, we offer optional maintenance plans for our web development packages to ensure your website remains up-to-date and performs optimally. These plans are based on a 12-month minimum contract and can include regular content updates (like blog posts or services), social media marketing, and email campaign management, depending on the chosen plan.</p>
            </div>
            {/* Card 6 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="20" fill="#43A047"/><path d="M16 24v-4a2 2 0 1 1 4 0v4h4a2 2 0 1 1 0 4h-4v-4a2 2 0 1 0-4 0v4h-4a2 2 0 1 1 0-4h4z" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-futurity-blue">What information do I need to provide to get started?</h3>
              <p className="text-futurity-gray text-base">To begin, we'll guide you through our collaborative Discovery phase where we learn about your business, goals, and target audience. To make this initial discussion as productive as possible, it's helpful if you have a general idea of your objectives, any specific features you require, and perhaps some examples of websites you admire.</p>
            </div>
          </div>
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
            <Button asChild size="lg" className="bg-futurity-orange text-white hover:bg-futurity-orange/90">
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
