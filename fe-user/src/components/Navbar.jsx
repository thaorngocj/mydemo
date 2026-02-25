import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `cursor-pointer ${
      location.pathname === path
        ? "text-red-500"
        : "hover:text-black text-gray-600"
    }`;

  return (
    <div className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          📚 Book Haven
        </Link>

        {/* Menu */}
        <div className="flex gap-8 font-medium">
          <Link to="/" className={linkClass("/")}>
            Trang chủ
          </Link>

          <Link to="/booking" className={linkClass("/booking")}>
            Đặt chỗ
          </Link>

          <Link to="/borrow" className={linkClass("/borrow")}>
            Mượn sách
          </Link>

          <Link to="/buy" className={linkClass("/buy")}>
            Mua sách
          </Link>
        </div>

        {/* Button */}
        <button className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition">
          Đăng nhập
        </button>

      </div>
    </div>
  );
}