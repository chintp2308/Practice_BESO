import React from "react";
import { NavLink } from "react-router-dom";
import "./Introduction.css";

export default function Introduction() {
  return (
    <div className="introduction-container">
      <div className="category-menu">Trang chủ / Giới thiệu</div>
      <div className="introduction-content">
        <div className="introduction-left">
          <div className="intro-menu">
            <div className="boder-h2">
              <h2></h2>
            </div>
            <ul className="intro-menu-ul">
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
          </div>{" "}
          <div className="img-intro">
            <img src="https://theme.hstatic.net/200000596699/1000946138/14/page_banner.jpg?v=339" />
          </div>
        </div>
        <div className="introduction-right">
          <div className="title-intro">
            <h1>Giới thiệu</h1>
          </div>
          <div className="content-intro">
            <span>
              BESO (bé sổ) là thương hiệu sổ tay cao cấp, mang đến những sản
              phẩm thiết kế độc quyền. Mỗi bộ sưu tập đều được sáng tạo với
              những câu chuyện riêng đem lại giá trị và sự phát triển cho quý
              khách hàng trở thành phiên bản tuyệt vời nhất.{" "}
            </span>
            <span>
              Mỗi sản phẩm của BESO được chăm chút tỉ mỉ và chất lượng khác
              biệt, mang lại trải nghiệm độc đáo cho người sử dụng. Chúng tôi
              cam kết truyền tải năng lượng tích cực và sự chân thành qua từng
              chi tiết.
            </span>
            <span>
              Hàng năm, BESO giới thiệu những bộ sưu tập sổ tay cao cấp, sẽ đồng
              hành cùng bạn trên hành trình phát triển và hoàn thiện bản thân.
            </span>
            <span>Liên hệ với chúng tôi qua:</span>
            <ul>
              <li>Email: besovn.contact@gmail.com</li>
              <li>Instagram: @beso_vn</li>
            </ul>
            <span>Cảm ơn bạn đã tin tưởng và đồng hành cùng Beso! </span>
            <span>Trân trọng</span>
          </div>
        </div>
      </div>
    </div>
  );
}
