import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowTrendUp } from "react-icons/fa6";
import SlideEffect from '../common/SlideEffect';
import bannerImage from '@/assets/banner.png'


const BannerList = () => {
  return (
    <div className='h-[80.5vh] flex items-center gap-2 container mx-auto'>
        <div className='flex-1 flex flex-col gap-3 items-center md:items-start fade-left'>
            <p className='text-[70px] font-bold text-gray-800 text-center md:text-start'>Giải pháp công nghệ dành cho startup.</p>
            <p className='text-[18px] text-center md:text-start'>Với đội ngũ lập trình viên đầy kinh nghiệm chúng tôi tự 
                tin mang đến sản phẩm tốt nhất cho khách hàng</p>
            <div className=''>
                <Link className=' inline-flex justify-center items-center gap-2 
                bg-green-500 text-gray-800 px-4 py-2 rounded-md text-xl font-bold outline-none
                hover:bg-green-600   transition-all duration-300' to='/products
                '>
                    Xem sản phẩm
                    <FaArrowTrendUp />
                </Link>
            </div>
        </div>
        <div className='flex-1 none hidden md:flex fade-right'>
            <img src={bannerImage} alt="" className='w-full h-full object-cover' />
        </div>
    </div>
  )
}

export default BannerList