import React from "react";
import Seo from "../components/seo";
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

export const Head = () => <Seo title='About me' />;

export default AboutPage;
