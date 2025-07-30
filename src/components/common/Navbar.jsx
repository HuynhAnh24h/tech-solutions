import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center gap-3'>
        <Link to="/" className="text-md font-semibold text-gray-800 hover:text-gray-500">Trang chủ</Link>
        <Link to="/blog" className="text-md font-semibold text-gray-800 hover:text-gray-500">Về chúng tôi</Link>
        <Link to="/category" className="text-md font-semibold text-gray-800 hover:text-gray-500">Sản phẩm</Link>
        <Link to="/contact" className="text-md font-semibold text-gray-800 hover:text-gray-500">Liên Hệ</Link>
    </div>
  )
}

export default Navbar