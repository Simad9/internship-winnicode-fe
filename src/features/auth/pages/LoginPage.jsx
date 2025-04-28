import logo from '../../../assets/icons/icon-logo.svg';
import iconUsername from '../../../assets/icons/form/icon-profile.svg';
import iconPassword from '../../../assets/icons/form/icon-password.svg';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-lm-bg p-7'>
      {/* Logo */}
      <img src={logo} alt="Logo WinniCode" className='mb-2' />

      {/* CONTAINER */}
      <section className='bg-lm-primary p-4 rounded-sm flex flex-col justify-center gap-4 w-full'>
        {/* HEADING */}
        <div className='text-center text-lm-text flex flex-col items-center justify-center'>
          <h1 className='text-bold font-base font-ws font-medium text-2xl'>Selamat Datang</h1>
          <p className='font-mw  text-sm w-3/4'>Untuk mendapatkan fitur lain anda harus login terlebih dahulu</p>
        </div>
        {/* FORM */}
        <form action="">
          {/* FORM INPUT - USERNAME */}
          <div className='mb-2' >
            <label for="username-icon" class="block text-sm font-mw font-normal text-lm-text">Username</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <img src={iconUsername} alt="iconUsername" />
              </div>
              <input
                type="text"
                id="username-icon"
                name='username'
                class="bg-gray-50 border border-abu text-abu-text text-sm rounded-lg focus:ring-dm-primary focus:border-dm-primary focus:text-lm-text block w-full ps-10 p-2.5"
                placeholder="Masukan Username" />
            </div>
          </div>

          {/* FORM INPUT - PASSWORD */}
          <div className='mb-6'>
            <label for="password-icon" class="block text-sm font-mw font-normal text-lm-text">Password</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <img src={iconPassword} alt="iconPassword" />
              </div>
              <input
                type="password"
                id="password-icon"
                name='password'
                class="bg-gray-50 border border-abu text-abu-text text-sm rounded-lg focus:ring-dm-primary focus:border-dm-primary focus:text-lm-text block w-full ps-10 p-2.5"
                placeholder="Masukan Password" />
            </div>
          </div>


          {/* BUTTON */}
          <div className='flex items-center justify-center'>
            <Button to={"/news"} label={"Login"} />
          </div>
        </form>

        <p className='text-sm text-center font-mw font-normal'>Belum Punya Akun? <Link to={"/register"} className="font-bold">Daftar Sekarang</Link></p>
      </section>
    </div>
  );
};

export default LoginPage;
