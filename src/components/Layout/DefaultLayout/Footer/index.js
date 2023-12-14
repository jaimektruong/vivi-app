import React from "react";
import logo from "../../../../assets/images/xs_logo.png";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="page-footer font-small pt-4">
    <div style={{ width: "1200px", margin: "0 auto" }} className=" bg-primary">
      <div className="brand">
        <nav className="navbar navbar-expand-lg navbar-light colorPrimary">
          <div className="container-fluid frame-pc">
            <Link
              to="/home"
              className="navbar-brand d-flex align-items-center"
              activeClassName="active"
            >
              <img
                src={logo}
                width="72"
                height="72"
                className="d-inline-block align-top"
                alt="Vivi Eyewear Logo"
              />
              <h1 className="d-inline-block align-top text-center m-0">
                Vivi Eyewear
              </h1>
            </Link>
          </div>
        </nav>
      </div>
    </div>

    <div style={{ width: "1200px", margin: "0 auto" }} className="bg-light">
      <div className="info row frame-pc py-5">
        <section className="col-xl-3 text-start px-5">
          <h5>Sản phẩm</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/san-pham/gong-kinh" className="nav-link p-0">
                Gọng kính
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/san-pham/kinh-ram" className="nav-link p-0">
                Kính râm
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/san-pham/trong-kinh" className="nav-link p-0">
                Tròng kính
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/san-pham/phu-kien" className="nav-link p-0">
                Phụ kiện
              </Link>
            </li>
          </ul>
        </section>
        <section className="col-xl-3 text-start px-5">
          <h5>Chính sách mua hàng</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/chinh-sach/thanh-toan" className="nav-link p-0">
                Hình thức thanh toán
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/chinh-sach/giao-hang" className="nav-link p-0 ">
                Chính sách giao hàng
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/chinh-sach/bao-hanh" className="nav-link p-0">
                Chính sách bảo hành
              </Link>
            </li>
            {/* Add other list items as needed */}
          </ul>
        </section>
        <section className="col-xl-3 text-start px-5">
          <h5>Thông tin liên hệ</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0">
                Điện thoại: 1900 6868
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0">
                Email: info@vivi.com
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0">
                Địa chỉ: 68 Trần Văn B, Quận 13
              </Link>
            </li>
            {/* Add other list items as needed */}
          </ul>
        </section>
        <section className="col-xl-3 text-start px-5">
          <h5>Ứng dụng Vivi Eyewear</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              {/* Replace href with to */}
              <Link to="/" className="nav-link p-0 footer__item--white">
                <img
                  src="../assets/images/appstore.png"
                  width="160px"
                  alt="App Store"
                />
              </Link>
            </li>
            <li className="nav-item mb-2">
              {/* Replace href with to */}
              <Link to="/" className="nav-link p-0 footer__item--white">
                <img
                  src="../assets/images/googleplay.png"
                  width="160px"
                  alt="Google Play"
                />
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </footer>
);

export default Footer;
