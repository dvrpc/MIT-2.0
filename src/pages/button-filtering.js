import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import data from "../utils/data.json";
import Tool from "../components/Tool";
import filterData from "../utils/filterData";
import Preface from "../components/Preface";
import ButtonFilter from "../components/ButtonFilter";

const IndexPage = () => {
  const [tools, setTools] = useState([]);
  const [namefilter, setNameFilter] = useState("");
  const [focusFilter, setFocusFilter] = useState([]);
  const [principleFilter, setPrincipleFilter] = useState([]);

  useEffect(() => {
    const filters = {
      nameFilter: namefilter,
      focusFilter: focusFilter,
      principleFilter: principleFilter,
    };

    let oldState = data;
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
          <div className="text-2xl pb-2 text-[#4fa3a8]">Search for Tools:</div>
          <ButtonFilter
            namefilter={namefilter}
            focusFilter={focusFilter}
            principleFilter={principleFilter}
            setNameFilter={setNameFilter}
            setFocusFilter={setFocusFilter}
            setPrincipleFilter={setPrincipleFilter}
          />
        </div>
        <div className="overflow-auto my-8">
          {tools.map(tool => {
            return <Tool key={tool.name} tool={tool} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
