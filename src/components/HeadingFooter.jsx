import React from 'react'

function HeadingFooter({ label }) {
  return (
    <div className='flex items-center gap-1 h-full'>
      <div className='w-[2px] h-[16px] bg-heading-accs'></div>
      <h1 className='text-dm-text font-ws font-medium text-[12px] lg:text-[16px]'>{label}</h1>
    </div>
  )
}

export default HeadingFooter