import React, { useContext } from "react";
import DVRPC from "../images/dvrpc.svg";
import MobileBanner from "../images/mobilebanner.png";
import DesktopBanner from "../images/desktopbanner.png";
import { Link } from "gatsby";
import QuestionMark from "../images/questionmark.svg";
import AppContext from "../utils/AppContext";
import { useLocation } from "@reach/router";

const Header = () => {
  const { isVisible, setIsVisible } = useContext(AppContext);
  const location = useLocation();

  return (
    <header className="flex justify-end items-center h-full w-full p-4 md:p-2 bg-[#4fa3a8]">
      <div className="mr-auto h-full flex">
        <Link to="/" className="h-full flex items-center">
          <img
            src={MobileBanner}
            alt="mit logo"
            className="md:hidden block h-[50px] w-full"
          />
          <img
            src={DesktopBanner}
            alt="mit logo"
            className="hidden md:block h-[80px] w-full"
          />
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
            display:
              !isVisible &&
              (location.pathname === "/" || location.pathname === "/MIT/")
                ? ""
                : "none",
          }}
        />
      </div>
      <a href="https://www.dvrpc.org" className="h-full flex items-center">
        <img
          src={DVRPC}
          alt="dvrpc-logo"
          className="h-[40px] md:h-[70px] md:p-1"
        />
      </a>
    </header>
  );
};

export default Header;
