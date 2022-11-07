import React from "react";
import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <p>
        Hi there! I am proud creator of this website which I created using
        Gatsby.
      </p>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
