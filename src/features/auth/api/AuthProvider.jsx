import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import axios from "../../../auth/AxiosInstance";
import { enkripsiData } from "../../../utils/Crypto";

const BASE_URL = import.meta.env.VITE_BE_BASE_URL;
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
  const [username, setUsername] = useState(() => {
    const saveUserName = localStorage.getItem('userName');
    return saveUserName || null
  });
  const [userPhoto, setUserPhoto] = useState(() => {
    const saveUserPhoto = localStorage.getItem('userPhoto');
    return saveUserPhoto || null
  });


  const login = async (data) => {
    try {
      const res = await axios.post(`${BASE_URL}/login`, data);
      console.log("Login response:", res);

      // Simpan Statee
      setAccessToken(res.data.accessToken);
      setUsername(res.data.data.name);
      setUserPhoto(res.data.data.photo);
      // Simpan data
      localStorage.setItem('accessToken', res.data.accessToken);
      localStorage.setItem('userName', res.data.data.name);
      localStorage.setItem('userPhoto', res.data.data.photo);
      localStorage.setItem('userRole', enkripsiData(res.data.data.role));

      return true;
    } catch (err) {
      console.error("Login failed:", err);
      return false;
    }
  };

  const logout = async () => {
    try {
      await axios.delete(`${BASE_URL}/logout`);
    } catch (error) {
      console.error(error);
    }
    // Pembersihan data
    localStorage.clear();
    setAccessToken(null);
    setUsername(null);
    setUserPhoto(null);
    Cookies.remove("refreshToken");
  };

  const refreshAccessToken = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/token`, {
        withCredentials: true,
      });

      // Set Up Lagi
      setAccessToken(res.data.accessToken);
      localStorage.setItem("accessToken", res.data.accessToken);
      return res.data.accessToken;
    } catch (err) {
      console.error("Token refresh failed:", err);
      logout();
      return null;
    }
  };

  const isAuthenticated = () => {
    const token = accessToken || localStorage.getItem('accessToken');
    console.log('Checking auth, token:', token);
    return !!token;
  };

  return (
    <AuthContext.Provider
      value={{ accessToken, username, userPhoto, login, logout, refreshAccessToken, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

