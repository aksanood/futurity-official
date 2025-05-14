
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import PageHero from '@/components/ui/page-hero';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        title="About Futurity"
        subtitle="We are a team of digital experts passionate about creating exceptional experiences that drive business growth."
      >
        <p className="text-white/80 animate-on-scroll stagger-delay-2">
          Founded in 2015, Futurity has grown from a small team of 3 to a full-service digital agency with over 25 talented professionals.
        </p>
      </PageHero>

      {/* Our Story */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading 
            title="Our Story" 
            subtitle="Building Digital Futures."
            center={false}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="space-y-6">
                <p>
                  Futurity's story began with a simple conversation rooted in a shared conviction: digital experiences should be better. Our founders, drawing on diverse backgrounds from the creative complexity of gaming and emerging technologies to the practical, problem-solving world of IT support, both observed the same frustrations across the digital landscape. They saw businesses hampered by clunky websites, fragmented and short-sighted strategies, slow execution, and a general lack of focus on building long-term value. This shared vision of a fundamentally better approach became the catalyst for change.
                </p>
                <p>
                  Driven by this insight, Futurity was established in 2024 with the explicit purpose of transforming how digital services are delivered. From day one, our focus has been clear and unwavering: to combine strategy-led design with future-facing development, fostering genuine, long-term partnerships with our clients. We reject gimmicks and shortcuts, committing instead to building smart, robust digital solutions designed to last and drive meaningful, sustainable growth.
                </p>
                <p>
                  Today, Futurity has rapidly grown into a comprehensive, full-service digital agency. We offer a complete suite of expert services, including UX/UI design, impactful branding, targeted digital marketing covering all key channels, compelling content writing, innovative AI app development, and bespoke website development across various scales. Our singular mission is to empower businesses by providing the essential digital tools, sophisticated systems, and forward-thinking strategy required to not just compete, but truly thrive in today's complex and connected world. This swift expansion since 2024 is propelled by our core values and the dedication of our expert team, who are passionate about achieving client success through continuous innovation, including the strategic integration of AI.
                </p>
                <p>
                  At Futurity, we consistently look beyond the immediate horizon. We understand that the digital landscape is constantly evolving, and our commitment is to build solutions that are ready for what comes next. We don't just build websites or execute campaigns; we build digital futures, creating adaptable, resilient, and forward-looking assets that ensure your business achieves enduring success and stays ahead of the curve.
                </p>
              </div>
            </div>
            <div className="animate-on-scroll stagger-delay-1">
              {/* Timeline */}
              <div className="border-l-2 border-futurity-orange pl-8 space-y-12 relative">
                <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-futurity-orange"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Early 2024</h3>
                  <p className="text-futurity-gray">Founding Vision: Futurity is established with a clear mission to empower businesses through innovative digital solutions.</p>
                </div>
                <div className="relative">
                  <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-futurity-orange -ml-[31px]"></div>
                  <h3 className="text-xl font-semibold mb-2">Mid 2024</h3>
                  <p className="text-futurity-gray">Building the Foundation: Assembled a core team of passionate digital experts across key disciplines (UX/UI, Development, Marketing).</p>
                </div>
                <div className="relative">
                  <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-futurity-orange -ml-[31px]"></div>
                  <h3 className="text-xl font-semibold mb-2">Late 2024</h3>
                  <p className="text-futurity-gray">Launching Core Services: Successfully delivered initial projects and established a strong footing in bespoke website development, branding, and initial digital marketing services.</p>
                </div>
                <div className="relative">
                  <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-futurity-orange -ml-[31px]"></div>
                  <h3 className="text-xl font-semibold mb-2">Early 2025</h3>
                  <p className="text-futurity-gray">Expanding Expertise: Rapidly expanded service offerings to include AI App Development, reflecting our commitment to the future of technology.</p>
                </div>
                <div className="relative">
                  <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-futurity-orange -ml-[31px]"></div>
                  <h3 className="text-xl font-semibold mb-2">Mid 2025</h3>
                  <p className="text-futurity-gray">Achieving Client Success: Reached significant milestones in client growth and satisfaction, with a growing portfolio of successful partnerships and measurable results (up to 150% Client Growth).</p>
                </div>
                <div className="relative">
                  <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-futurity-orange -ml-[31px]"></div>
                  <h3 className="text-xl font-semibold mb-2">Ongoing</h3>
                  <p className="text-futurity-gray">Future Focus: Continuously innovating and expanding our capabilities to stay ahead in the ever-evolving digital landscape.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <SectionHeading 
            title="Our Values" 
            subtitle="The principles that guide everything we do."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              title="Innovation"
              description="We continuously push the boundaries of what's possible, embracing new technologies and approaches to solve complex problems."
              className="animate-on-scroll"
            />
            <ValueCard
              title="Collaboration"
              description="We believe the best results come from working closely with our clients, understanding their needs, and sharing our expertise."
              className="animate-on-scroll stagger-delay-1"
            />
            <ValueCard
              title="Excellence"
              description="We hold ourselves to the highest standards in everything we do, from design and development to client communication."
              className="animate-on-scroll stagger-delay-2"
            />
            <ValueCard
              title="Integrity"
              description="We believe in transparent communication, honest feedback, and doing what's best for our clients, even when it's challenging."
              className="animate-on-scroll"
            />
            <ValueCard
              title="Adaptability"
              description="In a rapidly evolving digital landscape, we stay agile and continuously learn to deliver cutting-edge solutions."
              className="animate-on-scroll stagger-delay-1"
            />
            <ValueCard
              title="Impact"
              description="We measure our success by the tangible results and value we create for our clients and their users."
              className="animate-on-scroll stagger-delay-2"
            />
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="The talented professionals behind our exceptional work."
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              name="John Doe"
              position="Founder & CEO"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              className="animate-on-scroll"
            />
            <TeamMember
              name="Jane Smith"
              position="Creative Director"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
              className="animate-on-scroll stagger-delay-1"
            />
            <TeamMember
              name="Michael Johnson"
              position="Technical Director"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
              className="animate-on-scroll stagger-delay-2"
            />
            <TeamMember
              name="Emily Chen"
              position="Marketing Lead"
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
              className="animate-on-scroll stagger-delay-3"
            />
          </div>
          
          <div className="mt-16 text-center animate-on-scroll">
            <p className="text-xl mb-6">
              Our team of 25+ experts includes designers, developers, strategists, and marketers dedicated to delivering exceptional results.
            </p>
            <Button asChild size="lg" className="bg-futurity-orange hover:bg-futurity-orange/90 text-white">
              <Link to="/contact">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-futurity-blue text-white">
        <div className="container-wide">
          <SectionHeading 
            title="Why Choose Futurity" 
            subtitle="What sets us apart from other digital agencies."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6 animate-on-scroll">
              <BenefitItem text="Strategic approach focused on achieving your business objectives" />
              <BenefitItem text="Dedicated team of experts across all digital disciplines" />
              <BenefitItem text="Transparent communication and collaborative process" />
              <BenefitItem text="Proven track record of delivering successful projects" />
            </div>
            <div className="space-y-6 animate-on-scroll stagger-delay-1">
              <BenefitItem text="Cutting-edge technologies and industry best practices" />
              <BenefitItem text="Data-driven decision making and continuous optimization" />
              <BenefitItem text="Flexible engagement models tailored to your needs" />
              <BenefitItem text="Ongoing support and maintenance after launch" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-futurity-gray animate-on-scroll stagger-delay-1">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <div className="animate-on-scroll stagger-delay-2">
            <Button asChild size="lg" className="bg-futurity-orange hover:bg-futurity-orange/90 text-white">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Helper components
const ValueCard = ({ title, description, className }: { title: string; description: string; className?: string }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${className}`}>
      <h3 className="text-xl font-semibold mb-3 text-futurity-blue">{title}</h3>
      <p className="text-futurity-gray">{description}</p>
    </div>
  );
};

const TeamMember = ({ name, position, image, className }: { name: string; position: string; image: string; className?: string }) => {
  return (
    <div className={`${className}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="aspect-[3/4] relative overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-futurity-gray">{position}</p>
        </div>
      </div>
    </div>
  );
};

const BenefitItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start">
      <CheckCircle className="text-futurity-orange mr-3 mt-1 flex-shrink-0" size={20} />
      <p>{text}</p>
    </div>
  );
};

export default About;
