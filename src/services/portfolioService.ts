import { supabase } from '@/integrations/supabase/client';
import { PortfolioItem } from '@/types/portfolio';

export async function getPortfolioItems() {
  const { data, error } = await supabase
    .from('portfolio')
    .select('*')
    .order('date', { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function getPortfolioItemBySlug(slug: string) {
  const { data, error } = await supabase
    .from('portfolio')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();
  if (error) return null;
  return data;
}

export async function getPortfolioItemById(id: string) {
  const { data, error } = await supabase
    .from('portfolio')
    .select('*')
    .eq('id', id)
    .maybeSingle();
  if (error) return null;
  return data;
}

export async function createPortfolioItem(item: Omit<PortfolioItem, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('portfolio')
    .insert(item)
    .select();
  if (error) {
    console.error('Supabase insert error:', error);
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
  if (error) throw error;
  return data[0];
}

export async function deletePortfolioItem(id: string) {
  if (!id) {
    console.error('deletePortfolioItem: No id provided');
    throw new Error('No id provided for delete');
  }
  const { error } = await supabase
    .from('portfolio')
    .delete()
    .eq('id', id);
  if (error) {
    console.error('Supabase delete error:', error, 'for id:', id);
    throw error;
  }
  return true;
}

export async function getServiceCategories() {
  const { data, error } = await supabase
    .from('service_categories')
    .select('*')
    .order('name');
  if (error) throw error;
  return data || [];
}
