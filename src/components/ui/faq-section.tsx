
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "./section-heading";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  return (
    <AccordionItem value={question} className="animate-on-scroll">
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What services does Futurity offer?",
      answer: (
        <div className="space-y-4">
          <p>Futurity is a full-service digital agency. We offer a comprehensive range of services designed to empower your business's growth. Our core offerings include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>UX/UI Design: Creating intuitive and engaging user experiences.</li>
            <li>Branding: Developing strong, memorable brand identities.</li>
            <li>Digital Marketing: Covering SEO, Content Marketing, Social Media Management, Email Marketing, and PPC Advertising.</li>
            <li>Content Writing: Crafting compelling content for various platforms.</li>
            <li>AI App Development: Building innovative AI-powered solutions.</li>
            <li>Website Development: Offering tiered packages (Startup, Standard, Premium, E-Commerce) tailored to different business needs.</li>
          </ul>
          <p>We provide bespoke solutions designed to meet your specific goals.</p>
        </div>
      )
    },
    {
      question: "How can content creation help my website and business?",
      answer: (
        <div className="space-y-4">
          <p>High-quality content is crucial for attracting and engaging your target audience. Our content writing services can help your website by:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Improving your search engine ranking through SEO-optimized content.</li>
            <li>Establishing your brand as an authority in your industry with informative blog posts and articles.</li>
            <li>Converting visitors into customers with persuasive website copy, product descriptions, and ad campaigns.</li>
            <li>Building relationships and driving engagement through newsletters and social media content.</li>
            <li>Providing value to your audience with resources like e-books and technical writing.</li>
          </ul>
          <p>Essentially, effective content drives traffic, builds trust, and supports your business objectives.</p>
        </div>
      )
    },
    {
      question: "Why is web design important for my brand?",
      answer: (
        <div className="space-y-4">
          <p>Your website is often the first interaction a potential customer has with your business, making web design critically important for your brand. A professional, well-designed website:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Creates a strong first impression and builds credibility.</li>
            <li>Reflects your brand identity and values consistently.</li>
            <li>Provides a positive user experience (UX), making it easy for visitors to find information and take desired actions.</li>
            <li>Helps you stand out from competitors with a bespoke design tailored to your unique brand.</li>
            <li>Supports your marketing efforts and contributes to lead generation and conversions.</li>
          </ul>
          <p>A strategic web design is an investment in your brand's perception and your business's success.</p>
        </div>
      )
    },
    {
      question: "How does social media management benefit my business?",
      answer: (
        <div className="space-y-4">
          <p>Social media is a powerful tool for connecting with your audience and expanding your reach. Our social media management services can benefit your business by:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Increasing brand awareness and visibility.</li>
            <li>Driving traffic to your website.</li>
            <li>Engaging with customers and building a loyal community.</li>
            <li>Providing a channel for customer service and feedback.</li>
            <li>Gathering valuable insights into your target market.</li>
            <li>Running targeted advertising campaigns (part of our broader digital marketing offerings) to reach new customers.</li>
          </ul>
          <p>Effective social media management builds relationships and enhances your online presence.</p>
        </div>
      )
    },
    {
      question: "What is your process for working with clients?",
      answer: (
        <div className="space-y-4">
          <p>We follow a clear, collaborative process to ensure your project is successful and meets your goals. Our process typically involves:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Discovery: We start by understanding your business, goals, and target audience.</li>
            <li>Strategy: We develop a tailored digital strategy outlining the best approach and services for your needs.</li>
            <li>Creation: Our expert team designs, develops, and crafts the necessary assets based on the approved strategy.</li>
            <li>Optimization: We refine and optimize the solutions to ensure maximum performance and results.</li>
          </ul>
          <p>We work closely with you at each stage to ensure transparency and alignment.</p>
        </div>
      )
    },
    {
      question: "Do you offer website maintenance plans?",
      answer: (
        <div className="space-y-4">
          <p>Yes, we offer comprehensive maintenance plans for the websites we develop. These plans ensure your website remains updated, secure, and performing optimally. Maintenance services can include regular updates, content changes (like pictures, menu items, blog posts, services), and can be bundled with other digital marketing services like social media marketing, email campaigns, and CRM depending on the package. Our maintenance plans typically require a 12-month minimum contract.</p>
        </div>
      )
    },
    {
      question: "Can you develop custom AI applications?",
      answer: (
        <div className="space-y-4">
          <p>Absolutely. We offer AI App Development services to help businesses leverage the power of artificial intelligence. Our capabilities include developing solutions such as chatbots, AI agents, image generation tools, recommendation systems, personalized learning platforms, and generative AI applications. We can create bespoke AI tools to streamline your operations, enhance customer experiences, and drive innovation.</p>
        </div>
      )
    }
  ];

  return (
    <section className="section section-alternate relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-futurity-orange/5 rounded-full -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-futurity-blue/5 rounded-full -z-10 blur-3xl"></div>
      
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-24 animate-on-scroll">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-futurity-blue">
                FAQ
              </h2>
              <p className="text-lg text-futurity-gray mb-8">
                Here are some common questions we receive about our services and how we can help your business thrive in the digital landscape.
              </p>
              <div className="hidden lg:block">
                <div className="w-48 h-48 bg-futurity-blue/5 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#0A1840_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <FAQItem 
                  key={index} 
                  question={faq.question} 
                  answer={faq.answer} 
                />
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
