import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Kategori from '../components/Kategori'
import HeadingSatu from '../components/HeadingSatu'
import HeadingDua from '../components/HeadingDua'
import NewsCard from '../components/CardNews'
import { Link } from 'react-router-dom'
import CardNewsLike from '../components/CardNewsLike'
import Button from '../components/Button'

function HomePage() {
  return (
    <div className='flex flex-col gap-5'>
      <section className='flex flex-col bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px]'>
        {/* NAVBAR */}
        <Navbar />
        <Kategori />

        {/* CONTENT */}
        <section className='flex flex-col items-start justify-center gap-2.5 mt-4 w-full'>
          {/* Bagian Kiri */}
          <div className='flex flex-col md:flex-row items-start justify-between md:justify-center  gap-2.5 md:gap-4 lg:gap-5 w-full'>
            {/* Publish Terbaru */}
            <div className='flex flex-col items-start justify-center gap-2.5 w-full md:w-8/12'>
              <HeadingSatu label="Publish Terbaru" />
              <div className='flex flex-col w-full'>
                <div className='flex flex-col gap-2.5 bg-lm-primary p-1 rounded-md'>
                  <img src="https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gambar" className='w-full h-[150px] md:h-[180px] lg:h-[240px] object-cover rounded-md' />
                  <div className='flex flex-col gap-2.5 md:gap-0'>
                    <div className='flex flex-col gap-0.5 md:gap-1'>
                      <h1 className='font-ws font-semibold text-xl md:text-2xl'>Mahasiswa Rancang Aplikasi Edukasi untuk Daerah 3T</h1>
                      <div className='line-clamp-2 md:line-clap-3 lg:line-clamp-3 h-10 md:h-12 lg:h-16'>
                        <p className='font-mw font-normal text-sm md:text-[12px] lg:text-base leading-5 md:leading-4 lg:leading-[22px]'>Isi Berita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis veritatis, exercitationem laborum perferendis unde, ab, consequatur illo aperiam illum et quo voluptates voluptate aliquam dolore? Ipsam sequi quaerat blanditiis quo!</p>
                      </div>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                      <div className='flex flex-col md:flex-row gap-1 font-mw font-normal text-sm md:text-[12px] lg:text-base leading-5 md:leading-4 lg:leading-[22px]'>
                        <span>Indra Permana -</span>
                        <span>01/05/2025 - 13:00 WIB</span>
                      </div>
                      <Link to={"/news/:id"} className='py-1 md:py-0.5 lg:py-1 px-5 md:px-3 lg:px-5 bg-dm-primary text-dm-text font-ws font-normal md:font-medium text-[12px] md:text-sm lg:text-base rounded-[6px] text-center'>Baca</Link>
                    </div>
                  </div>
                </div>


                <div className='flex flex-col md:flex-row gap-2.5 mt-2.5'>
                  <div className='flex flex-col gap-2.5 bg-lm-primary p-1 rounded-lg '>
                    <img src="https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gambar Berita" className='rounded-md h-[150px] md:h-[130px] lg:h-[150px] w-full object-fill' />
                    <div className='flex flex-col gap-2.5 md:gap-2'>
                      <div className='flex flex-col gap-1 text-lm-text'>
                        <h1 className='font-ws font-semibold text-xl md:text-sm lg:text-xl'>Tips Membuat CV Digital yang Menarik di Era LinkedIn</h1>
                      </div>
                      <div className='flex items-center justify-between'>
                        <p className='font-mw font-normal text-sm md:text-[12px] lg:text-base'>Dimas Febrian - 30/04/2025</p>
                        <Button to="/news/:id" label="Baca" />
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2.5 bg-lm-primary p-1 rounded-lg '>
                    <img src="https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gambar Berita" className='rounded-md h-[150px] md:h-[130px] lg:h-[150px] w-full object-fill' />
                    <div className='flex flex-col gap-2.5 md:gap-2'>
                      <div className='flex flex-col gap-1 text-lm-text'>
                        <h1 className='font-ws font-semibold text-xl md:text-sm lg:text-xl'>Tips Membuat CV Digital yang Menarik di Era LinkedIn</h1>
                      </div>
                      <div className='flex items-center justify-between'>
                        <p className='font-mw font-normal text-sm md:text-[12px] lg:text-base'>Dimas Febrian - 30/04/2025</p>
                        <Button to="/news/:id" label="Baca" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Disukai Banyak Orang */}
            <div className='flex flex-col items-baseline justify-end gap-2.5 w-full md:w-[250px] lg:w-[350px] h-full'>
              <HeadingDua label="Disukai Banyak Orang" />
              <div className=' gap-2 w-full flex flex-col items-start md:items-stretch justify-start'>
                <CardNewsLike />
                <CardNewsLike />
                <CardNewsLike />
                <CardNewsLike />
                <CardNewsLike />
                <CardNewsLike />
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