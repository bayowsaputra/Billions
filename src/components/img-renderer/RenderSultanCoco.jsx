import SC1 from "../img/SultanCo/Sultan1";
import SC2 from "../img/SultanCo/Sultan2";
import SC3 from "../img/SultanCo/Sultan3";
const RenderSultanCoco = ({ className }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <SC1 className={className} />
      <SC2 className={className} />
      <SC3 className={className} />
    </div>
  );
};

export default RenderSultanCoco;
