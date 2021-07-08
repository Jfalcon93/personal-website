import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favicon from "../images/favicon.png";

const Meta = ({ description, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
          }
        }
      }
    `
  );
  return (
    <Helmet
      title={title}
      titleTemplate={`%s · ${site.siteMetadata.title}`}
      defaultTitle={site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content: description || site.siteMetadata.description,
        },
        {
          property: `og:title`,
          content: title || site.siteMetadata.title,
        },
        {
          property: "og:description",
          content: description || site.siteMetadata.description,
        },
        {
          property: "og:url",
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
      link={[
        {
          rel: "shortcut icon",
          type: "image/png",
          href: `${favicon}`,
        },
      ]}
    />
  );
};

export default Meta;
