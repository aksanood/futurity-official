
import React from 'react';
import { Search, Palette, Rocket } from 'lucide-react';

const WebsitePackageProcess = () => {
  const steps = [
    {
      icon: Search,
      number: '1',
      title: 'Discovery',
      description: 'We learn about your business and your goals.'
    },
    {
      icon: Palette,
      number: '2',
      title: 'Creation',
      description: 'We design and build your bespoke website.'
    },
    {
      icon: Rocket,
      number: '3',
      title: 'Launch & Optimization',
      description: 'We get you online quickly and ensure you\'re set for peak performance.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-futurity-blue mb-6">
            From Idea to Launch in 3 Simple Steps
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Our streamlined process ensures you get online fast without compromising on quality
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-futurity-orange/30 z-0"></div>
              )}
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-futurity-orange rounded-full mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-futurity-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-futurity-blue mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsitePackageProcess;
