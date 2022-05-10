import React from "react";
import images from "../utils/images";

const Logo = ({ focus }) => {
  return (
    <img
      src={images[focus]}
      alt={focus}
      className="rounded-full h-[30px] mx-1"
    />
  );
};

export default Logo;
