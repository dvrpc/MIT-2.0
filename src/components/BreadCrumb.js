import { Link } from "gatsby";
import React from "react";

const BreadCrumb = ({ crumbs }) => {
  console.log(crumbs);
  return (
    <>
      {crumbs[0] && (
        <div className="absolute top-0 flex text-white text-xl p-8">
          <Link to="/" className="pr-4">
            Home
          </Link>
          <div>{">"}</div>
          <div className="pl-4">{crumbs[0].crumbLabel}</div>
        </div>
      )}
    </>
  );
};

export default BreadCrumb;
