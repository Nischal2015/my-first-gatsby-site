import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

function BlogPost({ data, children }) {
  return (
    <Layout pageTitle='Super Cool Blog Posts'>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export const Head = () => <Seo title='Super Cool Blog Posts' />;

export default BlogPost;
