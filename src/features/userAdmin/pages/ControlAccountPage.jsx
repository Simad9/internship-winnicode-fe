import React from 'react'
import Navbar from '../components/Navbar'
import HeadingSatu from '../../../components/HeadingSatu'
import iconSearch from '../../../assets/icons/navbar/icon-search.svg';
import { Link } from 'react-router-dom';
import iconEdit from '../../../assets/icons/icon-edit.svg'
import iconHapus from '../../../assets/icons/icon-silang.svg'

function ControlAccountPage() {
  return (
    <div className='flex flex-col gap-5 mb-5' >
      <section className='flex flex-col w-full bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px] gap-3'>

        {/* Navbar */}
        <Navbar active={"control"}></Navbar>

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
                <Link className='px-5 py-2 bg-lm-primary text-dm-primary border-1 border-dm-primary font-ws font-normal md:font-medium text-[12px] md:text-sm lg:text-base rounded-[6px] text-center'>
                  Magang
                </Link>
                <Link className='px-5 py-2 bg-lm-primary text-dm-primary border-1 border-dm-primary font-ws font-normal md:font-medium text-[12px] md:text-sm lg:text-base rounded-[6px] text-center'>
                  User
                </Link>
                <Link className='px-5 py-2 bg-dm-primary text-dm-text font-ws font-normal md:font-medium text-[12px] md:text-sm lg:text-base rounded-[6px] text-center'>
                  Semua
                </Link>
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
                  <tr className="odd:bg-gray-100 even:bg-gray-200 font-ws font-medium text-lm-text">
                    <td className="px-6 py-2 flex items-center justify-center">
                      <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Photo" className="size-10 rounded-sm" />
                    </td>
                    <td className="px-4 py-2 text-center">Indra Permana</td>
                    <td className="px-4 py-2 text-center">Indra123</td>
                    <td className="px-4 py-2 text-center">Indra123@example.com</td>
                    <td className="px-4 py-2 text-center">Magang</td>
                    <td>
                      <div className='flex  justify-center items-center gap-2'>
                        <Link to={"#"} className="flex items-center justify-center gap-1">
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
                        <Link to={"#"} className="px-5 py-2 bg-dm-primary text-dm-text font-ws font-normal text-[12px] rounded-[6px] text-center">
                          Beri Nilai
                        </Link>
                      </div>
                    </td>

                  </tr>
                  <tr className="odd:bg-gray-100 even:bg-gray-200 font-ws font-medium text-lm-text">
                    <td className="px-6 py-2 flex items-center justify-center">
                      <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Photo" className="size-10 rounded-sm" />
                    </td>
                    <td className="px-4 py-2 text-center">Indra Permana</td>
                    <td className="px-4 py-2 text-center">Indra123</td>
                    <td className="px-4 py-2 text-center">Indra123@example.com</td>
                    <td className="px-4 py-2 text-center">Magang</td>
                    <td>
                      <div className='flex  justify-center items-center gap-2'>
                        <Link to={"#"} className="flex items-center justify-center gap-1">
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
                        <Link to={"#"} className="px-5 py-2 bg-dm-primary text-dm-text font-ws font-normal text-[12px] rounded-[6px] text-center">
                          Beri Nilai
                        </Link>
                      </div>
                    </td>

                  </tr>
                  <tr className="odd:bg-gray-100 even:bg-gray-200 font-ws font-medium text-lm-text">
                    <td className="px-6 py-2 flex items-center justify-center">
                      <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Photo" className="size-10 rounded-sm" />
                    </td>
                    <td className="px-4 py-2 text-center">User</td>
                    <td className="px-4 py-2 text-center">User123</td>
                    <td className="px-4 py-2 text-center">User123@example.com</td>
                    <td className="px-4 py-2 text-center">User</td>
                    <td>
                      <div className='flex  justify-center items-center gap-2'>
                        <Link to={"#"} className="flex items-center justify-center gap-1">
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
                      <div className='flex  justify-center items-center '>
                        <button disabled className="px-5 py-2 bg-gray-300 text-gray-500 font-ws font-normal text-[12px] rounded-[6px] text-center cursor-not-allowed">
                          Beri Nilai
                        </button>
                      </div>
                    </td>

                  </tr>


                </tbody>

              </table>
            </div>
          </div>

        </div>

      </section >
    </div >
  )
}

export default ControlAccountPage