import React from 'react'
import Button from '../../../components/Button'
import { formatDate } from '../../../utils/Formarter'
import { updateReviewNews } from '../api/userAdminAPI'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


function CardPendingSecondary({ data }) {
  const navigate = useNavigate();
  const approveNews = async () => {
    try {
      const dataForm = {
        id_news: data.id_news,
        status: "approved",
      }
      await updateReviewNews(data.id_news, dataForm);
      toast.success('Berita berhasil disetujui');
      navigate(0);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='p-2 bg-lm-primary items-center rounded-md flex flex-col lg:flex-row gap-3'>
      <img src={data.image} alt="Cover Berita" className='w-full lg:w-5/12 h-[170px] md:h-[140px] lg:h-[170px] object-cover rounded-md' />
      <div className='flex flex-col lg:flex-row gap-2 justify-between items-center md:items-start lg:items-center w-full'>
        <div className='flex flex-col gap-1 w-full'>
          <h3 className='font-mw font-normal text-sm text-kategori-accs'>{data.category.category}</h3>
          <h1 className='font-ws font-semibold text-xl md:text-base lg:text-xl'>{data.title}</h1>
          <h1 className='font-mw  font-normal text-sm '>{data.author.name} - {formatDate(data.created_at)}</h1>
          <div className='hidden lg:block line-clamp-2 md:line-clamp-3 lg:line-clamp-3 h-10 md:h-8 lg:h-11'>
            <p className='font-mw font-normal text-sm md:text-[12px] lg:text-base leading-5 md:leading-4 lg:leading-[22px]' dangerouslySetInnerHTML={{ __html: data.content ? data.content.slice(0, 200) + (data.content.length > 200 ? '...' : '') : '' }}></p>
          </div>
        </div>
        <div className='flex gap-1 w-full lg:w-4/12 lg:flex-col'>
          <Button onClick={approveNews} label={"Terima"}></Button>
          <Button to={`/news/${data.id_news}`} label={"Baca Berita"}></Button>
        </div>
      </div>
    </div>
  )
}

export default CardPendingSecondary