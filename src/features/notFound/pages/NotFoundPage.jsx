import React from 'react'
import Footer from '../../news/components/Footer'
import Navbar from '../../news/components/Navbar'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <>
      <div className='flex flex-col px-8 bg-lm-bg h-screen'>
        <Navbar />
        {/* Main Content */}
        <main className="flex flex-col items-center justify-center text-center px-4 py-16 w-full md:w-full h-full">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-ws font-bold text-lm-text">Haduh!</h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-ws font-medium text-lm-text mt-4">404 - Halaman Tidak Ditemukan</h2>
          <p className="text-sm md:text-lg lg:text-xl text-abu-text font-mw mt-2 w-full md:w-3/4 lg:w-8/12">
            Oops! Sepertinya halaman yang kamu cari tidak tersedia.
            Kamu bisa kembali ke Beranda, cari berita terbaru, atau laporkan masalah ini.
          </p>

          <div className="mt-6 space-x-2 w-full">
            <Link to="/news" className="bg-dm-primary text-dm-text px-4 md:px-6 py-2 text-sm lg:text-xl rounded-md cursor-pointer">Beranda</Link>
            <a href="https://wa.me/+6282135322025" target='_blank' className="border border-dm-primary text-sm lg:text-xl px-4 md:px-6 py-2 rounded-md cursor-pointer">Laporkan Kesalahan</a>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default NotFoundPage