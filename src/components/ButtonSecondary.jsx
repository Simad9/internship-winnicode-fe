import React from 'react'
import { Link } from 'react-router-dom'

function ButtonSecondary({ to, label }) {
  return (
    <Link to={to} className='py-1 md:py-0.5 lg:py-1 px-5 md:px-3 lg:px-5 bg-lm-primary text-dm-primary border-1 border-dm-primary font-ws font-normal md:font-medium text-[12px] md:text-sm lg:text-base rounded-[6px] text-center'>
      {label}
    </Link>
  )
}

export default ButtonSecondary