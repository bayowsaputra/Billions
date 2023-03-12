import Aii1 from "../img/Aii/Aii1";
import Aii2 from "../img/Aii/Aii2";
const RenderAii = ({ className }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Aii1 className={className} />
      <Aii2 className={className} />
    </div>
  );
};

export default RenderAii;
