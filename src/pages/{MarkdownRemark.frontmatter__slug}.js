import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div className="text-3xl">{frontmatter.title}...</div>
      <div>principles: </div>
      {frontmatter.principles.map(principle => {
        return <div className="ml-4">{principle}</div>;
      })}
      <div>focusAreas: </div>
      {frontmatter.focusAreas.map(focus => {
        return <div className="ml-4">{focus}</div>;
      })}
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
