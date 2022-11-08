import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import PropTypes from "prop-types";

function BlogPage({ data }) {
  return (
    <Layout pageTitle='My Blog Posts'>
      {data.allMdx.nodes.map(({ frontmatter, excerpt, id }) => (
        <article key={id}>
          <h2>{frontmatter.title}</h2>
          <p>Posted: {frontmatter.date}</p>
          <p>{excerpt}</p>
        </article>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title='My Blog Posts' />;

BlogPage.propTypes = {
  allMdx: PropTypes.shape({
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        frontmatter: PropTypes.shape({
          date: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        }),
        excerpt: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default BlogPage;
