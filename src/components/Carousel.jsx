import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import RenderKI from "./img-renderer/RenderKI";
import Paper from "./Paper";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <Paper color=" bg-[#97FFDB] " data-value="1" key="1">
    <RenderKI />
  </Paper>,
  <Paper color=" bg-[#FAEEFE] " data-value="1" key="1">
    2
  </Paper>,
  <Paper color=" bg-[#FFEDCE] " data-value="1" key="1">
    3
  </Paper>,
  <Paper color=" bg-[#FFE459] " data-value="1" key="1">
    4
  </Paper>,
  <Paper color="  bg-[#5CE1E6] " data-value="1" key="1">
    5
  </Paper>,
];

const Carousel = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    responsive={responsive}
    controlsStrategy="alternate"
    infinite={true}
  />
);

export default Carousel;
