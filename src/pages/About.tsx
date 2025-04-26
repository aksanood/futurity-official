
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-futurity-blue text-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Futurity</h1>
              <p className="text-xl text-white/90 mb-6">
                We are a team of digital experts passionate about creating exceptional experiences that drive business growth.
              </p>
              <p className="text-white/80">
                Founded in 2015, Futurity has grown from a small team of 3 to a full-service digital agency with over 25 talented professionals.
              </p>
            </div>
            <div className="relative animate-on-scroll stagger-delay-1">
              <div className="absolute top-0 left-0 w-full h-full bg-futurity-orange rounded-lg transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                alt="Futurity Team" 
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading 
            title="Our Story" 
            subtitle="From a small startup to an award-winning digital agency."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="space-y-6">
                <p>
                  Futurity was founded in 2015 by three friends who shared a passion for technology and design. What started as a small web design studio has grown into a full-service digital agency serving clients across various industries.
                </p>
                <p>
                  Our growth has been driven by our commitment to delivering exceptional results for our clients. We believe that great digital experiences are the result of a deep understanding of our clients' businesses, their users, and the latest technologies.
                </p>
                <p>
                  Today, our team of over 25 digital experts continues to push the boundaries of what's possible in the digital landscape, helping our clients achieve their business objectives through innovative digital solutions.
                </p>
              </div>
            </div>
            <div className="animate-on-scroll stagger-delay-1">
              {/* Timeline */}
              <div className="border-l-2 border-futurity-orange pl-8 space-y-12 relative">
                <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-futurity-orange"></div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">2015</h3>
                  <p className="text-futurity-gray">Founded as a web design studio with 3 team members.</p>
                </div>
                
                <div className="relative">
                  <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-futurity-orange -ml-[31px]"></div>
                  <h3 className="text-xl font-semibold mb-2">2017</h3>
                  <p className="text-futurity-gray">Expanded services to include mobile app development and digital marketing.</p>
                </div>
                
                <div className="relative">
                  <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-futurity-orange -ml-[31px]"></div>
                  <h3 className="text-xl font-semibold mb-2">2019</h3>
                  <p className="text-futurity-gray">Opened a second office and grew to a team of 15.</p>
                </div>
                
                <div className="relative">
                  <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-futurity-orange -ml-[31px]"></div>
                  <h3 className="text-xl font-semibold mb-2">2021</h3>
                  <p className="text-futurity-gray">Won our first industry award for exceptional digital experiences.</p>
                </div>
                
                <div className="relative">
                  <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-futurity-orange -ml-[31px]"></div>
                  <h3 className="text-xl font-semibold mb-2">2023</h3>
                  <p className="text-futurity-gray">Expanded to a team of 25+ and serving clients globally.</p>
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
            <Button asChild>
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
            <Button asChild size="lg">
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
    <div className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 ${className}`}>
      <h3 className="text-xl font-semibold mb-3 text-futurity-blue">{title}</h3>
      <p className="text-futurity-gray">{description}</p>
    </div>
  );
};

const TeamMember = ({ name, position, image, className }: { name: string; position: string; image: string; className?: string }) => {
  return (
    <div className={`${className}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm">
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
