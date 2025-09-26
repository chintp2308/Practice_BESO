import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Category.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Category() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <div className="category-container">
      <div className="category-menu">Trang chủ/ Danh mục/ Tất cả sản phẩm</div>
      <div className="category-content">
        <div className="category-L">
          {/* Khi bấm vào tiêu đề sẽ toggle */}
          <div
            className="title-category"
            onClick={() => toggleSection("introduce")}
          >
            DANH MỤC SẢN PHẨM{" "}
            {openSection === "introduce" ? (
              <IoIosArrowUp className="up-down" />
            ) : (
              <IoIosArrowDown className="up-down" />
            )}
          </div>

          {/* Menu con */}
          <div
            className={`category-left ${
              openSection === "introduce" ? "open" : ""
            }`}
          >
            <ul>
              <li>
                <NavLink to="/">Trang chủ</NavLink>
              </li>
              <li>
                <NavLink to="/collections/all">Danh mục sản phẩm</NavLink>
              </li>
              <li>
                <NavLink to="/pages/about-us">Giới thiệu</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="category-right">
          <div className="category-top">
            <h2>Tất cả sản phẩm</h2>
            <div className="section-category">
              <section>
                <select name="gender">
                  <option value="NU">Giá: Tăng dần</option>
                  <option value="NU">Giá: Giảm dần</option>
                  <option value="NAM">Tên: A-Z</option>
                  <option value="KHAC">Tên: Z-A</option>
                  <option value="KHAC">Cũ nhất</option>
                  <option value="KHAC" selected>
                    Mới nhất
                  </option>
                  <option value="KHAC">Bán chạy nhất</option>
                  <option value="KHAC">Tồn kho: Giảm dần</option>
                </select>
              </section>
            </div>
          </div>
          <div className="category-product">
            <div className="category-item">
              <img
                src="https://product.hstatic.net/200000596699/product/so_1106-01026_copy_483e6805f44248f9921c55e42a65a20e.jpg"
                className="img-category"
              />
              <div className="category-info">
                <p className="category-name">Nhật ký biết ơn - ROSE</p>
                <p className="category-price">365.000₫</p>
              </div>
            </div>
            <div className="category-item">
              <img
                src="https://product.hstatic.net/200000596699/product/so_1106-01026_copy_483e6805f44248f9921c55e42a65a20e.jpg"
                className="img-category"
              />
              <div className="category-info">
                <p className="category-name">Nhật ký biết ơn - ROSE</p>
                <p className="category-price">365.000₫</p>
              </div>
            </div>
            <div className="category-item">
              <img
                src="https://product.hstatic.net/200000596699/product/so_1106-01026_copy_483e6805f44248f9921c55e42a65a20e.jpg"
                className="img-category"
              />
              <div className="category-info">
                <p className="category-name">Nhật ký biết ơn - ROSE</p>
                <p className="category-price">365.000₫</p>
              </div>
            </div>
            <div className="category-item">
              <img
                src="https://product.hstatic.net/200000596699/product/so_1106-01026_copy_483e6805f44248f9921c55e42a65a20e.jpg"
                className="img-category"
              />
              <div className="category-info">
                <p className="category-name">Nhật ký biết ơn - ROSE</p>
                <p className="category-price">365.000₫</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
