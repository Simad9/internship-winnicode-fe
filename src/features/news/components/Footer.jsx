import React from 'react'
import LogoWinnicode from '../../../assets/icons/footer/icon-logo-footer.svg'
import LogoKampusMerdeka from '../../../assets/icons/footer/icon-kampus-merdeka.svg'
import iconWeb from '../../../assets/icons/footer/icon-web.svg'
import iconInstagram from '../../../assets/icons/footer/icon-instagram.svg'
import { Link } from 'react-router-dom'
import HeadingFooter from './HeadingFooter'

function Footer() {
  return (
    <footer className='bg-dm-bg px-7 py-5 md:px-10 flex flex-col items-start justify-center gap-2.5'>
      <div className='flex flex-col md:flex-row items-start justify-center gap-3.5 md:gap-4 border-b-[2px] border-b-abu-text pb-2.5 w-full'>
        <div className='flex flex-col gap-1.5 w-full md:w-9/12 lg:4/12 md:order-4'>
          <div className='flex justify-center lg:items-center gap-1.5 w-full'>
            <img src={LogoWinnicode} alt="LogoWinnicode" className='h-[50px]' />
            <img src={LogoKampusMerdeka} alt="LogoKampusMerdeka" className='h-[50px]' />
          </div>
          <p className='text-dm-text text-[10px] font-ws font-normal'>Jurnalistik Program winnicode adalah program pengembangan sumber daya manusia yang ditujukan bagi pemuda pemudi yang berkarir di dunia report.</p>
        </div>
        <div className='flex flex-col gap-1.5 w-full md:w-4/12 lg:4/12 md:order-1'>
          <HeadingFooter label="Tautan" />
          <div className='flex flex-col gap-1'>
            <Link to="https://www.winnicode.com" className="flex gap-1 cursor-pointer">
              <img src={iconWeb} alt="icon web" />
              <p className='text-dm-text text-[10px] font-ws font-normal'>Winnicode</p>
            </Link>
            <Link to="https://www.instagram.com" className="flex gap-1 cursor-pointer">
              <img src={iconInstagram} alt="icon instagram" />
              <p className='text-dm-text text-[10px] font-ws font-normal'>Instagram</p>
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-1.5 w-full md:w-4/12 lg:4/12 md:order-2'>
          <HeadingFooter label="Sitemap" />
          <div className='flex flex-col gap-1'>
            <Link to="/" className="text-dm-text text-[10px] font-ws font-normal">Beranda</Link>
            <Link to="/#" className="text-dm-text text-[10px] font-ws font-normal">Kontak Kami</Link>
            <Link to="/#" className="text-dm-text text-[10px] font-ws font-normal">Privasi & Policy</Link>
            <Link to="/#" className="text-dm-text text-[10px] font-ws font-normal">Tentang</Link>
          </div>
        </div>
        <div className='flex flex-col gap-1.5 w-full md:w-8/12 lg:4/12 md:order-3'>
          <HeadingFooter label="Kontak Kami" />
          <div className='flex flex-col gap-1 w-3/4'>
            <p className='text-dm-text text-[10px] font-ws font-normal'>E-Mail: winnicodegarudaofficial@gmail.com</p>
            <p className='text-dm-text text-[10px] font-ws font-normal'>Alamat(Pusat): TLOGODEPOK, Desa/Kelurahan Tlogodepok, Kec. Mirit, Kab.Kebumen, Provinsi Jawa Tengah Kode Pos: 54395</p>
            <p className='text-dm-text text-[10px] font-ws font-normal'>Call Center: 6285159932501 (24 Jam)</p>
          </div>
        </div>
      </div>
      <p className="text-dm-text text-[8px] font-ws font-normal">Copyright © 2025 by Wijdan intern in PT. WINNICODE GARUDA TEKNOLOGI</p>
    </footer>
  )
}

export default Footer