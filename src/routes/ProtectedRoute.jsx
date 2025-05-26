import { Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // Ambil token dulu kalo gak ada baru di ke login

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

