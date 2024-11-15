import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import AuthService from './AuthService';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(AuthService.loggedIn());

  useEffect(() => {
    // Check authentication status on initial load
    setIsAuthenticated(AuthService.loggedIn());
  }, []);

  const login = (token: string) => {
    AuthService.login(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    AuthService.logout();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
