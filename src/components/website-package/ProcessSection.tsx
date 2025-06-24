
import React from 'react';

const ProcessSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-slate-900">
          From Idea to Launch in <span className="text-orange-500">3 Simple Steps</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Discovery</h3>
              <p className="text-gray-600 text-lg">
                We learn about your business, your goals, and what makes you unique. This ensures your website perfectly represents your brand.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Creation</h3>
              <p className="text-gray-600 text-lg">
                We design and build your bespoke website, ensuring it's mobile-responsive, fast-loading, and conversion-focused.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Launch</h3>
              <p className="text-gray-600 text-lg">
                We get you online quickly with all the technical setup handled, so you can start growing your business immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
