
import React from 'react';
import { Monitor, Smartphone, Globe, Shield, Mail, Zap, MessageSquare, Clock } from 'lucide-react';

const WebsitePackageSolution = () => {
  const features = [
    {
      icon: Monitor,
      title: 'Bespoke 1-3 Page Website Design',
      description: 'Custom designed specifically for your business'
    },
    {
      icon: Smartphone,
      title: 'Fully Mobile-Responsive',
      description: 'Perfect on every device and screen size'
    },
    {
      icon: Globe,
      title: 'Free Domain Name',
      description: 'Non-premium domain included at no extra cost'
    },
    {
      icon: Shield,
      title: 'FREE Secure Hosting for 1 Year',
      description: 'Reliable hosting with SSL certificate included'
    },
    {
      icon: Shield,
      title: 'FREE SSL Certificate for Security',
      description: 'Keep your visitors data safe and secure'
    },
    {
      icon: Mail,
      title: '1 Professional Email Address',
      description: 'Look professional with your own domain email'
    },
    {
      icon: MessageSquare,
      title: 'Contact Form & Social Media Integration',
      description: 'Easy ways for customers to reach you'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Get online quickly without the wait'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#FBFCFC' }}>
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-futurity-blue mb-6">
            Your Complete Website Solution for Just{' '}
            <span className="text-futurity-orange">£250 + VAT</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to establish a professional online presence, 
            all included in one transparent, affordable package.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-futurity-orange/10 rounded-lg mb-4">
                <feature.icon className="w-6 h-6 text-futurity-orange" />
              </div>
              <h3 className="text-lg font-semibold text-futurity-blue mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsitePackageSolution;
