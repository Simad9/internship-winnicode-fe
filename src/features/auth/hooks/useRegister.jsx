import { useState } from "react";
import { register } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export const useRegister = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      setLoading(true);

      const response = await register(data);
      if (response) {
        toast.success('Registrasi berhasil! Menuju halaman login.', {
          style: {
            fontSize: '0.8rem',
          },
          autoClose: 1500,
          closeOnClick: true,
          pauseOnHover: false,
        });

        setTimeout(() => {
          navigate('/login'); // Redirect ke halaman login setelah berhasil register
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
    register: handleRegister,
    isLoading,
  };
};
