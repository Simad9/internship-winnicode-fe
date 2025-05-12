import React from 'react'
import Navbar from '../components/Navbar'
import HeadingDua from '../../../components/HeadingDua'
import fotoProfile from '../../../assets/img/profile.jpg'
import iconNamaLengkap from '../../../assets/icons/form/icon-namaLengkap.svg'
import iconUsername from '../../../assets/icons/form/icon-profile.svg'
import iconEmail from '../../../assets/icons/form/icon-email.svg'
import iconPassword from '../../../assets/icons/form/icon-password.svg'
import InputText from '../../../components/InputText'

function EditUserPage() {
  return (
    <div className='flex flex-col gap-5 mb-5' >
      <section className='flex flex-col w-full bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px] gap-3'>

        {/* Navbar */}
        <Navbar active={"control"}></Navbar>

        <div className='flex flex-col w-full gap-3 md:gap-3'>
          <HeadingDua label={"Edit Akun"}></HeadingDua>

          <div className='flex flex-col md:flex-row gap-5 items-start'>
            {/* Input Foto */}
            <div className='flex flex-col gap-1 items-center justify-center w-full md:w-8/12 lg:w-5/12 md:mt-10 lg:mt-5'>
              <img src={fotoProfile} alt="" className='size-40 lg:size-50 rounded-md' />
              <div class="flex items-center justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-30 md:h-36 border-1 border-abu-text rounded-md cursor-pointer bg-lm-primary hover:bg-lm-bg ">
                  <div class="flex flex-col items-center justify-center py-5 w-full text-center">
                    <svg class="w-8 h-8 mb-2 text-abu-text " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p class="font-mw text-sm md:text-[18px] lg:text-base text-abu-text font-semibold">Tekan upload atau tarik dan lepaskan</p>
                    <p class="font-mw text-xs md:text-base lg:text-sm text-abu-text ">PNG, JPG, atau JPEG (MAX ukuran foto 5MB)</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
            </div>

            <div className='flex flex-col gap-2 w-full'>
              {/* Form */}
              <h1 className='font-ws font-medium text-heading-accs text-[20px]'>Admin</h1>
              <div className='flex flex-col gap-2 w-full'>
                <div className='flex flex-col lg:flex-row gap-3 w-full'>
                  <InputText icon={iconNamaLengkap} label={"Nama Lengkap"} placeholder={"Masukan Nama Lengkap"} meta={"namaLengkap"} type={"text"}></InputText>
                  <InputText icon={iconUsername} label={"Username"} placeholder={"Masukan Username"} meta={"username"} type={"text"}></InputText>
                </div>
                <div className='flex flex-col lg:flex-row gap-3 w-full'>
                  <InputText icon={iconEmail} label={"Email"} placeholder={"Masukan Email"} meta={"email"} type={"email"}></InputText>
                  <InputText icon={iconPassword} label={"Password"} placeholder={"Masukan Password"} meta={"password"} type={"password"}></InputText>
                </div>
              </div>
              <div className='flex justify-center items-center w-full mt-3'>
                <button className='py-1.5 px-5 md:px-3 lg:px-5 bg-dm-primary text-dm-text font-ws font-normal md:font-medium text-[12px] md:text-base lg:text-base rounded-[6px] text-center w-full'>
                  Simpan Perubahan
                </button>
              </div>
            </div>

          </div>

        </div>

      </section>
    </div >
  )
}

export default EditUserPage