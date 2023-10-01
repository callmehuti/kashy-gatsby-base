import React, { FC, useState } from "react";
import { Link } from "gatsby";
import Navbar from "./navbar";
import Icon from "../assets/img/logo-icon-small.png";
import MyIcon from "../assets/icon/hamburger.svg";
import MoreImg from "../assets/img/MTAQ-Transparent-Logo.webp";

const Header: FC = () => {
  const [isMobileNavVisible, setMobileNavVisibility] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisibility(!isMobileNavVisible);
  };

  const closeMobileNav = () => {
    setMobileNavVisibility(false);
  };

  return (
    <header id="header" className="header header--fixed">
      <div className="container">
        <div className="top-bar">
          {/* Logo */}
          <div className="logo">
            <img src={Icon} alt="Logo" className="logo__img" />
          </div>

          {/* Mobile Navbar */}
          <nav
            className={`navbar ${isMobileNavVisible ? "show" : ""}`}
          >
            <ul className="navbar__list">
              <li>
                <Link to="/" className="navbar__link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="navbar__link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="navbar__link">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Overlay */}
          {isMobileNavVisible && (
            <div
              className="navbar__overlay"
              onClick={closeMobileNav}
            ></div>
          )}

          {/* Hamburger Menu */}
          <button
            className={`top-bar__more js-toggle ${
              isMobileNavVisible ? "show" : "hide"
            }`}
            onClick={toggleMobileNav}
          >
            <MyIcon className="top-bar__more-hamburger" />
          </button>

          {/* Action Button */}
          {/* For future feature: Log in / Sign up */}
          {/* But current website doesn't have these functions, and based on the current layout, they want MTAQ img on the right side of the navbar */}

          {/* Kashy Corporate Partners */}
          <div className="kashy-partner">
            <a
              href="https://www.mtaq.com.au/"
              className="kashy-partner__link"
              target="_blank"
            >
              <img
                src={MoreImg}
                alt="MTA Queensland Website"
                className="kashy-partner__img"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
