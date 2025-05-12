import React from 'react'
import { useState } from 'react';
import Logo from '../../../assets/icons/icon-logo.svg';
import IconBurger from '../../../assets/icons/navbar/icon-burgerMenu.svg';
import { Link } from 'react-router-dom';

function Navbar({ active }) {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
  }

  return (
    <nav className='flex flex-col gap-2.5 items-center justify-between bg-abu p-2.5 py-2 shadow-lg'>
      <div className='flex items-center justify-between w-full'>
        {/* LOGO */}
        <img src={Logo} alt="Logo WinniCode" className='w-[152px] md:w-[209px] lg:w-[228px]' />

        {/* KETIKA DESKTOP */}
        <div className='hidden md:flex items-center py-2 gap-2 w-full justify-between'>

          <div className='flex flex-row items-start w-full py-2 gap-1'>
            <div className='p-2 flex items-center justify-center '>
              <Link to={'/admin/'} className={`text-lm-text font-ws text-sm lg:text-[16px] ${active == "dashboard" ? 'font-semibold' : 'font-normal'}`}>Dashboard</Link>
            </div>
            <div className='p-2 flex items-center justify-center '>
              <Link to={'/admin/pending-news'} className={`text-lm-text font-ws text-sm lg:text-[16px] ${active == "pending" ? 'font-semibold' : 'font-normal'}`}>Pending</Link>
            </div>
            <div className='p-2 flex items-center justify-center '>
              <Link to={'/admin/control-account'} className={`text-lm-text font-ws text-sm lg:text-[16px] ${active == "control" ? 'font-semibold' : 'font-normal'}`}>Kontrol</Link>
            </div>
            <div className='p-2 flex items-center justify-center '>
              <Link to={'/admin/task'} className={`text-lm-text font-ws text-sm lg:text-[16px] ${active == "task" ? 'font-semibold' : 'font-normal'}`}>Tugas</Link>
            </div>
          </div>

          <Link to={'/login'} className='py-2.5 px-5 bg-dm-primary text-dm-text font-ws font-semibold  text-sm  rounded-[10px] cursor-pointer'>Logout</Link>
        </div>

        {/* BUGER MENU */}
        <div className='p-1 bg-lm-primary rounded-sm cursor-pointer md:hidden' onClick={handleClick}>
          <img src={IconBurger} alt="Burger Menu" />
        </div>
      </div>

      {/* KETIKA MOBILE */}
      <div className={` w-full flex flex-col ${click ? 'block' : 'hidden'} md:hidden`}>
        <div className='flex flex-col items-center w-full py-2 border-t border-dm-primary gap-2'>
          <div className='w-full p-2 flex items-center justify-center bg-white rounded-md'>
            <Link to={'/admin/'} className={`text-lm-text font-ws text-sm lg:text-[16px] ${active == "dashboard" ? 'font-semibold' : 'font-normal'}`}>Dashboard</Link>
          </div>
          <div className='w-full p-2 flex items-center justify-center bg-white rounded-md'>
            <Link to={'/admin/pending-news'} className={`text-lm-text font-ws text-sm lg:text-[16px] ${active == "pending" ? 'font-semibold' : 'font-normal'}`}>Pending</Link>
          </div>
          <div className='w-full p-2 flex items-center justify-center bg-white rounded-md'>
            <Link to={'/admin/control-account'} className={`text-lm-text font-ws text-sm lg:text-[16px] ${active == "control" ? 'font-semibold' : 'font-normal'}`}>Kontrol</Link>
          </div>
          <div className='w-full p-2 flex items-center justify-center bg-white rounded-md'>
            <Link to={'/admin/task'} className={`text-lm-text font-ws text-sm lg:text-[16px] ${active == "task" ? 'font-semibold' : 'font-normal'}`}>Tugas</Link>
          </div>
        </div>
        <Link to={'/login'} className='w-full py-2.5 px-5 bg-dm-primary text-dm-text font-ws font-semibold  text-sm  rounded-[10px] text-center cursor-pointer'>Logout</Link>
      </div>

    </nav>
  )
}

export default Navbar