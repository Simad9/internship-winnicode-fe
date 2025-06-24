import Navbar from '../components/Navbar'
import HeadingDua from '../../../components/HeadingDua'
import iconNamaLengkap from '../../../assets/icons/form/icon-namaLengkap.svg'
import iconUsername from '../../../assets/icons/form/icon-profile.svg'
import iconEmail from '../../../assets/icons/form/icon-email.svg'
import iconPassword from '../../../assets/icons/form/icon-password.svg'
import iconKonfirmPass from '../../../assets/icons/form/icon-konfirmPassword.svg'
import InputText from '../../../components/InputText'
import LoadingFetch from '../../../components/LoadingFetch'

// Service
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { getUserByUsername, editAkun } from '../api/userInternAPI'

function EditAccountPage() {
  const [loading, setLoading] = useState(false);
  const [menyimpan, setMenyimpan] = useState(false);
  const [user, setUser] = useState(null);
  const usernameData = localStorage.getItem('userName');
  const [nama, setNama] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordBaru, setPasswordBaru] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchData();
    return;
  }, []);


  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getUserByUsername(usernameData);
      // console.log('Response dari API:', response);
      if (response) {
        setUser(response.data);
        setNama(response.data.name);
        setUsername(response.data.username);
        setEmail(response.data.email);
      } else {
        toast.error('Gagal memuat data berita. Silakan coba lagi.');
      }
    } catch (error) {
      toast.error('Gagal memuat data berita. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    // Cek Password
    if (password !== passwordBaru) {
      toast.error("Password baru tidak sesuai");
      return;
    }

    if (file) {
      console.log(file);
      const formData = new FormData();
      formData.append('profile_picture', file);

      // Kirim data ke API
      const data = {
        name: nama,
        username: username,
        email: email,
        password_lama: password,
        password_baru: passwordBaru,
      };

      Object.keys(data).forEach(key => formData.append(key, data[key]));

      console.log(formData);
      // Edit Akun
      setMenyimpan(true);
      const response = await editAkun(formData);
      console.log('Response dari API:', response);
      if (response) {
        toast.success('Berhasil Update');
      } else {
        toast.error('Gagal memuat data berita. Silakan coba lagi.');
      }

    } else {
      // Kirim data ke API
      const data = {
        name: nama,
        username: username,
        email: email,
        password_lama: password,
        password_baru: passwordBaru,
      };

      console.log(data);
      // Edit Akun
      setMenyimpan(true);
      const response = await editAkun(data);
      console.log('Response dari API:', response);
      if (response) {
        toast.success('Berhasil Update');
      } else {
        toast.error('Gagal memuat data berita. Silakan coba lagi.');
      }
    }

    setMenyimpan(false);
  }

  if (loading || !user) {
    return (
      <div className='flex flex-col bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px]'>
        <Navbar />
        <LoadingFetch />
      </div>
    );
  } else {
    return (
      <div className='flex flex-col gap-5 mb-5' >
        <section className='flex flex-col w-full bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px] gap-3'>

          {/* Navbar */}
          <Navbar active={"dashboard"}></Navbar>
          <ToastContainer stacked></ToastContainer>

          <div className='flex flex-col w-full gap-3 md:gap-3'>
            <HeadingDua label={"Edit Akun"}></HeadingDua>

            <div className='flex flex-col md:flex-row gap-5 items-start'>
              {/* Input Foto */}
              <div className='flex flex-col gap-1 items-center justify-center w-full md:w-8/12 lg:w-5/12 md:mt-10 lg:mt-5'>
                <img src={file ? URL.createObjectURL(file) : user.profile_picture} alt="" className='size-40 lg:size-50 rounded-md object-cover' />
                <div class="flex items-center justify-center w-full">
                  <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-30 md:h-36 border-1 border-abu-text rounded-md cursor-pointer bg-lm-primary hover:bg-lm-bg ">
                    <div class="flex flex-col items-center justify-center py-5 w-full text-center">
                      <svg class="w-8 h-8 mb-2 text-abu-text " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                      </svg>
                      <p class="font-mw text-sm md:text-[18px] lg:text-base text-abu-text font-semibold">Tekan upload atau tarik dan lepaskan</p>
                      <p class="font-mw text-xs md:text-base lg:text-sm text-abu-text ">PNG, JPG, atau JPEG (MAX ukuran foto 5MB)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" onChange={(e) => setFile(e.target.files[0])} />
                  </label>
                </div>
              </div>

              <div className='flex flex-col gap-2 w-full'>
                {/* Form */}
                <h1 className='font-ws font-medium text-heading-accs text-[20px]'>User</h1>
                <div className='flex flex-col gap-2 w-full'>
                  <div className='flex flex-col lg:flex-row gap-3 w-full'>
                    <InputText icon={iconNamaLengkap} label={"Nama Lengkap"} placeholder={"Masukan Nama Lengkap"} meta={"namaLengkap"} type={"text"} value={nama} onChange={(e) => setNama(e.target.value)}></InputText>
                    <InputText icon={iconUsername} label={"Username"} placeholder={"Masukan Username"} meta={"username"} type={"text"} value={username} onChange={(e) => setUsername(e.target.value)}></InputText>
                  </div>
                  <div className='flex flex-col lg:flex-row gap-3 w-full'>
                    <InputText icon={iconEmail} label={"Email"} placeholder={"Masukan Email"} meta={"email"} type={"email"} value={email} onChange={(e) => setEmail(e.target.value)}></InputText>
                    <InputText icon={iconPassword} label={"Password"} placeholder={"Masukan Password"} meta={"password"} type={"password"} onChange={(e) => setPassword(e.target.value)}></InputText>
                  </div>
                  <InputText icon={iconKonfirmPass} label={"Password Baru"} placeholder={"Masukan Password Baru"} meta={"password_baru"} type={"password"} onChange={(e) => setPasswordBaru(e.target.value)}></InputText>
                </div>
                <div className='flex justify-center items-center w-full mt-3'>
                  <button onClick={handleSubmit} className='py-1.5 px-5 md:px-3 lg:px-5 bg-dm-primary text-dm-text font-ws font-normal md:font-medium text-[12px] md:text-base lg:text-base rounded-[6px] text-center w-full' disabled={menyimpan}>
                    {menyimpan ? "Menyimpan..." : "Simpan Perubahan"}
                  </button>
                </div>
              </div>

            </div>

          </div>

        </section>
      </div >
    )
  }
}

export default EditAccountPage

