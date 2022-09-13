import React from "react";
import Icon from "./Icon";
import { Link } from "gatsby";
import { focusAreas, principles } from "../utils/icons";

const Tool = ({ tool }) => {
  let fileName = tool.title;
  fileName = fileName.replace(/\s|[()]|\/|\,/g, "").toLowerCase();

  return (
    <div className="my-4">
      <div className="flex flex-col md:flex-row">
        <Link className="md:text-xl preface-bold mr-2 tool-link" to={fileName}>
          {tool.title}
        </Link>
        <div>
          {tool.focusAreas.map(focus => {
            return <Icon image={focusAreas[focus]} altText={focus} />;
          })}
          {tool.principles.map(principle => {
            return <Icon image={principles[principle]} altText={principle} />;
          })}
        </div>
      </div>
      {tool.html ? (
        <div
          className="md:w-2/3"
          dangerouslySetInnerHTML={{ __html: tool.html.slice(0, 249) + "..." }}
        />
      ) : (
        <div className="md:w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
          pulvinar etiam non quam lacus suspendisse faucibus.
        </div>
      )}
    </div>
  );
};

export default Tool;
