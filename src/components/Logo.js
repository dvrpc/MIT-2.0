import React from "react";

const Logo = ({ image, enableToolTip }) => {
  return (
    <div className="tooltip">
      <img src={image} alt={image} className="rounded-full h-[30px] mx-1" />
      {enableToolTip && <span className="tooltip-text border">{image}</span>}
    </div>
  );
};

export default Logo;
