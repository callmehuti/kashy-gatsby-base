import React, { FC } from "react";
import Layout from "../components/layout";

const ContacUs: FC = () => {
  return (
    <Layout>
      <div className="container">
        <p>Blog Page content goes here !</p>
      </div>
    </Layout>
  );
};

export const Head: FC = () => <title>Blog Page</title>;

export default ContacUs;
