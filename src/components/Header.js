import React from "react";
import DVRPC from "../images/dvrpc.svg";

const Header = () => {
  return (
    <header
      className="flex justify-end h-full p-4 bg-[#4fa3a8]"
      style={{ width: "100%" }}
    >
      <img src={DVRPC} alt="dvrpc-logo" className="h-[45px]" />
    </header>
  );
};

export default Header;
