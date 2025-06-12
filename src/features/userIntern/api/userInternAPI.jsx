import axios from '../../../auth/AxiosInstance';
const API_URL = import.meta.env.VITE_BE_BASE_URL;

// Dashboard
export const dashboard = async () => {
  const response = await axios.get(`${API_URL}/intern/dashboard`);
  return response.data;
}

// Menulis Berita
export const menulisBerita = async (data) => {
  const response = await axios.post(`${API_URL}/intern/write-news`, data);
  return response.data;
}

// Edit Berita
export const editBerita = async (id_news, data) => {
  const response = await axios.put(`${API_URL}/intern/edit-news/${id_news}`, data);
  return response.data;
}

// Hapus Berita
export const hapusBerita = async (id_news) => {
  const response = await axios.delete(`${API_URL}/intern/delete-news/${id_news}`);
  return response.data;
}

// Edit Akun
export const editAkun = async (data) => {
  const response = await axios.put(`${API_URL}/intern/edit-account`, data);
  return response.data;
}