import { formatDate, imageMissing } from '../../../utils/Formarter';
import { Link } from 'react-router-dom';

function CardIntern({ data }) {
  return (
    <div className='p-1 flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-5 justify-center items-start bg-lm-primary rounded-md'>
      <img src={imageMissing(data.image)} alt="Cover Berita" className='order-1 md:order-2 w-full md:w-3/4 h-[200px] md:h-[130px] lg:h-[200px] object-cover rounded-md' />
      <div className='order-2 md:order-1 flex flex-col gap-2 justify-center items-center md:items-start w-full'>
        <div className='flex flex-col gap-0.5'>
          <h3 className='font-mw font-normal text-sm text-kategori-accs'>{data.category.category}</h3>
          <h1 className='font-ws font-semibold text-xl md:text-sm lg:text-xl'>{data.title}</h1>
          <div className='line-clamp-2 md:line-clap-3 lg:line-clamp-3 h-10 md:h-8 lg:h-16'>
            <p className='font-mw font-normal text-sm md:text-[12px] lg:text-base leading-5 md:leading-4 lg:leading-[22px]' dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </div>
        <div className='flex flex-row gap-2 justify-between items-center w-full'>
          <p className='font-mw font-normal text-sm md:text-[12px] lg:text-base'>{formatDate(data.created_at)}</p>
          <Link to={`/news/${data.id_news}`} className='py-1 md:py-0.5 lg:py-1 px-5 md:px-3 lg:px-5 bg-dm-primary text-dm-text font-ws font-normal md:font-medium text-[12px] md:text-sm lg:text-base rounded-[6px] text-center '>
            Baca
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardIntern