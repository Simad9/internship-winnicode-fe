// src/routes/AdminRoutes.jsx
import { Route, Routes } from 'react-router-dom';
import DashboardAdminPage from '../features/userAdmin/pages/DashboardAdminPage';
import PendingNewsPage from '../features/userAdmin/pages/PendingNewsPage';
import ReviewPage from '../features/userAdmin/pages/ReviewPage';
import ControlAccountPage from '../features/userAdmin/pages/ControlAccountPage';
import MarkUserPage from '../features/userAdmin/pages/MarkUserPage';
import TaskPage from '../features/userAdmin/pages/TaskPage';
import EditUserPage from '../features/userAdmin/pages/EditUserPage';
import EditAccountPage from '../features/userAdmin/pages/EditAccountPage';

const AdminRoutes = () => (
  <Routes>
    <Route path="" element={<DashboardAdminPage />} />
    < Route path="pending-news" element={< PendingNewsPage />} />
    < Route path="review-news/:id_news" element={< ReviewPage />} />
    < Route path="control-account" element={< ControlAccountPage />} />
    < Route path="mark-intern/:id_user" element={< MarkUserPage />} />
    < Route path="task" element={< TaskPage />} />
    < Route path="edit-user/:id_user" element={< EditUserPage />} />
    < Route path="edit-account" element={< EditAccountPage />} />
  </Routes >
);

export default AdminRoutes;

