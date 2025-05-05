import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Bot, 
  Cpu, 
  FileText,
  MessageSquare,
  Image,
  Zap
} from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const AiDevelopmentPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-futurity-blue text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">AI Development</h1>
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1">
              Custom AI solutions that transform your business operations and customer experiences
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
                title="Harness the Power of AI" 
                subtitle="We develop intelligent solutions that automate processes and enhance experiences."
              />
              <p className="mb-6">
                Artificial intelligence is revolutionizing how businesses operate and interact with customers. Our AI development team creates custom solutions that leverage machine learning, natural language processing, and computer vision to solve complex problems and create new opportunities for your business.
              </p>
              <p className="mb-8">
                From intelligent chatbots and virtual assistants to predictive analytics and recommendation systems, we build AI applications that deliver measurable business value and competitive advantage.
              </p>
              
              <div className="space-y-4 mt-8">
                <BenefitItem text="Automate repetitive tasks to increase operational efficiency" />
                <BenefitItem text="Deliver personalized experiences that delight your customers" />
                <BenefitItem text="Gain actionable insights from your data with predictive analytics" />
                <BenefitItem text="Create innovative solutions that set you apart from competitors" />
              </div>
            </div>
            
            <div className="animate-on-scroll stagger-delay-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
                  alt="AI Development Services" 
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
              title="Our AI Development Services"
              subtitle="Intelligent solutions tailored to your business needs"
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceFeatureCard
              icon={<MessageSquare size={24} />}
              title="AI Chatbots"
              description="Intelligent conversational interfaces that enhance customer service and automate support"
            />
            
            <ServiceFeatureCard
              icon={<Bot size={24} />}
              title="Virtual Assistants"
              description="AI-powered assistants that perform tasks, provide information, and streamline operations"
            />
            
            <ServiceFeatureCard
              icon={<Cpu size={24} />}
              title="Predictive Analytics"
              description="Machine learning models that forecast trends and predict outcomes to inform decision-making"
            />
            
            <ServiceFeatureCard
              icon={<FileText size={24} />}
              title="Recommendation Systems"
              description="Personalized recommendations that enhance user experience and increase conversions"
            />
            
            <ServiceFeatureCard
              icon={<Image size={24} />}
              title="Computer Vision Solutions"
              description="AI systems that can identify, classify, and process images and video content"
            />
            
            <ServiceFeatureCard
              icon={<Zap size={24} />}
              title="Generative AI"
              description="Custom solutions that create text, images, code, and other content types for your specific needs"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading 
            title="Our AI Development Process" 
            subtitle="A structured approach to creating effective AI solutions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
            <ProcessCard 
              number="01"
              title="Discovery"
              description="Understand your business needs and identify AI opportunities"
            />
            
            <ProcessCard 
              number="02"
              title="Data Strategy"
              description="Assess data requirements and develop data management plans"
            />
            
            <ProcessCard 
              number="03"
              title="AI Model Development"
              description="Design and train AI models that address your specific needs"
            />
            
            <ProcessCard 
              number="04"
              title="Integration"
              description="Implement AI solutions within your existing systems and workflows"
            />
            
            <ProcessCard 
              number="05"
              title="Continuous Learning"
              description="Monitor performance and improve AI models over time"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading 
              title="AI Use Cases" 
              subtitle="Real-world applications of our AI solutions"
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <UseCaseCard 
              icon={<MessageSquare size={24} />}
              title="Customer Service"
              description="AI chatbot that reduced support tickets by 45% and improved customer satisfaction scores by 30%"
            />
            
            <UseCaseCard 
              icon={<FileText size={24} />}
              title="Content Generation"
              description="Generative AI solution that automated content creation, reducing production time by 60% while maintaining quality"
            />
            
            <UseCaseCard 
              icon={<Cpu size={24} />}
              title="Inventory Management"
              description="Predictive analytics system that improved inventory forecasting accuracy by 35% and reduced stockouts by 25%"
            />
            
            <UseCaseCard 
              icon={<Image size={24} />}
              title="Quality Control"
              description="Computer vision system that automated visual inspections, increasing detection rates by 50% and reducing costs by 40%"
            />
            
            <UseCaseCard 
              icon={<FileText size={24} />}
              title="Personalization"
              description="Recommendation engine that increased e-commerce conversion rates by 28% through personalized product suggestions"
            />
            
            <UseCaseCard 
              icon={<Bot size={24} />}
              title="Process Automation"
              description="AI workflow assistant that automated routine tasks, saving 20 hours per employee monthly and reducing errors by 90%"
            />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading 
              title="Technologies We Use" 
              subtitle="Cutting-edge technologies powering our AI solutions"
              center
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <TechnologyCard name="TensorFlow" />
            <TechnologyCard name="PyTorch" />
            <TechnologyCard name="OpenAI" />
            <TechnologyCard name="Langchain" />
            <TechnologyCard name="Hugging Face" />
            <TechnologyCard name="AWS AI Services" />
            <TechnologyCard name="Google Cloud AI" />
            <TechnologyCard name="Azure AI" />
            <TechnologyCard name="MLflow" />
            <TechnologyCard name="Scikit-learn" />
            <TechnologyCard name="NLTK" />
            <TechnologyCard name="spaCy" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-tight">
          <div className="text-center mb-12">
            <SectionHeading 
              title="Frequently Asked Questions" 
              subtitle="Common questions about AI development"
              center
            />
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq1">
              <AccordionTrigger>Do I need a large amount of data to implement AI solutions?</AccordionTrigger>
              <AccordionContent>The data requirements depend on the specific AI application. Some AI solutions can work effectively with modest amounts of data, while others require larger datasets for optimal performance. During our discovery phase, we assess your existing data and determine if it's sufficient for your goals. If needed, we can help with data acquisition and preparation strategies, or recommend AI approaches that work well with limited data.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq2">
              <AccordionTrigger>How long does it take to develop an AI solution?</AccordionTrigger>
              <AccordionContent>Development timelines vary widely based on the complexity of the solution, data availability, and integration requirements. Simple AI implementations might take 1-2 months, while more complex enterprise solutions can require 3-6 months or more. We break projects into phases with incremental deliverables, allowing you to see progress and value throughout the development process.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq3">
              <AccordionTrigger>How will AI benefit my specific business?</AccordionTrigger>
              <AccordionContent>AI can benefit businesses in numerous ways, including automating routine tasks, providing deeper customer insights, enabling personalized experiences, optimizing operations, and creating new product offerings. During our consultation, we'll discuss your specific business challenges and goals to identify the most valuable AI applications for your situation and calculate potential ROI.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq4">
              <AccordionTrigger>Do you use pre-built AI solutions or create custom ones?</AccordionTrigger>
              <AccordionContent>We utilize a hybrid approach, leveraging pre-built AI components where appropriate while developing custom elements for your specific needs. This approach balances development speed, cost-effectiveness, and customization. Pre-built components have been tested and refined, while custom development ensures the solution addresses your unique requirements and integrates with your existing systems.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq5">
              <AccordionTrigger>How do you handle data privacy and security in AI projects?</AccordionTrigger>
              <AccordionContent>Data privacy and security are paramount in all our AI projects. We implement industry best practices including data encryption, access controls, anonymization techniques, and secure development methodologies. We design solutions to comply with relevant regulations like GDPR, CCPA, and others applicable to your industry. We also provide clear documentation on data usage and can work within your existing security frameworks.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-futurity-blue text-white">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 text-white/90 animate-on-scroll stagger-delay-1">
            Let's discuss how AI can solve your business challenges and create new opportunities.
          </p>
          <div className="animate-on-scroll stagger-delay-2">
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-futurity-blue">
              <Link to="/contact">Schedule a Consultation</Link>
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

const UseCaseCard = ({
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
      <div className="h-12 w-12 rounded-full bg-futurity-blue/10 flex items-center justify-center mb-4 text-futurity-blue">
        {icon}
      </div>
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

export default AiDevelopmentPage;
