
import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Shield, 
  Mail, 
  Zap, 
  CheckCircle
} from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Your Complete Website Solution for Just <span className="text-orange-500">£250</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to get your business online professionally, quickly, and affordably.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <Globe className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-slate-900">Bespoke 1-3 Page Website Design</h3>
            <p className="text-gray-600">Custom-designed to represent your unique business perfectly.</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <Smartphone className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-slate-900">Fully Mobile-Responsive</h3>
            <p className="text-gray-600">Looks perfect on every device - phone, tablet, and desktop.</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <Globe className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-slate-900">Free Domain Name</h3>
            <p className="text-gray-600">Your choice of .co.uk or .com domain included at no extra cost.</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-slate-900">FREE Hosting & SSL</h3>
            <p className="text-gray-600">Secure hosting for 1 year and SSL certificate included.</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <Mail className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-slate-900">Professional Email</h3>
            <p className="text-gray-600">1 professional email address matching your domain name.</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <CheckCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-slate-900">Contact Form & Social Links</h3>
            <p className="text-gray-600">Easy ways for customers to get in touch and find you online.</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <Zap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-slate-900">Fast Delivery</h3>
            <p className="text-gray-600">Your website will be live within days, not weeks or months.</p>
          </div>
          
          <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-orange-500 mb-2">£250</div>
            <h3 className="text-lg font-semibold mb-2 text-slate-900">Complete Package</h3>
            <p className="text-gray-600">No hidden fees. No monthly charges. Just one simple price.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
