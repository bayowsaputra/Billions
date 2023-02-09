import Button from "./Button";

const CardPackage = ({ item }) => {
  return (
    <div className="flex font-poppins flex-col items-center w-[266px] h-[448px] rounded-2xl bg-black-gradient-2 p-4">
      <div className="flex flex-col items-center mb-6">
        <p className="text-cyan-400 text-xl font-bold text-gradient">
          {item.type}
        </p>
        <p className="text-cyan-400 text-xl font-bold  text-gradient">
          {item.price}
        </p>
      </div>

      <div className="flex flex-col gap-3.5">
        {item?.features.map((e) => (
          <p key={e.id} className="text-white text-center text-[14px]">
            {e}
          </p>
        ))}
      </div>
      <div className="relative">
        <Button
          label={"Contact us"}
          styles="absolute top-14 right-0 -mr-20 -mt-6 w-40 items-center justify-center flex"
        />
      </div>
    </div>
  );
};

export default CardPackage;
