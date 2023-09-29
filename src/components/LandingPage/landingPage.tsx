import React, { FC } from "react";
import KashyIntroduction from "./kashyIntroduction";
import QuotingForm from "./quotingForm";
import CustomerReviews from "./customerReviews";
import VideoIntroPhotos from "./videoIntroPhotos";

const LandingPage: FC = () => {
  return (
    <div>
      {/* Hero Intro + Form */}
      <div className="container">
        <section className="hero">
          <div className="hero__inner">
            <KashyIntroduction />
            <QuotingForm />
          </div>
        </section>
      </div>

      {/* Have problem here, when set container class cover the review, there is a space btw 2 sides not filled color */}

      {/* Customer Reviews */}
      <section className="review">
        <CustomerReviews />
      </section>

      {/* Video Intro + Photos */}
      <div className="gallery">
        <VideoIntroPhotos />
      </div>
    </div>
  );
};

export default LandingPage;
