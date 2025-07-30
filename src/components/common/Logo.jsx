import React from 'react'

const Logo = ({fontSize = 48}) => {
  return (
      <div className={`text-[32px] font-bold font-mono`}>
      <span className="text-green-500">&lt;</span>
      <span className="text-gray-800">TechSolution</span>
      <span className="text-green-500">/&gt;</span>
    </div>
  )
}

export default Logo