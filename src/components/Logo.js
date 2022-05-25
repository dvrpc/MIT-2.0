import React from "react";
import { focusAreas } from "../utils/images";

const Logo = ({ focus }) => {
  return (
    <img
      src={focusAreas[focus]}
      alt={focus}
      className="rounded-full h-[30px] mx-1"
    />
  );
};

export default Logo;
