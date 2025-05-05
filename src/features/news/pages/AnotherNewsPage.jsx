import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Kategori from '../components/Kategori'
import HeadingDua from '../components/HeadingDua'
import NewsCard from '../components/CardNews'
import Pagination from '../components/Pagination'

function AnotherNewsPage() {
  return (
    <div className='flex flex-col gap-5'>
      <section className='flex flex-col bg-lm-bg px-[40px]'>
        {/* NAVBAR */}
        <Navbar />
        <Kategori />

        {/* Berita Lainnya */}
        <div className='flex flex-col items-start justify-center gap-2.5 mt-4'>
          <HeadingDua label="Berita Lainnya" />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>

        {/* Pagination Button */}
        <Pagination />
      </section>

      {/* FOOTER */}
      <Footer />
    </div >
  )
}

export default AnotherNewsPage