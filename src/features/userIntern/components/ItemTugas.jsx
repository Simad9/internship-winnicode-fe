import React from 'react'
import iconTugas from '../../../assets/icons/icon-tugas.svg'

function ItemTugas({ judul, deadline }) {
  return (
    <div className='flex flex-col items-start gap-0.5 p-1 bg-lm-primary rounded-md'>
      <div className='flex gap-2 items-start'>
        <img src={iconTugas} alt="tugas" />
        <div className='flex flex-col items-start'>
          <h1 className='font-ws font-semibold text-sm'>Deskripsi Tugas</h1>
          <p className='font-mw font-normal text-sm'>{judul}</p>
        </div>
      </div>
      <div className='flex flex-col'>
        <h1 className='font-ws font-semibold text-sm'>Deadline</h1>
        <p className='font-mw font-normal text-sm'>{deadline}</p>
      </div>
    </div>
  )
}

export default ItemTugas