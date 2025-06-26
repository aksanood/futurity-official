
import React from 'react';

const WebsitePackageProof = () => {
  const portfolioItems = [
    {
      image: '/placeholder.svg',
      title: 'Leamington Pizza Co.',
      description: 'A clean, mobile-first design focused on menus and online ordering.'
    },
    {
      image: '/placeholder.svg',
      title: 'Warwick Jewels',
      description: 'A sophisticated design to showcase high-value products.'
    },
    {
      image: '/placeholder.svg',
      title: 'Kenilworth Paws',
      description: 'A fun, approachable design with easy appointment booking.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#FBFCFC' }}>
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-futurity-blue mb-6">
            Our Work & Design Capabilities
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            See the quality and attention to detail we bring to every project
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-futurity-blue/10 to-futurity-orange/10 flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-futurity-blue mb-2">
                  Concept: {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-futurity-orange/10 border border-futurity-orange/20 rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-futurity-blue font-medium">
              <strong>Honest Disclosure:</strong> As a new agency, we're building our portfolio. 
              These concepts showcase the high-quality, bespoke work we deliver. 
              Be one of our first foundational clients!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsitePackageProof;
