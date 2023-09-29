import React, { FC } from "react";

// Import Large Logo
import FullSizeLogo from "../../assets/img/full-size-logo.png";

// Import Social Media Icon from FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const KashyIntroduction: FC = () => {
  return (
    <section className="hero-introduction">
      <img src={FullSizeLogo} alt="" className="logo-large" />
      <h1 className="section-heading hero-introduction__heading">
        Mobile mechanics that save you time and money, honestly
      </h1>
      <p className="section-desc hero-introduction__desc">
        Have you ever wondered why seeing a mechanic feels so difficult? It's
        why we created Kashy.
      </p>
      <p className="section-desc hero-introduction__desc">
        Request a quote and one of our Kashy mechanics will come to your home or
        work for convenient service, repairs or diagnosis at a set price.
      </p>

      {/* Benefits Kashy's offering to their customers */}
      <div className="hero-benefits">
        {/* Item 1: Savings */}
        <section className="hero-item">
          <h2 className="section-heading hero-item__title">Savings</h2>
          <p className="section-desc hero-item__desc">
            Kashy saves on average 50% over the dealership. Upfront quoting is
            just another benefit.
          </p>
        </section>

        {/* Item 2: Conviences */}
        <section className="hero-item">
          <h2 className="section-heading hero-item__title">Convenience</h2>
          <p className="section-desc hero-item__desc">
            Our mobile mechanics come to your home or office at a time that
            suits you.
          </p>
        </section>

        {/* Item3: Honestyy */}
        <section className="hero-item">
          <h2 className="section-heading hero-item__title">Honesty</h2>
          <p className="section-desc hero-item__desc">
            We don't incentivise upselling and our mechanics are hand picked for
            the job.
          </p>
        </section>
      </div>

      {/* Hero CTA */}
      <div className="hero-action">
        <button type="button" className="btn hero-action__btn">
          Find Out More
        </button>
      </div>

      {/* Hero Socials Contact */}
      <div className="hero-socials">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/KashyAustralia"
          target="_blank"
          className="hero-socials__link"
        >
          <FontAwesomeIcon icon={faFacebook} className="hero-socials__icon" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.facebook.com/KashyAustralia"
          target="_blank"
          className="hero-socials__link"
        >
          <FontAwesomeIcon icon={faInstagram} className="hero-socials__icon" />
        </a>

        {/* Linked In */}
        <a
          href="https://www.facebook.com/KashyAustralia"
          target="_blank"
          className="hero-socials__link"
        >
          <FontAwesomeIcon icon={faLinkedin} className="hero-socials__icon" />
        </a>

        {/* Youtube */}
        <a
          href="https://www.facebook.com/KashyAustralia"
          target="_blank"
          className="hero-socials__link"
        >
          <FontAwesomeIcon icon={faYoutube} className="hero-socials__icon" />
        </a>
      </div>
    </section>
  );
};

export default KashyIntroduction;
