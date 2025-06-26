
import React from 'react';
import { Check, X } from 'lucide-react';

const WebsitePackageComparison = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-futurity-blue mb-6">
            Ditch the DIY Stress & Expensive Agencies
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            See why the Futurity Startup Package is the smart choice for local businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Futurity Column */}
          <div className="bg-gradient-to-b from-futurity-orange/5 to-futurity-orange/10 rounded-lg p-6 border-2 border-futurity-orange relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-futurity-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                RECOMMENDED
              </span>
            </div>
            <h3 className="text-xl font-bold text-futurity-blue mb-6 text-center pt-4">
              The Futurity Startup Package
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Bespoke & Professional Design</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Expert Guidance</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Fast & Focused</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">One Affordable Price</span>
              </li>
            </ul>
          </div>

          {/* DIY Builders Column */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
              DIY Website Builders
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Looks Generic</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Time Consuming & Stressful</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">No Expert Support</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Hidden Ongoing Costs</span>
              </li>
            </ul>
          </div>

          {/* Traditional Agencies Column */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
              Traditional Agencies
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Huge Expense (£2,000+)</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Slow & Complex Process</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Overkill for a Startup</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Lack of Personal Focus</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsitePackageComparison;
