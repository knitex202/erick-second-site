import React from "react";
import { Images } from "../data";

function Gallery() {
  return (
    <>
      {Images.map((image, index) => {
        return (
          <img
            key={index}
            src={image.picture}
            alt={image.alt}
            className="h-full w-full object-cover"
          />
        );
      })}
    </>
  );
}

export default Gallery;
