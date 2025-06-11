import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Compass, 
  Palette, 
  MessageSquare,
  FileText,
  Briefcase
} from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const BrandingServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-futurity-blue text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Branding Services</h1>
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1">
              Create a unique and memorable brand identity that resonates with your audience
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
                title="Build a Powerful Brand" 
                subtitle="We help you create a distinctive brand identity that sets you apart from competitors."
              />
              <p className="mb-6">
                Your brand is more than just a logo—it's the complete experience customers have with your business. Our branding team creates cohesive brand identities that communicate your values, connect with your target audience, and drive business growth.
              </p>
              <p className="mb-8">
                Whether you're launching a new brand or refreshing an existing one, our strategic approach ensures your brand stands out in today's competitive market and creates lasting impressions.
              </p>
              
              <div className="space-y-4 mt-8">
                <BenefitItem text="Strategic brand positioning that differentiates your business" />
                <BenefitItem text="Visual identity systems that create instant recognition" />
                <BenefitItem text="Consistent brand experiences across all touchpoints" />
                <BenefitItem text="Emotionally resonant messaging that connects with your audience" />
              </div>
            </div>
            
            <div className="animate-on-scroll stagger-delay-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80"
                  alt="Branding Services" 
                  className="rounded-lg shadow-lg relative z-10 w-full"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading
              title="Our Branding Services"
              subtitle="Comprehensive solutions to create and strengthen your brand identity"
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceFeatureCard
              icon={<Compass size={24} />}
              title="Brand Strategy"
              description="Define your brand's positioning, values, personality, and unique value proposition"
            />
            
            <ServiceFeatureCard
              icon={<Palette size={24} />}
              title="Visual Identity Design"
              description="Create logos, color palettes, typography, and visual elements that express your brand"
            />
            
            <ServiceFeatureCard
              icon={<MessageSquare size={24} />}
              title="Brand Messaging"
              description="Develop clear, compelling messaging that communicates your brand's value"
            />
            
            <ServiceFeatureCard
              icon={<FileText size={24} />}
              title="Brand Guidelines"
              description="Create comprehensive guidelines to ensure consistent brand implementation"
            />
            
            <ServiceFeatureCard
              icon={<Briefcase size={24} />}
              title="Brand Applications"
              description="Apply your brand identity to business cards, stationery, marketing materials, and more"
            />
            
            <ServiceFeatureCard
              icon={<Compass size={24} />}
              title="Rebranding"
              description="Refresh or completely reinvent your existing brand to better align with your goals"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading 
            title="Our Branding Process" 
            subtitle="A strategic approach to building memorable brands"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <ProcessCard 
              number="01"
              title="Discovery"
              description="Research your industry, competitors, target audience, and business goals"
            />
            
            <ProcessCard 
              number="02"
              title="Strategy"
              description="Develop brand positioning, personality, and messaging framework"
            />
            
            <ProcessCard 
              number="03"
              title="Design"
              description="Create visual identity elements that express your brand strategy"
            />
            
            <ProcessCard 
              number="04"
              title="Implementation"
              description="Apply your brand across all touchpoints with comprehensive guidelines"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading 
              title="Branding Portfolio" 
              subtitle="Some of our recent branding projects"
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioItem 
              image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              title="Eco Packaging Co."
              description="Complete brand identity for a sustainable packaging company"
            />
            
            <PortfolioItem 
              image="https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?auto=format&fit=crop&q=80"
              title="Blossom Beauty"
              description="Rebranding for an organic skincare line targeting millennials"
            />
            
            <PortfolioItem 
              image="https://images.unsplash.com/photo-1634942536787-ae7d0d35bb25?auto=format&fit=crop&q=80"
              title="NexTech Solutions"
              description="Modern tech brand identity with versatile application system"
            />
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading 
              title="Why Invest in Branding?" 
              subtitle="The business benefits of a strong brand identity"
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              title="Increased Recognition"
              description="A consistent brand identity makes your business instantly recognizable to customers, building familiarity and trust."
            />
            
            <BenefitCard 
              title="Premium Positioning"
              description="Strong branding allows you to position your offerings as premium and justify higher price points."
            />
            
            <BenefitCard 
              title="Customer Loyalty"
              description="Emotional connections fostered by effective branding lead to higher customer retention and loyalty."
            />
            
            <BenefitCard 
              title="Competitive Advantage"
              description="Distinctive branding sets you apart from competitors in crowded marketplaces."
            />
            
            <BenefitCard 
              title="Easier Marketing"
              description="A well-defined brand provides a strong foundation for all marketing efforts, making them more effective."
            />
            
            <BenefitCard 
              title="Business Value"
              description="Strong brands have higher business valuation and are valuable assets for your company."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-tight">
          <div className="text-center mb-12">
            <SectionHeading 
              title="Frequently Asked Questions"
              subtitle="Common questions about our branding services"
              center
            />
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq1">
              <AccordionTrigger>What's the difference between a logo and a brand?</AccordionTrigger>
              <AccordionContent>A logo is just one element of your overall brand. While a logo is a visual symbol that represents your business, a brand encompasses everything that defines your business identity—including your values, voice, messaging, visual identity system, customer experience, and reputation. Think of your logo as your signature, while your brand is your entire personality and reputation.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq2">
              <AccordionTrigger>How long does the branding process take?</AccordionTrigger>
              <AccordionContent>A typical branding project takes 4-8 weeks, depending on the scope. This includes research and discovery (1-2 weeks), strategy development (1-2 weeks), visual identity design (2-3 weeks), and finalization of brand guidelines (1 week). More complex projects with extensive applications or multiple stakeholders may require additional time. We'll provide a specific timeline based on your project needs.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq3">
              <AccordionTrigger>When should I consider rebranding?</AccordionTrigger>
              <AccordionContent>Consider rebranding when: your business direction or offerings have significantly changed; your brand no longer reflects your values or positioning; you're targeting a new audience; your visual identity looks dated; you're expanding to new markets; you need to overcome negative associations; or you're struggling to differentiate from competitors. Rebranding should be a strategic decision based on business objectives, not just aesthetic preferences.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq4">
              <AccordionTrigger>What does a brand guidelines document include?</AccordionTrigger>
              <AccordionContent>Brand guidelines (also called a brand style guide) typically include: brand strategy overview (mission, vision, values, positioning); logo usage rules (clear space, minimum size, versions); color palette specifications; typography system; photography and illustration style; visual element usage; tone of voice guidelines; messaging frameworks; and application examples. Comprehensive guidelines ensure your brand is implemented consistently across all touchpoints.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq5">
              <AccordionTrigger>How do you measure the effectiveness of branding?</AccordionTrigger>
              <AccordionContent>We measure branding effectiveness using both quantitative and qualitative metrics, such as brand awareness, customer loyalty, market share, and perception surveys. We also track business outcomes like increased sales, higher customer retention, and improved market positioning. We'll work with you to define success metrics at the start of your branding project.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-futurity-blue text-white">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Ready to Build a Stronger Brand?</h2>
          <p className="text-xl mb-8 text-white/90 animate-on-scroll stagger-delay-1">
            Let's create a brand identity that resonates with your audience and drives business growth.
          </p>
          <div className="animate-on-scroll stagger-delay-2">
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-futurity-blue">
              <Link to="/contact">Start Your Branding Project</Link>
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

const BenefitCard = ({
  title,
  description
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="mb-4 text-futurity-orange">
        <CheckCircle size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-futurity-gray">{description}</p>
    </div>
  );
};

export default BrandingServicesPage;
