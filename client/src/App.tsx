import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import { AuthProvider } from './auth/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      { path: '', element: <ProtectedRoute element={<Home />} /> },
      { path: 'login', element: <Login /> },
      { path: 'about', element:  <About />},
    ],
  },
]);

const App: React.FC = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
