import React from "react";
import Logo from "./Logo";
import { Link } from "gatsby";

const Tool = ({ tool }) => {
  let fileName = tool.name;
  fileName = fileName.replace(/\s/g, "").toLowerCase();

  return (
    <div className="my-4">
      <div className="flex items-center">
        <Link className="mr-[5px] text-xl" to={fileName}>
          {tool.name}
        </Link>
        {tool.focusAreas.map(focus => {
          return <Logo focus={focus} />;
        })}
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Elementum pulvinar
        etiam non quam lacus suspendisse faucibus.
      </div>
    </div>
  );
};

export default Tool;
