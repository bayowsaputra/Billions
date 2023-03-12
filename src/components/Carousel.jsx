import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import RenderAii from "./img-renderer/RenderAii";
import RenderHalosis from "./img-renderer/RenderHalosis";
import RenderJakote from "./img-renderer/RenderJakote";
import RenderKI from "./img-renderer/RenderKI";
import RenderSultanCoco from "./img-renderer/RenderSultanCoco";
import Paper from "./Paper";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <Paper style="bg-[#97FFDB] py-2 box-border" data-value="1" key="1">
    <RenderKI className={"w-28 h-48 p-2"} />
  </Paper>,
  <Paper style="bg-[#FAEEFE] py-2 box-border" data-value="1" key="1">
    <RenderHalosis className={"w-28 h-48 p-2"} />
  </Paper>,
  <Paper style="bg-[#FFE459] py-2 box-border h-52 flex justify-center items-center" data-value="1" key="1">
    <RenderSultanCoco className={"w-32 h-44 p-2"} />
  </Paper>,
  <Paper style="bg-[#FFEDCE] py-2 box-border" data-value="1" key="1">
    <RenderJakote className={"w-28 h-48 p-2"} />
  </Paper>,
  <Paper style=" bg-[#5CE1E6] py-2 box-border" data-value="1" key="1">
    <RenderAii className={"w-30 h-48 p-2"} />
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
