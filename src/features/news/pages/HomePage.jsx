// Component
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Kategori from '../components/Kategori'
import HeadingSatu from '../components/HeadingSatu'
import HeadingDua from '../components/HeadingDua'
import NewsCard from '../components/CardNews'
import CardNewsLike from '../components/CardNewsLike'
import Button from '../components/Button'

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
    console.log('useEffect dijalankan');
    fetchData();
  }, []);
  console.log('render HomePage');

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
        console.error('Data tidak ditemukan dalam response:', response);
        toast.error('Gagal memuat data berita. Silakan coba lagi.');
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching homepage data:', error);
      toast.error('Gagal memuat data berita. Silakan coba lagi.');
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
      <div class="flex items-center justify-center w-full h-screen  bg-gray-50 ">
        <div role="status">
          <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    )
  } else {
    return (
      <div className='flex flex-col gap-5'>
        <ToastContainer stacked />

        <section className='flex flex-col bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px]'>
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