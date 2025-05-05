import React from 'react'
import Button from './Button'

function CardNews() {
  return (
    <div className='flex flex-col gap-2.5 bg-lm-primary p-1 rounded-lg '>
      <img src="https://placehold.co/600x400" alt="Gambar Berita" className='rounded-lg w-full object-fill' />
      <div className='flex flex-col gap-2.5 md:gap-2'>
        <div className='flex flex-col gap-1 text-lm-text'>
          <h1 className='font-ws font-semibold text-xl md:text-sm lg:text-xl'>Tips Membuat CV Digital yang Menarik di Era LinkedIn</h1>
          <div className='line-clamp-2 md:line-clap-3 lg:line-clamp-3 h-10 md:h-12 lg:h-16'>
            <p className='font-mw font-normal text-sm md:text-[12px] lg:text-base leading-5 md:leading-4 lg:leading-[22px]'>Isi Berita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis veritatis, exercitationem laborum perferendis unde, ab, consequatur illo aperiam illum et quo voluptates voluptate aliquam dolore? Ipsam sequi quaerat blanditiis quo!</p>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <p className='font-mw font-normal text-sm md:text-[12px] lg:text-base'>Dimas Febrian - 30/04/2025</p>
          <Button to="/news/:id" label="Baca" />
        </div>
      </div>
    </div>
  )
}

export default CardNews