import { Routes, Route } from 'react-router-dom';
import AuthRoutes from './route/AuthRoute';
import NewsRoutes from './route/NewsRoute';
import PublicRoutes from './route/PublicRoute';
import InternRoutes from './route/InternRoute';
import AdminRoutes from './route/AdminRoute';
import HomePage from '../features/news/pages/HomePage';
import ProtectedRoute from './ProtectedRoute';

// Not Found Page
import NotFoundPage from '../features/notFound/pages/NotFoundPage';
const AppRoutes = () => {
  return (
    <Routes>
      {/* First Routes */}
      <Route path="/" element={<HomePage />} />
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
      <Route path='/404' element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
