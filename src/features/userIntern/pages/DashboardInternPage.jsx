import React from 'react'
import Navbar from '../components/Navbar'
import Penulis from '../components/Penulis'
import TugasMagang from '../components/TugasMagang'
import Pending from '../components/Pending'
import HeadingDua from '../../../components/HeadingDua'
import CardDitulis from '../components/CardDitulis'
import LoadingFetch from '../../../components/LoadingFetch'

// Services
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'
import { dashboard } from '../api/userInternAPI'


function DashboardInternPage() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [taskData, setTaskData] = useState([]);
  const [newsAuthor, setNewsAuthor] = useState([]);
  const [pendingData, setPendingData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await dashboard();
      console.log('Response dari API:', response);

      if (response) {
        setUserData(response.userData);
        setTaskData(response.taskData);
        setNewsAuthor(response.newsAuthor);
        setPendingData(response.pendingData);

      } else {
        toast.error('Gagal memuat data berita. Silakan coba lagi.');
      }
    } catch (error) {
      toast.error('Gagal memuat data berita. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };


  if (loading || !userData || !taskData || !newsAuthor || !pendingData) {
    return (
      <div className='flex flex-col bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px]'>
        <Navbar />
        <LoadingFetch />
      </div>
    );
  } else {
    return (
      <div className='flex flex-col gap-5 mb-5'>
        <section className='flex flex-col w-full bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px] gap-3'>

          {/* Navbar */}
          <Navbar active={"dashboard"} />
          <ToastContainer stacked />

          <div className='flex flex-col md:flex-row w-full gap-3 md:gap-10'>
            <section className='order-1 md:order-2 flex flex-col w-full md:w-[250px] lg:w-[500px] gap-2'>
              {/* Penulis */}
              <Penulis data={userData} />

              {/* Tugas Magang */}
              <TugasMagang data={taskData} />

              {/* Pending */}
              <Pending data={pendingData} />
            </section>

            {/* Berita Yang Ditulis */}
            <section className="order-2 md:order-1 flex flex-col w-full md:w-full md:mt-3">
              <HeadingDua label={"Berita Yang Ditulis"} />
              <div className='flex flex-col gap-2'>
                {
                  newsAuthor.map((item, index) => (
                    <CardDitulis key={index} data={item} />
                  ))
                }
                {/* <CardDitulis />
                <CardDitulis />
                <CardDitulis /> */}
              </div>
            </section>

          </div>


        </section>
      </div>
    )
  }
}

export default DashboardInternPage