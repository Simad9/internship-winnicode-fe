import logo from '../../../assets/icons/icon-logo.svg';
import iconUsername from '../../../assets/icons/form/icon-profile.svg';
import iconPassword from '../../../assets/icons/form/icon-password.svg';
import iconNama from '../../../assets/icons/form/icon-namaLengkap.svg';
import iconEmail from '../../../assets/icons/form/icon-email.svg';
import iconKonfirmPass from '../../../assets/icons/form/icon-konfirmPassword.svg';
import { useState } from 'react';
import { useRegister } from '../hooks/useRegister';
import { ToastContainer } from 'react-toastify';

function RegisterPage() {
  const [namaLengkap, setNamaLengkap] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [konfirmPassword, setKonfirmPassword] = useState('');
  const { register, isLoading } = useRegister();

  const data = {
    name: namaLengkap,
    username: username,
    email: email,
    password: password,
    confirm_password: konfirmPassword
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(data);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-lm-bg p-7'>
      <ToastContainer stacked />
      <img src={logo} alt="Logo WinniCode" className='mb-2' />

      <section className='bg-lm-primary p-4 rounded-sm flex flex-col justify-center gap-4 w-full md:w-10/12 lg:w-5/12 shadow-lg'>
        <div className='text-center text-lm-text flex flex-col items-center justify-center'>
          <h1 className='text-bold font-base font-ws font-medium text-2xl md:text-4xl'>Daftar Akun</h1>
          <p className='font-mw text-sm w-3/4 md:w-7/12 lg:w-5/12 md:text-base'>
            Untuk mendapatkan fitur lain anda harus login terlebih dahulu
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='flex flex-col md:flex-row gap-4'>
            {/* Nama Lengkap */}
            <div className='mb-2 w-full'>
              <label htmlFor="person-icon" className="block text-sm font-mw font-normal text-lm-text">Nama Lengkap</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                  <img src={iconNama} alt="iconNama" />
                </div>
                <input
                  type="text"
                  id="person-icon"
                  name="nama"
                  className="bg-gray-50 border border-abu text-lm-text text-sm rounded-lg focus:ring-dm-primary focus:border-dm-primary focus:text-lm-text block w-full ps-10 p-2.5"
                  onChange={(e) => setNamaLengkap(e.target.value)}
                  placeholder="Masukkan Nama Lengkap"
                  required
                />
              </div>
            </div>
            {/* Username */}
            <div className='mb-2 w-full'>
              <label htmlFor="username-icon" className="block text-sm font-mw font-normal text-lm-text">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                  <img src={iconUsername} alt="iconUsername" />
                </div>
                <input
                  type="text"
                  id="username-icon"
                  name="username"
                  className="bg-gray-50 border border-abu text-lm-text text-sm rounded-lg focus:ring-dm-primary focus:border-dm-primary focus:text-lm-text block w-full ps-10 p-2.5"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Masukkan Username"
                  required
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-4'>
            {/* Email */}
            <div className='mb-2 w-full'>
              <label htmlFor="icon-email" className="block text-sm font-mw font-normal text-lm-text">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                  <img src={iconEmail} alt="iconEmail" />
                </div>
                <input
                  type="email"
                  id="icon-email"
                  name="email"
                  className="bg-gray-50 border border-abu text-lm-text text-sm rounded-lg focus:ring-dm-primary focus:border-dm-primary focus:text-lm-text block w-full ps-10 p-2.5"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan Email"
                  required
                />
              </div>
            </div>
            {/* Password */}
            <div className='mb-2 w-full'>
              <label htmlFor="password-icon" className="block text-sm font-mw font-normal text-lm-text">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                  <img src={iconPassword} alt="iconPassword" />
                </div>
                <input
                  type="password"
                  id="password-icon"
                  name="password"
                  className="bg-gray-50 border border-abu text-lm-text text-sm rounded-lg focus:ring-dm-primary focus:border-dm-primary focus:text-lm-text block w-full ps-10 p-2.5"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan Password"
                  required
                />
              </div>
            </div>
          </div>

          {/* Konfirmasi Password */}
          <div className='mb-6'>
            <label htmlFor="konfirm-icon" className="block text-sm font-mw font-normal text-lm-text">Konfirmasi Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <img src={iconKonfirmPass} alt="iconKonfirmPass" />
              </div>
              <input
                type="password"
                id="konfirm-icon"
                name="konfirm-password"
                className="bg-gray-50 border border-abu text-lm-text text-sm rounded-lg focus:ring-dm-primary focus:border-dm-primary focus:text-lm-text block w-full ps-10 p-2.5"
                onChange={(e) => setKonfirmPassword(e.target.value)}
                placeholder="Masukkan Password Kembali"
                required
              />
            </div>
          </div>

          {/* Tombol */}
          <div className='flex flex-col md:flex-row items-center justify-center md:justify-between'>
            <p className='text-sm md:text-base md:w-5/12 md:text-left text-center font-mw font-normal mb-3'>
              Data anda yang terisi akan kami jaga sebaik mungkin
            </p>
            <button type="submit" disabled={isLoading} className={`py-2 px-5 ${isLoading ? 'bg-gray-400' : 'bg-dm-primary'} text-dm-text font-ws font-normal md:font-medium text-sm md:text-base rounded-[10px] text-center`}>
              {isLoading ? 'Loading...' : 'Daftar'}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default RegisterPage;
