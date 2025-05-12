import React from 'react'
import Navbar from '../components/Navbar'
import HeadingDua from '../../../components/HeadingDua'
// import CardPending from '../components/CardPending'
import CardPendingSecondary from '../components/CardPendingSecondary'

function PendingNewsPage() {
  return (
    <div className='flex flex-col gap-5 mb-5' >
      <section className='flex flex-col w-full bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px] gap-3'>

        {/* Navbar */}
        <Navbar active={"pending"}></Navbar>

        <div className='flex flex-col w-full gap-3 md:gap-3 '>
          <div className='flex justify-between items-center mt-2 lg:mt-0'>
            <HeadingDua label={"Berita Pending"} />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2'>
            <CardPendingSecondary></CardPendingSecondary>
            <CardPendingSecondary></CardPendingSecondary>
            <CardPendingSecondary></CardPendingSecondary>
            <CardPendingSecondary></CardPendingSecondary>
          </div>
        </div>
      </section>
    </div >
  )
}

export default PendingNewsPage