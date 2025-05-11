import React from 'react'
import Navbar from '../components/Navbar'
import Penulis from '../components/Penulis'
import TugasMagang from '../components/TugasMagang'
import Pending from '../components/Pending'
import HeadingDua from '../../../components/HeadingDua'
import CardDitulis from '../components/CardDitulis'


function DashboardInternPage() {
  return (
    <div className='flex flex-col gap-5 mb-5'>
      <section className='flex flex-col w-full bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px] gap-3'>

        {/* Navbar */}
        <Navbar active={"dashboard"} />

        <div className='flex flex-col md:flex-row w-full gap-3 md:gap-10'>

          <section className='order-1 md:order-2 flex flex-col w-full md:w-[250px] lg:w-[500px] gap-2'>
            {/* Penulis */}
            <Penulis />

            {/* Tugas Magang */}
            <TugasMagang />

            {/* Pending */}
            <Pending />
          </section>

          {/* Berita Yang Ditulis */}
          <section className="order-2 md:order-1 flex flex-col w-full md:w-full md:mt-3">
            <HeadingDua label={"Berita Yang Ditulis"} />
            <div className='flex flex-col gap-2'>
              <CardDitulis />
              <CardDitulis />
              <CardDitulis />
            </div>
          </section>

        </div>


      </section>
    </div>
  )
}

export default DashboardInternPage