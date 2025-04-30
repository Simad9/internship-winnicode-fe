import logo from '../../../assets/icons/icon-logo.svg';
import iconUsername from '../../../assets/icons/form/icon-profile.svg';
import iconPassword from '../../../assets/icons/form/icon-password.svg';
import iconNama from '../../../assets/icons/form/icon-namaLengkap.svg';
import iconEmail from '../../../assets/icons/form/icon-email.svg';
import iconKonfirmPass from '../../../assets/icons/form/icon-konfirmPassword.svg';
import Button from '../components/Button';

function RegisterPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-lm-bg p-7'>
      {/* Logo */}
      <img src={logo} alt="Logo WinniCode" className='mb-2' />

      {/* CONTAINER */}
      <section className='bg-lm-primary p-4 rounded-sm flex flex-col justify-center gap-4 w-full md:w-10/12 lg:w-8/12 shadow-lg'>
        {/* HEADING */}
        <div className='text-center text-lm-text flex flex-col items-center justify-center'>
          <h1 className='text-bold font-base font-ws font-medium text-2xl md:text-4xl '>Daftar Akun</h1>
          <p className='font-mw  text-sm w-3/4 md:w-7/12 lg:w-5/12 md:text-base'>Untuk mendapatkan fitur lain anda harus login terlebih dahulu</p>
        </div>

        {/* FORM */}
        <form action="#">
          <div className='flex flex-col md:flex-row gap-4'>
            {/* FORM INPUT - NAMA LENGKAP */}
            <div className='mb-2 w-full' >
              <label for="person-icon" class="block text-sm font-mw font-normal text-lm-text">Nama Lengkap</label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                  <img src={iconNama} alt="iconNama" />
                </div>
                <input
                  type="text"
                  id="person-icon"
                  name='nama'
                  class="bg-gray-50 border border-abu text-abu-text text-sm rounded-lg focus:ring-dm-primary focus:border-dm-primary focus:text-lm-text block w-full ps-10 p-2.5"
                  placeholder="Masukan Username" />
              </div>
            </div>
            {/* FORM INPUT - USERNAME */}
            <div className='mb-2 w-full' >
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
          </div>
          <div className='flex flex-col md:flex-row gap-4'>
            {/* FORM INPUT - EMAIL */}
            <div className='mb-2 w-full' >
              <label for="icon-email" class="block text-sm font-mw font-normal text-lm-text">Email</label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                  <img src={iconEmail} alt="iconEmail" />
                </div>
                <input
                  type="emall"
                  id="icon-email"
                  name='email'
                  class="bg-gray-50 border border-abu text-abu-text text-sm rounded-lg focus:ring-dm-primary focus:border-dm-primary focus:text-lm-text block w-full ps-10 p-2.5"
                  placeholder="Masukan Email" />
              </div>
            </div>
            {/* FORM INPUT - PASSWORD */}
            <div className='mb-2 w-full'>
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
          </div>
          {/* FORM INPUT - KONFIRM PASSWORD */}
          <div className='mb-6'>
            <label for="kanfirm-icon" class="block text-sm font-mw font-normal text-lm-text">Konfirmasi Password</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <img src={iconKonfirmPass} alt="iconKonfirmPass" />
              </div>
              <input
                type="password"
                id="kanfirm-icon"
                name='konfirm-password'
                class="bg-gray-50 border border-abu text-abu-text text-sm rounded-lg focus:ring-dm-primary focus:border-dm-primary focus:text-lm-text block w-full ps-10 p-2.5"
                placeholder="Masukan Password Kembali" />
            </div>
          </div>

          <div className='flex flex-col md:flex-row items-center justify-center md:justify-between'>
            <p className='text-sm md:text-base md:w-5/12 md:text-left text-center font-mw font-normal mb-3'>Data anda yang terisi akan kami jaga sebaik mungkin</p>
            {/* BUTTON */}
            <Button to={"/login"} label={"Daftar"} />
          </div>
        </form>

      </section>
    </div>
  )
}

export default RegisterPage;