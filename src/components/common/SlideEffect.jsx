
import { IoLogoReact } from "react-icons/io5";
import { SiBlazor } from "react-icons/si";
import { FaNodeJs, FaWordpress, FaShopify } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";

const icons = [
  { Component: IoLogoReact, color: "#61DBFB" },
  { Component: SiBlazor, color: "#512BD4" },
  { Component: FaNodeJs, color: "#68A063" },
  { Component: FaWordpress, color: "#21759B" },
  { Component: SiMongodb, color: "#47A248" },
  { Component: BsFiletypeSql, color: "#FF6C37" },
  { Component: FaShopify, color: "#96BF48" },
];

export default function SlideEffect() {
  return (
    <div className="overflow-hidden w-full py-6">
      <div
        className="flex gap-8 animate-scroll-slide w-max"
      >
        {/* clone 3 lần cho chắc luôn */}
        {[...icons, ...icons, ...icons].map(({ Component, color }, index) => (
          <div key={index} className="flex-shrink-0">
            <Component
              size={30}
              style={{ color }}
              className="transition-transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
