import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { useModal } from '@/contexts/ModalContext';
import ContactForm from '@/components/ContactForm';
import AnimatedNumber from '../AnimatedNumber';

const HeroSection = () => {
  const { openModal, closeModal } = useModal();
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-futurity-blue via-futurity-blue-light to-futurity-blue py-16 md:py-24">
        {/* Hero Banner Background Image - always at the very back */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero%20banner.jpg" 
            alt="Futurity Hero Banner" 
            className="w-full h-full object-cover object-center opacity-60" 
            style={{ pointerEvents: 'none', userSelect: 'none' }}
            draggable="false"
          />
        </div>
        {/* Black overlay for text readability */}
        <div className="absolute inset-0 z-10 bg-black/50"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-futurity-orange/10 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-futurity-orange/5 rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        </div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid opacity-10 z-20"></div>
        <div className="container-wide relative z-30 flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-5xl mx-auto space-y-8 flex flex-col items-center justify-center text-center px-4 md:px-8">
            <div className="space-y-6 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium justify-center text-white">
                <Star className="w-4 h-4 text-futurity-orange" />
                <span>Trusted by 50+ businesses</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-on-scroll md:text-5xl lg:text-6xl text-center text-white">
                Innovative{' '}
                <span className="bg-gradient-to-r from-futurity-orange to-yellow-400 bg-clip-text text-transparent">
                  Digital Solutions
                </span>{' '}
                to Future-Proof <span className="bg-gradient-to-r from-futurity-orange to-yellow-400 bg-clip-text text-transparent">Your business</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto animate-on-scroll stagger-delay-1 text-center mb-0 md:mb-2 lg:mb-4 px-2 md:px-4">
                We are a full-service digital agency that combines strategic thinking with technical excellence. We deliver future-focused solutions including bespoke web development, comprehensive digital marketing, and transformative AI applications to help your business achieve sustainable growth.
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-scroll stagger-delay-2 w-full">
              <Button size="lg" className="bg-futurity-orange hover:bg-futurity-orange/90 text-white border-0 rounded-2xl px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-futurity-orange/25 transition-all duration-300" onClick={() => openModal(
                <ContactForm source="homepage" onSuccess={closeModal} />
              )}>
                <span className="flex items-center gap-2 justify-center">
                  Request a Consultation
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
              <Button asChild size="lg" variant="ghost" className="border-2 border-futurity-orange text-futurity-orange hover:bg-futurity-orange hover:text-white rounded-2xl px-8 py-6 text-lg font-semibold transition-all duration-300">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section - 3 cards, icon left, content right, separators only */}
      <section ref={statsRef} className="relative w-full" style={{ backgroundColor: '#FBFCFC' }}>
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Card 1 */}
            <div className="flex flex-row items-center justify-center gap-6 py-6 px-0 md:px-8 w-full md:w-1/3">
              {/* Trending Up/Arrow SVG - relevant, with gradient stroke */}
              <span className="flex-shrink-0 flex items-center justify-center">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="trend-gradient" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F97316"/>
                      <stop offset="1" stopColor="#0EA5E9"/>
                    </linearGradient>
                  </defs>
                  <rect x="4" y="4" width="48" height="48" rx="16" fill="#FFF7ED"/>
                  <path d="M16 36L28 24L36 32L44 20" stroke="url(#trend-gradient)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="16" cy="36" r="2.5" fill="#F97316"/>
                  <circle cx="28" cy="24" r="2.5" fill="#0EA5E9"/>
                  <circle cx="36" cy="32" r="2.5" fill="#F97316"/>
                  <circle cx="44" cy="20" r="2.5" fill="#0EA5E9"/>
                </svg>
              </span>
              <div className="flex flex-col items-center text-center">
                <AnimatedNumber value={150} suffix="%" className="text-3xl md:text-4xl font-bold text-futurity-orange" animate={statsInView} />
                <div className="text-gray-700 text-base font-medium">Average Growth</div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-row items-center justify-center gap-6 py-6 px-0 md:px-8 w-full md:w-1/3">
              {/* Star SVG - relevant, with gradient fill */}
              <span className="flex-shrink-0 flex items-center justify-center">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="star-gradient" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFD600"/>
                      <stop offset="1" stopColor="#F97316"/>
                    </linearGradient>
                  </defs>
                  <rect x="4" y="4" width="48" height="48" rx="16" fill="#FFFDE7"/>
                  <polygon points="28,12 33.09,23.26 45,24.27 36,32.14 38.18,44.02 28,37.77 17.82,44.02 20,32.14 11,24.27 22.91,23.26" fill="url(#star-gradient)" stroke="#F97316" strokeWidth="2.5" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className="flex flex-col items-center text-center">
                <AnimatedNumber value={100} suffix="%" className="text-3xl md:text-4xl font-bold text-futurity-orange" animate={statsInView} />
                <div className="text-gray-700 text-base font-medium">Client Satisfaction</div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex flex-row items-center justify-center gap-6 py-6 px-0 md:px-8 w-full md:w-1/3">
              {/* Briefcase SVG - relevant, with gradient stroke */}
              <span className="flex-shrink-0 flex items-center justify-center">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="briefcase-gradient" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0EA5E9"/>
                      <stop offset="1" stopColor="#F97316"/>
                    </linearGradient>
                  </defs>
                  <rect x="4" y="4" width="48" height="48" rx="16" fill="#E3F2FD"/>
                  <rect x="14" y="22" width="28" height="14" rx="4" stroke="url(#briefcase-gradient)" strokeWidth="2.5" fill="#fff"/>
                  <rect x="22" y="18" width="12" height="6" rx="2" fill="#FFD600" stroke="#F97316" strokeWidth="1.5"/>
                  <path d="M18 22V18C18 15.7909 19.7909 14 22 14H34C36.2091 14 38 15.7909 38 18V22" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M14 29H42" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              <div className="flex flex-col items-center text-center">
                <AnimatedNumber value={50} suffix="+" className="text-3xl md:text-4xl font-bold text-futurity-orange" animate={statsInView} />
                <div className="text-gray-700 text-base font-medium">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
