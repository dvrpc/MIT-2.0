import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
// import data from "../utils/data.json";
import Tool from "../components/Tool";
import filterData from "../utils/filterData";
import Filter from "../components/Filter";
import Preface from "../components/Preface";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const [tools, setTools] = useState([]);
  const [namefilter, setNameFilter] = useState("");
  const [focusFilter, setFocusFilter] = useState([]);
  const [principleFilter, setPrincipleFilter] = useState([]);
  // destructure what is returned from query
  let {
    allMarkdownRemark: { edges: edges },
  } = data;
  // destructure nodes
  edges = Array.from(
    edges,
    ({ node: { frontmatter: frontmatter, html: html } }) => {
      return { ...frontmatter, html };
    }
  );

  useEffect(() => {
    const filters = {
      nameFilter: namefilter,
      focusFilter: focusFilter,
      principleFilter: principleFilter,
    };

    let oldState = edges;
    Object.keys(filters).forEach(key => {
      let filter = filters[key];
      if (typeof filter === "object" && filter.length) {
        let filterName = key.split("Filter")[0];
        oldState = filterData(oldState, filter, filterName);
      } else if (typeof filter === "string" && filter !== "") {
        oldState = filterData(oldState, filter);
      }
    });
    setTools(oldState);
  }, [namefilter, focusFilter, principleFilter]);

  return (
    <Layout>
      <Preface />
      <div className="flex flex-col px-6 py-6">
        <div>
          <div className="text-2xl pb-2 text-[#4fa3a8]">Tools:</div>
          <Filter
            namefilter={namefilter}
            setNameFilter={setNameFilter}
            setFocusFilter={setFocusFilter}
            setPrincipleFilter={setPrincipleFilter}
          />
        </div>
        <div className="overflow-auto my-4 md:my-8">
          {tools.map(tool => {
            return <Tool key={tool.name} tool={tool} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            focusAreas
            principles
          }
        }
      }
    }
  }
`;

export default IndexPage;
