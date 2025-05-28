import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Kategori from '../components/Kategori'
import NewsCard from '../components/CardNews'
import Pagination from '../components/Pagination'
import LoadingFetch from '../../../components/LoadingFetch';

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { searchNews } from '../api/newsApi'
import { formatDate, imageMissing, formatContent } from '../../../utils/Formarter'

function SearchNewsPage() {
  const [loading, setLoading] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();
  // Ambil param
  const params = new URLSearchParams(location.search);
  const keyword = params.get('q');

  useEffect(() => {
    fetchData();
  }, [keyword]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await searchNews(keyword);
      console.log(response);
      if (response) {
        setNewsData(response.data);
        setCurrentPage(response.pagination.currentPage);
        setTotalPages(response.pagination.totalPages);
      } else {
        toast.error('Gagal memuat data berita. Silakan coba lagi.');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // Render loading spinner atau konten
  if (loading) {
    return (
      <div className='flex flex-col bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px]'>
        <Navbar />
        <LoadingFetch />
      </div>
    );
  } else if (newsData.length === 0) {
    return (
      <div className='flex flex-col bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px]'>
        <Navbar />
        <div className='flex flex-col items-center justify-center h-screen -mt-14'>
          <h1 className='font-ws text-2xl text-lm-text font-medium'>Data Tidak Ditemukan</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className='flex flex-col gap-5'>
        <section className='flex flex-col bg-lm-bg px-[40px]'>
          {/* NAVBAR */}
          <Navbar />
          <Kategori />

          {/* Berita Lainnya */}
          <div className='flex flex-col items-start justify-center gap-2.5 mt-4'>
            <div className='flex flex-col items-center justify-center w-full mb-2'>
              <h1 className='font-ws text-2xl text-lm-text font-medium'>Hasil Pencarian</h1>
              <p className='font-mw text-xl text-lm-text font-normal'>"Keyword Cari = {keyword}"</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
              {newsData.map((news, index) => (
                <NewsCard
                  key={index}
                  image={imageMissing(news.image)}
                  title={news.title}
                  content={formatContent(news.content)}
                  author={news.author.name}
                  date={formatDate(news.created_at)}
                  id={news.id_news}
                />
              ))}
            </div>
          </div>

          {/* Pagination Button */}
          <Pagination page={currentPage} totalPages={totalPages} />
        </section>

        {/* FOOTER */}
        <Footer />
      </div >
    )
  }
}

export default SearchNewsPage