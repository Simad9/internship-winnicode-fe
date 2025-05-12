import React from 'react'
import Navbar from '../components/Navbar'


function ControlAccountPage() {
  return (
    <div className='flex flex-col gap-5 mb-5' >
      <section className='flex flex-col w-full bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px] gap-3'>

        {/* Navbar */}
        <Navbar active={"control"}></Navbar>

       

      </section>
    </div >
  )
}

export default ControlAccountPage