import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
