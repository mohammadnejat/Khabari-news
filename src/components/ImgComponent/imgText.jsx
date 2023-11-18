import React from 'react'

function imgText() {
    return (
        < div className='relative text-white duration-500 cursor-pointer hover:text-red-600' >
            <div className='absolute z-10 w-full h-full bg-gradient-to-t from-zinc-800'></div>
            <img className='' src="https://envytheme.ir/depan/rtl/assets/img/business-news/business-news-3.jpg " alt="" />
            <div className='absolute top-0 right-0 z-10 p-10'>
            </div>
            <div className='absolute bottom-0 right-0 z-10 pb-10 pr-10' dir='rtl'>
                <span className=' text-[22px] font-vazirExtraBold'>از این 10 تکنیک مخفی برای بهبود سفر استفاده کنید</span>
            </div>
        </div >
    )
}

export default imgText