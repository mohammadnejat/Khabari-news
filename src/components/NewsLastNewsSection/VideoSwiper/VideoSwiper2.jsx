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
import ImgComp from '../../ImgComponent/ImgComp';


const VideoSwiper2 = () => {
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
            <div className='text-center'>
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
                        < div className='text-center duration-500 cursor-pointer hover:text-red-600' >
                            <ImgComp img="https://envytheme.ir/depan/rtl/assets/img/business-news/business-news-4.jpg " />
                            <div dir='rtl'>
                                <div className='pt-3 '>
                                    <span className='text-sm font-bold text-red-600'>سیاست</span>
                                </div>
                                <TextAnimated
                                    font="text-lg"
                                    text="سخنرانی ویژه نخست وزیر در مورد وضعیت فعلی و هشدار ویروس کرونا و بیماری های تنفسی برای سالمندان"
                                    time=" 21 دی 1401"
                                />
                            </div>
                        </div >
                    </SwiperSlide>
                    <SwiperSlide>
                        < div className='duration-500 cursor-pointer hover:text-red-600'>
                            <ImgComp img="https://envytheme.ir/depan/rtl/assets/img/video-news/video-news-3.jpg" width="w-[411px]" height="h-[274px]" />
                            <div dir='rtl'>
                                <div className='pt-3 '>
                                    <span className='text-sm font-bold text-red-600'>سیاست</span>
                                </div>
                                <TextAnimated
                                    font="text-lg"
                                    text="سخنرانی ویژه نخست وزیر در مورد وضعیت فعلی و هشدار ویروس کرونا و بیماری های تنفسی برای سالمندان"
                                    time=" 21 دی 1401"
                                />
                            </div>
                        </div >
                    </SwiperSlide>
                    <SwiperSlide>
                        < div className='duration-500 cursor-pointer '>
                            <ImgComp img="https://envytheme.ir/depan/rtl/assets/img/business-news/business-news-3.jpg" />
                            <div dir='rtl'>
                                <div className='pt-3 '>
                                    <span className='text-sm font-bold text-red-600'>سیاست</span>
                                </div>
                                <TextAnimated
                                    font="text-lg"
                                    text="سخنرانی ویژه نخست وزیر در مورد وضعیت فعلی و هشدار ویروس کرونا و بیماری های تنفسی برای سالمندان"
                                    time=" 21 دی 1401"
                                />
                            </div>
                        </div >
                    </SwiperSlide>
                    <BTN />
                </Swiper>
            </div>
        </>
    )
}

export default VideoSwiper2 