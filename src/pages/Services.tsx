import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ui/service-card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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
  Cpu
} from 'lucide-react';

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
                icon={<Robot size={28} />}
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
              href="#ux-ui-design"
            />
            
            <ServiceCard 
              icon={<Compass />}
              title="Branding"
              description="Develop a unique and memorable brand identity that resonates with your target audience and sets you apart."
              href="#branding"
            />
            
            <ServiceCard 
              icon={<TrendingUp />}
              title="Digital Marketing"
              description="Strategic marketing campaigns that connect your brand with your target audience and drive conversions."
              href="#digital-marketing"
            />
            
            <ServiceCard 
              icon={<FileText />}
              title="Content Writing"
              description="Compelling content that engages your audience, establishes authority, and drives action."
              href="#content-writing"
            />
            
            <ServiceCard 
              icon={<Robot />}
              title="AI Development"
              description="Custom AI solutions that automate processes, generate insights, and create personalized experiences."
              href="#ai-development"
            />
            
            <ServiceCard 
              icon={<LayoutDashboard />}
              title="Web Development"
              description="We build responsive, scalable websites and web applications that deliver exceptional user experiences."
              href="#web-development"
            />
          </div>
        </div>
      </section>

      {/* UX/UI Design Section */}
      <section id="ux-ui-design" className="section bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">UX/UI Design</h2>
              <p className="text-lg mb-6 text-futurity-gray">
                Our user experience and interface design services focus on creating intuitive, engaging digital experiences that put your users first.
              </p>
              
              <Accordion type="single" collapsible className="mt-6 mb-8">
                <AccordionServiceItem 
                  icon={<Users size={18} />} 
                  title="User Research and Personas" 
                  content="We conduct comprehensive user research to understand your audience's needs, behaviors, and pain points, creating detailed personas to guide the design process."
                />
                
                <AccordionServiceItem 
                  icon={<LayoutDashboard size={18} />} 
                  title="Information Architecture" 
                  content="We organize and structure your content and functionality in a logical, intuitive way that makes it easy for users to find what they need."
                />
                
                <AccordionServiceItem 
                  icon={<PenTool size={18} />} 
                  title="Wireframing and Prototyping" 
                  content="We create wireframes and interactive prototypes to visualize the user experience and test concepts before full implementation."
                />
                
                <AccordionServiceItem 
                  icon={<Palette size={18} />} 
                  title="Visual Design" 
                  content="We craft visually appealing interfaces that align with your brand identity and enhance the overall user experience."
                />
                
                <AccordionServiceItem 
                  icon={<Users size={18} />} 
                  title="Usability Testing" 
                  content="We conduct usability tests to gather feedback and ensure your digital products are intuitive and easy to use."
                />
                
                <AccordionServiceItem 
                  icon={<PenTool size={18} />} 
                  title="Design System Creation" 
                  content="We develop comprehensive design systems that ensure consistency across all your digital touchpoints and streamline future design work."
                />
                
                <AccordionServiceItem 
                  icon={<Users size={18} />} 
                  title="User Interviews" 
                  content="We conduct in-depth interviews with your users to gather qualitative insights that inform our design decisions."
                />
              </Accordion>
              
              <Button asChild>
                <Link to="/contact">Discuss Your Project</Link>
              </Button>
            </div>
            
            <div className="animate-on-scroll stagger-delay-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&q=80"
                  alt="UX/UI Design" 
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
              
              <Accordion type="single" collapsible className="mt-6 mb-8">
                <AccordionServiceItem 
                  icon={<Compass size={18} />} 
                  title="Brand Discovery and Research" 
                  content="We dive deep into understanding your business, market, and competitors to identify opportunities for differentiation."
                />
                
                <AccordionServiceItem 
                  icon={<Compass size={18} />} 
                  title="Brand Positioning" 
                  content="We help you define a clear and compelling position in the market that sets you apart from competitors."
                />
                
                <AccordionServiceItem 
                  icon={<Palette size={18} />} 
                  title="Visual Identity Design" 
                  content="We create a comprehensive visual identity including logos, color palettes, typography, and visual elements that express your brand personality."
                />
                
                <AccordionServiceItem 
                  icon={<FileText size={18} />} 
                  title="Brand Guidelines" 
                  content="We develop detailed guidelines to ensure consistent brand implementation across all touchpoints."
                />
                
                <AccordionServiceItem 
                  icon={<MessageSquare size={18} />} 
                  title="Brand Messaging" 
                  content="We craft compelling messaging that communicates your value proposition and resonates with your audience."
                />
                
                <AccordionServiceItem 
                  icon={<Compass size={18} />} 
                  title="Brand Implementation" 
                  content="We help you apply your new brand identity across all digital and physical touchpoints."
                />
              </Accordion>
              
              <Button asChild>
                <Link to="/contact">Discuss Your Project</Link>
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

      {/* Digital Marketing Section */}
      <section id="digital-marketing" className="section bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Digital Marketing</h2>
              <p className="text-lg mb-6 text-futurity-gray">
                Our digital marketing strategies help you reach your target audience, generate leads, and grow your business in the online space.
              </p>
              
              <Accordion type="single" collapsible className="mt-6 mb-8">
                <AccordionServiceItem 
                  icon={<TrendingUp size={18} />} 
                  title="SEO Optimisation" 
                  content="We improve your website's visibility in search engine results to drive organic traffic and increase conversions."
                />
                
                <AccordionServiceItem 
                  icon={<FileText size={18} />} 
                  title="Content Marketing" 
                  content="We develop and execute content strategies that attract, engage, and convert your target audience."
                />
                
                <AccordionServiceItem 
                  icon={<MessageSquare size={18} />} 
                  title="Social Media Management" 
                  content="We create and manage social media campaigns that build brand awareness and engage your community."
                />
                
                <AccordionServiceItem 
                  icon={<Mail size={18} />} 
                  title="Email Marketing" 
                  content="We design and implement email campaigns that nurture leads and drive conversions."
                />
                
                <AccordionServiceItem 
                  icon={<Megaphone size={18} />} 
                  title="PPC Advertising" 
                  content="We manage paid advertising campaigns that target the right audience and maximize your return on investment."
                />
                
                <AccordionServiceItem 
                  icon={<BarChart2 size={18} />} 
                  title="Analytics and Reporting" 
                  content="We track, analyze, and report on key metrics to continuously improve your digital marketing performance."
                />
              </Accordion>
              
              <Button asChild>
                <Link to="/contact">Discuss Your Project</Link>
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

      {/* Content Writing Section */}
      <section id="content-writing" className="section">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:order-2 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Content Writing</h2>
              <p className="text-lg mb-6 text-futurity-gray">
                Our content writing services deliver compelling copy that engages your audience, communicates your value, and drives action.
              </p>
              
              <Accordion type="single" collapsible className="mt-6 mb-8">
                <AccordionServiceItem 
                  icon={<Book size={18} />} 
                  title="Blog Posts" 
                  content="We create informative and engaging blog posts that establish your expertise and improve your SEO performance."
                />
                
                <AccordionServiceItem 
                  icon={<FileText size={18} />} 
                  title="Product Descriptions" 
                  content="We craft compelling product descriptions that highlight benefits and drive conversions."
                />
                
                <AccordionServiceItem 
                  icon={<Edit size={18} />} 
                  title="Ad/Sales Copies" 
                  content="We develop persuasive ad and sales copy that captures attention and drives action."
                />
                
                <AccordionServiceItem 
                  icon={<Mail size={18} />} 
                  title="Newsletters" 
                  content="We write engaging newsletters that keep your audience informed and nurture customer relationships."
                />
                
                <AccordionServiceItem 
                  icon={<Book size={18} />} 
                  title="E-Books" 
                  content="We create comprehensive e-books that showcase your expertise and generate leads."
                />
                
                <AccordionServiceItem 
                  icon={<FileText size={18} />} 
                  title="Website Contents" 
                  content="We develop clear and compelling website content that communicates your value and guides users to take action."
                />
                
                <AccordionServiceItem 
                  icon={<MessageSquare size={18} />} 
                  title="Social Media Content" 
                  content="We create engaging social media content that builds community and drives engagement."
                />
                
                <AccordionServiceItem 
                  icon={<Mail size={18} />} 
                  title="E-mail Marketing Contents" 
                  content="We craft effective email marketing content that nurtures leads and drives conversions."
                />
                
                <AccordionServiceItem 
                  icon={<FileText size={18} />} 
                  title="Technical Writing" 
                  content="We develop clear technical documentation that explains complex concepts in accessible language."
                />
                
                <AccordionServiceItem 
                  icon={<FileText size={18} />} 
                  title="SEO Contents" 
                  content="We create SEO-optimized content that improves your search rankings and drives organic traffic."
                />
              </Accordion>
              
              <Button asChild>
                <Link to="/contact">Discuss Your Project</Link>
              </Button>
            </div>
            
            <div className="lg:order-1 animate-on-scroll stagger-delay-1">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80"
                  alt="Content Writing" 
                  className="rounded-lg shadow-lg relative z-10 w-full"
                />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Development Section */}
      <section id="ai-development" className="section bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">AI Development</h2>
              <p className="text-lg mb-6 text-futurity-gray">
                Our AI development services leverage the latest technologies to create intelligent solutions that automate processes and enhance user experiences.
              </p>
              
              <Accordion type="single" collapsible className="mt-6 mb-8">
                <AccordionServiceItem 
                  icon={<MessageSquare size={18} />} 
                  title="Chatbots" 
                  content="We develop intelligent chatbots that enhance customer service, automate responses, and improve user experience."
                />
                
                <AccordionServiceItem 
                  icon={<Bot size={18} />} 
                  title="AI Agents" 
                  content="We create AI agents that can perform tasks, make decisions, and interact with users in a natural way."
                />
                
                <AccordionServiceItem 
                  icon={<Image size={18} />} 
                  title="Image Generation" 
                  content="We implement image generation solutions that create unique visuals for your marketing, design, and product needs."
                />
                
                <AccordionServiceItem 
                  icon={<FileText size={18} />} 
                  title="Recommendation Systems" 
                  content="We build recommendation engines that enhance user experience by suggesting relevant content, products, or services."
                />
                
                <AccordionServiceItem 
                  icon={<Book size={18} />} 
                  title="Personalised Learning Platforms" 
                  content="We develop AI-powered learning platforms that adapt to individual learning styles and needs."
                />
                
                <AccordionServiceItem 
                  icon={<Cpu size={18} />} 
                  title="Generative AI Development" 
                  content="We create custom generative AI solutions that can produce text, images, code, and other content types for your specific business needs."
                />
              </Accordion>
              
              <Button asChild>
                <Link to="/contact">Discuss Your Project</Link>
              </Button>
            </div>
            
            <div className="animate-on-scroll stagger-delay-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
                  alt="AI Development" 
                  className="rounded-lg shadow-lg relative z-10 w-full"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
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

const AccordionServiceItem = ({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode;
  title: string;
  content: string;
}) => {
  return (
    <AccordionItem value={title.toLowerCase().replace(/\s+/g, '-')}>
      <AccordionTrigger className="hover:no-underline">
        <div className="flex items-center gap-2 text-left">
          <span className="text-futurity-orange">{icon}</span>
          <span>{title}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <p className="pl-8">{content}</p>
      </AccordionContent>
    </AccordionItem>
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
