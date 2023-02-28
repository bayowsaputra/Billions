import { PACKAGE_CONTENT } from "../constants";
import CardPackage from "./CardPackage";

const Package = () => {
  return (
    <div className="flex flex-col items-center w-full mt-20">
      <>
        <p className="text-white bold text-4xl font-bold">Our Package</p>
        <p className="text-slate-500 text-lg">List our services !</p>
      </>
      <div className="flex flex-col md:flex-row items-end justify-center gap-14 sm:gap-4 w-ful mt-24 mb-16">
        {PACKAGE_CONTENT.map((item) => (
          <CardPackage item={item} />
        ))}
      </div>
    </div>
  );
};

export default Package;
