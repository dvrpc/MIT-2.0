import React from "react";

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

  const focuses = {
    Communities: "Communities",
    Economy: "Economy",
    Environment: "Environment",
    Regional_Planning: "Regional Planning",
    Transportation: "Transportation",
  };

  const colors = ["plum", "green", "orange"];
  const focusColors = ["#de6e1d", "#572065", "#799b3c", "#bc2455", "#006ba6"];

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
      <div className="flex flex-col">
        <div>
          <label>Filter by principle:</label>
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
          <div className="flex my-2">
            {Object.keys(focuses).map(focus => {
              return (
                <button id="focus">
                  <div
                    onClick={toggleFilter}
                    id={`${focuses[focus]}`}
                    className={`rounded-full p-2 text-sm flex items-center justify-center mr-2 grayscale text-white`}
                    style={{ backgroundColor: focusColors.pop() }}
                  >
                    {focus.replace("_", " ")}
                  </div>
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
