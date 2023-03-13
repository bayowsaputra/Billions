import { useState } from "react";
import Carousel from "./Carousel";
import RenderAii from "./img-renderer/RenderAii";
import RenderHalosis from "./img-renderer/RenderHalosis";
import RenderJakote from "./img-renderer/RenderJakote";
import RenderKI from "./img-renderer/RenderKI";
import RenderSultanCoco from "./img-renderer/RenderSultanCoco";
import Modal from "./Modal";
import Paper from "./Paper";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openedIndex, setOpenedIndex] = useState(-1);
  const items = [
    <Paper
      style="bg-[#97FFDB] py-2 box-border w-80 md:w-96 cursor-pointer"
      data-value="1"
      key="1"
      onClick={() => {
        setIsOpen(true);
        setOpenedIndex(0);
      }}
    >
      <RenderKI className={" w-28 h-48 p-3.5 md:p-2"} />
    </Paper>,
    <Paper
      style="bg-[#FAEEFE] py-2 box-border w-80 md:w-96 cursor-pointer"
      data-value="2"
      key="2"
      onClick={() => {
        setIsOpen(true);
        setOpenedIndex(1);
      }}
    >
      <RenderHalosis className={"w-28 h-48 p-2"} />
    </Paper>,
    <Paper
      style="bg-[#FFEDCE] py-2 box-border h-52 flex justify-center items-stretch w-80 md:w-96 cursor-pointer"
      data-value="1"
      key="1"
      onClick={() => {
        setIsOpen(true);
        setOpenedIndex(2);
      }}
    >
      <RenderSultanCoco
        classNameSC1={"w-28 h-40 p-3.5 md:p-2 self-start"}
        classNameSC2={"w-28 h-40 p-3.5 md:p-2 self-center"}
        classNameSC3={"w-28 h-40 p-3.5 md:p-2 self-end"}
      />
    </Paper>,
    <Paper
      style="bg-[#FFE459] py-2 box-border w-80 md:w-96 cursor-pointer"
      data-value="3"
      key="3"
      onClick={() => {
        setIsOpen(true);
        setOpenedIndex(3);
      }}
    >
      <RenderJakote className1={"w-24 h-48 p-2"} className2={"w-24 h-44 p-2"} />
    </Paper>,
    <Paper
      style=" bg-[#5CE1E6] py-2 box-border w-80 md:w-96 cursor-pointer "
      data-value="4"
      key="4"
      onClick={() => {
        setIsOpen(true);
        setOpenedIndex(4);
      }}
    >
      <RenderAii className1={"w-28 h-40 p-2"} className2={"w-28 h-48 p-2"} />
    </Paper>,
  ];
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col items-center w-full mt-20 gap-2">
        <p className="text-white bold text-4xl font-bold">Our Portfolio</p>
        <p className="text-slate-500 text-lg">List portfolio </p>
      </div>
      <Carousel items={items} />
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        openedIndex={openedIndex}
        component={items[openedIndex]}
      />
    </div>
  );
};

export default Portfolio;
