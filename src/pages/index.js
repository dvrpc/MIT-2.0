import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import data from "../utils/data.json";
import Tool from "../components/Tool";
import filterData from "../utils/filterData";
import Filter from "../components/Filter";
import Preface from "../components/Preface";
import FocusAreas from "../components/FocusAreas";

const IndexPage = () => {
  const [tools, setTools] = useState([]);
  const [namefilter, setNameFilter] = useState("");
  const [focusFilter, setFocusFilter] = useState([]);
  const [principleFilter, setPrincipleFilter] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const filters = {
      nameFilter: namefilter,
      focusFilter: focusFilter,
      principleFilter: principleFilter,
    };

    let oldState = data;
    Object.keys(filters).map(key => {
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
      <div className="flex flex-col items-center">
        <Preface />
        <FocusAreas />
        <div className="w-1/2 py-12">
          <div className="text-2xl pb-6 text-[#4fa3a8]">Search for Tools:</div>
          <div>
            <Filter
              namefilter={namefilter}
              setNameFilter={setNameFilter}
              setFocusFilter={setFocusFilter}
              setPrincipleFilter={setPrincipleFilter}
            />
          </div>
          {tools.slice(page, page + 5).map(tool => {
            return <Tool key={tool.name} tool={tool} />;
          })}
          <div className="flex justify-end my-4">
            <button
              className="p-2 rounded-l-lg border hover:border-[#4fa3a8]"
              onClick={() => {
                if (page != 0) {
                  const temp = page - 5;
                  setPage(temp);
                }
              }}
            >
              Prev
            </button>
            <label className="p-2 border-y">
              Page: {page > 0 ? page / 5 + 1 : 1}
            </label>
            <button
              className="p-2 rounded-r-lg border hover:border-[#4fa3a8]"
              onClick={() => {
                if (page + 5 < tools.length) {
                  const temp = page + 5;
                  setPage(temp);
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
