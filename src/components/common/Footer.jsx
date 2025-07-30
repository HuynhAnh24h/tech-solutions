import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { IoMdMail } from "react-icons/io";


const Footer = () => {
  return (
   <>
     <div className='w-full bg-gray-100'>
      <div className='container mx-auto flex justify-between items-start py-10 flex-wrap gap-3'>
        <div>
          <Logo/>
          <span className='text-[16px] font-bold text-gray-800'>“Giải pháp thông minh, cuộc sống mạnh mẽ"</span>
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-md font-bold text-gray-800'>Dịch vụ</p>
          <div className='flex flex-col gap-1'>
            <Link>Thiết kế website trọn gói.</Link>
            <Link>Lập trình phần mềm ERP, ERD.</Link>
            <Link>Dành cho Startup.</Link>
            <Link>Theme Shopify.</Link>
            <Link>Theme Wordpress.</Link>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-md font-bold text-gray-800'>Dịch vụ</p>
          <div className='flex flex-col gap-1'>
            <Link>Thiết kế website trọn gói.</Link>
            <Link>Lập trình phần mềm ERP, ERD.</Link>
            <Link>Dành cho Startup.</Link>
            <Link>Theme Shopify.</Link>
            <Link>Theme Wordpress.</Link>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-md font-bold text-gray-800'>Dịch vụ</p>
          <div className='flex flex-col gap-1'>
            <Link>Thiết kế website trọn gói.</Link>
            <Link>Lập trình phần mềm ERP, ERD.</Link>
            <Link>Dành cho Startup.</Link>
            <Link>Theme Shopify.</Link>
            <Link>Theme Wordpress.</Link>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-md font-bold text-gray-800'>Liên hệ</p>
          <div className='flex flex-col gap-1'>
           <p className='flex items-center gap-1'><IoMdMail size={25} className='text-green-500' />: techsolution@gmail.com</p>
           <p className='flex items-center gap-1'><IoMdMail size={25} className='text-green-500' />: techsolution@gmail.com</p>
           <p className='flex items-center gap-1'><IoMdMail size={25} className='text-green-500' />: techsolution@gmail.com</p>
           <p className='flex items-center gap-1'><IoMdMail size={25} className='text-green-500' />: techsolution@gmail.com</p>
           </div>
        </div>
      </div>
    </div>
    <div className='w-full py-5 bg-green-500'>
      <p className='text-center font-bold text-gray-800'>© Techsolution coding team, All Rights Reserved</p>
    </div>
   </>
  )
}

export default Footer