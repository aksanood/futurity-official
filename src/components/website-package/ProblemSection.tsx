
import React from 'react';
import { Eye, Users, TrendingDown } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-slate-900">
          Is Your Business <span className="text-orange-500">Invisible Online</span>?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Eye className="w-8 h-8 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Losing Credibility Daily</h3>
                <p className="text-gray-600 text-lg">Customers expect to find you online. Without a professional website, you look outdated and untrustworthy.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Users className="w-8 h-8 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Customers Going to Competitors</h3>
                <p className="text-gray-600 text-lg">While you're invisible online, your competitors are capturing your potential customers 24/7.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <TrendingDown className="w-8 h-8 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Complicated & Expensive Solutions</h3>
                <p className="text-gray-600 text-lg">DIY builders are confusing, and professional quotes break the bank. You need simple, fast, and affordable.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Don't Let This Be You</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every day without a professional website, you're losing credibility and customers. 
                We make getting online simple, fast, and affordable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
