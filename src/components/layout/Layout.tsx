import { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({
  children
}: LayoutProps) => {
  const isAnimationInitialized = useRef(false);
  // Add a ref to store the elements for cleanup
  const animatedElementsRef = useRef<NodeListOf<Element> | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Initialize intersection observer for scroll animations
  useEffect(() => {
    if (isAnimationInitialized.current) return;
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    };
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Delay initialization slightly for better performance
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
      // Store elements in the ref for cleanup
      animatedElementsRef.current = elements;
      isAnimationInitialized.current = true;
    }, 100);

    // Make adjacent sections have alternating backgrounds
    const applySectionAlternateBackgrounds = () => {
      const sections = document.querySelectorAll('section.section');
      let lastApplied = false;
      sections.forEach(section => {
        // Skip sections that already have a specific background
        if (section.classList.contains('bg-futurity-blue') || section.classList.contains('hero-main') || section.classList.contains('hero-secondary')) {
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

    // Initialize parallax effect for elements with parallax class
    const handleParallax = () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      const scrollY = window.scrollY;
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || '0.1';
        const yPos = -(scrollY * parseFloat(speed));
        element.setAttribute('style', `transform: translateY(${yPos}px)`);
      });
    };

    // Add scroll listener for parallax effect
    window.addEventListener('scroll', handleParallax);

    // Initial call to position elements
    handleParallax();
    return () => {
      // Use the ref for cleanup
      if (animatedElementsRef.current) {
        animatedElementsRef.current.forEach(el => observer.unobserve(el));
      }
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);
  return <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 py-0">
        {children}
      </main>
      <Footer />
    </div>;
};
export default Layout;