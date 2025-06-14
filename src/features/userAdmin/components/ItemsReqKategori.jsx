import React from 'react'
import iconCheck from '../../../assets/icons/icon-check.svg'
import iconSilang from '../../../assets/icons/icon-silang.svg'
import { useNavigate } from 'react-router-dom'
import { approveReqCategory, deleteCategory } from '../api/userAdminAPI'

function ItemsReqKategori({ data }) {
  const navigate = useNavigate()

  const handleApprove = async () => {
    try {
      await approveReqCategory(data.id_category)
      navigate(0)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDecline = async () => {
    try {
      await deleteCategory(data.id_category)
      navigate(0)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-between w-full gap-1'>
      <div className='flex p-1 ps-2 bg-lm-primary rounded-md items-center flex-grow'>
        <h1 className='font-mw text-base text-lm-text'>{data.category}</h1>
      </div>
      <div className='flex justify-end'>
        <button onClick={handleApprove}>
          <img src={iconCheck} alt="" className='cursor-pointer' />
        </button>
        <button onClick={handleDecline}>
          <img src={iconSilang} alt="" className='cursor-pointer' />
        </button>
      </div>
    </div>
  )
}

export default ItemsReqKategori

