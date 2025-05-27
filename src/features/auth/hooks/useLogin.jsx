import { useState } from 'react';
import { login } from '../api/authApi';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    if (data.username === '' || data.password === '') {
      toast.error('Username dan Password tidak boleh kosong', {
        style: {
          fontSize: '0.8rem',
        },
        autoClose: 1500,
        closeOnClick: true,
        pauseOnHover: false,
      });
      return;
    }

    try {
      setLoading(true);
      const response = await login(data);  // Panggil API login

      // Simpan data
      localStorage.setItem('userName', response.data.name);  
      localStorage.setItem('userPhoto', response.data.photo);

      // Login berhasil
      if (response) {
        toast.success('Login berhasil! Menuju halaman dashboard.', {
          style: {
            fontSize: '0.8rem',
          },
          autoClose: 1500,
          closeOnClick: true,
          pauseOnHover: false,
        });

        setTimeout(() => {
          navigate('/news');
        }, 1500);
      }
    } catch (error) {
      if (error.response) {
        // Server mengirim response error (misal 400)
        console.error('Register failed:', error.response.data);
        toast.error(error.response.data.message || 'Terjadi kesalahan');
      } else {
        // Error lain (network error, dll)
        console.error('Register failed:', error.message);
        toast.error('Terjadi kesalahan, silakan coba lagi');
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    login: handleLogin,
    loading,
  };
};
