import HaloS1 from "../img/Halosis/HaloS1";
import HaloS2 from "../img/Halosis/HaloS2";
import HaloS3 from "../img/Halosis/HaloS3";
const RenderHalosis = ({className}) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <HaloS1 className={className}/>
      <HaloS2 className={className}/>
      <HaloS3 className={className}/>
    </div>
  );
};

export default RenderHalosis;
