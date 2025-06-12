import axios from '../../../auth/AxiosInstance';
const API_URL = import.meta.env.VITE_BE_BASE_URL;

// Dashboard
export const dashboard = async () => {
  const response = await axios.get(`${API_URL}/admin/dashboard`);
  return response.data;
}

// Approve Category
export const approveReqCategory = async (id_category) => {
  const response = await axios.put(`${API_URL}/admin/approve-category/${id_category}`);
  return response.data;
}

// Hapus Category
export const deleteCategory = async (id_category) => {
  const response = await axios.delete(`${API_URL}/admin/delete-category/${id_category}`);
  return response.data;
}

// Pending Berita
export const pendingBerita = async () => {
  const response = await axios.get(`${API_URL}/admin/pending-news`);
  return response.data;
}

// Review News - Detail Berita
export const reviewNews = async (id_news) => {
  const response = await axios.get(`${API_URL}/admin/review-news/${id_news}`);
  return response.data;
}

// Review News - Note News
export const updateReviewNews = async (id_news, data) => {
  const response = await axios.put(`${API_URL}/admin/review-news/${id_news}`, data);
  return response.data;
}

// Ambil Nilai Anak Magang
export const markIntern = async (id_magang) => {
  const response = await axios.get(`${API_URL}/admin/mark-intern/${id_magang}`);
  return response.data;
}

// Menilai Anak Magang
export const updateMarkIntern = async (id_magang, data) => {
  const response = await axios.put(`${API_URL}/admin/mark-intern/${id_magang}`, data);
  return response.data;
}

// Edit Akun
export const editAkun = async (data) => {
  const response = await axios.put(`${API_URL}/admin/edit-account`, data);
  return response.data;
}

// --- Kontrol Tugas ---
// Melihat Tugas
export const task = async () => {
  const response = await axios.get(`${API_URL}/admin/task`);
  return response.data;
}

// Menambahkan Tugas
export const addTask = async (data) => {
  const response = await axios.post(`${API_URL}/admin/task`, data);
  return response.data;
}

// Edit Tugas
export const editTask = async (id_task, data) => {
  const response = await axios.put(`${API_URL}/admin/task/${id_task}`, data);
  return response.data;
}

// Hapus Tugas
export const deleteTask = async (id_task) => {
  const response = await axios.delete(`${API_URL}/admin/task/${id_task}`);
  return response.data;
}

// --- Kontrol Akun ---
// Ambil  Akun
export const akunALl = async () => {
  const response = await axios.get(`${API_URL}/admin/control-account/`);
  return response.data;
}

// Edit Akun
export const editAkunAll = async (id_user, data) => {
  const response = await axios.put(`${API_URL}/admin/control-account/${id_user}`, data);
  return response.data;
}

// Hapus Akun
export const deleteAkunAll = async (id_user) => {
  const response = await axios.delete(`${API_URL}/admin/control-account/${id_user}`);
  return response.data;
}

// Ambil  Akun Intern
export const akunAllIntern = async () => {
  const response = await axios.get(`${API_URL}/admin/control-account/intern`);
  return response.data;
}

// Edit Akun Intenrn
export const editAkunIntern = async (id_intern, data) => {
  const response = await axios.put(`${API_URL}/admin/control-account/intern${id_intern}`, data);
  return response.data;
}

// Hapus Akun Intern
export const deleteAkunIntern = async (id_intern) => {
  const response = await axios.delete(`${API_URL}/admin/control-account/intern${id_intern}`);
  return response.data;
}

// Ambil  Akun User
export const akunAllUser = async () => {
  const response = await axios.get(`${API_URL}/admin/control-account/user`);
  return response.data;
}

// Edit Akun User
export const editAkunUser = async (id_user, data) => {
  const response = await axios.put(`${API_URL}/admin/control-account/user${id_user}`, data);
  return response.data;
}

// Hapus Akun User
export const deleteAkunUser = async (id_user) => {
  const response = await axios.delete(`${API_URL}/admin/control-account/user${id_user}`);
  return response.data;
}


