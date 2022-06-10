import React from "react";

const Image = ({ media }) => {
  return (
    <div className="flex flex-col">
      <img
        src={require(`../markdown-images/${media.path}`).default}
        className="object-contain object-top"
        alt={media.path}
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
