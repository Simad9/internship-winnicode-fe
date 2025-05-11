import React from 'react'
import iconUniv from '../../../assets/icons/icon-university.svg'
import iconProfile from '../../../assets/icons/form/icon-profile.svg'
import iconEmail from '../../../assets/icons/form/icon-email.svg'
import Button from '../components/Button'

function Penulis() {
  return (
    <section className='flex flex-col gap-2 p-3 bg-lm-primary rounded-md w-full'>
      <p className='font-ws font-medium text-heading-accs text-[20px]'>Penulis</p>
      <div className='flex flex-col gap-3 justify-center items-center md:items-center bg-lm-primary p-4 rounded-md'>
        <div className='flex flex-col justify-center items-center'>
          <img src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[70px] rounded-md' />
          <h1 className='font-ws font-semibold text-[20px]'>Indra Permana</h1>
        </div>
        <div className='flex flex-col items-start w-full'>
          <div className='flex flex-row items-center justify-start'>
            <img src={iconProfile} alt="Profile" />
            <h3>: Indra123</h3>
          </div>
          <div className='flex flex-row items-center justify-start'>
            <img src={iconEmail} alt="Email" />
            <h3>: Indra123@example.com</h3>
          </div>
        </div>
        <div className='w-full font-mw font-medium text-base'>
          <div className='flex flex-row gap-2 items-center justify-center'>
            <img src={iconUniv} alt="" />
            <p>Universitas</p>
            <img src={iconUniv} alt="" />
          </div>
          <p>Univ : Universitas Negeri X </p>
          <p>Prodi : Ilmu Komunikasi </p>
          <p>Tanggal Magang : 3 Maret 2025 </p>
        </div>
        <Button to="/edit-account" label="Edit Akun" />
      </div>
    </section>
  )
}

export default Penulis