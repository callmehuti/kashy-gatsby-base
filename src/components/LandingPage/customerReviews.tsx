import React, { FC } from "react";

// Import Img
import Customer1 from "../../assets/img/customer-1.jpeg";
import Customer2 from "../../assets/img/customer-2.jpeg";
import Customer3 from "../../assets/img/customer-3.jpeg";
import Customer4 from "../../assets/img/customer-4.jpg";

// Import Icon from FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const CustomerReviews: FC = () => {
  return (
    <div className="review-list">
      {/* Review item 1 */}
      <section className="review-item">
        <a
          href="https://www.google.com/maps/contrib/101665379278292988752/reviews"
          className="review-link"
          target="_blank"
        >
          <div className="review-item__img-area">
            <img
              src={Customer1}
              alt="Customer Img"
              className="review-item__img-customer"
            />
          </div>

          <p className="review-link__name">Millicent Gray</p>
        </a>

        <a
          href="https://www.google.com/maps/contrib/101665379278292988752/place/ChIJW_JG5f5bkWsRpQirTgIMoig"
          className="review-link__date"
          target="_blank"
        >
          <div className="date-icon">
            <span className="date-icon__date"> Feb 16, 2023 </span>
            <FontAwesomeIcon
              icon={faGoogle}
              className="date-icon__fontawesome"
            />
          </div>
        </a>

        <div className="review-item__content">
          Came out so quickly, was very thorough also letting me know some other
          things about the car. Fixed it up super quick. Very lovely. Very
          honest. Highly recommend !!!
        </div>
      </section>

      {/* Review item 2 */}
      <section className="review-item">
        <a
          href="https://www.google.com/maps/contrib/101665379278292988752/reviews"
          className="review-link"
          target="_blank"
        >
          <div className="review-item__img-area">
            <img
              src={Customer2}
              alt="Customer Img"
              className="review-item__img-customer"
            />
          </div>

          <p className="review-link__name">Scott Mainey</p>
        </a>

        <a
          href="https://www.google.com/maps/contrib/101665379278292988752/place/ChIJW_JG5f5bkWsRpQirTgIMoig"
          className="review-link__date"
          target="_blank"
        >
          <div className="date-icon">
            <span className="date-icon__date"> Jan 17, 2023 </span>
            <FontAwesomeIcon
              icon={faGoogle}
              className="date-icon__fontawesome"
            />
          </div>
        </a>

        <div className="review-item__content">
          Lachlan was an awesome help. Lachlan was able to diagnose the issue on
          an older vehicle and was able to fix the issue providing additional
          suggestions and advice for potential future issues. Lachlan was
          punctual and took the time to explain clearly what happened and why in
          easy to understand language. Great service and well priced. Will
          definitely use again.
        </div>
      </section>

      {/* Review item 3 */}
      <section className="review-item">
        <a
          href="https://www.google.com/maps/contrib/101665379278292988752/reviews"
          className="review-link"
          target="_blank"
        >
          <div className="review-item__img-area">
            <img
              src={Customer3}
              alt="Customer Img"
              className="review-item__img-customer"
            />
          </div>

          <p className="review-link__name">Lisa Elliott</p>
        </a>

        <a
          href="https://www.google.com/maps/contrib/101665379278292988752/place/ChIJW_JG5f5bkWsRpQirTgIMoig"
          className="review-link__date"
          target="_blank"
        >
          <div className="date-icon">
            <span className="date-icon__date"> Nov 17, 2022 </span>
            <FontAwesomeIcon
              icon={faGoogle}
              className="date-icon__fontawesome"
            />
          </div>
        </a>

        <div className="review-item__content">
          Can’t recommend Kashy enough. After years of dreading interactions
          with mechanics who proved themselves to be sexist, rude and
          unexplainably expensive time and time again, it is such a relief to
          find a reliable mechanic with excellent customer service. As a queer
          woman, it feels safe and convenient that they come to me at home,
          speak with me politely and will answer my questions with patience and
          respect. If you are a woman, LGBTQIA+ or a member of any minority,
          here’s a mechanic you can feel safe with and respected by.
        </div>
      </section>

      {/* Review item 4 */}
      <section className="review-item">
        <a
          href="https://www.google.com/maps/contrib/101665379278292988752/reviews"
          className="review-link"
          target="_blank"
        >
          <div className="review-item__img-area">
            <img
              src={Customer4}
              alt="Customer Img"
              className="review-item__img-customer"
            />
          </div>

          <p className="review-link__name">Peter Clark</p>
        </a>

        <a
          href="https://www.google.com/maps/contrib/101665379278292988752/place/ChIJW_JG5f5bkWsRpQirTgIMoig"
          className="review-link__date"
          target="_blank"
        >
          <div className="date-icon">
            <span className="date-icon__date"> Sep 22, 2022 </span>
            <FontAwesomeIcon
              icon={faGoogle}
              className="date-icon__fontawesome"
            />
          </div>
        </a>

        <div className="review-item__content">
          Yet again, Lachlan has exceeded expectations. I had dropped him an
          email regarding a small leak in the cooling system - he dropped in
          next morning to inspect between other jobs, diagnosed the issue and
          returned 2 days later with replacement seals and completed the repair
          in less than an hour, all for a very reasonable cost. Done & dusted
          inside 3 days, without leaving the garage or waiting weeks for an
          appointment. Great work and thanks again Lachlan.
        </div>
      </section>
      
    </div>
  );
};

export default CustomerReviews;
