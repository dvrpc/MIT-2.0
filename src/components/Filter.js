import React from "react";
import Select from "react-select";

const Filter = ({
  nameFilter,
  setNameFilter,
  setFocusFilter,
  setPrincipleFilter,
}) => {
  const focusAreas = [
    { value: "Communities", label: "Communities", color: "#006ba6" },
    { value: "Environment", label: "Environment", color: "#7a9c3d" },
    {
      value: "Regional Planning",
      label: "Regional Planning",
      color: "#582267",
    },
    { value: "Economy", label: "Economy", color: "#bd2556" },
    { value: "Transportation", label: "Transportation", color: "#b15817" },
  ];

  const principles = [
    { value: "Equity", label: "Equity", color: "#582267" },
    { value: "Resiliency", label: "Resiliency", color: "#4fa3a8" },
    { value: "Sustainability", label: "Sustainability", color: "#bd2556" },
  ];

  const bgStyles = {
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: "white",
      fontWeight: "bold",
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: "white",
      ":hover": {},
    }),
  };

  return (
    <>
      <label>Filter by name: </label>
      <input
        type="text"
        onChange={e => setNameFilter(e.target.value)}
        value={nameFilter}
        className="w-1/2 block border border-[#cccccc] p-1"
        style={{ borderRadius: "4px" }}
      />
      <div className="grid grid-cols-2">
        <div>
          <label>Filter by focus area:</label>
          <Select
            options={focusAreas}
            isMulti
            onChange={selected => {
              const temp = [];
              selected.map(option => temp.push(option.value));
              setFocusFilter([...temp]);
            }}
            styles={bgStyles}
          />
        </div>
        <div className="pl-2">
          <label>Filter by principle:</label>
          <Select
            options={principles}
            isMulti
            onChange={selected => {
              const temp = [];
              selected.map(option => temp.push(option.value));
              setPrincipleFilter([...temp]);
            }}
            styles={bgStyles}
          />
        </div>
      </div>
    </>
  );
};

export default Filter;
