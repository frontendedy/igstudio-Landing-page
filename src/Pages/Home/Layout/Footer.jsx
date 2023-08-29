import React from 'react'
import { Facebook, Instagram, Logo, Pinterest, Twitter } from '../../../Assets'

const Footer = () => {
  return (
    <footer className='bg-black w-full flex flex-col items-center justify-center pt-[118px]'>
      <div className='max-w-[1280px] w-full flex items-center justify-between py-[20px]'>
        <Logo />
        <ul className='flex text-white gap-[40px]'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Attorneys</li>
          <li className='cursor-pointer'>Practice Areas</li>
          <li className='cursor-pointer'>About Us</li>
        </ul>
        <div className='flex gap-[23px]'>
          <Instagram />
          <Facebook/>
          <Twitter/>
          <Pinterest/>
        </div>


      </div>
      <ul className='flex text-white my-[100px] gap-[25px]'>
        <li>© 2020 Acme. All right reserved.</li>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
    </footer>
  )
}

export default Footer