import { useAuthContext } from "./AuthProvider";

const useAuth = () => {
  const { accessToken, login, logout, refreshAccessToken } = useAuthContext();

  const isAuthenticated = !!accessToken || localStorage.getItem("accessToken"); // Pastikan menggunakan localStorage jika accessToken kosong
  const role = localStorage.getItem("userRole");

  return {
    accessToken,
    role,
    login,
    logout,
    refreshAccessToken,
    isAuthenticated,
  };
};

export default useAuth;
