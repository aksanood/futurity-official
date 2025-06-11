import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Palette, 
  Users, 
  LayoutDashboard,
  MousePointer,
  PenTool
} from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const UiUxDesignPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-futurity-blue text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">UI/UX Design</h1>
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1">
              User-centered design that balances aesthetics with functionality
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
                title="Design That Drives Results" 
                subtitle="We create intuitive digital experiences that delight users and achieve business objectives."
              />
              <p className="mb-6">
                Our UI/UX design team combines creativity with user-centered methodologies to create digital experiences that are both beautiful and functional. We focus on understanding your users' needs and behaviors to design interfaces that are intuitive, engaging, and effective.
              </p>
              <p className="mb-8">
                From research and wireframing to visual design and usability testing, our comprehensive approach ensures that every element of your digital product is designed with purpose and precision.
              </p>
              
              <div className="space-y-4 mt-8">
                <BenefitItem text="User-focused design that enhances satisfaction and engagement" />
                <BenefitItem text="Intuitive interfaces that reduce learning curves and friction" />
                <BenefitItem text="Conversion-optimized experiences that drive business results" />
                <BenefitItem text="Research-based decisions that eliminate guesswork" />
              </div>
            </div>
            
            <div className="animate-on-scroll stagger-delay-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&q=80"
                  alt="UI/UX Design Services" 
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
              title="Our UI/UX Design Services"
              subtitle="Comprehensive design solutions to create exceptional user experiences"
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceFeatureCard
              icon={<Users size={24} />}
              title="User Research"
              description="Understand your users' needs, behaviors, and pain points through interviews, surveys, and testing"
            />
            
            <ServiceFeatureCard
              icon={<LayoutDashboard size={24} />}
              title="Information Architecture"
              description="Organize content and functionality in a logical, intuitive way for seamless navigation"
            />
            
            <ServiceFeatureCard
              icon={<PenTool size={24} />}
              title="Wireframing & Prototyping"
              description="Create interactive models to visualize and test concepts before development"
            />
            
            <ServiceFeatureCard
              icon={<Palette size={24} />}
              title="Visual Design"
              description="Craft visually appealing interfaces that align with your brand identity"
            />
            
            <ServiceFeatureCard
              icon={<MousePointer size={24} />}
              title="Interaction Design"
              description="Design engaging, seamless interactions that enhance the user experience"
            />
            
            <ServiceFeatureCard
              icon={<Users size={24} />}
              title="Usability Testing"
              description="Evaluate designs with real users to identify and address issues"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading 
            title="Our Design Process" 
            subtitle="A systematic approach to creating exceptional user experiences"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
            <ProcessCard 
              number="01"
              title="Discover"
              description="Research users and understand business goals"
            />
            
            <ProcessCard 
              number="02"
              title="Define"
              description="Identify problems and opportunities"
            />
            
            <ProcessCard 
              number="03"
              title="Design"
              description="Create wireframes and visual designs"
            />
            
            <ProcessCard 
              number="04"
              title="Test"
              description="Evaluate designs with real users"
            />
            
            <ProcessCard 
              number="05"
              title="Deliver"
              description="Finalize designs for development"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading 
              title="UI/UX Design Portfolio" 
              subtitle="Examples of our user-centered design work"
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioItem 
              image="https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&q=80"
              title="E-commerce Redesign"
              description="Improved conversion rate by 35% through intuitive navigation and streamlined checkout"
            />
            
            <PortfolioItem 
              image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
              title="Mobile Banking App"
              description="Enhanced user satisfaction with simplified transaction flows and personalized dashboard"
            />
            
            <PortfolioItem 
              image="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80"
              title="Healthcare Portal"
              description="Created accessible interface that improved patient engagement and reduced support calls by 40%"
            />
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading 
              title="Client Feedback" 
              subtitle="What our clients say about our UI/UX design services"
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard 
              quote="The team's user-centered approach completely transformed our app. User engagement increased by 60% and we've received amazing feedback about the intuitive interface."
              author="Sarah Johnson"
              company="HealthTech Solutions"
            />
            
            <TestimonialCard 
              quote="Their attention to detail and focus on user experience made all the difference. Our conversion rate has improved significantly since launching the redesigned website."
              author="Michael Chen"
              company="E-commerce Venture"
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
              subtitle="Common questions about our UI/UX design services"
              center
            />
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq1">
              <AccordionTrigger>What's the difference between UI and UX design?</AccordionTrigger>
              <AccordionContent>UI (User Interface) design focuses on the visual elements users interact with—like buttons, icons, spacing, typography, and colors. UX (User Experience) design encompasses the entire user journey and how users interact with a product, focusing on structure, usability, and function. While UI is about how the product looks, UX is about how it works. Our approach integrates both to create designs that are both visually appealing and functionally effective.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq2">
              <AccordionTrigger>How long does the UI/UX design process take?</AccordionTrigger>
              <AccordionContent>The timeline for a UI/UX project depends on its scope and complexity. A simple website redesign might take 4-6 weeks, while a complex application could require 8-12 weeks or more. Our process includes research, wireframing, visual design, prototyping, and testing—each phase is crucial for creating an effective final product. We'll provide a specific timeline during our initial consultation based on your project requirements.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq3">
              <AccordionTrigger>How do you measure the success of a UI/UX design?</AccordionTrigger>
              <AccordionContent>We measure success using both quantitative and qualitative metrics aligned with your business goals. Quantitative metrics might include conversion rates, task completion rates, time on task, error rates, and user engagement. Qualitative measures include user satisfaction surveys, feedback, and usability testing results. Before starting the project, we'll establish key performance indicators (KPIs) to track and evaluate the effectiveness of the design.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq4">
              <AccordionTrigger>Do you create design systems?</AccordionTrigger>
              <AccordionContent>Yes, we specialize in creating comprehensive design systems that ensure consistency across all digital touchpoints. A design system includes UI components, design patterns, guidelines, and principles—all documented for seamless implementation and future scaling. Design systems help maintain brand consistency, speed up development, and make it easier to update designs across multiple products or platforms.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq5">
              <AccordionTrigger>Can you work with our development team?</AccordionTrigger>
              <AccordionContent>Absolutely. We collaborate effectively with development teams to ensure smooth implementation of our designs. We provide detailed specifications, style guides, and assets, and can work directly with developers to address any questions during implementation. For clients without in-house development teams, we can also recommend trusted development partners or handle the full design-to-development process.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-futurity-blue text-white">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Ready to Create Exceptional User Experiences?</h2>
          <p className="text-xl mb-8 text-white/90 animate-on-scroll stagger-delay-1">
            Let's design digital products that users love and that drive business results.
          </p>
          <div className="animate-on-scroll stagger-delay-2">
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-futurity-blue">
              <Link to="/contact">Discuss Your Project</Link>
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

const TestimonialCard = ({
  quote,
  author,
  company
}: {
  quote: string;
  author: string;
  company: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="mb-4 text-amber-400 flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>
        </svg>
      </div>
      <p className="italic mb-4 text-futurity-gray">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-futurity-gray">{company}</p>
      </div>
    </div>
  );
};

export default UiUxDesignPage;
