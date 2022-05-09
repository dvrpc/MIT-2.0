import React from "react";
import images from "../utils/images";

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
      const oldState = filterArr.filter(el => el != filterElem);
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
    <div className="grid grid-cols-2">
      <div>
        <label>Filter by name: </label>
        <input
          type="text"
          onChange={e => setNameFilter(e.target.value)}
          value={nameFilter}
          className="w-5/6 block border border-[#cccccc] p-1"
          style={{ borderRadius: "4px" }}
        />
      </div>
      <div className="flex">
        <div>
          <label>Filter by principle:</label>
          <div className="flex my-2">
            {Object.keys(principles).map(principle => {
              return (
                <button id="principle">
                  <div
                    onClick={toggleFilter}
                    id={`${principle}`}
                    className={`h-[35px] w-[35px] rounded-full flex items-center justify-center mr-2 grayscale text-white`}
                    style={{ backgroundColor: colors.pop() }}
                  >
                    {principle.charAt(0).toUpperCase()}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        <div className="ml-12">
          <label>Filter by focus area:</label>
          <div className="flex my-2">
            {Object.keys(images).map(image => {
              return (
                <button id="focus">
                  <img
                    src={images[image]}
                    onClick={toggleFilter}
                    id={`${image}`}
                    className="h-[35px] rounded-full mr-2 grayscale"
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
