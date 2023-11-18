import { React, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import './VideoSwiper.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { BTN } from './BTN';
import { TextAnimated } from '../../TextAnimated/TextAnimated';
import { BsPlayCircle } from 'react-icons/bs';


const VideoSwiper = () => {
    const [widthShow, isWidthShow] = useState(false)
    const screeenHandler = () => {
        if (window.screen.width <= 640) {
            isWidthShow(true)
        } else {
            isWidthShow(false)
        }
    }
    window.addEventListener("resize", screeenHandler)

    return (
        <>


            <div >
                <Swiper
                    dir='ltr'
                    slidesPerView={widthShow ? 1 : 2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        < div className='relative text-white duration-500 cursor-pointer hover:text-red-600' >
                            <div className='absolute z-10 w-full h-full bg-gradient-to-t from-zinc-800'></div>
                            <img className='' src="https://envytheme.ir/depan/rtl/assets/img/video-news/video-news-2.jpg " alt="" />
                            <div className='absolute top-0 right-0 z-10 p-10'>
                                <BsPlayCircle className='text-5xl' />
                            </div>
                            <div className='absolute bottom-0 right-0 z-10 pb-10 pr-10' dir='rtl'>
                                <span className=' text-[22px] font-vazirExtraBold'>از این 10 تکنیک مخفی برای بهبود سفر استفاده کنید</span>
                            </div>
                        </div >
                    </SwiperSlide>
                    <SwiperSlide>
                        < div className='relative text-white duration-500 cursor-pointer hover:text-red-600'>
                            <div className='absolute z-10 w-full h-full bg-gradient-to-t from-zinc-800'></div>
                            <img src="https://envytheme.ir/depan/rtl/assets/img/video-news/video-news-3.jpg" alt="" />
                            <div className='absolute top-0 right-0 z-10 p-10'>
                                <BsPlayCircle className='text-5xl' />
                            </div>
                            <div className='absolute bottom-0 right-0 z-10 pb-10 pr-10' dir='rtl'>
                                <span className=' text-[22px] font-vazirExtraBold'>از این 10 تکنیک مخفی برای بهبود سفر استفاده کنید</span>
                            </div>
                        </div >
                    </SwiperSlide>
                    <SwiperSlide>
                        < div className='relative text-white duration-500 cursor-pointer hover:text-red-600'>
                            <div className='absolute z-10 w-full h-full bg-gradient-to-t from-zinc-800'></div>
                            <img src="https://envytheme.ir/depan/rtl/assets/img/video-news/video-news-4.jpg" alt="" />
                            <div className='absolute top-0 right-0 z-10 p-10'>
                                <BsPlayCircle className='text-5xl' />
                            </div>
                            <div className='absolute bottom-0 right-0 z-10 pb-10 pr-10' dir='rtl'>
                                <span className=' text-[22px] font-vazirExtraBold'>از این 10 تکنیک مخفی برای بهبود سفر استفاده کنید</span>
                            </div>
                        </div >
                    </SwiperSlide>
                    <BTN />
                </Swiper>
            </div>
        </>
    )
}

export default VideoSwiper 