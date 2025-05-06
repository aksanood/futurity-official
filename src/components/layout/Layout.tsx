
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Initialize intersection observer for scroll animations
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach((el) => observer.observe(el));

    // Make adjacent sections have alternating backgrounds
    const applySectionAlternateBackgrounds = () => {
      const sections = document.querySelectorAll('section.section');
      let lastApplied = false;
      
      sections.forEach((section) => {
        // Skip sections that already have a specific background
        if (section.classList.contains('bg-futurity-blue') || 
            section.classList.contains('hero-main') || 
            section.classList.contains('hero-secondary')) {
          return;
        }
        
        // Clear existing section-alternate class first
        section.classList.remove('section-alternate');
        
        // Apply alternate background to every other section
        if (!lastApplied) {
          section.classList.add('section-alternate');
          lastApplied = true;
        } else {
          lastApplied = false;
        }
      });
    };
    
    applySectionAlternateBackgrounds();

    // Mobile process step animations
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step) => observer.observe(step));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      processSteps.forEach((step) => observer.unobserve(step));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
