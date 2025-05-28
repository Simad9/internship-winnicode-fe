import { Link } from 'react-router-dom'
import { interntMonth } from '../../../utils/Formarter'

function DataIntern({ data }) {
  return (
    <section className='flex flex-col gap-3 md:flex-row md:justify-between md:items-center mb-2'>
      <div className='flex flex-row items-center gap-2'>
        <img src={data.profile_picture} alt="Profile" className='size-[50px] rounded-md object-cover' />
        <div className='flex flex-col'>
          <p className='font-mw font-normal text-sm'>Anak Magang - {interntMonth(data.internship_date)}</p>
          <h1 className='font-ws font-medium text-[20px]'>{data.name}</h1>
        </div>
      </div>
      <Link to={`/magang/${data.id_user}`} className='py-1 md:py-0.5 lg:py-1 px-5 md:px-3 lg:px-5 bg-dm-primary text-dm-text font-ws font-normal md:font-medium text-[12px] md:text-sm lg:text-base rounded-[6px] text-center'>
        Berita Lainnya
      </Link>
    </section>
  )
}

export default DataIntern