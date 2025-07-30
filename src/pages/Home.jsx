import SlideProduct from '@/components/common/SlideProduct'
import AboutSection from '@/components/Home/AboutSection'
import BannerList from '@/components/Home/BannerList'
import React from 'react'

const Home = () => {
  return (
    <>
        <BannerList />
        <SlideProduct/>
        <AboutSection/>
    </>
  )
}

export default Home