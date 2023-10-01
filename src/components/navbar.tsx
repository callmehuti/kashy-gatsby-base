import React, { FC } from "react";
import { Link } from "gatsby";

const Navbar: FC = () => {
  return (
    <nav className="navbar">
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
  );
};

export default Navbar;
