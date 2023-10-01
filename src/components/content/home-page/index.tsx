import React, { FC } from "react";

// content -> home-page -> ...
import HPIntroduction from "./introduction";
import HPQuotingForm from "./quoting-form";
import HPCustomerReviews from "./customer-review";
import HPMedia from "./media";
import HPSubscribePartner from "./subscribe-partner";

const IndexHomePage: FC = () => {
  return (
    <div className="home-page-content">
      {/* Hero Intro + Form */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <HPIntroduction />
            <HPQuotingForm />
          </div>
        </div>
      </section>

      <section className="review">
        <HPCustomerReviews />
      </section>

      <div className="media">
        <div className="container">
          <HPMedia />
        </div>
      </div>

      <div className="subscribe-cooppartner">
        <div className="container">
          <HPSubscribePartner />
        </div>
      </div>
    </div>
  );
};

export default IndexHomePage;
