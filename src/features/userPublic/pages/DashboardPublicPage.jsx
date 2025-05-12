import React from 'react'
import Navbar from '../components/Navbar'
import Public from '../components/Public'
import HeadingDua from '../../../components/HeadingDua'
import iconLike from '../../../assets/icons/icon-like.svg'
import iconSave from '../../../assets/icons/icon-save.svg'
import { Link } from 'react-router-dom'
import CardPublic from '../components/CardPublic'

function DashboardPublicPage() {
  return (
    <div className='flex flex-col gap-5 mb-5' >
      <section className='flex flex-col w-full bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px] gap-3'>

        {/* Navbar */}
        <Navbar active={"dashboard"}></Navbar>

        <div className='flex flex-col md:flex-row w-full gap-3 md:gap-3'>
          <section className='order-1 md:order-2 flex flex-col w-full md:w-[200px] lg:w-[300px] gap-2'>
            {/* Penulis */}
            <Public />

            {/* Total Berita Disukai dan Disimpan */}
            <div className="flex flex-row md:flex-col lg:flex-row justify-between items-center w-full gap-2">
              <div className='flex flex-row gap-2 items-start p-2.5 bg-lm-primary text-lm-text rounded-md w-full'>
                <img src={iconLike} alt="" className='size-8' />
                <div className=''>
                  <h1 className='font-mw font-medium text-base'>Disukai</h1>
                  <h1 className='font-ws font-medium text-base'><span className='text-2xl'>2 </span>Berita</h1>
                </div>
              </div>
              <div className='flex flex-row gap-2 items-start p-2.5 bg-lm-primary text-lm-text rounded-md w-full'>
                <img src={iconSave} alt="" className='size-8' />
                <div className=''>
                  <h1 className='font-mw font-medium text-base'>Disimpan</h1>
                  <h1 className='font-ws font-medium text-base'><span className='text-2xl'>2 </span>Berita</h1>
                </div>
              </div>
            </div>

          </section>

          <section className='order-2 md:order-1 flex flex-col gap-2 w-full'>
            {/* Berita Disukai */}
            <section className="order-2 md:order-1 flex flex-col w-full md:w-full md:mt-3">
              <div className='flex justify-between items-center mb-2'>
                <HeadingDua label={"Berita Disukai"} />
                <Link to={'/public/like'} className='font-ws font-medium text-sm'>Lihat lainnya</Link>
              </div>
              {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'> */}
              <CardPublic></CardPublic>
              <CardPublic></CardPublic>
              {/* </div> */}
            </section>

            {/* Berita Disimpan */}
            <section className="order-2 md:order-1 flex flex-col w-full md:w-full md:mt-3">
              <div className='flex justify-between items-center mb-2'>
                <HeadingDua label={"Berita Disimpan"} />
                <Link to={'/public/save'} className='font-ws font-medium text-sm'>Lihat lainnya</Link>
              </div>
              {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'> */}
              <CardPublic></CardPublic>
              <CardPublic></CardPublic>
              {/* </div> */}

            </section>
          </section>

        </div>

      </section>
    </div >
  )
}

export default DashboardPublicPage