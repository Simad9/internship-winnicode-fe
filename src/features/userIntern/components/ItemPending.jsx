import React from 'react'
import iconPending from '../../../assets/icons/icon-pending.svg'

function ItemPending({ judul, status }) {
  return (
    <div className='flex flex-col items-start gap-0.5 p-1 bg-lm-primary rounded-md'>
      <div className='flex gap-2 items-start'>
        <img src={iconPending} alt="tugas" />
        <div className='flex flex-col items-start'>
          <h1 className='font-ws font-semibold text-sm'>Judul Tugas</h1>
          <p className='font-mw font-normal text-sm'>{judul}</p>
        </div>
      </div>
      <div className='flex flex-col'>
        <h1 className='font-ws font-semibold text-sm'>Status</h1>
        <p className='font-mw font-normal text-sm'>{status}</p>
      </div>
    </div>
  )
}

export default ItemPending