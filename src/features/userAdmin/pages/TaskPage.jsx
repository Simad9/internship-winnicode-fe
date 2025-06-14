import Navbar from '../components/Navbar'
import HeadingDua from '../../../components/HeadingDua'
import Button from '../../../components/Button'
import iconEdit from '../../../assets/icons/icon-edit.svg'
import iconHapus from '../../../assets/icons/icon-silang.svg'
import LoadingFetch from '../../../components/LoadingFetch'

// Service
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { task } from '../api/userAdminAPI'
import { toast, ToastContainer } from 'react-toastify'
import { internDate } from '../../../utils/Formarter'

function TaskPage() {
  const [loading, setLoading] = useState(false);
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await task();
      console.log('Response dari API:', response);
      if (response) {
        setTaskData(response.data);
      } else {
        toast.error('Gagal memuat data berita. Silakan coba lagi.');
      }
    } catch (error) {
      toast.error('Gagal memuat data berita. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  console.log(taskData);


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
          <Navbar active={"task"}></Navbar>
          <ToastContainer stacked></ToastContainer>

          <div className='flex flex-col md:flex-col lg:flex-row md:justify-center md:items-center lg:items-start lg:mt-5 w-full gap-3 md:gap-7 '>
            {/* Kanan */}
            <div className='w-full md:w-1/2 lg:w-5/12 flex flex-col gap-1 '>
              <HeadingDua label={"Form Pengisian"}></HeadingDua>
              <div className='flex flex-col gap-2 w-full'>
                <textarea name="notes" id="notes" className='w-full border-1 border-abu-text rounded-md p-2 mt-2 font-mw text-base text-lm-text h-24' placeholder='Isi Tugas'></textarea>
                <input
                  type="date"
                  id="tugas1"
                  name="tugas1"
                  class="bg-lm-primary border-1 border-abu-text text-lm-text text-sm md:text-[18ox] font-ws rounded-lg focus:ring-dm-primary focus:border-dm-primary focus:text-lm-text block w-full p-2"
                  placeholder="DD/MM/YYYY" />
                <Button label={"Tambah Tugas"}></Button>
              </div>


            </div>

            {/* Kiri */}
            <div className='flex flex-col w-full gap-3'>
              <HeadingDua label={"List Tugas"}></HeadingDua>

              <div class="relative overflow-x-auto shadow-md sm:rounded-md">
                <div class="overflow-x-auto">
                  <table class="text-sm text-left rtl:text-right w-[700px] md:w-full">
                    <thead class="text-sm text-dm-text bg-dm-primary text-center">
                      <tr>
                        <th scope="col" class="px-6 py-2">
                          Tugas
                        </th>
                        <th scope="col" class="px-6 py-2">
                          Deadline
                        </th>
                        <th scope="col" class="px-0 py-2">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className='border-b border-abu-text rounded'>
                      {
                        taskData.length > 0 ?
                          taskData.map((task) => (
                            <tr key={task.task_id} class="odd:bg-gray-100 even:bg-gray-200  font-ws font-medium text-lm-text">
                              <th scope="row" class="px-6 py-2 font-medium">
                                {task.task_title}
                              </th>
                              <td class="px-6 py-2 text-center">
                                {internDate(task.task_deadline)}
                              </td>
                              <td class="px-0 py-2 flex justify-center gap-3">
                                <Link to={`/admin/task/edit/${task.task_id}`} className='flex items-center justify-center gap-1'>
                                  <img src={iconEdit} alt="" />
                                  <p>Edit</p>
                                </Link>
                                <Link className='flex items-center justify-center gap-1'>
                                  <img src={iconHapus} alt="" />
                                  <p>Hapus</p>
                                </Link>
                              </td>
                            </tr>
                          )) :
                          <tr>
                            <td colSpan="3" className='text-center py-5'>
                              Tidak ada tugas
                            </td>
                          </tr>
                      }
                    </tbody>
                  </table>
                </div>
              </div>



            </div>

          </div>

        </section>
      </div >
    )
  }
}

export default TaskPage