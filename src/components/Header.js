import React from "react";
import DVRPC from "../images/dvrpc.svg";
import Banner from "../images/banner.png";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header
      className="flex justify-end items-center h-full p-4 bg-[#4fa3a8]"
      style={{ width: "100%" }}
    >
      <Link to="/" className=" mr-auto">
        <img src={Banner} className="h-[75px]" alt="mit logo" />
      </Link>
      <img src={DVRPC} alt="dvrpc-logo" className="h-[45px]" />
    </header>
  );
};

export default Header;
