
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/section-heading';
import ServiceCard from '@/components/ui/service-card';
import PortfolioCard from '@/components/ui/portfolio-card';
import TestimonialCard from '@/components/ui/testimonial-card';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layout as LayoutIcon, Smartphone, Palette, BarChart, FileSearch, Image, Globe, LayoutDashboard, Compass, FileText } from 'lucide-react';

const Index = () => {
  // Refs for parallax elements
  const parallaxRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  // Handle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Parallax for hero section
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
      
      // Parallax for process section
      if (processRef.current) {
        const rect = processRef.current.getBoundingClientRect();
        const scrollPercentage = (window.innerHeight - rect.top) / window.innerHeight;
        
        if (scrollPercentage > 0 && scrollPercentage < 1) {
          const elements = processRef.current.querySelectorAll('.process-step');
          elements.forEach((el, index) => {
            const delay = index * 0.1;
            const translateY = Math.max(0, (scrollPercentage - delay) * 40);
            (el as HTMLElement).style.transform = `translateY(-${translateY}px)`;
            (el as HTMLElement).style.opacity = `${Math.min(1, (scrollPercentage - delay) * 2)}`;
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      {/* Modern Hero Section with Parallax Effect */}
      <section className="hero-main relative min-h-screen flex items-center overflow-hidden">
        <div 
          ref={parallaxRef}
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-110"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')",
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-futurity-blue/95 to-futurity-blue/80"></div>
        
        <div className="container-wide relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="overflow-hidden mb-2">
                <span className="inline-block text-futurity-orange font-semibold text-lg animate-on-scroll tracking-wider">
                  DIGITAL GROWTH EXPERTS
                </span>
              </div>
              
              <div className="overflow-hidden">
                <h1 className="animate-on-scroll text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Smarter <span className="text-futurity-orange">Digital</span> Solutions for <span className="text-futurity-orange">Measurable</span> Growth
                </h1>
              </div>
              
              <div className="overflow-hidden">
                <p className="animate-on-scroll stagger-delay-1 text-lg md:text-xl mb-8 max-w-2xl text-white/90">
                  From bespoke website design and development to strategic digital marketing and AI solutions, Futurity provides the expertise you need to thrive online.
                </p>
              </div>
              
              <div className="animate-on-scroll stagger-delay-2 flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg" className="bg-futurity-orange hover:bg-futurity-orange/90 text-white border-0 group transition-all">
                  <Link to="/contact" className="flex items-center">
                    Get Started
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white bg-transparent hover:bg-white/10 backdrop-blur-sm"
                >
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="backdrop-blur-sm bg-white/5 p-4 rounded-lg animate-on-scroll stagger-delay-3 transform hover:scale-105 transition-all">
                  <div className="text-4xl font-bold text-futurity-orange mb-2">150%</div>
                  <div className="text-white/90">Average Client Growth</div>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-4 rounded-lg animate-on-scroll stagger-delay-4 transform hover:scale-105 transition-all">
                  <div className="text-4xl font-bold text-futurity-orange mb-2">100%</div>
                  <div className="text-white/90">Client Satisfaction</div>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-4 rounded-lg animate-on-scroll stagger-delay-5 transform hover:scale-105 transition-all">
                  <div className="text-4xl font-bold text-futurity-orange mb-2">50+</div>
                  <div className="text-white/90">Solutions Deployed</div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative animate-on-scroll">
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-futurity-orange rounded-lg z-0 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                  alt="Team collaboration" 
                  className="rounded-lg shadow-xl max-w-full relative z-10 animate-on-scroll"
                />
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-white/20 rounded-lg z-0"></div>
              </div>
            </div>
          </div>
          
          {/* Animated Bottom Wave */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
              <path fill="#fff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,170.7C672,149,768,107,864,90.7C960,75,1056,85,1152,96C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* About Section - alternating background */}
      <section className="section relative overflow-hidden">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <SectionHeading
              title="Who We Are"
              subtitle="Futurity is a team of digital experts passionate about creating exceptional digital experiences that drive business growth."
            />
            <p className="mb-6">
              Launched in 2024, Futurity was born from a collective passion for empowering businesses to navigate and succeed in the evolving digital landscape.
            </p>
            <p className="mb-6">
              Our team brings together dedicated specialists across UX/UI design, bespoke development, strategic marketing, and cutting-edge AI. We believe in a collaborative approach, working closely with you to transform challenges into opportunities.
            </p>
            <p className="mb-6">
              Our focus is on building more than just websites or campaigns; we forge strategic partnerships aimed at delivering exceptional, user-centric digital experiences that resonate deeply and achieve tangible results for your business.
            </p>
          </div>
          <div className="animate-on-scroll stagger-delay-1 relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-futurity-orange/10 rounded-lg z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Futurity Team" 
              className="rounded-lg shadow-lg relative z-10 transform transition-transform hover:scale-105 duration-500"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0"></div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-futurity-orange/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-futurity-blue/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
      </section>

      {/* Services Section - with alternating background */}
      <section id="services" className="section section-alternate relative overflow-hidden">
        <div className="container-wide">
          <SectionHeading
            title="Our Services"
            subtitle="We offer a comprehensive range of digital services to help your business thrive in the digital landscape."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Image size={28} />}
              title="Web Design"
              description="Beautiful, responsive websites that captivate your audience"
              href="/services/web-design"
              className="animate-on-scroll transform hover:translate-y-[-8px] transition-all duration-300"
            />
            <ServiceCard
              icon={<Globe size={28} />}
              title="Web Development"
              description="Custom web applications built with modern technologies"
              href="/services/web-development"
              className="animate-on-scroll stagger-delay-1 transform hover:translate-y-[-8px] transition-all duration-300"
            />
            <ServiceCard
              icon={<LayoutDashboard size={28} />}
              title="UX/UI Design"
              description="User-centered design for intuitive digital experiences"
              href="/services/ui-ux-design"
              className="animate-on-scroll stagger-delay-2 transform hover:translate-y-[-8px] transition-all duration-300"
            />
            <ServiceCard
              icon={<Compass size={28} />}
              title="Branding"
              description="Distinctive brand identities that make you stand out"
              href="/services/branding-services"
              className="animate-on-scroll transform hover:translate-y-[-8px] transition-all duration-300"
            />
            <ServiceCard
              icon={<FileText size={28} />}
              title="Content Writing"
              description="Compelling copy that engages and drives action"
              href="/services/content-writing"
              className="animate-on-scroll stagger-delay-1 transform hover:translate-y-[-8px] transition-all duration-300"
            />
            <div className="animate-on-scroll stagger-delay-2 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-futurity-blue to-futurity-blue/90 text-white shadow-lg transform hover:translate-y-[-8px] transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Need a Custom Solution?</h3>
              <p className="mb-6">Let's discuss how we can help you achieve your business goals.</p>
              <Button asChild className="bg-futurity-orange text-white hover:bg-futurity-orange/90 border-0">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-futurity-orange/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-futurity-blue/10 blur-3xl"></div>
      </section>

      {/* Our Process Section - New Addition */}
      <section ref={processRef} className="section py-24 relative overflow-hidden">
        <div className="container-wide">
          <SectionHeading
            title="Our Process"
            subtitle="Our four-step process is designed for clarity, collaboration, and results. We keep you informed and involved at every stage, ensuring the final digital solution perfectly aligns with your business goals."
            center
          />
          
          <div className="relative mt-20">
            {/* Central Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-futurity-blue to-futurity-orange transform -translate-x-1/2 z-0 hidden md:block"></div>
            
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-24">
              {/* Step 1 */}
              <div className="process-step md:pr-12 relative opacity-0">
                <div className="hidden md:block absolute right-0 top-8 w-8 h-8 bg-futurity-blue rounded-full border-4 border-white shadow-lg transform translate-x-1/2 z-10"></div>
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all relative z-1">
                  <div className="text-futurity-orange text-2xl font-bold mb-4">01</div>
                  <h3 className="text-xl font-bold text-futurity-blue mb-3">Discovery & Understanding</h3>
                  <p className="text-gray-600">
                    We deep-dive into your business, brand, goals, and target audience, coupled with thorough market and competitor research, to build a robust foundation of understanding for your project.
                  </p>
                </div>
              </div>
              
              {/* Empty cell for step 1 */}
              <div className="hidden md:block"></div>
              
              {/* Empty cell for step 2 */}
              <div className="hidden md:block"></div>
              
              {/* Step 2 */}
              <div className="process-step md:pl-12 relative opacity-0">
                <div className="hidden md:block absolute left-0 top-8 w-8 h-8 bg-futurity-blue rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10"></div>
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all relative z-1">
                  <div className="text-futurity-orange text-2xl font-bold mb-4">02</div>
                  <h3 className="text-xl font-bold text-futurity-blue mb-3">Strategy & Blueprint</h3>
                  <p className="text-gray-600">
                    Based on our discovery, we craft a tailored, data-driven digital strategy and detailed blueprint outlining the specific solutions, technologies, and steps required to achieve your objectives.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="process-step md:pr-12 relative opacity-0">
                <div className="hidden md:block absolute right-0 top-8 w-8 h-8 bg-futurity-blue rounded-full border-4 border-white shadow-lg transform translate-x-1/2 z-10"></div>
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all relative z-1">
                  <div className="text-futurity-orange text-2xl font-bold mb-4">03</div>
                  <h3 className="text-xl font-bold text-futurity-blue mb-3">Creation & Development</h3>
                  <p className="text-gray-600">
                    Our expert team brings the strategy to life, designing, developing, writing content, and building your bespoke digital solution with precision and creativity.
                  </p>
                </div>
              </div>
              
              {/* Empty cell for step 3 */}
              <div className="hidden md:block"></div>
              
              {/* Empty cell for step 4 */}
              <div className="hidden md:block"></div>
              
              {/* Step 4 */}
              <div className="process-step md:pl-12 relative opacity-0">
                <div className="hidden md:block absolute left-0 top-8 w-8 h-8 bg-futurity-blue rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10"></div>
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all relative z-1">
                  <div className="text-futurity-orange text-2xl font-bold mb-4">04</div>
                  <h3 className="text-xl font-bold text-futurity-blue mb-3">Optimization & Growth</h3>
                  <p className="text-gray-600">
                    We rigorously test, analyze performance, refine strategies, and continuously optimize your solution to ensure maximum effectiveness and sustainable growth over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-16">
            <Button asChild size="lg" className="bg-futurity-orange hover:bg-futurity-orange/90 text-white group">
              <Link to="/contact" className="flex items-center">
                Schedule a Consultation
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-futurity-blue/5 rounded-full translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-futurity-orange/5 rounded-full -translate-x-1/2 blur-3xl"></div>
      </section>

      {/* Portfolio Section */}
      <section className="section section-alternate">
        <div className="container-wide">
          <SectionHeading
            title="Our Recent Work"
            subtitle="Check out some of our recent projects that showcase our expertise and creativity."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioCard
              image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
              title="TechVision Rebrand"
              category="Web Design & Development"
              href="/portfolio/tech-vision"
              className="animate-on-scroll transform hover:translate-y-[-8px] transition-all duration-300"
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              title="Eco Mobile App"
              category="Mobile Development"
              href="/portfolio/eco-app"
              className="animate-on-scroll stagger-delay-1 transform hover:translate-y-[-8px] transition-all duration-300"
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
              title="Finance Dashboard"
              category="UI/UX & Development"
              href="/portfolio/finance-dashboard"
              className="animate-on-scroll stagger-delay-2 transform hover:translate-y-[-8px] transition-all duration-300"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-futurity-orange text-white hover:bg-futurity-orange/90 border-0 group">
              <Link to="/portfolio" className="flex items-center">
                View All Projects
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section with star ratings */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it – here's what our clients have to say about working with us."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Futurity transformed our online presence with a stunning website that perfectly captures our brand identity. The results have exceeded our expectations."
              name="Sarah Johnson"
              position="Marketing Director"
              company="TechVision"
              rating={5}
              className="animate-on-scroll transform hover:translate-y-[-8px] transition-all duration-300"
            />
            <TestimonialCard
              quote="The mobile app developed by Futurity has been a game-changer for our business. Their team was professional, responsive, and delivered on time and within budget."
              name="Michael Chen"
              position="CEO"
              company="Eco Solutions"
              rating={5}
              className="animate-on-scroll stagger-delay-1 transform hover:translate-y-[-8px] transition-all duration-300"
            />
            <TestimonialCard
              quote="Their strategic approach to digital marketing has significantly increased our online visibility and lead generation. We couldn't be happier with the results."
              name="Emily Rodriguez"
              position="CMO"
              company="FinanceHub"
              rating={4}
              className="animate-on-scroll stagger-delay-2 transform hover:translate-y-[-8px] transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section - New Addition */}
      <section className="section section-alternate">
        <div className="container-tight">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Here are some common questions we receive about our services and how we can help your business thrive in the digital landscape."
            center
          />
          
          <div className="mt-12">
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1" className="animate-on-scroll">
                <AccordionTrigger>What services does Futurity offer?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">
                    Futurity is a full-service digital agency. We offer a comprehensive range of services designed to empower your business's growth. Our core offerings include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-3">
                    <li>UX/UI Design: Creating intuitive and engaging user experiences.</li>
                    <li>Branding: Developing strong, memorable brand identities.</li>
                    <li>Digital Marketing: Covering SEO, Content Marketing, Social Media Management, Email Marketing, and PPC Advertising.</li>
                    <li>Content Writing: Crafting compelling content for various platforms.</li>
                    <li>AI App Development: Building innovative AI-powered solutions.</li>
                    <li>Website Development: Offering tiered packages (Startup, Standard, Premium, E-Commerce) tailored to different business needs.</li>
                  </ul>
                  <p>We provide bespoke solutions designed to meet your specific goals.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="animate-on-scroll stagger-delay-1">
                <AccordionTrigger>How can content creation help my website and business?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">
                    High-quality content is crucial for attracting and engaging your target audience. Our content writing services can help your website by:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-3">
                    <li>Improving your search engine ranking through SEO-optimized content.</li>
                    <li>Establishing your brand as an authority in your industry with informative blog posts and articles.</li>
                    <li>Converting visitors into customers with persuasive website copy, product descriptions, and ad campaigns.</li>
                    <li>Building relationships and driving engagement through newsletters and social media content.</li>
                    <li>Providing value to your audience with resources like e-books and technical writing.</li>
                  </ul>
                  <p>Essentially, effective content drives traffic, builds trust, and supports your business objectives.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="animate-on-scroll stagger-delay-2">
                <AccordionTrigger>Why is web design important for my brand?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">
                    Your website is often the first interaction a potential customer has with your business, making web design critically important for your brand. A professional, well-designed website:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-3">
                    <li>Creates a strong first impression and builds credibility.</li>
                    <li>Reflects your brand identity and values consistently.</li>
                    <li>Provides a positive user experience (UX), making it easy for visitors to find information and take desired actions.</li>
                    <li>Helps you stand out from competitors with a bespoke design tailored to your unique brand.</li>
                    <li>Supports your marketing efforts and contributes to lead generation and conversions.</li>
                  </ul>
                  <p>A strategic web design is an investment in your brand's perception and your business's success.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="animate-on-scroll">
                <AccordionTrigger>How does social media management benefit my business?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">
                    Social media is a powerful tool for connecting with your audience and expanding your reach. Our social media management services can benefit your business by:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-3">
                    <li>Increasing brand awareness and visibility.</li>
                    <li>Driving traffic to your website.</li>
                    <li>Engaging with customers and building a loyal community.</li>
                    <li>Providing a channel for customer service and feedback.</li>
                    <li>Gathering valuable insights into your target market.</li>
                    <li>Running targeted advertising campaigns to reach new customers.</li>
                  </ul>
                  <p>Effective social media management builds relationships and enhances your online presence.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="animate-on-scroll stagger-delay-1">
                <AccordionTrigger>What is your process for working with clients?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">
                    We follow a clear, collaborative process to ensure your project is successful and meets your goals. Our process typically involves:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-3">
                    <li>Discovery: We start by understanding your business, goals, and target audience.</li>
                    <li>Strategy: We develop a tailored digital strategy outlining the best approach and services for your needs.</li>
                    <li>Creation: Our expert team designs, develops, and crafts the necessary assets based on the approved strategy.</li>
                    <li>Optimization: We refine and optimize the solutions to ensure maximum performance and results.</li>
                  </ul>
                  <p>We work closely with you at each stage to ensure transparency and alignment.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="animate-on-scroll stagger-delay-2">
                <AccordionTrigger>Do you offer website maintenance plans?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes, we offer comprehensive maintenance plans for the websites we develop. These plans ensure your website remains updated, secure, and performing optimally. Maintenance services can include regular updates, content changes (like pictures, menu items, blog posts, services), and can be bundled with other digital marketing services like social media marketing, email campaigns, and CRM depending on the package. Our maintenance plans typically require a 12-month minimum contract.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7" className="animate-on-scroll stagger-delay-3">
                <AccordionTrigger>Can you develop custom AI applications?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Absolutely. We offer AI App Development services to help businesses leverage the power of artificial intelligence. Our capabilities include developing solutions such as chatbots, AI agents, image generation tools, recommendation systems, personalized learning platforms, and generative AI applications. We can create bespoke AI tools to streamline your operations, enhance customer experiences, and drive innovation.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-futurity-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-futurity-orange/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-futurity-orange/10 blur-3xl"></div>
        
        <div className="container-tight text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 text-white/90 animate-on-scroll stagger-delay-1 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with our digital expertise.
          </p>
          <div className="animate-on-scroll stagger-delay-2">
            <Button asChild size="lg" className="bg-futurity-orange hover:bg-futurity-orange/90 text-white border-0 group">
              <Link to="/contact" className="flex items-center">
                Get Started Today
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
