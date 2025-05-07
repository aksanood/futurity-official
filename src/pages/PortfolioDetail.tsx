import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Building, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { getPortfolioItemBySlugAsync } from '@/data/portfolioData';
import { PortfolioItem } from '@/types/portfolio';
import { getServiceCategories } from '@/services/portfolioService';

const PortfolioDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [item, setItem] = useState<PortfolioItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [categoryName, setCategoryName] = useState<string>('');
  const [allImages, setAllImages] = useState<string[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    const fetchPortfolioItem = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        const data = await getPortfolioItemBySlugAsync(slug);

        if (data) {
          setItem(data);
          // Prepare all images (main + gallery)
          const images = [data.image_url, ...(data.gallery || []).filter((img: string) => img && img !== data.image_url)];
          setAllImages(images);
        }
      } catch (error) {
        console.error('Error fetching portfolio item:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioItem();
  }, [slug]);

  useEffect(() => {
    const fetchCats = async () => {
      const cats = await getServiceCategories();
      setCategories(cats);
      if (item) {
        const cat = cats.find((c: any) => c.id === item.portfolio_category);
        setCategoryName(cat ? cat.name : '');
      }
    };
    fetchCats();
  }, [item]);

  // Auto-slide logic
  useEffect(() => {
    if (allImages.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % allImages.length);
    }, 3500); // 3.5 seconds per slide
    return () => clearInterval(interval);
  }, [allImages]);

  if (loading) {
    return (
      <Layout>
        <div className="container-wide py-24">
          <div className="flex justify-center items-center min-h-[40vh]">
            <p className="text-xl">Loading project details...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!item) {
    return (
      <Layout>
        <div className="container-wide py-24">
          <div className="text-center min-h-[40vh] flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Project Not Found</h2>
            <p className="text-lg text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/portfolio">Back to Portfolio</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container-wide">
          <nav className="flex items-center text-sm">
            <Link to="/" className="text-gray-500 hover:text-futurity-blue">Home</Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <Link to="/portfolio" className="text-gray-500 hover:text-futurity-blue">Portfolio</Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <span className="text-futurity-blue font-medium">{item.title}</span>
          </nav>
        </div>
      </div>
      
      {/* Hero section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-wide">
          <div className="mb-8">
            <Link to="/portfolio" className="inline-flex items-center text-futurity-blue hover:text-futurity-orange mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{item.title}</h1>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-gray-600">
                <Building className="mr-2 h-4 w-4" />
                <span>Client: {item.client}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Completed: {new Date(item.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                })}</span>
              </div>
              <div className="bg-futurity-orange text-white px-3 py-1 rounded-full text-sm">
                {categoryName}
              </div>
            </div>
          </div>
          
          {/* Image slider */}
          {allImages.length > 0 && (
            <div className="relative mb-8 flex items-center justify-center bg-white rounded-xl border border-gray-200 h-96">
              <img
                src={allImages[activeImageIndex]}
                alt={item.title}
                className="max-h-full max-w-full object-contain rounded-xl transition-all duration-700 ease-in-out"
                style={{ margin: 'auto' }}
              />
              {allImages.length > 1 && (
                <div className="absolute inset-x-0 bottom-2 flex justify-center gap-2">
                  {allImages.map((img, idx) => (
                    <button
                      key={img}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-6 h-6 rounded-full border-2 ${activeImageIndex === idx ? 'border-futurity-orange bg-futurity-orange' : 'border-white bg-white/70'} transition`}
                      style={{ outline: 'none' }}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-cover rounded-full" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {/* Project details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-lg text-gray-700">{item.description}</p>
                
                <h3 className="text-xl font-bold mt-8 mb-4">The Challenge</h3>
                <div dangerouslySetInnerHTML={{ __html: item.challenge }} />
                
                <h3 className="text-xl font-bold mt-8 mb-4">Our Solution</h3>
                <div dangerouslySetInnerHTML={{ __html: item.solution }} />
                
                <h3 className="text-xl font-bold mt-8 mb-4">Results & Impact</h3>
                <div dangerouslySetInnerHTML={{ __html: item.results }} />
              </div>
            </div>
            
            <div className="lg:col-span-4">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-500 uppercase">Client</h4>
                    <p className="font-medium">{item.client}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-gray-500 uppercase">Service</h4>
                    <p className="font-medium">{categoryName}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-gray-500 uppercase">Completion Date</h4>
                    <p className="font-medium">{new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button asChild className="w-full">
                    <Link to="/contact">Start Your Project</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="bg-futurity-blue text-white py-16">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to discuss your project?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's create something amazing together. Our team is ready to bring your ideas to life.
          </p>
          <Button asChild size="lg" className="bg-futurity-orange hover:bg-futurity-orange/90 text-white border-0">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioDetail;
