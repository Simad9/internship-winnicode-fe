import { Routes, Route } from 'react-router-dom';
import LoginPage from '../../features/auth/pages/LoginPage';
import RegisterPage from '../../features/auth/pages/RegisterPage';

// Not Found Page
import NotFoundPage from '../../features/notFound/pages/NotFoundPage';

const AuthRoutes = () => (
  <Routes>
    <Route path="login" element={<LoginPage />} />
    <Route path="register" element={<RegisterPage />} />

    {/* Not Found Page */}
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AuthRoutes;
