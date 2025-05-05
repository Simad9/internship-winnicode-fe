import React from 'react'

function HeadingSatu({ label }) {
  return (
    <div className='flex items-center gap-[5px] h-full'>
      <div className='w-[8px] h-[35px] bg-heading-accs'></div>
      <h1 className='text-lm-text font-ws font-medium text-[22px] md:text-[26px] lg:text-[30px]'>{label}</h1>
    </div>
  )
}

export default HeadingSatu