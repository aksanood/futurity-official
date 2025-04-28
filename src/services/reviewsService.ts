
import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/integrations/supabase/types";

type ReviewRow = Database["public"]["Tables"]["reviews"]["Row"];

interface CreateReviewDTO {
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  featured_image?: string;
}

export type Review = ReviewRow;

export const reviewsService = {
  createReview: async (review: CreateReviewDTO) => {
    const { data, error } = await supabase
      .from('reviews')
      .insert([review])
      .select()
      .single();

    if (error) {
      console.error('Error creating review:', error);
      throw error;
    }
    return data;
  },

  getPublicReviews: async () => {
    const { data, error } = await supabase
      .from('reviews')
      .select()
      .eq('status', 'approved')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching public reviews:', error);
      throw error;
    }
    return data;
  },

  getAllReviews: async () => {
    const { data, error } = await supabase
      .from('reviews')
      .select()
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching all reviews:', error);
      throw error;
    }
    return data;
  },

  updateReviewStatus: async (id: string, status: 'pending' | 'approved' | 'rejected') => {
    const { data, error } = await supabase
      .from('reviews')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating review status:', error);
      throw error;
    }
    return data;
  }
};
