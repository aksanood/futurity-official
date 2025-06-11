import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, FileSearch, LayoutDashboard, Smartphone } from 'lucide-react';
import PriceCard from '@/components/ui/price-card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import FAQSection from '@/components/ui/faq-section';

const WebDesignPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-futurity-blue text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">
              Bespoke <span className="text-futurity-orange">Web Design</span> Services for Engaging <span className="text-futurity-orange">Digital Experiences</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1">
              Welcome to Futurity, where exceptional <span className="text-futurity-orange">web design</span> is the cornerstone of a powerful online presence. We specialise in creating custom, responsive websites that not only look stunning but are strategically engineered to deliver exceptional user experiences (UX) and drive meaningful engagement. Our approach combines creative flair with user-centric design principles to ensure your website perfectly reflects your brand and captivates your target audience from the very first click.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section bg-gradient-to-br from-futurity-orange/10 via-white to-futurity-blue/5">
        <div className="container-wide px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            {/* Left: Intro and paragraphs */}
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-futurity-blue">
                Designing <span className="text-futurity-orange">Digital Experiences</span> That Captivate and Convert
              </h2>
              <p className="mb-6 text-lg text-futurity-blue font-medium leading-relaxed">
                At Futurity, we believe exceptional <span className="text-futurity-orange">web design</span> is where artistry meets strategy. We design websites that are not only visually stunning but also perform excellently, providing a seamless and engaging user experience (UX) across all devices. Our web design team masterfully blends creativity with a deep understanding of user psychology to build websites that effectively represent your brand and captivate your audience. We focus on creating designs that are not only visually impressive but are also intuitively navigable and strategically structured to guide users towards your business goals.
              </p>
              <p className="mb-8 text-base text-futurity-blue/90 font-semibold">
                Every website we design is conceived with key principles at its core:
              </p>
              <p className="mt-10 mb-6 text-base text-futurity-blue font-semibold">
                Our <span className="text-futurity-orange">Discovery</span> process ensures we thoroughly understand your vision and objectives before moving into the <span className="text-futurity-orange">Strategy</span> and <span className="text-futurity-orange">Creation</span> phases, resulting in a website design that truly works for you.
              </p>
              <p className="mb-0 text-base text-futurity-blue/90">
                Now that you understand our approach, read on to explore the specific <span className="text-futurity-orange">web design</span> packages, features, and transparent pricing we offer to bring your vision to life.
              </p>
            </div>
            {/* Right: Timeline principles */}
            <div className="animate-on-scroll relative">
              <div className="space-y-8 relative before:absolute before:top-0 before:left-6 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-futurity-orange/40 before:to-futurity-blue/30 before:rounded-full">
                {/* Principle 1 */}
                <div className="relative flex items-start group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-futurity-orange/90 shadow-lg ring-4 ring-futurity-orange/20 z-10">
                    <svg width="28" height="28" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#fff"/><circle cx="16" cy="16" r="8" fill="#F59E42" fillOpacity="0.18"/><circle cx="16" cy="16" r="4" fill="#F59E42"/><path d="M16 8v4M16 20v4M8 16h4M20 16h4" stroke="#F59E42" strokeWidth="2" strokeLinecap="round"/></svg>
                  </div>
                  <div className="ml-8 bg-white/90 rounded-xl shadow-md px-6 py-5 border-l-4 border-futurity-orange/80 w-full">
                    <h4 className="text-lg font-bold text-futurity-orange mb-1">Bespoke & Brand-Focused</h4>
                    <p className="text-base text-futurity-blue/90">Custom designs meticulously tailored to reflect your unique brand identity and achieve specific business objectives.</p>
                  </div>
                </div>
                {/* Principle 2 */}
                <div className="relative flex items-start group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-futurity-blue/90 shadow-lg ring-4 ring-futurity-blue/20 z-10">
                    <svg width="28" height="28" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#fff"/><path d="M16 18c-3.314 0-6 1.343-6 3v1a1 1 0 001 1h10a1 1 0 001-1v-1c0-1.657-2.686-3-6-3z" fill="#0A1840"/><circle cx="16" cy="12" r="4" fill="#F59E42"/></svg>
                  </div>
                  <div className="ml-8 bg-white/90 rounded-xl shadow-md px-6 py-5 border-l-4 border-futurity-blue/80 w-full">
                    <h4 className="text-lg font-bold text-futurity-blue mb-1">User-Centric Journey</h4>
                    <p className="text-base text-futurity-blue/90">An unwavering focus on the user, ensuring intuitive navigation, clear information architecture, and engaging interactions that boost conversions.</p>
                  </div>
                </div>
                {/* Principle 3 */}
                <div className="relative flex items-start group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-futurity-orange/80 shadow-lg ring-4 ring-futurity-orange/20 z-10">
                    <svg width="28" height="28" fill="none" viewBox="0 0 32 32"><rect x="4" y="8" width="20" height="12" rx="3" fill="#fff"/><rect x="8" y="12" width="12" height="8" rx="2" fill="#F59E42"/><rect x="14" y="18" width="4" height="2" rx="1" fill="#0A1840"/></svg>
                  </div>
                  <div className="ml-8 bg-white/90 rounded-xl shadow-md px-6 py-5 border-l-4 border-futurity-orange/80 w-full">
                    <h4 className="text-lg font-bold text-futurity-orange mb-1">Responsive by Design</h4>
                    <p className="text-base text-futurity-blue/90">Ensuring your website delivers a flawless and adaptive experience on desktops, tablets, and smartphones.</p>
                  </div>
                </div>
                {/* Principle 4 */}
                <div className="relative flex items-start group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-futurity-blue/80 shadow-lg ring-4 ring-futurity-blue/20 z-10">
                    <svg width="28" height="28" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#fff"/><path d="M21.5 21.5L26 26" stroke="#F59E42" strokeWidth="2" strokeLinecap="round"/><circle cx="15" cy="15" r="6" stroke="#F59E42" strokeWidth="2" fill="#F59E42" fillOpacity="0.18"/></svg>
                  </div>
                  <div className="ml-8 bg-white/90 rounded-xl shadow-md px-6 py-5 border-l-4 border-futurity-blue/80 w-full">
                    <h4 className="text-lg font-bold text-futurity-blue mb-1">SEO-Informed Principles</h4>
                    <p className="text-base text-futurity-blue/90">Integrating design elements and site structures that are inherently search engine friendly, laying a strong foundation for visibility.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Comparison Section - Updated Web Design Packages */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-futurity-blue">Our Web Design Packages</h2>
            <p className="text-lg text-futurity-blue/90 font-medium">
              Find the perfect foundation for your online presence. Each of our web design packages is crafted to deliver a bespoke, mobile-responsive website that not only looks exceptional but is also built for performance and a seamless user experience. Explore our options below and let's discuss how we can tailor a solution to your exact needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 items-stretch">
            {/* Startup Package */}
            <div className="bg-white rounded-2xl shadow-lg border border-futurity-orange/20 flex flex-col h-full">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-bold text-futurity-orange mb-4 min-h-[56px] flex items-end">Startup Package</h3>
                  <p className="text-futurity-blue/80 mb-6 text-sm font-medium min-h-[48px] flex items-end">Perfect for: New businesses, local shops, and professionals needing a strong, foundational online presence quickly.</p>
                  <div className="text-3xl font-extrabold text-futurity-blue mb-4">£499 <span className="text-base font-normal">+ VAT</span></div>
                  <ul className="mb-8 mt-2 space-y-2 text-futurity-blue/90 text-base flex-1">
                    <li><BenefitItem text="Bespoke Web Design tailored to your brand" /></li>
                    <li><BenefitItem text="Mobile-Responsive ensuring a great look on all devices" /></li>
                    <li><BenefitItem text="Up to 4 Pages (e.g., Home, About, Services, Contact)" /></li>
                    <li><BenefitItem text="Free Domain Name (non-premium, first year)" /></li>
                    <li><BenefitItem text="Free Hosting for the First Year" /></li>
                    <li><BenefitItem text="Free SSL Certificate for security" /></li>
                    <li><BenefitItem text="1 Free Email Address" /></li>
                    <li><BenefitItem text="Free Setup" /></li>
                    <li><BenefitItem text="Fast Delivery" /></li>
                  </ul>
                </div>
                <Button asChild size="lg" className="bg-futurity-orange text-white hover:bg-futurity-blue mt-auto">
                  <Link to="/contact">Get a Quote for Your Startup Site</Link>
                </Button>
              </div>
            </div>

            {/* Standard Package - Recommended */}
            <div className="bg-white rounded-2xl shadow-2xl border-4 border-futurity-blue relative flex flex-col h-full ring-4 ring-futurity-blue/20">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-futurity-blue text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg border-2 border-white">Recommended</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-bold text-futurity-blue mb-4 min-h-[56px] flex items-end">Standard Package</h3>
                  <p className="text-futurity-blue/80 mb-6 text-sm font-medium min-h-[48px] flex items-end">Perfect for: Growing businesses looking for a more comprehensive website with enhanced design features and integrations.</p>
                  <div className="text-3xl font-extrabold text-futurity-blue mb-4">From £799 <span className="text-base font-normal">+ VAT</span></div>
                  <ul className="mb-8 mt-2 space-y-2 text-futurity-blue/90 text-base flex-1">
                    <li><BenefitItem text="Bespoke Web Design reflecting your evolving brand" /></li>
                    <li><BenefitItem text="Mobile-Responsive for a consistent user experience" /></li>
                    <li><BenefitItem text="Up to 8 Pages" /></li>
                    <li><BenefitItem text="Social Media Integration" /></li>
                    <li><BenefitItem text="Google Maps Integration" /></li>
                    <li><BenefitItem text="Free Domain Name (non-premium, first year)" /></li>
                    <li><BenefitItem text="Free Hosting for the First Year" /></li>
                    <li><BenefitItem text="Free SSL Certificate" /></li>
                    <li><BenefitItem text="1 Free Email Address" /></li>
                    <li><BenefitItem text="Free Setup" /></li>
                    <li><BenefitItem text="Fast Delivery" /></li>
                  </ul>
                </div>
                <Button asChild size="lg" className="bg-futurity-blue text-white hover:bg-futurity-orange mt-auto">
                  <Link to="/contact">Discuss Your Standard Project</Link>
                </Button>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-2xl shadow-lg border border-futurity-orange/20 flex flex-col h-full">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-bold text-futurity-orange mb-4 min-h-[56px] flex items-end">Premium Package</h3>
                  <p className="text-futurity-blue/80 mb-6 text-sm font-medium min-h-[48px] flex items-end">Perfect for: Businesses aiming for a significant online impact with advanced design elements, branding integration, and initial SEO setup.</p>
                  <div className="text-3xl font-extrabold text-futurity-blue mb-4">From £999 <span className="text-base font-normal">+ VAT</span></div>
                  <ul className="mb-8 mt-2 space-y-2 text-futurity-blue/90 text-base flex-1">
                    <li><BenefitItem text="Bespoke Web Design with advanced visual elements" /></li>
                    <li><BenefitItem text="Mobile-Responsive and optimized for engagement" /></li>
                    <li><BenefitItem text="Up to 10+ Pages" /></li>
                    <li><BenefitItem text="Premium Logo Design included" /></li>
                    <li><BenefitItem text="CMS Integration (e.g., WordPress)" /></li>
                    <li><BenefitItem text="Blog Setup" /></li>
                    <li><BenefitItem text="Social Media Integration" /></li>
                    <li><BenefitItem text="Google Maps Integration" /></li>
                    <li><BenefitItem text="Basic SEO Setup" /></li>
                    <li><BenefitItem text="Landing Page Design" /></li>
                    <li><BenefitItem text="Premium Domain Name (first year)" /></li>
                    <li><BenefitItem text="Free Hosting for the First Year" /></li>
                    <li><BenefitItem text="Free SSL Certificate" /></li>
                    <li><BenefitItem text="3 Free Email Addresses" /></li>
                    <li><BenefitItem text="Free Setup" /></li>
                    <li><BenefitItem text="Fast Delivery" /></li>
                  </ul>
                </div>
                <Button asChild size="lg" className="bg-futurity-orange text-white hover:bg-futurity-blue mt-auto">
                  <Link to="/contact">Request a Premium Consultation</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Advanced Solutions Panel - Full Width, Button at Bottom */}
          <div className="bg-futurity-blue/90 rounded-2xl p-8 text-white w-full mt-8 shadow-lg flex flex-col items-center max-w-none">
            <div className="w-full max-w-3xl text-center">
              <h4 className="text-2xl font-bold mb-2 text-futurity-orange">See More Advanced Solution</h4>
              <p className="mb-6 text-white/90">For businesses requiring e-commerce functionality, bespoke web application features, or extensive database integration, our <span className="font-semibold">E-Commerce Package (From £850)</span> offers a comprehensive solution. This can include features like e-commerce store setup, payment gateway integration, and bespoke web app design &amp; development. We also offer fully custom solutions beyond these packages.</p>
            </div>
            <div className="w-full flex justify-center mt-2">
              <Button asChild size="lg" className="bg-futurity-orange text-white hover:bg-futurity-blue font-bold px-8 py-4 min-w-[320px] max-w-full w-auto">
                <Link to="/services/web-development" className="block w-full text-center whitespace-normal">E-Commerce & Custom Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading
              title="Delving Deeper: Our Core Web Design Capabilities"
              center
            />
            <p className="mt-4 max-w-2xl mx-auto text-lg text-futurity-blue/90 font-medium">
              Beyond our structured packages, we offer a comprehensive suite of web design services tailored to meet your specific business needs and project goals. Whether you're starting fresh, looking to enhance user engagement, or aiming to boost conversions, our design expertise is at your disposal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Custom Website Design */}
            <ServiceFeatureCard
              icon={
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="16" fill="#F59E42"/>
                  <rect x="7" y="10" width="18" height="12" rx="3" fill="#fff"/>
                  <rect x="11" y="14" width="10" height="4" rx="2" fill="#0A1840"/>
                </svg>
              }
              title="Custom Website Design"
              description="We specialise in creating unique, bespoke web designs from the ground up. Our process ensures your website is a true reflection of your brand identity, meticulously crafted to engage your target audience and achieve your strategic objectives. We focus on intuitive navigation, clear messaging, and a visual appeal that sets you apart."
            />
            {/* 2. Responsive & Mobile-First Design */}
            <ServiceFeatureCard
              icon={
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="16" fill="#0A1840"/>
                  <rect x="10" y="7" width="12" height="18" rx="3" fill="#fff"/>
                  <rect x="14" y="23" width="4" height="2" rx="1" fill="#F59E42"/>
                  <rect x="13" y="10" width="6" height="8" rx="2" fill="#F59E42" fillOpacity="0.18"/>
                </svg>
              }
              title="Responsive & Mobile-First Design"
              description="In today's multi-device world, a responsive website is non-negotiable. We design with a mobile-first approach, ensuring your website adapts perfectly to all screen sizes – from desktops to tablets and smartphones – providing every visitor with a seamless and optimal viewing experience."
            />
            {/* 3. Strategic UI/UX Design */}
            <ServiceFeatureCard
              icon={
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="16" fill="#F59E42"/>
                  <circle cx="16" cy="16" r="8" fill="#fff"/>
                  <path d="M12 18c0-2 4-2 4-2s4 0 4 2" stroke="#0A1840" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="14" cy="14" r="1" fill="#F59E42"/>
                  <circle cx="18" cy="14" r="1" fill="#F59E42"/>
                </svg>
              }
              title="Strategic UI/UX Design"
              description="Our strategic UI/UX design ensures your website is intuitive and deeply engaging. Through vital user research and thoughtful journey mapping via wireframes and prototypes, we craft interfaces that enhance usability, ultimately driving user satisfaction and conversions."
            />
            {/* 4. Website Redesign & Modernisation */}
            <ServiceFeatureCard
              icon={
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="16" fill="#0A1840"/>
                  <path d="M10 22v-8a2 2 0 012-2h8" stroke="#F59E42" strokeWidth="2" strokeLinecap="round"/>
                  <rect x="14" y="10" width="8" height="8" rx="2" fill="#fff"/>
                  <rect x="16" y="12" width="4" height="4" rx="1" fill="#F59E42"/>
                </svg>
              }
              title="Website Redesign & Modernisation"
              description="Is your current website looking outdated or underperforming? We can transform your existing site with a modern redesign focused on improved aesthetics, enhanced functionality, better user experience, and alignment with your current brand strategy. Let us help you revitalise your online presence."
            />
            {/* 5. High-Impact Landing Page Design */}
            <ServiceFeatureCard
              icon={
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="16" fill="#F59E42"/>
                  <rect x="8" y="12" width="16" height="8" rx="2" fill="#fff"/>
                  <rect x="12" y="16" width="8" height="2" rx="1" fill="#0A1840"/>
                  <rect x="14" y="14" width="4" height="2" rx="1" fill="#F59E42"/>
                </svg>
              }
              title="High-Impact Landing Page Design"
              description="Maximise your marketing campaign success with high-converting landing pages. We design focused, persuasive landing pages with clear calls-to-action, specifically engineered to capture leads, drive sales, and achieve specific campaign goals."
            />
            {/* 6. Detailed Wireframing & Prototyping */}
            <ServiceFeatureCard
              icon={
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="16" fill="#0A1840"/>
                  <rect x="10" y="10" width="12" height="12" rx="3" fill="#fff"/>
                  <rect x="14" y="14" width="4" height="4" rx="2" fill="#F59E42"/>
                  <rect x="12" y="12" width="8" height="2" rx="1" fill="#F59E42" fillOpacity="0.18"/>
                </svg>
              }
              title="Detailed Wireframing & Prototyping"
              description="Visualise your website's structure and user flow before development begins. Our wireframing and prototyping services provide a crucial blueprint, allowing for early feedback and iteration. This ensures the final design is strategically sound and aligned with your vision, forming a key part of our user-centred design process."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading 
            title="Our Web Design Process" 
            subtitle="A Structured Approach to Your Perfect Website"
          />
          <p className="text-left max-w-2xl ml-0 md:ml-0 lg:ml-0 mt-4 mb-10 text-lg text-futurity-blue/90 font-medium">
            Our collaborative web design process ensures we create a website that truly aligns with your vision and goals, focusing on user-centric design and impactful visuals every step of the way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <ProcessCard 
              number="01"
              title="Discovery"
              description="We start by diving deep into your business, understanding your goals, target audience, and specific design requirements to lay a strong foundation."
              bgColor="bg-futurity-orange/10"
            />
            <ProcessCard 
              number="02"
              title="Strategic Design"
              description="Next, we translate insights into tangible designs, creating wireframes, user journeys, and initial visual design concepts tailored to your needs."
              bgColor="bg-futurity-blue/10"
            />
            <ProcessCard 
              number="03"
              title="Creation & Refinement"
              description="Here, we meticulously craft and iterate on the visual elements, develop interactive prototypes, and refine the user experience (UX) until it's pixel-perfect."
              bgColor="bg-futurity-orange/10"
            />
            <ProcessCard 
              number="04"
              title="Delivery & Support"
              description="We deliver the finalised, development-ready designs and can provide ongoing design support to ensure your vision is flawlessly executed and maintained."
              bgColor="bg-futurity-blue/10"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeading 
              title="Recent Web Design Projects" 
              subtitle="See examples of our recent web design work"
              center
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioItem 
              image="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80"
              title="E-commerce Website"
              category="Web Design"
            />
            
            <PortfolioItem 
              image="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80"
              title="Corporate Site"
              category="Web Design"
            />
            
            <PortfolioItem 
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              title="Healthcare Portal"
              category="Web Design"
            />
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section - Card Grid Style */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-sm md:text-base font-medium uppercase tracking-wider text-futurity-gray mb-2">Web Design Answers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#0A1840"/><circle cx="20" cy="20" r="10" fill="#fff" fillOpacity="0.15"/><circle cx="20" cy="20" r="5" fill="#FF9800"/><path d="M20 10v10l7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-futurity-blue">How long does it take to design a website?</h3>
              <p className="text-futurity-gray text-base">The timeline typically ranges from 4 to 12 weeks, depending on project complexity, number of pages, and features. Simple sites are faster; complex e-commerce or custom apps take longer.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="20" fill="#FF9800"/><circle cx="14" cy="18" r="4" fill="#fff"/><circle cx="26" cy="18" r="4" fill="#fff"/><ellipse cx="14" cy="27" rx="6" ry="3" fill="#fff" fillOpacity="0.5"/><ellipse cx="26" cy="27" rx="6" ry="3" fill="#fff" fillOpacity="0.5"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-futurity-blue">How much does a website design cost?</h3>
              <p className="text-futurity-gray text-base">Costs vary based on requirements: number of pages, design complexity, custom features, and extra services like content or SEO. We provide detailed quotes after learning your needs.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="20" fill="#00B8D9"/><path d="M12 24l8 4 8-4M12 24V16l8-4 8 4v8" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round"/><path d="M16 20l4 2 4-2" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-futurity-blue">Will my website be mobile-friendly?</h3>
              <p className="text-futurity-gray text-base">Absolutely! All our websites are fully responsive and tested on multiple devices and screen sizes for a flawless experience everywhere.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="20" fill="#673AB7"/><path d="M20 12l3.09 6.26L30 19.27l-5 4.87L26.18 32 20 27.77 13.82 32 15 24.14l-5-4.87 6.91-1.01L20 12z" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-futurity-blue">Can you redesign my existing website?</h3>
              <p className="text-futurity-gray text-base">Yes, we offer redesign services to update and improve your current site. We can work with your content and structure, giving your site a fresh, modern look and better functionality.</p>
            </div>
            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="20" fill="#E91E63"/><path d="M20 12a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3 6v2a3 3 0 0 1-6 0v-2c-1.5-1.5-3-3.5-3-6a6 6 0 0 1 6-6z" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round"/><path d="M18 32h4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-futurity-blue">Do you provide website maintenance after launch?</h3>
              <p className="text-futurity-gray text-base">Yes, we offer ongoing maintenance and support to keep your site secure, up-to-date, and performing optimally. Maintenance plans are available for all needs and budgets.</p>
            </div>
            {/* Card 6 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="20" fill="#43A047"/><path d="M16 24v-4a2 2 0 1 1 4 0v4h4a2 2 0 1 1 0 4h-4v-4a2 2 0 1 0-4 0v4h-4a2 2 0 1 1 0-4h4z" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-futurity-blue">Can you build custom features or integrations?</h3>
              <p className="text-futurity-gray text-base">Definitely! We can develop custom features, integrations, and web applications tailored to your business needs—just let us know your requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-futurity-blue text-white">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Ready to Bring Your Vision to Life with <span className="text-futurity-orange">Stunning Web Design</span>?
          </h2>
          <p className="text-xl mb-8 text-white/90 animate-on-scroll stagger-delay-1">
            You've seen our approach, our packages, and the design capabilities we offer. Now, let's collaborate to create a bespoke website that not only captivates your audience but also achieves your unique business objectives. Our team is ready to translate your ideas into a digital experience that drives results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll stagger-delay-2">
            <Button asChild size="lg" className="bg-futurity-orange hover:bg-futurity-orange/90 text-white border-0">
              <Link to="/contact">Request a Web Design Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Helper Components
const BenefitItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start">
      <CheckCircle className="text-futurity-orange mr-3 mt-1 flex-shrink-0" size={20} />
      <p>{text}</p>
    </div>
  );
};

const ServiceFeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="h-12 w-12 rounded-full bg-futurity-orange/10 flex items-center justify-center mb-4 text-futurity-orange">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-futurity-gray">{description}</p>
    </div>
  );
};

const ProcessCard = ({
  number,
  title,
  description,
  bgColor
}: {
  number: string;
  title: string;
  description: string;
  bgColor?: string;
}) => {
  return (
    <div className={`relative p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${bgColor || 'bg-white'}`}>
      <div className="text-4xl font-bold text-futurity-orange/20 mb-2">{number}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-futurity-gray">{description}</p>
    </div>
  );
};

const PortfolioItem = ({
  image,
  title,
  category
}: {
  image: string;
  title: string;
  category: string;
}) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all">
      <div className="relative flex items-center justify-center aspect-[16/9] min-h-[180px] bg-white">
        <img 
          src={image} 
          alt={title} 
          className="object-contain max-h-40 max-w-full mx-auto my-auto transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-futurity-orange text-white text-sm font-medium px-2 py-1 rounded-md">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-futurity-blue">{title}</h3>
      </div>
    </div>
  );
};

export default WebDesignPage;
