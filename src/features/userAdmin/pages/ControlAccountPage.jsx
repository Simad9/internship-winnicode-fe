import Navbar from '../components/Navbar'
import HeadingSatu from '../../../components/HeadingSatu'
import iconSearch from '../../../assets/icons/navbar/icon-search.svg';
import iconEdit from '../../../assets/icons/icon-edit.svg'
import iconHapus from '../../../assets/icons/icon-silang.svg'
import LoadingFetch from '../../../components/LoadingFetch';

// Services
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { akunAll, deleteAkunAll, akunAllIntern, akunAllUser } from '../api/userAdminAPI';

function ControlAccountPage() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState();
  const [role, setRole] = useState('all');

  useEffect(() => {
    fetchData();
  }, [role]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (role === 'magang') {
        const response = await akunAllIntern();
        console.log(response);
        if (response) {
          setUserData(response.data);
        } else {
          toast.error('Tidak ada data akun yang ditemukan.');
        }
      } else if (role === 'user') {
        const response = await akunAllUser();
        console.log(response);
        if (response) {
          setUserData(response.data);
        } else {
          toast.error('Tidak ada data akun yang ditemukan.');
        }
      } else if (role === 'all') {
        // Ambil semua akun
        const response = await akunAll();
        console.log(response);
        if (response) {
          setUserData(response.data);
        } else {
          toast.error('Tidak ada data akun yang ditemukan.');
        }
      }
    }
    catch (error) {
      toast.error('Gagal memuat data akun. Silakan coba lagi.');
    }
    finally {
      setLoading(false);
    }
  }

  const handleFilter = (role) => {
    setRole(role);
  }

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
          <Navbar active={"control"}></Navbar>
          <ToastContainer stacked />

          <div className='flex flex-col w-full gap-3 mt-3'>
            {/* Heading */}
            <div className='flex flex-col md:flex-row w-full justify-between gap-3'>
              <HeadingSatu label={"Akun"}></HeadingSatu>

              <div className='flex flex-col md:flex-row md:items-end items-center gap-3'>
                <div className='relative w-full md:w-auto'>
                  <input type="text" placeholder='Cari Berita...' className='w-full py-2 pl-2 pr-10 bg-lm-primary text-lm-text font-ws font-medium  text-sm rounded-md border-1 border-abut-text' />
                  <button className='absolute inset-y-0 end-0 flex items-center pe-2 cursor-pointer'>
                    <img src={iconSearch} alt="iconSearch" />
                  </button>
                </div>

                <div className='flex flex-row justify-between md:justify-end items-center w-full md:w-auto gap-2'>
                  <button onClick={() => handleFilter('magang')} className={`px-5 py-2 bg-lm-primary text-dm-primary border-1 border-dm-primary font-ws font-normal md:font-medium text-[12px] md:text-sm lg:text-base rounded-[6px] text-center ${role === 'magang' ? 'bg-dm-primary' : ''}`}>
                    Magang
                  </button>
                  <button onClick={() => handleFilter('user')} className={`px-5 py-2 bg-lm-primary text-dm-primary border-1 border-dm-primary font-ws font-normal md:font-medium text-[12px] md:text-sm lg:text-base rounded-[6px] text-center ${role === 'user' ? 'bg-dm-primary' : ''}`}>
                    User
                  </button>
                  <button onClick={() => handleFilter('all')} className={`px-5 py-2 bg-dm-primary text-dm-text font-ws font-normal md:font-medium text-[12px] md:text-sm lg:text-base rounded-[6px] text-center ${role === 'all' ? 'bg-dm-primary' : ''}`}>
                    Semua
                  </button>
                </div>

              </div>
            </div>

            {/* Table */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-md mt-2">
              <div className="overflow-x-auto">

                <table className="text-sm text-left rtl:text-right w-[1000px] lg:w-full">

                  <thead className="text-sm text-dm-text bg-dm-primary text-center">
                    <tr>
                      <th scope="col" className="px-4 py-2">Photo</th>
                      <th scope="col" className="px-4 py-2">Nama</th>
                      <th scope="col" className="px-4 py-2">Username</th>
                      <th scope="col" className="px-4 py-2">Email</th>
                      <th scope="col" className="px-4 py-2">Status</th>
                      <th scope="col" className="px-4 py-2">Action</th>
                      <th scope="col" className="px-4 py-2">Nilai</th>
                    </tr>
                  </thead>

                  <tbody className="border-b border-abu-text rounded">
                    {
                      userData && userData.map((user, index) => (
                        <tr key={index} className="odd:bg-gray-100 even:bg-gray-200 font-ws font-medium text-lm-text">
                          <td className="px-6 py-2 flex items-center justify-center">
                            <img src={user.profile_picture} alt="Photo" className="size-10 rounded-sm object-cover" />
                          </td>
                          <td className="px-4 py-2 text-center">{user.name}</td>
                          <td className="px-4 py-2 text-center">{user.username}</td>
                          <td className="px-4 py-2 text-center">{user.email}</td>
                          <td className="px-4 py-2 text-center">{user.role == "intern" ? "Magang" : "User"}</td>
                          <td>
                            <div className='flex  justify-center items-center gap-2'>
                              <Link to={`/admin/edit-user/${user.id_user}`} className="flex items-center justify-center gap-1">
                                <img src={iconEdit} alt="Edit" />
                                <p>Edit</p>
                              </Link>
                              <Link to={"#"} className="flex items-center justify-center gap-1">
                                <img src={iconHapus} alt="Delete" />
                                <p>Hapus</p>
                              </Link>
                            </div>
                          </td>
                          <td >
                            <div className='flex  justify-center items-center'>
                              {user.role == "public" ? (
                                <Link disabled to={"#"} className="px-5 py-2 bg-gray-300 text-gray-500 font-ws font-normal text-[12px] rounded-[6px] text-center cursor-not-allowed">
                                  Beri Nilai
                                </Link>
                              )
                                : (
                                  <Link to={`/admin/mark-intern/${user.id_user}`} className="px-5 py-2 bg-dm-primary text-dm-text font-ws font-normal text-[12px] rounded-[6px] text-center">
                                    Beri Nilai
                                  </Link>
                                )
                              }
                            </div>
                          </td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </section >
      </div >
    )
  }
}

export default ControlAccountPage