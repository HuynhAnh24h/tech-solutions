import React from 'react'
import erthBg from "@/assets/bg-map.png"

const EarthBackground = () => {
  return (
    <div className="earth-container">
      <img src={erthBg} alt="Earth" className="earth-bg" />
    </div>
  );
}

export default EarthBackground