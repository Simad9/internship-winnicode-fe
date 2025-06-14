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
          data.length > 0 ?
            data.map((item, index) => (
              <ItemTugas key={index} judul={item.task_title} deadline={taskDate(item.task_deadline)} />
            )) :
            <p className="text-center text-sm text-gray-500">
              Tidak ada data
            </p>
        }
      </section>
    </section>
  )
}

export default TugasMagang
