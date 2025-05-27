import axios from '../../../auth/AxiosInstance';
const API_URL = import.meta.env.VITE_BE_BASE_URL;

export const homepage = async () => {
  const response = await axios.get(`${API_URL}/news`);
  return response.data;
}

export const getNewsPage = async (page) => {
  const response = await axios.get(`${API_URL}/news/page?page=${page}`);
  return response.data;
}

export const detailNews = async (newsId) => {
  const response = await axios.get(`${API_URL}/news/${newsId}`);
  return response.data;
}

export const searchNews = async (query) => {
  const response = await axios.get(`${API_URL}/news/search?q=${query}`);
  return response.data;
}

export const internPageNews = async (internId) => {
  const response = await axios.get(`${API_URL}/news/intern/${internId}`);
  return response.data;
}