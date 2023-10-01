import React, { FC } from "react";
import Navbar from "./navbar";

// Import Icon
// Was trying to use svg file but not working, so changing to add logo by img instead of vector
import Icon from "../assets/img/logo-icon-small.png";
// Please install plugin
// https://www.gatsbyjs.com/plugins/gatsby-plugin-fontawesome-css/
// https://fontawesome.com/docs/apis/javascript/import-icons
// Check gatsby-config.js to ensure that plugins is added.

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

import MyIcon from "../assets/icon/hamburger.svg";

// Import Img
import MoreImg from "../assets/img/MTAQ-Transparent-Logo.webp";
import { Nav } from "react-bootstrap";

const Header: FC = () => {
  return (
    <header id="header" className="header header--fixed">
      <div className="container">
        <div className="top-bar">
          {/* Logo */}
          <div className="logo">
            <img src={Icon} alt="Logo" className="logo__img" />
          </div>

          {/* Top navigation  */}
          <Navbar />

          {/* Hamburger Menu */}
          <button className="top-bar__more">
            {/* <FontAwesomeIcon
              icon={faBars}
              className="top-bar__more-hamburger"
            /> */}

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
