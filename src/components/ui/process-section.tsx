import { Link } from 'react-router-dom';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle, Users, Lightbulb, Rocket, TrendingUp } from 'lucide-react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  isLast?: boolean;
}

const ProcessStep = ({ number, title, description, icon, className, isLast }: ProcessStepProps) => {
  return (
    <div className={cn("relative flex flex-col items-center text-center", className)}>
      {/* Connection line - always show for visual continuity */}
      <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-futurity-blue/30 to-futurity-orange/30 transform -translate-x-1/2 z-0"></div>
      <div className="relative z-10 group flex flex-col items-center w-full">
        {/* Step number and icon */}
        <div className="relative mb-6">
          <div className="w-32 h-32 bg-white rounded-3xl shadow-lg border border-gray-100 flex items-center justify-center group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-futurity-blue to-futurity-blue-light rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-2 group-hover:from-futurity-orange group-hover:to-yellow-400 transition-all duration-500">
                {number}
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-futurity-orange rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4 text-futurity-blue group-hover:text-futurity-orange transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Understanding",
      description: "We deep-dive into your business, brand, goals, and target audience, coupled with thorough market and competitor research.",
      icon: <Users className="w-4 h-4" />
    },
    {
      number: "02", 
      title: "Strategy & Blueprint",
      description: "Based on our discovery, we craft a tailored, data-driven digital strategy and detailed blueprint for your success.",
      icon: <Lightbulb className="w-4 h-4" />
    },
    {
      number: "03",
      title: "Creation & Development", 
      description: "Our expert team brings the strategy to life, designing, developing, and building your bespoke digital solution with precision.",
      icon: <Rocket className="w-4 h-4" />
    },
    {
      number: "04",
      title: "Optimization & Growth",
      description: "We rigorously test, analyze performance, and continuously optimize your solution for maximum effectiveness and growth.",
      icon: <TrendingUp className="w-4 h-4" />
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: '#FBFCFC' }}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-futurity-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-futurity-orange/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-futurity-blue/10 rounded-full px-4 py-2 text-futurity-blue font-medium text-sm mb-4">
            <div className="w-2 h-2 bg-futurity-blue rounded-full"></div>
            Our Process
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-futurity-blue">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our four-step process is designed for clarity, collaboration, and results. We keep you informed and involved at every stage.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 mb-16">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === steps.length - 1}
              className={`animate-on-scroll ${index === 1 ? 'stagger-delay-1' : index === 2 ? 'stagger-delay-2' : index === 3 ? 'stagger-delay-3' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
