import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden flex-col">
      <div className="h-[10vh] fixed w-full" style={{ zIndex: 1000 }}>
        <Header />
      </div>
      <div className="flex flex-col mt-[10vh] min-h-[80vh] justify-center items-center">
        {children}
      </div>
      <div className="min-h-[30vh]" style={{ zIndex: 1000 }}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
