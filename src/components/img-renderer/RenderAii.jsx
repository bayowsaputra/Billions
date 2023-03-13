import Aii1 from "../img/Aii/Aii1";
import Aii2 from "../img/Aii/Aii2";
const RenderAii = ({ className1, className2 }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Aii1 className={className1} />
      <Aii2 className={className2} />
    </div>
  );
};

export default RenderAii;
