import React from 'react'
import HeadingDua from '../components/HeadingDua'
import iconUniv from '../../../assets/icons/icon-university.svg'

function Penulis() {
  return (
    <section className='order-1 md:order-2 flex flex-col gap-2 w-full md:w-[400px] lg:w-[450px]'>
      <HeadingDua label="Penulis" />
      <div className='flex flex-col gap-2 justify-center items-center bg-lm-primary p-4 rounded-md'>
        <div className='flex flex-col justify-center items-center md:items-start w-full'>
          <img src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[70px] rounded-md' />
          <h1 className='font-ws font-semibold text-[20px]'>Indra Permana</h1>
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
      </div>
    </section>
  )
}

export default Penulis