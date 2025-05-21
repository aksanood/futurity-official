import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  FileText, 
  Edit, 
  MessageSquare,
  Book,
  Mail
} from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const ContentWritingPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-futurity-blue text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Content Writing</h1>
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1">
              Compelling content that engages your audience, establishes authority, and drives action
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
                title="Words That Work" 
                subtitle="We craft strategic content that connects with your audience and achieves your goals."
              />
              <p className="mb-6">
                Effective content is essential for engaging your audience, building your brand authority, and driving conversions. Our content writing team creates well-researched, persuasive copy that resonates with your target audience and aligns with your business objectives.
              </p>
              <p className="mb-8">
                Whether you need website copy, blog posts, social media content, or technical documentation, we deliver high-quality writing that communicates your value proposition and inspires action.
              </p>
              
              <div className="space-y-4 mt-8">
                <BenefitItem text="Strategic content aligned with your marketing goals" />
                <BenefitItem text="Expert writers specialized in your industry" />
                <BenefitItem text="SEO-optimized content that ranks well in search results" />
                <BenefitItem text="Consistent voice that reflects your brand personality" />
              </div>
            </div>
            
            <div className="animate-on-scroll stagger-delay-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80"
                  alt="Content Writing Services" 
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
              title="Our Content Writing Services"
              subtitle="Comprehensive content solutions for all your business needs"
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceFeatureCard
              icon={<Book size={24} />}
              title="Blog Posts & Articles"
              description="Engaging, informative content that establishes your expertise and improves your SEO"
            />
            
            <ServiceFeatureCard
              icon={<FileText size={24} />}
              title="Website Copy"
              description="Persuasive, clear website content that communicates your value and guides user actions"
            />
            
            <ServiceFeatureCard
              icon={<Edit size={24} />}
              title="Product Descriptions"
              description="Compelling product content that highlights benefits and drives conversions"
            />
            
            <ServiceFeatureCard
              icon={<MessageSquare size={24} />}
              title="Social Media Content"
              description="Engaging posts that build community and drive interaction with your brand"
            />
            
            <ServiceFeatureCard
              icon={<Mail size={24} />}
              title="Email Campaigns"
              description="Effective email content that nurtures leads and drives conversions"
            />
            
            <ServiceFeatureCard
              icon={<Book size={24} />}
              title="Whitepapers & E-books"
              description="In-depth content that showcases your expertise and generates qualified leads"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading 
            title="Our Content Creation Process" 
            subtitle="A systematic approach to developing effective content"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <ProcessCard 
              number="01"
              title="Strategy"
              description="Define goals, audience, and key messages for your content"
            />
            
            <ProcessCard 
              number="02"
              title="Research"
              description="Gather insights and information to inform compelling content"
            />
            
            <ProcessCard 
              number="03"
              title="Creation"
              description="Craft engaging, persuasive content tailored to your audience"
            />
            
            <ProcessCard 
              number="04"
              title="Refinement"
              description="Polish and optimize content for maximum impact"
            />
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading 
              title="Content Types" 
              subtitle="Diverse content formats to meet your specific needs"
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContentTypeCard 
              title="Educational Content"
              items={[
                "How-to guides",
                "Tutorials",
                "Explainer articles",
                "Industry insights",
                "Whitepapers",
                "E-books"
              ]}
            />
            
            <ContentTypeCard 
              title="Marketing Content"
              items={[
                "Landing pages",
                "Product descriptions",
                "Email campaigns",
                "Ad copy",
                "Sales letters",
                "Case studies"
              ]}
            />
            
            <ContentTypeCard 
              title="Brand Content"
              items={[
                "Company stories",
                "Team bios",
                "Mission statements",
                "Value propositions",
                "Testimonial scripts",
                "Brand manifestos"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading 
              title="Industries We Serve" 
              subtitle="Expert content writers specialized in various sectors"
              center
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <IndustryBadge name="Technology" />
            <IndustryBadge name="Healthcare" />
            <IndustryBadge name="Finance" />
            <IndustryBadge name="E-commerce" />
            <IndustryBadge name="Education" />
            <IndustryBadge name="Real Estate" />
            <IndustryBadge name="Manufacturing" />
            <IndustryBadge name="Hospitality" />
            <IndustryBadge name="Legal" />
            <IndustryBadge name="SaaS" />
            <IndustryBadge name="Non-profit" />
            <IndustryBadge name="Creative" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-tight">
          <div className="text-center mb-12">
            <SectionHeading 
              title="Frequently Asked Questions"
              subtitle="Common questions about our content writing services"
              center
            />
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq1">
              <AccordionTrigger>How do you ensure content matches our brand voice?</AccordionTrigger>
              <AccordionContent>We develop a comprehensive understanding of your brand voice through a detailed onboarding process that includes reviewing your existing content, brand guidelines, and target audience information. We create a tailored style guide for your content that outlines tone, style, and language preferences. For ongoing projects, we refine this approach based on your feedback to ensure consistency and alignment with your brand identity.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq2">
              <AccordionTrigger>How long does it take to create content?</AccordionTrigger>
              <AccordionContent>Timelines vary based on content type, complexity, and volume. Blog posts typically take 3-5 business days, website copy 5-10 days, and longer content like whitepapers or e-books 2-3 weeks. Rush services are available for time-sensitive projects. We'll provide specific timelines during our initial consultation based on your project scope and requirements.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq3">
              <AccordionTrigger>Do you optimize content for SEO?</AccordionTrigger>
              <AccordionContent>Yes, all content is optimized for search engines using best practices for keyword research, on-page SEO, and readability. We ensure your content is both engaging for readers and structured for search engine visibility.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq4">
              <AccordionTrigger>Can you write for technical or niche industries?</AccordionTrigger>
              <AccordionContent>Absolutely! Our team includes writers with expertise in a wide range of industries, including technical, medical, legal, SaaS, finance, and more. We conduct thorough research and can adapt to your specific industry requirements.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq5">
              <AccordionTrigger>What if I need revisions?</AccordionTrigger>
              <AccordionContent>We include a set number of revisions with every project to ensure your satisfaction. We'll work closely with you to incorporate your feedback and make necessary adjustments until the content meets your expectations.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-futurity-blue text-white">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Ready to Create Compelling Content?</h2>
          <p className="text-xl mb-8 text-white/90 animate-on-scroll stagger-delay-1">
            Let's craft content that engages your audience and drives results.
          </p>
          <div className="animate-on-scroll stagger-delay-2">
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-futurity-blue">
              <Link to="/contact">Discuss Your Content Needs</Link>
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

const ContentTypeCard = ({
  title,
  items
}: {
  title: string;
  items: string[];
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full">
      <h3 className="text-xl font-semibold mb-4 text-futurity-blue">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="text-futurity-orange mr-3 mt-1 flex-shrink-0" size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const IndustryBadge = ({
  name
}: {
  name: string;
}) => {
  return (
    <div className="bg-white py-3 px-4 rounded-lg text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <p className="font-medium">{name}</p>
    </div>
  );
};

export default ContentWritingPage;
