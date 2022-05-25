import React from "react";
import { focusAreas } from "../utils/images";

const ButtonFilter = ({
  nameFilter,
  focusFilter,
  principleFilter,
  setNameFilter,
  setFocusFilter,
  setPrincipleFilter,
}) => {
  const toggleFilter = event => {
    event.target.classList.toggle("grayscale");
    const filterType = event.target.parentNode.id;
    const filterArr = filterType === "focus" ? focusFilter : principleFilter;
    const filterElem = event.target.id;
    const setFilterFunc =
      filterType === "focus" ? setFocusFilter : setPrincipleFilter;
    setFilter(filterArr, filterElem, setFilterFunc);
  };

  const setFilter = (filterArr, filterElem, setFilterFunc) => {
    if (!filterArr.includes(filterElem)) {
      return setFilterFunc([...filterArr, filterElem]);
    } else if (filterArr.includes(filterElem)) {
      const oldState = filterArr.filter(el => el !== filterElem);
      return setFilterFunc(oldState);
    }
  };

  const principles = {
    Equity: "equity",
    Resiliency: "resiliency",
    Sustainability: "sustainability",
  };
  const colors = ["plum", "green", "orange"];

  return (
    <div className="flex flex-col">
      <div>
        <label>
          Search for tool:
          <input
            type="text"
            onChange={e => setNameFilter(e.target.value)}
            value={nameFilter}
            className="w-1/2 block border border-[#cccccc] p-1"
            style={{ borderRadius: "4px" }}
          />
        </label>
      </div>
      <div className="flex flex-col">
        <div>
          <label>Filter by principle:</label>
          {/* 
            temp setup while waiting for logos from creative services
          */}
          <div className="flex my-2">
            {Object.keys(principles).map(principle => {
              return (
                <button id="principle">
                  <div
                    onClick={toggleFilter}
                    id={`${principle}`}
                    className={`rounded-full p-2 text-sm flex items-center justify-center mr-2 grayscale text-white z-0`}
                    style={{ backgroundColor: colors.pop() }}
                  >
                    {principle}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <label>Filter by focus area:</label>
          <div>
            {Object.keys(focusAreas).map(focus => {
              return (
                <button id="focus" className="flex">
                  <span>{focus}</span>
                  <img
                    src={focusAreas[focus]}
                    onClick={toggleFilter}
                    id={`${focus}`}
                    className="w-[35px] rounded-full grayscale"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonFilter;
