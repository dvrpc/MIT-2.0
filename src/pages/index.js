import React, { useContext, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import Tool from "../components/Tool";
import filterData from "../utils/filterData";
import ButtonFilter from "../components/ButtonFilter";
import Preface from "../components/Preface";
import { graphql } from "gatsby";
import AppContext from "../utils/AppContext";

const IndexPage = ({ data }) => {
  const {
    isVisible,
    setIsVisible,
    tools,
    setTools,
    nameFilter,
    focusFilter,
    principleFilter,
  } = useContext(AppContext);
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
      nameFilter: nameFilter,
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
  }, [nameFilter, focusFilter, principleFilter, setTools, edges]);

  return (
    <Layout>
      <Preface isVisible={isVisible} setIsVisible={setIsVisible} />
      <div className="flex justify-center items-start min-w-full md:min-w-0 md:w-4/5 md:mt-6 stacked-filters-body">
        <div className="flex md:flex-row flex-col min-w-full min-h-[80vh]">
          <div
            className="px-6 md:px-0 md:w-[25%] mobile-filters"
            style={{ position: !isVisible ? "fixed" : "absolute" }}
          >
            <div className="text-2xl pb-2 preface-bold">Search Tools:</div>
            <ButtonFilter />
            <div className="text-gray-500">Search results: {tools.length}</div>
          </div>
          <div className="md:ml-[30%] w-full p-6 pt-0">
            {tools.map(tool => {
              return <Tool key={tool.title} tool={tool} />;
            })}
            {!tools.length && (
              <div className="text-slate-400">No tools match search...</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
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
