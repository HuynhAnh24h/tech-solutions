import React from 'react'
import { Link } from 'react-router-dom'
import { FaLocationArrow } from "react-icons/fa";


const links = [
      { text: "CMS", linkProduct:"/"},
      { text: "Lading page Restaurant", linkProduct:"/"},
      { text: "ERP", linkProduct:"/"},
      { text: "Ecommerce Website", linkProduct:"/"},
      { text: "Theme Laingpage Wordress", linkProduct:"/"},
      { text: "Theme Landingpage Shopify",  linkProduct:"/"},
      { text: "Zalo OA app", linkProduct:"/"},
]

const SlideProduct = () => {
  return (
    <div className="overflow-hidden w-full py-6 bg-green-500">
      <div
        className="flex gap-8 animate-scroll-slide pause-on-hover w-max"
      >
        {/* clone 3 lần cho chắc luôn */}
        {[...links, ...links, ...links].map(({ text, linkProduct }, index) => (
          <div key={index} className="flex-shrink-0">
           <Link to={linkProduct} className='text-[18px] font-bold text-gray-800 flex items-center gap-2'>
            {text}
            <FaLocationArrow />
          </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SlideProduct