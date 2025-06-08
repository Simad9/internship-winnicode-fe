import axios from '../../../auth/AxiosInstance';
const API_URL = import.meta.env.VITE_BE_BASE_URL;

export const register = async (data) => {
  const response = await axios.post(`${API_URL}/register`, data);
  return response.data;
};

