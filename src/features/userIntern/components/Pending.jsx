import React from 'react'
import HeadingDua from '../../../components/HeadingDua'
import ItemPending from './ItemPending'

function Pending({ data }) {
  const statusFormat = (status) => {
    switch (status) {
      case "revised":
        return "Revisi"
      case "approve":
        return "Approve"
      case "pending":
        return "Pending"

      default:
        break;
    }
  }

  return (
    <section className='flex flex-col w-full'>
      <HeadingDua label={"Pending"} />
      <section className='flex flex-col w-full gap-2 mt-2'>
        {
          data.map((item, index) => (
            <ItemPending key={index} judul={item.title} status={statusFormat(item.status)}></ItemPending>
          ))
        }
        {/* <ItemPending judul={"Pembuatan Berita Tema Teknologi"} status={"Review"}></ItemPending>
        <ItemPending judul={"Pembuatan Berita Bermakna"} status={"Review"}></ItemPending> */}
      </section>
    </section>
  )
}

export default Pending