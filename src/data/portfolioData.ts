
import { supabase } from '@/integrations/supabase/client';
import { getPortfolioItems, getPortfolioItemBySlug, getServiceCategories as fetchServiceCategories } from '@/services/portfolioService';
import { PortfolioItem } from '@/types/portfolio';

// Cached service categories for faster access
let cachedServiceCategories = null;

export async function getServiceCategories() {
  try {
    if (cachedServiceCategories) {
      return cachedServiceCategories;
    }
    
    const categories = await fetchServiceCategories();
    cachedServiceCategories = categories;
    return categories;
  } catch (error) {
    console.error('Error fetching service categories:', error);
    return [];
  }
}

export async function getAllPortfolioItems() {
  try {
    const items = await getPortfolioItems();
    return items;
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    return [];
  }
}

export async function getPortfolioItemBySlugAsync(slug: string) {
  try {
    return await getPortfolioItemBySlug(slug);
  } catch (error) {
    console.error(`Error fetching portfolio item with slug ${slug}:`, error);
    return null;
  }
}

export async function getFilteredPortfolioItems(tag: string) {
  try {
    const items = await getPortfolioItems();
    console.log(`Filtering portfolio items by tag: ${tag}`);
    console.log('All items before filtering:', items);
    
    if (items && items.length > 0) {
      if (tag === 'all') return items;
      
      // Get all service categories
      const categories = await getServiceCategories();
      
      // Find the category that matches the tag
      const matchingCategory = categories.find(cat => cat.id === tag);
      const categoryToMatch = matchingCategory ? matchingCategory.name : tag;
      
      console.log('Filtering by category:', categoryToMatch);
      // Use portfolio_category property (not category)
      const filtered = items.filter(item => item.portfolio_category === categoryToMatch);
      console.log('Filtered items:', filtered);
      return filtered;
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
    return items
      .filter(item => item.featured)
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching featured portfolio items:', error);
    return [];
  }
}
