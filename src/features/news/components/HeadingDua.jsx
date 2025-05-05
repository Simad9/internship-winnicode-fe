import React from 'react'

function HeadingDua({ label }) {
  return (
    <div className='flex items-center gap-[3px] h-full'>
      <div className='w-[5px] h-[25px] bg-heading-accs'></div>
      <h1 className='text-lg-text font-ws font-medium text-[18px] lg:text-[24px]'>{label}</h1>
    </div>
  )
}

export default HeadingDua