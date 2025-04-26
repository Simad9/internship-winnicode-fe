import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const login = async (data) => {
  const response = await axios.post(`${API_URL}/login`, data);
  return response.data;
};

export const register = async (data) => {
  const response = await axios.post(`${API_URL}/register`, data);
  return response.data;
};

export const dashboardAdmin = async (token) => {
  const response = await axios.get(`${API_URL}/admin/dashboard`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token})}`,
      },
    }
  );
  return response.data;
}
