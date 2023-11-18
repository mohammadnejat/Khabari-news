import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import "./style.css"

// import required modules
import { Autoplay, Grid, Pagination } from 'swiper/modules';
import ImgComp from '../../ImgComponent/ImgComp';
import { TextAnimated } from '../../TextAnimated/TextAnimated';
import { BTN } from './BTN';

const VideoSwiper3 = () => {

    return (
        <>

            <Swiper
                dir='ltr'
                slidesPerView={1}
                grid={{
                    fill: "row",
                    rows: 4,
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                modules={[Grid, Pagination, Autoplay]}
                className="mySwiper"
            >
                <BTN />
                <SwiperSlide>
                    <div className='flex '>
                        <div className='w-3/5'>
                            <ImgComp
                                width="w-[122px]"
                                height="h-[149px]"
                                img="https://envytheme.ir/depan/rtl/assets/img/sports-news/sports-news-1.jpg" />
                        </div>
                        <div className='w-full'>
                            <TextAnimated
                                text="اخبار منتشر شده آنلاین ویدیوها را ارائه می دهند."
                                time="21 دی 1401" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex '>
                        <div className='w-3/5'>
                            <ImgComp
                                width="w-[122px]"
                                height="h-[149px]"
                                img="https://envytheme.ir/depan/rtl/assets/img/sports-news/sports-news-2.jpg" />
                        </div>
                        <div className='w-full'>
                            <TextAnimated
                                text="اخبار منتشر شده آنلاین ویدیوها را ارائه می دهند."
                                time="21 دی 1401" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex '>
                        <div className='w-3/5'>
                            <ImgComp
                                width="w-[122px]"
                                height="h-[149px]"
                                img="https://envytheme.ir/depan/rtl/assets/img/sports-news/sports-news-3.jpg" />
                        </div>
                        <div className='w-full'>
                            <TextAnimated
                                text="اخبار منتشر شده آنلاین ویدیوها را ارائه می دهند."
                                time="21 دی 1401" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex '>
                        <div className='w-3/5'>
                            <ImgComp
                                width="w-[122px]"
                                height="h-[149px]"
                                img="https://envytheme.ir/depan/rtl/assets/img/sports-news/sports-news-1.jpg" />
                        </div>
                        <div className='w-full'>
                            <TextAnimated
                                text="اخبار منتشر شده آنلاین ویدیوها را ارائه می دهند."
                                time="21 دی 1401" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex '>
                        <div className='w-3/5'>
                            <ImgComp
                                width="w-[122px]"
                                height="h-[149px]"
                                img="https://envytheme.ir/depan/rtl/assets/img/sports-news/sports-news-2.jpg" />
                        </div>
                        <div className='w-full'>
                            <TextAnimated
                                text="اخبار منتشر شده آنلاین ویدیوها را ارائه می دهند."
                                time="21 دی 1401" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex '>
                        <div className='w-3/5'>
                            <ImgComp
                                width="w-[122px]"
                                height="h-[149px]"
                                img="https://envytheme.ir/depan/rtl/assets/img/sports-news/sports-news-3.jpg" />
                        </div>
                        <div className='w-full'>
                            <TextAnimated
                                text="اخبار منتشر شده آنلاین ویدیوها را ارائه می دهند."
                                time="21 دی 1401" />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default VideoSwiper3 