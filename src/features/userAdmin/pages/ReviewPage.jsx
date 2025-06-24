import Navbar from '../components/Navbar'
import HeadingDua from '../../../components/HeadingDua'
import LoadingFetch from '../../../components/LoadingFetch';

// Services
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { reviewNews } from '../api/userAdminAPI';
import { formatDateTimeReview } from '../../../utils/Formarter';

function ReviewPage() {
  const [loading, setLoading] = useState(false);
  const [reviewData, setReviewData] = useState(null);
  const { id_news } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Simulasi pengambilan data
      const response = await reviewNews(id_news);
      console.log('Response dari API:', response);
      if (response) {
        setReviewData(response.data);
      } else {
        toast.error('Data tidak ada');
      }
    } catch (error) {
      toast.error('Gagal memuat data berita. Silakan coba lagi.');
    }
    finally {
      setLoading(false);
    }
  }

  if (loading || !reviewData) {
    return (
      <div className='flex flex-col bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px]'>
        <Navbar />
        <LoadingFetch />
      </div>
    );
  } else {
    return (
      <div className='flex flex-col gap-5 mb-5' >
        <section className='flex flex-col w-full bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px] gap-3'>

          {/* Navbar */}
          <Navbar active={"pending"}></Navbar>
          <ToastContainer stacked></ToastContainer>

          <div className='flex flex-col md:flex-row w-full gap-3 md:gap-5 '>
            {/* Kanan */}
            <div className='order-1 md:order-2 w-full flex flex-col gap-3 '>
              <HeadingDua label={"Berita"}></HeadingDua>
              <div className='flex flex-col gap-3'>
                <div>
                  <h3 className='font-mw font-normal text-sm text-kategori-accs'>{reviewData.category.category}</h3>
                  <h1 className='font-ws font-medium text-xl'>{reviewData.title}</h1>
                  <p className='font-mw font-normal text-sm'>{reviewData.author.name} - {formatDateTimeReview(reviewData.created_at)}</p>
                </div>
                <div className='w-full mt-3'>
                  <img src={reviewData.image} alt="Cover Berita" className='w-full object-cover rounded-md h-[200px]' />
                </div>
                <div className='font-mw text-base font-normal mb-3' dangerouslySetInnerHTML={{ __html: reviewData.content ? reviewData.content.replace(/\n/g, "<br />") : '' }}>
                </div>
              </div>

            </div>

            {/* Kiri */}
            <div className='order-1 md:order-2 flex flex-col w-full md:w-[300px] lg:w-[400px] gap-2'>
              <div className='flex flex-col gap-2'>
                <HeadingDua label={"Tugas"}></HeadingDua>
                <h1 className='font-mw font-medium text-base'>{reviewData.task.task_title}</h1>
              </div>

              <div className='w-full'>
                <HeadingDua label={"Status Tugas"}></HeadingDua>
                <select id="status" class="bg-lm-primary border-1 border-abu-text font-mw text-abut-text text-sm rounded-md focus:ring-abu-text focus:border-abu-text w-full p-2.5 mt-2">
                  <option selected>Status Tugas</option>
                  <option value="approve">Terima</option>
                  <option value="revisied">Revisi</option>
                  <option value="reject">Tolak</option>
                </select>
                <textarea name="notes" id="notes" className='w-full border-1 border-abu-text rounded-md p-2 mt-2 font-mw text-base text-lm-text h-24' placeholder='Isi Revisi'></textarea>
                <div className='w-full'>
                  <Link className='py-1.5 md:py-1 lg:py-1 px-5 md:px-3 lg:px-5 bg-dm-primary text-dm-text font-ws font-normal md:font-medium text-[12px] md:text-sm lg:text-base rounded-[6px] text-center w-full flex items-center justify-center'>
                    Kirim Masukan
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </section>
      </div >
    )
  }
}

export default ReviewPage
