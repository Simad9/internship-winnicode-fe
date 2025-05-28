import IconArrow from '../../../assets/icons/icon-arrow.svg'
import { Link } from 'react-router-dom'

function Pagination({ page, totalPages }) {

  const handlePageChange = (page) => {
    if (page < 1) {
      return `/news/page?page=1`;
    } else if (page > totalPages) {
      return `/news/page?page=${totalPages}`;
    } else {
      return `/news/page?page=${page}`;
    }
  }

  return (
    <div className='flex flex-row items-center justify-center gap-2.5 w-full mt-7'>
      <Link to={handlePageChange(page - 1)} className={`cursor-pointer bg-dm-bg rounded-lg p-2 size-8 md:size-9 lg:size-10 ${page <= 1 ? 'pointer-events-none opacity-50' : ''}`}>
        <img src={IconArrow} alt="" />
      </Link>
      <div className='cursor-pointer bg-dm-bg rounded-lg p-2 size-8 md:size-9 lg:size-10 text-dm-text text-center font-ws font-medium text-base lg:text-[18px] flex items-center justify-center'>
        {page}
      </div>
      <Link to={handlePageChange(page + 1)} className={`cursor-pointer bg-dm-bg rounded-lg p-2 size-8 md:size-9 lg:size-10 ${page >= totalPages ? 'pointer-events-none opacity-50' : ''}`}>
        <img src={IconArrow} alt="" className='rotate-180' />
      </Link>
    </div>
  )
}

export default Pagination