import { packages } from "../constants";
import CardPackage from "./CardPackage";

const Package = () => {
  return (
    <div className="flex flex-col items-center w-full mt-20">
      <>
        <p className="text-white bold text-4xl font-bold">Our Package</p>
        <p className="text-slate-500 text-lg">List our services !</p>
      </>
      <div className="flex flex-col md:flex-row items-center justify-center gap-14 sm:gap-40 w-ful mt-16 mb-16">
        {packages.map((item) => (
          <CardPackage item={item} />
        ))}
      </div>
    </div>
  );
};

export default Package;
