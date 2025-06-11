import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  LayoutDashboard, 
  Palette, 
  Users, 
  Compass, 
  MessageSquare,
  Bot,
  FileText,
  Edit,
  Code,
  Globe,
  Image
} from 'lucide-react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Accordion } from '@/components/ui/accordion';
import { ReactNode } from 'react';

const Services = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <div className="overflow-x-hidden w-full">
        {/* Hero Section with gradient background */}
        <section className="pt-32 pb-24 bg-gradient-to-br from-futurity-blue via-futurity-blue-light to-futurity-blue relative overflow-hidden">
          <div className="bg-grid absolute inset-0 opacity-10"></div>
          <div className="container-wide relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Expert <span className="text-futurity-orange">Digital Solutions</span>: Our Services to Elevate Your <span className="text-futurity-orange">Brand</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1">
                Your vision, our expertise. Explore our range of digital services designed to transform your business.
              </p>
              <p className="text-white/80 text-lg mb-0 animate-on-scroll stagger-delay-2">
                Unlock your business's full potential with Futurity's integrated digital services. We blend creativity with technology to offer everything from foundational branding and website design for startups to advanced SEO strategies, AI-powered solutions, and comprehensive digital marketing management for established enterprises. Let us build the digital future of your business, together.
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-futurity-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        </section>

        {/* Services Overview with new two-column layout, no ServiceCard grid */}
        <section id="services-overview" className="section py-20 relative">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column: Introduction only */}
              <div className="animate-on-scroll flex flex-col gap-8 justify-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-futurity-blue">
                    How We Empower Your Digital Journey
                  </h2>
                  <p className="mb-6 text-lg text-futurity-gray">
                    At Futurity, we don't just offer digital services; we deliver pathways to digital growth and tangible business value. We understand that navigating the digital landscape can be complex, which is why our team of digital experts collaborates closely with you. Through our <span className="font-semibold text-futurity-orange">Discovery</span> process, we dive deep to understand your unique business objectives, ensuring every solution is perfectly tailored to drive meaningful results.
                  </p>
                  <p className="mb-6 text-lg text-futurity-gray">
                    Whether you're looking to captivate your audience with intuitive <span className="font-semibold text-futurity-blue">UX/UI design</span>, build a powerful new bespoke website, enhance your visibility with strategic <span className="font-semibold text-futurity-orange">SEO optimization</span>, or leverage the transformative power of <span className="font-semibold text-futurity-blue">AI app development</span>, we have the comprehensive expertise to elevate your brand and help you succeed.
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-base md:text-lg text-futurity-blue font-semibold bg-futurity-orange/10 rounded-lg px-5 py-4 shadow-sm">
                    Ready to see how these principles translate into specific solutions for your business? <br />
                    <span className="text-futurity-gray font-normal">Scroll down to explore our full suite of innovative digital services and find the perfect fit to achieve your ambitions.</span>
                  </p>
                </div>
              </div>

              {/* Right Column: Four Feature Cards */}
              <div className="animate-on-scroll flex flex-col gap-6 justify-center">
                <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-gray-100">
                  <h3 className="font-semibold text-futurity-blue text-lg mb-1 flex items-center gap-2">
                    <CheckCircle className="text-futurity-orange" size={20} /> Strategic Alignment
                  </h3>
                  <p className="text-futurity-gray text-base">Every digital strategy is meticulously crafted to align with your core business goals, ensuring our efforts directly contribute to your success.</p>
                </div>
                <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-gray-100">
                  <h3 className="font-semibold text-futurity-blue text-lg mb-1 flex items-center gap-2">
                    <CheckCircle className="text-futurity-orange" size={20} /> End-to-End Excellence
                  </h3>
                  <p className="text-futurity-gray text-base">From initial concept and Strategy through to Creation and implementation, we manage every detail to deliver seamless, high-quality digital solutions.</p>
                </div>
                <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-gray-100">
                  <h3 className="font-semibold text-futurity-blue text-lg mb-1 flex items-center gap-2">
                    <CheckCircle className="text-futurity-orange" size={20} /> Continuous Growth & Optimization
                  </h3>
                  <p className="text-futurity-gray text-base">Our commitment extends beyond launch, with ongoing support and data-driven Optimization to ensure your digital assets consistently perform at their peak.</p>
                </div>
                <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-gray-100">
                  <h3 className="font-semibold text-futurity-blue text-lg mb-1 flex items-center gap-2">
                    <CheckCircle className="text-futurity-orange" size={20} /> Collaborative & Transparent Partnership
                  </h3>
                  <p className="text-futurity-gray text-base">We believe in clear, open communication throughout our collaboration, keeping you informed and involved every step of the way, true to our value of Integrity.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Background decorative elements */}
          <div className="absolute top-1/4 -left-36 w-72 h-72 rounded-full bg-futurity-gray-light/30 blur-3xl -z-10"></div>
          <div className="absolute bottom-1/3 -right-36 w-72 h-72 rounded-full bg-futurity-orange/5 blur-3xl -z-10"></div>
        </section>

        {/* Web Design Service with offset image and gradient overlays */}
        <section id="web-design" className="section py-24 bg-gray-50 relative overflow-hidden">
          <div className="container-wide relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch min-h-[32rem]">
              {/* Mobile: h2, image, description, bullets, button. Desktop: desc left, image right */}
              <div className="flex flex-col h-full justify-center order-1 px-4 py-8 sm:px-8 sm:py-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 relative order-1">
                  <span className="inline-block bg-futurity-orange/10 rounded-lg px-4 py-2 text-futurity-blue">Strategic Web Design</span>
                </h2>
                {/* Remove SVG icon in mobile view */}
                <div className="block lg:hidden order-2 mb-6">
                  <div className="relative group flex flex-col items-center">
                    <div className="absolute -top-8 -left-8 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0 group-hover:bg-futurity-orange/20 transition-all duration-300 sm:w-40 sm:h-40"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80"
                      alt="Web Design" 
                      className="rounded-lg shadow-xl relative z-10 w-full mt-6 group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0 group-hover:bg-futurity-blue/20 transition-all duration-300 sm:w-40 sm:h-40"></div>
                  </div>
                </div>
                <p className="text-lg mb-6 text-futurity-gray order-3">
                  At Futurity, our Strategic Web Design services are dedicated to creating visually stunning and highly intuitive online presences that captivate your audience and embody your brand. We believe exceptional design is the cornerstone of a successful digital experience, blending artistry with user-centric principles to ensure every interaction is engaging and effective.
                </p>
                <div className="space-y-3 mb-8 order-4">
                  <BenefitItem text={<><span className="font-semibold">Bespoke Visual Concepts:</span> <span className="text-futurity-gray/90">Crafting unique, bespoke web designs that perfectly reflect your brand's personality and values.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Intuitive User Experience (UX) Design:</span> <span className="text-futurity-gray/90">Focusing on seamless navigation and engaging interfaces for an optimal user journey.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">User Interface (UI) Excellence:</span> <span className="text-futurity-gray/90">Creating visually appealing and easy-to-use interfaces that delight users.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Brand-Aligned Aesthetics:</span> <span className="text-futurity-gray/90">Ensuring your website's visual elements consistently reinforce your brand identity.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Conversion-Optimized Visuals:</span> <span className="text-futurity-gray/90">Designing layouts and elements that naturally guide users towards your key business goals.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Mobile-First Design Philosophy:</span> <span className="text-futurity-gray/90">Prioritizing responsive designs that look and function beautifully on all devices.</span></>} />
                </div>
                <div className="order-5">
                  <Button asChild className="rounded-full px-8 py-3 shadow-lg shadow-futurity-orange/20 hover:shadow-futurity-orange/30 transition-all w-full sm:w-auto">
                    <Link to="/services/web-design">Discover Our Web Design Approach</Link>
                  </Button>
                </div>
              </div>
              
              <div className="hidden lg:flex animate-on-scroll stagger-delay-1 flex-col h-full justify-center order-2">
                <div className="relative group flex flex-col items-center">
                  {/* SVG Icon for Web Design - right corner, bigger (desktop only) */}
                  <span className="absolute -top-24 right-0 translate-x-1/3 z-20">
                    <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="104" height="104" rx="28" fill="#FDE68A"/>
                      <path d="M32 72V32h40v40H32zm5-5h30V37H37v30zm8-15h14v4H45v-4zm0-12h14v4H45v-4z" fill="#F59E42"/>
                    </svg>
                  </span>
                  <div className="absolute -top-8 -left-8 w-40 h-40 bg-futurity-orange/10 rounded-lg z-0 group-hover:bg-futurity-orange/20 transition-all duration-300"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80"
                    alt="Web Design" 
                    className="rounded-lg shadow-xl relative z-10 w-full mt-10 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-futurity-blue/10 rounded-lg z-0 group-hover:bg-futurity-blue/20 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-100 to-transparent opacity-60 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-gray-200/50 to-transparent -z-10"></div>
        </section>

        {/* Web Development Section with modern card design */}
        <section id="web-development" className="section py-24 relative overflow-hidden">
          <div className="container-wide relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch min-h-[32rem]">
              {/* Mobile: h2, image, description, bullets, button. Desktop: image left, desc right */}
              <div className="flex flex-col h-full justify-center order-1 lg:order-2 px-4 py-8 sm:px-8 sm:py-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 relative order-1">
                  <span className="inline-block bg-futurity-blue/10 rounded-lg px-4 py-2 text-futurity-blue">Robust Web Development</span>
                </h2>
                {/* Remove SVG icon in mobile view */}
                <div className="block lg:hidden order-2 mb-6">
                  <div className="relative group flex flex-col items-center">
                    <div className="absolute -top-8 -left-8 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0 group-hover:bg-futurity-orange/20 transition-all duration-300 sm:w-40 sm:h-40"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
                      alt="Web Development" 
                      className="rounded-lg shadow-xl relative z-10 w-full mt-6 group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0 group-hover:bg-futurity-blue/20 transition-all duration-300 sm:w-40 sm:h-40"></div>
                  </div>
                </div>
                <p className="text-lg mb-6 text-futurity-gray order-3">
                  Our Robust Web Development services transform innovative designs into functional, high-performing digital realities. We build responsive, scalable, and secure websites and web applications engineered for reliability and an exceptional user experience. From dynamic e-commerce solutions to sophisticated web application development, our technical expertise brings your digital vision to life.
                </p>
                <div className="space-y-3 mb-8 order-4">
                  <BenefitItem text={<><span className="font-semibold">Custom Development:</span> <span className="text-futurity-gray/90">Building tailored websites and web applications from the ground up to meet your specific operational needs.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">E-commerce Platforms:</span> <span className="text-futurity-gray/90">Developing feature-rich online stores with secure payment gateway integration and seamless third-party integrations.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Content Management Systems (CMS):</span> <span className="text-futurity-gray/90">Implementing and customizing powerful CMS solutions for easy content updates and management.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Bespoke Web Applications:</span> <span className="text-futurity-gray/90">Crafting custom web applications, including database design and user authentication, to streamline your processes.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">API & Third-Party Integrations:</span> <span className="text-futurity-gray/90">Seamlessly connecting your website with essential third-party tools and services.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Performance & Security Focused:</span> <span className="text-futurity-gray/90">Optimizing for speed, reliability, and robust security with features like free SSL certificates.</span></>} />
                </div>
                <div className="order-5">
                  <Button asChild className="rounded-full px-8 py-3 shadow-lg shadow-futurity-blue/20 hover:shadow-futurity-blue/30 transition-all w-full sm:w-auto">
                    <Link to="/services/web-development">Explore Our Development Capabilities</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex animate-on-scroll stagger-delay-1 flex-col h-full justify-center order-2 lg:order-1">
                <div className="relative group flex flex-col items-center">
                  {/* SVG Icon for Web Development - left corner, bigger */}
                  <span className="absolute -top-24 left-0 -translate-x-1/3 z-20">
                    <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="104" height="104" rx="28" fill="#DBEAFE"/>
                      <path d="M38 68l-8-8 8-8m28 16l8-8-8-8M56 38l-16 28" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div className="absolute -top-8 -right-8 w-40 h-40 bg-futurity-orange/10 rounded-lg z-0 group-hover:bg-futurity-orange/20 transition-all duration-300"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
                    alt="Web Development" 
                    className="rounded-lg shadow-xl relative z-10 w-full mt-10 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-futurity-blue/10 rounded-lg z-0 group-hover:bg-futurity-blue/20 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-gray-50 to-transparent opacity-60 -z-10"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-gray-100/50 to-transparent -z-10"></div>
        </section>

        {/* UX/UI Design Section with floating accents */}
        <section id="ux-ui-design" className="section py-24 bg-gray-50 relative overflow-hidden">
          <div className="container-wide relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch min-h-[32rem]">
              {/* Mobile: h2, image, description, bullets, button. Desktop: desc left, image right */}
              <div className="flex flex-col h-full justify-center order-1 px-4 py-8 sm:px-8 sm:py-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 relative order-1">
                  <span className="inline-block bg-futurity-orange/10 rounded-lg px-4 py-2 text-futurity-blue">Intuitive UX/UI Design</span>
                </h2>
                {/* Remove SVG icon in mobile view */}
                <div className="block lg:hidden order-2 mb-6">
                  <div className="relative group flex flex-col items-center">
                    <div className="absolute -top-8 -left-8 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0 group-hover:bg-futurity-orange/20 transition-all duration-300 sm:w-40 sm:h-40"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&q=80"
                      alt="UX/UI Design" 
                      className="rounded-lg shadow-xl relative z-10 w-full mt-6 group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0 group-hover:bg-futurity-blue/20 transition-all duration-300 sm:w-40 sm:h-40"></div>
                  </div>
                </div>
                <p className="text-lg mb-2 text-futurity-gray order-3">
                  At Futurity, our UX/UI Design services are centered on creating deeply intuitive and engaging digital experiences that prioritize your users' needs and drive interaction. We combine meticulous user research with creative visual design to craft interfaces that are not only beautiful but also exceptionally easy to use, ultimately enhancing customer satisfaction and conversion rates.
                </p>
                <p className="text-base text-futurity-blue font-semibold mb-6 order-4">Our services are priced at £50/Hour.</p>
                <div className="space-y-3 mb-8 order-5">
                  <BenefitItem text={<><span className="font-semibold">User Research & Personas:</span> <span className="text-futurity-gray/90">Understanding your audience deeply to inform every design decision.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Information Architecture & Wireframing:</span> <span className="text-futurity-gray/90">Structuring content logically and creating clear blueprints for user journeys.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Prototyping & Usability Testing:</span> <span className="text-futurity-gray/90">Iteratively testing designs with real users to ensure optimal functionality and experience.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Stunning Visual Design:</span> <span className="text-futurity-gray/90">Crafting compelling and brand-aligned aesthetics that captivate and engage.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Comprehensive Design Systems:</span> <span className="text-futurity-gray/90">Building scalable and consistent design languages for your brand.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Insightful User Interviews:</span> <span className="text-futurity-gray/90">Gathering direct feedback to refine and perfect the user experience.</span></>} />
                </div>
                <div className="order-6">
                  <Button asChild className="rounded-full px-8 py-3 shadow-lg shadow-futurity-orange/20 hover:shadow-futurity-orange/30 transition-all w-full sm:w-auto">
                    <Link to="/services/ui-ux-design">Explore Our UX/UI Design Process</Link>
                  </Button>
                </div>
              </div>
              
              <div className="hidden lg:flex animate-on-scroll stagger-delay-1 flex-col h-full justify-center order-2">
                <div className="relative group flex flex-col items-center">
                  {/* SVG Icon for UX/UI Design - right corner, bigger */}
                  <span className="absolute -top-24 right-0 translate-x-1/3 z-20">
                    <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="104" height="104" rx="28" fill="#FCE7F3"/>
                      <circle cx="52" cy="52" r="18" fill="#EC4899"/>
                      <rect x="34" y="34" width="36" height="36" rx="10" fill="#F9A8D4"/>
                    </svg>
                  </span>
                  <div className="absolute -top-8 -left-8 w-40 h-40 bg-futurity-orange/10 rounded-lg z-0 group-hover:bg-futurity-orange/20 transition-all duration-300"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&q=80"
                    alt="UX/UI Design" 
                    className="rounded-lg shadow-xl relative z-10 w-full mt-10 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-futurity-blue/10 rounded-lg z-0 group-hover:bg-futurity-blue/20 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating UI elements as decoration */}
          <div className="absolute top-20 right-10 w-12 h-12 bg-futurity-orange/20 rounded-full animate-float opacity-50"></div>
          <div className="absolute bottom-40 left-20 w-16 h-16 bg-futurity-blue/10 rounded-lg rotate-12 animate-float opacity-50"></div>
          <div className="absolute top-1/2 right-[10%] w-8 h-8 border-2 border-futurity-orange/30 rounded-lg rotate-45 animate-float opacity-70 delay-700"></div>
        </section>

        {/* Branding Section with visually engaging layout */}
        <section id="branding" className="section py-24 relative overflow-hidden bg-white">
          <div className="container-wide relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch min-h-[32rem]">
              {/* Mobile: h2, image, description, bullets, button. Desktop: image left, desc right */}
              <div className="flex flex-col h-full justify-center order-1 lg:order-2 px-4 py-8 sm:px-8 sm:py-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 relative order-1">
                  <span className="inline-block bg-futurity-blue/10 rounded-lg px-4 py-2 text-futurity-blue">Branding &amp; Identity</span>
                </h2>
                {/* Remove SVG icon in mobile view */}
                <div className="block lg:hidden order-2 mb-6">
                  <div className="relative group flex flex-col items-center">
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0 group-hover:bg-futurity-orange/20 transition-all duration-300 sm:w-40 sm:h-40"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80"
                      alt="Branding" 
                      className="rounded-lg shadow-xl relative z-10 w-full mt-6 group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0 group-hover:bg-futurity-blue/20 transition-all duration-300 sm:w-40 sm:h-40"></div>
                  </div>
                </div>
                <p className="text-lg mb-6 text-futurity-gray order-3">
                  Our Branding services at Futurity are designed to forge a distinct and memorable identity that truly resonates with your target audience and builds lasting trust. We delve deep into your business ethos to develop a compelling brand strategy and striking visual identity that sets you apart and communicates your unique value effectively.
                </p>
                <div className="space-y-3 mb-8 order-4">
                  <BenefitItem text={<><span className="font-semibold">Brand Discovery &amp; Research:</span> <span className="text-futurity-gray/90">Uncovering the core of your brand to inform strategic positioning.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Strategic Brand Positioning:</span> <span className="text-futurity-gray/90">Defining your unique space in the market to connect with your ideal customers.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Complete Visual Identity Design:</span> <span className="text-futurity-gray/90">Crafting everything from your logo to a comprehensive visual system that represents your brand.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Compelling Brand Messaging:</span> <span className="text-futurity-gray/90">Developing a clear and persuasive voice that conveys your brand’s story and values.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Comprehensive Brand Guidelines:</span> <span className="text-futurity-gray/90">Providing a clear framework to ensure brand consistency across all touchpoints.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Strategic Brand Implementation Support:</span> <span className="text-futurity-gray/90">Assisting you in rolling out your new brand effectively.</span></>} />
                </div>
                <div className="order-5">
                  <Button asChild className="rounded-full px-8 py-3 shadow-lg shadow-futurity-blue/20 hover:shadow-futurity-blue/30 transition-all w-full sm:w-auto">
                    <Link to="/services/branding-services">Build Your Memorable Brand</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex animate-on-scroll stagger-delay-1 flex-col h-full justify-center order-2 lg:order-1">
                <div className="relative group flex flex-col items-center">
                  {/* SVG Icon for Branding - left corner, bigger */}
                  <span className="absolute -top-24 left-0 -translate-x-1/3 z-20">
                    <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="104" height="104" rx="28" fill="#C7D2FE"/>
                      <path d="M52 34l12 24H40l12-24zm0 8.8L47.2 52h6.67L36 44.365zM28 49h16v3H28v-3z" fill="#6366F1"/>
                    </svg>
                  </span>
                  <div className="absolute -top-8 -right-8 w-40 h-40 bg-futurity-orange/10 rounded-lg z-0 group-hover:bg-futurity-orange/20 transition-all duration-300"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80"
                    alt="Branding" 
                    className="rounded-lg shadow-xl relative z-10 w-full mt-10 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-futurity-blue/10 rounded-lg z-0 group-hover:bg-futurity-blue/20 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Brand-like decoration elements */}
          <div className="absolute top-1/3 left-4 w-40 h-40 rounded-full border-2 border-dashed border-futurity-orange/10 animate-spin-slow -z-10"></div>
          <div className="absolute bottom-1/3 right-4 w-60 h-60 rounded-full border-2 border-dashed border-futurity-blue/10 animate-spin-slow -z-10"></div>
        </section>

        {/* Content Writing Section with text-focused design */}
        <section id="content-writing" className="section py-24 bg-gray-50 relative overflow-hidden">
          <div className="container-wide relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch min-h-[32rem]">
              {/* Mobile: h2, image, description, bullets, button. Desktop: desc left, image right */}
              <div className="flex flex-col h-full justify-center order-1 px-4 py-8 sm:px-8 sm:py-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 relative order-1">
                  <span className="inline-block bg-futurity-orange/10 rounded-lg px-4 py-2 text-futurity-blue">Compelling Content Writing</span>
                </h2>
                {/* Remove SVG icon in mobile view */}
                <div className="block lg:hidden order-2 mb-6">
                  <div className="relative group flex flex-col items-center">
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0 group-hover:bg-futurity-orange/20 transition-all duration-300 sm:w-40 sm:h-40"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80"
                      alt="Content Writing" 
                      className="rounded-lg shadow-xl relative z-10 w-full mt-6 group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0 group-hover:bg-futurity-blue/20 transition-all duration-300 sm:w-40 sm:h-40"></div>
                  </div>
                </div>
                <p className="text-lg mb-6 text-futurity-gray order-3">
                  Our Content Writing services at Futurity deliver engaging and persuasive copy that captivates your audience, clearly communicates your unique value, and drives meaningful action. We craft SEO-friendly content across a variety of formats, designed to boost your online visibility, establish your authority, and convert readers into loyal customers.
                </p>
                <div className="space-y-3 mb-8 order-4">
                  <BenefitItem text={<><span className="font-semibold">SEO Content &amp; Blog Posts:</span> <span className="text-futurity-gray/90">Engaging articles and SEO content that attract organic traffic and build thought leadership.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Website &amp; Product Copy:</span> <span className="text-futurity-gray/90">Persuasive website content and product descriptions that inform and convert.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Marketing &amp; Sales Copy:</span> <span className="text-futurity-gray/90">Compelling ad/sales copy, email marketing content, and newsletters to fuel your campaigns.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Social Media Content:</span> <span className="text-futurity-gray/90">Shareable and engaging social media content tailored to each platform.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">In-Depth Content:</span> <span className="text-futurity-gray/90">Informative E-Books and technical writing to showcase your expertise.</span></>} />
                </div>
                <div className="order-5">
                  <Button asChild className="rounded-full px-8 py-3 shadow-lg shadow-futurity-orange/20 hover:shadow-futurity-orange/30 transition-all w-full sm:w-auto">
                    <Link to="/services/content-writing">Unlock the Power of Your Story</Link>
                  </Button>
                </div>
              </div>
              
              <div className="hidden lg:flex animate-on-scroll stagger-delay-1 flex-col h-full justify-center order-2">
                <div className="relative group flex flex-col items-center">
                  {/* SVG Icon for Content Writing - right corner, bigger */}
                  <span className="absolute -top-24 right-0 z-20">
                    <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="104" height="104" rx="28" fill="#FDE68A"/>
                      <path d="M32 72V32h40v40H32zm5-5h30V37H37v30zm8-15h14v4H45v-4zm0-12h14v4H45v-4z" fill="#F59E42"/>
                    </svg>
                  </span>
                  <div className="absolute -top-8 -left-8 w-40 h-40 bg-futurity-orange/10 rounded-lg z-0 group-hover:bg-futurity-orange/20 transition-all duration-300"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80"
                    alt="Content Writing" 
                    className="rounded-lg shadow-xl relative z-10 w-full mt-10 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-futurity-blue/10 rounded-lg z-0 group-hover:bg-futurity-blue/20 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Text-like decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-2 bg-futurity-orange/20 rounded-full"></div>
          <div className="absolute top-24 left-10 w-16 h-2 bg-futurity-orange/15 rounded-full"></div>
          <div className="absolute top-28 left-10 w-24 h-2 bg-futurity-orange/10 rounded-full"></div>
          
          <div className="absolute bottom-20 right-10 w-20 h-2 bg-futurity-blue/20 rounded-full"></div>
          <div className="absolute bottom-24 right-10 w-16 h-2 bg-futurity-blue/15 rounded-full"></div>
          <div className="absolute bottom-28 right-10 w-24 h-2 bg-futurity-blue/10 rounded-full"></div>
        </section>

        {/* AI Development Section with futuristic elements */}
        <section id="ai-development" className="section py-24 relative overflow-hidden">
          <div className="container-wide relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch min-h-[32rem]">
              {/* Mobile: h2, image, description, bullets, button. Desktop: image left, desc right */}
              <div className="flex flex-col h-full justify-center order-1 lg:order-2 px-4 py-8 sm:px-8 sm:py-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 relative order-1">
                  <span className="inline-block bg-futurity-blue/10 rounded-lg px-4 py-2 text-futurity-blue">Innovative AI App Development</span>
                </h2>
                {/* Remove SVG icon in mobile view */}
                <div className="block lg:hidden order-2 mb-6">
                  <div className="relative group flex flex-col items-center">
                    <div className="absolute -top-8 -left-8 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0 group-hover:bg-futurity-orange/20 transition-all duration-300 sm:w-40 sm:h-40"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
                      alt="AI Development" 
                      className="rounded-lg shadow-xl relative z-10 w-full mt-6 group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0 group-hover:bg-futurity-blue/20 transition-all duration-300 sm:w-40 sm:h-40"></div>
                  </div>
                </div>
                <p className="text-lg mb-6 text-futurity-gray order-3">
                  Leverage the power of Artificial Intelligence with Futurity's AI App Development services. We create intelligent, cutting-edge solutions designed to automate processes, personalize user experiences, and unlock new efficiencies for your business. Step into the future with bespoke AI applications that provide a distinct competitive advantage.
                </p>
                <div className="space-y-3 mb-8 order-4">
                  <BenefitItem text={<><span className="font-semibold">Custom Chatbots &amp; AI Agents:</span> <span className="text-futurity-gray/90">Developing intelligent conversational AI to enhance customer engagement and support.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Generative AI Development:</span> <span className="text-futurity-gray/90">Creating applications that can produce unique content, designs, and solutions.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Intelligent Recommendation Systems:</span> <span className="text-futurity-gray/90">Implementing AI to provide personalized suggestions and improve user engagement.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">AI-Powered Image Generation:</span> <span className="text-futurity-gray/90">Building solutions for automated and creative image creation and manipulation.</span></>} />
                  <BenefitItem text={<><span className="font-semibold">Personalized Learning Platforms:</span> <span className="text-futurity-gray/90">Developing AI-driven platforms for tailored educational experiences.</span></>} />
                </div>
                <div className="order-5">
                  <Button asChild className="rounded-full px-8 py-3 shadow-lg shadow-futurity-blue/20 hover:shadow-futurity-blue/30 transition-all w-full sm:w-auto">
                    <Link to="/services/ai-development">Discover Our AI Capabilities</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex animate-on-scroll stagger-delay-1 flex-col h-full justify-center order-2 lg:order-1">
                <div className="relative group flex flex-col items-center">
                  {/* SVG Icon for AI Development - left corner, bigger */}
                  <span className="absolute -top-24 left-0 -translate-x-1/3 z-20">
                    <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="104" height="104" rx="28" fill="#A7F3D0"/>
                      <circle cx="52" cy="52" r="18" fill="#10B981"/>
                      <path d="M52 42v12l8 4" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div className="absolute -top-8 -right-8 w-40 h-40 bg-futurity-orange/10 rounded-lg z-0 group-hover:bg-futurity-orange/20 transition-all duration-300"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
                    alt="AI Development" 
                    className="rounded-lg shadow-xl relative z-10 w-full mt-10 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-futurity-blue/10 rounded-lg z-0 group-hover:bg-futurity-blue/20 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>
          {/* AI-themed decorative elements */}
          <div className="absolute top-1/4 right-[10%] w-40 h-40 bg-gradient-to-br from-futurity-blue/5 to-futurity-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-[5%] w-60 h-60 bg-gradient-to-tr from-futurity-blue/5 to-futurity-orange/5 rounded-full blur-3xl"></div>
          {/* Circuit-like pattern */}
          <div className="absolute top-10 right-10 h-20 w-1 bg-futurity-orange/10"></div>
          <div className="absolute top-10 right-10 h-1 w-20 bg-futurity-orange/10"></div>
          <div className="absolute top-30 right-30 h-1 w-20 bg-futurity-orange/10"></div>
        </section>

        {/* CTA Section with modern gradient background */}
        <section className="py-24 bg-gradient-to-br from-futurity-blue via-futurity-blue-light to-futurity-blue relative overflow-hidden">
          <div className="bg-grid absolute inset-0 opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-futurity-blue-lighter/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-futurity-orange/10 to-transparent"></div>
          <div className="container-tight text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-on-scroll text-white">Ready to Start Your Project?</h2>
            <p className="text-xl mb-10 text-white/90 animate-on-scroll stagger-delay-1 max-w-2xl mx-auto">
              Let's discuss how Futurity's expert digital services can empower your business, drive growth, and create lasting value. We're committed to understanding your goals and delivering tailored solutions.
            </p>
            <div className="animate-on-scroll stagger-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-futurity-orange hover:bg-futurity-orange/90 text-white rounded-full px-8">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-futurity-blue border-white hover:bg-white hover:text-futurity-blue rounded-full px-8">
                <Link to="/portfolio">See our work</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

// Helper components
const BenefitItem = ({ text }: { text: ReactNode }) => {
  return (
    <div className="flex items-start group">
      <CheckCircle className="text-futurity-orange mr-3 mt-1 flex-shrink-0 group-hover:text-futurity-blue transition-colors duration-300" size={20} />
      <p className="group-hover:translate-x-0.5 transition-transform duration-300">{text}</p>
    </div>
  );
};

export default Services;
