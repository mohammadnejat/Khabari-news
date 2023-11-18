import React from 'react';
import { useSwiper } from 'swiper/react';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
export const BTN = () => {
  const swiper = useSwiper();

  return (

      <div className='z-50 flex gap-2 mt-4'>
        <button className='p-2 duration-500 border border-black hover:bg-red-600' onClick={() => swiper.slidePrev()}><MdOutlineKeyboardArrowLeft /></button>
        <button className='p-2 duration-500 border border-black hover:bg-red-600' onClick={() => swiper.slideNext()}><MdOutlineKeyboardArrowRight /></button>
      </div>
  );
};
