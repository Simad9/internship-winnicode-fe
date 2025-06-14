import React from 'react'
import iconProfile from '../../../assets/icons/form/icon-profile.svg'
import iconEmail from '../../../assets/icons/form/icon-email.svg'
import Button from '../components/Button'

function Public({ data }) {
  return (
    <section className='flex flex-col gap-2 p-3 bg-lm-primary rounded-md w-full'>
      <p className='font-ws font-medium text-heading-accs text-[20px]'>User</p>
      <div className='flex flex-col gap-3 justify-center items-center md:items-center bg-lm-primary p-4 rounded-md'>
        <div className='flex flex-col justify-center items-center'>
          <img src={data.profile_picture} alt="" className='size-[70px] rounded-md obeject-cover' />
          <h1 className='font-ws font-semibold text-[20px]'>{data.name}</h1>
        </div>
        <div className='flex flex-col items-start w-full'>
          <div className='flex flex-row items-center justify-start'>
            <img src={iconProfile} alt="Profile" />
            <h3>: {data.username}</h3>
          </div>
          <div className='flex flex-row items-center justify-start'>
            <img src={iconEmail} alt="Email" />
            <h3 className='truncate'>: {`${data.email}`}</h3>
          </div>
        </div>
        <Button to={`/public/edit-account/${data.id_user}`} label="Edit Akun" />
      </div>
    </section>
  )
}

export default Public