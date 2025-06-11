
-- Drop existing policies first to avoid conflicts
DROP POLICY IF EXISTS "Users can view their own permissions" ON public.staff_permissions;
DROP POLICY IF EXISTS "Admins can manage staff permissions" ON public.staff_permissions;
DROP POLICY IF EXISTS "Users can view their own role" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can manage all user roles" ON public.user_roles;
DROP POLICY IF EXISTS "Staff can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;

-- Add RLS policies for staff_permissions table
CREATE POLICY "Users can view their own permissions" 
  ON public.staff_permissions 
  FOR SELECT 
  USING (auth.uid() = user_id);

-- Allow admins to manage staff permissions
CREATE POLICY "Admins can manage staff permissions" 
  ON public.staff_permissions 
  FOR ALL 
  USING (public.has_role(auth.uid(), 'admin'));

-- Add RLS policies for user_roles table
CREATE POLICY "Users can view their own role" 
  ON public.user_roles 
  FOR SELECT 
  USING (auth.uid() = user_id);

-- Allow admins to manage all user roles
CREATE POLICY "Admins can manage all user roles" 
  ON public.user_roles 
  FOR ALL 
  USING (public.has_role(auth.uid(), 'admin'));

-- Add RLS policies for profiles table to allow staff members to view each other
CREATE POLICY "Staff can view all profiles" 
  ON public.profiles 
  FOR SELECT 
  USING (
    public.is_staff_member(auth.uid()) OR 
    auth.uid() = id
  );

-- Allow users to update their own profile
CREATE POLICY "Users can update own profile" 
  ON public.profiles 
  FOR UPDATE 
  USING (auth.uid() = id);

-- Create a function to send staff invitations (since we can't use admin API)
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
  _result JSON;
BEGIN
  -- Check if current user is admin
  IF NOT public.has_role(_invited_by, 'admin') THEN
    RETURN json_build_object('error', 'Only admins can send invitations');
  END IF;

  -- Generate invitation ID
  _invitation_id := gen_random_uuid();
  
  -- Store invitation in a temporary table (you might want to create this)
  -- For now, we'll just return success and let the frontend handle the invitation
  
  _result := json_build_object(
    'success', true,
    'invitation_id', _invitation_id,
    'message', 'Invitation prepared - user should sign up manually'
  );
  
  RETURN _result;
END;
$$;

-- Create default staff permissions for different roles
INSERT INTO public.staff_permissions (user_id, dashboard_page, can_access)
SELECT 
  ur.user_id,
  page,
  CASE 
    WHEN ur.role = 'admin' THEN true
    WHEN ur.role = 'editor' AND page IN ('dashboard', 'posts', 'portfolio', 'inquiries', 'reviews', 'analytics', 'style-guide') THEN true
    WHEN ur.role = 'viewer' AND page IN ('dashboard', 'inquiries', 'analytics') THEN true
    WHEN ur.role = 'salesman' AND page IN ('dashboard', 'inquiries', 'analytics') THEN true
    ELSE false
  END as can_access
FROM public.user_roles ur
CROSS JOIN (
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
WHERE NOT EXISTS (
  SELECT 1 FROM public.staff_permissions sp 
  WHERE sp.user_id = ur.user_id AND sp.dashboard_page = pages.page
)
ON CONFLICT (user_id, dashboard_page) DO NOTHING;
