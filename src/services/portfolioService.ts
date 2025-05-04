import { supabase } from '@/integrations/supabase/client';
import { PortfolioItem } from '@/types/portfolio';

export async function getPortfolioItems() {
  console.log('Calling getPortfolioItems from Supabase');
  const { data, error } = await supabase
    .from('portfolio')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching portfolio items:', error);
    throw error;
  }

  console.log('Retrieved portfolio items from Supabase:', data);
  return data || [];
}

export async function getPortfolioItemBySlug(slug: string) {
  console.log(`Fetching portfolio item with slug: ${slug} from Supabase`);
  const { data, error } = await supabase
    .from('portfolio')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching portfolio item by slug:', error);
    return null;
  }

  console.log('Retrieved portfolio item:', data);
  return data;
}

export async function getPortfolioItemById(id: string) {
  const { data, error } = await supabase
    .from('portfolio')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching portfolio item by id:', error);
    return null;
  }

  return data;
}

export async function createPortfolioItem(item: Omit<PortfolioItem, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('portfolio')
    .insert(item)
    .select();

  if (error) {
    console.error('Error creating portfolio item:', error);
    throw error;
  }

  return data[0];
}

export async function updatePortfolioItem(id: string, item: Partial<PortfolioItem>) {
  const { data, error } = await supabase
    .from('portfolio')
    .update(item)
    .eq('id', id)
    .select();

  if (error) {
    console.error('Error updating portfolio item:', error);
    throw error;
  }

  return data[0];
}

export async function deletePortfolioItem(id: string) {
  const { error } = await supabase
    .from('portfolio')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting portfolio item:', error);
    throw error;
  }

  return true;
}
