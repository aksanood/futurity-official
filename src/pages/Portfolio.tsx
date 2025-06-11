import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/page-hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getAllPortfolioItems, getServiceCategories } from '@/data/portfolioData';
import { PortfolioItem } from '@/types/portfolio';
import PortfolioCard from '@/components/ui/portfolio-card';
import { useToast } from '@/components/ui/use-toast';
import SectionHeading from '@/components/ui/section-heading';

const ITEMS_PER_PAGE = 6;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Array<{id: string, name: string}>>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const { toast } = useToast();

  // Fetch service categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true);
        const data = await getServiceCategories();
        console.log('Retrieved service categories for portfolio:', data);
        setCategories(data);
      } catch (error) {
        console.error('Error fetching service categories:', error);
        toast({
          title: 'Error',
          description: 'Failed to load service categories',
          variant: 'destructive'
        });
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, [toast]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        console.log('Fetching all portfolio items...');
        const items = await getAllPortfolioItems();
        console.log('Retrieved items:', items);
        setPortfolioItems(items);
      } catch (error) {
        console.error('Error fetching portfolio items:', error);
        toast({
          title: 'Error',
          description: 'Failed to load portfolio items',
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [toast]);

  // Filtering logic (client-side)
  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = activeFilter === 'all' || item.portfolio_category === activeFilter;
    return matchesCategory;
  });

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const displayedItems = filteredItems.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // Scroll to top effect
  useEffect(() => {
    // Scroll to the top of the portfolio section (not the page)
    const section = document.querySelector('section.section');
    if (section) {
      section.scrollIntoView({ behavior: 'auto', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [currentPage]);

  return (
    <Layout>
      <PageHero
        title="Our Portfolio"
        subtitle="Explore our latest work and see how we've helped businesses achieve their digital goals through innovative solutions and strategic thinking."
      />
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            title="Our Work"
            subtitle="Explore our portfolio of successful projects."
            center
          />
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              onClick={() => setActiveFilter('all')}
              className={`portfolio-filter-btn ${activeFilter === 'all' ? 'bg-futurity-blue text-white' : ''}`}
              variant={activeFilter === 'all' ? "default" : "outline"}
              key="all"
            >
              All
            </Button>
            {loadingCategories ? (
              <div className="p-2">Loading categories...</div>
            ) : (
              categories.map(category => (
                <Button
                  onClick={() => setActiveFilter(category.id)}
                  className={`portfolio-filter-btn ${activeFilter === category.id ? 'bg-futurity-blue text-white' : ''}`}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  key={category.id}
                >
                  {category.name}
                </Button>
              ))
            )}
          </div>
          {/* Portfolio Items */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p>Loading portfolio items...</p>
            </div>
          ) : displayedItems.length === 0 ? (
            <div className="flex justify-center items-center h-64">
              <p>No portfolio items found for this selection.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedItems.map((item, index) => {
                  const categoryObj = categories.find(cat => cat.id === item.portfolio_category);
                  const categoryName = categoryObj ? categoryObj.name : '';
                  return (
                    <PortfolioCard
                      key={item.id}
                      image={item.image_url}
                      title={item.title}
                      category={categoryName}
                      href={`/portfolio/${item.slug}`}
                      className={`hover:shadow-lg transition-all duration-300 ${index % 3 === 1 ? 'stagger-delay-1' : index % 3 === 2 ? 'stagger-delay-2' : ''}`}
                    />
                  );
                })}
              </div>
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-10 gap-2">
                  <Button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    variant="outline"
                  >
                    Previous
                  </Button>
                  {[...Array(totalPages)].map((_, i) => (
                    <Button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      variant={currentPage === i + 1 ? 'default' : 'outline'}
                      className={currentPage === i + 1 ? 'bg-futurity-blue text-white' : ''}
                    >
                      {i + 1}
                    </Button>
                  ))}
                  <Button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    variant="outline"
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
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

      <div className="text-center mt-12">
        <Button asChild className="mt-8 bg-futurity-blue hover:bg-futurity-blue/90 text-white rounded-full px-8">
          <Link to="/about-futurity">Meet the Futurity Team</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default Portfolio;
