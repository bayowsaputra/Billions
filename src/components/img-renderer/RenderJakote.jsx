import Jakote1 from "../img/Jakote/Jak1";
import Jakote2 from "../img/Jakote/Jak2";
const RenderJakote = ({ className1, className2 }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Jakote1 className={className1} />
      <Jakote2 className={className2} />
    </div>
  );
};

export default RenderJakote;
