import React from 'react'
import Button from '../components/Button'
import ButtonSecondary from '../components/ButtonSecondary'

function CardPublic() {
  return (
    <div className='p-2 bg-lm-primary items-center rounded-md flex flex-col lg:flex-row gap-3'>
      <img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cover Berita" className='w-full lg:w-2/4 h-[170px] md:h-[140px] lg:h-[170px] object-cover rounded-md' />
      <div className='flex flex-col gap-2 justify-center items-center md:items-start w-full'>
        <div className='flex flex-col gap-0.5'>
          <h3 className='font-mw font-normal text-sm text-kategori-accs'>Pendidikan</h3>
          <h1 className='font-ws font-semibold text-xl md:text-sm lg:text-xl'>Mahasiswa Rancang Aplikasi Edukasi untuk Daerah 3T</h1>
          <div className='line-clamp-2 md:line-clap-3 lg:line-clamp-3 h-10 md:h-8 lg:h-16'>
            <p className='font-mw font-normal text-sm md:text-[12px] lg:text-base leading-5 md:leading-4 lg:leading-[22px]'>Isi Berita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis veritatis, exercitationem laborum perferendis unde, ab, consequatur illo aperiam illum et quo voluptates voluptate aliquam dolore? Ipsam sequi quaerat blanditiis quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sit ut ipsum? Animi aspernatur, nobis beatae obcaecati pariatur aperiam! Rem sit sint beatae, eum molestias quisquam earum at dolor quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit dolores quam accusantium, sit voluptas odit incidunt non placeat corrupti, quibusdam fugiat repudiandae voluptate est, nemo sunt veniam minus maxime!</p>
          </div>
        </div>
        <div className='flex flex-row gap-2 justify-between items-center w-full'>
          <div className='flex gap-1'>
            <Button to={"/news/2"} label={"Baca"}></Button>
            <ButtonSecondary to={"/news/2"} label={"Batalkan"}></ButtonSecondary>
          </div>
          <p className='font-mw font-normal text-sm md:text-[12px] lg:text-base'>01/05/2025</p>
        </div>
      </div>
    </div>
  )
}

export default CardPublic