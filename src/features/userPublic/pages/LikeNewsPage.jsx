import React from 'react'
import Navbar from '../components/Navbar'
import HeadingDua from '../../../components/HeadingDua'
import CardPublic from '../components/CardPublic'
// import Pagination from '../../../components/Pagination'

function LikeNewsPage() {
  return (
    <div className='flex flex-col gap-5 mb-5'>
      <section className='flex flex-col w-full bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px] gap-3'>

        {/* Navbar */}
        <Navbar active={"like"}></Navbar>

        <div className='flex flex-col w-full justify-between gap-3 md:gap-3'>
          <div className='overflow-y-auto'>
            <div className='flex justify-between items-center mb-2'>
              <HeadingDua label={"Berita Disukai"} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <CardPublic></CardPublic>
              <CardPublic></CardPublic>
              <CardPublic></CardPublic>
              <CardPublic></CardPublic>
            </div>
          </div>

          {/* Pagination */}
          {/* <Pagination></Pagination> */}
        </div>

      </section>
    </div >
  )
}

export default LikeNewsPage