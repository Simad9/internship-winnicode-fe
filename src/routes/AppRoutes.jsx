import { Routes, Route } from 'react-router-dom';
import AuthRoutes from './AuthRoute';
import NewsRoutes from './NewsRoute';
import PublicRoutes from './PublicRoute';
import InternRoutes from './InternRoute';
import AdminRoutes from './AdminRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/*" element={<AuthRoutes />} />

      {/* News Routes */}
      <Route path="/news/*" element={<NewsRoutes />} />

      {/* Public Routes */}
      <Route path="/public/*" element={<PublicRoutes />} />

      {/* Intern Routes */}
      <Route path="/intern/*" element={<InternRoutes />} />


      {/* Admin Routes */}
      <Route path="/admin/*" element={<AdminRoutes />} />


    </Routes>
  );
};

export default AppRoutes;
