// src/routes/InternRoutes.jsx
import { Route, Routes } from 'react-router-dom';
import DashboardInternPage from '../features/userIntern/pages/DashboardInternPage';
import WriteNewsPage from '../features/userIntern/pages/WriteNewsPage';
import EditAccountPage from '../features/userIntern/pages/EditAccountPage';

const InternRoutes = () => (
  <Routes>
    <Route path="" element={<DashboardInternPage />} />
    <Route path="write-news" element={<WriteNewsPage />} />
    <Route path="edit-account" element={<EditAccountPage />} />
  </Routes>
);

export default InternRoutes;
