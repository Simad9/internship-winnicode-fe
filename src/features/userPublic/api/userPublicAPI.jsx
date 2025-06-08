import axios from '../../../auth/AxiosInstance';
const API_URL = import.meta.env.VITE_BE_BASE_URL;

// Dashboard
export const dashboard = async () => {
  const response = await axios.get(`${API_URL}/public/dashboard`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
  return response.data;
}

// Disukai
export const disukai = async () => {
  const response = await axios.get(`${API_URL}/public/like`);
  return response.data;
}

// Disimpan
export const disimpan = async () => {
  const response = await axios.get(`${API_URL}/public/save`);
  return response.data;
}

// Edit Akun


