
import { Navigate } from 'react-router-dom';

const AdminLogin = () => {
  // Redirect to the new auth page
  return <Navigate to="/auth" replace />;
};

export default AdminLogin;
