import React, { FC } from "react";
import Layout from "../components/layout";

// Import css <- from scss -> main.scss
// Please install sass, then run cli: npm run sass if you change any styles
// Please install plug in if you do not want to use cli
import "../assets/css/main.css";


const IndexPage: FC = () => {
  return (
    <Layout>
      <div className="container">
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </div>
    </Layout>
  );
};

export const Head: FC = () => <title>Home Page</title>;

export default IndexPage;
