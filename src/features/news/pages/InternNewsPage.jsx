import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../news/components/Footer'
import Navbar from '../../news/components/Navbar'
import Penulis from '../components/Penulis'
import HeadingDua from '../components/HeadingDua'
import CardIntern from '../components/CardIntern'

function InternNewsPage() {
  return (
    <>
      <div className='flex flex-col px-8 bg-lm-bg'>
        <Navbar />
        {/* Main Content */}
        <main className="flex flex-col md:flex-row items-start justify-start gap-5 py-4 w-full h-full md:min-h-screen">
          {/* Penulis */}
          <Penulis />

          {/* Berita Yang ditulis */}
          <section className='order-2 md:order-1 flex flex-col gap-2 w-full'>
            <HeadingDua label="Berita Yang ditulis" />
            <CardIntern />
            <CardIntern />
            <CardIntern />
          </section>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default InternNewsPage