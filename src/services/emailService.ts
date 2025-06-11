
import { supabase } from '@/integrations/supabase/client';

interface InvitationEmailData {
  email: string;
  role: string;
  invitation_token: string;
  signup_url: string;
}

export const sendStaffInvitationEmail = async (invitationData: InvitationEmailData) => {
  try {
    // For now, we'll use a simple email service or integrate with an existing email provider
    // This is where you would integrate with your email service (SendGrid, Mailgun, etc.)
    console.log('Sending invitation email to:', invitationData.email);
    console.log('Invitation data:', invitationData);
    
    // Return success for now - in a real implementation, you would send the actual email
    return { success: true };
  } catch (error) {
    console.error('Error sending invitation email:', error);
    return { success: false, error: 'Failed to send invitation email' };
  }
};

export const getStaffInvitations = async () => {
  const { data, error } = await supabase
    .from('staff_invitations')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const acceptInvitation = async (token: string, userId: string) => {
  const { data, error } = await supabase.rpc('accept_staff_invitation', {
    _token: token,
    _user_id: userId
  });

  if (error) throw error;
  return data;
};
