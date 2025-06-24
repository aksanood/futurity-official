
import React from 'react';

const ProofSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-slate-900">
          Our Work & Design Capabilities
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          See the quality and attention to detail we bring to every project
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">🍕</div>
                <div className="text-lg font-semibold">Modern Restaurant Website</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Concept: Leamington Pizza Co.</h3>
              <p className="text-gray-600">A clean, mobile-first design focused on menus and online ordering.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">💎</div>
                <div className="text-lg font-semibold">Elegant Jewelry Store</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Concept: Warwick Jewels</h3>
              <p className="text-gray-600">A sophisticated design to showcase high-value products beautifully.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">🐕</div>
                <div className="text-lg font-semibold">Pet Care Service</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Concept: Kenilworth Paws</h3>
              <p className="text-gray-600">A fun, approachable design with easy appointment booking.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg">
            <strong>As a new agency, we're building our portfolio.</strong> These concepts showcase the high-quality, 
            bespoke work we deliver. Be one of our first foundational clients and help us grow together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
