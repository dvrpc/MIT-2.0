import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import Tool from "../components/Tool";
import filterData from "../utils/filterData";
import ButtonFilter from "../components/ButtonFilter";
import Preface from "../components/Preface";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const [tools, setTools] = useState([]);
  const [namefilter, setNameFilter] = useState("");
  const [focusFilter, setFocusFilter] = useState([]);
  const [principleFilter, setPrincipleFilter] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

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
      <Preface isVisible={isVisible} setIsVisible={setIsVisible} />
      <div className="flex justify-center items-start w-4/5">
        <div className="flex flex-col w-full min-h-[80vh] md:flex-row pt-[4vh]">
          <div
            className="p-6 pr-0"
            style={{ position: !isVisible ? "fixed" : "absolute" }}
          >
            <div className="text-2xl pb-2 text-[#4fa3a8]">Tools:</div>
            <ButtonFilter
              namefilter={namefilter}
              focusFilter={focusFilter}
              principleFilter={principleFilter}
              setNameFilter={setNameFilter}
              setFocusFilter={setFocusFilter}
              setPrincipleFilter={setPrincipleFilter}
            />
          </div>
          <div className="w-3/4 ml-[33%] p-6">
            {tools.map((tool, idx) => {
              return <Tool key={idx} tool={tool} />;
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
