import React, { useContext } from "react";
import DVRPC from "../images/dvrpc.svg";
import Banner from "../images/banner.png";
import { Link } from "gatsby";
import QuestionMark from "../images/questionmark.svg";
import AppContext from "../utils/AppContext";
import { useLocation } from "@reach/router";

const Header = () => {
  const { isVisible, setIsVisible } = useContext(AppContext);
  const location = useLocation();

  return (
    <header className="flex justify-end items-center h-full w-full p-4 bg-[#4fa3a8]">
      <div className="mr-auto h-full flex">
        <Link to="/" className="h-full">
          <img src={Banner} alt="mit logo" className="h-full" />
        </Link>
        <img
          src={QuestionMark}
          alt="question mark"
          className="h-[30px] p-2 cursor-pointer rounded-full bg-white ml-6 mt-auto"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "auto" });
            setIsVisible(true);
          }}
          style={{
            display: !isVisible && location.pathname === "/" ? "" : "none",
          }}
        />
      </div>

      <img src={DVRPC} alt="dvrpc-logo" className="h-full p-2" />
    </header>
  );
};

export default Header;
