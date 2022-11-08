import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../../components/seo";

function BlogPost({ data, children }) {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle='Super Cool Blog Posts'>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>
        Photo Credit:{" "}
        <a
          href={data.mdx.frontmatter.hero_image_credit_link}
          target='_blank'
          rel='noopener noreferrer'
        >
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      {children}
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date
        slug
        title
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title='Super Cool Blog Posts' />;

export default BlogPost;
