import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai"
import "./style.css"
const ImgInstagram = (props) => {
    return (
        <div className='bg-[#FF661F] relative '>
            <div className='absolute inset-[40%] text-2xl  opacity-0 transition duration-500 ease-out' id='first'><AiOutlineInstagram /></div>
            <div className='overflow-hidden transition duration-500 ease-out cursor-pointer w-fit h-fit hover:opacity-60'>
                <img className={`hover:scale-[1.1] duration-500 ${props.width} ${props.height}`} src={props.img} alt="" />
            </div>
        </div>
    )
}

export default ImgInstagram