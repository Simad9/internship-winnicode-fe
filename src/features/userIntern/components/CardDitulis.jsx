import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import ButtonSecondary from '../components/ButtonSecondary'
import { formatDate } from '../../../utils/Formarter';

function CardDitulis({ data }) {
  const [kategori, setKategori] = useState(`${data.category.category}`);

  useEffect(() => {
    switch (data.status) {
      case "revised":
        setKategori(`${data.category.category} - Revisi`);
        break;

      case "approve":
        setKategori(`${data.category.category}`);
        break;

      case "pending":
        setKategori(`${data.category.category} - Pending`);
        break;

      default:
        break;
    }
  }, [])


  return (
    <div className='p-2 bg-lm-primary rounded-md'>
      <img src={data.image ? data.image : "https://placehold.co/600x400?text=Image+Not+Found"} alt="Cover Berita" className='order-1 md:order-2 w-full h-[200px] md:h-[130px] lg:h-[200px] object-cover rounded-md' />
      <div className='order-2 md:order-1 flex flex-col gap-2 justify-center items-center md:items-start w-full'>
        <div className='flex flex-col gap-0.5'>
          <h3 className='font-mw font-normal text-sm text-kategori-accs mt-2'>{kategori}</h3>
          <h1 className='font-ws font-semibold text-xl md:text-sm lg:text-xl'>{data.title}</h1>
          <div className='line-clamp-2 md:line-clap-3 lg:line-clamp-3 h-10 md:h-8 lg:h-16'>
            <div className='font-mw font-normal text-sm md:text-[12px] lg:text-base leading-5 md:leading-4 lg:leading-[22px]' dangerouslySetInnerHTML={{ __html: data.content }}></div>
          </div>
        </div>
        <div className='flex flex-row gap-2 justify-between items-center w-full'>
          <div className='flex gap-1'>
            <Button to={`/news/${data.id_news}`} label={"Baca"}></Button>
            <ButtonSecondary to={`/news/${data.id_news}`} label={"Edit"}></ButtonSecondary>
            <ButtonSecondary to={`/news/${data.id_news}`} label={"Hapus"}></ButtonSecondary>
          </div>
          <p className='font-mw font-normal text-sm md:text-[12px] lg:text-base'>{formatDate(data.created_at)}</p>
        </div>
      </div>
    </div>
  )
}

export default CardDitulis