import React, { useState } from 'react'
import "./Navbar.css"
import { AiOutlineSearch } from "react-icons/ai"
import { IoIosArrowDown } from "react-icons/io"
import { FiMenu } from "react-icons/fi"
import Fade from 'react-reveal/Fade';
const Navbar = () => {
    const [isShow, setIsShow] = useState(false)
    const [FixedNav, setFixedNav] = useState(false)

    const ScrollHandler = () => {
        if (window.scrollY >= 200) {
            setFixedNav(true)
        } else if (window.scrollY <= 149) {
            setFixedNav(false)
        }
    }

    window.addEventListener("scroll", ScrollHandler)
    return (
        <>
            {FixedNav ? (
                <Fade top>
                    <section className='fixed top-0 z-10 w-full h-fit' style={{ background: "#F6F6F6" }}>
                        <div className='lg:w-[85%] md:w-[90%] w-[95%] mx-auto relative '>
                            <div className='flex items-center justify-between '>
                                <div >
                                    <h1 className='w-12 text-lg font-extrabold lg:text-4xl'>شورای شاوور</h1>
                                </div>
                                <div className='w-[60%] h-full lg:block hidden'>
                                    <ul className='flex justify-start h-full'>
                                        <li className='flex items-center justify-center w-24 h-full py-5 text-lg font-extrabold text-center duration-500 cursor-pointer hover:text-white hover:bg-red-600'>خانه </li>
                                        <li className={`flex items-center justify-center w-24 h-full py-5 text-center duration-500 cursor-pointer hover:text-white hover:bg-red-600  text-lg font-extrabold`} id='link' onMouseEnter={() => setIsShow(true)} onMouseLeave={() => setIsShow(false)}> اخبار <IoIosArrowDown className='mt-1' />
                                            <li className={` absolute top-[100%] right-0 duration-500 w-full bg-white text-black flex shadow-md ease-in-out  hover:animate-fade-down  ${isShow ? "" : "hidden "}`} id='link2'>
                                                <ul className='flex justify-center w-full h-40 gap-12 '>
                                                    <ul className={`flex flex-col gap-6 text-black  hover:text-red-600   text-base `}>اخرین اخبار
                                                        <li className='text-base text-black duration-500 hover:text-red-600'>منطقه</li>
                                                        <li className='text-base text-black duration-500 hover:text-red-600'> شهر شاوور </li>
                                                    </ul>
                                                    <ul className='flex flex-col gap-6 text-base duration-500 hover:text-red-600'>شهرداری
                                                        <li className='text-base text-black duration-500 hover:text-red-600'>اخرین اخبار شهرداری</li>
                                                        <li className='text-base text-black duration-500 hover:text-red-600 '>رضایت مردم</li>
                                                    </ul>
                                                    <ul className='flex flex-col gap-6 text-base duration-500 hover:text-red-600'>تغییرات منطقه
                                                        <li className='text-base text-black duration-500 hover:text-red-600'>نظرات</li>
                                                        <li className='text-base text-black duration-500 hover:text-red-600 '>پیام</li>
                                                    </ul>
                                                </ul>
                                            </li>
                                        </li>
                                        <li className='flex items-center justify-center w-24 h-full py-5 text-xl font-extrabold text-center duration-500 cursor-pointer hover:text-white hover:bg-red-600 '>تماس با ما</li>
                                    </ul>
                                </div>
                                <div className='relative'>
                                    <input type="search" placeholder="جستجو..." className='h-12 px-4 py-2 text-base duration-500 rounded-md outline-none focus:outline-red-600 outline-1' style={{ background: "#EEEEEE" }} />
                                    <button className='absolute p-2 text-white bg-red-600 rounded-md left-2 top-2 bottom-2'><AiOutlineSearch /></button>
                                </div>
                                <div className='block lg:hidden'>
                                    <FiMenu className='text-3xl' />
                                </div>
                            </div>
                        </div>
                    </section>
                </Fade>
            ) :
                (

                    <section className='w-full h-fit' style={{ background: "#F6F6F6" }}>
                        <div className='lg:w-[85%] md:w-[90%] w-[95%] mx-auto relative'>
                            <div className='flex items-center justify-between '>
                                <div >
                                    <h1 className='w-12 text-lg font-extrabold lg:text-4xl'>شورای شاوور</h1>
                                </div>
                                <div className='w-[60%] h-full lg:block hidden'>
                                    <ul className='flex justify-start h-full'>
                                        <li className='flex items-center justify-center w-24 h-full py-5 text-lg font-extrabold text-center duration-500 cursor-pointer hover:text-white hover:bg-red-600'>خانه </li>
                                        <li className={`flex items-center justify-center w-24 h-full py-5 text-center duration-500 cursor-pointer hover:text-white hover:bg-red-600  text-lg font-extrabold`} id='link' onMouseEnter={() => setIsShow(true)} onMouseLeave={() => setIsShow(false)}> اخبار <IoIosArrowDown className='mt-1' />
                                            <li className={` absolute top-[100%] right-0 duration-500 w-full bg-white text-black flex shadow-md ease-in-out  hover:animate-fade-down  ${isShow ? "" : "hidden "}`} id='link2'>
                                                <ul className='flex justify-center w-full h-40 gap-12 '>
                                                    <ul className={`flex flex-col gap-6 text-black  hover:text-red-600   text-base `}>اخرین اخبار
                                                        <li className='text-base text-black duration-500 hover:text-red-600'>منطقه</li>
                                                        <li className='text-base text-black duration-500 hover:text-red-600'> شهر شاوور </li>
                                                    </ul>
                                                    <ul className='flex flex-col gap-6 text-base duration-500 hover:text-red-600'>شهرداری
                                                        <li className='text-base text-black duration-500 hover:text-red-600'>اخرین اخبار شهرداری</li>
                                                        <li className='text-base text-black duration-500 hover:text-red-600 '>رضایت مردم</li>
                                                    </ul>
                                                    <ul className='flex flex-col gap-6 text-base duration-500 hover:text-red-600'>تغییرات منطقه
                                                        <li className='text-base text-black duration-500 hover:text-red-600'>نظرات</li>
                                                        <li className='text-base text-black duration-500 hover:text-red-600 '>پیام</li>
                                                    </ul>
                                                </ul>
                                            </li>
                                        </li>
                                        <li className='flex items-center justify-center w-24 h-full py-5 text-xl font-extrabold text-center duration-500 cursor-pointer hover:text-white hover:bg-red-600 '>تماس با ما</li>
                                    </ul>
                                </div>
                                <div className='relative'>
                                    <input type="search" placeholder="جستجو..." className='h-12 px-4 py-2 text-base duration-500 rounded-md outline-none focus:outline-red-600 outline-1' style={{ background: "#EEEEEE" }} />
                                    <button className='absolute p-2 text-white bg-red-600 rounded-md left-2 top-2 bottom-2'><AiOutlineSearch /></button>
                                </div>
                                <div className='block lg:hidden'>
                                    <FiMenu className='text-3xl' />
                                </div>
                            </div>
                        </div>
                    </section>

                )}

        </>
    )
}

export default Navbar