import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/layout";
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
    allMarkdownRemark: { edges },
  } = data;
  // destructure frontmatter and html from nodes
  edges = useRef(
    Array.from(edges, ({ node: { frontmatter, html } }) => {
      return { ...frontmatter, html };
    })
  );

  useEffect(() => {
    const filters = {
      nameFilter: namefilter,
      focusFilter: focusFilter,
      principleFilter: principleFilter,
    };

    let oldState = [...edges.current];
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
  }, [namefilter, focusFilter, principleFilter, edges]);

  return (
    <Layout>
      <Preface />
      <div className="flex flex-col px-6 py-6 w-full md:w-3/4">
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
          {tools.map((tool, idx) => {
            return <Tool key={idx} tool={tool} />;
          })}
          {!tools.length && (
            <div className="text-slate-400">No tools match search...</div>
          )}
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
