import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../features/auth/api/useAuth";
import LoadingFetch from "../components/LoadingFetch";

const ProtectedRoute = ({ children }) => {
  const { accessToken, refreshAccessToken, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(true); // Menunggu pengecekan
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      if (!accessToken) {
        // Jika tidak ada accessToken, coba refresh token
        const newAccessToken = await refreshAccessToken();
        if (!newAccessToken) {
          // Jika refresh gagal, logout dan arahkan ke login
          logout();
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      } else {
        setIsAuthenticated(true); // Jika ada accessToken
      }
      setIsLoading(false); // Pengecekan selesai
    };

    checkAuth();
  }, [accessToken, refreshAccessToken, logout]);

  // Jika sedang memuat pengecekan
  if (isLoading) {
    return <LoadingFetch></LoadingFetch>; // Anda bisa menambahkan loading spinner jika perlu
  }

  // Jika tidak terautentikasi, arahkan ke halaman login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
