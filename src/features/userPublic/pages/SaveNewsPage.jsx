import React from 'react'
import Navbar from '../components/Navbar'
import HeadingDua from '../../../components/HeadingDua'
import CardPublic from '../components/CardPublic'
import LoadingFetch from '../../../components/LoadingFetch'
// import Pagination from '../../../components/Pagination'

// Services
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { disimpan } from '../api/userPublicAPI'


function SaveNewsPage() {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchData();
    return;
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await disimpan();
      console.log('Response dari API:', response);

      if (response) {
        setNews(response.data);
      } else {
        toast.error('Gagal memuat data berita. Silakan coba lagi.');
      }
    } catch (error) {
      toast.error('Gagal memuat data berita. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  if (loading || !news) {
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
          <Navbar active={"save"}></Navbar>
          <ToastContainer stacked></ToastContainer>

          <div className='flex flex-col w-full justify-between gap-3 md:gap-3'>
            <div className='overflow-y-auto'>
              <div className='flex justify-between items-center mb-2'>
                <HeadingDua label={"Berita Disimpan"} />
              </div>

              {
                (news.length > 0) ?
                  news.map((item, index) => (
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                      <CardPublic key={index} data={item} />
                    </div>
                  )) :
                  <h1 className="font-mw text-center text-gray-500 mt-5">
                    Data tidak ada
                  </h1>
              }
              
            </div>

            {/* Pagination */}
            {/* <Pagination></Pagination> */}
          </div>

        </section>
      </div >
    )
  }
}

export default SaveNewsPage