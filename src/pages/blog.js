import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PropTypes from "prop-types";

function BlogPage({ data }) {
  return (
    <Layout pageTitle='My Blog Posts'>
      {data.allMdx.nodes.map(({ frontmatter, id }) => (
        <article key={id}>
          <h2>
            <Link to={`/blog/${frontmatter.slug}`}>{frontmatter.title}</Link>
          </h2>
          <p>Posted: {frontmatter.date}</p>
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
          slug
        }
        id
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
          slug: PropTypes.string.isRequired,
        }),
        id: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default BlogPage;
