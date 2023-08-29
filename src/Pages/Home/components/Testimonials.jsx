import React, { useState } from 'react'
import { Arrow } from '../../../Assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/react'
import 'swiper/css';

const testimonials = [{
    name: "Jane Cooper",
    occupation: "Ceo of Hunt",
    about: `Amet minim mollit non deserunt ullamco est
    sit aliqua dolor do amet sint. Velit officia
    consequatduis enim velit mollit Exer. sit
    aliqua dolor do amet sint. Velit officia`,
    img: "/profile1.png"
},
{
    name: "Jane Cooper",
    occupation: "Ceo of Hunt",
    about: `Amet minim mollit non deserunt ullamco est
    sit aliqua dolor do amet sint. Velit officia
    consequatduis enim velit mollit Exer. sit
    aliqua dolor do amet sint. Velit officia`,
    img: "/profile1.png"
},
{
    name: "Jane Cooper",
    occupation: "Ceo of Hunt",
    about: `Amet minim mollit non deserunt ullamco est
    sit aliqua dolor do amet sint. Velit officia
    consequatduis enim velit mollit Exer. sit
    aliqua dolor do amet sint. Velit officia`,
    img: "/profile1.png"
},
{
    name: "Jane Cooper",
    occupation: "Ceo of Hunt",
    about: `Amet minim mollit non deserunt ullamco est
    sit aliqua dolor do amet sint. Velit officia
    consequatduis enim velit mollit Exer. sit
    aliqua dolor do amet sint. Velit officia`,
    img: "/profile1.png"
},
{
    name: "Jane Cooper",
    occupation: "Ceo of Hunt",
    about: `Amet minim mollit non deserunt ullamco est
    sit aliqua dolor do amet sint. Velit officia
    consequatduis enim velit mollit Exer. sit
    aliqua dolor do amet sint. Velit officia`,
    img: "/profile1.png"
},
{
    name: "Jane Cooper",
    occupation: "Ceo of Hunt",
    about: `Amet minim mollit non deserunt ullamco est
    sit aliqua dolor do amet sint. Velit officia
    consequatduis enim velit mollit Exer. sit
    aliqua dolor do amet sint. Velit officia`,
    img: "/profile1.png"
},
]

const Testimonials = () => {
    // const swiper = useSwiper();
    const [swiper, setSwiper] = useState(null);
    return (
        <div className='mt-[186px]'>
            <div className='flex justify-between'>
                <h2 className='text-white text-[54px]'>What says our <br /> happy Clients</h2>
                <div className='flex gap-[18px]'>
                    <button
                        onClick={() => swiper.slidePrev()}
                        className='w-[90px] h-[90px] bg-white hover:bg-yellow flex items-center justify-center rounded-full'>
                        <Arrow />
                    </button>
                    <button
                        onClick={() => swiper.slideNext()}
                        className='w-[90px] h-[90px] bg-white hover:bg-yellow flex items-center justify-center rounded-full rotate-180'>
                        <Arrow />
                    </button>
                </div>
            </div>
            <div className='flex flex-wrap gap-[30px] mt-[97px] justify-center'>


                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={2}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(s) => {
                        console.log("initialize swiper", s);
                        setSwiper(s);
                       }}
                    onSlideChange={() => console.log('slide change')}
                >
                    {testimonials.map((data, idx) => <SwiperSlide >
                        <div className='max-w-[360px] rounded-[14px] w-full border border-borderColor flex flex-col items-start gap-[22px] p-[23px] hover:bg-hover'>
                            <div className='w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center'>
                                <img src={data.img} alt={data.name} />
                            </div>
                            <div>
                                <h3 className='text-white text-[24px] font-semibold'>{data.name}</h3>
                                <p className='text-white mt-[10px]'>{data.occupation}</p>
                            </div>
                            <p className='text-textColor text-[14px] text-start'>{data.about}</p>
                        </div>
                    </SwiperSlide>)}

                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials