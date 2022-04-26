import React from "react";
import images from "../utils/images";

const Logo = ({ focus }) => {
  return (
    <img
      src={images[focus]}
      alt={focus}
      className="rounded-full h-[30px] my-[2px] ml-4"
    />
  );
};

export default Logo;
