import { FaHome, FaChair, FaUsers, FaBook, FaShoppingCart, FaIdCard, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      {/* LEFT: LOGO */}
      <div className="header-left">
        <div className="logo">
          <FaBook className="logo-icon" />
          <span>Brandname</span>
        </div>
      </div>

      {/* CENTER: MENU */}
      <nav className="header-menu">
        <a href="#" className="menu-item active">
          <FaHome /> Trang chủ
        </a>
        <a href="#" className="menu-item">
          <FaChair /> Đặt chỗ ngồi
        </a>
        <a href="#" className="menu-item">
          <FaUsers /> Đặt phòng họp
        </a>
        <a href="#" className="menu-item">
          <FaBook /> Mượn/Trả sách
        </a>
        <a href="#" className="menu-item">
          <FaShoppingCart /> Mua sách
        </a>
        <a href="#" className="menu-item">
          <FaIdCard /> Đăng ký thẻ
        </a>
      </nav>

      {/* RIGHT: USER */}
      <div className="header-right">
        <span className="username">UserName</span>
        <FaUser className="user-icon" />
      </div>
    </header>
  );
};

export default Header;
