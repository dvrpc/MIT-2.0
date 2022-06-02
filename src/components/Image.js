import React from "react";

const Image = ({ media }) => {
  return (
    <div className="flex flex-col">
      <img
        src={require(`../images/${media.path}`).default}
        className="object-contain object-top"
      />
      {media.credit && (
        <label className="text-gray-400 block self-end">
          Credit: {media.credit}
        </label>
      )}
    </div>
  );
};

export default Image;
