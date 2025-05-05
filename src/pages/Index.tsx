import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/section-heading';
import ServiceCard from '@/components/ui/service-card';
import PortfolioCard from '@/components/ui/portfolio-card';
import TestimonialCard from '@/components/ui/testimonial-card';
import { Layout as LayoutIcon, Smartphone, Palette, BarChart, FileSearch, Image, Globe, LayoutDashboard, Compass, FileText } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Updated with new design */}
      <section className="hero-main min-h-screen flex items-center relative overflow-hidden">
        
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-futurity-blue to-futurity-blue/80"></div>

        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-white">
            <h1 className="animate-on-scroll text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Smarter <span className="text-futurity-orange">Digital</span> Solutions for <span className="text-futurity-orange">Measurable</span> Growth
            </h1>
            <p className="animate-on-scroll stagger-delay-1 text-xl mb-8 max-w-2xl text-white/90">
              From bespoke website design and development to strategic digital marketing and AI solutions, Futurity provides the expertise you need to thrive online.
            </p>
            <div className="animate-on-scroll stagger-delay-2 flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-futurity-orange hover:bg-futurity-orange/90 text-white border-0">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-white text-futurity-blue bg-white hover:bg-gray-100 hover:text-futurity-blue/80"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-futurity-orange mb-2">150%</div>
                <div className="text-white/80">Client Growth</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-futurity-orange mb-2">100%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-futurity-orange mb-2">50+</div>
                <div className="text-white/80">Innovative Solutions Deployed</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Team collaboration" 
              className="rounded-lg shadow-xl max-w-full"
            />
          </div>
        </div>
      </section>

      {/* About Section - alternating background */}
      <section className="section section-alternate">
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
              className="rounded-lg shadow-lg relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-futurity-blue/10 rounded-lg z-0"></div>
          </div>
        </div>
      </section>

      {/* Services Section - with alternating background */}
      <section id="services" className="section">
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
              className="animate-on-scroll"
            />
            <ServiceCard
              icon={<Globe size={28} />}
              title="Web Development"
              description="Custom web applications built with modern technologies"
              href="/services/web-development"
              className="animate-on-scroll stagger-delay-1"
            />
            <ServiceCard
              icon={<LayoutDashboard size={28} />}
              title="UX/UI Design"
              description="User-centered design for intuitive digital experiences"
              href="/services/ui-ux-design"
              className="animate-on-scroll stagger-delay-2"
            />
            <ServiceCard
              icon={<Compass size={28} />}
              title="Branding"
              description="Distinctive brand identities that make you stand out"
              href="/services/branding-services"
              className="animate-on-scroll"
            />
            <ServiceCard
              icon={<FileText size={28} />}
              title="Content Writing"
              description="Compelling copy that engages and drives action"
              href="/services/content-writing"
              className="animate-on-scroll stagger-delay-1"
            />
            <div className="animate-on-scroll stagger-delay-2 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-futurity-orange/10">
              <h3 className="text-xl font-semibold mb-4">Need a Custom Solution?</h3>
              <p className="mb-6">Let's discuss how we can help you achieve your business goals.</p>
              <Button asChild className="bg-futurity-orange text-white hover:bg-futurity-orange/90 border-0">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section">
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
              className="animate-on-scroll"
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              title="Eco Mobile App"
              category="Mobile Development"
              href="/portfolio/eco-app"
              className="animate-on-scroll stagger-delay-1"
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
              title="Finance Dashboard"
              category="UI/UX & Development"
              href="/portfolio/finance-dashboard"
              className="animate-on-scroll stagger-delay-2"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-futurity-orange text-white hover:bg-futurity-orange/90 border-0">
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section with star ratings */}
      <section className="section section-alternate">
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
              className="animate-on-scroll"
            />
            <TestimonialCard
              quote="The mobile app developed by Futurity has been a game-changer for our business. Their team was professional, responsive, and delivered on time and within budget."
              name="Michael Chen"
              position="CEO"
              company="Eco Solutions"
              rating={5}
              className="animate-on-scroll stagger-delay-1"
            />
            <TestimonialCard
              quote="Their strategic approach to digital marketing has significantly increased our online visibility and lead generation. We couldn't be happier with the results."
              name="Emily Rodriguez"
              position="CMO"
              company="FinanceHub"
              rating={4}
              className="animate-on-scroll stagger-delay-2"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-futurity-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="container-tight text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 text-white/90 animate-on-scroll stagger-delay-1">
            Let's discuss how we can help you achieve your business goals with our digital expertise.
          </p>
          <div className="animate-on-scroll stagger-delay-2">
            <Button asChild size="lg" className="bg-futurity-orange hover:bg-futurity-orange/90 text-white border-0">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
