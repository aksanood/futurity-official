
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, TrendingUp, BarChart2, Megaphone, FileSearch, Target } from 'lucide-react';

const DigitalMarketingPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-futurity-blue text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Digital Marketing</h1>
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1">
              Results-driven digital marketing strategies to grow your business
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
                title="Strategic Digital Marketing" 
                subtitle="Reach your target audience and achieve your business goals with comprehensive digital marketing solutions."
              />
              <p className="mb-6">
                Our digital marketing team creates data-driven strategies that connect your brand with your target audience and drive measurable results. We combine creative thinking with analytical expertise to develop campaigns that increase your visibility, engage your customers, and generate leads.
              </p>
              <p className="mb-8">
                Whether you're looking to increase website traffic, generate more leads, or boost sales, our tailored digital marketing services will help you achieve your specific business objectives.
              </p>
              
              <div className="space-y-4 mt-8">
                <BenefitItem text="Tailored strategies aligned with your business goals" />
                <BenefitItem text="Multi-channel approach for maximum reach and impact" />
                <BenefitItem text="Data-driven decisions based on analytics and insights" />
                <BenefitItem text="Continuous optimization for improved performance" />
              </div>
            </div>
            
            <div className="animate-on-scroll stagger-delay-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80"
                  alt="Digital Marketing Services" 
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
              title="Our Digital Marketing Services"
              subtitle="Comprehensive solutions to boost your online presence and drive growth"
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceFeatureCard
              icon={<FileSearch size={24} />}
              title="Search Engine Optimization"
              description="Improve your website's visibility in search results to drive organic traffic"
            />
            
            <ServiceFeatureCard
              icon={<Megaphone size={24} />}
              title="Pay-Per-Click Advertising"
              description="Strategic ad campaigns that target the right audience and maximize ROI"
            />
            
            <ServiceFeatureCard
              icon={<TrendingUp size={24} />}
              title="Social Media Marketing"
              description="Engage your audience and build your brand on social media platforms"
            />
            
            <ServiceFeatureCard
              icon={<FileSearch size={24} />}
              title="Content Marketing"
              description="Create valuable content that attracts, engages, and converts your target audience"
            />
            
            <ServiceFeatureCard
              icon={<Target size={24} />}
              title="Email Marketing"
              description="Nurture leads and build customer relationships through effective email campaigns"
            />
            
            <ServiceFeatureCard
              icon={<BarChart2 size={24} />}
              title="Analytics & Reporting"
              description="Track performance and gain insights to continuously improve your marketing efforts"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading 
            title="Our Marketing Process" 
            subtitle="A strategic approach to achieving your marketing goals"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <ProcessCard 
              number="01"
              title="Research & Analysis"
              description="We analyze your market, competitors, and target audience to develop effective strategies"
            />
            
            <ProcessCard 
              number="02"
              title="Strategy Development"
              description="We create a tailored marketing plan aligned with your business objectives"
            />
            
            <ProcessCard 
              number="03"
              title="Implementation"
              description="We execute campaigns across various channels to reach your target audience"
            />
            
            <ProcessCard 
              number="04"
              title="Monitor & Optimize"
              description="We continuously track results and refine strategies to improve performance"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading 
              title="Marketing Success Stories" 
              subtitle="See how we've helped businesses achieve their marketing goals"
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyItem 
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              title="E-commerce Revenue Growth"
              results="156% increase in organic traffic and 94% growth in online sales"
            />
            
            <CaseStudyItem 
              image="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80"
              title="B2B Lead Generation"
              results="175% increase in qualified leads and 43% reduction in cost per acquisition"
            />
            
            <CaseStudyItem 
              image="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80"
              title="Local Business Visibility"
              results="300% growth in local search visibility and 89% increase in store visits"
            />
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/portfolio">View All Case Studies</Link>
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
              subtitle="Common questions about our digital marketing services"
              center
            />
          </div>
          
          <div className="space-y-6">
            <FaqItem 
              question="How long does it take to see results from digital marketing?" 
              answer="Results timelines vary depending on the channel and strategies used. Paid advertising can generate results almost immediately, while SEO typically takes 3-6 months to show significant improvements. Content marketing and social media efforts generally show progressive results over 2-4 months. We provide regular reporting so you can track progress throughout your campaign."
            />
            
            <FaqItem 
              question="How much should I budget for digital marketing?" 
              answer="Digital marketing budgets vary based on your goals, industry, competition level, and the channels you're targeting. We work with businesses of all sizes and can create customized strategies to fit various budgets. During our consultation, we'll recommend an appropriate budget range based on your specific objectives."
            />
            
            <FaqItem 
              question="Which digital marketing channels are best for my business?" 
              answer="The most effective channels depend on your specific business, industry, target audience, and goals. We conduct thorough research to determine where your audience is most active and which channels will provide the best ROI for your business. Our strategies typically include a mix of channels for comprehensive coverage."
            />
            
            <FaqItem 
              question="How do you measure digital marketing success?" 
              answer="We establish clear KPIs aligned with your business goals at the beginning of our engagement. These might include website traffic, conversion rates, lead generation, sales, engagement metrics, or other relevant measures. We provide regular reports that track these metrics and demonstrate the ROI of your marketing investment."
            />
            
            <FaqItem 
              question="Do I need ongoing marketing or can I just do a one-time campaign?" 
              answer="While one-time campaigns can drive short-term results, digital marketing typically performs best as an ongoing effort. Search engine algorithms change, competition evolves, and consumer behaviors shift, requiring continuous optimization. We offer both project-based services and ongoing marketing packages to suit different needs."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-futurity-blue text-white">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Ready to Boost Your Digital Presence?</h2>
          <p className="text-xl mb-8 text-white/90 animate-on-scroll stagger-delay-1">
            Let's create a marketing strategy that drives real business results.
          </p>
          <div className="animate-on-scroll stagger-delay-2">
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-futurity-blue">
              <Link to="/contact">Get a Free Consultation</Link>
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

const CaseStudyItem = ({
  image,
  title,
  results
}: {
  image: string;
  title: string;
  results: string;
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
        <p className="text-futurity-gray">{results}</p>
      </div>
    </div>
  );
};

const FaqItem = ({
  question,
  answer
}: {
  question: string;
  answer: string;
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white">
      <h4 className="text-lg font-semibold mb-3">{question}</h4>
      <p className="text-futurity-gray">{answer}</p>
    </div>
  );
};

export default DigitalMarketingPage;
