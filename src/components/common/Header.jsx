import { FaBars } from "react-icons/fa";
import Navbar from "./Navbar";
import Logo from "./Logo";
import { useEffect, useState } from "react";
const Header = () => {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`py-3 ${
        scrolled ? "fixed top-0 left-0 right-0 z-50 bg-white w-full" : "w-full"
      }`}>
        <div className="container mx-auto flex items-center justify-between">
            <Logo />
            <div className="hidden md:flex space-x-4">
                <Navbar />  
            </div>
            <div className="md:hidden">
                <button>
                    <FaBars className="text-2xl" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header