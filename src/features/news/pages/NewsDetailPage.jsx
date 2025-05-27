import React, { use } from 'react'
import Footer from '../../news/components/Footer'
import Navbar from '../../news/components/Navbar'
import { Link } from 'react-router-dom'
import iconLike from '../../../assets/icons/icon-like.svg'
import iconKomentar from '../../../assets/icons/icon-komentar.svg'
import iconSave from '../../../assets/icons/icon-save.svg'
import iconBagikan from '../../../assets/icons/icon-share.svg'
import fotoProfile from '../../../assets/img/profile.jpg'
import HeadingDua from '../components/HeadingDua'
import CardNewsLike from '../components/CardNewsLike'

// Services
import { useEffect } from 'react'

function newsDetailPage() {
  useEffect(() => {
    // Simulate fetching data or any other side effects
    console.log('NewsDetailPage mounted');
  }, []);

  return (
    <>
      <div className='flex flex-col px-8 bg-lm-bg'>
        <Navbar />
        {/* Main Content */}
        <main className="flex flex-col gap-3.5 py-5 w-full h-full">
          {/* Bagian Berita */}
          <div className='flex flex-col md:flex-row gap-3.5'>
            <div className='w-full'>
              {/* Bagian Kanan */}
              <section className='md:order-none flex flex-col gap-3.5'>
                {/* BERITA */}
                <div className='flex flex-col gap-3'>
                  <div>
                    <h3 className='font-mw font-normal text-sm text-kategori-accs'>Pendidikan</h3>
                    <h1 className='font-ws font-medium text-xl'>Mahasiswa Rancang Aplikasi Edukasi untuk Daerah 3T</h1>
                    <p className='font-mw font-normal text-sm'>Indra Permana - Kamis, 01/05/2025 - 13:00 WIB</p>
                  </div>
                  <div className='w-full mt-3'>
                    <img src="https://images.unsplash.com/photo-1745669754254-c30c98e5f8b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cover Berita" className='w-full object-cover rounded-md h-[200px]' />
                  </div>
                  <div className='font-mw text-base font-normal'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora at amet optio debitis, possimus placeat veniam alias deleniti. Aliquid vel numquam ratione facere quod quaerat molestiae, impedit consectetur fugit excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error similique recusandae repellendus, sapiente minus esse? Magnam laudantium dolorum veritatis mollitia facilis esse, cupiditate saepe voluptas distinctio libero! Dolorum, ea vel!</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quos asperiores repellendus, perferendis et eligendi architecto eaque fuga, fugit nulla corrupti, illum nihil quisquam natus quibusdam possimus recusandae rerum velit?</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et illum recusandae reprehenderit cupiditate obcaecati placeat aspernatur voluptatem commodi repellendus. Explicabo, praesentium? Labore ea laudantium alias cupiditate officia. Nobis, voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quo iusto, iste facere nobis esse perspiciatis, sequi harum dolore soluta magni amet eveniet magnam pariatur unde aut voluptate. Corrupti, porro!</p>
                    <br />
                  </div>
                </div>
              </section>

            </div>

            {/* Disukai Banyak Orang */}
            <section className='hidden md:flex flex-col items-baseline justify-end gap-2.5 w-full md:w-[400px] lg:w-[500px] h-full'>
              <HeadingDua label="Disukai Banyak Orang" />
              <div className=' gap-2 w-full flex flex-col items-start md:items-stretch justify-start'>
                <CardNewsLike />
                <CardNewsLike />
                <CardNewsLike />
                <CardNewsLike />
                <CardNewsLike />
                <CardNewsLike />
              </div>
            </section>
          </div>

          {/* Bagian Komentar */}
          <div className='flex flex-col md:flex-row gap-3.5'>
            <div className='flex flex-col gap-3 w-full'>
              {/* BERITA ATRIBUT LIKE< KOMENTAR */}
              <section className='flex gap-2.5 justify-between mb-2'>
                <div className='flex flex-col md:flex-row gap-1 md:gap-3'>
                  <div className='flex flex-row gap-1 cursor-pointer'>
                    <img src={iconLike} alt="Like" />
                    <p>20 Like</p>
                  </div>
                  <div className='flex flex-row gap-1 cursor-pointer'>
                    <img src={iconKomentar} alt="Komentar" />
                    <p>20 Komentar</p>
                  </div>
                </div >

                <div className='flex flex-col md:flex-row gap-1 md:gap-3'>
                  <div className='flex flex-row gap-1 cursor-pointer'>
                    <img src={iconSave} alt="Simpan" />
                    <p>Simpan</p>
                  </div>
                  <div className='flex flex-row gap-1 cursor-pointer'>
                    <img src={iconBagikan} alt="Bagikan" />
                    <p>Bagikan</p>
                  </div>
                </div>
              </section>

              {/* MENUJU TULISAN LAINNYA */}
              <section className='flex flex-col gap-3 md:flex-row md:justify-between md:items-center mb-2'>
                <div className='flex flex-row items-center gap-2'>
                  <img src={fotoProfile} alt="Profile" className='w-[50px] rounded-md' />
                  <div className='flex flex-col'>
                    <p className='font-mw font-normal text-sm'>Anak Magang - 2 Bulsn</p>
                    <h1 className='font-ws font-medium text-[20px]'>Indra Permana</h1>
                  </div>
                </div>
                <Link to="magang/1" className='py-1 md:py-0.5 lg:py-1 px-5 md:px-3 lg:px-5 bg-dm-primary text-dm-text font-ws font-normal md:font-medium text-[12px] md:text-sm lg:text-base rounded-[6px] text-center'>
                  Berita Lainnya
                </Link>
              </section>

              {/* Petunuk */}
              <section>
                <p className='font-ws text-base font-normal mb-2'>20 Komentar</p>
                <div className='flex flex-row gap-2 items-center'>
                  <img src={fotoProfile} alt="" className='size-10 rounded-md' />
                  <h1 className='font-ws font-medium text-base'>User</h1>
                </div>
              </section>

              {/* Form */}
              <form>
                <div class="w-full mb-4 border border-abu-text rounded-lg bg-lm-primary">
                  <div class="flex items-center justify-between px-3 py-2 border-b border-abu-text">
                    {/* Bisa dihapus */}
                    <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse">
                      <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                        <button type="button" class="p-2 text-lm-primarbg-lm-primary0 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                          </svg>
                          <span class="sr-only">Attach file</span>
                        </button>
                        <button type="button" class="p-2 text-lm-primarbg-lm-primary0 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                          </svg>
                          <span class="sr-only">Embed map</span>
                        </button>
                        <button type="button" class="p-2 text-lm-primarbg-lm-primary0 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                          </svg>
                          <span class="sr-only">Upload image</span>
                        </button>
                        <button type="button" class="p-2 text-lm-primarbg-lm-primary0 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                            <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                          </svg>
                          <span class="sr-only">Format code</span>
                        </button>
                        <button type="button" class="p-2 text-lm-primarbg-lm-primary0 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                          </svg>
                          <span class="sr-only">Add emoji</span>
                        </button>
                      </div>
                      <div class="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                        <button type="button" class="p-2 text-lm-primarbg-lm-primary0 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4" />
                          </svg>
                          <span class="sr-only">Add list</span>
                        </button>
                        <button type="button" class="p-2 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                          </svg>
                          <span class="sr-only">Settings</span>
                        </button>
                        <button type="button" class="p-2 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
                            <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
                          </svg>
                          <span class="sr-only">Timeline</span>
                        </button>
                        <button type="button" class="p-2 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                          </svg>
                          <span class="sr-only">Download</span>
                        </button>
                      </div>
                    </div>
                    {/* Bisa dihapus */}
                    <button type="button" data-tooltip-target="tooltip-fullscreen" class="p-2 text-gray-500 rounded-sm cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5" />
                      </svg>
                      <span class="sr-only">Full screen</span>
                    </button>
                    <div id="tooltip-fullscreen" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                      Show full screen
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    {/* END - bisa dihapus */}
                  </div>
                  <div class="p-1 bg-white rounded-b-lg">
                    <textarea id="editor" rows="8" class="w-full ps-1 text-sm text-lm-text bg-lm-primary" placeholder="Tulis sebuah komentar" required ></textarea>
                  </div>
                </div>
                <button type="submit" class="inline-flex items-center justify-center w-full px-5 py-2.5 text-sm font-medium text-dm-text bg-dm-primary rounded-lg focus:ring-4 focus:ring-dm-primary hover:bg-dm-200">
                  Kirim
                </button>
              </form>

              {/* List Komentar */}
              <section className='mt-2 w-full flex flex-col gap-3'>
                <div>
                  <div className='flex gap-2 items-center'>
                    <img src={fotoProfile} alt="" className='size-13 rounded-md' />
                    <div className='text-lm-text'>
                      <p className='font-ws font-medium text-base'>Joko Minto</p>
                      <p className='font-mw font-normal text-sm'>20/05/2025, 12:00 WIB</p>
                    </div>
                  </div>
                  <p className='font-mw font-normal text-base mt-2'>Keren beritanya, semangat terus ya temen seperjuanganku</p>
                </div>
              </section>

            </div>

            <div className='flex flex-col items-baseline justify-end gap-2.5 w-full md:w-[400px] lg:w-[500px] h-full'>
              <img src="https://mymilk.com/uploads/image/artikel_1.jpg" alt="Iklan" className='mt-10' />
            </div>
          </div>

        </main>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default newsDetailPage