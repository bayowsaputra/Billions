import Button from "./Button";

const CardPackage = ({ item }) => {
  return (
    <div className="flex flex-col items-center w-72 rounded-2xl bg-black-gradient-2 p-4 static">
      <p className="text-cyan-400 text-xl font-bold ">{item.type}</p>
      <p className="text-cyan-400 text-xl font-bold mb-4">{item.price}</p>
      <div className="flex flex-col gap-2 pb-14">
        {item?.features.map((e) => (
          <p className="text-white text-center font-normal">{e}</p>
        ))}
      </div>
      <div className=" ">
        <Button label={"Contact us"} />
      </div>
    </div>
  );
};

export default CardPackage;
