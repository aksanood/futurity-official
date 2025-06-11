
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'editor' | 'viewer' | 'salesman';
  requireStaff?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole = 'viewer',
  requireStaff = true
}) => {
  const { isAuthenticated, hasRole, isStaff, loading, userRole, userType } = useAuth();
  const location = useLocation();

  console.log('ProtectedRoute check:', {
    isAuthenticated,
    isStaff,
    userRole,
    userType,
    requiredRole,
    requireStaff,
    hasRequiredRole: hasRole(requiredRole),
    loading
  });

  // Show loading spinner while checking auth state
  if (loading) {
    console.log('ProtectedRoute: Still loading...');
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Loader2 className="h-8 w-8 animate-spin text-futurity-blue" />
      </div>
    );
  }

  if (!isAuthenticated) {
    console.log('ProtectedRoute: Not authenticated, redirecting to auth');
    // Redirect to auth page if not authenticated
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  if (requireStaff && !isStaff) {
    console.log('ProtectedRoute: Staff access required but user is not staff, redirecting to home');
    // Redirect to main page if staff access required but user is not staff
    return <Navigate to="/" state={{ accessDenied: true }} replace />;
  }

  if (isStaff && !hasRole(requiredRole)) {
    console.log('ProtectedRoute: Insufficient role, redirecting to dashboard');
    // Redirect to dashboard with access denied message if role insufficient
    return <Navigate to="/dashboard" state={{ accessDenied: true }} replace />;
  }

  console.log('ProtectedRoute: Access granted');
  return <>{children}</>;
};

export default ProtectedRoute;
