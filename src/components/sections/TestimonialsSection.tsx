import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Review } from '@/services/reviewsService';
import { useState, useEffect } from 'react';

interface TestimonialsSectionProps {
  reviews: Review[];
  loading: boolean;
  error: string | null;
}

const TestimonialsSection = ({ reviews, loading, error }: TestimonialsSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (!reviews || reviews.length === 0 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews, isHovered]);

  const handleNext = () => {
    console.log('Next clicked - Current slide:', currentSlide);
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const handlePrevious = () => {
    console.log('Previous clicked - Current slide:', currentSlide);
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    if (!reviews || reviews.length === 0) return [];
    
    // On mobile, show 1 review; on desktop, show 3
    const itemsToShow = window.innerWidth >= 768 ? 3 : 1;
    const visibleReviews = [];
    
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentSlide + i) % reviews.length;
      visibleReviews.push(reviews[index]);
    }
    
    return visibleReviews;
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 rounded-full px-4 py-2 text-orange-500 font-medium text-sm mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            Client Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it – here's what our clients have to say about working with us.
          </p>
        </div>
        
        {error && (
          <div className="text-center text-red-500 mb-8 p-4 bg-red-50 rounded-lg">
            Error loading reviews: {error}
          </div>
        )}
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-gray-500 text-lg">Loading reviews...</div>
          </div>
        ) : reviews && reviews.length > 0 ? (
          <div 
            className="relative px-16 md:px-20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Testimonials Container */}
            <div className="w-full max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {getVisibleReviews().map((review, index) => (
                  <div key={`${review.id}-${currentSlide}-${index}`} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                    {/* Star Rating */}
                    <div className="flex space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={18}
                          fill={i < review.rating ? "#F97316" : "none"}
                          className={i < review.rating ? "text-orange-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <svg className="h-8 w-8 text-orange-500 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391C14.017 10.645 15.995 7.5 20 7.5v3.482c-1.792 0-3.001.913-3.001 2.733v1.649h3.001V21h-6.001zm-8 0v-7.391C6.017 10.645 7.995 7.5 12 7.5v3.482c-1.792 0-3.001.913-3.001 2.733v1.649h3.001V21h-6z" />
                      </svg>
                    </div>
                    
                    {/* Review Content */}
                    <p className="text-blue-900 font-medium mb-6 flex-grow leading-relaxed">
                      "{review.content}"
                    </p>
                    
                    {/* Author Info */}
                    <div className="flex items-center mt-auto">
                      {review.featured_image && (
                        <img 
                          src={review.featured_image} 
                          alt={review.name} 
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                      )}
                      <div>
                        <h4 className="font-semibold text-base text-gray-900">{review.name}</h4>
                        <p className="text-gray-600 text-sm">{review.position}, {review.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={handlePrevious}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <button
              onClick={handleNext}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 bg-gray-50 rounded-xl p-12">
            <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No Reviews Yet</h3>
            <p className="text-gray-400">Client testimonials will appear here once they're added and approved.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
