import React, { FC } from "react";
import Layout from "../components/layout";

const AboutPage: FC = () => {
  return (
    <Layout>
      <div className="container">
        <p>About Us content goes here !</p>
      </div>
    </Layout>
  );
};

export const Head: FC = () => <title>About Me</title>;

export default AboutPage;
