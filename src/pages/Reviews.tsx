import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import TestimonialCard from '@/components/ui/testimonial-card';
import { reviewsService } from '@/services/reviewsService';

interface Review {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  featured_image?: string;
  status: string;
  created_at: string;
  updated_at: string;
}

const Reviews = () => {
  const { toast } = useToast();
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    content: ''
  });

  const { data: reviews } = useQuery<Review[]>({
    queryKey: ['public-reviews'],
    queryFn: reviewsService.getPublicReviews
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await reviewsService.createReview({
        ...formData,
        rating
      });
      
      toast({
        title: "Review Submitted!",
        description: "Thank you for your review. It will be published after moderation.",
      });
      
      // Reset form
      setFormData({
        name: '',
        company: '',
        position: '',
        content: ''
      });
      setRating(5);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your review. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="hero-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Customer Reviews</h1>
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1">
              See what our clients say about working with us
            </p>
          </div>
        </div>
        
        {/* Straight line instead of wave */}
        <div className="hero-straight-line">
          <div className="h-16 bg-white absolute bottom-0 left-0 right-0"></div>
        </div>
      </div>

      <div className="container-wide py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Share Your Experience</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name <span className="text-futurity-orange">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company <span className="text-futurity-orange">*</span>
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="position" className="block text-sm font-medium mb-2">
                  Your Position <span className="text-futurity-orange">*</span>
                </label>
                <Input
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Rating <span className="text-futurity-orange">*</span>
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="text-gray-300 hover:text-futurity-orange focus:outline-none"
                    >
                      <Star
                        size={24}
                        fill={(hoveredRating || rating) >= star ? 'currentColor' : 'none'}
                        className={(hoveredRating || rating) >= star ? 'text-futurity-orange' : ''}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="content" className="block text-sm font-medium mb-2">
                  Your Review <span className="text-futurity-orange">*</span>
                </label>
                <Textarea
                  id="content"
                  name="content"
                  rows={5}
                  value={formData.content}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
              </Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Recent Reviews</h2>
            <div className="space-y-6">
              {reviews?.map((review) => (
                <TestimonialCard
                  key={review.id}
                  quote={review.content}
                  name={review.name}
                  position={review.position}
                  company={review.company}
                  rating={review.rating}
                />
              ))}
              {!reviews?.length && (
                <p className="text-gray-500 text-center py-8">No reviews yet. Be the first to share your experience!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;
