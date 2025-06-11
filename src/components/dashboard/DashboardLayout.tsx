
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Image, 
  MessageSquare, 
  BarChart,
  Menu,
  X,
  Star,
  LogOut,
  Palette,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import SectionHeading from '@/components/ui/section-heading';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const DashboardLayout = ({ children, title, subtitle }: DashboardLayoutProps) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();
  const { logout, hasRole, isStaff } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const navigationItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
      requiredRole: 'viewer' as const,
    },
    {
      title: 'Blog Posts',
      icon: FileText,
      href: '/dashboard/posts',
      requiredRole: 'editor' as const,
    },
    {
      title: 'Portfolio',
      icon: Image,
      href: '/dashboard/portfolio',
      requiredRole: 'editor' as const,
    },
    {
      title: 'Inquiries',
      icon: MessageSquare,
      href: '/dashboard/inquiries',
      requiredRole: 'viewer' as const,
    },
    {
      title: 'Reviews',
      icon: Star,
      href: '/dashboard/reviews',
      requiredRole: 'editor' as const,
    },
    {
      title: 'Analytics',
      icon: BarChart,
      href: '/dashboard/analytics',
      requiredRole: 'viewer' as const,
    },
    {
      title: 'Staff',
      icon: Users,
      href: '/dashboard/staff',
      requiredRole: 'admin' as const,
    },
    {
      title: 'Style Guide',
      icon: Palette,
      href: '/dashboard/style-guide',
      requiredRole: 'editor' as const,
    },
  ];

  // Filter navigation items based on user role and staff status
  const filteredNavigationItems = navigationItems.filter(item => 
    isStaff && hasRole(item.requiredRole)
  );

  const handleLogout = async () => {
    await logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate('/auth');
  };

  // If user is not staff, show access denied
  if (!isStaff) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Restricted</h1>
          <p className="text-gray-600 mb-4">This dashboard is only available to staff members.</p>
          <Button asChild>
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-b py-3 px-4 flex justify-between items-center">
        <Link to="/dashboard" className="font-bold text-xl text-futurity-blue">
          Futurity CMS
        </Link>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className={`hidden md:block w-64 h-screen bg-white border-r fixed`}>
          <div className="p-4 border-b">
            <Link to="/dashboard" className="font-bold text-xl text-futurity-blue">
              Futurity CMS
            </Link>
          </div>
          <nav className="py-4 flex flex-col h-[calc(100%-70px)]">
            <ul>
              {filteredNavigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-futurity-blue",
                      location.pathname === item.href && "bg-gray-100 text-futurity-blue border-r-4 border-futurity-orange"
                    )}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Logout button at the bottom */}
            <div className="mt-auto border-t pt-4 px-4">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-gray-600 hover:text-red-600 hover:bg-red-50"
                onClick={handleLogout}
              >
                <LogOut className="w-5 h-5 mr-3" />
                <span>Logout</span>
              </Button>
            </div>
          </nav>
        </aside>

        {/* Mobile Navigation Menu */}
        {mobileNavOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-white">
            <div className="flex justify-between items-center p-4 border-b">
              <Link to="/dashboard" className="font-bold text-xl text-futurity-blue">
                Futurity CMS
              </Link>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setMobileNavOpen(false)}
              >
                <X size={24} />
              </Button>
            </div>
            <nav className="py-4 flex flex-col h-[calc(100%-70px)]">
              <ul>
                {filteredNavigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100",
                        location.pathname === item.href && "bg-gray-100 text-futurity-blue border-l-4 border-futurity-orange"
                      )}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Logout button at the bottom */}
              <div className="mt-auto border-t pt-4 px-4">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-gray-600 hover:text-red-600 hover:bg-red-50"
                  onClick={handleLogout}
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  <span>Logout</span>
                </Button>
              </div>
            </nav>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title={title} 
              subtitle={subtitle}
              className="mb-6"
            />
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
