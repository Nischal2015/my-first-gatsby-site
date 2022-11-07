import * as React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle='Welcome to my Gatsby site!'>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
