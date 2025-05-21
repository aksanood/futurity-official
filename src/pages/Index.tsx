import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/section-heading';
import ServiceCard from '@/components/ui/service-card';
import PortfolioCard from '@/components/ui/portfolio-card';
import TestimonialCard from '@/components/ui/testimonial-card';
import ProcessSection from '@/components/ui/process-section';
import FAQSection from '@/components/ui/faq-section';
import { Layout as LayoutIcon, Smartphone, Palette, BarChart, FileSearch, Image, Globe, LayoutDashboard, Compass, FileText } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Modern sleek design */}
      <section className="hero-main min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-futurity-blue z-0">
          {/* Modern geometric patterns */}
          <div className="absolute w-full h-full opacity-20">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,#4171BD_0%,transparent_70%)]"></div>
            <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-[radial-gradient(circle_at_center,#F97316_0%,transparent_60%)]"></div>
          </div>
          
          {/* Abstract lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:500px_500px]"></div>
          </div>
        </div>

        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 text-white">
            <h1 className="animate-on-scroll text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Building <span className="text-futurity-orange">Digital</span> Experiences That <span className="text-futurity-orange">Deliver</span> Results
            </h1>
            <p className="animate-on-scroll stagger-delay-1 text-xl mb-8 max-w-2xl text-white/90 leading-relaxed">
              From intuitive web design to strategic digital solutions, we create digital experiences that elevate brands and drive measurable growth.
            </p>
            <div className="animate-on-scroll stagger-delay-2 flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-futurity-orange hover:bg-futurity-orange/90 text-white border-0 rounded-full px-8">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-futurity-blue rounded-full px-8"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
            
            {/* Animated stats section */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="animate-on-scroll border-l-2 border-futurity-orange/30 pl-4">
                <div className="text-4xl font-bold text-futurity-orange mb-2">150%</div>
                <div className="text-white/80 text-sm">Average Client Growth</div>
              </div>
              <div className="animate-on-scroll stagger-delay-1 border-l-2 border-futurity-orange/30 pl-4">
                <div className="text-4xl font-bold text-futurity-orange mb-2">100%</div>
                <div className="text-white/80 text-sm">Client Satisfaction</div>
              </div>
              <div className="animate-on-scroll stagger-delay-2 border-l-2 border-futurity-orange/30 pl-4">
                <div className="text-4xl font-bold text-futurity-orange mb-2">50+</div>
                <div className="text-white/80 text-sm">Projects Launched</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative animate-float">
              {/* Modern floating image with decoration */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-futurity-orange/20 rounded-full blur-xl z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-futurity-blue-light/30 rounded-full blur-xl z-0"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team collaboration" 
                className="rounded-2xl shadow-2xl max-w-full relative z-10 hover-lift"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-futurity-orange/30 rounded-2xl z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-futurity-orange/30 rounded-2xl z-0"></div>
            </div>
          </div>
        </div>
        
        {/* Modern bottom curve */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ 
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" 
        }}></div>
      </section>

      {/* About Section - With white background */}
      <section className="section bg-white">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-futurity-orange/10 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-futurity-blue/10 rounded-full z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Futurity Team" 
              className="rounded-2xl shadow-lg relative z-10 hover-grow"
            />
          </div>
          <div className="animate-on-scroll stagger-delay-1">
            <SectionHeading
              title="Who We Are"
              subtitle="Futurity is a team of digital experts passionate about creating exceptional digital experiences that drive business growth."
            />
            <p className="mb-6 text-gray-600">
              Launched in 2024, Futurity was born from a collective passion for empowering businesses to navigate and succeed in the evolving digital landscape.
            </p>
            <p className="mb-6 text-gray-600">
              Our team brings together dedicated specialists across UX/UI design, bespoke development, strategic marketing, and cutting-edge AI. We believe in a collaborative approach, working closely with you to transform challenges into opportunities.
            </p>
            <Button asChild className="mt-6 bg-futurity-blue hover:bg-futurity-blue/90 text-white rounded-full px-8">
              <Link to="/about-futurity">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - Alternating to gray-50 */}
      <section id="services" className="section bg-gray-50">
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
              className="animate-on-scroll hover-lift"
              bgColorClass="bg-green-100"
            />
            <ServiceCard
              icon={<Globe size={28} />}
              title="Web Development"
              description="Custom web applications built with modern technologies"
              href="/services/web-development"
              className="animate-on-scroll stagger-delay-1 hover-lift"
              bgColorClass="bg-blue-100"
            />
            <ServiceCard
              icon={<LayoutDashboard size={28} />}
              title="UX/UI Design"
              description="User-centered design for intuitive digital experiences"
              href="/services/ui-ux-design"
              className="animate-on-scroll stagger-delay-2 hover-lift"
              bgColorClass="bg-purple-100"
            />
            <ServiceCard
              icon={<Compass size={28} />}
              title="Branding"
              description="Distinctive brand identities that make you stand out"
              href="/services/branding-services"
              className="animate-on-scroll hover-lift"
              bgColorClass="bg-yellow-100"
            />
            <ServiceCard
              icon={<FileText size={28} />}
              title="Content Writing"
              description="Compelling copy that engages and drives action"
              href="/services/content-writing"
              className="animate-on-scroll stagger-delay-1 hover-lift"
              bgColorClass="bg-red-100"
            />
            <div className="animate-on-scroll stagger-delay-2 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-futurity-blue/5 to-futurity-blue/10 border border-futurity-blue/10 hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-futurity-blue">Need a Custom Solution?</h3>
              <p className="mb-6 text-gray-600">Let's discuss how we can help you achieve your business goals.</p>
              <Button asChild className="bg-futurity-blue text-white hover:bg-futurity-blue/90 border-0 rounded-full px-8">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Alternating to white */}
      <section className="section bg-white">
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
              className="animate-on-scroll hover-lift"
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              title="Eco Mobile App"
              category="Mobile Development"
              href="/portfolio/eco-app"
              className="animate-on-scroll stagger-delay-1 hover-lift"
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
              title="Finance Dashboard"
              category="UI/UX & Development"
              href="/portfolio/finance-dashboard"
              className="animate-on-scroll stagger-delay-2 hover-lift"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-futurity-blue hover:bg-futurity-blue/90 text-white rounded-full px-8">
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section - Alternating to gray-50 */}
      <section className="section bg-gray-50">
        <ProcessSection />
      </section>

      {/* Testimonials Section - Alternating to white */}
      <section className="section bg-white">
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
              className="animate-on-scroll hover-lift"
            />
            <TestimonialCard
              quote="The mobile app developed by Futurity has been a game-changer for our business. Their team was professional, responsive, and delivered on time and within budget."
              name="Michael Chen"
              position="CEO"
              company="Eco Solutions"
              rating={5}
              className="animate-on-scroll stagger-delay-1 hover-lift"
            />
            <TestimonialCard
              quote="Their strategic approach to digital marketing has significantly increased our online visibility and lead generation. We couldn't be happier with the results."
              name="Emily Rodriguez"
              position="CMO"
              company="FinanceHub"
              rating={4}
              className="animate-on-scroll stagger-delay-2 hover-lift"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section - Alternating to gray-50 */}
      <section className="section bg-gray-50">
        <FAQSection />
      </section>

      {/* CTA Section - Modern gradient background */}
      <section className="section bg-gradient-to-r from-futurity-blue to-futurity-blue-light text-white relative overflow-hidden">
        {/* Modern background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="container-tight text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 text-white/90 animate-on-scroll stagger-delay-1 max-w-2xl mx-auto">
            Let's collaborate to create digital experiences that captivate your audience and drive business growth.
          </p>
          <div className="animate-on-scroll stagger-delay-2">
            <Button asChild size="lg" className="bg-futurity-orange hover:bg-futurity-orange/90 text-white border-0 rounded-full px-8">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
