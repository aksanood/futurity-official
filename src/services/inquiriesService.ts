
import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/integrations/supabase/types";

type InquiryRow = Database["public"]["Tables"]["inquiries"]["Row"];
type InquiryStatus = 'new' | 'contacted' | 'resolved';

interface CreateInquiryDTO {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  source: string;
}

// Extending the Supabase type to ensure our expected status types
export interface Inquiry extends Omit<InquiryRow, 'status'> {
  status: InquiryStatus;
}

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
    return data as Inquiry;
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
    // Type assertion to ensure status is one of our expected values
    return data as Inquiry[];
  },

  updateInquiryStatus: async (id: string, status: InquiryStatus) => {
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
    return data as Inquiry;
  }
};
