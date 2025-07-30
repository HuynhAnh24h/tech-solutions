import React, { useEffect, useState } from 'react'
import { AiFillLayout, AiFillShop, AiFillAppstore } from 'react-icons/ai'

const dataCounter = [
  { numberCount: 2000, suffix: '+', title: 'Giao diện website Wordpress', icon: <AiFillLayout size={40} /> },
  { numberCount: 2000, suffix: '+', title: 'Giao diện website Shopify', icon: <AiFillShop size={40} /> },
  { numberCount: 100, suffix: '+', title: 'Website ERP, ERD', icon: <AiFillAppstore size={40} /> },
  { numberCount: 100, suffix: '+', title: 'Website ERP, ERD', icon: <AiFillAppstore size={40} /> },
  { numberCount: 100, suffix: '+', title: 'Website ERP, ERD', icon: <AiFillAppstore size={40} /> },
]

const CounterBox = ({ end, suffix }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1500
    const increment = end / (duration / 30)

    const counter = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, 30)
  }, [end])

  return (
    <h1 className="text-4xl font-bold text-green-500">
      {count}{suffix}
    </h1>
  )
}

const Boxcontrol = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-6 py-10">
      {dataCounter.map((data, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-between bg-white shadow-lg rounded-lg p-6 w-[250px] hover:scale-105 transition-transform duration-300"
        >
          <div className="text-green-500 mb-3">
            {data.icon}
          </div>
          <CounterBox end={data.numberCount} suffix={data.suffix} />
          <p className="mt-2 text-center text-gray-700 font-medium">{data.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Boxcontrol
