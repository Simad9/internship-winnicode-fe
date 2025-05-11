import React from 'react'
import HeadingDua from '../../../components/HeadingDua'
import ItemTugas from '../components/ItemTugas'

function TugasMagang() {
  return (
    <section className='flex flex-col w-full'>
      <HeadingDua label={"Tugas Magang"} />
      <section className='flex flex-col w-full gap-2 mt-2'>
        <ItemTugas judul={"Membuat Berita Unik"} deadline={"30 Mar"}></ItemTugas>
        <ItemTugas judul={"Membuat Berita Teknologi"} deadline={"30 Apr"}></ItemTugas>
      </section>
    </section>
  )
}

export default TugasMagang