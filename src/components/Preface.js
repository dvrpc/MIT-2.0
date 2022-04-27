import React from "react";
import ToolKit from "../images/toolkit.png";

const Preface = () => {
  return (
    <div className="flex flex-col w-1/3 border-r-4 border-[#4fa3a8] p-6 my-6 items-end">
      <img src={ToolKit} alt="toolkit-logo" className="w-[450px]" />
      <div className="flex items-center text-lg text-right mt-4">
        DVRPC has designed this Municipal Implementation Toolbox to serve as a
        guide for municipalities to help implement the goals of Connections
        2045, the region’s Long-Range Plan. It contains resources, case studies,
        and model/sample ordinances for more than 60 tools municipalities can
        use to implement the 5 Core Principles of the Plan in their own
        jurisdictions. Scroll down to find the tools that best fit your
        municipality’s needs, either by using the interactive word cloud, or by
        viewing the full toolkit.
      </div>
    </div>
  );
};

export default Preface;
