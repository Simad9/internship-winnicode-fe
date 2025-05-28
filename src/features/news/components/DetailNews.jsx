import { imageMissing, formatDayDateTime } from '../../../utils/Formarter'

function DetailNews({ news }) {
  return (
    <div className='flex flex-col gap-3'>
      <div>
        <h3 className='font-mw font-normal text-sm text-kategori-accs'>{news.category.category}</h3>
        <h1 className='font-ws font-medium text-xl'>{news.title}</h1>
        <p className='font-mw font-normal text-sm'>{news.author.name} - {formatDayDateTime(news.created_at)}</p>
      </div>
      <div className='w-full mt-3'>
        <img src={imageMissing(news.image)} alt="Cover Berita" className='w-full object-cover rounded-md h-[200px]' />
      </div>
      <div className='font-mw text-base font-normal' dangerouslySetInnerHTML={{ __html: news.content }} />
    </div>
  )
}

export default DetailNews