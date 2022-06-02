import React from "react";
import { focusAreas } from "../utils/images";

const Logo = ({ focus, enableToolTip }) => {
  return (
    <div className="tooltip">
      <img
        src={focusAreas[focus]}
        alt={focus}
        className="rounded-full h-[30px] mx-1"
      />
      {enableToolTip && <span className="tooltip-text border">{focus}</span>}
    </div>
  );
};

export default Logo;
