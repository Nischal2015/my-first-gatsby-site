import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

function Seo({ title }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
}

Set.protoTypes = {
  title: PropTypes.string.isRequired,
};

export default Seo;
