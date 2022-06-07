import React from "react";

const Icon = ({ altText, image, enableToolTip }) => {
  return (
    <div className="tooltip">
      <img src={image} alt={altText} className="rounded-full h-[30px] mx-1" />
      {enableToolTip && <span className="tooltip-text border">{altText}</span>}
    </div>
  );
};

export default Icon;
