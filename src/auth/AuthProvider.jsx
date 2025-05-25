// src/auth/AuthProvider.jsx
import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import axios from "./axiosInstance";
import PropTypes from 'prop-types';

const BASE_URL = import.meta.env.BE_BASE_URL || "http://localhost:5000/api";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  const login = async (username, password) => {
    try {
      const res = await axios.post(`${BASE_URL}/login`, { username, password });
      setAccessToken(res.data.accessToken);

      // Save refresh token in cookie (default 1 day)
      Cookies.set("refreshToken", res.data.refreshToken, {
        secure: true,
        sameSite: "Strict",
        expires: 1,
      });

      return true;
    } catch (err) {
      console.error("Login failed:", err);
      return false;
    }
  };

  const logout = () => {
    setAccessToken(null);
    Cookies.remove("refreshToken");
  };

  const refreshAccessToken = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/token`);
      setAccessToken(res.data.accessToken);
      return res.data.accessToken;
    } catch (err) {
      console.error("Token refresh failed:", err);
      logout();
      return null;
    }
  };

  return (
    <AuthContext.Provider
      value={{ accessToken, login, logout, refreshAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

