import { EuiImage,   htmlIdGenerator, } from "@elastic/eui";
import React from "react";

function Gallery() {
  return (
    <EuiImage
      size="l"
      hasShadow
      allowFullScreen
      alt="Accessible image alt goes here"
      src={`https://source.unsplash.com/random?sig=${(Math.floor(Math.random()*10))}`}
    />
  );
}

export default Gallery;
