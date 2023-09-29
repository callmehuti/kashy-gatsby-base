import React, { FC } from "react";
import Layout from "../components/layout";
import AboutUsPage from "../components/AboutUsPage/aboutusPage";

const AboutPage: FC = () => {
  return (
    <Layout>
      <div className="container">
        <AboutUsPage />
      </div>
    </Layout>
  );
};

export const Head: FC = () => <title>About Me</title>;

export default AboutPage;
