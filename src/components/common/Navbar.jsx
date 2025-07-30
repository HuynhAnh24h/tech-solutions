import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center gap-3'>
        <Link className="text-md font-semibold text-gray-800 hover:text-gray-500">Trang chủ</Link>
        <Link className="text-md font-semibold text-gray-800 hover:text-gray-500">Về chúng tôi</Link>
        <Link className="text-md font-semibold text-gray-800 hover:text-gray-500">Sản phẩm</Link>
        <Link className="text-md font-semibold text-gray-800 hover:text-gray-500">Công nghệ</Link>
    </div>
  )
}

export default Navbar