import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../../../../assets/images/xs_logo.png";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Navbar className="d-flex align-middle container p-0 text-white">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} width={"72px"} alt="Logo" />
          </Navbar.Brand>
          <ul className="navbar-nav me-auto d-flex">
            <li className="nav-item">
              <Link to="/about-us" className="nav-link text-white">
                Về chúng tôi
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-link text-white">
                Blogs
              </Link>
            </li>
            <NavDropdown
              title={
                <span className="text-white customtext-white">Sản phẩm</span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/san-pham/gong-kinh">
                Gọng kính
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/san-pham/kinh-ram">
                Kính râm
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/san-pham/trong-kinh">
                Tròng kính
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/san-pham/kinh-tre-em">
                Kính trẻ em
              </NavDropdown.Item>
            </NavDropdown>
            <div className="search">
              <input placeholder="Nhập từ khoá cần tìm"></input>
            </div>
          </ul>
          <div className="d-flex">
            <Link to="/cart" className="nav-link">
              <FaShoppingCart />
            </Link>
            <Link to="/account" className="nav-link">
              <FaUser />
            </Link>
          </div>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
