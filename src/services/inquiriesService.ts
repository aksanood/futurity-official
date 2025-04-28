
import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/integrations/supabase/types";

type InquiryRow = Database["public"]["Tables"]["inquiries"]["Row"];

interface CreateInquiryDTO {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  source: string;
}

export type Inquiry = InquiryRow;

export const inquiriesService = {
  createInquiry: async (inquiry: CreateInquiryDTO) => {
    const { data, error } = await supabase
      .from('inquiries')
      .insert([inquiry])
      .select()
      .single();

    if (error) {
      console.error('Error creating inquiry:', error);
      throw error;
    }
    return data;
  },

  getAllInquiries: async () => {
    const { data, error } = await supabase
      .from('inquiries')
      .select()
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching inquiries:', error);
      throw error;
    }
    return data;
  },

  updateInquiryStatus: async (id: string, status: 'new' | 'contacted' | 'resolved') => {
    const { data, error } = await supabase
      .from('inquiries')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating inquiry status:', error);
      throw error;
    }
    return data;
  }
};
