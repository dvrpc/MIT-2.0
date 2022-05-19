import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-[12%]" style={{ zIndex: 1000 }}>
        <Header />
      </div>
      <div className="flex justify-center h-[86%] md:h-[84%]">{children}</div>
      <div className="h-[2%] md:h-[8%]">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
