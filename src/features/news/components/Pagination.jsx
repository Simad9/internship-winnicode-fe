import React from 'react'
import IconArrow from '../../../assets/icons/icon-arrow.svg'

function Pagination() {
  return (
    <div className='flex flex-row items-center justify-center gap-2.5 w-full mt-7'>
      <div className='cursor-pointer bg-dm-bg rounded-lg p-2 size-8 md:size-9 lg:size-10 '>
        <img src={IconArrow} alt="" />
      </div>
      <div className='cursor-pointer bg-dm-bg rounded-lg p-2 size-8 md:size-9 lg:size-10 text-dm-text text-center font-ws font-medium text-base lg:text-[18px] flex items-center justify-center'>
        01
      </div>
      <div className='cursor-pointer bg-dm-bg rounded-lg p-2 size-8 md:size-9 lg:size-10'>
        <img src={IconArrow} alt="" className='rotate-180'/>
      </div>
    </div>
  )
}

export default Pagination