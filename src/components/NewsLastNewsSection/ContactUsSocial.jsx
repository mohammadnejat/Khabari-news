import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi'
const ContactUsSocial = (props) => {
    return (
        <div className='w-full m-2 text-white duration-500 cursor-pointer hover:text-black'>
            <div className={`p-[10px] flex ${props.bgColor}`}>
                {props.icon}
                <div className='mr-3'>
                    <span className='font-vzir'>{props.text}</span>
                </div>
            </div>
        </div>
    )
}

export default ContactUsSocial