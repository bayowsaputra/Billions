import SC1 from "../img/SultanCo/Sultan1";
import SC2 from "../img/SultanCo/Sultan2";
import SC3 from "../img/SultanCo/Sultan3";
const RenderSultanCoco = ({ classNameSC1, classNameSC2, classNameSC3 }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <SC1 className={classNameSC1} />
      <SC2 className={classNameSC2} />
      <SC3 className={classNameSC3} />
    </div>
  );
};

export default RenderSultanCoco;
