import Button from "./Button";
import Check from "./icons/Check";
import XMark from "./icons/XMark";
import SecondaryButton from "./SecondaryButton";

const CardPackage = ({ item }) => {
  return (
    <div className="flex flex-col relative">
      {item.isRecommended && (
        <div className="flex items-center justify-center w-[298px] h-[41.75px] bg-[#4A53FF] rounded-tl-md rounded-tr-md absolute -top-9">
          <p className="text-white">Recommended</p>
        </div>
      )}
      <div
        className={`flex font-poppins flex-col items-center w-[298px] min-h-[500px] box-border rounded-[8px] border-solid border-[3.97616px] ${
          item.isRecommended ? "border-[#4A53FF]" : "border-[#2E2E3A]"
        } p-4 box-border`}
      >
        <div className="flex flex-col items-left mb-6 w-full">
          <p className="text-white">{item.type}</p>
          <p className="text-[#FEA100] font-bold text-[39.7616px]">
            {item.price}
          </p>
          <p className="text-[#C9C9EB] text-[14px]">{item.purpose}</p>
        </div>

        <div className="flex flex-col h-80 gap-3.5 ">
          {item?.features.map((e) => (
            <div className="flex flex-row gap-x-2 items-center" key={e.id}>
              {e?.status === true ? <Check /> : <XMark />}
              <p key={e.id} className="text-[#C9C9EB] text-left text-[14px]">
                {e.label}
              </p>
            </div>
          ))}
        </div>
        <SecondaryButton
          label="Contact Us"
          styles={`${item.isRecommended ? "bg-[#4A53FF]" : "bg-[#6769C2]"}`}
        />
        {/* <div> */}
        {/* <Button
          label={"Detail"}
          styles="absolute top-14 right-0 -mr-20 -mt-6 w-40 items-center justify-center flex"
        /> */}
        {/* <SecondaryButton
          label="Contact Us"
          styles={`${item.isRecommended ? "bg-[#4A53FF]" : "bg-[#6769C2]"}`}
        /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default CardPackage;
