import React from 'react'
import iconUniv from '../../../assets/icons/icon-university.svg'
import iconProfile from '../../../assets/icons/form/icon-profile.svg'
import iconEmail from '../../../assets/icons/form/icon-email.svg'
import Button from '../components/Button'
import { internDate } from '../../../utils/Formarter'

function Penulis({ data }) {
  return (
    <section className='flex flex-col gap-2 p-3 bg-lm-primary rounded-md w-full'>
      <p className='font-ws font-medium text-heading-accs text-[20px]'>Penulis</p>
      <div className='flex flex-col gap-3 justify-center items-center md:items-center bg-lm-primary p-4 rounded-md'>
        <div className='flex flex-col justify-center items-center'>
          <img src={data.profile_picture} alt="" className='size-[70px] rounded-md object-cover' />
          <h1 className='font-ws font-semibold text-[20px]'>{data.name}</h1>
        </div>
        <div className='flex flex-col items-start w-full'>
          <div className='flex flex-row items-center justify-start gap-1'>
            <img src={iconProfile} alt="Profile" />
            <h3>: {data.username}</h3>
          </div>
          <div className='flex flex-row items-center justify-start gap-1'>
            <img src={iconEmail} alt="Email" />
            <h3 className='truncate'>: {data.email}</h3>
          </div>
        </div>
        <div className='w-full font-mw font-medium text-base'>
          <div className='flex flex-row gap-2 items-center justify-center'>
            <img src={iconUniv} alt="" />
            <p>Universitas</p>
            <img src={iconUniv} alt="" />
          </div>
          <p>Univ : {data.university}</p>
          <p>Prodi : {data.major} </p>
          <p>Tanggal Magang : {internDate(data.internship_date)} </p>
        </div>
        <Button to="/intern/edit-account" label="Edit Akun" />
      </div>
    </section>
  )
}

export default Penulis