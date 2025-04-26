import { useState } from 'react';
import { login } from '../api/authApi';

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (data) => {
    try {
      setLoading(true);
      const response = await login(data);  // Panggil API login

      // simpan data
      console.log(response);  // Simpan data login
      localStorage.setItem('access_token', response.accessToken);  // Simpan token akses

      console.log('Login successful');
      // Lakukan redirect atau simpan data login
    } catch (error) {
      console.error('Login failed', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleLogin,
    loading,
  };
};

export default useLogin;
