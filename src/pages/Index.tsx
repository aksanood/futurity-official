
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
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-futurity-blue to-futurity-blue-light overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-futurity-blue/60"></div>
        <div className="container-tight relative z-10 text-center text-white">
          <h1 className="animate-on-scroll text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            We Craft <span className="text-futurity-orange">Digital</span> Experiences
          </h1>
          <p className="animate-on-scroll stagger-delay-1 text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            We're a full-service digital agency that helps ambitious brands achieve extraordinary results in the digital landscape.
          </p>
          <div className="animate-on-scroll stagger-delay-2 flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button asChild size="lg" className="text-base">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a 
            href="#services" 
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2">Discover More</span>
            <div className="w-8 h-8 border-2 border-white/60 rounded-full flex items-center justify-center">
              <svg className="animate-bounce w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-gray-50">
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
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
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
              <Button asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
              <Button asChild variant="outline">
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
      <section className="section bg-gray-50">
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
            <Button asChild>
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              className="animate-on-scroll"
            />
            <TestimonialCard
              quote="The mobile app developed by Futurity has been a game-changer for our business. Their team was professional, responsive, and delivered on time and within budget."
              name="Michael Chen"
              position="CEO"
              company="Eco Solutions"
              className="animate-on-scroll stagger-delay-1"
            />
            <TestimonialCard
              quote="Their strategic approach to digital marketing has significantly increased our online visibility and lead generation. We couldn't be happier with the results."
              name="Emily Rodriguez"
              position="CMO"
              company="FinanceHub"
              className="animate-on-scroll stagger-delay-2"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-futurity-blue text-white">
        <div className="container-tight text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 text-white/90 animate-on-scroll stagger-delay-1">
            Let's discuss how we can help you achieve your business goals with our digital expertise.
          </p>
          <div className="animate-on-scroll stagger-delay-2">
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-futurity-blue">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
