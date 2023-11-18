import React, { useEffect, useRef, useState } from 'react'
import TopBarIcons from './TopBarIcons'
import { BiLogoFacebook } from "react-icons/bi"
import { AiOutlineInstagram } from "react-icons/ai"
import { BiLogoLinkedin } from "react-icons/bi"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"
import { FiUser } from "react-icons/fi"
import { IoIosArrowDown } from "react-icons/io"



const TopBar = () => {

    const [rotate, setRotate] = useState("rotate-0")
    const [isShow, setIsShow] = useState("hidden")
    const [language, setLanguage] = useState("فارسی")
    const selectRef = useRef(null)

    const clickHandler = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
            setRotate("rotate-0")
            setIsShow("hidden")
        }
    }
    const openSelect = (e) => {
        isShow === "hidden" ? setIsShow("") : setIsShow("hidden")
        rotate === "rotate-0" ? setRotate("rotate-180") : setRotate("rotate-0")
    }
    useEffect(() => {
        window.addEventListener('click', clickHandler);
        return () => {
            window.removeEventListener('click', clickHandler);
        };
    }, [])


    return (
        <>
            <div className='w-full text-white bg-black h-fit '>
                <div className='flex flex-col items-center p-3 md:justify-between md:flex-row md:items-center md:mx-20'>
                    <div className='flex gap-4 h-fit'>
                        <TopBarIcons icon={<BiLogoFacebook />} />
                        <TopBarIcons icon={<AiOutlineInstagram />} />
                        <TopBarIcons icon={<BiLogoLinkedin />} />
                        <TopBarIcons icon={<AiOutlineTwitter />} />
                        <TopBarIcons icon={<AiFillYoutube />} />
                    </div>
                    
                    <div className='flex items-center justify-between gap-4'>
                        <div className='flex items-center justify-between text-white'>
                            <ul name="language" onClick={openSelect}  ref={selectRef} className="relative z-50 bg-black border-none appearance-none cursor-pointer">{language}
                                <li className={`${isShow} absolute bg-black w-36 mt-3`}>
                                    <ul className='flex-col items-center justify-center '>
                                        <li className='h-8 pr-3 transition-all duration-500 hover:bg-red-600' onClick={() => setLanguage("فارسی")}>فارسی</li>
                                        <li className='h-8 pr-3 transition-all duration-500 hover:bg-red-600' onClick={() => setLanguage("عربی")}>عربی</li>
                                        <li className='h-8 pr-3 transition-all duration-500 hover:bg-red-600' onClick={() => setLanguage("انگلیسی")}>انگلیسی</li>
                                    </ul>
                                </li>
                            </ul>
                            <span><IoIosArrowDown className={`text-red-600 transition-all mt-2 ${rotate}`} /></span>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='pt-1'>
                                <FiUser className='text-red-600 text-md' />
                            </div>
                            <span className='text-sm font-bold duration-500 cursor-pointer hover:text-red-600 '>ورود کاربران</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar