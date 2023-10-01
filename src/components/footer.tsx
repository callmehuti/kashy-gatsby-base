import React, { FC } from "react";
import { Link } from "gatsby";

// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer: FC = () => {
  return (
    // Footer
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          {/* Social Media */}
          <div className="footer-socials">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/KashyAustralia"
              className="footer-socials__btn"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="footer-socials__icon"
              />
            </a>

            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/company/kashyaustralia"
              className="footer-socials__btn"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon
                icon={faLinkedin}
                className="footer-socials__icon"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/kashyaustralia/"
              className="footer-socials__btn"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="footer-socials__icon"
              />
            </a>
          </div>

          <div className="footer-info">
            {/* Please link contact us page to this href */}
            <Link to="/contact-us" className="footer-info__contactus">
              <span className="contact-us">Contact Us</span>
            </Link>
            <a
              href="https://www.kashy.com.au/_files/ugd/5d5476_01048bb5e23545e6b168f0c66598131a.pdf"
              className="footer-info__terms-conditions"
              target="_blank"
            >
              <div className="terms-conditions">
                <i className="fa fa-wrench terms-conditions__icon"></i>
                <span className="terms-conditions__text">
                  TERMS AND CONDITIONS
                </span>
              </div>
            </a>
          </div>

          {/* Copyright */}
          <div className="footer__copyright">
            <p className="footer__copyright-text">
              © Copyright 2023 - All rights reserved. (ABN: 628448359)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
