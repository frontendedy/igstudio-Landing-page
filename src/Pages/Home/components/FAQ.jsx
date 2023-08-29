import React, { useState } from 'react'
const faqs = [
    {
        ques: "How much is my case worth?",
        ans: `Amet minim mollit non deserunt ullamco est sit
        aliqua dolor do amet sint`
    },
    {
        ques: "What should I do right after car accidect",
        ans: `Amet minim mollit non deserunt ullamco est sit
        aliqua dolor do amet sint`
    },
    {
        ques: "How much is my case worth?",
        ans: `Amet minim mollit non deserunt ullamco est sit
        aliqua dolor do amet sint`
    },
]
const FAQ = () => {
    const [show, setShow] = useState(null)
    return (
        <div className='mt-[188px] w-full'>
            <h2 className='text-white text-[54px]'>FAQ</h2>
            <div className='flex w-full gap-[26px]'>
                <p className='text-textColor text-[18px]'>Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint. </p>
                <div className='text-white w-[50%]'>
                    <h4 className='text-[24px]'>Do I need a personal injury report?</h4>
                    <p className='mt-[40px] text-textColor'>Amet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. Velit officia consequatduis
                        enim velit mollit Exer. Amet minim mollit non deserunt
                        ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
                    <div className='max-w-[540px] mt-[40px]'>
                        {
                            faqs.map((data, idx) =>
                                <div key={idx} className={`transition duration-500 border-t border-borderColor cursor-pointer ${show === idx ? 'h-[150px]': 'h-[80px]'}`}
                                    onClick={() => setShow(idx)}>
                                    <div className={`flex justify-between items-center cursor-pointer my-[20px]`}>
                                        <p className='text-white text-[24px]'>{data.ques}</p>
                                        <div className={`transition duration-500 text-[18px] w-[28px] h-[28px] bg-yellow text-black flex items-center justify-center rounded-full origin-center `}>+</div>
                                    </div>
                                    <p className={`transition duration-500 text-textColor ${show === idx ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-[-1rem] opacity-0'}`}>{data.ans}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FAQ