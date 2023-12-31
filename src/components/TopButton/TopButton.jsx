import React, { useState } from 'react'
import { AiOutlineArrowUp } from "react-icons/ai"
import "./TopButton.css"
const TopButton = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };
    const ScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.addEventListener('scroll', handleScroll);
    return (
        <>
                    <div className={`fixed p-2 transition duration-500 bg-black rounded-full  cursor-pointer hover:bg-red-700 bottom-10 left-6  scroll-to-top ${showButton ? 'show' : 'hidee'}`} onClick={ScrollTop}>
                        <div className=''>
                            <AiOutlineArrowUp className='text-3xl text-white' />
                        </div>
                    </div>
        </>
    )
}

export default TopButton