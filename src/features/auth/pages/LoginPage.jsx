import logo from '../../../assets/icons/icon-logo.svg';
import iconUsername from '../../../assets/icons/form/icon-profile.svg';
import iconPassword from '../../../assets/icons/form/icon-password.svg';
import Button from '../components/Button';
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useLogin();

  const data = {
    username: username,
    password: password
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(data);
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-lm-bg p-7'>
      <ToastContainer stacked />
      {/* Logo */}
      <img src={logo} alt="Logo WinniCode" className='mb-2' />

      {/* CONTAINER */}
      <section className='bg-lm-primary p-4 rounded-sm flex flex-col justify-center gap-4 w-full md:w-8/12 lg:w-4/12 shadow-lg'>
        {/* HEADING */}
        <div className='text-center text-lm-text flex flex-col items-center justify-center'>
          <h1 className='text-bold font-base font-ws font-medium text-2xl md:text-4xl '>Selamat Datang</h1>
          <p className='font-mw  text-sm w-3/4 md:w-7/12 lg:w-9/12 md:text-base'>Untuk mendapatkan fitur lain anda harus login terlebih dahulu</p>
        </div>
        {/* FORM */}
        <form action="">
          {/* FORM INPUT - USERNAME */}
          <div className='mb-2' >
            <label htmlFor="username-icon" className="block text-sm font-mw font-normal text-lm-text">Username</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <img src={iconUsername} alt="iconUsername" />
              </div>
              <input
                type="text"
                id="username-icon"
                name='username'
                className="bg-gray-50 border border-abu text-lm-text text-sm rounded-lg focus:ring-dm-primary focus:border-dm-primary focus:text-lm-text block w-full ps-10 p-2.5"
                placeholder="Masukan Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          {/* FORM INPUT - PASSWORD */}
          <div className='mb-6'>
            <label htmlFor="password-icon" className="block text-sm font-mw font-normal text-lm-text">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <img src={iconPassword} alt="iconPassword" />
              </div>
              <input
                type="password"
                id="password-icon"
                name='password'
                className="bg-gray-50 border border-abu text-lm-text text-sm rounded-lg focus:ring-dm-primary focus:border-dm-primary focus:text-lm-text block w-full ps-10 p-2.5"
                placeholder="Masukan Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>


          {/* BUTTON */}
          <div className='flex items-center justify-center'>
            <Button label={isLoading ? "Loading..." : "Masuk"} onClick={handleLogin} isLoading={isLoading} />
          </div>
        </form>

        <p className='text-sm md:text-base text-center font-mw font-normal'>Belum Punya Akun? <Link to={"/register"} className="font-bold">Daftar Sekarang</Link></p>
      </section>
    </div>
  );
};

export default LoginPage;
