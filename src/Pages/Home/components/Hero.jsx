import React from 'react'
import { EmailIcon } from '../../../Assets'

const Hero = () => {
    return (
        <div className='flex justify-center bg-black'>
            <div className='max-w-[1280px] w-full flex items-center gap-[30px] justify-between mt-[30px] pb-[100px]'>
                <div className='w-3/6'>
                    <h1 className='text-white text-[66px]'>You don’t have to
                        <span className='font-bold'> Fight them Alone.</span></h1>
                    <p className='text-[18px] text-white opacity-30 mt-[36px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
                    <div className='bg-textColor max-w-[438px] w-full flex justify-between items-center p-[6px] pl-[28px] rounded-full mt-[36px]'>
                        <div className='flex items-center gap-[12px] text-textColor'>
                            <EmailIcon />
                            <input type="text" className='text-textColor bg-none !outline-none' placeholder='Enter your eamil address' />
                        </div>
                        <button className='bg-yellow py-[18px] px-[33px] font-semibold rounded-full'>Let’s Talk</button>
                    </div>
                </div>
                <div>
                    <img className="w-[443px]" src="/Hero.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Hero