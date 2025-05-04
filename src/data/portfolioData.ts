
import { getPortfolioItems, getPortfolioItemBySlug } from '@/services/portfolioService';
import { PortfolioItem } from '@/types/portfolio';

// Mock data for initial page load or fallback
const mockPortfolioItems: PortfolioItem[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform Redesign',
    slug: 'ecommerce-platform-redesign',
    client: 'Fashion Retailer Inc.',
    category: 'Web Development',
    description: 'Complete redesign and development of an e-commerce platform, focusing on user experience and conversion optimization.',
    challenge: '<p>The client was experiencing high cart abandonment rates and poor mobile engagement.</p>',
    solution: '<p>We delivered a responsive redesign with streamlined checkout process.</p>',
    results: '<p>40% increase in conversion rate. 25% reduction in cart abandonment.</p>',
    image_url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
    gallery: ['https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d', 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387'],
    featured: true,
    date: '2023-07-15',
  },
  // ... more mock items
];

export async function getAllPortfolioItems() {
  try {
    const items = await getPortfolioItems();
    return items.length > 0 ? items : mockPortfolioItems;
  } catch (error) {
    console.error('Error fetching portfolio items, using mock data:', error);
    return mockPortfolioItems;
  }
}

export async function getPortfolioItemBySlugAsync(slug: string) {
  try {
    const item = await getPortfolioItemBySlug(slug);
    if (item) return item;
    
    // Fallback to mock data
    return mockPortfolioItems.find(item => item.slug === slug);
  } catch (error) {
    console.error('Error fetching portfolio item, using mock data:', error);
    return mockPortfolioItems.find(item => item.slug === slug);
  }
}

export async function getFilteredPortfolioItems(tag: string) {
  try {
    const items = await getPortfolioItems();
    if (items.length > 0) {
      if (tag === 'all') return items;
      return items.filter(item => item.category.toLowerCase().includes(tag));
    }
    
    // Fallback to mock data
    if (tag === 'all') return mockPortfolioItems;
    return mockPortfolioItems.filter(item => 
      item.category.toLowerCase().includes(tag) || 
      // Assuming we might have tags in the future
      false
    );
  } catch (error) {
    console.error('Error fetching filtered portfolio items, using mock data:', error);
    if (tag === 'all') return mockPortfolioItems;
    return mockPortfolioItems.filter(item => 
      item.category.toLowerCase().includes(tag) || 
      false
    );
  }
}

export async function getFeaturedPortfolioItems(limit = 3) {
  try {
    const items = await getPortfolioItems();
    if (items.length > 0) {
      return items
        .filter(item => item.featured)
        .slice(0, limit);
    }
    
    // Fallback to mock data
    return mockPortfolioItems
      .filter(item => item.featured)
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching featured portfolio items, using mock data:', error);
    return mockPortfolioItems
      .filter(item => item.featured)
      .slice(0, limit);
  }
}
