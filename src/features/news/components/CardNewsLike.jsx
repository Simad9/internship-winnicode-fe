import React from 'react'
import { Link } from 'react-router-dom'

function CardNewsLike() {
  return (
    <div className='flex flex-row gap-2.5 md:gap-2 items-center justify-center bg-lm-primary w-full rounded-md p-1 mb-1'>
      <img src="https://placehold.co/600x400" alt="Gambar" className='rounded-md w-[110px] md:w-[90px] lg:w-[120px] h-full object-fill' />
      <div className='flex flex-col gap-0.5 md:gap-1 lg:gap-2 items-start justify-center w-full'>
        <div className='flex flex-col gap-[2px] md:gap-0 lg:gap-1 items-start justify-start w-full'>
          <h1 className='font-ws font-semibold text-[11px] md:text-[10px] lg:text-sm leading-3.5 lg:leading-4'>Teknologi AI Mengubah Cara Jurnalis Bekerja di Lapangan</h1>
          <p className='font-mw font-normal text-[10px] lg:text-[12px]'>Alya Rahmadani - 20/04/2025</p>
        </div>
        <div className='flex flex-row items-center md:items-center justify-end md:justify-start w-full'>
          <Link to="/news/:id" className='py-1 px-3 lg:px-3.5 bg-dm-primary text-dm-text font-ws font-normal md:font-medium text-[8px] lg:text-[10px] rounded-[5px] text-center'>
            Baca
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardNewsLike