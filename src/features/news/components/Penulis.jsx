import React from 'react'
import HeadingDua from '../components/HeadingDua'
import iconUniv from '../../../assets/icons/icon-university.svg'
import { imageMissing, internDate } from '../../../utils/Formarter'

function Penulis({ data }) {
  return (
    <section className='order-1 md:order-2 flex flex-col gap-2 w-full md:w-[400px] lg:w-[450px]'>
      <HeadingDua label="Penulis" />
      <div className='flex flex-col gap-2 justify-center items-center bg-lm-primary p-4 rounded-md'>
        <div className='flex flex-col justify-center items-center md:items-start w-full'>
          <img src={imageMissing(data.profile_picture)} alt="" className='size-[70px] rounded-md object-cover' />
          <h1 className='font-ws font-semibold text-[20px]'>{data.name}</h1>
        </div>
        <div className='w-full font-mw font-medium text-base'>
          <div className='flex flex-row gap-2 items-center justify-center'>
            <img src={iconUniv} alt="" />
            <p>Universitas</p>
            <img src={iconUniv} alt="" />
          </div>
          <p>Univ : {data.university}</p>
          <p>Prodi : {data.major} </p>
          <p>Tanggal Magang : {internDate(data.internship_date)}</p>
        </div>
      </div>
    </section>
  )
}

export default Penulis