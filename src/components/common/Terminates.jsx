import React from 'react'

const Terminates = ({title,subtitle}) => {
  return (
    <div className='container mx-auto flex flex-col gap-2 justify-center items-center py-10'>
        <h1 className='text-center text-[32px] font-bold text-green-500'>{title}</h1>
        <span className='text-[16px] font-semibold text-gray-600 max-w-2xl text-center'>{subtitle}</span>
    </div>
  )
}

export default Terminates