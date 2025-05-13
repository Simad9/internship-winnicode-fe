import React from 'react'
import Navbar from '../components/Navbar'
import HeadingDua from '../../../components/HeadingDua'
import { Link } from 'react-router-dom'

function ReviewPage() {
  return (
    <div className='flex flex-col gap-5 mb-5' >
      <section className='flex flex-col w-full bg-lm-bg px-[30px] md:px-[40px] lg:px-[60px] gap-3'>

        {/* Navbar */}
        <Navbar active={"pending"}></Navbar>

        <div className='flex flex-col md:flex-row w-full gap-3 md:gap-5 '>
          {/* Kanan */}
          <div className='order-1 md:order-2 w-full flex flex-col gap-3 '>
            <HeadingDua label={"Berita"}></HeadingDua>
            <div className='flex flex-col gap-3'>
              <div>
                <h3 className='font-mw font-normal text-sm text-kategori-accs'>Pendidikan</h3>
                <h1 className='font-ws font-medium text-xl'>Mahasiswa Rancang Aplikasi Edukasi untuk Daerah 3T</h1>
                <p className='font-mw font-normal text-sm'>Indra Permana - Kamis, 01/05/2025 - 13:00 WIB</p>
              </div>
              <div className='w-full mt-3'>
                <img src="https://images.unsplash.com/photo-1745669754254-c30c98e5f8b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cover Berita" className='w-full object-cover rounded-md h-[200px]' />
              </div>
              <div className='font-mw text-base font-normal mb-3'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora at amet optio debitis, possimus placeat veniam alias deleniti. Aliquid vel numquam ratione facere quod quaerat molestiae, impedit consectetur fugit excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error similique recusandae repellendus, sapiente minus esse? Magnam laudantium dolorum veritatis mollitia facilis esse, cupiditate saepe voluptas distinctio libero! Dolorum, ea vel!</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quos asperiores repellendus, perferendis et eligendi architecto eaque fuga, fugit nulla corrupti, illum nihil quisquam natus quibusdam possimus recusandae rerum velit?</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et illum recusandae reprehenderit cupiditate obcaecati placeat aspernatur voluptatem commodi repellendus. Explicabo, praesentium? Labore ea laudantium alias cupiditate officia. Nobis, voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quo iusto, iste facere nobis esse perspiciatis, sequi harum dolore soluta magni amet eveniet magnam pariatur unde aut voluptate. Corrupti, porro!</p>
              </div>
            </div>

          </div>

          {/* Kiri */}
          <div className='order-1 md:order-2 flex flex-col w-full md:w-[300px] lg:w-[400px] gap-2'>
            <div className='flex flex-col gap-2'>
              <HeadingDua label={"Tugas"}></HeadingDua>
              <h1 className='font-mw font-medium text-base'>Pembuatan Cerita Bermakna</h1>
            </div>

            <div className='w-full'>
              <HeadingDua label={"Status Tugas"}></HeadingDua>
              <select id="status" class="bg-lm-primary border-1 border-abu-text font-mw text-abut-text text-sm rounded-md focus:ring-abu-text focus:border-abu-text w-full p-2.5 mt-2">
                <option selected>Status Tugas</option>
                <option value="1">Tugas 1</option>
                <option value="2">Tugas 2</option>
                <option value="3">Tugas 3</option>
              </select>
              <textarea name="notes" id="notes" className='w-full border-1 border-abu-text rounded-md p-2 mt-2 font-mw text-base text-lm-text h-24' placeholder='Isi Revisi'></textarea>
              <div className='w-full'>
                <Link className='py-1.5 md:py-1 lg:py-1 px-5 md:px-3 lg:px-5 bg-dm-primary text-dm-text font-ws font-normal md:font-medium text-[12px] md:text-sm lg:text-base rounded-[6px] text-center w-full flex items-center justify-center'>
                  Kirim Masukan
                </Link>
              </div>
            </div>
          </div>

        </div>

      </section>
    </div >
  )
}

export default ReviewPage