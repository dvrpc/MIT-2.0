import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Image = ({ media }) => {
  return (
    <div className="flex flex-col">
      <Zoom>
        <img
          src={require(`../markdown-images/${media.path}`).default}
          className="object-contain object-top min-w-full"
          alt={media.path}
        />
      </Zoom>
      {media.credit && (
        <label className="text-gray-400 block self-end">
          Credit: {media.credit}
        </label>
      )}
    </div>
  );
};

export default Image;
