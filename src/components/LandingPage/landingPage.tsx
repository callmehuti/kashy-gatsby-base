import React, { FC } from "react";
import KashyIntroduction from "./kashyIntroduction";
import QuotingForm from "./quotingForm";

const LandingPage: FC = () => {
  return (
    <div className="hero">
      <div className="hero__inner">
        <KashyIntroduction />
        <QuotingForm />
      </div>
    </div>
  );
};

export default LandingPage;
