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
            height={600}
            width={600}
          />
        );
      })}
    </>
  );
}

export default Gallery;
