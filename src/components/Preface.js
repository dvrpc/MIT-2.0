import React from "react";
import ToolKit from "../images/toolkit.png";

const Preface = () => {
  return (
    <div className="flex flex-row border-b-4 border-[#4fa3a8] mx-[100px] py-12">
      <img src={ToolKit} alt="toolkit-logo" className="h-[400px]" />
      <div className="flex items-center px-48 text-lg">
        The Delaware Valley Regional Planning Commission (DVRPC) is responsible
        for long-range planning at the regional scale, but implementation of the
        plan—and much of our collective future—is based on how the region’s 352
        municipalities use their home-rule authority to influence land use,
        provide public services, protect natural and historic resources, and,
        ultimately, create the places we call home. DVRPC provides different
        forms of technical assistance to help local governments tackle
        challenges today to improve or retain the region’s competitive
        advantages for tomorrow.
        <br className="my-4"></br>
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
