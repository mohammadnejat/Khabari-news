import { React } from 'react';
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

    return (
        <>


            <div >
                <Swiper
                    dir='ltr'
                    slidesPerView={2}
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
                            <img className='' src="https://envytheme.ir/depan/rtl/assets/img/health-news/health-news-3.jpg " alt="" />



                            <div className='absolute bottom-0 right-0 z-10 pb-10 pl-10 pr-10' dir='rtl'>
                                <p className=''>فیتنس</p>
                                <TextAnimated
                                    text="از این 10 تکنیک مخفی برای بهبود سفر استفاده کنید"
                                    time="اسمیت 1402/2/1" />
                            </div>
                        </div >
                    </SwiperSlide>
                    <SwiperSlide>
                        < div className='relative text-white duration-500 cursor-pointer hover:text-red-600'>
                            <div className='absolute z-10 w-full h-full bg-gradient-to-t from-zinc-800'></div>
                            <img src="https://envytheme.ir/depan/rtl/assets/img/health-news/health-news-4.jpg" alt="" />

                            <div className='absolute bottom-0 right-0 z-10 pb-10 pl-10 pr-10' dir='rtl'>
                                <p className=''>سلامتی</p>
                                <TextAnimated
                                    text="از این 10 تکنیک مخفی برای بهبود سفر استفاده کنید"
                                    time="اسمیت 1402/2/1" />
                            </div>
                        </div >
                    </SwiperSlide>
                    <SwiperSlide>
                        < div className='relative text-white duration-500 cursor-pointer hover:text-red-600'>
                            <div className='absolute z-10 w-full h-full bg-gradient-to-t from-zinc-800'></div>
                            <img src="https://envytheme.ir/depan/rtl/assets/img/health-news/health-news-2.jpg" alt="" />



                            <div className='absolute bottom-0 right-0 z-10 pb-10 pl-10 pr-10' dir='rtl'>
                                <p className=''>سلامتی</p>
                                <TextAnimated
                                    text="از این 10 تکنیک مخفی برای بهبود سفر استفاده کنید"
                                    time="اسمیت 1402/2/1" />
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