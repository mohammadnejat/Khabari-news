import React from 'react'

export const TextAnimated = (props) => {
    return (
        <div>
            <div className="py-2 duration-500 cursor-pointer hover:text-red-600 border-animation" id="hover">
                <p className={`font-vazir text-[20px] ${props.font ? props.font : "font-bold"}`}>{props.text}</p>
            </div>
            <span className="text-xs font-bold text-gray-400">{props.time}</span>
        </div>
    )
}
