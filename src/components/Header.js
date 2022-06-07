import React from "react";
import DVRPC from "../images/dvrpc.svg";
import Banner from "../images/banner.png";

const Header = () => {
  return (
    <header
      className="flex justify-end items-center h-full p-4 bg-[#4fa3a8]"
      style={{ width: "100%" }}
    >
      <img src={Banner} alt="mit logo" className="h-[95%] mr-auto" />
      <img src={DVRPC} alt="dvrpc-logo" className="h-[45px]" />
    </header>
  );
};

export default Header;
