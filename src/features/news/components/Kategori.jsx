import React from 'react'
import { useState } from 'react'

function Kategori() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  }

  return (
    <div className=''>
      <div className='flex gap-4 w-full border-t-dm-bg border-t-1 border-b-1 overflow-auto'>
        <h2 className='text-sm md:text-base font-normal p-2 text-abu-text w-full text-center hover:bg-dm-bg hover:text-dm-text'>Pendidikan</h2>
        <h2 className='text-sm md:text-base font-normal p-2 text-abu-text w-full text-center hover:bg-dm-bg hover:text-dm-text'>Lingkungan</h2>
        <h2 className='text-sm md:text-base font-normal p-2 text-abu-text w-full text-center hover:bg-dm-bg hover:text-dm-text'>Ekonomi</h2>
        <h2 className='text-sm md:text-base font-normal p-2 text-abu-text w-full text-center hover:bg-dm-bg hover:text-dm-text'>Politik</h2>
        <h2 className='text-sm md:text-base font-normal p-2 text-abu-text w-full text-center hover:bg-dm-bg hover:text-dm-text'>Budaya</h2>
        <h2 className='text-sm md:text-base font-normal p-2 text-abu-text w-full text-center hover:bg-dm-bg hover:text-dm-text' onClick={handleToggle}>Lainnya</h2>
      </div>
      <div className={`relative flex flex-col items-center w-full ${open ? 'block' : 'hidden'}`}> 
        <div className="absolute right-0 w-4/12 md:w-2/12 h-2 bg-lm-bg rounded-full border border-lm-bg flex flex-col">
          <h2 className="text-sm md:text-base font-normal p-2 text-abu-text w-full text-center bg-lm-bg hover:bg-dm-bg hover:text-dm-text">Kategori 1</h2>
          <h2 className="text-sm md:text-base font-normal p-2 text-abu-text w-full text-center bg-lm-bg hover:bg-dm-bg hover:text-dm-text">Kategori 2</h2>
          <h2 className="text-sm md:text-base font-normal p-2 text-abu-text w-full text-center bg-lm-bg hover:bg-dm-bg hover:text-dm-text">Kategori 3</h2>
          <h2 className="text-sm md:text-base font-normal p-2 text-abu-text w-full text-center bg-lm-bg hover:bg-dm-bg hover:text-dm-text">Kategori 4</h2>
          <h2 className="text-sm md:text-base font-normal p-2 text-abu-text w-full text-center bg-lm-bg hover:bg-dm-bg hover:text-dm-text">Kategori 5</h2>
        </div>
      </div>
    </div>
  )
}

export default Kategori