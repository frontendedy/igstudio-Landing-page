import React from 'react'

const NewsLetter = () => {
    return (
        <div className='pb-[200px]'>
        <div className='mt-[188px] w-full bg-bg2 py-[90px]'>
            <h2 className='text-white text-[54px] text-center'>Subscribe Our Newsletter</h2>
            <div className='flex gap-[10px] mt-[42px] justify-center'>
                <input type="text" className='max-w-[276px] w-full p-[15px] bg-white rounded-l-[8px] italic' placeholder='Name:' />
                <input type="text" className='max-w-[276px] w-full p-[15px] bg-white italic' placeholder='Enter your Email'/>
                <button className='font-semibold text-[17px] bg-yellow py-[18px] px-[24px] rounded-r-[8px]'>SEND</button>
            </div>
        </div>
        </div>
    )
}

export default NewsLetter