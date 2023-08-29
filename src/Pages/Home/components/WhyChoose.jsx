import React from 'react'
import { GiftIcon } from '../../../Assets'

const WhyChoose = () => {
    return (
        <div className='flex items-center justify-center bg-grey'>
            <div className='max-w-[1280px] w-full text-center'>
                <h2 className='text-white text-[54px]'>Why Choose us?</h2>
                <div className='flex flex-wrap gap-[30px] mt-[97px] justify-center'>
                    <div className='max-w-[360px] rounded-[14px] w-full h-[377px] border border-borderColor hover:bg-hover flex flex-col items-start gap-[26px] p-[23px]'>
                        <div className='w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center'>
                            <GiftIcon />
                        </div>
                        <h3 className='text-white text-[24px] font-semibold'>98% Success Rate</h3>
                        <p className='text-textColor text-[14px] text-start'>Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                        <button className='bg-yellow py-[10px] px-[24px] rounded-full'>Read More</button>
                    </div>
                    <div className='max-w-[360px] rounded-[14px] w-full h-[377px] border border-borderColor flex flex-col items-start gap-[26px] p-[23px] hover:bg-hover'>
                        <div className='w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center'>
                            <GiftIcon />
                        </div>
                        <h3 className='text-white text-[24px] font-semibold'>98% Success Rate</h3>
                        <p className='text-textColor text-[14px] text-start'>Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                        <button className='bg-yellow py-[10px] px-[24px] rounded-full'>Read More</button>
                    </div>
                    <div className='max-w-[360px] rounded-[14px] w-full h-[377px] border border-borderColor flex flex-col items-start gap-[26px] p-[23px] hover:bg-hover'>
                        <div className='w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center'>
                            <GiftIcon />
                        </div>
                        <h3 className='text-white text-[24px] font-semibold'>98% Success Rate</h3>
                        <p className='text-textColor text-[14px] text-start'>Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                        <button className='bg-yellow py-[10px] px-[24px] rounded-full'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose