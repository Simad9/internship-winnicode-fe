import React from 'react'
import HeadingDua from '../../../components/HeadingDua'
import ItemPending from './ItemPending'

function Pending() {
  return (
    <section className='flex flex-col w-full'>
      <HeadingDua label={"Pending"} />
      <section className='flex flex-col w-full gap-2 mt-2'>
        <ItemPending judul={"Pembuatan Berita Tema Teknologi"} status={"Review"}></ItemPending>
        <ItemPending judul={"Pembuatan Berita Bermakna"} status={"Review"}></ItemPending>
      </section>
    </section>
  )
}

export default Pending