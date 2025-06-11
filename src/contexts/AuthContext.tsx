
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  created_at: string;
  updated_at: string;
}

interface UserRole {
  id: string;
  user_id: string;
  role: 'admin' | 'editor' | 'viewer' | 'salesman';
  created_at: string;
}

interface UserType {
  id: string;
  user_id: string;
  user_type: 'staff' | 'customer';
  status: 'pending' | 'active' | 'suspended';
  invited_by: string | null;
  created_at: string;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  userRole: 'admin' | 'editor' | 'viewer' | 'salesman' | null;
  userType: UserType | null;
  session: Session | null;
  login: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string, fullName?: string) => Promise<{ error: any }>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  loading: boolean;
  hasRole: (role: 'admin' | 'editor' | 'viewer' | 'salesman') => boolean;
  isStaff: boolean;
  canAccessPage: (page: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [userRole, setUserRole] = useState<'admin' | 'editor' | 'viewer' | 'salesman' | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email);
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Defer data fetching to prevent deadlocks
          setTimeout(async () => {
            await fetchUserProfile(session.user.id);
            await fetchUserRole(session.user.id);
            await fetchUserType(session.user.id);
          }, 0);
        } else {
          setProfile(null);
          setUserRole(null);
          setUserType(null);
        }
        setLoading(false);
      }
    );

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('Initial session:', session?.user?.email);
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        setTimeout(async () => {
          await fetchUserProfile(session.user.id);
          await fetchUserRole(session.user.id);
          await fetchUserType(session.user.id);
        }, 0);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        return;
      }

      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const fetchUserRole = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .single();

      if (error) {
        console.error('Error fetching user role:', error);
        setUserRole(null);
        return;
      }

      console.log('User role fetched:', data.role);
      setUserRole(data.role);
    } catch (error) {
      console.error('Error fetching user role:', error);
      setUserRole(null);
    }
  };

  const fetchUserType = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_types')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) {
        console.error('Error fetching user type:', error);
        setUserType(null);
        return;
      }

      console.log('User type fetched:', data);
      // Type assertion to ensure proper typing
      const typedUserType: UserType = {
        id: data.id,
        user_id: data.user_id,
        user_type: data.user_type as 'staff' | 'customer',
        status: data.status as 'pending' | 'active' | 'suspended',
        invited_by: data.invited_by,
        created_at: data.created_at
      };
      setUserType(typedUserType);
    } catch (error) {
      console.error('Error fetching user type:', error);
      setUserType(null);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      return { error };
    } catch (error) {
      return { error };
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, fullName?: string) => {
    try {
      setLoading(true);
      const redirectUrl = `${window.location.origin}/`;
      
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            full_name: fullName || '',
          }
        }
      });
      return { error };
    } catch (error) {
      return { error };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setProfile(null);
    setUserRole(null);
    setUserType(null);
    setLoading(false);
  };

  const hasRole = (role: 'admin' | 'editor' | 'viewer' | 'salesman'): boolean => {
    console.log('Checking role:', role, 'User role:', userRole, 'Is staff:', isStaff);
    if (!userRole || !isStaff) return false;
    
    // Admin has access to everything
    if (userRole === 'admin') return true;
    
    // Editor has access to editor and viewer
    if (userRole === 'editor' && (role === 'editor' || role === 'viewer')) return true;
    
    // Salesman has access to viewer
    if (userRole === 'salesman' && role === 'viewer') return true;
    
    // Viewer only has access to viewer
    if (userRole === 'viewer' && role === 'viewer') return true;
    
    // Exact role match for salesman
    if (userRole === 'salesman' && role === 'salesman') return true;
    
    return false;
  };

  const canAccessPage = async (page: string): Promise<boolean> => {
    if (!user || !isStaff) return false;
    
    try {
      const { data, error } = await supabase
        .from('staff_permissions')
        .select('can_access')
        .eq('user_id', user.id)
        .eq('dashboard_page', page)
        .single();

      if (error) {
        console.error('Error checking page access:', error);
        return false;
      }

      return data?.can_access || false;
    } catch (error) {
      console.error('Error checking page access:', error);
      return false;
    }
  };

  const isAuthenticated = !!session;
  const isStaff = userType?.user_type === 'staff' && userType?.status === 'active';

  console.log('Auth Context State:', { 
    isAuthenticated, 
    isStaff, 
    userRole, 
    userType,
    hasViewerRole: hasRole('viewer')
  });

  return (
    <AuthContext.Provider value={{
      user,
      profile,
      userRole,
      userType,
      session,
      login,
      signUp,
      logout,
      isAuthenticated,
      loading,
      hasRole,
      isStaff,
      canAccessPage
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthProvider;
