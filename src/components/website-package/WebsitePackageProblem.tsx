
import React from 'react';
import { AlertTriangle, Clock, CreditCard } from 'lucide-react';

const WebsitePackageProblem = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Losing Credibility',
      description: 'Without a professional website, potential customers question your legitimacy before they even contact you.'
    },
    {
      icon: Clock,
      title: 'Wasting Time',
      description: "DIY builders promise simplicity but leave you frustrated, spending weeks on something that doesn't look professional."
    },
    {
      icon: CreditCard,
      title: 'Breaking the Bank',
      description: 'Traditional agencies quote thousands for basic websites, putting professional web design out of reach for startups.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-futurity-blue mb-6">
            Is Your Business Invisible Online?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Every day without a professional website, you're losing credibility and customers. 
            Don't get stuck with complicated DIY builders or quotes that break the bank. 
            We make getting online simple, fast, and affordable.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <problem.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-futurity-blue mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-600">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsitePackageProblem;
