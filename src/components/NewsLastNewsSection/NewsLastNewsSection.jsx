import React from 'react'
import NewsCards from './NewsCards'
import ContactUsSocial from './ContactUsSocial'
import { BiLogoFacebook } from 'react-icons/bi'
import { ImLinkedin2 } from 'react-icons/im'
import { LiaInstagram, LiaLinkedin } from 'react-icons/lia'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { BiWifi } from 'react-icons/bi'
import Title from './Title'
import { TextAnimated } from '../TextAnimated/TextAnimated'
import { TextAnimatedRed } from '../TextAnimated/TextAnimatedRed'
import ImgComp from '../ImgComponent/ImgComp'
import Imgtext from '../ImgComponent/imgText'
import VideoSwiper from './VideoSwiper/VideoSwiper'
import VideoSwiper2 from './VideoSwiper/VideoSwiper2'
import VideoSwiper3 from './VideoSwiper/VideoSwiper3'
import VideoSwiper4 from './VideoSwiper/VideoSwiper4'
import img2 from "./../../../public/2.jpg"
import img3 from "./../../../public/3.jpg"
import img4 from "./../../../public/4.jpg"
import img5 from "./../../../public/5.webp"
import img6 from "./../../../public/6.webp"
import img7 from "./../../../public/7.webp"
import Text from '../TextAnimated/Text'
import ImgInstagram from '../ImgComponent/ImgInstagram'
import BoxIcons from '../BoxIcons/BoxIcons'
import { BsYoutube } from 'react-icons/bs'
const NewsLastNewsSection = () => {
    return (
        <div className='w-full mt-[50px]'>
            <div className=' lg:w-[85%] w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 md:gap-6 mb-12'>

                {/* Right Side */}
                <div className='col-span-8 '>
                    <div>
                        <Title title="جدیدترین خبرها" />
                        <div className='grid grid-cols-1 gap-4 pb-6 lg:grid-cols-8'>
                            <div className='col-span-4'><NewsCards img={img2} /></div>
                            <div className='col-span-4'><NewsCards img={img3} /></div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-8 '>
                        <div className='col-span-4'>
                            <div className='flex w-full h-40 my-4 border '>
                                <div className='w-3/6'>
                                    <ImgComp
                                        height="h-[159px]"
                                        img={"https://envytheme.ir/depan/rtl/assets/img/most-popular/most-popular-5.jpg"} />
                                </div>
                                <div className='flex flex-col px-3 py-8'>
                                    <span className='text-red-600'>تکنلوژی</span>
                                    <TextAnimated text="اخبار منتشر شده آنلاین ویدیوهای بیشتری را ارائه می دهند." />
                                </div>
                            </div>
                            <div className='flex w-full h-40 my-4 border'>
                                <div className='w-3/6'>
                                    <ImgComp
                                        height="h-[159px]"
                                        width=""

                                        img={"https://envytheme.ir/depan/rtl/assets/img/most-popular/most-popular-6.jpg"} />
                                </div>
                                <div className='flex flex-col px-3 py-8 '>
                                    <span className='text-red-600'>فرهنگ</span>
                                    <TextAnimated text="اخبار منتشر شده آنلاین ویدیوهای بیشتری را ارائه می دهند." />
                                </div>
                            </div>

                        </div>

                        <div className='col-span-4'>
                            <div className='flex w-full h-40 my-4 border'>
                                <div className='w-3/6'>
                                    <ImgComp
                                        height="h-[159px]"
                                        width=""
                                        img={"https://envytheme.ir/depan/rtl/assets/img/most-popular/most-popular-3.jpg"} />
                                </div>
                                <div className='flex flex-col px-3 py-8 '>
                                    <span className='text-red-600'>سیاست</span>
                                    <TextAnimated text="اخبار منتشر شده آنلاین ویدیوهای بیشتری را ارائه می دهند." />
                                </div>
                            </div>
                            <div className='flex w-full h-40 my-4 border'>
                                <div className='w-3/6'>
                                    <ImgComp
                                        height="h-[159px]"
                                        width=""
                                        img={"https://envytheme.ir/depan/rtl/assets/img/most-popular/most-popular-4.jpg"} />
                                </div>
                                <div className='flex flex-col px-3 py-8'>
                                    <span className='text-red-600'>کسب و کار</span>
                                    <TextAnimated text="اخبار منتشر شده آنلاین ویدیوهای بیشتری را ارائه می دهند." />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Title title="ویدئوی برتر" />
                        <VideoSwiper />
                    </div>
                    <div>
                        <Title title="سیاست" />
                        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                            <div className='grid grid-cols-1 gap-y-5'>
                                <div className='flex '>
                                    <div className='w-3/5'>
                                        <ImgComp
                                            width="w-[122px]"
                                            height="h-[149px]"
                                            img={img4} />
                                    </div>
                                    <div className='w-full'>
                                        <TextAnimated
                                            text="اخبار منتشر شده آنلاین ویدیوها را ارائه می دهند."
                                            time="21 دی 1401" />
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='w-3/5'>
                                        <ImgComp
                                            width="w-[122px]"
                                            height="h-[149px]"
                                            img={img5} />
                                    </div>
                                    <div>
                                        <TextAnimated
                                            text="اخبار منتشر شده آنلاین ویدیوها را ارائه می دهند."
                                            time="21 دی 1401" />
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='w-3/5'>
                                        <ImgComp
                                            width="w-[122px]"
                                            height="h-[149px]"
                                            img={img6} />
                                    </div>
                                    <div>
                                        <TextAnimated
                                            text="اخبار منتشر شده آنلاین ویدیوها را ارائه می دهند."
                                            time="21 دی 1401" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <ImgComp img={img7} />
                                <div className='pt-3 '>
                                    <span className='text-sm font-bold text-red-600'>سیاست</span>
                                </div>
                                <TextAnimated
                                    text="سخنرانی ویژه نخست وزیر در مورد وضعیت فعلی و هشدار ویروس کرونا"
                                    time=" 21 دی 1401"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <Title title="کسب و کار" />
                        <VideoSwiper2 />
                    </div>
                    <div>
                        <Title title="سیاست" />
                        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                            <div className='grid grid-cols-1 gap-y-5'>
                                <div className='flex '>
                                    <div className='w-3/5'>
                                        <ImgComp
                                            width="w-[122px]"
                                            height="h-[149px]"
                                            img="https://envytheme.ir/depan/rtl/assets/img/culture-news/culture-news-2.jpg" />
                                    </div>
                                    <div className='w-full'>
                                        <TextAnimated
                                            text="اخبار منتشر شده آنلاین ویدیوها را ارائه می دهند."
                                            time="21 دی 1401" />
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='w-3/5'>
                                        <ImgComp
                                            width="w-[122px]"
                                            height="h-[149px]"
                                            img="https://envytheme.ir/depan/rtl/assets/img/culture-news/culture-news-3.jpg" />
                                    </div>
                                    <div>
                                        <TextAnimated
                                            text="اخبار منتشر شده آنلاین ویدیوها را ارائه می دهند."
                                            time="21 دی 1401" />
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='w-3/5'>
                                        <ImgComp
                                            width="w-[122px]"
                                            height="h-[149px]"
                                            img="https://envytheme.ir/depan/rtl/assets/img/culture-news/culture-news-4.jpg" />
                                    </div>
                                    <div>
                                        <TextAnimated
                                            text="اخبار منتشر شده آنلاین ویدیوها را ارائه می دهند."
                                            time="21 دی 1401" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <ImgComp img="https://envytheme.ir/depan/rtl/assets/img/culture-news/culture-news-1.jpg" />
                                <div className='pt-3 '>
                                    <span className='text-sm font-bold text-red-600'>سیاست</span>
                                </div>
                                <TextAnimated
                                    text="سخنرانی ویژه نخست وزیر در مورد وضعیت فعلی و هشدار ویروس کرونا"
                                    time=" 21 دی 1401"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-4 mt-10 md:grid-cols-2'>
                        <div>
                            <Title title="ورزش" />
                            <VideoSwiper3 />
                        </div>
                        <div>
                            <Title title="تکنولوژی" />
                            <VideoSwiper3 />
                        </div>

                    </div>

                    <div className=''>
                        <Title title="سلامتی" />
                        <VideoSwiper4 />
                    </div>
                </div>


                {/* Left Side */}
                <div className='col-span-4 '>
                    <div className='mx-auto'>
                        <Title title="ارتباط با ما" />
                        <div className='grid col-span-1 pb-6 md:gap-6 md:grid-cols-4'>
                            <div className='col-span-2'>
                                <ContactUsSocial bgColor="bg-[#39569E]" text="120345 طرفدار" icon={<BiLogoFacebook />} />
                                <ContactUsSocial bgColor="bg-[#0185AE]" text=" 7519 اتصال " icon={<ImLinkedin2 />} />
                                <ContactUsSocial bgColor="bg-[#C8359D]" text=" 10129 دنبال کننده " icon={<LiaInstagram />} />
                            </div>
                            <div className='col-span-2'>
                                <ContactUsSocial bgColor="bg-[#52AAF4]" text=" 25,321 دنبال کننده " icon={<AiOutlineTwitter />} />
                                <ContactUsSocial bgColor="bg-[#DC472E]" text=" 101545 مشترک " icon={<AiFillYoutube />} />
                                <ContactUsSocial bgColor="bg-[#F18527]" text=" 952 مشترک " icon={<BiWifi />} />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <Title title="گزارش های ویژه" />
                        <div className=''>
                            <img className='mx-auto' src="https://envytheme.ir/depan/rtl/assets/img/featured-reports/featured-reports-2.jpg" alt="" />
                            <TextAnimated text="مقدمات انتخابات به شیوه ای جدید در حال انجام است" time="21 دی 1401" />
                        </div>
                    </div>
                    <div>
                        <Title title="اخرین خبرها" />
                        <div className='flex flex-col gap-6 md:gap-2'>
                            <div className='flex items-center justify-center '>
                                <img className='w-20 h-20' src="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-1.jpg" alt="" />
                                <div className='px-2'>
                                    <TextAnimated text="سخنرانی ویژه نخست وزیر در مورد هشدار ویروس کرونا" time="21 دی 1401" />
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <img className='w-20 h-20' src="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-2.jpg" alt="" />
                                <div className='px-2'>
                                    <TextAnimated text="سخنرانی ویژه نخست وزیر در مورد هشدار ویروس کرونا" time="21 دی 1401" />
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <img className='w-20 h-20' src="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-3.jpg" alt="" />
                                <div className='px-2'>
                                    <TextAnimated text="سخنرانی ویژه نخست وزیر در مورد هشدار ویروس کرونا" time="21 دی 1401" />
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <img className='w-20 h-20' src="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-4.jpg" alt="" />
                                <div className='px-2'>
                                    <TextAnimated text="سخنرانی ویژه نخست وزیر در مورد هشدار ویروس کرونا" time="21 دی 1401" />
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <img className='w-20 h-20' src="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-5.jpg" alt="" />
                                <div className='px-2'>
                                    <TextAnimated text="سخنرانی ویژه نخست وزیر در مورد هشدار ویروس کرونا" time="21 دی 1401" />
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <img className='w-20 h-20' src="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-6.jpg" alt="" />
                                <div className='px-2'>
                                    <TextAnimated text="سخنرانی ویژه نخست وزیر در مورد هشدار ویروس کرونا" time="21 دی 1401" />
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <img className='w-20 h-20' src="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-7.jpg" alt="" />
                                <div className='px-2'>
                                    <TextAnimated text="سخنرانی ویژه نخست وزیر در مورد هشدار ویروس کرونا" time="21 دی 1401" />
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <img className='w-20 h-20' src="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-8.jpg" alt="" />
                                <div className='px-2'>
                                    <TextAnimated text="سخنرانی ویژه نخست وزیر در مورد هشدار ویروس کرونا" time="21 دی 1401" />
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <img className='w-20 h-20' src="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-9.jpg" alt="" />
                                <div className='px-2'>
                                    <TextAnimated text="سخنرانی ویژه نخست وزیر در مورد هشدار ویروس کرونا" time="21 دی 1401" />
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <img className='w-20 h-20' src="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-10.jpg" alt="" />
                                <div className='px-2'>
                                    <TextAnimated text="سخنرانی ویژه نخست وزیر در مورد هشدار ویروس کرونا" time="21 دی 1401" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className='bg-[#F6F6F6] p-[25px] mt-5'>
                            <div className='mb-6 text-center'>
                                <h3 className='text-2xl font-bold mb-[10px]'>عضویت در خبرنامه ما در خبرنامه ما مشترک شوید</h3>
                                <p className='text-sm font-bold'>برای دریافت به روز رسانی های جدید در خبرنامه ما مشترک شوید!</p>
                            </div>
                            <div>
                                <form action="">
                                    <input type="text" placeholder='ایمیل خود را وارد کنید' className='w-full p-3 border-none' />
                                    <button className='bg-[#FF661F] cursor-pointer p-3 w-full mt-[10px]' type='submit'><span className='text-white'>مشترک شدن</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <Title title="اشتراک گذاری" />
                        <Imgtext />
                    </div>
                    <div className='mt-10'>
                        <Title title="پست های محبوب" />
                        <div className='flex flex-col gap-6 md:gap-2'>
                            <div className='flex items-center justify-center '>
                                <img className='w-20 h-20' src="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-1.jpg" alt="" />
                                <div className='px-2'>
                                    <TextAnimated text="سخنرانی ویژه نخست وزیر در مورد هشدار ویروس کرونا" time="21 دی 1401" />
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <img className='w-20 h-20' src="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-2.jpg" alt="" />
                                <div className='px-2'>
                                    <TextAnimated text="سخنرانی ویژه نخست وزیر در مورد هشدار ویروس کرونا" time="21 دی 1401" />
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <img className='w-20 h-20' src="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-3.jpg" alt="" />
                                <div className='px-2'>
                                    <TextAnimated text="سخنرانی ویژه نخست وزیر در مورد هشدار ویروس کرونا" time="21 دی 1401" />
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <img className='w-20 h-20' src="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-4.jpg" alt="" />
                                <div className='px-2'>
                                    <TextAnimated text="سخنرانی ویژه نخست وزیر در مورد هشدار ویروس کرونا" time="21 دی 1401" />
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <img className='w-20 h-20' src="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-5.jpg" alt="" />
                                <div className='px-2'>
                                    <TextAnimated text="سخنرانی ویژه نخست وزیر در مورد هشدار ویروس کرونا" time="21 دی 1401" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <Title title="بر چسب ها" />
                        <div className=''>
                            <Text text="اخبار" />
                            <Text text="کسب و کار" />
                            <Text text="سلامتی" />
                            <Text text="سیاست" />
                            <Text text="مجله" />
                            <Text text="ورزش" />
                            <Text text="تکنولوژی" />
                            <Text text="ویدئو" />
                            <Text text="جهانی" />
                            <Text text="فرهنگ" />
                            <Text text="اقتصاد" />
                        </div>
                    </div>
                    <div className='mt-10'>
                        <Title title="اینستگرام" />
                        <div className='grid grid-cols-3 gap-2'>
                            <ImgInstagram
                                img="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-3.jpg"
                            />
                            <ImgInstagram
                                img="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-2.jpg"
                            />
                            <ImgInstagram
                                img="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-1.jpg"
                            />
                            <ImgInstagram
                                img="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-4.jpg"
                            />
                            <ImgInstagram
                                img="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-5.jpg"
                            />
                            <ImgInstagram
                                img="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-6.jpg"
                            />
                        </div>

                    </div>
                </div>

            </div>

            {/* Bottom Side */}
            <div className='bg-[#111111] '>
                <div className='lg:w-[85%] w-[85%] mx-auto pt-[100px]'>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-white pb-[70px]'>
                        <div>
                            <h2 className='pb-6 text-4xl font-bold'>شهر شاوور</h2>
                            <p className='font-bold '>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                            <div className='flex justify-between mt-10 '>
                                <BoxIcons icon={<BiLogoFacebook className='text-2xl' />} />
                                <BoxIcons icon={<LiaInstagram className='text-2xl' />} />
                                <BoxIcons icon={<LiaLinkedin className='text-2xl' />} />
                                <BoxIcons icon={<AiOutlineTwitter className='text-2xl' />} />
                                <BoxIcons icon={<BsYoutube className='text-2xl' />} />
                            </div>
                        </div>
                        <div>
                            <h2 className='pb-6 text-2xl font-bold'>پست های اخیر</h2>
                            <div className='flex flex-col gap-5'>
                                <div className='flex items-center'>
                                    <img className='w-20 h-20' src="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-1.jpg" alt="" />
                                    <div className='px-2'>
                                        <TextAnimatedRed text="سخنرانی ویژه نخست وزیر در مورد هشدار ویروس کرونا" time="21 دی 1401" font="text-[15px]" />
                                    </div>
                                </div>

                                <div className='flex items-center'>
                                    <img className='w-20 h-20' src="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-1.jpg" alt="" />
                                    <div className='px-2'>
                                        <TextAnimatedRed text="سخنرانی ویژه نخست وزیر در مورد هشدار ویروس کرونا" time="21 دی 1401" font="text-[15px]" />
                                    </div>
                                </div>

                                <div className='flex items-center'>
                                    <img className='w-20 h-20' src="https://envytheme.ir/depan/rtl/assets/img/latest-news/latest-news-1.jpg" alt="" />
                                    <div className='px-2'>
                                        <TextAnimatedRed text="سخنرانی ویژه نخست وزیر در مورد هشدار ویروس کرونا" time="21 دی 1401" font="text-[15px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='pb-6 text-2xl font-bold'>پست های اخیر</h2>
                            <div className='flex flex-col gap-3 font-light'>
                                <TextAnimatedRed p="p-0" text="تماس با ما" font="text-[15px]" />
                                <TextAnimatedRed p="p-0" text="اخبار" font="text-[15px]" />
                                <TextAnimatedRed p="p-0" text="حریم خصوصی" font="text-[15px]" />
                                <TextAnimatedRed p="p-0" text="شرایط و ظوابط" font="text-[15px]" />
                                <TextAnimatedRed p="p-0" text="تبلیغات وابسته" font="text-[15px]" />
                                <TextAnimatedRed p="p-0" text="کسب و کار" font="text-[15px]" />
                                <TextAnimatedRed p="p-0" text="اخبار تکنلوژی" font="text-[15px]" />
                                <TextAnimatedRed p="p-0" text="سرگرمی" font="text-[15px]" />
                                <TextAnimatedRed p="p-0" text="سیاست" font="text-[15px]" />
                            </div>
                        </div>
                        <div>
                            <h2 className='pb-6 text-2xl font-bold'>اشتراک گذاری</h2>
                            <p className='pb-4 font-bold'>لورم ایپسوم به سادگی متن را در بر می گیرد. لورم ایپسوم 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. </p>
                            <div>
                                <form action="">
                                    <input type="text" placeholder='ایمیل خود را وارد کنید' className='w-full p-3 border-none' />
                                    <button className='bg-[#FF661F] cursor-pointer p-3 w-full mt-[10px]' type='submit'><span className='text-white'>مشترک شدن</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='border-t border-[#292929] py-[30px] text-white text-center '>
                        <p className='inline-block'> کپی رایت © تمام حقوق این سایت متعلق به </p><span className='text-[#FF661F]  font-semibold'> 2Fast4U </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLastNewsSection