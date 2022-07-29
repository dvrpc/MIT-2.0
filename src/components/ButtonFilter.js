import React, { useContext } from "react";
import AppContext from "../utils/AppContext";
import { focusAreas, principles } from "../utils/icons";

const ButtonFilter = () => {
  const {
    nameFilter,
    focusFilter,
    principleFilter,
    setNameFilter,
    setFocusFilter,
    setPrincipleFilter,
  } = useContext(AppContext);

  const toggleFilter = event => {
    event.target.classList.toggle("grayscale");
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
        <input
          type="text"
          onChange={e => setNameFilter(e.target.value)}
          value={nameFilter}
          className="w-5/6 md:w-[90%] block border border-[#cccccc] p-1"
          style={{ borderRadius: "4px" }}
        />
      </div>
      <div className="flex stacked-filters mt-2 md:w-5/6">
        <div className="w-1/2">
          <div>
            <b>Filter</b> by Focus Area:
          </div>
          {Object.keys(focusAreas).map(focus => {
            return (
              <button
                id="focus"
                className={`flex my-4 items-center md:hover:filter-none ${
                  focusFilter.includes(focus) ? "" : "grayscale"
                }`}
                onClick={toggleFilter}
              >
                <img
                  alt={focus}
                  src={focusAreas[focus]}
                  id={`${focus}`}
                  className="w-[35px] rounded-full pointer-events-none"
                />
                <span
                  className={`ml-2 text-left text-[#58a7ac] pointer-events-none ${
                    focusFilter.includes(focus) ? "font-bold" : ""
                  }`}
                >
                  {focus}
                </span>
              </button>
            );
          })}
        </div>
        <div className="w-1/2">
          <div>
            <b>Filter</b> by Principle:
          </div>
          {Object.keys(principles).map(principle => {
            return (
              <button
                id="principle"
                className={`flex my-4 items-center md:hover:filter-none ${
                  principleFilter.includes(principle) ? "" : "grayscale"
                }`}
                onClick={toggleFilter}
              >
                <img
                  alt={principle}
                  src={principles[principle]}
                  id={`${principle}`}
                  className="w-[35px] rounded-full pointer-events-none"
                />
                <span
                  className={`ml-2 text-left text-[#58a7ac] pointer-events-none ${
                    principleFilter.includes(principle) ? "font-bold" : ""
                  }`}
                >
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
