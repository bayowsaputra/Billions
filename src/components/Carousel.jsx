import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Carousel = ({ items }) => (
  <AliceCarousel
    // autoPlay
    autoPlayStrategy="none"
    autoPlayInterval={2000}
    animationDuration={2000}
    animationType="fadeout"
    mouseTracking
    items={items}
    responsive={responsive}
    controlsStrategy="alternate"
    infinite={true}
  />
);

export default Carousel;
