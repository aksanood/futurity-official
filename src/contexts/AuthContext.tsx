
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminUser {
  username: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: AdminUser | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('admin_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    // For demo purposes, hardcoded credentials
    if (username === 'admin' && password === 'Futurity25.') {
      const adminUser: AdminUser = { username, isAdmin: true };
      setUser(adminUser);
      setIsAuthenticated(true);
      localStorage.setItem('admin_user', JSON.stringify(adminUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('admin_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
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
