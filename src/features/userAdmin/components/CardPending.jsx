import React from 'react'
import Button from '../../../components/Button'

function CardPending() {
  return (
    <div className='p-2 bg-lm-primary items-center rounded-md flex flex-col lg:flex-row gap-3'>
      <img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cover Berita" className='w-full lg:w-5/12 h-[170px] md:h-[140px] lg:h-[170px] object-cover rounded-md' />
      <div className='flex flex-col lg:flex-row gap-2 justify-center items-center md:items-start lg:items-center w-full'>
        <div className='flex flex-col gap-0.5'>
          <h3 className='font-mw font-normal text-sm text-kategori-accs'>Pendidikan</h3>
          <h1 className='font-ws font-semibold text-xl md:text-base lg:text-xl'>Mahasiswa Rancang Aplikasi Edukasi untuk Daerah 3T</h1>
          <h1 className='font-mw  font-normal text-sm '>Indra Permana - 01/05/2025</h1>
        </div>
        <div className='flex gap-1 w-full lg:w-7/12 lg:flex-col'>
          <Button to={"/news/2"} label={"Terima"}></Button>
          <Button to={"/news/2"} label={"Baca Berita"}></Button>
        </div>
      </div>
    </div>
  )
}

export default CardPending