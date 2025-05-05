
import { getPortfolioItems, getPortfolioItemBySlug } from '@/services/portfolioService';
import { PortfolioItem } from '@/types/portfolio';

// Service categories matching your main services
const serviceCategories = [
  { id: 'web-development', name: 'Web Development' },
  { id: 'web-design', name: 'Web Design' },
  { id: 'ui-ux-design', name: 'UI/UX Design' },
  { id: 'digital-marketing', name: 'Digital Marketing' },
  { id: 'branding-services', name: 'Branding Services' },
  { id: 'content-writing', name: 'Content Writing' },
  { id: 'ai-development', name: 'AI Development' }
];

export const getServiceCategories = () => serviceCategories;

export async function getAllPortfolioItems() {
  try {
    console.log('Fetching portfolio items from Supabase...');
    const items = await getPortfolioItems();
    console.log('Received portfolio items:', items);
    return items;
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    return [];
  }
}

export async function getPortfolioItemBySlugAsync(slug: string) {
  try {
    console.log(`Fetching portfolio item with slug: ${slug}`);
    const item = await getPortfolioItemBySlug(slug);
    console.log('Received portfolio item:', item);
    return item;
  } catch (error) {
    console.error('Error fetching portfolio item:', error);
    return null;
  }
}

export async function getFilteredPortfolioItems(tag: string) {
  try {
    const items = await getPortfolioItems();
    console.log(`Filtering portfolio items by tag: ${tag}`);
    
    if (items.length > 0) {
      if (tag === 'all') return items;
      return items.filter(item => item.category.toLowerCase().includes(tag.toLowerCase()));
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching filtered portfolio items:', error);
    return [];
  }
}

export async function getFeaturedPortfolioItems(limit = 3) {
  try {
    const items = await getPortfolioItems();
    console.log('Fetching featured portfolio items');
    
    if (items.length > 0) {
      const featuredItems = items.filter(item => item.featured);
      return featuredItems.slice(0, limit);
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching featured portfolio items:', error);
    return [];
  }
}
