import React, { FC } from "react";
import { Link } from "gatsby";

// Import Icon
import Icon from "../assets/img/logo-icon-small.png";

// Import Img
import MoreImg from "../assets/img/MTAQ-Transparent-Logo.webp";

const Header: FC = () => {
  return (
    <header id="header" className="header">
      <div className="container">
        <div className="top-bar">
          {/* Logo */}
          <div className="logo">
            <img src={Icon} alt="Logo" />
          </div>

          {/* Navbar */}
          <nav className="navbar">
            <ul className="navbar__list">
              <li>
                <Link to="/" className="navbar__link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="navbar__link">
                  About
                </Link>
              </li>
              {/* <li><Link to="/blog" className="navbar__link">Blog</Link></li> */}
            </ul>
          </nav>

          {/* Action Button */}
          {/* For future feature: Log in / Sign up */}
          {/* But current website doesn't have these functions, and based on the current layout, they want MTAQ img on the right side of the navbar */}

          <div className="top-bar__more">
            <a
              href="https://www.mtaq.com.au/"
              className="top-bar__more-link"
              target="_blank"
            >
              <img
                src={MoreImg}
                alt="MTA Queensland Website"
                className="top-bar__more-img"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
