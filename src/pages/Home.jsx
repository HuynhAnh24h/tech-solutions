import SlideProduct from '@/components/common/SlideProduct'
import AboutSection from '@/components/Home/AboutSection'
import BannerList from '@/components/Home/BannerList'
import ServicesSection from '@/components/Home/ServicesSection'
import React from 'react'

const Home = () => {
  return (
    <>
        <BannerList />
        <SlideProduct/>
        <AboutSection/>
        <ServicesSection/>
    </>
  )
}

export default Home