import "./Header.css";
import { IoMenu, IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";

export default function Header() {
  return (
    <div>
      <div className="header-title">
        <p className="title">
          Miễn phí vận chuyển trong nước với đơn hàng trên 1.000.000đ
        </p>
      </div>
      <div className="logo-header">
        <div className="header-menu">
          <IoMenu className="icon-menu" />
        </div>
        <div className="header logo-center">
          <a href="https://besovn.com/">
            <img
              className="logo"
              src="https://theme.hstatic.net/200000596699/1000946138/14/logo.png?v=339"
              alt="BESO"
            />
          </a>
        </div>

        <div className="icon-header header">
          <div className="search ">
            <IoSearch className="icon-h " />
          </div>
          <div className="profile ">
            <FaUserCircle className="icon-h" />
          </div>
          <div className="cart ">
            <AiOutlineShopping className="icon-h" />
          </div>
        </div>
      </div>
      <div className="input-search">
        <input placeholder="Tìm kiếm sản phẩm" />
        <IoSearch className="icon-search " />
      </div>
      <div className="menu-header">
        <ul className="menu-list">
          <li className="menu-item">
            <a href="/">Trang chủ</a>
          </li>
          <li className="menu-item">
            <a href="/collections/all">Danh mục sản phẩm</a>
          </li>
          <li className="menu-item">
            <a href="/pages/about-us">Giới thiệu</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
