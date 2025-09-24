import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import "./Footer.css";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="introduce">
          <div
            className="footer-header"
            onClick={() => toggleSection("introduce")}
          >
            <h4>Giới thiệu</h4>
            {openSection === "introduce" ? (
              <IoIosArrowUp className="up-down" />
            ) : (
              <IoIosArrowDown className="up-down" />
            )}
            <div
              className={`footer-content ${
                openSection === "introduce" ? "open" : ""
              }`}
            >
              {" "}
              <span>
                Công ty CP SUN GLOBAL.CO - Mã số doanh nghiệp: 3002259966 do
                Phòng ĐKKD Sở Kế hoạch và Đầu tư tỉnh Hà Tĩnh cấp ngày
                07/11/2022.
              </span>
              <img src="https://theme.hstatic.net/200000596699/1000946138/14/logo_bct.png?v=339" />
            </div>
          </div>
        </div>
        <div className="contact">
          <div
            className="footer-header"
            onClick={() => toggleSection("contact")}
          >
            <h4>Liên hệ</h4>
            {openSection === "contact" ? (
              <IoIosArrowUp className="up-down" />
            ) : (
              <IoIosArrowDown className="up-down" />
            )}
          </div>
          <div
            className={`footer-content ${
              openSection === "contact" ? "open" : ""
            }`}
          >
            {" "}
            <ul>
              <li>Giới thiệu</li>
              <li>Chính sách đổi trả</li>
              <li>Chính sách bảo mật</li>
              <li>Chính sách vận chuyển</li>
              <li>Điều khoản dịch vụ</li>
              <li>Hướng dẫn mua hàng</li>
              <li>Liên hệ</li>
            </ul>
          </div>
        </div>
        <div className="infor">
          <div className="footer-header" onClick={() => toggleSection("infor")}>
            <h4>Thông tin</h4>
            {openSection === "infor" ? (
              <IoIosArrowUp className="up-down" />
            ) : (
              <IoIosArrowDown className="up-down" />
            )}
          </div>
          <div
            className={`footer-content ${
              openSection === "infor" ? "open" : ""
            }`}
          >
            <ul>
              <li>
                <FaMapMarkerAlt className="map-icon" />
                Địa chỉ đăng ký kinh doanh: Số 179, đường Nguyễn Biểu, tổ dân
                phố 1, phường Nam Hà, thành phố Hà Tĩnh, tỉnh Hà Tĩnh, Việt Nam
              </li>

              <li>
                {" "}
                <IoMail className="mail-icon" />
                besovn.contact@gmail.com
              </li>
            </ul>{" "}
          </div>
        </div>
        <div className="facebook">
          <div
            className="footer-header"
            onClick={() => toggleSection("facebook")}
          >
            <h4>Facebook</h4>
            {openSection === "facebook" ? (
              <IoIosArrowUp className="up-down" />
            ) : (
              <IoIosArrowDown className="up-down" />
            )}
          </div>
          <div
            className={`footer-content ${
              openSection === "facebook" ? "open" : ""
            }`}
          >
            <div>hiiii</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">Copyright © 2025 BESO</div>
    </div>
  );
}
