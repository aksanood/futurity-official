
import React from 'react';
import { Shield, TrendingUp, Users } from 'lucide-react';

const WebsitePackageAfterLaunch = () => {
  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#FBFCFC' }}>
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-futurity-blue mb-6">
            Your Growth Partner, Even After Launch Day
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Once your website is live, you have full ownership. For clients who want complete peace of mind, 
            we offer an optional monthly maintenance plan to keep your site updated and running smoothly.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-futurity-orange/20">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-futurity-orange/10 rounded-full mb-4">
                <Shield className="w-8 h-8 text-futurity-orange" />
              </div>
              <h3 className="text-2xl font-bold text-futurity-blue mb-2">
                Startup Maintenance Plan
              </h3>
              <div className="text-3xl font-bold text-futurity-orange mb-4">
                From £15/month
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <TrendingUp className="w-5 h-5 text-futurity-orange mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Regular website updates (pictures, menu items)</span>
              </div>
              <div className="flex items-start">
                <Users className="w-5 h-5 text-futurity-orange mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Social media posts</span>
              </div>
              <div className="flex items-start">
                <Shield className="w-5 h-5 text-futurity-orange mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Technical support</span>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> A 12-month minimum contract applies to all maintenance plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsitePackageAfterLaunch;
