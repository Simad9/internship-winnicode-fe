import { useState } from 'react'
import Logo from '../../../assets/icons/icon-logo.svg';
import IconBurger from '../../../assets/icons/navbar/icon-burgerMenu.svg';
import iconDarkMode from '../../../assets/icons/navbar/icon-darkMode.svg';
import iconSearch from '../../../assets/icons/navbar/icon-search.svg';
import { Link } from 'react-router-dom';

function Navbar({}) {
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
        <div className='hidden md:flex items-center py-2 gap-2'>
          <div className='relative w-[180px]'>
            <input type="text" placeholder='Cari Berita...' className='w-full py-2 pl-2 pr-10 bg-lm-primary text-lm-text font-ws font-medium  text-sm rounded-sm' />
            <button className='absolute inset-y-0 end-0 flex items-center pe-2 cursor-pointer'>
              <img src={iconSearch} alt="iconSearch" />
            </button>
          </div>
          <div className='p-2 bg-lm-primary rounded-sm cursor-pointer'>
            <img src={iconDarkMode} alt="iconDarkMode" />
          </div>
          <Link to={'/login'} className='py-2.5 px-5 bg-dm-primary text-dm-text font-ws font-semibold  text-sm  rounded-[10px] cursor-pointer'>Login</Link>
        </div>

        {/* BUGER MENU */}
        <div className='p-1 bg-lm-primary rounded-sm cursor-pointer md:hidden' onClick={handleClick}>
          <img src={IconBurger} alt="Burger Menu" />
        </div>
      </div>

      {/* KETIKA MOBILE */}
      <div className={` w-full flex flex-col ${click ? 'block' : 'hidden'} md:hidden`}>
        <div className='flex items-end justify-between w-full py-2 border-t border-dm-primary gap-2'>
          <div className='relative w-full'>
            <input type="text" placeholder='Cari Berita...' className='w-full py-2 pl-2 pr-10 bg-lm-primary text-lm-text font-ws font-medium  text-sm rounded-sm' />
            <button className='absolute inset-y-0 end-0 flex items-center pe-2 cursor-pointer'>
              <img src={iconSearch} alt="iconSearch" />
            </button>
          </div>
          <div className='p-2 bg-lm-primary rounded-sm cursor-pointer'>
            <img src={iconDarkMode} alt="iconDarkMode" />
          </div>
        </div>
        <Link to={'/login'} className='w-full py-2.5 px-5 bg-dm-primary text-dm-text font-ws font-semibold  text-sm  rounded-[10px] text-center cursor-pointer'>Login</Link>
      </div>

    </nav>
  )
}

export default Navbar