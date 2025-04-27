
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

// Portfolio item type
interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  tags: string[];
  image: string;
  description: string;
  results: string[];
}

// Sample portfolio data
const portfolioItems: PortfolioItem[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform Redesign',
    category: 'Web Development',
    tags: ['web', 'ecommerce', 'ui-ux'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
    description: 'Complete redesign and development of an e-commerce platform, focusing on user experience and conversion optimization.',
    results: ['40% increase in conversion rate', '25% reduction in cart abandonment']
  },
  {
    id: 'saas-marketing',
    title: 'SaaS Marketing Campaign',
    category: 'Digital Marketing',
    tags: ['marketing', 'saas'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    description: 'Comprehensive digital marketing strategy for a SaaS product launch, including content marketing and paid advertising.',
    results: ['150% increase in qualified leads', '200% ROI on ad spend']
  },
  {
    id: 'mobile-banking',
    title: 'Mobile Banking App',
    category: 'UX Design',
    tags: ['mobile', 'ui-ux', 'finance'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    description: 'User experience design for a mobile banking application, focusing on security and ease of use.',
    results: ['95% user satisfaction rate', '30% increase in mobile transactions']
  },
  {
    id: 'health-app',
    title: 'Health & Wellness App',
    category: 'Mobile Development',
    tags: ['mobile', 'ui-ux', 'healthcare'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
    description: 'Development of a comprehensive health and wellness mobile application with features for tracking fitness, nutrition, and mental wellbeing.',
    results: ['100,000+ downloads in first month', '4.8/5 rating on app stores']
  },
  {
    id: 'branding-tech',
    title: 'Tech Startup Branding',
    category: 'Branding',
    tags: ['branding', 'design'],
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80',
    description: 'Complete brand identity development for a technology startup, including logo, color palette, typography, and brand guidelines.',
    results: ['35% increase in brand recognition', 'Successfully secured Series A funding']
  },
  {
    id: 'travel-platform',
    title: 'Travel Guide Platform',
    category: 'Web & Mobile Development',
    tags: ['web', 'mobile', 'travel'],
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80',
    description: 'Development of a cross-platform travel guide application that offers personalized recommendations and itineraries for travelers.',
    results: ['50,000 active monthly users', '75% user retention rate']
  }
];

// Categories for filtering
const categories = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web Development' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'ui-ux', name: 'UX Design' },
  { id: 'branding', name: 'Branding' }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleItems, setVisibleItems] = useState(6);

  // Filter items based on active category
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.tags.includes(activeFilter));

  // Load more items
  const loadMore = () => {
    setVisibleItems(prev => prev + 3);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Our Portfolio</h1>
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1">
              Explore our latest work and see how we've helped businesses achieve their digital goals through innovative solutions and strategic thinking.
            </p>
          </div>
        </div>
        
        {/* Wave effect at bottom */}
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180" fill="white">
            <path d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Browse our recent work across various industries and services."
            center
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <Button
                key={category.id}
                variant="ghost"
                onClick={() => setActiveFilter(category.id)}
                className={`portfolio-filter-btn animate-on-scroll ${activeFilter === category.id ? 'active' : ''}`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid - New Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.slice(0, visibleItems).map((item, index) => (
              <div key={item.id} className={`portfolio-card animate-on-scroll ${index % 3 === 1 ? 'stagger-delay-1' : index % 3 === 2 ? 'stagger-delay-2' : ''}`}>
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-futurity-orange text-white text-sm font-medium px-2 py-1 rounded-md">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="portfolio-card-content">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-futurity-blue">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  {/* Results */}
                  <div className="mb-5">
                    {item.results.map((result, idx) => (
                      <div key={idx} className="flex items-center mb-2">
                        <div className="h-2 w-2 rounded-full bg-futurity-orange mr-2"></div>
                        <span className="text-sm text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* View Case Study Button */}
                  <Link to={`/portfolio/${item.id}`} className="inline-flex items-center text-futurity-blue font-medium hover:text-futurity-orange">
                    View Case Study 
                    <ExternalLink size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleItems < filteredItems.length && (
            <div className="text-center mt-12">
              <Button onClick={loadMore} variant="outline" className="border-futurity-blue text-futurity-blue">
                Load More Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-futurity-blue text-white">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Let's Create Something Amazing Together</h2>
          <p className="text-xl mb-8 text-white/90 animate-on-scroll stagger-delay-1">
            Ready to discuss your project? We'd love to hear about your ideas and help bring them to life.
          </p>
          <div className="animate-on-scroll stagger-delay-2">
            <Button asChild size="lg" className="bg-futurity-orange hover:bg-futurity-orange/90 text-white border-0">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
