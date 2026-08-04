import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../features/auth/pages/LoginPage';
import RegisterPage from '../features/auth/pages/RegisterPage';
import NewsRoutes from './route/NewsRoute';
import PublicRoutes from './route/PublicRoute';
import InternRoutes from './route/InternRoute';
import AdminRoutes from './route/AdminRoute';
import HomePage from '../features/news/pages/HomePage';
import ProtectedRoute from './ProtectedRoute';
import useAuth from '../features/auth/api/useAuth';
import { dekripsiData } from '../utils/Crypto';

// Not Found Page
import NotFoundPage from '../features/notFound/pages/NotFoundPage';

const RootRedirect = () => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const userRole = dekripsiData(role);
  switch (userRole) {
    case 'admin':
      return <Navigate to="/admin" replace />;
    case 'intern':
      return <Navigate to="/intern" replace />;
    case 'public':
      return <Navigate to="/public" replace />;
    default:
      return <HomePage />;
  }
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Root Route */}
      <Route path="/" element={<RootRedirect />} />

      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* News Routes */}
      <Route path="/news/*" element={<NewsRoutes />} />

      {/* Public Routes - Protected */}
      <Route path="/public/*" element={
        <ProtectedRoute requiredRole="public">
          <PublicRoutes />
        </ProtectedRoute>
      } />

      {/* Intern Routes - Protected */}
      <Route path="/intern/*" element={
        <ProtectedRoute requiredRole="intern">
          <InternRoutes />
        </ProtectedRoute>
      } />

      {/* Admin Routes - Protected */}
      <Route path="/admin/*" element={
        <ProtectedRoute requiredRole="admin">
          <AdminRoutes />
        </ProtectedRoute>
      } />

      {/* Fallback & Not Found Routes */}
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
