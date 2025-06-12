import React from 'react'
import HeadingDua from '../../../components/HeadingDua'
import ItemTugas from '../components/ItemTugas'
import { taskDate } from '../../../utils/Formarter'

function TugasMagang({ data }) {
  return (
    <section className='flex flex-col w-full'>
      <HeadingDua label={"Tugas Magang"} />
      <section className='flex flex-col w-full gap-2 mt-2'>
        {
          data.map((item, index) => (
            <ItemTugas key={index} judul={item.task_title} deadline={taskDate(item.task_deadline)} />
          ))
        }
        {/* <ItemTugas judul={"Membuat Berita Unik"} deadline={"30 Mar"}></ItemTugas>
        <ItemTugas judul={"Membuat Berita Teknologi"} deadline={"30 Apr"}></ItemTugas> */}
      </section>
    </section>
  )
}

export default TugasMagang
