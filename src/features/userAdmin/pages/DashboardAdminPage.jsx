import React from 'react'
import Navbar from '../components/Navbar'
import Admin from '../components/Admin'
import iconUniv from '../../../assets/icons/icon-university.svg'
import iconUser from '../../../assets/icons/form/icon-profile.svg'
import HeadingDua from '../../../components/HeadingDua'
import ItemsReqKategori from '../components/ItemsReqKategori'
import { Link } from 'react-router-dom'
import CardPending from '../components/CardPending'

function DashboardAdminPage() {
  return (
    <div className='flex flex-col gap-5 bg-lm-bg' >
      <section className='flex flex-col w-full bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px] gap-3 mb-10'>

        {/* Navbar */}
        <Navbar active={"dashboard"}></Navbar>

        <div className='flex flex-col md:flex-row w-full gap-3 md:gap-3 '>
          {/* Kanan */}
          <div className='order-1 md:order-2 flex flex-col w-full md:w-[300px] lg:w-[400px] gap-2'>
            <div className='flex flex-col md:flex-row w-full gap-3 md:gap-3'>
              <section className='order-1 md:order-2 flex flex-col w-full md:w-[300px] lg:w-[400px] gap-2'>
                {/* Admin */}
                <Admin />

                {/* Total Berita Disukai dan Disimpan */}
                <div className="flex flex-row md:flex-col lg:flex-row justify-between items-center w-full gap-2">
                  <div className='flex flex-row gap-2 items-start p-2.5 bg-lm-primary text-lm-text rounded-md w-full'>
                    <img src={iconUniv} alt="" className='size-8' />
                    <div className=''>
                      <h1 className='font-mw font-medium text-[14px]'>Anak Magang</h1>
                      <h1 className='font-ws font-medium text-base'><span className='text-2xl me-1'>15</span>Akun</h1>
                    </div>
                  </div>
                  <div className='flex flex-row gap-2 items-start p-2.5 bg-lm-primary text-lm-text rounded-md w-full'>
                    <img src={iconUser} alt="" className='size-8' />
                    <div className=''>
                      <h1 className='font-mw font-medium text-[14px]'>Total Akun</h1>
                      <h1 className='font-ws font-medium text-base'><span className='text-2xl me-1'>33</span>Akun</h1>
                    </div>
                  </div>
                </div>

              </section>
            </div>

            {/* Kategori Berita */}
            <div>
              <div className='w-full'>
                <HeadingDua label={"Kategori Berita"}></HeadingDua>
                <select id="kategori" class="bg-lm-primary border-1 border-abu-text font-mw text-abut-text text-sm rounded-md focus:ring-abu-text focus:border-abu-text w-full p-2.5 mt-2">
                  <option selected>Kategori</option>
                  <option value="1">Pendidikan</option>
                  <option value="2">Lingkungan</option>
                  <option value="3">Eknomi</option>
                </select>
              </div>
            </div>

            {/* Request Kategori */}
            <div>
              <HeadingDua label={"Kategori Berita"}></HeadingDua>
              <div className='flex flex-col gap-1 mt-2'>
                <ItemsReqKategori label={"Opini"}></ItemsReqKategori>
                <ItemsReqKategori label={"Mistis"}></ItemsReqKategori>
              </div>
            </div>
          </div>

          {/* Kiri */}
          <div className='order-2 md:order-1 w-full'>
            {/* Berita Pending */}
            <div className='flex justify-between items-center mb-2 mt-2 lg:mt-0'>
              <HeadingDua label={"Berita Pending"} />
              <Link to={'/admin/pending-news'} className='font-ws font-medium text-sm'>Lihat lainnya</Link>
            </div>
            <div className='flex flex-col gap-2'>
              <CardPending></CardPending>
              <CardPending></CardPending>
              <CardPending></CardPending>
            </div>
          </div>

        </div>


      </section>
    </div >
  )
}

export default DashboardAdminPage