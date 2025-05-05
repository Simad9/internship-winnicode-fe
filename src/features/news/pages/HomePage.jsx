import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Kategori from '../components/Kategori'
import HeadingSatu from '../components/HeadingSatu'
import HeadingDua from '../components/HeadingDua'
import NewsCard from '../components/CardNews'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='flex flex-col gap-5'>
      <section className='flex flex-col bg-lm-bg px-[40px]'>
        {/* NAVBAR */}
        <Navbar />
        <Kategori />

        {/* CONTENT */}
        <section className='flex flex-col items-start justify-center gap-2.5 mt-4'>
          <div className='flex flex-col md:flex-row items-end justify-center gap-2.5 w-full'>
            {/* Publish Terbaru */}
            <div className='flex flex-col items-start justify-center gap-2.5'>
              <HeadingSatu label="Publish Terbaru" />
              <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                <NewsCard />
                <NewsCard />
              </div>
            </div>

            {/* Disukai Banyak Orang */}
            <div className='flex flex-col items-start justify-center gap-2.5'>
              <HeadingDua label="Disukai Banyak Orang" />
              <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                <NewsCard />
              </div>
            </div>
          </div>

          {/* Berita Lainnya */}
          <div className='flex flex-col items-start justify-center gap-2.5'>
            <HeadingDua label="Berita Lainnya" />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </div>
          </div>
        </section>

        {/* Button Selengkapnya */}
        <div className='flex flex-row items-center justify-center w-full mt-7'>
          <Link to={"/news/page"} className='py-1 lg:py-1.5 w-8/12 md:w-4/12  bg-dm-primary text-dm-text font-ws font-normal md:font-medium text-sm lg:text-base rounded-lg text-center'>
            Selengkapnya
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default HomePage