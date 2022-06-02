import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen overflow-hidden flex-col">
      <div className="h-[10vh] fixed w-full" style={{ zIndex: 1000 }}>
        <Header />
      </div>
      <div className="flex flex-col mt-[10vh] justify-center items-center relative">
        {children}
      </div>
      <div className="max-h-[30vh]">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
