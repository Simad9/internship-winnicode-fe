// src/routes/PublicRoute.jsx
import { Route, Routes } from 'react-router-dom';
import DashboardPublicPage from '../../features/userPublic/pages/DashboardPublicPage';
import LikeNewsPage from '../../features/userPublic/pages/LikeNewsPage';
import SaveNewsPage from '../../features/userPublic/pages/SaveNewsPage';
import EditAccountPage from '../../features/userPublic/pages/EditAccountPage';

// Not Found Page
import NotFoundPage from '../../features/notFound/pages/NotFoundPage';

const PublicRoutes = () => (
  <Routes>
    <Route path="" element={<DashboardPublicPage />} />
    <Route path="like" element={<LikeNewsPage />} />
    <Route path="save" element={<SaveNewsPage />} />
    <Route path="edit-account" element={<EditAccountPage />} />

     {/* Not Found Page */}
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default PublicRoutes;
