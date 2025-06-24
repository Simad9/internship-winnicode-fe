import Navbar from '../components/Navbar'
import HeadingDua from '../../../components/HeadingDua'
import InternUser from '../components/InternUser'
import Button from '../../../components/Button'
import LoadingFetch from '../../../components/LoadingFetch'

// Service
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { markIntern } from '../api/userAdminAPI'

function MarkUserPage() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [mark, setMark] = useState(null);
  const [dataTask, setDataTask] = useState(null);
  const { id_user } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await markIntern(id_user);
      console.log(response);
      if (response) {
        setUserData(response.data.dataIntern);
        setMark(response.data.dataMarkIntern);
        setDataTask(response.data.dataTasks);
      } else {
        toast.error('Tidak ada data akun yang ditemukan.');
      }
    }
    catch (error) {
      toast.error('Gagal memuat data akun. Silakan coba lagi.');
    }
    finally {
      setLoading(false);
    }
  }


  if (loading || !userData) {
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
          <Navbar active={"control"}></Navbar>
          <ToastContainer stacked></ToastContainer>

          <div className='flex flex-col md:flex-row w-full gap-4 md:gap-5 '>
            {/* Kanan */}
            <div className='order-1 md:order-2 w-full flex flex-col gap-3 '>
              <HeadingDua label={"Menilai Anak Magang"}></HeadingDua>
              <div className='flex flex-col gap-2 w-full'>
                {

                  dataTask.map((data, index) => (
                    <div key={index} className='w-full flex flex-col gap-1' >
                      <label for="tugas1" class="text-sm md:text-[18px] font-ws font-medium text-lm-text">Tugas {index + 1} : {data.task_title}</label>
                      <input
                        type="number"
                        id="tugas1"
                        name="tugas1"
                        min={0}
                        max={100}
                        value={mark ? mark[index]?.mark : ''}
                        class="bg-lm-primary border-1 border-abu-text text-lm-text text-sm md:text-[18ox] font-ws rounded-lg focus:ring-dm-primary focus:border-dm-primary focus:text-lm-text block w-full p-2"
                        placeholder="Masukan 1-100" />
                    </div>
                  ))
                }
              </div>
              <Button label={"Simpan Nilai"}></Button>

            </div>

            {/* Kiri */}
            <div className='order-1 md:order-2 flex flex-col w-full md:w-[300px] lg:w-[400px] gap-2'>
              <HeadingDua label={"Profile Anak Magang"}></HeadingDua>
              {/* Intern User Profile */}
              <InternUser data={userData}></InternUser>
            </div>

          </div>

        </section>
      </div >
    )
  }
}

export default MarkUserPage
