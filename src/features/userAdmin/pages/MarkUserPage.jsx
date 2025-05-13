import React from 'react'
import Navbar from '../components/Navbar'
import HeadingDua from '../../../components/HeadingDua'
import InternUser from '../components/InternUser'
import Button from '../../../components/Button'

function MarkUserPage() {
  return (
    <div className='flex flex-col gap-5 mb-5' >
      <section className='flex flex-col w-full bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px] gap-3'>

        {/* Navbar */}
        <Navbar active={"control"}></Navbar>

        <div className='flex flex-col md:flex-row w-full gap-4 md:gap-5 '>
          {/* Kanan */}
          <div className='order-1 md:order-2 w-full flex flex-col gap-3 '>
            <HeadingDua label={"Menilai Anak Magang"}></HeadingDua>
            <div className='flex flex-col gap-2 w-full'>
              <div className='w-full flex flex-col gap-1' >
                <label for="tugas1" class="text-sm md:text-[18px] font-ws font-medium text-lm-text">Tugas 1 : Pembuatan Berita Tema Teknologi</label>
                <input
                  type="text"
                  id="tugas1"
                  name="tugas1"
                  class="bg-lm-primary border-1 border-abu-text text-lm-text text-sm md:text-[18ox] font-ws rounded-lg focus:ring-dm-primary focus:border-dm-primary focus:text-lm-text block w-full p-2"
                  placeholder="Masukan 1-100" />
              </div>

              <div className='w-full flex flex-col gap-1' >
                <label for="tugas2" class="text-sm md:text-[18px] font-ws font-medium text-lm-text">Tugas 2 : Pembuatan Berita Inspiratif</label>
                <input
                  type="text"
                  id="tugas2"
                  name="tugas2"
                  class="bg-lm-primary border-1 border-abu-text text-lm-text text-sm md:text-[18ox] font-ws rounded-lg focus:ring-dm-primary focus:border-dm-primary focus:text-lm-text block w-full p-2"
                  placeholder="Masukan 1-100" />
              </div>

            </div>
            <Button label={"Simpan Nilai"}></Button>

          </div>

          {/* Kiri */}
          <div className='order-1 md:order-2 flex flex-col w-full md:w-[300px] lg:w-[400px] gap-2'>
            <HeadingDua label={"Profile Anak Magang"}></HeadingDua>
            {/* Intern User Profile */}
            <InternUser></InternUser>
          </div>

        </div>

      </section>
    </div >
  )
}

export default MarkUserPage