import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const TestLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen overflow-hidden flex-col">
      <div className="h-[10vh] fixed w-full">
        <Header />
      </div>
      <div className="flex flex-col mt-[10vh] justify-center items-center relative">
        {children}
      </div>
      <div className="h-[10vh]">
        <Footer />
      </div>
    </div>
  );
};

export default TestLayout;
