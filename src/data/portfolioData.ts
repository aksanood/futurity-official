
import { getPortfolioItems, getPortfolioItemBySlug, getServiceCategories as fetchServiceCategories } from '@/services/portfolioService';
import { PortfolioItem } from '@/types/portfolio';

// Cached service categories for faster access
let cachedServiceCategories = null;

export async function getServiceCategories() {
  try {
    // If we have cached categories, return them
    if (cachedServiceCategories) {
      return cachedServiceCategories;
    }
    
    console.log('Fetching service categories from Supabase...');
    const categories = await fetchServiceCategories();
    console.log('Received service categories:', categories);
    
    // Map the database categories to the format needed for UI
    const mappedCategories = categories.map(cat => ({
      id: cat.slug,
      name: cat.name
    }));
    
    // Cache the categories for future use
    cachedServiceCategories = mappedCategories;
    
    return mappedCategories;
  } catch (error) {
    console.error('Error fetching service categories:', error);
    // Fallback to default categories if there's an error
    return [
      { id: 'web-development', name: 'Web Development' },
      { id: 'web-design', name: 'Web Design' },
      { id: 'ui-ux-design', name: 'UI/UX Design' },
      { id: 'digital-marketing', name: 'Digital Marketing' },
      { id: 'branding-services', name: 'Branding Services' },
      { id: 'content-writing', name: 'Content Writing' },
      { id: 'ai-development', name: 'AI Development' }
    ];
  }
}

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
    console.log('All items before filtering:', items);
    
    if (items && items.length > 0) {
      if (tag === 'all') return items;
      
      // Get all service categories
      const categories = await getServiceCategories();
      
      // Find the category that matches the tag
      const matchingCategory = categories.find(cat => cat.id === tag);
      const categoryToMatch = matchingCategory ? matchingCategory.name : tag;
      
      console.log('Filtering by category:', categoryToMatch);
      const filtered = items.filter(item => item.category === categoryToMatch);
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
    console.log('Fetching featured portfolio items');
    
    if (items && items.length > 0) {
      const featuredItems = items.filter(item => item.featured);
      return featuredItems.slice(0, limit);
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching featured portfolio items:', error);
    return [];
  }
}
