import React from "react";
import { focusAreas, principles } from "../utils/icons";

const ButtonFilter = ({
  nameFilter,
  focusFilter,
  principleFilter,
  setNameFilter,
  setFocusFilter,
  setPrincipleFilter,
}) => {
  const toggleFilter = event => {
    event.target.firstChild.classList.toggle("grayscale");
    const filterType = event.target.id;
    const filterArr = filterType === "focus" ? focusFilter : principleFilter;
    const filterElem = event.target.firstChild.id;
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

  return (
    <div className="flex flex-col">
      <div>
        <label>
          Search for tool:
          <input
            type="text"
            onChange={e => setNameFilter(e.target.value)}
            value={nameFilter}
            className="w-2/3 md:w-[90%] block border border-[#cccccc] p-1"
            style={{ borderRadius: "4px" }}
          />
        </label>
      </div>
      <div className="flex stacked-filters space-x-2 mt-2">
        <div>
          <div>Filter by focus area:</div>
          {Object.keys(focusAreas).map(focus => {
            return (
              <button
                id="focus"
                className="flex my-4 items-center grayscale hover:filter-none"
                onClick={toggleFilter}
              >
                <img
                  alt={focus}
                  src={focusAreas[focus]}
                  id={`${focus}`}
                  className="w-[35px] rounded-full pointer-events-none"
                />
                <span className="ml-2 text-left text-[#58a7ac] pointer-events-none">
                  {focus}
                </span>
              </button>
            );
          })}
        </div>
        <div>
          <div>Filter by principle:</div>
          {Object.keys(principles).map(principle => {
            return (
              <button
                id="principle"
                className="flex my-4 items-center grayscale hover:filter-none"
                onClick={toggleFilter}
              >
                <img
                  alt={principle}
                  src={principles[principle]}
                  id={`${principle}`}
                  className="w-[35px] rounded-full pointer-events-none"
                />
                <span className="ml-2 text-[#58a7ac] pointer-events-none">
                  {principle}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ButtonFilter;
