// src/routes/InternRoutes.jsx
import { Route, Routes } from 'react-router-dom';
import DashboardInternPage from '../../features/userIntern/pages/DashboardInternPage';
import WriteNewsPage from '../../features/userIntern/pages/WriteNewsPage';
import EditAccountPage from '../../features/userIntern/pages/EditAccountPage';

// Not Found Page
import NotFoundPage from '../../features/notFound/pages/NotFoundPage';

const InternRoutes = () => (
  <Routes>
    <Route path="" element={<DashboardInternPage />} />
    <Route path="write-news" element={<WriteNewsPage />} />
    <Route path="edit-account/:id_intern" element={<EditAccountPage />} />

    {/* Not Found Page */}
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default InternRoutes;
