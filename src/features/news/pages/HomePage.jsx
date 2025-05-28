// Component
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Kategori from '../components/Kategori'
import HeadingSatu from '../components/HeadingSatu'
import HeadingDua from '../components/HeadingDua'
import NewsCard from '../components/CardNews'
import CardNewsLike from '../components/CardNewsLike'
import Button from '../components/Button'
import LoadingFetch from '../../../components/LoadingFetch'

// Services
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { homepage } from '../api/newsApi'
import { toast, ToastContainer } from 'react-toastify'
import { formatDateTime, formatDate, imageMissing, formatContent } from '../../../utils/Formarter'

function HomePage() {
  const [newNewsData, setNewNewsData] = useState([]);
  const [likedNewsData, setLikedNewsData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await homepage(); // Panggil API untuk mendapatkan berita
      console.log('Response dari API:', response);
      if (response) {
        setNewNewsData(response.newNews);
        setLikedNewsData(response.likedNews);
        setNewsData(response.homeNews);
      } else {
        toast.error('Gagal memuat data berita. Silakan coba lagi.');
      }
    } catch (error) {
      toast.error('Gagal memuat data berita. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  // Komponen Berita Utama (Berita 1)
  function FeaturedNews({ news }) {
    if (!news) return null;
    return (
      <div className='flex flex-col gap-2.5 bg-lm-primary p-1 rounded-md'>
        <img src={imageMissing(news.image)} alt="Gambar" className='w-full h-[150px] md:h-[180px] lg:h-[240px] object-cover rounded-md' />
        <div className='flex flex-col gap-2.5 md:gap-0'>
          <div className='flex flex-col gap-0.5 md:gap-1'>
            <h1 className='font-ws font-semibold text-xl md:text-2xl'>{news.title}</h1>
            <div className='line-clamp-2 md:line-clamp-3 lg:line-clamp-3 h-10 md:h-12 lg:h-16'>
              <p className='font-mw font-normal text-sm md:text-[12px] lg:text-base leading-5 md:leading-4 lg:leading-[22px]'>
                {formatContent(news.content)}
              </p>
            </div>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-col md:flex-row gap-1 font-mw font-normal text-sm md:text-[12px] lg:text-base leading-5 md:leading-4 lg:leading-[22px]'>
              <span>{news.author.name} -</span>
              <span>{formatDateTime(news.created_at)}</span>
            </div>
            <Link to={`/news/${news.id_news}`} className='py-1 md:py-0.5 lg:py-1 px-5 md:px-3 lg:px-5 bg-dm-primary text-dm-text font-ws font-normal md:font-medium text-[12px] md:text-sm lg:text-base rounded-[6px] text-center'>Baca</Link>
          </div>
        </div>
      </div>
    );
  }

  // Komponen Berita List (Berita 2 & 3)
  function NewsListItem({ news }) {
    if (!news) return null;
    return (
      <div className='flex flex-col gap-2.5 bg-lm-primary p-1 rounded-lg'>
        <img src={imageMissing(news.image)} alt="Gambar Berita" className='rounded-md h-[150px] md:h-[130px] lg:h-[150px] w-full object-cover' />
        <div className='flex flex-col gap-2.5 md:gap-2'>
          <div className='flex flex-col gap-1 text-lm-text'>
            <h1 className='font-ws font-semibold text-xl md:text-sm lg:text-xl'>{news.title}</h1>
          </div>
          <div className='flex items-center justify-between'>
            <p className='font-mw font-normal text-sm md:text-[12px] lg:text-base'>{news.author.name} - {formatDate(news.created_at)}</p>
            <Button to={`/news/${news.id_news}`} label="Baca" />
          </div>
        </div>
      </div>
    );
  }

  if (loading && newNewsData.length === 0 && likedNewsData.length === 0) {
    return (
      <div className='flex flex-col bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px]'>
        <Navbar />
        <LoadingFetch />
      </div>
    )
  } else {
    return (
      <div className='flex flex-col gap-5'>

        <section className='flex flex-col bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px]'>
          <ToastContainer stacked />
          {/* NAVBAR */}
          <Navbar />
          <Kategori />

          {/* CONTENT */}
          <section className='flex flex-col items-start justify-center gap-2.5 mt-4 w-full'>
            {/* Bagian Kiri */}
            <div className='flex flex-col md:flex-row items-start justify-between md:justify-center  gap-2.5 md:gap-4 lg:gap-5 w-full'>
              {/* Publish Terbaru */}
              <div className='flex flex-col items-start justify-center gap-2.5 w-full md:w-8/12'>
                <HeadingSatu label="Publish Terbaru" />

                {/* Berita Terbaru */}
                <div className='flex flex-col w-full'>

                  {/* Berita ke-1 */}
                  {/* Pastikan newNewsData minimal ada 1 item */}
                  {newNewsData.length > 0 && <FeaturedNews news={newNewsData[0]} />}

                  <div className='flex flex-col md:flex-row gap-2.5 mt-2.5'>
                    {/* Pastikan ada minimal 3 item */}
                    {newNewsData.length > 1 && <NewsListItem news={newNewsData[1]} />}
                    {newNewsData.length > 2 && <NewsListItem news={newNewsData[2]} />}
                  </div>
                </div>
              </div>

              {/* Disukai Banyak Orang */}
              <div className='flex flex-col items-baseline justify-end gap-2.5 w-full md:w-[250px] lg:w-[350px] h-full'>
                <HeadingDua label="Disukai Banyak Orang" />
                <div className=' gap-2 w-full flex flex-col items-start md:items-stretch justify-start'>
                  {likedNewsData.map((news, index) => (
                    < CardNewsLike
                      key={index}
                      image={imageMissing(news.image)}
                      title={news.title}
                      author={news.author.name}
                      date={formatDate(news.created_at)}
                      id={news.id_news}
                    />
                  ))}
                </div>
              </div>
            </div>


            {/* Berita Lainnya */}
            <div className='flex flex-col items-start justify-center gap-2.5'>
              <HeadingDua label="Berita Lainnya" />
              <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                {newsData.map((news, index) => (
                  < NewsCard
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
          </section>

          {/* Button Selengkapnya */}
          <div className='flex flex-row items-center justify-center w-full mt-7'>
            <Link to={"/news/page?page=1"} className='py-1 lg:py-1.5 w-8/12 md:w-4/12  bg-dm-primary text-dm-text font-ws font-normal md:font-medium text-sm lg:text-base rounded-lg text-center'>
              Selengkapnya
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    )
  }
}

export default HomePage