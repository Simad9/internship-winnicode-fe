import React from 'react'
import Navbar from '../components/Navbar'

function EditAccountPage() {
  return (
    <div className='flex flex-col gap-5'>
      <section className='flex flex-col bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px]'>
        {/* Navbar */}
        <Navbar active={"dashboard"} />


      </section>
    </div>
  )
}

export default EditAccountPage