import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <div className="h-[8%]">
        <Header />
      </div>
      <div className="flex justify-center h-[84%]">{children}</div>
      <div className="h-[8%]">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
