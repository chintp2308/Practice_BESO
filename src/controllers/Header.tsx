import "./Header.css";
import { IoMenu, IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="header-title">
        <p className="title">
          Miễn phí vận chuyển trong nước với đơn hàng trên 1.000.000đ
        </p>
      </div>
      <div className="logo-header">
        <div className="header-menu">
          <IoMenu className="icon-menu" onClick={() => setIsOpen(!isOpen)} />
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

      <div className={`menu-header ${isOpen ? "open" : ""} `}>
        <ul className="menu-list">
          <li className="menu-item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "menu_item_active" : "")}
            >
              Trang chủ
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/collections/all"
              className={({ isActive }) => (isActive ? "menu_item_active" : "")}
            >
              Danh mục sản phẩm
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/pages/about-us"
              className={({ isActive }) => (isActive ? "menu_item_active" : "")}
            >
              Giới thiệu
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
