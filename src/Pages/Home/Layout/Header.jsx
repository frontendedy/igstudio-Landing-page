import React from 'react'
import { Logo } from '../../../Assets'

const Header = () => {
  return (
    <header className='bg-black w-full flex items-center justify-center'>
        <nav className='max-w-[1280px] w-full flex items-center justify-between py-[20px]'>
            <Logo/>
            <ul className='flex text-white gap-[40px]'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Attorneys</li>
                <li className='cursor-pointer'>Practice Areas</li>
                <li className='cursor-pointer'>About Us</li>
            </ul>
            <button className=' text-white border py-[14px] px-[35px]'>Contact Now</button>
        </nav>
    </header>
  )
}

export default Header