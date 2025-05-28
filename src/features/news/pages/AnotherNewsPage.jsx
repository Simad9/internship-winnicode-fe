import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Kategori from '../components/Kategori'
import HeadingDua from '../components/HeadingDua'
import NewsCard from '../components/CardNews'
import Pagination from '../components/Pagination'
import LoadingFetch from '../../../components/LoadingFetch';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';  // import useLocation
import { getNewsPage } from '../api/newsApi'
import { toast, ToastContainer } from 'react-toastify'
import { formatDate, imageMissing, formatContent } from '../../../utils/Formarter'

function AnotherNewsPage() {
  const [loading, setLoading] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [currnetPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();

  // Parse 'page' dari query params, default 1
  const params = new URLSearchParams(location.search);
  const page = params.get('page') ? parseInt(params.get('page')) : 1;

  useEffect(() => {
    fetchData();
  }, [page]);  // Fetch ulang setiap kali page berubah

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getNewsPage(page);
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
  if (loading && newsData.length === 0) {
    return (
      <div className='flex flex-col bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px]'>
        <Navbar />
        <LoadingFetch />
      </div>
    );
  } else {
    return (
      <div className='flex flex-col gap-5'>
        <section className='flex flex-col bg-lm-bg px-[40px]'>
          <ToastContainer stacked />
          <Navbar />
          <Kategori />

          <div className='flex flex-col items-start justify-center gap-2.5 mt-4'>
            <HeadingDua label="Berita Lainnya" />
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

          <Pagination page={currnetPage} totalPages={totalPages} />
        </section>
        <Footer />
      </div>
    );
  }
}

export default AnotherNewsPage;

