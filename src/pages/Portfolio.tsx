
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import PortfolioCard from '@/components/ui/portfolio-card';
import { Button } from '@/components/ui/button';

// Portfolio item type
interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  tags: string[];
  image: string;
}

// Sample portfolio data
const portfolioItems: PortfolioItem[] = [
  {
    id: 'tech-vision',
    title: 'TechVision Rebrand',
    category: 'Web Design & Development',
    tags: ['web', 'branding', 'ui-ux'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80'
  },
  {
    id: 'eco-app',
    title: 'Eco Mobile App',
    category: 'Mobile Development',
    tags: ['mobile', 'ui-ux'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    id: 'finance-dashboard',
    title: 'Finance Dashboard',
    category: 'UI/UX & Development',
    tags: ['web', 'ui-ux', 'dashboard'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'
  },
  {
    id: 'health-app',
    title: 'Health & Wellness App',
    category: 'Mobile Development',
    tags: ['mobile', 'ui-ux', 'healthcare'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'Web Development',
    tags: ['web', 'ecommerce'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    id: 'travel-guide',
    title: 'Travel Guide Platform',
    category: 'Web & Mobile Development',
    tags: ['web', 'mobile', 'ui-ux'],
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80'
  }
];

// Categories for filtering
const categories = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'ui-ux', name: 'UI/UX' },
  { id: 'branding', name: 'Branding' },
  { id: 'ecommerce', name: 'E-Commerce' }
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
      <section className="pt-32 pb-20 bg-futurity-blue text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Our Portfolio</h1>
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1">
              Explore our latest work and see how we've helped our clients achieve their digital objectives.
            </p>
          </div>
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
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className="animate-on-scroll"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.slice(0, visibleItems).map((item, index) => (
              <PortfolioCard
                key={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
                href={`/portfolio/${item.id}`}
                className={`animate-on-scroll ${index % 3 === 1 ? 'stagger-delay-1' : index % 3 === 2 ? 'stagger-delay-2' : ''}`}
              />
            ))}
          </div>

          {/* Load More Button */}
          {visibleItems < filteredItems.length && (
            <div className="text-center mt-12">
              <Button onClick={loadMore} variant="outline" size="lg">
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
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-futurity-blue">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// For React Router Link
import { Link } from 'react-router-dom';

export default Portfolio;
