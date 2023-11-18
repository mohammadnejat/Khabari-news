import React from 'react'
import { TextAnimated } from '../TextAnimated/TextAnimated'

const NewsCards = (props) => {
    return (
        <div className='w-full mt-'>
            <div className='pb-4 overflow-hidden cursor-pointer'>
                <img className='w-full hover:scale-[1.1] duration-500' src={props.img} alt="" />
            </div>
            <span className='py-6 font-bold text-red-600 font-vazir'>لیگ برتر</span>
            <TextAnimated
                text="سخنرانی ویژه نخست وزیر در مورد وضعیت فعلی و هشدار ویروس کرونا و بیماری های تنفسی برای سالمندان"
                time=" / 21 دی 1401" />
        </div>
    )
}

export default NewsCards