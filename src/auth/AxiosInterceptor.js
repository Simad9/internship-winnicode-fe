import { useEffect } from "react";
import axios from "./AxiosInstance";
import useAuth from "../features/auth/api/useAuth";

const AxiosInterceptor = () => {
  const { accessToken, refreshAccessToken, logout } = useAuth();

  useEffect(() => {
    // Request Interceptor: Menambahkan token Authorization di setiap request
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response Interceptor: Menangani error, refresh token, dan mengulang request
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response, // Jika response berhasil, kembalikan response
      async (error) => {
        const originalRequest = error.config;

        // Cek jika statusnya 403 dan belum pernah mencoba refresh token
        if (error.response.status === 403 && !originalRequest._retry) {
          originalRequest._retry = true; // Set flag _retry agar hanya mencoba refresh sekali

          try {
            // Coba refresh token
            const newToken = await refreshAccessToken();

            if (newToken) {
              // Simpan token baru ke localStorage
              localStorage.setItem("accessToken", newToken);
              // Perbarui header Authorization dengan token baru
              originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

              // Kirim request ulang dengan token baru
              return axios(originalRequest);
            } else {
              // Jika refresh token gagal, logout
              logout();
            }
          } catch (err) {
            logout(); // Jika ada error saat refresh, logout
          }
        }

        // Jika statusnya 401, logout (token sudah tidak valid)
        if (error.response.status === 401) {
          logout();
        }

        // Kembalikan error jika tidak ada solusi yang ditemukan
        return Promise.reject(error);
      }
    );

    // Hapus interceptor ketika komponen di-unmount
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken, refreshAccessToken, logout]);

  return null;
};

export default AxiosInterceptor;
