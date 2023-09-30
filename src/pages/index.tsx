import React, { FC } from "react";
import Layout from "../components/layout";
// import LandingPage from "../components/LandingPage/landingPage";
import IndexHomePage from "../components/content/home-page";

// Import css <- from scss -> main.scss
// Please install sass, then run cli: npm run sass if you change any styles
// Please install plug in if you do not want to use cli
import "../assets/css/main.css";

const IndexPage: FC = () => {
  return (
    <Layout>
      <IndexHomePage />
      <div className="container"></div>
    </Layout>
  );
};

export const Head: FC = () => <title>Home Page</title>;

export default IndexPage;
