
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';
import TestimonialCard from '@/components/ui/testimonial-card';

const Reviews = () => {
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
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
        
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180" fill="white">
            <path d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="container-wide py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Review Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Share Your Experience</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <Input type="text" placeholder="John Doe" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input type="text" placeholder="Company Name" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Your Position</label>
                <Input type="text" placeholder="CEO" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
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
                <label className="block text-sm font-medium mb-2">Your Review</label>
                <Textarea 
                  placeholder="Share your experience working with us..."
                  className="min-h-[150px]"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                Submit Review
              </Button>
            </form>
          </div>
          
          {/* Recent Reviews */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Recent Reviews</h2>
            <div className="space-y-6">
              <TestimonialCard
                quote="Working with this team has been an absolute pleasure. They delivered beyond our expectations."
                name="Sarah Johnson"
                position="Marketing Director"
                company="TechVision"
                rating={5}
              />
              <TestimonialCard
                quote="Exceptional service and amazing results. Would highly recommend!"
                name="Michael Chen"
                position="CEO"
                company="Eco Solutions"
                rating={5}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;
