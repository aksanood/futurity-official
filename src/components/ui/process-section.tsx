
import { Link } from 'react-router-dom';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

const ProcessStep = ({ number, title, description, className }: ProcessStepProps) => {
  return (
    <div className={cn("flex items-start gap-6 group", className)}>
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-2 border-futurity-orange text-futurity-blue font-bold text-xl">
          {number}
        </div>
        {number !== "04" && (
          <div className="absolute top-16 left-1/2 w-0.5 h-20 bg-gray-200 -translate-x-1/2 hidden md:block"></div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-2 text-futurity-blue group-hover:text-futurity-orange transition-colors">
          {title}
        </h3>
        <p className="text-futurity-gray">{description}</p>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section className="section overflow-hidden relative">
      <div className="absolute top-20 right-0 w-64 h-64 bg-futurity-orange/5 rounded-full -z-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-futurity-blue/5 rounded-full -z-10 blur-3xl"></div>
      
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="animate-on-scroll">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-futurity-blue">
              Our process
            </h2>
            <p className="text-lg text-futurity-gray mb-10 max-w-xl">
              Our four-step process is designed for clarity, collaboration, and results. We keep you informed and involved at every stage, ensuring the final digital solution perfectly aligns with your business goals and resonates powerfully with your target audience.
            </p>
            <Button asChild className="group relative overflow-hidden bg-white border-2 border-futurity-orange text-futurity-blue hover:text-white hover:bg-futurity-orange transition-all duration-300">
              <Link to="/contact" className="flex items-center gap-2">
                <span className="relative z-10">Schedule a consultation</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </Button>
          </div>
          
          <div className="space-y-14 relative animate-on-scroll stagger-delay-1">
            <ProcessStep 
              number="01" 
              title="Discovery & Understanding" 
              description="We deep-dive into your business, brand, goals, and target audience, coupled with thorough market and competitor research, to build a robust foundation of understanding for your project."
            />
            <ProcessStep 
              number="02" 
              title="Strategy & Blueprint" 
              description="Based on our discovery, we craft a tailored, data-driven digital strategy and detailed blueprint outlining the specific solutions, technologies, and steps required to achieve your objectives."
            />
            <ProcessStep 
              number="03" 
              title="Creation & Development" 
              description="Our expert team brings the strategy to life, designing, developing, writing content, and building your bespoke digital solution with precision and creativity."
            />
            <ProcessStep 
              number="04" 
              title="Optimization & Growth" 
              description="We rigorously test, analyze performance, refine strategies, and continuously optimize your solution to ensure maximum effectiveness and sustainable growth over time."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
