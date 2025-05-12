import React from 'react'
import iconCheck from '../../../assets/icons/icon-check.svg'
import iconSilang from '../../../assets/icons/icon-silang.svg'
import { Link } from 'react-router-dom'

function ItemsReqKategori({ label }) {
  return (
    <div className='flex justify-between w-full gap-1'>
      <div className='flex p-1 ps-2 bg-lm-primary rounded-md items-center flex-grow'>
        <h1 className='font-mw text-base text-lm-text'>{label}</h1>
      </div>
      <div className='flex justify-end'>
        <Link><img src={iconCheck} alt="" className='cursour-pointer' /></Link>
        <Link><img src={iconSilang} alt="" className='cursour-pointer' /> </Link>
      </div>
    </div>
  )
}

export default ItemsReqKategori