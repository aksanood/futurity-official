
-- Drop existing policies that might be too restrictive
DROP POLICY IF EXISTS "Users can view their own user type" ON public.user_types;
DROP POLICY IF EXISTS "Admins can manage all user types" ON public.user_types;

-- Create a more permissive policy for users to view their own user type
CREATE POLICY "Users can view their own user type" 
  ON public.user_types 
  FOR SELECT 
  USING (auth.uid() = user_id);

-- Create admin policy for managing all user types
CREATE POLICY "Admins can manage all user types" 
  ON public.user_types 
  FOR ALL 
  USING (public.has_role(auth.uid(), 'admin'));

-- Ensure the admin user has a user_type record
INSERT INTO public.user_types (user_id, user_type, status)
VALUES ('c322fe73-d99b-43c1-9aa3-895861bb158c', 'staff', 'active')
ON CONFLICT (user_id) DO UPDATE SET
  user_type = 'staff',
  status = 'active';
