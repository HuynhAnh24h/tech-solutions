import React from 'react'
import Boxcontrol from '@/components/common/Boxcontrol'
import Terminates from '@/components/common/Terminates'

const AboutSection = () => {
  return (
    <div className='h-50vh fade-up'>
        <Terminates title={"Về chúng tôi"} subtitle={"TechSolution là công ty công nghệ tiên phong, chuyên cung cấp các giải pháp phần mềm và nền tảng số dành riêng cho các doanh nghiệp trẻ và startup đang trên hành trình khởi nghiệp.Chúng tôi kết hợp thiết kế hiện đại với công nghệ tiên tiến để tạo nên những website chuyên nghiệp."}/>
        <Boxcontrol/>
    </div>
  )
}

export default AboutSection