import { Routes, Route } from 'react-router-dom';
import AuthRoutes from './AuthRoute';
import NewsRoutes from './NewsRoute';
import PublicRoutes from './PublicRoute';
import InternRoutes from './InternRoute';
import AdminRoutes from './AdminRoute';
import Homepage from '../features/news/pages/HomePage';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* First Routes */}
      <Route path="/" element={<Homepage />} />
      {/* Auth Routes */}
      <Route path="/*" element={<AuthRoutes />} />
      {/* News Routes */}
      <Route path="/news/*" element={<NewsRoutes />} />
      {/* Public Routes - Protected */}
      <Route path="/public/*" element={
        <ProtectedRoute>
          <PublicRoutes />
        </ProtectedRoute>
      } />
      {/* Intern Routes - Protected */}
      <Route path="/intern/*" element={
        <ProtectedRoute>
          <InternRoutes />
        </ProtectedRoute>
      } />
      {/* Admin Routes - Protected */}
      <Route path="/admin/*" element={
        <ProtectedRoute>
          <AdminRoutes />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

export default AppRoutes;
