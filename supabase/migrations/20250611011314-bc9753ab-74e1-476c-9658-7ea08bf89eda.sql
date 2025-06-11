
-- First, let's create a table to store email invitations
CREATE TABLE public.staff_invitations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  role app_role NOT NULL,
  invited_by UUID REFERENCES auth.users(id) NOT NULL,
  invitation_token UUID DEFAULT gen_random_uuid(),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'expired')),
  expires_at TIMESTAMP WITH TIME ZONE DEFAULT (now() + interval '7 days'),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on staff_invitations
ALTER TABLE public.staff_invitations ENABLE ROW LEVEL SECURITY;

-- Allow admins to manage invitations
CREATE POLICY "Admins can manage invitations" 
  ON public.staff_invitations 
  FOR ALL 
  USING (public.has_role(auth.uid(), 'admin'));

-- Update the send_staff_invitation function to store invitation and return email data
CREATE OR REPLACE FUNCTION public.send_staff_invitation(
  _email TEXT,
  _role app_role,
  _invited_by UUID
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  _invitation_id UUID;
  _token UUID;
  _result JSON;
BEGIN
  -- Check if current user is admin
  IF NOT public.has_role(_invited_by, 'admin') THEN
    RETURN json_build_object('error', 'Only admins can send invitations');
  END IF;

  -- Check if email already has a pending invitation
  IF EXISTS (
    SELECT 1 FROM public.staff_invitations 
    WHERE email = _email AND status = 'pending' AND expires_at > now()
  ) THEN
    RETURN json_build_object('error', 'An invitation is already pending for this email');
  END IF;

  -- Generate invitation ID and token
  _invitation_id := gen_random_uuid();
  _token := gen_random_uuid();
  
  -- Store invitation
  INSERT INTO public.staff_invitations (
    id, email, role, invited_by, invitation_token, status
  ) VALUES (
    _invitation_id, _email, _role, _invited_by, _token, 'pending'
  );
  
  _result := json_build_object(
    'success', true,
    'invitation_id', _invitation_id,
    'email', _email,
    'role', _role,
    'invitation_token', _token,
    'signup_url', 'https://bsdoepptrpgnoyfdvywr.supabase.co/auth/v1/signup'
  );
  
  RETURN _result;
END;
$$;

-- Create function to accept invitation and set up user
CREATE OR REPLACE FUNCTION public.accept_staff_invitation(
  _token UUID,
  _user_id UUID
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  _invitation RECORD;
  _result JSON;
BEGIN
  -- Get invitation details
  SELECT * INTO _invitation 
  FROM public.staff_invitations 
  WHERE invitation_token = _token 
    AND status = 'pending' 
    AND expires_at > now();

  IF NOT FOUND THEN
    RETURN json_build_object('error', 'Invalid or expired invitation');
  END IF;

  -- Update user type and role
  INSERT INTO public.user_types (user_id, user_type, status, invited_by)
  VALUES (_user_id, 'staff', 'active', _invitation.invited_by)
  ON CONFLICT (user_id) DO UPDATE SET
    user_type = 'staff',
    status = 'active',
    invited_by = _invitation.invited_by;

  INSERT INTO public.user_roles (user_id, role)
  VALUES (_user_id, _invitation.role)
  ON CONFLICT (user_id) DO UPDATE SET role = _invitation.role;

  -- Mark invitation as accepted
  UPDATE public.staff_invitations 
  SET status = 'accepted', updated_at = now()
  WHERE id = _invitation.id;

  -- Create default permissions for the new staff member
  INSERT INTO public.staff_permissions (user_id, dashboard_page, can_access)
  SELECT 
    _user_id,
    page,
    CASE 
      WHEN _invitation.role = 'admin' THEN true
      WHEN _invitation.role = 'editor' AND page IN ('dashboard', 'posts', 'portfolio', 'inquiries', 'reviews', 'analytics', 'style-guide') THEN true
      WHEN _invitation.role = 'viewer' AND page IN ('dashboard', 'inquiries', 'analytics') THEN true
      WHEN _invitation.role = 'salesman' AND page IN ('dashboard', 'inquiries', 'analytics') THEN true
      ELSE false
    END as can_access
  FROM (
    VALUES 
      ('dashboard'),
      ('posts'),
      ('portfolio'), 
      ('inquiries'),
      ('reviews'),
      ('analytics'),
      ('staff'),
      ('style-guide')
  ) AS pages(page)
  ON CONFLICT (user_id, dashboard_page) DO NOTHING;

  _result := json_build_object(
    'success', true,
    'message', 'Invitation accepted successfully'
  );
  
  RETURN _result;
END;
$$;
