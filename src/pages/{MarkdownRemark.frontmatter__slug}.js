import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { useBreadcrumb } from "gatsby-plugin-breadcrumb";
import BreadCrumb from "../components/BreadCrumb";
import Logo from "../components/Logo";

export default function Template({ data, location }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: frontmatter.title,
    crumbSeparator: " / ",
  });

  return (
    <Layout>
      <BreadCrumb crumbs={crumbs} />
      <div className="text-3xl">{frontmatter.title}...</div>
      <div>principles: </div>
      {frontmatter.principles.map(principle => {
        return <div className="ml-4">{principle}</div>;
      })}
      <div className="flex">
        focusAreas:
        {frontmatter.focusAreas.map(focus => {
          return <Logo focus={focus} />;
        })}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        principles
        focusAreas
      }
    }
  }
`;
