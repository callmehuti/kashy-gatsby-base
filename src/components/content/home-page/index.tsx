import React, { FC } from "react";

// content -> home-page -> ...
import HPIntroduction from "./introduction";
import HPQuotingForm from "./quoting-form";
import HPCustomerReviews from "./customer-review";

const IndexHomePage: FC = () => {
  return (
    <div>
      {/* Hero Intro + Form */}
      <div className="container">
        <section className="hero">
          <div className="hero__inner">
            <HPIntroduction />
            <HPQuotingForm />
          </div>
        </section>
      </div>

      <section className="review">
        <HPCustomerReviews />
      </section>
    </div>
  );
};

export default IndexHomePage;
