import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../features/auth/api/useAuth";
import LoadingFetch from "../components/LoadingFetch";
import { dekripsiData } from "../utils/Crypto";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { accessToken, role, refreshAccessToken, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(true); // Menunggu pengecekan
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [redirectPath, setRedirectPath] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      if (!accessToken) {
        // Jika tidak ada accessToken, coba refresh token
        const newAccessToken = await refreshAccessToken();
        if (!newAccessToken) {
          // Jika refresh gagal, logout dan arahkan ke login
          logout();
          setIsAuthenticated(false);
          setRedirectPath("/login");
        } else {
          // Mengecek role setelah refresh token berhasil
          switch (dekripsiData(role)) {
            case "admin":
              setRedirectPath("/admin");
              break;
            case "public":
              setRedirectPath("/public");
              break;
            case "intern":
              setRedirectPath("/intern");
              break;
            default:
              // Jika role tidak valid, arahkan ke halaman unauthorized
              setRedirectPath("/unauthorized");
              break;
          }
          setIsAuthenticated(true);
        }
      } else {
        setIsAuthenticated(true); // Jika ada accessToken
      }
      setIsLoading(false); // Pengecekan selesai
    };

    checkAuth();
  }, [accessToken, refreshAccessToken, logout, role]);

  // Jika sedang memuat pengecekan
  if (isLoading) {
    return <LoadingFetch />; // Menunggu pengecekan selesai
  }

  // Jika role tidak sesuai dengan yang dibutuhkan, arahkan ke halaman unauthorized
  if (isAuthenticated && dekripsiData(role) !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Jika perlu mengarahkan pengguna ke halaman lain
  if (redirectPath) {
    return <Navigate to={redirectPath} replace />;
  }

  // Jika sudah terautentikasi, tampilkan children
  return children;
};

export default ProtectedRoute;
