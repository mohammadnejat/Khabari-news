import React from 'react'
import MainPageCards from '../mainPageCards/MainPageCards'
import { TextAnimated } from '../TextAnimated/TextAnimated'
import img1 from "./../../../public/1.jpg"


const FirstSection = () => {
    return (
        <section className="w-full mt-4">
            <div className="lg:w-[85%] md:w-[90%] w-[95%] mx-auto">
                <div className="flex flex-col gap-4 md:grid md:grid-cols-12" id="">
                    <div className="flex flex-col items-center justify-center col-span-3 gap-4">
                        <MainPageCards img={img1} project={"اخباری"} text="سخنرانی ویژه نخست وزیر در مورد وضعیت فعلی و هشدار ویروس کرونا" time={"21 دی 1401"} />
                        <MainPageCards img={img1} project={"ورزشی"} text="سخنرانی ویژه نخست وزیر در مورد وضعیت فعلی و هشدار ویروس کرونا" time={"21 دی 1401"} />
                    </div>
                    <div className="h-full col-span-6 border">
                        <div className="w-full h-full">
                            <div className="h-3/6">
                                <img className="h-full" src="https://media.mehrnews.com/d/2023/06/26/3/4571975.jpg?ts=1687773589142" alt="" />
                            </div>
                            <div className="p-4 mt-2">
                                <span className="px-1 pb-1 text-sm font-bold text-white bg-black ">کشوری</span>
                                <TextAnimated
                                    font="font-bold text-[36px]"
                                    text="تاکنون بیش از 1 میلیون نفر در سراسر جهان بر اثر ابتلا به کرونا جان خود را از دست داده اند، بنابراین مردم در حال آگاه شدن هستند"
                                    time="21 دی 1401" />
                            </div>

                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="border">
                            <div>
                                <h2 className="p-3 text-2xl font-extrabold">اخبار هفتگی</h2>
                            </div>
                            <hr className="mx-2" />
                            <div className="px-2 py-4">
                                <span className="text-red-600">سیاست</span>
                                <div className="py-2 duration-500 cursor-pointer hover:text-red-600 border-animation" id="hover">
                                    <p className="text-lg font-bold"></p>
                                </div>
                                <TextAnimated
                                    text="چه کسانی در فینال جام جهانی فوتبال بانوان پیشرفت چشمگیر و سریع داشته اند"
                                    time="21 دی 1401" />
                            </div>
                            <hr className="mx-2" />
                            <div className="px-2 py-4">
                                <span className="text-red-600">ورزش</span>
                                <TextAnimated
                                    text="فعالان فرهنگ و سرگرمی چند ماه بعد دوباره شروع به کار کردند"
                                    time="21 دی 1401" />
                            </div>
                            <hr className="mx-2" />
                            <div className="px-2 py-4">
                                <span className="text-red-600">اداری</span>
                                <TextAnimated
                                    text="چه کسانی در فینال جام جهانی فوتبال بانوان پیشرفت چشمگیر و سریع داشته اند"
                                    time="21 دی 1401" />
                            </div>
                            <hr className="mx-2" />
                            <div className="px-2 py-4">
                                <span className="text-red-600">فرهنگی</span>
                                <TextAnimated
                                    text="فعالان فرهنگ و سرگرمی چند ماه بعد دوباره شروع به کار کردند"
                                    time="21 دی 1401" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default FirstSection