import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import OgImage from "../images/mit-og-img.png";
import { useLocation } from "@reach/router";

const Seo = ({ lang }) => {
  const location = useLocation();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={site.siteMetadata.title}
      meta={[
        { name: "description", content: site.siteMetadata.description },
        {
          name: "keywords",
          content:
            "Municipal Implementation Toolbox, Connections 2050 Plan for Greater Philadelphia, Long-Range Plan, future growth, DVRPC, Delaware Valley Regional Planning Commission, Regional Planning",
        },
      ]}
    >
      <meta property="og:title" content="Municipal Implementation Toolbox" />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${site?.siteMetadata?.siteUrl}${location.pathname}`}
      />
      <meta property="og:image" content={OgImage} />
      <meta
        property="og:description"
        content="Municipal Implementation Toolbox serves as a way to look into the Connections 2050 plan which is a collective vision across municipal and county boundaries as to how the region should look and function in the future."
      />
    </Helmet>
  );
};

Seo.defaultProps = {
  lang: "en",
};

export default Seo;
