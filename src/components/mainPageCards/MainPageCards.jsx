import React from 'react'
import './MainPageCards.css'
const MainPageCards = (props) => {
    return (
        <div className="p-2 border" id='mains'>
            <div className="flex flex-col gap-4">
                <div className="cursor-pointer">
                    <img src={props.img} alt="#" />
                </div>
                <div>
                    <span className="px-2 pb-1 text-sm font-bold text-white bg-black ">{props.project}</span>
                </div>
                <div className="pb-2 duration-500 cursor-pointer hover:text-red-600 border-animation" id="hover">
                    <b className="text-lg ">{props.text}</b>
                </div>
                <div>
                    <span className="text-xs font-bold text-gray-400">{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default MainPageCards