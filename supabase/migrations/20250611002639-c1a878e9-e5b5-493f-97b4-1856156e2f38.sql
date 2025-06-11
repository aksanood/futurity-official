
-- Add salesman to the existing app_role enum
ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'salesman';

-- Create a staff_permissions table for granular access control
CREATE TABLE public.staff_permissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  dashboard_page TEXT NOT NULL,
  can_access BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, dashboard_page)
);

-- Create a user_types table to distinguish staff from customers
CREATE TABLE public.user_types (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  user_type TEXT NOT NULL CHECK (user_type IN ('staff', 'customer')),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'suspended')),
  invited_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Enable RLS on new tables
ALTER TABLE public.staff_permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_types ENABLE ROW LEVEL SECURITY;

-- RLS policies for staff_permissions
CREATE POLICY "Admins can manage all staff permissions" 
  ON public.staff_permissions 
  FOR ALL 
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can view their own permissions" 
  ON public.staff_permissions 
  FOR SELECT 
  USING (auth.uid() = user_id);

-- RLS policies for user_types
CREATE POLICY "Admins can manage all user types" 
  ON public.user_types 
  FOR ALL 
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can view their own user type" 
  ON public.user_types 
  FOR SELECT 
  USING (auth.uid() = user_id);

-- Update the handle_new_user function to handle staff vs customer registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  -- Insert into profiles
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', '')
  );
  
  -- Handle user type and role assignment
  IF NEW.email = 'admin@futurity.biz' THEN
    -- Admin user
    INSERT INTO public.user_types (user_id, user_type, status)
    VALUES (NEW.id, 'staff', 'active');
    
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin');
  ELSIF NEW.raw_user_meta_data ->> 'user_type' = 'staff' THEN
    -- Staff member (invited)
    INSERT INTO public.user_types (user_id, user_type, status, invited_by)
    VALUES (
      NEW.id, 
      'staff', 
      'pending',
      (NEW.raw_user_meta_data ->> 'invited_by')::uuid
    );
    
    -- Assign role based on invitation
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data ->> 'role', 'viewer')::app_role);
  ELSE
    -- Regular customer
    INSERT INTO public.user_types (user_id, user_type, status)
    VALUES (NEW.id, 'customer', 'active');
    
    -- Customers don't get dashboard roles by default
  END IF;
  
  RETURN NEW;
END;
$$;

-- Function to check if user is staff
CREATE OR REPLACE FUNCTION public.is_staff_member(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_types
    WHERE user_id = _user_id
      AND user_type = 'staff'
      AND status = 'active'
  )
$$;

-- Function to check page permissions
CREATE OR REPLACE FUNCTION public.can_access_page(_user_id UUID, _page TEXT)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT CASE 
    WHEN public.has_role(_user_id, 'admin') THEN true
    ELSE COALESCE(
      (SELECT can_access FROM public.staff_permissions 
       WHERE user_id = _user_id AND dashboard_page = _page),
      false
    )
  END
$$;
