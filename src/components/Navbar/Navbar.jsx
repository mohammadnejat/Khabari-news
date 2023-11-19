import React, { useState } from 'react'
import './Navbar.css'
import { AiOutlineDown, AiOutlineSearch } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
  const [isNav, setIsNav] = useState(false)
  const [FixedNav, setFixedNav] = useState(false)

  const scrollHandler = () => {
    if (window.scrollY >= 300.00) {
        setFixedNav(true);
    } else if (window.scrollY <= 30)  {
        setFixedNav(false);
    }
};
window.addEventListener('scroll', scrollHandler);
  return (
    <>
          <section
            className={`${FixedNav ? "fixed" : "block"} top-0 z-10 w-full h-fit ${FixedNav ? "hiddenNav" : ""}`}
            style={{ background: '#F6F6F6' }}
          >
            <div className='lg:w-[85%] md:w-[90%] w-[95%] mx-auto relative '>
              <div className='flex items-center justify-between '>
                <div>
                  <h1 className='w-12 text-lg font-extrabold lg:text-4xl'>
                    شورای شاوور
                  </h1>
                </div>
                <div className='w-[60%] h-full lg:block hidden'>
                <div className='flex'>
                  <div className='transition duration-500 cursor-pointer hover:bg-red-600 p-7'>
                    خانه
                  </div>
                  <div
                    onMouseEnter={() => setIsNav(true)}
                    onMouseLeave={() => setIsNav(false)}
                    className={`relative flex items-center  transition duration-500 cursor-pointer hover:bg-red-600 p-7`}
                  >
                    اخبار
                    <AiOutlineDown />
                    <div
                      className={`absolute ${
                        isNav ? 'upDown' : 'hide'
                      } bg-white py-6 p-2  shadow-lg -bottom-24 w-[400px] rounded`}
                    >
                      <div className='flex items-center justify-center w-full gap-6'>
                        <div className='flex flex-col gap-4'>
                          <span className=''>اخبار شهرداری</span>
                          <span>شهرداری تهران</span>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                          <span>اخبار منطقه</span>
                          <span>اخبار ایران</span>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                          <span>سیاست</span>
                          <span>مجلس</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='transition duration-500 cursor-pointer hover:bg-red-600 p-7'>
                    ارتباط با ما
                  </div>
                </div>
              </div>
                <div className='relative'>
                  <input
                    type='search'
                    placeholder='جستجو...'
                    className='h-12 px-4 py-2 text-base duration-500 rounded-md outline-none focus:outline-red-600 outline-1'
                    style={{ background: '#EEEEEE' }}
                  />
                  <button className='absolute p-2 text-white bg-red-600 rounded-md left-2 top-2 bottom-2'>
                    <AiOutlineSearch />
                  </button>
                </div>
                <div className='block lg:hidden'>
                  <FiMenu className='text-3xl' />
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default Navbar
