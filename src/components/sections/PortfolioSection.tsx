import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PortfolioCard from '@/components/ui/portfolio-card';
import { ArrowRight, Image } from 'lucide-react';
import { PortfolioItem, ServiceCategory } from '@/types/portfolio';

interface PortfolioSectionProps {
  portfolioItems: PortfolioItem[];
  loading: boolean;
  error: string | null;
  categories: ServiceCategory[];
}

const PortfolioSection = ({ portfolioItems, loading, error, categories }: PortfolioSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-900/10 rounded-full px-4 py-2 text-blue-900 font-medium text-sm mb-4">
            <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
            Our Recent Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
            Projects That Drive Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve measurable growth.
          </p>
        </div>
        
        {error && (
          <div className="text-center text-red-500 mb-8 p-4 bg-red-50 rounded-lg">
            Error loading data: {error}
          </div>
        )}
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-gray-500 text-lg">Loading portfolio items...</div>
          </div>
        ) : portfolioItems && portfolioItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item, index) => {
              const categoryObj = categories.find(cat => cat.id === item.portfolio_category);
              const categoryName = categoryObj ? categoryObj.name : '';
              return (
                <div key={item.id} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <Link to={`/portfolio/${item.slug}`} className="block">
                      <div className="relative overflow-hidden aspect-[16/9] flex items-center justify-center bg-gray-50">
                        <img 
                          src={item.image_url} 
                          alt={item.title} 
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-md">
                            {categoryName || 'General'}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 bg-white">
                        <h3 className="text-xl font-semibold text-blue-900 mb-2 hover:text-orange-500 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center text-gray-500 bg-gray-50 rounded-xl p-12 mb-12">
            <Image className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No Portfolio Items</h3>
            <p className="text-gray-400">Portfolio items will appear here once they're added to the database.</p>
          </div>
        )}
        
        <div className="text-center">
          <Button asChild className="bg-blue-900 hover:bg-blue-800 text-white rounded-2xl px-8 py-6 font-semibold">
            <Link to="/portfolio" className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
