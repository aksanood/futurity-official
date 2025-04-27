
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/section-heading';
import ServiceCard from '@/components/ui/service-card';
import PortfolioCard from '@/components/ui/portfolio-card';
import TestimonialCard from '@/components/ui/testimonial-card';
import { Layout as LayoutIcon, Smartphone, Palette, BarChart, FileSearch } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Updated with new design */}
      <section className="hero-main">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-futurity-blue to-futurity-blue/80"></div>
        
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 min-h-[90vh] py-32">
          <div className="text-white">
            <h1 className="animate-on-scroll text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-futurity-orange">Digital</span><br /> Presence
            </h1>
            <p className="animate-on-scroll stagger-delay-1 text-xl mb-8 max-w-2xl text-white/90">
              We create cutting-edge digital experiences that elevate your brand, engage your audience, and drive measurable results.
            </p>
            <div className="animate-on-scroll stagger-delay-2 flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-futurity-orange hover:bg-futurity-orange/90 text-white border-0">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-futurity-blue">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-futurity-orange mb-2">200+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-futurity-orange mb-2">95%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-futurity-orange mb-2">10+</div>
                <div className="text-white/80">Years Experience</div>
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
        
        {/* Wave effect at bottom */}
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180" fill="white">
            <path d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
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
              icon={<LayoutIcon size={28} />}
              title="Web Development"
              description="We build responsive, scalable websites and web applications that deliver exceptional user experiences."
              href="/services#web-development"
              className="animate-on-scroll"
            />
            <ServiceCard
              icon={<Smartphone size={28} />}
              title="Mobile App Development"
              description="Native and cross-platform mobile applications that engage users and drive business results."
              href="/services#mobile-apps"
              className="animate-on-scroll stagger-delay-1"
            />
            <ServiceCard
              icon={<Palette size={28} />}
              title="UI/UX Design"
              description="User-centered design that balances aesthetics with functionality to create intuitive digital experiences."
              href="/services#ui-ux-design"
              className="animate-on-scroll stagger-delay-2"
            />
            <ServiceCard
              icon={<BarChart size={28} />}
              title="Digital Marketing"
              description="Strategic marketing campaigns that connect your brand with your target audience and drive conversions."
              href="/services#digital-marketing"
              className="animate-on-scroll"
            />
            <ServiceCard
              icon={<FileSearch size={28} />}
              title="SEO & Content Strategy"
              description="Data-driven SEO and content strategies that improve visibility and engage your audience."
              href="/services#seo"
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

      {/* About Section - alternating background */}
      <section className="section section-alternate">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <SectionHeading
              title="Who We Are"
              subtitle="Futurity is a team of digital experts passionate about creating exceptional digital experiences that drive business growth."
            />
            <p className="mb-6">
              Founded in 2015, we've helped over 100 clients across various industries establish a strong digital presence and achieve their business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild className="bg-futurity-orange text-white hover:bg-futurity-orange/90 border-0">
                <Link to="/about">Learn More About Us</Link>
              </Button>
              <Button asChild variant="outline" className="text-futurity-blue border-futurity-blue/30">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
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
