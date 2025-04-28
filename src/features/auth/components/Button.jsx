import React from 'react'
import { Link } from 'react-router-dom'

function Button({ to, label }) {
  return (
    <Link to={to} className='py-2 px-5 bg-dm-primary text-dm-text font-ws font-normal text-sm rounded-[10px] text-center'>
      {label}
    </Link>
  )
}

export default Button