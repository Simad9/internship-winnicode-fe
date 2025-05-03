import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Kategori from '../components/Kategori'

function HomePage() {
  return (
    <>
      <section className='flex flex-col bg-lm-bg px-7'>
        {/* NAVBAR */}
        <Navbar />
        <Kategori />

        {/* CONTENT */}
        <section>
          <h1 className='my-5 text-2xl font-bold'>Home</h1>
        </section>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default HomePage