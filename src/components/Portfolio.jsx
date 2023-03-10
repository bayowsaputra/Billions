import Carousel from "./Carousel";

const Portfolio = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col items-center w-full mt-20 gap-2">
        <p className="text-white bold text-4xl font-bold">Our Portfolio</p>
        <p className="text-slate-500 text-lg">List portfolio </p>
      </div>
      <Carousel />
    </div>
  );
};

export default Portfolio;
