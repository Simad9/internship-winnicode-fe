import React from 'react'

function CardComment({ image, name, timestamp, comment }) {
  return (
    <div>
      <div className='flex gap-2 items-center'>
        <img src={image} alt="" className='size-13 rounded-md object-cover' />
        <div className='text-lm-text'>
          <p className='font-ws font-medium text-base'>{name}</p>
          <p className='font-mw font-normal text-sm'>{timestamp}</p>
        </div>
      </div>
      <p className='font-mw font-normal text-base mt-2'>{comment}</p>
    </div>
  )
}

export default CardComment