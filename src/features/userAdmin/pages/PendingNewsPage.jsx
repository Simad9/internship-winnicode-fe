import Navbar from '../components/Navbar'
import HeadingDua from '../../../components/HeadingDua'
import CardPendingSecondary from '../components/CardPendingSecondary'
import LoadingFetch from '../../../components/LoadingFetch'
// import CardPending from '../components/CardPending'

// Service
import React, { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { pendingBerita } from '../api/userAdminAPI';

function PendingNewsPage() {
  const [loading, setLoading] = useState(false);
  const [pendingData, setPendingData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await pendingBerita();
      console.log('Response dari API:', response);
      if (response) {
        setPendingData(response.data);
      } else {
        toast.error('Gagal memuat data berita. Silakan coba lagi.');
      }
    } catch (error) {
      toast.error('Gagal memuat data berita. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
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

          <div className='flex flex-col w-full gap-3 md:gap-3 '>
            <div className='flex justify-between items-center mt-2 lg:mt-0'>
              <HeadingDua label={"Berita Pending"} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2'>
              {pendingData?.length > 0 ? (
                pendingData.map((item) => (
                  <CardPendingSecondary key={item.id_news} data={item} />
                ))
              ) : (
                <h1 className='font-mw font-medium text-sm text-center text-abu-text mt-5'>
                  Tidak ada Berita Pending
                </h1>
              )}
            </div>
          </div>
        </section>
      </div >
    )
  }
}

export default PendingNewsPage