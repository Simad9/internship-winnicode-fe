import React from 'react'
import { Link } from 'react-router-dom'

function Button({ to, label }) {
  return (
    <Link to={to} className='py-1 md:py-0.5 lg:py-1 px-5 md:px-3 lg:px-5 bg-dm-primary text-dm-text font-ws font-normal md:font-medium text-[12px] md:text-sm lg:text-base rounded-[8px] text-center'>
      {label}
    </Link>
  )
}

export default Button