import React from "react";
import DVRPC from "../images/dvrpc.svg";
import Banner from "../images/banner.png";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className="flex justify-end items-center h-full w-full p-4 bg-[#4fa3a8]">
      <Link to="/" className="h-full mr-auto w-[25%]">
        <img src={Banner} alt="mit logo" className="h-full" />
      </Link>
      <img src={DVRPC} alt="dvrpc-logo" className="h-full p-2" />
    </header>
  );
};

export default Header;
