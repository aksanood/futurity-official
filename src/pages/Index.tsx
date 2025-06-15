import { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ProcessSection from '@/components/ui/process-section';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';
import { getAllPortfolioItems, getServiceCategories } from '@/data/portfolioData';
import { reviewsService } from '@/services/reviewsService';
import { PortfolioItem } from '@/types/portfolio';
import { Review } from '@/services/reviewsService';
import { ServiceCategory } from '@/types/portfolio';

const Index = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Starting to fetch portfolio and reviews data...');
        const [portfolioData, reviewsData, categoriesData] = await Promise.all([
          getAllPortfolioItems(),
          reviewsService.getPublicReviews(),
          getServiceCategories()
        ]);
        
        console.log('Portfolio data fetched:', portfolioData);
        console.log('Reviews data fetched:', reviewsData);
        console.log('Categories data fetched:', categoriesData);
        
        // Get featured portfolio items or latest 3
        const featuredPortfolio = portfolioData
          .filter(item => item.featured)
          .slice(0, 3);
        
        console.log('Featured portfolio items:', featuredPortfolio);
        
        if (featuredPortfolio.length < 3) {
          const remaining = 3 - featuredPortfolio.length;
          const latestItems = portfolioData
            .filter(item => !item.featured)
            .slice(0, remaining);
          console.log('Latest items to fill:', latestItems);
          setPortfolioItems([...featuredPortfolio, ...latestItems]);
        } else {
          setPortfolioItems(featuredPortfolio);
        }
        
        const reviewsToShow = reviewsData.slice(0, 3);
        console.log('Reviews to show:', reviewsToShow);
        setReviews(reviewsToShow);
        setCategories(categoriesData);
        
        setError(null);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log('Current state - loading:', loading, 'portfolioItems:', portfolioItems, 'reviews:', reviews, 'categories:', categories, 'error:', error);

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection 
        portfolioItems={portfolioItems}
        loading={loading}
        error={error}
        categories={categories}
      />
      <ProcessSection />
      <TestimonialsSection 
        reviews={reviews}
        loading={loading}
        error={error}
      />
      <CtaSection />
    </Layout>
  );
};

export default Index;
