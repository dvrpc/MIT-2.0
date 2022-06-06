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

  return (
    <div className="flex flex-col">
      <div>
        <label>
          Search for tool:
          <input
            type="text"
            onChange={e => setNameFilter(e.target.value)}
            value={nameFilter}
            className="w-full block border border-[#cccccc] p-1"
            style={{ borderRadius: "4px" }}
          />
        </label>
      </div>
      <div className="flex space-x-2 mt-2">
        <div>
          <div>Filter by focus area:</div>
          {Object.keys(focusAreas).map(focus => {
            return (
              <button id="focus" className="flex my-4 items-center">
                <img
                  src={focusAreas[focus]}
                  onClick={toggleFilter}
                  id={`${focus}`}
                  className="w-[35px] rounded-full grayscale"
                />
                <span className="ml-2 text-left">{focus}</span>
              </button>
            );
          })}
        </div>
        <div>
          <div>Filter by principle:</div>
          {Object.keys(principles).map(principle => {
            return (
              <button id="principle" className="flex my-4 items-center">
                <img
                  src={principles[principle]}
                  onClick={toggleFilter}
                  id={`${principle}`}
                  className="w-[35px] rounded-full grayscale"
                />
                <span className="ml-2">{principle}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ButtonFilter;
