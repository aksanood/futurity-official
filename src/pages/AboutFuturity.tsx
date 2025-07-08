import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import PageHero from '@/components/ui/page-hero';
import { Helmet } from 'react-helmet-async';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { faqData } from '../data/faqData';

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Futurity | Innovative Digital Agency for Business Growth</title>
        <meta name="description" content="Discover Futurity, a client-focused digital agency founded in 2024. Learn about our mission, core values (Innovation, Excellence), and how we deliver transformative digital solutions." />
        <meta name="keywords" content="About Futurity digital agency, About Futurity, Who is Futurity, Innovative digital solutions provider, Our digital agency story, Client-focused digital agency UK, Futurity core values, Digital agency founded 2024, Our mission for business growth, Why partner with Futurity, Digital agency committed to excellence, Full-service digital agency UK, Futurity digital solutions" />
        {/* Open Graph tags */}
        <meta property="og:title" content="About Futurity | Innovative Digital Agency for Business Growth" />
        <meta property="og:description" content="Discover Futurity, a client-focused digital agency founded in 2024. Learn about our mission, core values (Innovation, Excellence), and how we deliver transformative digital solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://futurity.biz/about-futurity" />
        <meta property="og:image" content="https://futurity.biz/Futurity_Logo_Dark_Background.svg" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Futurity | Innovative Digital Agency for Business Growth" />
        <meta name="twitter:description" content="Discover Futurity, a client-focused digital agency founded in 2024. Learn about our mission, core values (Innovation, Excellence), and how we deliver transformative digital solutions." />
        <meta name="twitter:image" content="https://futurity.biz/Futurity_Logo_Dark_Background.svg" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://futurity.biz/about-futurity" />
        {/* Schema.org structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqData.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        })}</script>
      </Helmet>

      {/* Hero Section */}
      <PageHero
        title={
          <>
            Your Partner in{' '}
            <span className="text-futurity-orange">Innovation</span>{' '}
            and{' '}
            <span className="text-futurity-orange">Growth</span>
          </>
        }
        subtitle="We are a team of digital experts passionate about creating exceptional experiences that drive business growth."
        className="mb-0 pb-0 !mb-0 !pb-0"
        showBottomLine={false}
      >
        <p className="text-white/80 animate-on-scroll stagger-delay-2 mb-0">
          As your partner in digital innovation, Futurity is a full-service digital agency founded in 2024, passionately crafting innovative digital solutions to fuel your business's growth.
          We are dedicated to empowering your success by transforming your online presence into a significant asset.
        </p>
      </PageHero>

      {/* Our Story */}
      <section className="section section-secondary">
        <div className="floating-orb-blue top-0 left-0"></div>
        <div className="floating-orb-orange bottom-0 right-0"></div>
        
        <div className="container-wide relative z-10">
          <SectionHeading
            badge="Our Story"
            badgeVariant="orange"
            title="Forging the Future of Digital."
            center
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Story Cards Column - now on the left */}
            <div className="flex flex-col h-full justify-between gap-6 order-1 lg:order-1">
              {/* Card 1 */}
              <div className="card-base card-hover card-interactive relative overflow-hidden">
                <div className="card-gradient-overlay card-orange"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="icon-container-base icon-orange">
                      {/* Spark/idea icon */}
                      <svg width="24" height="24" fill="none" viewBox="0 0 28 28"><path d="M14 2v4M14 22v4M4 14H2M26 14h-2M6.22 6.22l2.83 2.83M21.78 21.78l-2.83-2.83M6.22 21.78l2.83-2.83M21.78 6.22l-2.83 2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="2"/></svg>
                    </span>
                    <h3 className="font-semibold text-primary-heading text-base tracking-tight">Our Spark: A Vision for Better Digital</h3>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed">Our digital agency story began with a clear conviction: businesses deserve more effective, client-focused digital agency support. We saw common frustrations with underperforming sites and a lack of focus on long-term digital value, sparking Futurity's mission to deliver superior digital experiences.</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="card-base card-hover card-interactive relative overflow-hidden">
                <div className="card-gradient-overlay card-blue"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="icon-container-base icon-blue">
                      {/* Calendar/star icon */}
                      <svg width="24" height="24" fill="none" viewBox="0 0 28 28"><circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2"/><path d="M14 7l1.76 3.57 3.94.57-2.85 2.78.67 3.91L14 15.25l-3.52 1.85.67-3.91-2.85-2.78 3.94-.57L14 7z" stroke="currentColor" strokeWidth="1.5"/></svg>
                    </span>
                    <h3 className="font-semibold text-primary-heading text-base tracking-tight">Founded in 2024: Purpose-Driven Digital Excellence</h3>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed">As a digital agency founded in 2024, Futurity was established to redefine digital service. Our purpose is to be an innovative digital solutions provider, merging strategic insight with cutting-edge development to foster partnerships that drive sustainable business growth and tangible value.</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="flex-1 flex flex-col justify-between bg-white/90 rounded-xl border border-futurity-orange/20 shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-4 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-futurity-green/10 border border-futurity-green">
                    {/* Growth/partner icon */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 28 28"><path d="M4 24l6-6 5 5 9-9" stroke="#43A047" strokeWidth="2" strokeLinecap="round"/><circle cx="8" cy="8" r="3" stroke="#43A047" strokeWidth="2"/><circle cx="20" cy="8" r="3" stroke="#43A047" strokeWidth="2"/></svg>
                  </span>
                  <h3 className="font-semibold text-futurity-orange text-base tracking-tight">Your Growth Partner: A Full-Service Digital Agency</h3>
                </div>
                <p className="text-futurity-gray text-sm leading-relaxed">Today, who is Futurity? We are a comprehensive full-service digital agency. Our expert team delivers everything from intuitive UX/UI design and impactful branding to results-driven digital marketing and bespoke website development, all to empower your business in the digital age.</p>
              </div>
              {/* Card 4 */}
              <div className="flex-1 flex flex-col justify-between bg-white/90 rounded-xl border border-futurity-orange/20 shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-4 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-futurity-pink/10 border border-futurity-pink">
                    {/* DNA/innovation icon */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 28 28"><path d="M7 21c6-6 8-8 8-14" stroke="#E91E63" strokeWidth="2"/><path d="M21 7c-6 6-8 8-8 14" stroke="#E91E63" strokeWidth="2"/><ellipse cx="14" cy="14" rx="12" ry="5" stroke="#E91E63" strokeWidth="2"/></svg>
                  </span>
                  <h3 className="font-semibold text-futurity-pink text-base tracking-tight">Our DNA: Values-Driven & AI-Enhanced Innovation</h3>
                </div>
                <p className="text-futurity-gray text-sm leading-relaxed">The Futurity core values (Innovation, Excellence, Collaboration, Integrity, Adaptability, Impact) propel our success. We champion continuous innovation in all our services, including strategic AI app development, to provide you with cutting-edge and effective digital solutions.</p>
              </div>
              {/* Card 5 */}
              <div className="flex-1 flex flex-col justify-between bg-white/90 rounded-xl border border-futurity-orange/20 shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-4 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-futurity-blue/10 border border-futurity-blue">
                    {/* Forward/commitment icon */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 28 28"><path d="M7 14h14M15 10l6 4-6 4" stroke="#0A1840" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <h3 className="font-semibold text-futurity-orange text-base tracking-tight">Building Your Digital Future: Our Forward Commitment</h3>
                </div>
                <p className="text-futurity-gray text-sm leading-relaxed">At Futurity, we consistently look ahead, building future-ready solutions. As your innovative digital partner, we create adaptable, resilient assets for enduring success. Partner with Futurity to confidently build and navigate your digital future.</p>
              </div>
            </div>
            {/* Timeline Column - now on the right */}
            <div className="relative pr-6 lg:pr-12 order-2 lg:order-2">
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-futurity-orange via-futurity-blue/30 to-futurity-orange/60 rounded-full"></div>
              {/* Timeline milestones */}
              <div className="space-y-14">
                {/* Early 2024 */}
                <div className="relative flex items-center group">
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-futurity-orange shadow-lg group-hover:scale-105 transition-transform">
                    {/* Vision icon */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#FF9800" strokeWidth="2.5"/><path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" stroke="#FF9800" strokeWidth="2.5"/></svg>
                  </div>
                  <div className="ml-6">
                    <div className="font-bold text-futurity-blue text-lg">Early 2024</div>
                    <div className="text-futurity-gray font-semibold">Founding Vision</div>
                    <div className="text-sm text-futurity-gray/80">Futurity is established with a clear mission to empower businesses through innovative digital solutions.</div>
                  </div>
                </div>
                {/* Mid 2024 */}
                <div className="relative flex items-center group">
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-futurity-blue shadow-lg group-hover:scale-105 transition-transform">
                    {/* Team icon */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#0A1840" strokeWidth="2.5"/><circle cx="12" cy="12" r="5" fill="#0A1840"/></svg>
                  </div>
                  <div className="ml-6">
                    <div className="font-bold text-futurity-blue text-lg">Mid 2024</div>
                    <div className="text-futurity-gray font-semibold">Building the Foundation</div>
                    <div className="text-sm text-futurity-gray/80">Assembled a core team of passionate digital experts across key disciplines (UX/UI, Development, Marketing).</div>
                  </div>
                </div>
                {/* Late 2024 */}
                <div className="relative flex items-center group">
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-futurity-orange shadow-lg group-hover:scale-105 transition-transform">
                    {/* Launch icon */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" stroke="#FF9800" strokeWidth="2.5"/></svg>
                  </div>
                  <div className="ml-6">
                    <div className="font-bold text-futurity-blue text-lg">Late 2024</div>
                    <div className="text-futurity-gray font-semibold">Launching Core Services</div>
                    <div className="text-sm text-futurity-gray/80">Successfully delivered initial projects and established a strong footing in bespoke website development, branding, and initial digital marketing services.</div>
                  </div>
                </div>
                {/* Early 2025 */}
                <div className="relative flex items-center group">
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-futurity-blue shadow-lg group-hover:scale-105 transition-transform">
                    {/* AI icon */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="5" stroke="#0A1840" strokeWidth="2.5"/><circle cx="12" cy="12" r="4" fill="#0A1840"/></svg>
                  </div>
                  <div className="ml-6">
                    <div className="font-bold text-futurity-blue text-lg">Early 2025</div>
                    <div className="text-futurity-gray font-semibold">Expanding Expertise</div>
                    <div className="text-sm text-futurity-gray/80">Rapidly expanded service offerings to include AI App Development, reflecting our commitment to the future of technology.</div>
                  </div>
                </div>
                {/* Mid 2025 */}
                <div className="relative flex items-center group">
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-futurity-orange shadow-lg group-hover:scale-105 transition-transform">
                    {/* Growth icon */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M4 20l6-6 5 5 9-9" stroke="#FF9800" strokeWidth="2.5"/></svg>
                  </div>
                  <div className="ml-6">
                    <div className="font-bold text-futurity-blue text-lg">Mid 2025</div>
                    <div className="text-futurity-gray font-semibold">Achieving Client Success</div>
                    <div className="text-sm text-futurity-gray/80">Reached significant milestones in client growth and satisfaction, with a growing portfolio of successful partnerships and measurable results (up to 150% Client Growth).</div>
                  </div>
                </div>
                {/* Ongoing */}
                <div className="relative flex items-center group">
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-futurity-blue shadow-lg group-hover:scale-105 transition-transform">
                    {/* Future icon */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 2l6 6-6 6-6-6 6-6zm0 12v8" stroke="#0A1840" strokeWidth="2.5"/></svg>
                  </div>
                  <div className="ml-6">
                    <div className="font-bold text-futurity-blue text-lg">Ongoing</div>
                    <div className="text-futurity-gray font-semibold">Advancing Digital Expertise Daily</div>
                    <div className="text-sm text-futurity-gray/80">Our team consistently embraces emerging technologies and sharpens skills across all disciplines, delivering impactful, state-of-the-art digital marketing and AI-driven solutions for today's challenges and opportunities.</div>
                  </div>
                </div>
                {/* Future Plans */}
                <div className="relative flex items-center group">
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-futurity-orange shadow-lg group-hover:scale-105 transition-transform">
                    {/* Roadmap/target icon */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#FF9800" strokeWidth="2.5"/><path d="M12 7v5l4 2" stroke="#FF9800" strokeWidth="2.5" strokeLinecap="round"/></svg>
                  </div>
                  <div className="ml-6">
                    <div className="font-bold text-futurity-blue text-lg">Future Plans</div>
                    <div className="text-futurity-gray font-semibold">Vision 2026 & Beyond</div>
                    <div className="text-sm text-futurity-gray/80">Our roadmap includes expanding into new markets, launching advanced AI-driven services, and deepening our commitment to client success through continuous innovation and strategic partnerships.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - alternate to gray-50 */}
      <section className="section section-primary">
        <div className="floating-orb-blue top-0 right-0"></div>
        <div className="floating-orb-orange bottom-0 left-0"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        
        <div className="container-wide relative z-10">
          <SectionHeading 
            badge="Futurity's Core Values"
            badgeVariant="blue"
            title="Principles for Impactful Digital Results"
            center
          />
          <div className="card-grid-2">
            <ValueCard
              title="Innovation"
              description="For us, innovation means constantly seeking out and mastering the latest digital advancements, from AI-powered applications to cutting-edge UX/UI design trends. This allows us to provide you with forward-thinking, innovative digital solutions that give you a distinct competitive advantage and prepare your business for the future."
              icon={icons.Innovation}
              className="animate-on-scroll"
            />
            <ValueCard
              title="Collaboration"
              description="We believe the best results stem from true partnership. Collaboration at Futurity means working closely with you, listening to your needs, understanding your vision, and maintaining open, transparent communication throughout our engagement. Your insights, combined with our expertise, lead to more effective and aligned digital strategies."
              icon={icons.Collaboration}
              className="animate-on-scroll stagger-delay-1"
            />
            <ValueCard
              title="Excellence"
              description="We are a digital agency committed to excellence in every facet of our work. This translates to meticulous attention to detail, a commitment to quality, and a drive to exceed expectations. From the initial concept to the final deliverable, we aim for flawless execution and impactful results that speak for themselves."
              icon={icons.Excellence}
              className="animate-on-scroll stagger-delay-2"
            />
            <ValueCard
              title="Integrity"
              description="Trust is paramount in any partnership. At Futurity, integrity means operating with honesty, transparency, and ethical practices at all times. We provide clear pricing, realistic timelines, and straightforward advice, ensuring you feel confident and informed every step of the way."
              icon={icons.Integrity}
              className="animate-on-scroll"
            />
            <ValueCard
              title="Adaptability"
              description="We thrive in the fast-paced digital realm by continually refining our strategies and embracing new methodologies, from agile project management to emerging platform integrations. This ensures we deliver flexible, future-ready solutions that evolve with your business, safeguarding your digital investments and maintaining peak performance in a constantly changing environment."
              icon={icons.Adaptability}
              className="animate-on-scroll stagger-delay-1"
            />
            <ValueCard
              title="Impact"
              description="Our focus is steadfastly on achieving tangible outcomes, employing data-driven strategies and goal-oriented execution to ensure every digital effort delivers measurable success for your business. This commitment means you receive digital solutions with real impact, driving demonstrable business growth, enhancing your ROI, and making a significant difference to your bottom line."
              icon={icons.Impact}
              className="animate-on-scroll stagger-delay-2"
            />
          </div>
        </div>
      </section>

      {/* Our Team - alternate to white */}
      {/* <section className="section bg-white">
        <div className="container-wide">
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="Our Digital Experts: The Futurity Professionals Delivering Client Results"
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
      </section> */}

      {/* Why Choose Us - alternate to gray-50 */}
      <section className="section section-secondary">
        <div className="floating-orb-orange top-0 left-0"></div>
        <div className="floating-orb-blue bottom-0 right-0"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        
        <div className="container-wide relative z-10">
          <SectionHeading
            badge="Why Partner with Futurity?"
            badgeVariant="orange"
            title="Your Advantage in Digital Success"
            center
          />
          <div className="card-grid-2 mt-8">
            <WhyCard
              icon={
                // Target/goal icon
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="hsl(222, 70%, 14%)"/>
                  <circle cx="20" cy="20" r="10" fill="#fff" fillOpacity="0.15"/>
                  <circle cx="20" cy="20" r="5" fill="hsl(24, 95%, 53%)"/>
                  <path d="M20 10v10l7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Your Goals, Our Strategy"
              description="We develop bespoke digital strategies laser-focused on achieving your unique business objectives and driving measurable business growth, ensuring every action is purposeful and aligned with your vision."
            />
            <WhyCard
              icon={
                // Team/people icon
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="20" fill="#FF9800"/>
                  <circle cx="14" cy="18" r="4" fill="#fff"/>
                  <circle cx="26" cy="18" r="4" fill="#fff"/>
                  <ellipse cx="14" cy="27" rx="6" ry="3" fill="#fff" fillOpacity="0.5"/>
                  <ellipse cx="26" cy="27" rx="6" ry="3" fill="#fff" fillOpacity="0.5"/>
                </svg>
              }
              title="Comprehensive Expertise Under One Roof"
              description="As a full-service digital agency, our dedicated team brings together specialists in UX/UI design, cutting-edge AI app development, strategic digital marketing, and compelling content creation, offering you integrated and powerful solutions."
            />
            <WhyCard
              icon={
                // Handshake/collaboration icon
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="20" fill="#00B8D9"/>
                  <path d="M12 24l8 4 8-4M12 24V16l8-4 8 4v8" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round"/>
                  <path d="M16 20l4 2 4-2" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round"/>
                </svg>
              }
              title="True Partnership Through Collaboration"
              description="We champion transparent communication and a fully collaborative process, reflecting our Collaboration core value. This makes us a client-focused digital agency you can trust to work with you every step of the way."
            />
            <WhyCard
              icon={
                // Trophy/excellence icon
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="20" fill="#673AB7"/>
                  <path d="M20 12l3.09 6.26L30 19.27l-5 4.87L26.18 32 20 27.77 13.82 32 15 24.14l-5-4.87 6.91-1.01L20 12z" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round"/>
                </svg>
              }
              title="Commitment to Impactful Results"
              description="Our foundation is built on delivering successful digital projects that yield tangible results. This commitment to Excellence and creating real Impact ensures your investment translates into meaningful outcomes for your business."
            />
            <WhyCard
              icon={
                // Lightbulb/innovation icon
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="20" fill="#E91E63"/>
                  <path d="M20 12a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3 6v2a3 3 0 0 1-6 0v-2c-1.5-1.5-3-3.5-3-6a6 6 0 0 1 6-6z" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round"/>
                  <path d="M18 32h4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              }
              title="Innovation at the Forefront"
              description="We leverage cutting-edge technologies and industry best practices, including the latest advancements in artificial intelligence, to deliver truly innovative digital solutions that provide a distinct competitive edge."
            />
            <WhyCard
              icon={
                // Chart/data icon
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="20" fill="#00C853"/>
                  <rect x="12" y="22" width="4" height="6" rx="2" fill="#fff"/>
                  <rect x="18" y="16" width="4" height="12" rx="2" fill="#fff"/>
                  <rect x="24" y="12" width="4" height="16" rx="2" fill="#fff"/>
                </svg>
              }
              title="Data-Driven for Peak Performance"
              description="Our approach is rooted in data-driven decision-making and continuous Optimization (a key part of our process), ensuring your digital strategies are consistently refined to maximise your return on investment and achieve peak performance."
            />
            <WhyCard
              icon={
                // Puzzle/adaptability icon
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="20" fill="#43A047"/>
                  <path d="M16 24v-4a2 2 0 1 1 4 0v4h4a2 2 0 1 1 0 4h-4v-4a2 2 0 1 0-4 0v4h-4a2 2 0 1 1 0-4h4z" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round"/>
                </svg>
              }
              title="Adaptable Solutions Tailored to You"
              description="Reflecting our core value of Adaptability, we offer flexible engagement models and bespoke service packages – from startup website development to comprehensive digital campaigns – designed to fit your specific requirements and budget perfectly."
            />
            <WhyCard
              icon={
                // Shield/support icon
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="#3B4A7D"/>
                  <path d="M20 10l8 4v6c0 7-8 10-8 10s-8-3-8-10v-6l8-4z" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round"/>
                </svg>
              }
              title="Long-Term Support for Enduring Success"
              description="Our partnership extends beyond the initial launch. We offer reliable ongoing support and website maintenance plans (our maintenance plans include a 12-month contract) to ensure your digital assets continue to deliver value and operate flawlessly."
            />
          </div>
        </div>
      </section>

      {/* CTA Section - alternate to white */}
      <section className="section section-brand">
        <div className="floating-orb-orange top-0 right-0 opacity-30"></div>
        <div className="floating-orb-blue bottom-0 left-0 opacity-30"></div>
        
        <div className="container-tight text-center relative z-10">
          <h2 className="text-headline font-bold mb-6 animate-on-scroll gradient-text-orange">
            Inspired by Our Vision? Let's Create Yours.
          </h2>
          <p className="text-body-large mb-8 text-white/90 animate-on-scroll stagger-delay-1">
            You've seen our commitment to empowering businesses through innovative digital solutions. Now, let's explore how our range of expert services, from bespoke web design to AI app development, can help build your custom digital strategy and achieve measurable results.
          </p>
          <div className="flex justify-center animate-on-scroll stagger-delay-2">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/services">Discover Our Full Range of Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section - alternate to gray-50 */}
      <section className="section section-primary">
        <div className="floating-orb-blue top-0 left-0"></div>
        <div className="floating-orb-orange bottom-0 right-0"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        
        <div className="container-wide relative z-10">
          <SectionHeading
            badge="Frequently Asked Questions"
            badgeVariant="blue"
            title="Everything you need to know about Futurity as your digital agency partner."
            center
          />
          <div className="card-grid-2 mt-16">
            {faqData.map((faq, idx) => (
              <FaqCard
                key={idx}
                icon={faqIcons[faq.icon] || null}
                title={faq.question}
                description={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Helper components
const ValueCard = ({ title, description, icon, className }: { title: string; description: string; icon: React.ReactNode; className?: string }) => {
  return (
    <div className={`card-base card-hover card-interactive relative overflow-hidden ${className}`}>
      <div className="card-gradient-overlay card-orange"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-primary-heading flex-1">{title}</h3>
          <span className="ml-4 flex-shrink-0">{icon}</span>
        </div>
        <p className="text-secondary">{description}</p>
      </div>
    </div>
  );
};

// SVG icons for each value
const icons = {
  Innovation: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#FF9800"/>
      <path d="M20 10v10l7 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Collaboration: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="#00B8D9"/>
      <path d="M12 28c0-4 8-4 8 0M20 28c0-4 8-4 8 0M16 18a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Excellence: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="#673AB7"/>
      <path d="M20 12l3.09 6.26L30 19.27l-5 4.87L26.18 32 20 27.77 13.82 32 15 24.14l-5-4.87 6.91-1.01L20 12z" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round"/>
    </svg>
  ),
  Integrity: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="#43A047"/>
      <path d="M20 28s8-4.5 8-10.5V14l-8-4-8 4v3.5C12 23.5 20 28 20 28z" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round"/>
    </svg>
  ),
  Adaptability: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="#00C853"/>
      <path d="M20 10v8l6 6M20 30a10 10 0 1 1 0-20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Impact: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="#E91E63"/>
      <path d="M20 30V10M20 10l6 6M20 10l-6 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
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

// WhyCard component
const WhyCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="card-base card-hover card-interactive relative overflow-hidden">
    <div className="card-gradient-overlay card-blue"></div>
    <div className="relative z-10 flex flex-col items-start gap-4">
      <div className="mb-2">{icon}</div>
      <h3 className="text-lg font-semibold text-primary-heading">{title}</h3>
      <p className="text-secondary text-base">{description}</p>
    </div>
  </div>
);

// FAQ Card component styled like ValueCard
const FaqCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="card-base card-hover card-interactive relative overflow-hidden flex flex-col h-full">
    <div className="card-gradient-overlay card-yellow"></div>
    <div className="relative z-10 flex items-start gap-4 mb-3">
      <span className="flex-shrink-0">{icon}</span>
      <h3 className="text-lg font-semibold text-primary-heading flex-1">{title}</h3>
    </div>
    <p className="text-secondary text-base mt-2 relative z-10">{description}</p>
  </div>
);

// FAQ SVG icons for About page
const faqIcons: Record<string, React.ReactNode> = {
  innovation: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="#E91E63"/>
      <path d="M20 12a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3 6v2a3 3 0 0 1-6 0v-2c-1.5-1.5-3-3.5-3-6a6 6 0 0 1 6-6z" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="M18 32h4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  ),
  target: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#0A1840"/>
      <circle cx="20" cy="20" r="10" fill="#fff" fillOpacity="0.15"/>
      <circle cx="20" cy="20" r="5" fill="#FF9800"/>
      <path d="M20 10v10l7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  chart: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="#00C853"/>
      <rect x="12" y="22" width="4" height="6" rx="2" fill="#fff"/>
      <rect x="18" y="16" width="4" height="12" rx="2" fill="#fff"/>
      <rect x="24" y="12" width="4" height="16" rx="2" fill="#fff"/>
    </svg>
  ),
  team: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="#FF9800"/>
      <circle cx="14" cy="18" r="4" fill="#fff"/>
      <circle cx="26" cy="18" r="4" fill="#fff"/>
      <ellipse cx="14" cy="27" rx="6" ry="3" fill="#fff" fillOpacity="0.5"/>
      <ellipse cx="26" cy="27" rx="6" ry="3" fill="#fff" fillOpacity="0.5"/>
    </svg>
  ),
  ai: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="#0A1840"/>
      <rect x="10" y="14" width="20" height="12" rx="6" fill="#fff"/>
      <circle cx="16" cy="20" r="2" fill="#FF9800"/>
      <circle cx="24" cy="20" r="2" fill="#FF9800"/>
      <rect x="18" y="24" width="4" height="2" rx="1" fill="#FF9800"/>
    </svg>
  ),
  impact: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="#E91E63"/>
      <path d="M20 30V10M20 10l6 6M20 10l-6 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export default About;
