
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { getAllPortfolioItems, getFilteredPortfolioItems } from '@/data/portfolioData';
import { PortfolioItem } from '@/types/portfolio';

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
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await getAllPortfolioItems();
        setPortfolioItems(items);
        setFilteredItems(items);
      } catch (error) {
        console.error('Error fetching portfolio items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    const fetchFilteredItems = async () => {
      try {
        const items = await getFilteredPortfolioItems(activeFilter);
        setFilteredItems(items);
      } catch (error) {
        console.error('Error filtering portfolio items:', error);
      }
    };

    fetchFilteredItems();
  }, [activeFilter]);

  const loadMore = () => {
    setVisibleItems(prev => prev + 3);
  };

  return (
    <Layout>
      <section className="hero-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Our Portfolio</h1>
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1">
              Explore our latest work and see how we've helped businesses achieve their digital goals through innovative solutions and strategic thinking.
            </p>
          </div>
        </div>
        
        {/* Straight line instead of wave */}
        <div className="hero-straight-line">
          <div className="h-16 bg-white absolute bottom-0 left-0 right-0"></div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Browse our recent work across various industries and services."
            center
          />

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`portfolio-filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                variant="outline"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p>Loading portfolio items...</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="flex justify-center items-center h-64">
              <p>No portfolio items found for this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.slice(0, visibleItems).map((item, index) => (
                <div key={item.id} className={`portfolio-card animate-on-scroll ${index % 3 === 1 ? 'stagger-delay-1' : index % 3 === 2 ? 'stagger-delay-2' : ''}`}>
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <img 
                      src={item.image_url} 
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
                    
                    <div className="mb-5">
                      {item.results && item.results.split('\n').map((result, idx) => (
                        <div key={idx} className="flex items-center mb-2">
                          <div className="h-2 w-2 rounded-full bg-futurity-orange mr-2"></div>
                          <span className="text-sm text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link to={`/portfolio/${item.slug}`} className="inline-flex items-center text-futurity-blue font-medium hover:text-futurity-orange">
                      View Case Study 
                      <ExternalLink size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {visibleItems < filteredItems.length && (
            <div className="text-center mt-12">
              <Button onClick={loadMore} variant="outline" className="border-futurity-blue text-futurity-blue">
                Load More Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA section */}
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
