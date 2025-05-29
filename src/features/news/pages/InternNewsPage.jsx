import Footer from '../../news/components/Footer'
import Navbar from '../../news/components/Navbar'
import Penulis from '../components/Penulis'
import HeadingDua from '../components/HeadingDua'
import CardIntern from '../components/CardIntern'
import LoadingFetch from '../../../components/LoadingFetch'

// Service
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { internPageNews } from '../api/newsApi'
import { toast, ToastContainer } from 'react-toastify'

function InternNewsPage() {
  const [loading, setLoading] = useState(false);
  const [internNews, setInternNews] = useState(null);
  const [internNewsAuthor, setInternNewsAuthor] = useState(null);
  const navigate = useNavigate();

  const { userId } = useParams();

  useEffect(() => {
    fetchData();
  }, [userId]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await internPageNews(userId);
      console.log(response);
      if (response) {
        setInternNews(response.internNews);
        setInternNewsAuthor(response.internNewsAuthor.author);
      } else {
        toast.error('Gagal memuat data berita. Silakan coba lagi.');
      }
    } catch (error) {
      console.log('Error fetching data:', error);
      toast.error(error.message || 'Gagal memuat data berita. Silakan coba lagi.');
      navigate('/404');

    } finally {
      setLoading(false);
    }
  }

  if (loading || internNews === null || internNewsAuthor === null) {
    return (
      <div className='flex flex-col bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px]'>
        <Navbar />
        <ToastContainer stacked />
        <LoadingFetch />
      </div>
    )
  } else {
    return (
      <>
        <div className='flex flex-col px-8 bg-lm-bg'>
          <Navbar />
          <ToastContainer stacked />
          {/* Main Content */}
          <main className="flex flex-col md:flex-row items-start justify-start gap-5 py-4 w-full h-full md:min-h-screen">
            {/* Penulis */}
            <Penulis data={internNewsAuthor} />

            {/* Berita Yang ditulis */}
            <section className='order-2 md:order-1 flex flex-col gap-2 w-full'>
              <HeadingDua label="Berita Yang ditulis" />
              {internNews.map((data, index) => (
                <CardIntern key={index} data={data} />
              ))}
            </section>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </>
    )
  }
}

export default InternNewsPage