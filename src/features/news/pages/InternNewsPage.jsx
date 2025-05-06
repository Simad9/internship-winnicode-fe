import React from 'react'
import Footer from '../../news/components/Footer'
import Navbar from '../../news/components/Navbar'
import { Link } from 'react-router-dom'

function InternNewsPage() {
  return (
    <>
      <div className='flex flex-col px-8 bg-lm-bg h-screen'>
        <Navbar />
        {/* Main Content */}
        <main className="flex flex-col items-center justify-center text-center px-4 py-16 w-full md:w-full h-full">
          <h1>Intern Berita</h1>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default InternNewsPage