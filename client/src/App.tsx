import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import ActorSearchResult from './pages/ActorSearchResult';
import FavoriteActorDetails from './pages/FavoriteActorDetails';
import { AuthProvider } from './auth/AuthProvider';
import { ActorProvider } from './context/ActorContext';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '',
        element: (
          <ProtectedRoute element={
            <ActorProvider>
              <Home />
            </ActorProvider>
          } />
        ),
      },
      { path: 'login', element: <Login /> },
      { path: 'about', element: <About /> },
      {
        path: 'actor/:name',
        element: (
          <ProtectedRoute element={
            <ActorProvider>
              <ActorSearchResult />
            </ActorProvider>
          } />
        ),
      },
      {
        path: 'favorite/actor/:name',
        element: (
          <ProtectedRoute element={
            <ActorProvider>
              <FavoriteActorDetails />
            </ActorProvider>
          } />
        ),
      },
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
